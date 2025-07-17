# CLAUDE.md

'operational_rules.md'に従って作業を進めること
予定された実装は必ず１回で完遂すること
This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an experiments repository containing prototypes and test implementations. The main current project is a babysitter homepage for individual business owners.

## Current Project: Babysitter Website

### Architecture
- Static HTML/CSS/JavaScript website
- Multi-page structure with semantic navigation
- Responsive design targeting mobile-first approach
- Japanese language content focused on trust and safety

### Key Design Requirements
- Clean, trustworthy design with soft color palette
- Main colors: #4A90E2 (gentle blue), #F5F5F5 (light gray), #FF6B6B (gentle pink)
- Responsive breakpoints: mobile (single column), tablet (2-column), desktop (3-column)
- Maximum width: 1200px with appropriate margins

### Directory Structure
```
/
├── index.html                 # Top page
├── about/index.html          # Profile/introduction
├── services/index.html       # Services and pricing
├── safety/index.html         # Safety measures and qualifications
├── gallery/index.html        # Activity photos
├── testimonials/index.html   # Customer testimonials
├── faq/index.html           # FAQ with accordion
├── contact/index.html       # Contact form with Google Forms
├── policy/index.html        # Terms and privacy policy
├── blog/index.html          # Blog
├── css/
│   ├── style.css
│   └── responsive.css
├── js/script.js
└── images/
    ├── profile/
    ├── services/
    └── gallery/
```

### Development Commands
Since this is a static website project:
- No build process required
- Open `index.html` in browser for testing
- Use live server for development (e.g., `python -m http.server` or VS Code Live Server)

### Technical Requirements
- Semantic HTML5 with proper heading structure
- CSS with Flexbox/Grid for layouts
- CSS custom properties for color management
- JavaScript for navigation, FAQ accordion, and smooth scrolling
- SEO optimization with structured data (JSON-LD)
- Include sitemap.xml and robots.txt

### Content Guidelines
- Focus on safety, trust, and professionalism
- Include privacy protection notices for photos and testimonials
- Emergency contact information prominently displayed
- Qualification badges and certifications clearly visible