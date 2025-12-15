# Qlaws UI

A modern React-based web application for Qlaws.ai, featuring AI-powered legal tools and services. Built with TypeScript, Vite, and Tailwind CSS.

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Component Documentation](#component-documentation)
- [Styling Guidelines](#styling-guidelines)
- [Build & Deployment](#build--deployment)

## 🎯 Overview

Qlaws UI is a single-page application showcasing AI-powered legal tools including:
- AI Drafting
- AI Vault
- AI Summary
- Redlining
- And more legal workflow solutions

The application features a modern, responsive design with smooth animations and an intuitive user interface.

## 🛠 Tech Stack

### Core Technologies
- **React 19.2.0** - UI library
- **TypeScript 5.9.3** - Type safety
- **Vite 7.2.4** - Build tool and dev server
- **React Router DOM 7.10.1** - Routing

### Styling
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **CSS Modules** - Component-scoped styling
- **PostCSS** - CSS processing

### Animation
- **Framer Motion 12.23.26** - Animation library for React

### Development Tools
- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting rules

## 📁 Project Structure

```
qlaws-ui/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and media files
│   ├── pages/             # Page components
│   │   └── Home/         # Home page
│   │       ├── components/  # Page-specific components
│   │       │   ├── Banner/
│   │       │   ├── BenefitsSection/
│   │       │   ├── ChallengesSection/
│   │       │   ├── Footer/
│   │       │   ├── Navbar/
│   │       │   ├── SolutionsSection/
│   │       │   ├── TeamsSection/
│   │       │   └── ToolsSection/
│   │       ├── constants/  # Page constants
│   │       └── Home.tsx
│   ├── routes/            # Routing configuration
│   ├── shared/            # Shared components and utilities
│   │   ├── components/    # Reusable components
│   │   │   ├── Card-lg/
│   │   │   ├── Card-sm/
│   │   │   └── ScrollToTop/
│   │   ├── hooks/         # Custom React hooks
│   │   └── models/        # TypeScript interfaces/types
│   ├── App.tsx            # Root component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles
├── dist/                  # Build output
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd qlaws-ui
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in terminal).

## 💻 Development

### Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build for production (TypeScript compilation + Vite build)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

### Development Guidelines

1. **Component Structure**: Each component should have its own folder with:
   - `ComponentName.tsx` - Component file
   - `ComponentName.module.css` - Component styles (if needed)

2. **TypeScript**: Always use TypeScript for type safety. Define interfaces/types in the `shared/models` directory.

3. **Code Style**: Follow ESLint rules. Run `npm run lint` before committing.

## 📚 Component Documentation

### Page Components

#### Home Page (`src/pages/Home/Home.tsx`)
The main landing page that orchestrates all sections:
- Navbar
- Banner
- ChallengesSection
- SolutionsSection
- TeamsSection
- ToolsSection
- BenefitsSection
- Footer

### Shared Components

#### Card-lg (`src/shared/components/Card-lg/`)
Large card component for displaying featured content.

**Props:**
- `title`: string - Card title
- `description`: string - Card description
- `image`: string - Image URL
- Additional props defined in `card-lg.model.ts`

#### Card-sm (`src/shared/components/Card-sm/`)
Small card component for displaying compact content.

**Props:**
- `title`: string - Card title
- `description`: string - Card description
- `image`: string - Image URL
- Additional props defined in `card-sm.model.ts`

#### ScrollToTop (`src/shared/components/ScrollToTop/`)
Button component that scrolls to the top of the page when clicked. Includes smooth scroll animation.

### Home Page Components

#### Footer (`src/pages/Home/components/Footer/`)
Comprehensive footer component with:
- Call-to-action section
- Company information
- Product links
- Company links
- Newsletter subscription form
- Social media icons

**Features:**
- Newsletter email subscription form
- Animated social media icons (Instagram, LinkedIn, X/Twitter, Medium, Reddit)
- Responsive grid layout
- Smooth scroll animations using Framer Motion

**Styling:**
- Uses CSS Modules for component-specific styles
- Tailwind classes for utility styling (flexbox, spacing, typography)
- Custom CSS for brand colors and specific measurements

**Key Styles:**
- Footer background: `#1B0C25`
- Column titles: `#FAAE89` with font-size `15.13px`
- Address text: `#FFFFFF` with font-size `15.13px`, font-family `Outfit`

#### Banner (`src/pages/Home/components/Banner/`)
Hero banner section with main call-to-action.

#### Navbar (`src/pages/Home/components/Navbar/`)
Navigation bar component.

#### ToolsSection (`src/pages/Home/components/ToolsSection/`)
Section showcasing available AI tools.

#### TeamsSection (`src/pages/Home/components/TeamsSection/`)
Section displaying team or company information.

#### ChallengesSection (`src/pages/Home/components/ChallengesSection/`)
Section highlighting challenges in legal workflows.

#### SolutionsSection (`src/pages/Home/components/SolutionsSection/`)
Section presenting solutions offered by Qlaws.

#### BenefitsSection (`src/pages/Home/components/BenefitsSection/`)
Section listing benefits of using Qlaws.

## 🎨 Styling Guidelines

### Approach
This project uses a **hybrid styling approach**:

1. **CSS Modules** - For component-specific styles and complex layouts
2. **Tailwind CSS** - For utility classes (spacing, typography, flexbox, etc.)
3. **Custom CSS** - For brand-specific colors and precise measurements

### Best Practices

1. **Prefer Tailwind for utilities**: Use Tailwind classes for common utilities like:
   - Flexbox: `flex`, `flex-col`, `items-center`, `justify-center`
   - Spacing: `mt-6`, `gap-4`, `p-4`
   - Typography: `font-medium`, `leading-5`, `tracking-normal`
   - Alignment: `text-center`, `align-middle`

2. **Use CSS Modules for**:
   - Complex component-specific styles
   - Brand colors (e.g., `#1B0C25`, `#FAAE89`)
   - Precise measurements (e.g., `15.13px`)
   - Custom animations and transitions
   - Background images

3. **Avoid inline styles**: Never use `style={{}}` attributes. Use CSS Modules or Tailwind classes instead.

### Color Palette

- **Primary Dark**: `#1B0C25` - Footer background
- **Accent Orange**: `#FAAE89` - Column titles
- **White**: `#FFFFFF` - Text on dark backgrounds
- **Gray**: `#555555` - Secondary text

### Typography

- **Primary Font**: Outfit (with fallbacks: system-ui, Avenir, Helvetica, Arial, sans-serif)
- **Font Sizes**: 
  - Small: `14px`
  - Medium: `15.13px`
  - Large: `18px`, `32px`, `38px`

## 🏗 Build & Deployment

### Production Build

```bash
npm run build
```

This will:
1. Compile TypeScript (`tsc -b`)
2. Build optimized assets with Vite
3. Output to `dist/` directory

### Preview Production Build

```bash
npm run preview
```

### Deployment

The `dist/` folder contains the production-ready files. Deploy this folder to your hosting service:

- **Static Hosting**: Netlify, Vercel, GitHub Pages
- **CDN**: Cloudflare, AWS CloudFront
- **Server**: Nginx, Apache

### Environment Variables

Currently, no environment variables are required. If needed, create a `.env` file in the root directory.

## 📝 Code Examples

### Creating a New Component

```typescript
// src/pages/Home/components/NewComponent/NewComponent.tsx
import React from "react";
import { motion } from "framer-motion";
import styles from "./NewComponent.module.css";

const NewComponent: React.FC = () => {
    return (
        <motion.div 
            className={`${styles.container} flex flex-col items-center`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
        >
            <h2 className={`${styles.title} font-medium leading-5`}>
                Component Title
            </h2>
        </motion.div>
    );
};

export default NewComponent;
```

```css
/* src/pages/Home/components/NewComponent/NewComponent.module.css */
.container {
    width: 100%;
    padding: 20px;
}

.title {
    font-size: 18px;
    color: #1B0C25;
}
```

### Using Animations

```typescript
import { motion } from "framer-motion";

<motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
>
    Content
</motion.div>
```

## 🤝 Contributing

1. Follow the existing code structure and naming conventions
2. Use TypeScript for all new components
3. Prefer Tailwind classes for utilities, CSS Modules for component styles
4. Add animations using Framer Motion
5. Run `npm run lint` before committing
6. Write clear, descriptive commit messages

## 📄 License

[Add your license information here]

## 🔗 Links

- [Qlaws.ai](https://qlaws.ai)
- [Documentation](https://docs.qlaws.ai)

---

**Built with ❤️ using React, TypeScript, and Vite**
