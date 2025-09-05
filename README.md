# Arif Özalp - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Vite. This website showcases my projects, skills, certifications, and professional experience as a Computer Engineering student.

## Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Optimized for mobile, tablet, and desktop devices
- **Interactive Components**: Modal views for certifications, animated project cards
- **Fast Performance**: Built with Vite for optimal loading speeds
- **TypeScript**: Type-safe development with better code quality
- **GitHub Pages Ready**: Configured for easy deployment

## Technology Stack

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Styling**: CSS3 with CSS Grid and Flexbox
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Merriweather, Open Sans)

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages:

1. Push your code to the `main` branch
2. The GitHub Actions workflow will automatically build and deploy the site
3. Your site will be available at `https://yourusername.github.io/portfolio/`

### Manual Deployment

If you prefer manual deployment:

1. Build the project: `npm run build`
2. Push the `dist` folder to the `gh-pages` branch
3. Enable GitHub Pages in your repository settings

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Navbar.tsx      # Navigation component
│   └── ProjectCard.tsx # Project card component
├── pages/              # Page components
│   ├── Home.tsx        # Home page
│   ├── Projects.tsx    # Projects listing
│   ├── ProjectDetail.tsx # Individual project details
│   ├── Resume.tsx      # Resume/CV page
│   └── Skills.tsx      # Skills and certifications
├── styles/             # CSS stylesheets
│   ├── index.css       # Global styles
│   ├── App.css         # App-specific styles
│   └── [component].css # Component-specific styles
└── assets/             # Images and static assets
```

## Customization

### Colors

The color scheme is defined in CSS custom properties in `src/styles/index.css`:

```css
:root {
  --primary-color: #5d3a00;
  --secondary-color: #c09a36;
  --bg1: #f9ecdb;
  --bg2: #ead9bf;
  --bg3: #d8c3a5;
  --wave-soft: #f4e5ce;
  --text-color: #333;
  --white: #fff;
}
```

### Content

- **Personal Information**: Update in `src/pages/Home.tsx`
- **Projects**: Modify the projects array in `src/pages/Projects.tsx`
- **Resume**: Edit the content in `src/pages/Resume.tsx`
- **Skills**: Update skills and certifications in `src/pages/Skills.tsx`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Email**: ozalpariff@gmail.com
- **LinkedIn**: [Arif Özalp](https://www.linkedin.com/in/arif-özalp-597374326/)
- **GitHub**: [arifozalp](https://github.com/arifozalp)
