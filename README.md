# 🌌 Space Objects Viewer

An interactive web application that visualizes near-Earth objects (NEOs), asteroids, comets, planets, and other celestial phenomena. Built to explore the wonders of space through engaging visualizations and educational content.

**🔗 Live Demo:** [https://siddarammanur656.github.io/space-objects-viewer/](https://siddarammanur656.github.io/space-objects-viewer/)

---

## ✨ Features

- **Interactive 3D Solar System** — Full 3D visualization of all planets orbiting the Sun with adjustable speed, orbit paths, and camera controls (powered by Three.js + OrbitControls)
- **3D Planet Explorer** — Individual 3D rotating globe for each planet with realistic atmosphere glow, drag interaction, and detailed statistics (Year Length, Type, Radius, Temperature)
- **3D Earth Globe** — Interactive rotating Earth with atmosphere shader effect on both the Earth and About pages
- **NEO Asteroid Tracker** — Data visualization of near-Earth asteroids using D3.js
- **Celestial Object Encyclopedia** — Detailed pages for planets, stars, black holes, galaxies, nebulae, and the Moon
- **Near-Earth Comets** — Information on notable comets like C/2024 G3, NEOWISE, and ISON
- **Potentially Hazardous Asteroids** — Tracking objects like 99942 Apophis, 1950 DA, and 2001 WN5
- **Animated Star Background** — CSS-only animated starfield across all pages
- **Interactive World Map** — Powered by jvectormap on the Earth page
- **Responsive Design** — Works across desktop, tablet, and mobile devices

---

## � Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, or Safari)
- [VS Code](https://code.visualstudio.com/) with [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) (recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/siddarammanur656/space-objects-viewer.git

# Navigate to the project directory
cd space-objects-viewer
```

### Running the Project

> [!IMPORTANT]
> This project uses **Three.js** for 3D visualizations which load texture images at runtime. Browsers block texture loading on the `file://` protocol due to CORS security restrictions. **You must use a local web server** to see the full experience with textured planets and the 3D Solar System.

#### ✅ Recommended: VS Code Live Server (Preferred)

1. Open the project folder in **VS Code**
2. Install the **Live Server** extension by Ritwick Dey
3. Right-click `index.html` → **"Open with Live Server"**
4. The site will open at `http://127.0.0.1:5500` with live reload

#### Alternative: Python HTTP Server

```bash
# From the project root directory
python3 -m http.server 8080

# Then open in browser
# http://localhost:8080
```

#### Alternative: Node.js

```bash
# Install a simple static server
npx -y serve .

# Then open the URL shown in the terminal
```

> [!NOTE]
> Opening `index.html` directly (via `file://`) will work for navigation and most features, but 3D textures on the Solar System, Planets, and Earth pages will appear dark/untextured.

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Semantic page structure |
| CSS3 | Styling, animations, glassmorphism, responsive design |
| JavaScript | Interactivity, 3D rendering, planet navigation |
| Bootstrap 5 | Grid system, responsive components |
| Three.js | 3D planet globes, Solar System visualization |
| D3.js | Asteroid data visualization |
| Font Awesome | Icons |
| Google Fonts (Outfit, Roboto) | Typography |

---

## 📁 Project Structure

```
space-objects-viewer/
├── index.html                # Homepage with space object cards
├── asteroids.html            # NEO asteroid data visualization (D3.js)
├── Solar-System.html         # 3D Solar System (Three.js + OrbitControls)
├── pages/                    # Individual space object detail pages
│   ├── earth.html            # Earth page with 3D globe + world map
│   ├── planets.html          # 3D planet explorer with navigation
│   ├── about.html            # Team page with 3D Earth + flip cards
│   ├── moon.html, stars.html, galaxy.html, nebula.html, black-hole.html
│   ├── [asteroid pages]      # 2020VT4, 2004FH, 99942Apophis, etc.
│   └── [comet pages]         # C2024G3, C2023A3, 13POlbers, etc.
├── css/                      # Stylesheets
│   ├── home.css              # Global navbar, footer, and shared styles
│   ├── background.css        # Animated starfield background
│   ├── planets.css           # 3D planet viewer layout
│   ├── earth.css             # Earth page specific styles
│   ├── about.css             # Team cards and about page styles
│   └── ...                   # Other page-specific styles
├── js/                       # JavaScript files
│   ├── home.js               # Navbar scroll effects, back-to-top
│   ├── planets.js            # Planet data (legacy, now inlined)
│   ├── solar-system.js       # Solar System 3D logic (legacy)
│   └── ...                   # Other scripts
├── images/                   # All project images
│   ├── comets/               # Comet images and orbit paths
│   ├── hazardous/            # Potentially hazardous asteroid images
│   └── planets/              # Planet images for legacy views
└── Image/                    # Three.js texture maps (earth.jpg, mars.jpg, etc.)
```

---

## 🖥️ Pages Overview

| Page | Description |
|---|---|
| **Home** | Landing page with animated hero, space object cards, and navigation |
| **Earth** | Interactive 3D Earth globe, detailed info, and world map |
| **Planets** | 3D planet explorer — cycle through all 9 planets with stats |
| **Solar System** | Full 3D solar system with orbits, speed control, and camera |
| **Asteroids** | D3.js data visualization of near-Earth objects |
| **About** | Team members with flip cards and 3D Earth globe |

---

## 👥 Team

| Name | Role |
|---|---|
| Siddarama Mallanna Manur | Web Developer |
| Rajendra Guttedar | Backend Developer |
| Suchanksh B C | Web Developer |
| Prathap | Full Stack Developer |
| Mehan M | Front End Developer |
| Bangaru Sathwik Reddy | Front End Developer |

---

## 📫 Contact

- **Siddarammanur656** — [GitHub](https://github.com/siddarammanur656)
- **Rajendra0309** — [GitHub](https://github.com/Rajendra0309)

---

## 📄 Data Sources

- [NASA](https://www.nasa.gov/)
- [CNEOS - JPL Near Earth Object Program](https://cneos.jpl.nasa.gov/)
- [NASA Eyes](https://eyes.nasa.gov/)

---

## 📝 License

This project is for educational purposes.
