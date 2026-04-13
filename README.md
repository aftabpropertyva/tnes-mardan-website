# The Noble Education System (TNES) Mardan Website

This is a professional, responsive single-page website for **The Noble Education System (TNES) Mardan**, built with HTML5, CSS3, JavaScript, and Bootstrap 5.

## 🌐 Live Demo
The website is hosted on GitHub Pages:
👉 [https://aftabpropertyva.github.io/tnes-mardan-website/](https://aftabpropertyva.github.io/tnes-mardan-website/)

## 🚀 Features
- **Modern Design:** Elegant Blue, Gold, and White theme.
- **Fully Responsive:** Works perfectly on mobile, tablet, and desktop.
- **Interactive Sections:** Home, About, Academics, Facilities, Gallery, Admissions, and Contact.
- **WhatsApp Integration:** Floating chat widget and prominent contact buttons.
- **Animations:** Smooth reveal animations using AOS (Animate On Scroll).
- **SEO Optimized:** Meta tags and structured content for better search visibility.
- **Google Maps:** Embedded location for easy navigation.

## 🛠️ Customization Guide

### 1. Update School Details
To change the school name, address, or contact info, edit the following in `index.html`:
- **School Name:** Search for `The Noble Education System` and replace it.
- **WhatsApp Number:** Search for `923159953417` and replace it with your number.
- **Address:** Search for `Baghdaad Mardan` and update the text.

### 2. Change Images
All images are located in the `assets/` folder. To replace an image:
1. Upload your new image to the `assets/` folder.
2. Update the `src` attribute in `index.html` to point to your new file.
   - Hero Image: `assets/hero.jpg`
   - Logo: `assets/logo.png`
   - Gallery Images: `assets/classroom.jpg`, `assets/playground.jpg`, etc.

### 3. Update Contact Form
The contact form uses [Formspree](https://formspree.io/). To receive emails:
1. Create a free account at Formspree.
2. Create a new form and get your unique ID.
3. Replace `https://formspree.io/f/placeholder` in `index.html` with your Formspree URL.

### 4. Change Theme Colors
To change the colors, edit the `:root` variables in `css/style.css`:
```css
:root {
    --primary-blue: #003366;
    --secondary-gold: #D4AF37;
    /* ... */
}
```

## 📸 QR Code
Scan the QR code below to visit the live site:
![QR Code](assets/qrcode.png)

## 📄 License
This project is open-source and free to use for educational purposes.

---
*Shaping Future Leaders - TNES Mardan*
