# MSP Builder's — Frontend

A React + Vite marketing site for MSP Builder's, a construction company, with a public contact form and a password-protected admin dashboard for viewing submissions.

## Tech Stack

- React 19 + React Router 7
- Vite 8
- Tailwind CSS 4
- Framer Motion (animations)
- lucide-react (icons)

## Project Structure

```
src/
 ├── assets/            # (empty — no local image assets are currently used; all imagery is remote)
 ├── components/
 │    ├── common/       # ScrollToTop, ErrorBoundary, LoadingSpinner, SocialIcons
 │    ├── layout/       # MainNavbar, PageNavbar, Footer, CustomCursor
 │    └── sections/     # HeroSection, AboutSection, ServicesSection, ProjectsSection, ContactSection
 ├── pages/              # HomePage, AboutPage, PortfolioPage, AdminPage, AdminLoginPage
 ├── hooks/              # useMousePosition, useContactForm, useMessages
 ├── services/           # api.js (fetch wrapper), messageService.js, authService.js
 ├── context/            # AuthContext (admin session)
 ├── routes/             # AppRoutes (lazy-loaded), ProtectedRoute
 ├── constants/          # animations.js, data.js (all static copy/content lives here)
 ├── utils/              # formatDate.js
 ├── App.jsx
 ├── main.jsx
 └── index.css
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy the example file and fill in your backend URL:

```bash
cp .env.example .env
```

```
VITE_API_URL=http://localhost:5000/api
```

### 3. Run the dev server

```bash
npm run dev
```

The site will be available at `http://localhost:5173` (default Vite port).

### 4. Build for production

```bash
npm run build
```

Output goes to `dist/`. Preview the production build locally with:

```bash
npm run preview
```

### 5. Lint

```bash
npm run lint
```

## Admin Dashboard

- Visit `/admin` — you'll be redirected to `/admin/login` if you're not signed in.
- Credentials are configured on the **backend** (see the backend README's `.env.example`), not in this project.
- A session token is stored in the browser and expires after 12 hours (matches the backend's JWT expiry).

## Notes on Routing

The app uses [`React.lazy`](https://react.dev/reference/react/lazy) to code-split every page, so the initial bundle only includes the code needed for the homepage — other pages are fetched on demand.

## Deployment Checklist

- [ ] Set `VITE_API_URL` to your production API URL before building.
- [ ] Run `npm run build` and deploy the `dist/` folder to any static host (Vercel, Netlify, S3 + CloudFront, etc).
- [ ] Confirm the backend's `CORS` configuration allows requests from your deployed frontend domain.
