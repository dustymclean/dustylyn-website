# dustylyn.com — Dusty McLean's personal portfolio

Responsive, static website with no build system or paid hosting requirements. Includes a user-supplied cutout portrait, project portfolio, biography, timeline, and contact details.

## Deploy to GitHub Pages
1. Create a **public GitHub repository** (for example `dustylyn-site`).
2. Upload all files in this directory to the **root** of the `main` branch, retaining the `assets/` folder and `CNAME`.
3. In the repository, open **Settings → Pages → Build and deployment**. Select **Deploy from a branch**, branch `main`, folder `/(root)` and save.
4. In Pages, set custom domain to `dustylyn.com` if GitHub has not read it automatically from `CNAME`.
5. In your DNS provider, set apex `@` A records to GitHub Pages IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`. Set `www` CNAME to `<github-username>.github.io` (replace the placeholder with the correct GitHub username). These DNS records should be confirmed against GitHub's current documentation and your existing DNS configuration before editing.
6. After GitHub validates DNS and issues its certificate, select **Enforce HTTPS**.

The links to `macrilabs.org` and `blackboxfields.org` are intentionally shown as project destinations, but those destinations may not be published yet. Replace/add links to active social pages as appropriate.

## Edit content
- `index.html`: all website copy, links, SEO, structured data
- `styles.css`: color palette, layout and responsive styling
- `script.js`: mobile menu and dynamic footer year
- `assets/dusty-mclean.png`: original portrait from the user
