# NICO — Underground Streetwear Store

A dark, editorial streetwear brand demo site built with **Astro** and **Tailwind CSS**. Includes a full product catalogue, category filtering, FAQ page, user profile, animated cart drawer, and sidebar navigation.

---

## Tech Stack

| Tool                                                                                                                | Purpose                   |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| [Astro](https://astro.build) v4                                                                                     | Static site framework     |
| [Tailwind CSS](https://tailwindcss.com) v3                                                                          | Utility-first styling     |
| [Anton](https://fonts.google.com/specimen/Anton) + [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) | Typography (Google Fonts) |
| TypeScript                                                                                                          | Type-safe data layer      |

---

## Project Structure

```
demo/
└── src/
    ├── components/
    │   ├── CartDrawer.astro      # Slide-in cart drawer
    │   ├── Footer.astro          # Site footer with category links
    │   ├── Lookbook.astro        # Editorial grid section
    │   ├── Marquee.astro         # Animated scrolling text banner
    │   ├── Navbar.astro          # Fixed top navigation
    │   ├── ProductCard.astro     # Reusable product card
    │   └── SidebarMenu.astro     # Slide-in navigation menu
    ├── data/
    │   ├── cart.ts               # Mock cart items
    │   ├── categories.ts         # Category definitions
    │   ├── faq.ts                # FAQ items and helpers
    │   ├── products.ts           # Product catalogue and filter functions
    │   └── users.ts              # Mock user / orders
    ├── layouts/
    │   └── Layout.astro          # Base HTML shell
    ├── pages/
    │   ├── index.astro           # Home page
    │   ├── faq.astro             # FAQ page
    │   ├── profile.astro         # User profile page
    │   └── category/[slug].astro # Dynamic category pages
    └── styles/
        └── global.css            # Global base styles
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install & Run

```bash
# Navigate to the project
cd demo

# Install dependencies
npm install

# Start dev server (http://localhost:4321)
npm run dev
```

### Build for Production

```bash
npm run build    # Outputs to dist/
npm run preview  # Preview the production build locally
```

---

## Pages

| Route              | Description                                                                            |
| ------------------ | -------------------------------------------------------------------------------------- |
| `/`                | Home — hero, marquee, featured products, lookbook                                      |
| `/category/[slug]` | Filtered product grid (men, women, unisex, hoodies, tees, pants, jackets, accessories) |
| `/faq`             | Accordion FAQ with category filters                                                    |
| `/profile`         | User profile with order history and favourites                                         |

---

## Design Tokens

Custom Tailwind colours defined in `tailwind.config.cjs`:

| Token          | Hex       | Usage                      |
| -------------- | --------- | -------------------------- |
| `nico-black`   | `#0a0a0a` | Page background            |
| `nico-surface` | `#141414` | Card / section backgrounds |
| `nico-border`  | `#2a2a2a` | Dividers and borders       |
| `nico-text`    | `#f5f5f5` | Primary text               |
| `nico-muted`   | `#8a8a8a` | Secondary / label text     |
| `nico-red`     | `#dc2626` | Brand accent               |
| `nico-purple`  | `#7c3aed` | Gradient accent            |
