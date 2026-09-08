# Publish and maintain Alchemy Atlas

This guide uses the final repository name, `little-alchemy-2-recipe-atlas`. The application is titled **Mario's Alchemy Recipe Book**. It is a static, self-contained HTML page with no build step.

## Project addresses

- [Source repository](https://github.com/supermjr/little-alchemy-2-recipe-atlas)
- [Live demo](https://supermjr.github.io/little-alchemy-2-recipe-atlas/)
- [Bacon example](https://supermjr.github.io/little-alchemy-2-recipe-atlas/#item-220)
- [Pages settings](https://github.com/supermjr/little-alchemy-2-recipe-atlas/settings/pages)
- [Deployment history](https://github.com/supermjr/little-alchemy-2-recipe-atlas/actions)

Check deployment history and **Settings → Pages → Visit site** for the current publishing status. A successful deployment and a browser check of the live address are separate checks.

## Publishing configuration

In **Settings → Pages → Build and deployment**, use:

| Setting | Value |
|---|---|
| Source | Deploy from a branch |
| Branch | `main` |
| Folder | `/(root)` |

Save changes only when the configuration needs updating. GitHub manages the Pages deployment; this project needs no custom workflow, build command, API key, or custom domain. Public repositories support Pages on GitHub Free. Follow GitHub's [publishing-source documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Keep this folder structure

```text
.nojekyll
.gitignore
index.html
README.md
PUBLISHING.md
LICENSING.md
SOURCE_LICENSE.txt
THIRD_PARTY_NOTICES.md
data/
  catalog.json
  validation_report.json
tests/
  validate.cjs
  browser-test-report.json
```

`index.html` and the empty `.nojekyll` file belong directly in the root. Folder names are lowercase. Do not upload a ZIP archive as the website or put an extra enclosing folder above `index.html`.

### Repair an upload that flattened the folders

Open the repository and press `.` to launch GitHub's browser editor. In its Explorer, create root-level `data` and `tests` folders, then move the four supporting files into the paths shown above. Leave `index.html` and the documentation at the root. Review and stage the changes in Source Control, enter a commit message, and choose **Commit & Push**. Commit before closing the editor. See [GitHub's web-editor guide](https://docs.github.com/en/codespaces/the-githubdev-web-based-editor).

The separate `data/` files are development exports, not runtime dependencies. A misplaced data file does not change the recipes embedded in `index.html`, but it does break the documented structure and validation command.

## Update the site

Edit or replace only the intended files on `main`, review the changes, and commit. The configured Pages deployment republishes that branch. Preserve existing changes when updating files rather than replacing the repository with an older package.

Update `data/catalog.json` alongside `index.html` when recipe data changes. Editing the JSON alone does **not** update the site: there is no automatic regeneration step.

From a local checkout with Node.js installed, run:

```sh
node tests/validate.cjs
```

The script checks catalog counts, ingredient references, internal links, and selected routes. It does not test the Android game. The committed JSON test reports are historical snapshots, not continuously running checks.

## Verify a deployment

1. Confirm the Pages workflow for the intended commit succeeded in **Actions**.
2. Open the live demo, not the GitHub code view. Search for `bacon`; name-only search should show one item.
3. Expand Bacon and choose **Show how to make it from the start**. Its 12-step route should end with **Fire + Pig → Bacon**.
4. Follow the Pig ingredient link and open the Bacon deep link in a new tab.
5. Check the home page and expanded recipe on an Android device, then bookmark the live address.

## Repository About settings

These are GitHub repository settings, not values read from README files. On the repository's Code tab, use the gear beside **About** to set the website and topics, then save.

Website:

```text
https://supermjr.github.io/little-alchemy-2-recipe-atlas/
```

Suggested topics, entered individually:

```text
little-alchemy-2
little-alchemy
recipes
recipe-finder
walkthrough
cheats
crafting
```

Keep the existing description:

> An unofficial Little Alchemy 2 recipe explorer: 720 items, searchable combinations, and step-by-step crafting paths from the four starting elements.

See [GitHub's topic guide](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/classifying-your-repository-with-topics). A GitHub connection that can edit files does not necessarily expose repository administration settings.

## Troubleshooting

**404 or old content:** Check the final repository name in the address, the publishing branch, the root-level `index.html`, and the workflow for the latest commit. Reload without the browser cache after deployment succeeds.

**Only the README appears:** Confirm `index.html` is in the selected publishing folder, not nested inside another folder.

**Missing `.nojekyll`:** Create an empty root-level file with that exact name, including the leading period and no `.txt` extension.

**Validation cannot find files:** Confirm `data/catalog.json` and `tests/validate.cjs` use the exact lowercase paths above, and run the command from the repository root.

## Privacy and licensing

The repository and demo are public. The page uses Mario's first name; avoid publishing additional personal information, credentials, or environment files. The `.gitignore` file helps exclude common local files from future Git commits, but it does not remove anything already committed.

Preserve the upstream MIT notice in `SOURCE_LICENSE.txt` and its embedded copy in `index.html`. The project does not currently declare a blanket open-source license for the original code. See [LICENSING.md](LICENSING.md) and [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
