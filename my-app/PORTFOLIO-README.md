# 🚀 Rumal Egodawatta - ML Engineer Portfolio

A modern, professional portfolio website for showcasing Machine Learning projects and skills. Built with Next.js 15, TypeScript, and Tailwind CSS.

## 🎨 Design

### Color Palette
| Purpose        | Color          | Hex       |
| -------------- | -------------- | --------- |
| Background     | Near Black     | `#0F172A` |
| Cards          | Dark Blue Gray | `#1E293B` |
| Primary Text   | White          | `#E5E7EB` |
| Secondary Text | Light Gray     | `#94A3B8` |
| Accent         | Cyan           | `#38BDF8` |

### Features
- ✨ Modern, animated UI with smooth transitions
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎯 Smooth scrolling navigation
- 🌊 Floating background animations
- 💫 Fade-in and slide-up animations
- 🎨 Custom scrollbar with accent color
- 🖼️ Profile picture integration ready

## 🏗️ Project Structure

```
my-app/
├── app/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # Navigation with scroll effect
│   │   │   └── Footer.tsx       # Footer with social links
│   │   ├── sections/
│   │   │   ├── Hero.tsx         # Landing section with profile
│   │   │   ├── About.tsx        # About section
│   │   │   ├── Skills.tsx       # Skills showcase
│   │   │   ├── Projects.tsx     # Project portfolio
│   │   │   └── Contact.tsx      # Contact form
│   │   └── ui/
│   │       └── Button.tsx       # Reusable button component
│   ├── data/
│   │   ├── projects.ts          # Project data
│   │   └── skills.ts            # Skills data
│   ├── globals.css              # Global styles & animations
│   ├── layout.tsx               # Root layout with Navbar/Footer
│   └── page.tsx                 # Home page
├── public/                      # Static assets
└── package.json
```

## 📋 Navigation

The navigation bar includes:
- 🏠 **Home** - Landing page
- 👤 **About** - Background and story
- 💪 **Skills** - Technical skills
- 💼 **Projects** - Portfolio showcase
- 🎓 **Experience** - Work and education
- 📄 **Download Resume** - Resume download button
- 💬 **Let's Talk** - Contact button (accent style)

## 🖼️ Adding Your Profile Picture

1. Save your profile photo as `profile.jpg` or `profile.png`
2. Place it in the `public` folder: `my-app/public/profile.jpg`
3. In [app/components/sections/Hero.tsx](app/components/sections/Hero.tsx), uncomment lines 143-149:

```tsx
<Image
  src="/profile.jpg"
  alt="Rumal Egodawatta"
  fill
  className="object-cover"
  priority
/>
```

4. Remove or comment out the placeholder div (lines 134-141)

## 📄 Adding Your Resume

1. Save your resume as `resume.pdf`
2. Place it in the `public` folder: `my-app/public/resume.pdf`
3. The "Download Resume" button in the navbar will automatically work

To use a different filename, update the href in [app/components/layout/Navbar.tsx](app/components/layout/Navbar.tsx):

```tsx
<a
  href="/your-resume-name.pdf"  // Change this
  download
  ...
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd my-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎯 Customization

### Personal Information
Update your information in [app/components/sections/Hero.tsx](app/components/sections/Hero.tsx):
- Name: "Rumal Egodawatta"
- Title: "Machine Learning Engineer"
- Description: Update the bio text
- Social links: Update GitHub, LinkedIn, and email URLs

### Projects
Add your projects in [app/data/projects.ts](app/data/projects.ts)

### Skills
Add your skills in [app/data/skills.ts](app/data/skills.ts)

### Contact Information
Update social links in:
- [app/components/sections/Hero.tsx](app/components/sections/Hero.tsx) (Hero section)
- [app/components/layout/Footer.tsx](app/components/layout/Footer.tsx) (Footer)

### Sections
Each section (About, Skills, Projects, Contact) can be customized in their respective files:
- [app/components/sections/About.tsx](app/components/sections/About.tsx)
- [app/components/sections/Skills.tsx](app/components/sections/Skills.tsx)
- [app/components/sections/Projects.tsx](app/components/sections/Projects.tsx)
- [app/components/sections/Contact.tsx](app/components/sections/Contact.tsx)

## 🎨 Animation Classes

Available animation classes (defined in [globals.css](app/globals.css)):
- `.animate-fadeInUp` - Fade in with upward movement
- `.animate-fadeIn` - Simple fade in
- `.animate-float` - Floating animation (3s loop)
- `.animate-glow` - Glowing effect for borders

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms
- **Netlify**: Connect your Git repository
- **GitHub Pages**: Use `next export` for static export
- **AWS/Azure/GCP**: Deploy as a containerized app

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Geist Sans & Geist Mono
- **Icons**: SVG icons (GitHub, LinkedIn, Email)

## 📱 Responsive Design

- **Mobile**: Optimized for phones (< 768px)
- **Tablet**: Optimized for tablets (768px - 1024px)
- **Desktop**: Full layout for large screens (> 1024px)

## 🎯 Next Steps

1. ✅ Add your profile picture to `/public/profile.jpg`
2. ✅ Add your resume to `/public/resume.pdf`
3. ✅ Update your social media links
4. ✅ Customize the About section
5. ✅ Add your projects to the Projects section
6. ✅ Update your skills in the Skills section
7. ✅ Add your experience/education
8. ✅ Test the contact form
9. ✅ Deploy to production

## 📞 Contact

**Rumal Egodawatta**
- 3rd Year MIS Undergraduate
- Passionate about Python & Machine Learning
- Email: rumal@example.com (update in code)

---

Built with 💙 using Next.js and Tailwind CSS
