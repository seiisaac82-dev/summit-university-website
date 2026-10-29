# Nsoatre Technical Institute (NTI) — E-learning Platform

A responsive static website and e-learning resource prototype for Nsoatre Technical Institute (NTI), in Nsoatre, Bono Region, Ghana.

## Search visibility
- Homepage title, description, and structured data use the full name “Nsoatre Technical Institute (NTI) — E-learning Platform”.
- `sitemap.xml` lists the homepage and student portal preview. Submit it through Google Search Console after verifying site ownership.
- Search engines decide when and whether to index pages; appearing in search results is not immediate or guaranteed.

## Files
- `index.html` — homepage, school overview, programme areas, admissions guidance, campus placeholders, public news links, learning hub, FAQs, and contact demo
- `styles.css` — responsive design and student portal styles
- `script.js` — navigation, theme toggle, programme search and filters, site search, photo lightbox, demo contact-form message, and back-to-top button
- `portal.html` — student dashboard visual prototype (not connected to school systems)
- `portal.js` — theme toggle and dynamic year for the portal
- `sitemap.xml` and `robots.txt` — search-engine discovery files

## Important before presenting this as the official school website
- This is an independent website prototype, not an official NTI website unless the school approves and adopts it.
- Confirm current programmes, entry requirements, fees, dates, and contact details directly with NTI.
- Campus gallery areas currently use placeholders because official NTI photos have not yet been verified. Replace them with school-authorised photos of the actual campus, workshops, students, and activities.
- The student portal is only a visual demo. It has no login, database, grades, attendance, or real student records.
- The contact form does not send or store submissions. Connect a secure, school-approved service before using it for real enquiries.
- Check photo permissions, student/guardian consent, and accessibility before publishing.

## Run locally
Open `index.html` in a browser, or use VS Code with Live Server. The portal preview is `portal.html`.

## Deploy on Vercel
1. Import this GitHub repository into Vercel.
2. Select the **Other** framework preset for a static site.
3. Leave the build command blank. Set the output directory to `.` if prompted.
4. Deploy. Vercel normally redeploys after new commits to the connected branch.

## Website address
The current Vercel address still contains the old project slug `summit-university-website`. Rename the Vercel project to an NTI name or connect a custom domain in Vercel project settings to change the visible address. Update the canonical URL, Open Graph URL, sitemap, and robots.txt to match the final address after the URL is changed.
