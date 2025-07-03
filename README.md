# CodeVibe 2025 - Conference Website

A modern, responsive conference website built with SvelteKit, Bootstrap, and JavaScript. This project showcases the CodeVibe 2025 technology conference with features including dark mode, countdown timer, responsive design, and comprehensive registration system.

## ✨ Features

- **Responsive Design**: Mobile-first approach with Bootstrap 5
- **Dark Mode**: Toggle between light and dark themes with localStorage persistence
- **Interactive Components**: 
  - Live countdown timer to conference date (July 21-23, 2025)
  - Comprehensive registration form with multiple sections
  - FAQ accordion with proper accessibility
  - Session filtering by day and track
  - Responsive navigation with mobile menu
  - Contact form and feedback system

- **Modern Tech Stack**:
  - SvelteKit with Svelte 5
  - Bootstrap 5.3.3 with Bootstrap Icons
  - Vite for fast development and building
  - CSS3 with smooth transitions and animations
  - Fully accessible (WCAG compliant)

## 📄 Pages

1. **Home**: Hero section, countdown timer, featured speakers, quick info
2. **Speakers**: Keynote and featured speakers with detailed profiles
3. **Schedule**: Day-by-day session schedule with filtering (July 21-23, 2025)
4. **Sponsors**: Sponsor tiers (Gold, Silver, Bronze) with benefits
5. **About**: Conference mission, history, values, team, and venue with Google Maps integration
6. **Contact**: Contact form, venue info, and FAQ
7. **Register**: Comprehensive registration form with payment, offers, FAQ, support, and feedback sections

## 🚀 Installation and Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Local Development

1. Clone the repository:
```bash
git clone <repository-url>
cd task_tech
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in terminal)

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🚀 Deployment

This project is optimized for deployment on Netlify and other static hosting platforms.

### Netlify Deployment

#### Option 1: Git-based Deployment (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Log in to [Netlify](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your Git provider and select your repository
5. Netlify will automatically detect the build settings from `netlify.toml`:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: 18

#### Option 2: Manual Deployment

1. Build the project locally:
```bash
npm run build
```

2. Drag and drop the `dist` folder to Netlify's deploy area
3. Your site will be live instantly

#### Option 3: Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Build and deploy:
```bash
npm run build
netlify deploy --prod --dir=dist
```

### Other Hosting Platforms

#### Vercel
1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel --prod`

#### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add script to package.json: `"deploy": "gh-pages -d dist"`
3. Build and deploy: `npm run build && npm run deploy`

## ⚙️ Configuration

### Environment Variables
No environment variables are required for basic functionality.

### Dark Mode
Dark mode preference is automatically saved to localStorage and restored on page reload.

### Conference Data
Conference information (speakers, schedule, sponsors) is stored in `src/lib/store.js` and can be easily modified.

### Performance Optimization
- Static asset caching (31536000 seconds)
- CSS and JS minification
- Image optimization ready
- Gzip compression enabled

## 📱 Responsive Design

The website is fully responsive and tested on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)
- High zoom levels and different screen densities

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader friendly
- Proper ARIA labels and roles
- Color contrast optimization

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📁 Project Structure

```
task_tech/
├── public/           # Static assets
├── src/
│   ├── lib/         # Svelte components
│   │   ├── About.svelte
│   │   ├── Contact.svelte
│   │   ├── Header.svelte
│   │   ├── Home.svelte
│   │   ├── Register.svelte
│   │   ├── Schedule.svelte
│   │   ├── Speakers.svelte
│   │   ├── Sponsors.svelte
│   │   ├── router.js
│   │   └── store.js
│   ├── App.svelte   # Main app component
│   └── main.js      # Entry point
├── netlify.toml     # Netlify configuration
└── package.json
```

## 🐛 Troubleshooting

### Build Issues
- Ensure Node.js version 18 or higher
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check for any TypeScript/linting errors

### Deployment Issues
- Verify `dist` folder is generated after build
- Check netlify.toml configuration
- Ensure all dependencies are listed in package.json

## 📞 Support

For issues and questions:
1. Check existing issues in the repository
2. Create a new issue with detailed description
3. Include browser version and error messages

## 📄 License

This project is licensed under the MIT License.
