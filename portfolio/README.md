# Kashyap Kumar M Ghatke Portfolio

## Run locally

```bash
npm install
npm run dev
```

Edit personal details, social links, skills, projects, education, experience, and services in [src/data/portfolioData.js](src/data/portfolioData.js). The layout is in [src/App.jsx](src/App.jsx), and styling is in [src/App.css](src/App.css).

Place your real resume at `public/resume.pdf`; the Download CV button already points there. GitHub and LinkedIn are intentionally placeholder links. The contact form is frontend-only until you connect Formspree, EmailJS, or your own backend in `handleSubmit`.

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
