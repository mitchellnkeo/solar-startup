# Sunlight Analytics Website Development Roadmap

## Project Overview
Build a modern, high-converting marketing website for Sunlight Analytics - an AI-powered operations platform for the solar energy industry.

**Tech Stack:** TypeScript, React, Tailwind CSS, deployed on Vercel

---

## Design Principles
- **Modern & Bold:** Use contemporary design trends - dark mode aesthetic, glassmorphism effects, vibrant gradients
- **Dynamic & Interactive:** Include smooth animations, hover effects, and micro-interactions throughout
- **Data-Driven Visual Language:** Incorporate data visualization elements, charts, and metrics that convey precision and intelligence
- **Trust & Professionalism:** Balance cutting-edge design with enterprise credibility

---

## Color Palette & Branding
- **Primary:** Solar-inspired oranges/yellows (#FF9500, #FFB800) with deep navy/dark backgrounds (#0A0E27, #1A1F3A)
- **Accents:** Electric blue (#00C2FF) for data/tech elements, green (#00D97E) for sustainability
- **Gradients:** Use vibrant gradients for CTAs and hero sections
- **Typography:** Modern sans-serif (Inter, Plus Jakarta Sans, or Satoshi)

---

## Page Structure & Sections

### 1. Navigation Header
**Requirements:**
- Fixed/sticky navigation with glassmorphism effect on scroll
- Logo on left, navigation links center/right
- Links: Product, Solutions, Customers, Resources, About, Contact
- CTA button: "Request Demo" (prominent, gradient background)
- Mobile: Hamburger menu with smooth slide-in animation

---

### 2. Hero Section
**Requirements:**
- Full-viewport height with striking visual impact
- **Headline:** "AI that boosts solar output, lowers O&M costs, and unlocks hidden revenue from every asset you operate."
- **Subheadline:** Brief descriptor (1-2 lines) about serving solar developers, EPCs, and asset owners
- **CTAs:** Primary "Get Started" + Secondary "Watch Demo"
- **Visual Element:** 
  - Animated 3D solar panel visualization OR
  - Interactive data dashboard preview OR
  - Particle effects representing energy/data flow
  - Consider using Three.js or CSS animations for dynamic background
- **Stats Bar:** Below hero, show 4 key metrics (e.g., "500+ MW Monitored", "98% Forecast Accuracy", "30% Cost Reduction", "$50M Revenue Recovered")

---

### 3. Problem Statement Section
**Requirements:**
- Title: "The Solar Industry's Hidden Challenges"
- Grid layout (2x2 or 1x4) showcasing pain points:
  - Forecasting inaccuracy
  - Grid congestion penalties
  - Asset underperformance
  - Multi-vendor data complexity
- Each pain point: icon, title, brief description
- Dark cards with subtle hover effects (lift, glow, or border animation)

---

### 4. Solution Overview Section
**Requirements:**
- Title: "Transform Raw Data Into Real-Time Intelligence"
- Brief intro paragraph explaining the platform approach
- **Visual:** Central diagram or flowchart showing:
  - Input sources (SCADA, weather, sensors) → Sunlight Platform → Outputs (forecasts, insights, actions)
  - Animate the data flow with subtle motion
- 3 key differentiators in cards below:
  - "Built for Solar" (industry-specific models)
  - "AI-Powered" (ML/automation capabilities)
  - "Full-Stack Operations" (end-to-end coverage)

---

### 5. Product Features Section
**Requirements:**
- Title: "Complete Platform for Solar Operations"
- 6 feature cards (one for each core product feature):
  1. **AI-Powered Production Forecasting**
     - Icon: Weather/sun + graph
     - Description: High-accuracy forecasting using weather models, satellite data, historical performance
     - Benefits: Boost market bidding precision, improve grid compliance, reduce imbalance penalties
  
  2. **Predictive Maintenance & Fault Detection**
     - Icon: Alert/diagnostic
     - Description: Automated anomaly detection across all equipment
     - Benefits: Identify failures early, reduce truck rolls, extend asset lifecycle
  
  3. **Revenue Optimization Engine**
     - Icon: Dollar sign + upward trend
     - Description: ML models evaluate performance deviations to recover lost production
     - Benefits: Quantify revenue leakage, prioritize actions, enable data-driven O&M
  
  4. **Solar-Storage Optimization**
     - Icon: Battery + solar panel
     - Description: AI optimizes charge/discharge cycles for hybrid assets
     - Benefits: Maximize arbitrage, improve capacity value, increase profitability
  
  5. **Portfolio Intelligence Dashboard**
     - Icon: Dashboard/grid
     - Description: Unified operational layer for multi-site management
     - Benefits: Standardizes data, produces KPIs, supports large-scale portfolios
  
  6. **Automated Reporting & Compliance**
     - Icon: Document/checklist
     - Description: Generate investor reports, ESG metrics, compliance docs instantly
     - Benefits: Reduce manual processing, improve transparency

**Layout:** 
- Use alternating left/right layout OR
- 3-column grid with modal/expandable details
- Include relevant icons (use Lucide React)
- Hover effects: Card lift, gradient border glow

---

### 6. Impact/Results Section
**Requirements:**
- Title: "Measurable Impact Across Your Portfolio"
- 4 large metric callouts with animations (count-up on scroll):
  - "25-35% Reduction in O&M Costs"
  - "15-20% Increase in Revenue Capture"
  - "98% Forecast Accuracy"
  - "50% Faster Fault Detection"
- Optional: Mini case study quote or testimonial
- Dark background with gradient accent elements

---

### 7. Who We Serve Section
**Requirements:**
- Title: "Built for Solar Leaders"
- Grid of customer segments (6 cards):
  - Utility-scale solar developers
  - IPPs & asset owners
  - EPCs & O&M companies
  - Renewable energy funds
  - Commercial & industrial solar operators
  - Solar + storage integrators
- Each card: icon, segment name, 1-line value prop
- Subtle hover animations

---

### 8. Platform Preview / Dashboard Screenshot
**Requirements:**
- Full-width section with actual dashboard mockup or interactive preview
- Title: "One Platform. Complete Visibility."
- Show example of the Portfolio Intelligence Dashboard
- Annotate key features with floating labels
- Use glassmorphism effect for the frame/container

---

### 9. Mission & Vision Section
**Requirements:**
- Title: "Our Mission"
- Statement: "To accelerate global solar adoption by empowering solar companies with AI systems that drive reliability, profitability, and sustainable growth."
- Clean, centered typography
- Optional: Background pattern of solar panels or abstract energy visualization

---

### 10. CTA Section (Pre-Footer)
**Requirements:**
- Bold headline: "Ready to unlock the full potential of your solar assets?"
- Subheadline: Brief reinforcement of value
- Primary CTA: "Request a Demo"
- Secondary CTA: "Talk to Our Team"
- Gradient background with animated elements

---

### 11. Footer
**Requirements:**
- **Columns:**
  - Company: About, Careers, Contact
  - Product: Features, Pricing, Security
  - Resources: Blog, Case Studies, Documentation
  - Legal: Privacy Policy, Terms of Service
- Social media icons (LinkedIn, Twitter, etc.)
- Newsletter signup: "Get solar + AI insights delivered monthly"
- Copyright notice
- Dark background, light text

---

## Technical Implementation Guidelines

### TypeScript Setup
```typescript
// Use strict mode
"strict": true

// Define interfaces for:
- Feature cards
- Metrics/stats
- Customer segments
- Navigation items
```

### Component Architecture
```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Section.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── ProblemStatement.tsx
│   │   ├── SolutionOverview.tsx
│   │   ├── Features.tsx
│   │   ├── Impact.tsx
│   │   ├── WhoWeServe.tsx
│   │   ├── PlatformPreview.tsx
│   │   ├── Mission.tsx
│   │   └── CTA.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── MetricCard.tsx
│   │   └── FeatureCard.tsx
│   └── animations/
│       ├── FadeIn.tsx
│       ├── CountUp.tsx
│       └── ParallaxSection.tsx
├── data/
│   ├── features.ts
│   ├── metrics.ts
│   └── segments.ts
├── styles/
│   └── globals.css
├── App.tsx
└── main.tsx
```

### Tailwind Configuration
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          orange: '#FF9500',
          yellow: '#FFB800',
        },
        dark: {
          primary: '#0A0E27',
          secondary: '#1A1F3A',
        },
        accent: {
          blue: '#00C2FF',
          green: '#00D97E',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      backdropBlur: {
        xs: '2px',
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ]
}
```

### Animation Library
- Use **Framer Motion** for scroll-triggered animations and page transitions
- Implement intersection observer for "animate on scroll" effects
- Add subtle parallax effects to hero and key sections

### Key Animations to Implement
1. **Hero:** Fade in headline + CTA, animated background particles
2. **Stats Bar:** Count-up animation on scroll into view
3. **Feature Cards:** Stagger animation (cards appear in sequence)
4. **Metrics Section:** Scale + fade in for large numbers
5. **Hover Effects:** Card lift (translateY), gradient border glow, scale transforms

### Responsive Design Breakpoints
- Mobile: < 640px (single column, simplified animations)
- Tablet: 640px - 1024px (2-column grids)
- Desktop: > 1024px (full layouts, enhanced animations)
- Large Desktop: > 1440px (max-width container, optimized spacing)

---

## Performance Optimization
- **Image Optimization:** Use Next.js Image component or similar for automatic optimization
- **Lazy Loading:** Implement lazy loading for below-fold sections
- **Code Splitting:** Split components and load features section dynamically
- **Font Loading:** Use font-display: swap for custom fonts
- **Lighthouse Score Target:** 90+ on all metrics

---

## Vercel Deployment Configuration

### Build Settings
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "framework": "vite"
}
```

### Environment Variables
Set up in Vercel dashboard:
- `VITE_API_URL` (if connecting to backend later)
- `VITE_GA_ID` (Google Analytics)

### Preview Deployments
- Enable automatic preview deployments for all branches
- Set up custom domain after initial deployment

---

## Deliverables Checklist

### Phase 1: Core Structure (Week 1)
- [ ] Project setup (Vite + React + TypeScript + Tailwind)
- [ ] Component architecture scaffolding
- [ ] Header and Footer components
- [ ] Basic routing (if multi-page)
- [ ] Color system and typography implementation

### Phase 2: Content Sections (Week 2)
- [ ] Hero section with animation
- [ ] Problem statement section
- [ ] Solution overview section
- [ ] All 6 feature cards
- [ ] Impact metrics section
- [ ] Who We Serve section

### Phase 3: Polish & Interactivity (Week 3)
- [ ] Platform preview/dashboard mockup section
- [ ] Mission section
- [ ] Final CTA section
- [ ] All animations implemented
- [ ] Mobile responsive adjustments
- [ ] Cross-browser testing

### Phase 4: Deployment (Week 4)
- [ ] Performance optimization
- [ ] SEO meta tags
- [ ] Analytics integration
- [ ] Vercel deployment
- [ ] Custom domain configuration
- [ ] Final QA pass

---

## Content Guidelines for Cursor AI

When building each section, ensure:
1. **Copy is concise**: Avoid walls of text. Use bullet points sparingly in UI.
2. **Visual hierarchy is clear**: Headlines → subheads → body → CTAs
3. **Whitespace is generous**: Don't cram content
4. **CTAs are prominent**: Every major section should guide toward demo request
5. **Accessibility**: Proper semantic HTML, ARIA labels, keyboard navigation
6. **Loading states**: Add skeleton loaders for dynamic content

---

## Design Resources & Inspiration
- Look at: Databricks, Snowflake, Datadog for enterprise SaaS design patterns
- Solar industry: Aurora Solar, Raptor Maps for industry-specific visual language
- Modern gradients and glassmorphism: Stripe, Linear, Vercel

---

## Post-Launch Enhancements (Future)
- Blog/resources section
- Customer case studies with data visualizations
- Interactive ROI calculator
- Explainer videos embedded
- Live chat widget
- Multi-language support

---

## Notes for Cursor AI
- Prioritize clean, maintainable TypeScript code with proper typing
- Create reusable components (Button, Card, Section wrapper)
- Use Tailwind utility classes exclusively - no custom CSS unless absolutely necessary
- Implement proper error boundaries
- Add loading states for any future API integrations
- Comment complex animation logic
- Follow React best practices (hooks, proper key usage, memo where appropriate)

---

**Project Goal:** Launch a high-converting, visually stunning marketing website that positions Sunlight Analytics as the leading AI platform for solar operations.

**Success Metrics:**
- Lighthouse score > 90
- Mobile-friendly (responsive design)
- Fast load time (< 2s)
- High demo request conversion rate
- Professional, trustworthy brand impression