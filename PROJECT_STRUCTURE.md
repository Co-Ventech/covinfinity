# Project Structure - Core Concepts

This document outlines the core concepts and structure of the Covinfinity application.

## Application Architecture

The application is built with React 19 and uses React Router v7 for routing. It follows a modern file-based routing approach and employs TailwindCSS for styling.

## Core Technologies

- **React 19**: Modern UI library
- **React Router 7**: Advanced routing with file-based routing
- **TailwindCSS 4.0**: Utility-first CSS framework
- **TypeScript**: For type safety
- **Three.js/React Three Fiber**: 3D visualization library
- **GSAP**: Animation library
- **Framer Motion**: Animation library

## Routing System

The application uses React Router's declarative routing approach. Routes are defined in `app/routes.ts`:

```typescript
import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('./routes/home.tsx'), // Home page (index route)
  route('about', './routes/about.tsx'), // About page
  route('services', './routes/services.tsx'), // Services page
  route('contact', './routes/contact.tsx'), // Contact page
  route('connect', './routes/connect.tsx'), // Connect page
  route('product', './routes/product.tsx'), // Product page
  route('case-studies', './routes/case-studies.tsx'), // Case studies listing
  route('case-studies/:case_study_id', './routes/case-study.tsx'), // Dynamic case study page
  route('sign-in', './routes/SignIn.tsx'), // Sign in page
  route('sign-up', './routes/SignUp.tsx'), // Sign up page
] satisfies RouteConfig;
```

### Creating a New Route

To create a new route:

1. Create a new file in the `app/routes/` directory (e.g., `app/routes/new-page.tsx`)
2. Add the route to `app/routes.ts` using the `route()` function
3. Implement your route component with any metadata as needed

Example new route component:

```tsx
import { MainLayout } from '../layouts/MainLayout';
import type { Route } from './+types/new-page';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New Page | Covinfinity' },
    {
      name: 'description',
      content: 'Description of the new page',
    },
  ];
}

export default function NewPage() {
  return (
    <MainLayout>
      <div className="container-wide pt-16">
        <h1>New Page</h1>
        {/* Page content here */}
      </div>
    </MainLayout>
  );
}
```

## Layouts

The application uses a layout system to maintain consistent UI across pages. The main layout is defined in `app/layouts/MainLayout.tsx` and wraps all route components.

## Component Structure

Components are organized by their purpose:

- **UI Components**: Reusable UI elements in `app/components/`
- **Layout Components**: Page layouts in `app/layouts/`
- **Route Components**: Page-specific components in `app/routes/`
- **Section Components**: Larger page sections in `app/components/sections/`

## Styling

The application uses TailwindCSS for styling with custom utility classes and components.

## Application Entry

`app/root.tsx` is the application's entry point, which sets up:

- Document structure (HTML, head, body)
- Theme provider for dark/light mode
- Global error handling
- Page transitions

## Development Workflow

- **Development**: Run `npm run dev` to start the development server
- **Build**: Run `npm run build` to build the application
- **Typechecking**: Run `npm run typecheck` to check TypeScript types
- **Formatting**: Run `npm run format` to format code with Prettier
