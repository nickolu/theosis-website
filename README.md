# THEOSIS - Official Website

A dark, immersive website for the San Diego-based melodic death metal band **THEOSIS**, featuring the "Infernal Cathedral" theme with animated monster transitions between pages.

## 🎸 Features

- **Monster Page Transitions**: Unique animated transitions using custom monster artwork
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Dark Gothic Aesthetic**: Custom "Infernal Cathedral" theme with brand colors
- **YouTube Integration**: Embedded video player on homepage
- **6 Complete Pages**: Home, Band, Music, Shows, Media, and Contact
- **Atmospheric Effects**: Particle animations and custom visual effects
- **SEO Optimized**: Metadata and OpenGraph tags for social sharing

## 🎨 Brand Colors

- **Endless Darkness**: `#000000` - Primary background
- **Cursed Crimson**: `#b6344e` - Blood-ritual red for accents
- **Blistering Heat**: `#dd8d52` - Lava-orange for CTAs and highlights
- **Primordial Ooze**: `#573861` - Dark purple-black for depth

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Animations**: Framer Motion
- **Fonts**: Google Fonts (UnifrakturCook, Grenze Gotisch, Roboto Serif)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd theosis-website
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

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
theosis-website/
├── app/                    # Next.js app directory
│   ├── band/              # Band members page
│   ├── music/             # Discography page
│   ├── shows/             # Tour dates page
│   ├── media/             # Photo & video gallery
│   ├── contact/           # Contact form page
│   ├── layout.tsx         # Root layout with fonts
│   ├── template.tsx       # Monster transition wrapper
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navigation.tsx     # Main navigation bar
│   ├── MonsterTransition.tsx  # Page transition effects
│   ├── YouTubePlayer.tsx  # Video player component
│   └── AtmosphericParticles.tsx  # Particle effects
├── public/                # Static assets
│   └── images/           # Band artwork and logos
└── BRANDING.md           # Brand guidelines
```

## ⚙️ Customization

### Update YouTube Video

Edit the `videoId` prop in the YouTubePlayer component:

```tsx
<YouTubePlayer videoId="YOUR_VIDEO_ID" />
```

### Update Streaming Links

Edit the `streamingLinks` array in `app/music/page.tsx` with actual URLs:

```tsx
const streamingLinks = [
  { name: "Spotify", url: "https://open.spotify.com/artist/YOUR_ID", icon: "🎵" },
  // ... add more platforms
];
```

### Update Band Members

Edit the `bandMembers` array in `app/band/page.tsx` to update member info.

### Add Show Dates

Edit the `upcomingShows` array in `app/shows/page.tsx`:

```tsx
const upcomingShows = [
  {
    date: "2024-01-15",
    venue: "Venue Name",
    location: "City, State",
    ticketLink: "https://...",
  },
];
```

### Contact Form Integration

The contact form is currently a frontend component. To enable form submissions:

1. Add a backend API route in `app/api/contact/route.ts`
2. Or integrate with services like:
   - Formspree
   - SendGrid
   - Netlify Forms
   - EmailJS

### Mailing List Integration

Integrate with services like:
- Mailchimp
- ConvertKit
- Buttondown
- Substack

## 🎨 Monster Artwork

The site uses 5 unique monster illustrations for page transitions:
- **Demon** - Muscular horned creature
- **Organist** - Cathedral pipe organ scene
- **Bug Monster** - Insectoid creature
- **Lizardman** - Reptilian humanoid
- **Zombies** - Undead characters

All artwork follows the brand color palette and gothic aesthetic.

## 📱 Social Media Integration

Update social media links throughout the site:
- Navigation component
- Contact page
- Media page

## 🌐 Deployment

### Vercel (Recommended for Next.js)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy with default Next.js settings

### Other Platforms

- **Netlify**: Configure Next.js runtime
- **AWS Amplify**: Use Next.js SSR configuration
- **Custom Server**: Build and run with `npm run build && npm start`

## 📝 Content Updates

### Homepage
- Hero text: `app/page.tsx`
- About section: `app/page.tsx`

### Band Page
- Member bios: `app/band/page.tsx`
- Band story: `app/band/page.tsx`

### Music Page
- Album info: `app/music/page.tsx`
- Track listings: `app/music/page.tsx`

### Contact Info
- Email and contact details: `app/contact/page.tsx`

## 🔧 Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 📄 License

This website is custom-built for THEOSIS. All band artwork and branding are property of THEOSIS.

## 🤘 Credits

- **Band**: THEOSIS
- **Design Theme**: Infernal Cathedral
- **Development**: Claude Code
- **Framework**: Next.js by Vercel
- **Fonts**: Google Fonts

---

**THEOSIS** - Melodic Death Metal from San Diego
*Enter the Infernal Cathedral*
