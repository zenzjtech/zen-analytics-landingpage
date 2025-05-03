# Zen Analytics Landingpage Architecture

## Purpose
This document describes the architectural design of the Zen Analytics Landing Page, focusing on component interactions, design patterns, and architectural decisions.

## System Overview
Zen Analytics is a browser extension built with WXT that analyzes web analytics data across 25+ networks. This project is it landing page.
## Core Components

## Directory Structure
```
src/
├── entrypoints/             # Extension entry points
│   ├── background/          # Background service worker
│   │   ├── analytics-network/ # Analytics processing
│   ├── popup/               # Popup UI
│   └── options/             # Options page
├── service/                 # Service layer
├── store/                   # Redux store
├── types/                   # TypeScript definitions
└── utils/                   # Utility functions
