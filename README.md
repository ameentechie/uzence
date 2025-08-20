# React Component Development Assignment

## Focus Area
UI Components

## Tech Stack
- React
- TypeScript
- TailwindCSS
- Storybook

## Overview
This project demonstrates scalable UI component development using React, TypeScript, TailwindCSS, and Storybook. It includes two reusable components with modern patterns, documentation, and testing:

1. **InputField**: Flexible input with validation, variants, and accessibility.
2. **DataTable**: Tabular data display with sorting, selection, and loading/empty states.

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Development Server
```bash
npm run dev
```

### 3. Storybook
```bash
npm run storybook
```

---

## Components

### InputField
- Label, placeholder, helper text, error message
- States: disabled, invalid, loading
- Variants: filled, outlined, ghost
- Sizes: small, medium, large
- Optional: clear button, password toggle, light/dark theme

### DataTable
- Display tabular data
- Column sorting
- Row selection (single/multiple)
- Loading and empty state

---

## Project Structure
```
components/
  src/
    components/      # Reusable UI components
    stories/         # Storybook stories
    types/           # Shared TypeScript types
    App.tsx          # Main app entry
    index.css        # TailwindCSS entry
  public/
  vite.config.ts
  ...
```

---

## Testing
Basic tests are included for each component:
```bash
npm run test
```

---

## Documentation
- Storybook provides live documentation and usage examples.
- See `src/stories/` for stories and usage.

---

## Accessibility
- Components include ARIA labels and keyboard navigation support.

---

## Contributing
PRs and suggestions welcome!

---

## License
MIT
