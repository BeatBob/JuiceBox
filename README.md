# 🍹 Juicebox

An interactive, animated survey experience built with **Next.js**, **Tailwind CSS**, and **Framer Motion** — featuring smooth Lenis scrolling, Lottie animations, and Swiper-powered carousels.

---

## 🚀 Features

- ⚡️ **Next.js 15** with `app/` structure and Turbopack
- 🎨 **Tailwind CSS 4** for styling
- 🎞 **Framer Motion** animations
- 🌀 **Lenis** for buttery-smooth scroll experience
- 🎥 **Lottie** player integration for animations
- 🧭 **Swiper.js** carousel for multi-step flow
- 🧩 Reusable UI components (`Button`, `Input`)
- 🧠 Responsive and accessible layout

---

## 📦 Folder Structure

src/

├─ components/

│ ├─ container/

│ │ └─ PageContainer.tsx # Layout with Lenis scroll setup

│ ├─ ui/

│ │ ├─ Button.tsx # Reusable button

│ │ └─ Input.tsx # Reusable form input

│ ├─ Carousel.tsx # Swiper-based get started steps

│ ├─ LottieAnimation.tsx # Animated hexagon display

│ └─ JuiceboxTitle.tsx # Animated hover effect on title

├─ app/

│ └─ page.tsx # Main app entry

├─ fonts/

├─ fonts/

│ └─ global.css # tailwind import, color variable, some swiper.js class update

│ └─ fonts.css # Specifies the resource containing font data

---

## 🛠️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/BeatBob/JuiceBox.git
cd juicebox
```

### 2. Install dependencies

```bash
yarn
```

or with npm

remove yarn.lock

```bash
npm install
```

### 3. Run locally

```bash
yarn dev
```

or with npm

```bash
npm run dev
```

Visit http://localhost:3000 to see the app

### 4. Run locally

```bash
yarn build
yarn start
```

or with npm

```bash
npm run build
npm start
```
