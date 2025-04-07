# Co-Ventech

A modern, full-stack React application built with React Router and Tailwind CSS v4.

## Features

- 🚀 Server-side rendering with React Router v7
- ⚡️ Hot Module Replacement (HMR) for fast development
- 📦 Optimized asset bundling with Vite
- 💅 Tailwind CSS v4 for styling with custom 10px base
- 🔄 Improved development workflow with Prettier
- 🧩 Reusable component library
- 🌓 Dark/light mode with theme switching
- 📱 Responsive design for all devices
- 🔒 TypeScript for type safety

## Tech Stack

- **Frontend Framework**: React 19
- **Routing**: React Router 7
- **Styling**: Tailwind CSS 4
- **Build Tool**: Vite
- **Language**: TypeScript
- **Formatting**: Prettier with tailwindcss plugin
- **Containerization**: Docker

## Project Structure

The project follows a feature-based organization pattern. See [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) for a detailed breakdown of the codebase organization.

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

### Code Formatting

Format code using Prettier:

```bash
npm run format
```

This will automatically sort Tailwind CSS classes in the recommended order.

## Styling Guide

### Tailwind CSS Configuration

This project uses Tailwind CSS v4 with a customized configuration:

- **Base Font Size**: Set to 10px (1rem = 10px) for easier calculations
- **Custom Text Sizes**: Properly scaled for readability (e.g., `text-base` = 16px)
- **Custom Components**: Includes pre-styled buttons, cards, and form elements
- **Theme Colors**: Custom primary and secondary color palettes
- **Responsive Design**: Font scaling for different screen sizes

### Custom Components

The project includes several pre-styled components:

- **Buttons**: Regular, primary, secondary, and outline variants
- **Cards**: Basic card layout with optional title and footer
- **Forms**: Styled inputs and labels

Example button usage:

```jsx
<Button variant="primary">Click Me</Button>
```

Example card usage:

```jsx
<Card title="Card Title" footer={<Button>Action</Button>}>
  Card content goes here
</Card>
```

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t co-ventech .

# Run the container
docker run -p 3000:3000 co-ventech
```

The containerized application can be deployed to any platform that supports Docker.

### DIY Deployment

Deploy the output of `npm run build`:

```
├── package.json
├── package-lock.json
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Contributing

1. Follow the established code structure
2. Maintain the styling conventions
3. Use the provided component library when possible
4. Run Prettier before committing changes

---

Built with React Router and Tailwind CSS v4.
