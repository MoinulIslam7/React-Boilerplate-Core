# React + Vite Advanced Boilerplate

A modern, production-ready React boilerplate with the latest technologies and best practices for building scalable web applications.

## 🚀 Tech Stack

- **React 19** - Latest React with improved performance and new features
- **Vite 7** - Next-generation frontend tooling
- **Tailwind CSS 4** - Utility-first CSS framework with new `@theme` architecture
- **Redux Toolkit 2** - State management with RTK Query
- **React Router 7** - Client-side routing
- **ESLint 9** - Code linting with flat config
- **Socket.io Client** - Real-time communication
- **Axios** - HTTP client
- **React Hot Toast** - Beautiful notifications

## 📦 Quick Start

### Installation

```bash
npm install --legacy-peer-deps
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Linting

```bash
npm run lint
```

## 📁 Project Structure

```
React-Boilerplate/
├── public/                      # Static assets
├── config/                      # Environment configurations
│   ├── dev.env                 # Development environment variables
│   └── prod.env                # Production environment variables
├── src/
│   ├── assets/                 # Media assets
│   │   ├── Audios/
│   │   ├── Icons/
│   │   ├── Images/
│   │   └── Videos/
│   ├── components/             # Reusable UI components
│   │   ├── Footer/
│   │   │   └── Footer.jsx
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   ├── DashboardNav.jsx
│   │   │   └── DashboardSidebar.jsx
│   │   └── index.js           # Barrel exports
│   ├── db/                     # Mock/Static data
│   │   ├── ProductsData.js
│   │   └── UserData.js
│   ├── feature/                # Feature-specific modules
│   │   ├── Authentication/
│   │   │   └── Authentication.js
│   │   └── Support/
│   │       └── Support.js
│   ├── layout/                 # Layout components
│   │   ├── DashboardLayout.jsx
│   │   └── Layout.jsx
│   ├── lib/                    # Third-party library wrappers
│   │   └── Toaster/
│   │       └── Toast.jsx
│   ├── pages/                  # Page components
│   │   ├── Home/
│   │   │   └── Home.jsx
│   │   ├── About/
│   │   │   └── About.jsx
│   │   ├── Login/
│   │   │   └── Login.jsx
│   │   ├── SignUp/
│   │   │   └── SignUp.jsx
│   │   ├── Dashboard/
│   │   │   └── Dashboard.jsx
│   │   ├── Shop/
│   │   │   └── Shop.jsx
│   │   ├── Payment/
│   │   │   └── Payment.jsx
│   │   ├── Loading/
│   │   │   └── Landing.jsx
│   │   └── ErrorPage/
│   │       └── ErrorPage.jsx
│   ├── providers/              # Context providers
│   │   ├── AppProvider.jsx    # Main app provider (Redux, Router)
│   │   ├── AuthProvider.jsx   # Authentication context
│   │   └── index.js           # Barrel exports
│   ├── Routers/                # Routing configuration
│   │   ├── Routers.jsx        # Main routes
│   │   ├── PrivateRoute.jsx   # Protected routes
│   │   └── Lazy.jsx           # Lazy loading wrapper
│   ├── services/               # External services
│   │   ├── Api.js             # API configuration
│   │   └── socket.js          # Socket.io configuration
│   ├── store/                  # Redux store
│   │   ├── store.js           # Store configuration
│   │   ├── slices/            # Redux slices
│   │   │   └── counterSlice.js
│   │   └── index.js           # Barrel exports
│   ├── utils/                  # Utility functions
│   │   ├── helpers/           # Helper functions
│   │   │   ├── hitToast.js
│   │   │   └── index.js
│   │   ├── hooks/             # Custom React hooks
│   │   │   ├── useFetch.js
│   │   │   ├── useGlobal.js
│   │   │   ├── useIsMobile.js
│   │   │   └── index.js
│   │   └── index.js           # Barrel exports
│   ├── App.jsx                 # Root component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles + Tailwind
├── eslint.config.js            # ESLint v9 flat config
├── postcss.config.js           # PostCSS configuration
├── vite.config.js              # Vite configuration
├── package.json                # Dependencies and scripts
└── README.md

