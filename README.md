# My Portfolio

A modern, clean portfolio website built with React and Vite. Features a light, simple design with smooth animations and responsive layout.

## 🚀 Features

- **Modern React** - Built with React 18 and Vite for fast development
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Clean UI** - Light, simple interface that's easy to navigate
- **GitHub Integration** - Direct links to your GitHub profile
- **Smooth Animations** - Elegant hover effects and transitions
- **Easy to Customize** - Well-organized code structure

## 📋 Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- Git

## 🛠️ Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/kilongdev/PM-MNM.git
   cd PM-MNM
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173`

## 🌐 Deploy to GitHub Pages

### Step 1: Customize Your Content

Before deploying, update the following files with your information:

1. **src/components/Header.jsx** - Update your name and title
2. **src/components/About.jsx** - Write your bio
3. **src/components/Projects.jsx** - Add your projects
4. **src/components/Contact.jsx** - Update your email and LinkedIn

### Step 2: Create GitHub Repository

1. Create a **new repository** on GitHub (or use your existing one)
2. To publish at the root URL, repository name must be exactly `kilongdev.github.io`
3. Use `base: '/'` in `vite.config.js` (already configured)

### Step 3: Push Your Code

```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
git branch -M main
git remote add origin https://github.com/kilongdev/kilongdev.github.io.git
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically deploy your site

### Step 5: Access Your Site

After deployment completes (usually 2-3 minutes), your site will be available at:
```
https://kilongdev.github.io/
```

## 📝 Customization Guide

### Change Colors

Edit `src/App.css` and modify these CSS variables:

```css
/* Header gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Primary color */
color: #667eea;
```

### Add More Projects

Edit `src/components/Projects.jsx` and add objects to the `projects` array:

```javascript
{
  title: 'Your Project Name',
  description: 'Project description here',
  tags: ['React', 'Node.js', 'MongoDB'],
  github: 'https://github.com/kilongdev/project-name',
  demo: 'https://your-demo-link.com'
}
```

### Update Skills

Edit `src/components/Skills.jsx` to add or remove skills from the `skills` array.

### Change Sections

The main layout is in `src/App.jsx`. You can reorder, add, or remove sections as needed.

## 📦 Build for Production

To create a production build locally:

```bash
npm run build
```

The built files will be in the `dist` folder.

## 🔧 Tech Stack

- **React** - UI library
- **Vite** - Build tool
- **React Icons** - Icon library
- **CSS3** - Styling
- **GitHub Actions** - Automated deployment

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

- GitHub: [@nguyenkimlong2104](https://github.com/nguyenkimlong2104)
- Email: your.email@example.com

---

Built with ❤️ using React and deployed on GitHub Pages
