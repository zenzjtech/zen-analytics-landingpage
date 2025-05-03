# Zen Analytics Landingpage Architecture

## Purpose
This document describes the architectural design of the Zen Analytics Landing Page, focusing on component interactions, design patterns, and architectural decisions.

## System Overview
Zen Analytics is a browser extension built with WXT that analyzes web analytics data across 25+ networks. This project is its landing page.

## Core Components

### Landing Page Components
1. **Header/Navbar** - Contains the logo, navigation links, and CTA button
2. **Hero Section** - Main banner with headline, subheadline, and primary CTA
3. **Features Section** - Highlights the key benefits of the extension with cards/icons
4. **Browser Compatibility** - Shows the extension working across major browsers
5. **Comparison Section** - Demonstrates the value proposition with before/after scenarios
6. **FAQ Section** - Answers common questions about the extension
7. **Footer** - Contains secondary links, copyright, and additional information

### UI Components
- **Card** - Reusable component for features and comparisons
- **Button** - Styled buttons for calls-to-action
- **Icon** - Visual indicators for features and benefits
- **Collapsible** - For FAQ accordion functionality
- **BrowserIcon** - Visual indicators for browser compatibility

## Technical Architecture
- **Next.js Pages** - For routing and server-side rendering
- **Material UI** - For component styling and theming
- **React Hooks** - For state management within components
- **Responsive Design** - For mobile-friendly layout

## Directory Structure
```
src/
├── app/                       # Next.js app directory
│   ├── page.tsx               # Main landing page
│   ├── layout.tsx             # Root layout component
│   └── about/                 # About page 
├── components/                # Reusable UI components
│   ├── layout/                # Layout components 
│   │   ├── Header.tsx         # Site header with navigation
│   │   └── Footer.tsx         # Site footer
│   ├── sections/              # Major page sections
│   │   ├── Hero.tsx           # Hero banner section
│   │   ├── Features.tsx       # Features highlight section
│   │   ├── BrowserSupport.tsx # Browser compatibility section
│   │   ├── Comparison.tsx     # Before/after comparison section
│   │   └── FAQ.tsx            # Frequently asked questions section
│   └── ui/                    # Atomic UI components
│       ├── Card.tsx           # Card component for features
│       ├── Button.tsx         # CTA buttons
│       └── Collapsible.tsx    # Collapsible component for FAQ
├── theme/                     # Theme configuration
└── utils/                     # Utility functions