```

## 🗂️ Folder Descriptions

### **providers/**
Contains React context providers for global state management:
- `AppProvider.jsx` - Wraps the app with Redux Provider and React Router
- `AuthProvider.jsx` - Authentication context and hooks
- Uses barrel exports for clean imports: `import { AppProvider, AuthProvider } from './providers'`

### **store/**
Redux Toolkit store with modern architecture:
- `store.js` - Store configuration
- `slices/` - Redux slices for different features
- Barrel exports for easy access: `import { store, increment } from './store'`

### **components/**
Reusable UI components organized by feature:
- Each component in its own folder
- Barrel exports for clean imports: `import { Navbar, Footer } from './components'`

### **pages/**
Page-level components representing different routes:
- Home, About, Login, SignUp, Dashboard, etc.
- Each page in its own folder for better organization

### **Routers/**
Routing configuration and utilities:
- `Routers.jsx` - Main route definitions
- `PrivateRoute.jsx` - Authentication-protected routes
- `Lazy.jsx` - Component lazy loading wrapper

### **services/**
External service integrations:
- `Api.js` - Axios configuration and API endpoints
- `socket.js` - Socket.io client setup

### **utils/**
Utility functions and custom hooks:
- `helpers/` - Utility functions (toast notifications, etc.)
- `hooks/` - Custom React hooks (useFetch, useIsMobile, etc.)
- Barrel exports at all levels for convenient imports

### **layout/**
Layout components that wrap page content:
- `Layout.jsx` - Main layout with Header/Footer
- `DashboardLayout.jsx` - Dashboard-specific layout

### **db/**
Mock data and static datasets:
- `ProductsData.js` - Product mock data
- `UserData.js` - User mock data

### **assets/**
Static media files organized by type:
- Images, Videos, Icons, Audios

## ⚙️ Configuration Files

### **eslint.config.js** (ESLint v9 Flat Config)
Modern ESLint configuration:
```javascript
import js from '@eslint/js';
import react from 'eslint-plugin-react';

export default [
  {
    files: ['**/*.{js,jsx}'],
    plugins: { react },
    rules: {
      'react/prop-types': 'off',
    },
  },
];
```

### **vite.config.js**
Vite configuration with path aliases:
```javascript
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
    }
  },
  plugins: [react()],
})
```

### **postcss.config.js**
PostCSS with Tailwind CSS v4:
```javascript
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
```

### **index.css** (Tailwind v4 Configuration)
Tailwind CSS v4 uses CSS-based configuration:
```css
@import "tailwindcss";

@theme {
  --color-primary: #001E17;
  --color-primary1: #023535;
  --font-family-nunito: 'Nunito Sans', sans-serif;
}
```

## 🔐 Environment Variables

Create environment files in the `config/` directory:

**config/dev.env**
```env
VITE_APP_API_URL=http://localhost:3001
VITE_APP_DEBUG_MODE=true
```

**config/prod.env**
```env
VITE_APP_API_URL=https://api.production.com
VITE_APP_DEBUG_MODE=false
```

## 📚 Key Features

### Barrel Exports
Clean imports using index.js files:
```javascript
// Instead of:
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Use barrel exports:
import { Navbar, Footer } from './components';
```

### Path Aliases
Import using `@` alias:
```javascript
import { useIsMobile } from '@/utils/hooks';
import { hitToast } from '@/utils/helpers';
```

### Redux Toolkit
Modern Redux with RTK:
```javascript
import { store, increment, decrement } from './store';
```

### React Router v7
Latest routing with data APIs:
```javascript
<Route path="/" element={<Home />} />
<Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
```

## 🧪 Scripts

```json
{
  "dev": "env-cmd -f ./config/dev.env vite",
  "build": "env-cmd -f ./config/prod.env vite build",
  "lint": "eslint . --report-unused-disable-directives --max-warnings 0",
  "preview": "vite preview"
}
```

## 📝 Best Practices

1. **Component Organization**: Each component in its own folder with related files
2. **Barrel Exports**: Use index.js for clean imports
3. **State Management**: Redux Toolkit for global state, Context for auth
4. **Code Quality**: ESLint v9 with React-specific rules
5. **Styling**: Tailwind CSS v4 with custom design tokens
6. **Type Safety**: PropTypes disabled (ready for TypeScript migration)
7. **Performance**: Lazy loading for routes, optimized builds

## 🔄 Migration Notes

This boilerplate uses the latest versions with breaking changes addressed:

- **Tailwind CSS v4**: Uses `@import` and `@theme` instead of config files
- **ESLint v9**: Migrated to flat config format
- **React 19**: JSX runtime automatically imports React
- **Redux Toolkit v2**: Updated API and type definitions
- **React Router v7**: Compatible with latest routing patterns

## 📖 Learn More

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Redux Toolkit](https://redux-toolkit.js.org)
- [React Router](https://reactrouter.com)

## 📄 License

MIT

## 👤 Author

**arrafi-mahin** - [GitHub Profile](https://github.com/MoinulIslam7)

---

⭐ Star this repository if you find it helpful!
