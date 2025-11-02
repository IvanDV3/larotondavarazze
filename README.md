# Ristorante La Rotonda - Varazze

Modern, responsive website for Ristorante La Rotonda in Varazze, Italy. Built with Tailwind CSS and vanilla JavaScript for optimal performance and accessibility.

## 🚀 Quick Start

The website is ready to deploy! All files are optimized and production-ready.

### Local Development
1. Open `index.html` in your browser
2. Or serve locally with a simple HTTP server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (if you have http-server installed)
   npx http-server
   ```

## 📁 Project Structure

```
larotondavarazze/
├── index.html              # Main website (single-page application)
├── css/
│   └── components.css      # Custom components and utilities
├── js/
│   └── utils.js           # JavaScript utilities and interactions
├── assets/
│   ├── images/            # All existing images preserved
│   │   ├── background.png  # Hero background
│   │   ├── logobello.png  # Restaurant logo
│   │   ├── food1.jpg      # Food photos
│   │   ├── inside1.jpg    # Interior photos
│   │   ├── outside1.jpg   # Exterior photos
│   │   ├── outside2.jpg
│   │   ├── outside3.jpg
│   │   └── placeholder/   # For future image updates
│   └── pdf/               # Legal documents and menu
│       ├── menu.pdf
│       ├── cookiepolicy.pdf
│       ├── privacypolicy.pdf
│       └── T&C.pdf
├── _backup_20241220/      # Original files backup
└── README.md
```

## 🎨 Design Features

- **Modern Design**: Clean, airy layout with generous spacing
- **Mobile-First**: Fully responsive design that works on all devices
- **High Contrast**: Accessible color scheme with proper contrast ratios
- **Smooth Animations**: Subtle hover effects and transitions
- **Typography**: Beautiful combination of Playfair Display (serif) and Inter (sans-serif)

## 🛠️ Customization Guide

### Updating Images

To replace images with better ones:

1. **Hero Background**: Replace `assets/images/background.png`
2. **Logo**: Replace `assets/images/logobello.png`
3. **Gallery Images**: Add new images to `assets/images/` and update references in HTML

**TODO for better images:**
- `assets/images/placeholder/hero-better.jpg` - Better hero background
- `assets/images/placeholder/gallery-1.jpg` - Interior gallery
- `assets/images/placeholder/gallery-2.jpg` - Food gallery
- `assets/images/placeholder/gallery-3.jpg` - Exterior gallery

### Updating Menu Content

The menu is in `index.html` in the Menu Section. All prices and dishes are preserved exactly as they were. To update:

1. Find the menu section (around line 200)
2. Update dish names, prices, or descriptions
3. Maintain the same structure for consistency

### Updating Business Information

**Contact Information** (in Contact Section):
- Address: Corso G. Matteotti 2, 17019, Varazze (SV), Italia
- Phone: 019 939 9498
- Email: larotondavarazze@gmail.com
- Hours: Lunedì - Domenica: 12:00 - 15:00, 19:00 - 23:00

**Opening Hours** (in Footer):
- Same hours as contact section
- Winter closure: Mercoledì

### Updating Legal Pages

All legal documents are in `assets/pdf/`:
- `menu.pdf` - Full menu PDF
- `cookiepolicy.pdf` - Cookie policy
- `privacypolicy.pdf` - Privacy policy  
- `T&C.pdf` - Terms and conditions

## 🚀 Deployment Options

### Option 1: Netlify (Recommended)

1. **Drag & Drop Deployment:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/login to your account
   - Drag the entire project folder to the deploy area
   - Your site will be live at a random URL like `https://amazing-name-123456.netlify.app`

2. **Custom Domain Setup:**
   - In Netlify dashboard, go to "Domain settings"
   - Click "Add custom domain"
   - Enter your domain (e.g., `larotondavarazze.it`)
   - Follow the DNS configuration instructions

**DNS Records for Custom Domain:**
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME  
Name: www
Value: larotondavarazze.netlify.app
```

### Option 2: GitHub Pages

1. **Create GitHub Repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/larotondavarazze.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Your site will be live at `https://yourusername.github.io/larotondavarazze`

### Option 3: Vercel

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow prompts** and your site will be live

### Option 4: Traditional Web Hosting

Upload all files to your web hosting provider's public_html or www folder via FTP/SFTP.

## 🔧 Technical Details

### Performance Optimizations
- **Lazy Loading**: Images load only when needed
- **CDN**: Tailwind CSS loaded from CDN for speed
- **Minimal JavaScript**: Lightweight, vanilla JS only
- **Optimized Images**: Proper sizing and compression

### SEO Features
- **Meta Tags**: Complete Open Graph and Twitter Card support
- **Structured Data**: Restaurant schema ready for implementation
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Alt Text**: Descriptive alt text for all images

### Accessibility Features
- **Focus Management**: Visible focus indicators
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Proper ARIA labels and landmarks
- **Color Contrast**: WCAG AA compliant contrast ratios

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

### Common Issues

1. **Images not loading**: Check file paths and ensure images exist
2. **Mobile menu not working**: Ensure JavaScript is enabled
3. **Styling issues**: Check that Tailwind CDN is loading properly

### Performance Issues

1. **Slow loading**: Check image sizes and optimize if needed
2. **Layout shifts**: Ensure all images have width/height attributes
3. **Mobile performance**: Test on actual devices, not just browser dev tools

## 📞 Support

For technical issues or customization requests, refer to the original development team or web development resources.

## 📄 License

All content and images are property of Ristorante La Rotonda. Code is available for the restaurant's use.

---

**Last Updated**: December 20, 2024  
**Version**: 2.0 (Modernized with Tailwind CSS)