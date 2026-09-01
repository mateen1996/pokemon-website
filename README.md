# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# 🐾 PokeDex — Pokémon Explorer

A modern and responsive Pokémon Explorer web application built with **React.js, Vite, Tailwind CSS, and PokeAPI**.

Explore Pokémon, search by name, view detailed information, discover Pokémon types, abilities, stats, and more — all through a clean and responsive UI.

---

## 🚀 Live Demo

🔗 **Live Website:** https://pokedex-world.netlify.app/

---

## 📸 Features

* 🔎 Search Pokémon by name
* 🧩 Browse Pokémon types
* 📋 Pokémon listing
* 🔍 Detailed Pokémon information
* ⚡ Pokémon abilities
* 📊 Base statistics
* 🧬 Pokémon generation
* 🏷️ Pokémon category
* ❤️ Pokémon types
* 🖼️ Official Pokémon artwork
* 📱 Fully responsive design
* 🌙 Dark mode support
* 🔄 Loading & error states
* ⬆️ Scroll-to-top functionality
* 🧭 React Router navigation
* 🌐 API integration using PokeAPI

---

## 🛠️ Tech Stack

### Frontend

* **React.js**
* **JavaScript (ES6+)**
* **Tailwind CSS**
* **React Router DOM**
* **Vite**

### API

* **PokeAPI**

### Icons

* **Font Awesome**

### Deployment

* **GitHub**

---

## 📄 Pages

### 🏠 Home

Landing page of the application with an introduction to the PokeDex.

### 🐾 Pokémon

Displays Pokémon cards with their:

* Name
* Image
* ID
* Types
* Basic information

### 🔍 Pokémon Details

Detailed Pokémon information including:

* Pokémon image
* Name
* Category
* Type
* Height
* Weight
* Ability
* Base experience
* Generation
* Base stats

### 🔥 Types

Displays the different Pokémon types with a searchable type list.

### ℹ️ About

Contains information about the PokeDex project and the technologies used.

---

## 🔗 API

This project uses **PokeAPI** to fetch Pokémon data.

```text
https://pokeapi.co/api/v2/pokemon
```

The application uses Pokémon and Pokémon Species API endpoints to retrieve detailed information.

---

## ⚙️ Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Go to the project directory:

```bash
cd PokeDex
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---

## 🏗️ Build for Production

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

The production files will be generated inside:

```text
dist/
```

---

## 🔄 CI/CD

This project can be deployed using **GitHub Actions and Azure Static Web Apps**.

The deployment pipeline follows:

```text
Developer
    ↓
Git Push
    ↓
GitHub Repository
    ↓
GitHub Actions
    ↓
Install Dependencies
    ↓
npm run build
    ↓
Build Success
    ↓
Azure Static Web Apps
    ↓
Live Website
```

Every new push to the configured branch can automatically trigger the CI/CD pipeline.

---

## 📱 Responsive Design

The application is designed to work across:

* 💻 Desktop
* 💻 Laptop
* 📱 Mobile
* 📲 Tablet

---

## 🎯 Learning Goals

This project was created to practice and demonstrate:

* React components
* Props
* State management with `useState`
* Side effects with `useEffect`
* API integration using `fetch`
* Dynamic rendering using `.map()`
* Array methods such as `.filter()` and `.find()`
* Optional chaining
* React Router
* Dynamic routes
* Loading and error handling
* Tailwind CSS
* Responsive UI development
* Git & GitHub


---

## 👨‍💻 Developer

**Matin Shaikh**

Frontend Developer

### Skills Used

```text
HTML5
CSS3
JavaScript
React.js
Tailwind CSS
React Router
Git
GitHub
GitHub Actions
Azure
REST API
```

---

## ⭐ Support

If you like this project, consider giving the repository a ⭐ on GitHub.

---


