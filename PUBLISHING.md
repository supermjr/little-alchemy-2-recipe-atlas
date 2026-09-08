# Publish the recipe book on GitHub Pages

This package is ready to upload. Creating the repository and enabling Pages still require actions in your GitHub account. The preparation of this package did not create a repository or deploy a website.

## 1. Create a separate public repository

Open the prefilled repository form:

[Create little-alchemy-recipe-book](https://github.com/new?owner=supermjr&name=little-alchemy-recipe-book&description=An+unofficial+Little+Alchemy+2+recipe+book+with+search+and+step-by-step+ingredient+routes&visibility=public)

Use these settings:

- **Owner:** `supermjr`
- **Repository name:** `little-alchemy-recipe-book`
- **Visibility:** Public
- Leave GitHub's initial README, `.gitignore`, and license options unselected: this package already includes the project files and the source-data license notice.

Click **Create repository**. This project should be separate from the existing `enviro` repository.

Public visibility means other people can view the uploaded files. A public repository supports GitHub Pages on GitHub Free. The website is also public, including Theodore's first name in the title. Review `index.html` before uploading.

## 2. Upload the extracted files, not the ZIP

Extract `little-alchemy-recipe-book-github.zip` on your computer. Open the resulting `little-alchemy-recipe-book` folder.

In the empty GitHub repository, choose **uploading an existing file**. In a repository that already contains a README, use **Add file → Upload files** instead.

Drag the **contents** of the extracted folder into the upload area. Include `index.html`, `.nojekyll`, the Markdown files, `SOURCE_LICENSE.txt`, `.gitignore`, and the `data` and `tests` folders. The files are all below GitHub's 25 MiB browser-upload limit.

**Important:** `index.html` must appear directly in the repository root. Do not upload the enclosing `little-alchemy-recipe-book` folder as an extra nesting level, and do not upload the ZIP archive as the website.

Use a commit message such as:

`Publish Alchemy recipe book`

Save the upload to the default branch. For a new repository this is normally `main`; check the branch selector. If GitHub instead creates a pull request, merge that pull request so the files are present on the publishing branch.

Confirm that the repository's top-level file list includes `index.html` and `.nojekyll`.

## 3. Enable Pages

Open the repository's **Settings → Pages**.

For the recommended repository name, that settings page is:

`https://github.com/supermjr/little-alchemy-recipe-book/settings/pages`

Under **Build and deployment**, select:

| Setting | Value |
|---|---|
| Source | **Deploy from a branch** |
| Branch | **main** (or the actual branch containing the files) |
| Folder | **/(root)** |

Click **Save**. GitHub manages the deployment automatically; no custom workflow file, build command, API key, custom domain, or paid hosting subscription is needed for this public static site.

After the deployment succeeds, **Settings → Pages → Visit site** is the authoritative location of the live site.

Expected default addresses after successful deployment:

- Source repository: `https://github.com/supermjr/little-alchemy-recipe-book`
- Live recipe book: `https://supermjr.github.io/little-alchemy-recipe-book/`
- Bacon example: `https://supermjr.github.io/little-alchemy-recipe-book/#item-220`

These links are not live merely because this package has been generated.

## Verify the deployed site

1. Open the live address, rather than the GitHub source-code view.
2. Search for `bacon`; the name-only search should show one item.
3. Expand Bacon and choose **Show how to make it from the start**.
4. Confirm the displayed route ends with **Fire + Pig → Bacon**.
5. Click Pig and confirm its item opens. Open the Bacon deep link directly in another browser tab to test sharing.
6. Open the live site on Theodore's Android device and bookmark it.

## Updating later

Replace `index.html` on the same publishing branch and save/commit the change. Pages republishes that branch. To keep the structured source accurate, update `data/catalog.json` as well when recipe data changes. It is an export for development, not a runtime dependency or an automatic generator.

For more extensive development, clone the repository using Git or GitHub Desktop. The current site does not require React, a JavaScript package manager, or a development server.

## Troubleshooting

**A 404 page:** Confirm a successful deployment in the repository's **Actions** tab. Check the selected Pages branch and root folder, the exact repository name in the URL, and that `index.html` is at the root. Use **Visit site** to avoid guessing an address. A deployment in progress does not mean the page is broken.

**Only a README appears:** Check that the uploaded page is named exactly `index.html` and is in the chosen publishing folder, not inside an extra enclosing folder.

**Old content appears:** Confirm the latest commit is on the publishing branch and its deployment succeeded, then reload without using the browser cache.

**Pages is unavailable:** Confirm that the repository is Public and that the signed-in account can administer it. Account or organization restrictions can affect publishing.

**`.nojekyll` was omitted:** Use **Add file → Create new file**, name the file `.nojekyll`, leave it empty, and commit it to the publishing branch.

**The new repository is not visible to the ChatGPT GitHub connection:** Check the installed GitHub app's repository access and include the new repository if that installation is restricted to selected repositories. Connection access to `enviro` does not prove access to a newly created repository.

## GitHub documentation

Checked September 7, 2026:

- [Create a repository, including prefilled form links](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository)
- [Upload existing files](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)
- [Create a Pages site, entry filenames, and .nojekyll](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [Configure branch-based publishing](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
