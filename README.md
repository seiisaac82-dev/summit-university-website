# Summit University Website

A responsive static university website demonstration built with HTML, CSS, and vanilla JavaScript. Suitable for Vercel, GitHub Pages, or other static hosting.

## Files
- `index.html` — landing page, academics, admissions, campus gallery, news, events, FAQs, and contact
- `styles.css` — responsive styles and student portal styles
- `script.js` — mobile navigation, theme toggle, programme search and filters, site search, photo lightbox, email-draft helper, and back-to-top button
- `portal.html` — student dashboard visual prototype
- `portal.js` — theme toggle and dynamic year for the portal

## Features
- Responsive design and mobile navigation
- Light/dark mode
- Website section search
- Programme category filters and text search
- Campus photo gallery with image preview
- News and event sample content
- FAQ accordion
- Student portal dashboard preview
- Contact form validation and email-draft handoff
- Back-to-top control and accessible form status messages

## Run locally
Open `index.html` in a browser, or use VS Code with the Live Server extension. The student portal preview is `portal.html`.

## Deploy on Vercel
1. Sign in at https://vercel.com and choose **Add New → Project**.
2. Import `seiisaac82-dev/summit-university-website` from GitHub.
3. Select the **Other** framework preset for a static site.
4. Leave the build command blank. Set the output directory to `.` if prompted.
5. Deploy. Vercel normally redeploys automatically after new commits to the connected branch.

## Important demo limitations
Summit University is a demonstration name. Programme names, campus location, news, events, and portal data are examples, not verified official information. Replace them with approved facts before presenting this as a real university website.

The student portal has no login, database, grades, or real student records. Do not enter private information. The contact form validates fields and opens a draft addressed to `seiisaac82@gmail.com` in the visitor's email app; the visitor must send it themselves. It does not send directly to a server or store submissions. A backend or form service is needed for true online submissions.

External images and Google Fonts need an internet connection. Check image permissions before publishing. For a production site, use authorised images, official university details, an official domain, a privacy notice where appropriate, and a secure backend for any real accounts or contact submissions.
