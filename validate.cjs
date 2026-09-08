'use strict';
/**
 * Dependency-free structural checks. Run: node tests/validate.cjs
 * No network access; this is not a test against the running Android game.
 */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

try {
  const root = path.resolve(__dirname, '..');
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  const catalog = JSON.parse(fs.readFileSync(path.join(root, 'data/catalog.json'), 'utf8'));
  const match = html.match(/const DATA=(\{.*?\});\s*const cards=/s);
  assert(match, 'Embedded selected-route data was not found.');
  const routes = JSON.parse(match[1]);
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(m => m[1]);
  const idSet = new Set(ids);
  assert.equal(ids.length, idSet.size, 'Duplicate HTML IDs.');
  for (const m of html.matchAll(/href="#([^"]+)"/g)) {
    assert(idSet.has(m[1]), `Broken internal link: #${m[1]}`);
  }
  assert.equal(catalog.items.length, 720);
  assert.equal(catalog.recipes.length, 3452);
  assert.equal(catalog.combinations.length, 3308);
  assert.equal(Object.keys(routes).length, 720);
  assert.equal([...html.matchAll(/<details class="item" /g)].length, 720);

  const recipeSet = new Set(catalog.recipes.map(r =>
    [r.ingredient_1_id, r.ingredient_2_id].sort((a,b) => a-b).join('+') + '>' + r.result_id));
  assert.equal(recipeSet.size, 3452, 'Duplicate recipe triples.');
  const itemIds = new Set(catalog.items.map(item => String(item.item_id)));
  const starters = new Set(catalog.starting_item_ids.map(String));
  assert.equal(itemIds.size, 720);
  assert.deepEqual([...starters].sort(), ['1','2','3','4']);
  for (const recipe of catalog.recipes) {
    assert(Number.isInteger(recipe.ingredient_1_id) && Number.isInteger(recipe.ingredient_2_id));
    assert(itemIds.has(String(recipe.result_id)));
    for (const ingredient of [recipe.ingredient_1_id, recipe.ingredient_2_id]) assert(itemIds.has(String(ingredient)));
  }
  for (const item of catalog.items) {
    const id = String(item.item_id), route = routes[id];
    assert(route, `Missing route record for ${item.name}`);
    assert(idSet.has('item-' + id));
    assert.equal(route.n, item.name);
    assert.deepEqual(route.p, item.selected_ingredient_ids);
    if (route.p.length) {
      assert(recipeSet.has([...route.p].sort((a,b) => a-b).join('+') + '>' + id));
    }
  }

  function walkRoute(target) {
    const visited = new Set(starters), active = new Set(), steps = [];
    let needsTime = false;
    function visit(id) {
      id = String(id);
      if (visited.has(id)) return;
      assert(!active.has(id), `Cycle detected at ${id}`);
      const record = routes[id];
      assert(record, `Unknown ingredient ${id}`);
      if (record.time) {
        assert.equal(record.n, 'Time');
        needsTime = true;
        visited.add(id);
        return;
      }
      assert.equal(record.p.length, 2, `Non-starter ${id} has no recipe`);
      active.add(id);
      record.p.forEach(visit);
      active.delete(id);
      visited.add(id);
      steps.push([...record.p, Number(id)]);
    }
    visit(target);
    return { steps, needsTime };
  }
  for (const id of Object.keys(routes)) walkRoute(id);
  const bacon = walkRoute('220');
  assert.equal(bacon.needsTime, false);
  assert.equal(bacon.steps.length, 12);
  assert.deepEqual(bacon.steps.at(-1), [2,165,220]);
  assert.equal(fs.readFileSync(path.join(root, '.nojekyll')).length, 0);
  assert(!/<script[^>]+src=/i.test(html), 'Unexpected external script dependency.');
  console.log('PASS: 720 items, 3,452 recipes, 3,308 input pairs, valid internal links,');
  console.log('      matching embedded route data, acyclic selected routes, and 12-step Bacon route.');
} catch (error) {
  console.error('FAIL:', error.message);
  process.exitCode = 1;
}
