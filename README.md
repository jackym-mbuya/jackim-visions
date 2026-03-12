# jackim-portfolio

A modern portfolio website built with React, TypeScript, Vite, Tailwind CSS, and shadcn-ui.

## Tech Stack

- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **React** - UI framework
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **React Three Fiber** - 3D elements
- **Framer Motion** - Animations

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Deploy

### Render (Static Site)

1. Connect your repository to Render
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Docker

```bash
docker build -t jackim-portfolio .
docker run -p 8080:8080 jackim-portfolio
```
