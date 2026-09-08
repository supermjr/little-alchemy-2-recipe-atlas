# Theodore's Alchemy Recipe Book

An unofficial, self-contained **Little Alchemy 2** recipe companion. Search the catalog, inspect alternative recipes, and follow ingredients back to the starting elements.

## What is included

- 720 catalog items, 3,452 distinct ingredient-pair → result recipes, and 3,308 different input pairs in the September 7, 2026 snapshot.
- Search by item name, with an option to include recipe ingredients.
- Alphabetical navigation and links between ingredients.
- Expandable, dependency-ordered routes, including a Bacon example.
- Explicit handling of Time as a discovery milestone rather than a mixing recipe.
- Responsive styling, keyboard-accessible controls, and print styles.

**Scope:** the 720-item base game, excluding Myths and Monsters. The recipes are a community-source snapshot, not a live extraction from an Android installation. Structural validation does not establish that every recipe works in every game version. Suggested routes are valid against the included dataset, not a proof of the smallest possible number of moves.

## Open locally

Open `index.html` in a modern browser. No installation, web server, package manager, or build command is required. The catalog, styles, JavaScript, and suggested-route data are embedded in this file. External source links require an internet connection.

## Publish with GitHub Pages

See [PUBLISHING.md](PUBLISHING.md) for the complete browser-only procedure.

Recommended configuration:

| Setting | Value |
|---|---|
| Repository | `supermjr/little-alchemy-recipe-book` |
| Visibility | Public |
| Pages source | Deploy from a branch |
| Branch | `main`, or the actual default branch containing the uploaded files |
| Folder | `/(root)` |

After GitHub Pages has been enabled and the first deployment succeeds, the expected default demo address is:

`https://supermjr.github.io/little-alchemy-recipe-book/`

The corresponding Bacon deep link is:

`https://supermjr.github.io/little-alchemy-recipe-book/#item-220`

These are configuration targets, not evidence that deployment has already occurred. No custom domain or custom Actions workflow is required. `.nojekyll` tells GitHub Pages to serve the prepared static files without Jekyll processing.

## Repository contents

| Path | Purpose |
|---|---|
| `index.html` | Complete website; all runtime code and data are embedded. |
| `.nojekyll` | Empty file disabling Jekyll processing for branch-based publishing. |
| `README.md` | Project overview and local-use instructions. |
| `PUBLISHING.md` | Initial publishing, verification, updates, and troubleshooting. |
| `SOURCE_LICENSE.txt` | Preserved MIT notice for the upstream recipe dataset. |
| `THIRD_PARTY_NOTICES.md` | Attribution and qualification of third-party content. |
| `data/catalog.json` | Structured items, recipes, ingredient pairs, selected routes, and build sequence for future visualization work. |
| `data/validation_report.json` | Original catalog structural-validation report. |
| `tests/validate.cjs` | Dependency-free Node.js checks for the catalog, links, and selected routes. |
| `tests/browser-test-report.json` | Desktop/mobile in-memory browser checks and their deployment-testing limitations. |
| `.gitignore` | Excludes common local temporary files and environment files from Git. |

The website does not fetch the separate `data/` files at runtime. They are retained for development and future visualizations. Editing them alone does **not** update `index.html`.

## Validation

With Node.js installed, from this repository directory run:

```sh
node tests/validate.cjs
```

The checks verify item and recipe counts, reference integrity, uniqueness of HTML IDs, internal links, correspondence between the website's selected routes and the JSON data, and the absence of cycles in those selected routes. They do not contact the game.

## Updating the live site

Update `index.html` on the configured publishing branch and commit the change. GitHub Pages deploys that branch's contents again. Update `data/catalog.json` alongside the page when the underlying recipe data changes; the page is not automatically regenerated from that file.

## Privacy and attribution

The application contains no analytics, advertising, external script dependencies, login, or user-input submission. Hosting providers can still process ordinary web requests under their own privacy policies. The title contains Theodore's first name; do not publish additional personal information unintentionally.

This is an unofficial fan-made companion and is not affiliated with or endorsed by the developers of Little Alchemy 2. No original game artwork or descriptive encyclopedia prose is included.

Recipe data is adapted from [mrkvon/alchemy](https://github.com/mrkvon/alchemy/blob/main/src/alchemy.json). Preserve the included upstream MIT notice. See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

**Licensing status of this project:** this package does not select a new license for the original interface and project-specific code on the owner's behalf. `SOURCE_LICENSE.txt` is the upstream dataset's notice, not a blanket license for the entire project.
