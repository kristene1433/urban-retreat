# Urban Retreat - Modern Vacation Rental Website

A modern, responsive vacation rental website built with Next.js 14, TypeScript, and Tailwind CSS. Features a beautiful design inspired by luxury vacation rental websites with full booking functionality.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Booking**: Modal booking form with form validation
- **Image Gallery**: Filterable photo gallery with lightbox functionality
- **Multiple Pages**: Home, Guesthouse, Gallery, Rates, Contact pages
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Framer Motion**: Smooth animations and transitions
- **Form Handling**: React Hook Form for efficient form management
- **Toast Notifications**: User feedback with react-hot-toast

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Icons**: Lucide React
- **Notifications**: React Hot Toast

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd urban-retreat
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
urban-retreat/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── guesthouse/        # Guesthouse page
│   ├── gallery/           # Gallery page
│   ├── rates/             # Rates page
│   └── contact/           # Contact page
├── components/            # Reusable components
│   ├── Navigation.tsx     # Navigation component
│   ├── Hero.tsx          # Hero section
│   ├── BookingForm.tsx   # Booking modal
│   ├── WelcomeSection.tsx # Welcome section
│   ├── FeaturesSection.tsx # Features section
│   └── Footer.tsx         # Footer component
├── public/               # Static assets
├── tailwind.config.js    # Tailwind configuration
├── next.config.js        # Next.js configuration
└── package.json          # Dependencies
```

## 🎨 Design Features

### Color Palette
- **Primary Gold**: #f59e0b (Gold-500)
- **Urban Gray**: #64748b (Urban-500)
- **Background**: Clean whites and grays
- **Accents**: Gold highlights throughout

### Typography
- **Headings**: Montserrat (Google Fonts)
- **Body Text**: Roboto (Google Fonts)

### Components
- **Navigation**: Fixed header with smooth scrolling
- **Hero Section**: Full-screen with booking form
- **Booking Modal**: Animated modal with form validation
- **Image Gallery**: Filterable with lightbox
- **Pricing Cards**: Interactive pricing display
- **Contact Form**: Multi-step form with validation

## 🔧 Customization

### Colors
Edit `tailwind.config.js` to customize the color palette:

```javascript
theme: {
  extend: {
    colors: {
      gold: {
        500: '#f59e0b', // Your custom gold
      },
      urban: {
        500: '#64748b', // Your custom gray
      }
    }
  }
}
```

### Content
- Update images in the `components/` directory
- Modify text content in each page component
- Customize the booking form fields in `BookingForm.tsx`

### Styling
- Global styles in `app/globals.css`
- Component-specific styles using Tailwind classes
- Custom animations in `tailwind.config.js`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Connect GitHub repository
- **AWS Amplify**: Deploy from GitHub
- **DigitalOcean App Platform**: Deploy from GitHub

## 🔮 Future Enhancements

- [ ] Payment integration (Stripe)
- [ ] Calendar availability system
- [ ] User authentication
- [ ] Admin dashboard
- [ ] Email notifications
- [ ] Multi-language support
- [ ] SEO optimization
- [ ] Analytics integration

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Support

If you have any questions or need help, please contact us at:
- Email: info@urbanretreat.com
- Phone: +1 (555) 123-4567

---

Built with ❤️ using Next.js and Tailwind CSS
