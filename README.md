# Jensen Ackles Portfolio

A responsive, single-page React portfolio starter built with Vite and Tailwind CSS. It includes a cinematic hero, biography, selected credits, interactive gallery/lightbox, and a representation/contact section.

## Requirements
- Node.js 18.0 or newer
- npm

## Run locally
1. Extract the ZIP.
2. Open the project folder in VS Code.
3. Open the terminal in that folder.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Create a production build
```bash
npm run build
npm run preview
```
The production files are generated in `dist/`.

## Replace the image placeholders
All current images are editable SVG placeholders in `public/images/`. Replace them with approved photographs while keeping the filenames, or update the image paths in `src/data/content.js` and `src/App.jsx`.

| File | Used for |
|---|---|
| `hero-placeholder.svg` | Homepage hero |
| `about-placeholder.svg` | Biography portrait |
| `publicist-placeholder.svg` | Publicist portrait |
| `gallery-01.svg` to `gallery-06.svg` | Gallery tiles |

Recommended photo formats: WebP or JPG. Use high-resolution landscape imagery for the hero and portrait-oriented images for the About and gallery sections.

## Update text and credits
- Biography, publicist contact details and gallery entries: `src/data/content.js`
- Career credits: edit the `credits` array in `src/data/content.js`
- Layout and sections: `src/App.jsx`
- Colors, typography and spacing: `tailwind.config.js` and `src/index.css`

## Before publishing
- Replace all placeholder images and sample publicist details.
- Verify all biography, credits, representation and contact information.
- Only describe the site as an official or authorized portfolio if you have permission to do so.
- Add the correct social profile links and privacy/contact details if required.

## Notes
This project is a front-end template. The contact section uses email and telephone links; it does not submit form data to a server.
