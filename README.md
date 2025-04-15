# Tempo ⏱️

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Chart.js](https://img.shields.io/badge/chart.js-F5788D.svg?style=flat&logo=chart.js&logoColor=white)](https://www.chartjs.org/)

<p align="center">
  <img src="https://raw.githubusercontent.com/yourusername/tempo/main/public/tempo-preview.png" alt="Tempo Application Preview" width="600">
</p>

## 🚀 Overview

Tempo is a sophisticated time management application featuring an innovative circular timeline visualization for tracking and managing daily tasks and activities. The intuitive interface enables users to visualize their time allocation throughout the day with stunning visual representations.

## ✨ Features

- **🕒 Circular Timeline:** Visually track your time with an interactive SVG-based circular timeline
- **📋 Dynamic Tasks:** Real-time task management with intuitive drag-and-drop capabilities
- **📊 Interactive Reports:** Comprehensive productivity trends and time distribution visualizations
- **🎯 AI-Powered Suggestions:** Intelligent task scheduling recommendations based on your habits
- **⚡ Quick Task Addition:** Add tasks instantly with streamlined controls
- **📱 Responsive Design:** Fully responsive interface that works across all device sizes
- **♿ Accessibility:** Designed with keyboard navigation, ARIA attributes and screen reader support
- **🛡️ Error Handling:** Graceful fallbacks and intuitive error states when resources fail to load

## 📦 Project Structure

The application is organized into modular components following a clean architecture pattern:

```
tempo/
├── index.html           # Main HTML entry point
├── src/
│   ├── js/
│   │   ├── main.js      # Application initialization
│   │   ├── store.js     # State management system
│   │   ├── timeline.js  # Circular timeline visualization
│   │   ├── charts.js    # Data visualization with Chart.js
│   │   ├── tabs.js      # Tab navigation system
│   │   ├── tasks.js     # Task management functionality
│   │   ├── aiSuggestions.js  # AI-powered suggestions
│   │   └── utils.js     # Utility functions
│   └── css/
│       └── styles.css   # Custom styling
├── public/              # Static assets
└── ...
```

## 🛠️ Technologies

- **Vanilla JavaScript** with ES Modules for modularity
- **SVG** for interactive timeline visualization
- **Chart.js** for data visualization
- **Custom state management** for predictable data flow
- **Modern CSS** including CSS variables, Flexbox, and Grid

## 🚀 Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm 7.x or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/tempo.git
   cd tempo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to:
   ```
   http://localhost:3000
   ```

## 📋 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build
- `npm run lint` - Lint JavaScript files
- `npm run format` - Format code with Prettier
- `npm run test` - Run tests

## 📊 Task Data Structure

Tasks in Tempo follow a consistent data structure:

```javascript
{
  id: 1,                // Unique identifier
  title: "Email & Planning", 
  start: "8:00",        // Formatted start time
  end: "10:00",         // Formatted end time
  startTime: 8,         // Decimal start time (hours)
  endTime: 10,          // Decimal end time (hours)
  category: "Work",     // Task category
  color: "#5046e4",     // Color associated with category
  path: "M 200 200 L 200 40 A 160 160 0 0 1 290 80 L 200 200"  // SVG path for the timeline arc
}
```

## 💻 Browser Support

Tempo supports all modern browsers that implement:
- ES Modules
- CSS Custom Properties (Variables)
- SVG and modern DOM APIs

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. 
The application works in all modern browsers that support ES modules, CSS variables, and SVG. Internet Explorer is not supported. 