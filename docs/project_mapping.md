# Zen Analytics Landing Page Project Structure

## Purpose of This Document

This document serves as a navigational guide to the Zen Analytics Landing page codebase. It provides a comprehensive overview of the project's directory structure, file organization, and the purpose of key components. While this document focuses on *where* to find things and their basic functions, the [Architecture Documentation](./architecture.md) explains *how* these components work together and the design decisions behind the system.

Use this document when:
- Looking for specific files or components in the codebase
- Understanding what each directory/file is responsible for
- Getting familiar with the project structure as a new contributor
- Identifying auto-imported directories and their purposes

## Project Structure

```
material-ui-nextjs-ts/          # Root directory of the project
├── docs/                        # Documentation
│   ├── architecture.md          # System architecture details
│   ├── project_mapping.md       # This document
│   ├── current_task.md          # Current development focus
│   ├── styling.md               # Styling guidelines
│   └── change_logs/             # Record of project changes
├── public/                      # Static assets
│   ├── images/                  # Image assets for the site
│   │   ├── browsers/            # Browser icons
│   │   ├── features/            # Feature icons/illustrations
│   │   └── logo.svg             # Zen Analytics logo
│   └── favicon.ico              # Site favicon
├── src/                         # Source code
│   ├── app/                     # Next.js app directory
│   │   ├── page.tsx             # Main landing page (homepage)
│   │   ├── layout.tsx           # Root layout component with common elements
│   │   └── about/               # About page
│   ├── components/              # Reusable UI components
│   │   ├── layout/              # Layout components
│   │   │   ├── Header.tsx       # Site header with navigation
│   │   │   └── Footer.tsx       # Site footer
│   │   ├── sections/            # Major page sections
│   │   │   ├── Hero.tsx         # Hero banner section with main CTA
│   │   │   ├── Features.tsx     # Features highlight section
│   │   │   ├── BrowserSupport.tsx # Browser compatibility section
│   │   │   ├── Comparison.tsx   # Before/after comparison section
│   │   │   └── FAQ.tsx          # Frequently asked questions section
│   │   ├── ui/                  # Atomic UI components
│   │   │   ├── Card.tsx         # Card component for features
│   │   │   ├── Button.tsx       # CTA buttons
│   │   │   ├── Collapsible.tsx  # Collapsible component for FAQ
│   │   │   └── IconWithText.tsx # Icon with accompanying text
│   │   ├── Copyright.tsx        # Copyright notice component
│   │   ├── ModeSwitch.tsx       # Dark/light mode toggle
│   │   └── ProTip.tsx           # Tip component
│   └── theme.ts                 # Theme configuration
├── .next/                       # Next.js build output (generated)
├── next.config.mjs              # Next.js configuration
├── package.json                 # Project dependencies and scripts
├── tsconfig.json                # TypeScript configuration
└── README.md                    # Project overview and setup instructions
```

## Key Components

### Landing Page Sections

1. **Header (src/components/layout/Header.tsx)**
   - Navigation bar with logo, links, and primary CTA button
   - Responsive design with mobile menu

2. **Hero Section (src/components/sections/Hero.tsx)**
   - Main banner with headline, subheadline, and primary call to action
   - Possibly includes a visual representation of the extension

3. **Features Section (src/components/sections/Features.tsx)**
   - Grid of cards highlighting key features and benefits
   - Each feature includes an icon, title, and description

4. **Browser Support (src/components/sections/BrowserSupport.tsx)**
   - Displays compatibility with major browsers (Chrome, Firefox, Edge, etc.)
   - Each browser includes an icon and download button

5. **Comparison Section (src/components/sections/Comparison.tsx)**
   - Side-by-side comparison of analytics experience with/without the extension
   - Uses visual elements to demonstrate the differences

6. **FAQ Section (src/components/sections/FAQ.tsx)**
   - Accordion-style frequently asked questions
   - Questions expand/collapse on click

7. **Footer (src/components/layout/Footer.tsx)**
   - Site links, copyright information, and additional resources

### UI Components

1. **Card (src/components/ui/Card.tsx)**
   - Reusable card component used in Features and other sections
   - Supports icons, titles, and descriptions

2. **Button (src/components/ui/Button.tsx)**
   - Styled buttons for calls-to-action
   - Various sizes and variants (primary, secondary, text)

3. **Collapsible (src/components/ui/Collapsible.tsx)**
   - Expandable/collapsible component for FAQ section
   - Manages expansion state

4. **IconWithText (src/components/ui/IconWithText.tsx)**
   - Component for displaying an icon with accompanying text
   - Used across various sections for consistent styling
