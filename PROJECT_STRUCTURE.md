# Project Structure

This document provides an overview of the project's directory structure and explains the purpose of each significant file and folder.

## Root Directory

```
co-ventech-2/
├── .git/                # Git repository files
├── .react-router/       # React Router build artifacts
├── app/                 # Main application code
├── node_modules/        # Node.js dependencies
├── public/              # Static public assets
├── .dockerignore        # Files to exclude from Docker builds
├── .gitignore           # Files to exclude from Git
├── .prettierignore      # Files to exclude from Prettier formatting
├── .prettierrc          # Prettier configuration
├── Dockerfile           # Docker container configuration
├── package-lock.json    # NPM dependency lock file
├── package.json         # Project metadata and dependencies
├── PROJECT_STRUCTURE.md # This file - project structure documentation
├── README.md            # Project overview and setup instructions
├── react-router.config.ts  # React Router configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite bundler configuration
```

## App Directory Structure

The `app` directory contains the main application code:

```
app/
├── assets/     # Static assets like images, fonts, etc.
├── components/ # Reusable UI components
├── constants/  # Application constants
├── contexts/   # React context providers
├── hooks/      # Custom React hooks
├── layouts/    # Page layout components
├── routes/     # Route components (pages)
├── services/   # API services and data fetching
├── styles/     # CSS and styling files
├── types/      # TypeScript type definitions
├── utils/      # Utility functions
├── welcome/    # Welcome page components
├── root.tsx    # Application root component
└── routes.ts   # Route definitions
```

## Key Directories and Files Explained

### Components Directory

Contains reusable UI components used throughout the application:

```
components/
├── Button.tsx      # Button component with variants
├── Card.tsx        # Card container component
└── ThemeToggle.tsx # Dark/light theme toggle component
```

### Contexts Directory

React context providers for state management:

```
contexts/
└── ThemeContext.tsx # Theme context for dark/light mode
```

### Layouts Directory

Page layout components that wrap route components:

```
layouts/
└── MainLayout.tsx # Main application layout with header, footer, and navigation
```

### Routes Directory

Each file represents a page in the application:

```
routes/
├── about.tsx    # About page
├── contact.tsx  # Contact page
├── home.tsx     # Home page
└── services.tsx # Services page
```

### Styles Directory

CSS and styling configuration:

```
styles/
└── app.css # Main CSS file with Tailwind configuration and custom styles
```

## Configuration Files

- **react-router.config.ts**: Configures server-side rendering options
- **vite.config.ts**: Configures the Vite bundler and plugins (including Tailwind CSS)
- **.prettierrc**: Configures Prettier code formatting, including Tailwind CSS class sorting
- **tsconfig.json**: TypeScript compiler configuration
