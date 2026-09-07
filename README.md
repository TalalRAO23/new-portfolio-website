# Talal Afzaal — Portfolio Website

A one-page portfolio site built with React (Vite). Pure frontend for now — the
`backend` folder is left empty on purpose so you can plug in an Express/MongoDB
API later (contact form, etc).

## Folder structure

```
portfolio-website/
├── frontend/          → the actual React app (this is what you run)
│   ├── public/
│   └── src/
│       ├── components/  → one folder per component, each with its own .css
│       ├── data/        → plain JS files for skills & projects content
│       ├── hooks/       → small reusable hooks (scroll reveal, theme, tilt)
│       ├── App.jsx
│       └── main.jsx
└── backend/            → empty for now, add your Express server here later
```

## How to run it

You need [Node.js](https://nodejs.org/) installed (v18 or newer is best).

```bash
cd frontend
npm install
npm run dev
```

That will start a local dev server (Vite prints the URL, usually
`http://localhost:5173`). Open it in your browser.

To build a production version:

```bash
npm run build
```

The output goes to `frontend/dist`.

## Packages used (installed automatically by `npm install`)

- `react`, `react-dom` — the framework
- `vite`, `@vitejs/plugin-react` — dev server & build tool
- `react-icons` — for the GitHub/LinkedIn/skill icons, so you don't have to
  hunt for icon images

No CSS framework — everything is plain CSS, one file per component, so it's
easy to follow and change.

## Things to double check before you deploy

- In `frontend/src/data/projects.js`, I guessed at your repo URLs based on
  the project names you gave me. GitHub blocked me from reading your exact
  repo list, so open that file and make sure each `repoUrl` actually points
  to the right repository (and fix the slug if I guessed wrong).
- The contact form doesn't send anywhere yet — it just shows a "message
  received" confirmation on screen. Once you build the backend, wire the
  `handleSubmit` function in `Contact.jsx` to your API.
- Swap the placeholder project descriptions in `projects.js` with your own
  if you want more detail about each one.
