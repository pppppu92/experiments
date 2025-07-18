# CLAUDE.md

- 'operational_rules.md'に従って作業を進めること
- 予定された実装は必ず１回で完遂すること
- This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.
- このファイルの上６行の変更、削除を禁止する

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Operational Rules
- Follow 'operational_rules.md' requirements strictly
- Complete all planned implementations in a single session
- Always output the Five Principles of Operation at the beginning of any work
- Obtain user confirmation before generating/updating files or executing programs

## Project Overview

This is an experiments repository containing prototypes and test implementations. The current project is a postnatal doula (産後ドゥーラ) website for individual business owners providing meal delivery services.

## Current Project: Postnatal Doula Website

### Architecture
- Static HTML/CSS/JavaScript website
- Multi-page structure with semantic navigation
- Responsive design targeting mobile-first approach
- Japanese language content focused on trust and safety
- Meal delivery service for new mothers

### Key Design Requirements
- **Color Scheme**: Coral (#FF7F50) based simple gradient design
- **Text Color**: Black (#000000)
- **No Emojis**: Emoji usage is prohibited
- **Instagram Integration**: Include Instagram link
- **Contact Form**: Initial consultation form URL: 'https://docs.google.com/forms/d/e/1FAIpQLScUJsiv0SRxWLoH6Np9LiawLZ_eJIppm2XiSc9yWRAuqg8s9Q/viewform?usp=dialog'
- Maximum width: 1200px with appropriate margins
- Responsive breakpoints: mobile (single column), tablet (2-column), desktop (3-column)

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
├── contact/index.html       # Contact form
├── policy/index.html        # Terms and privacy policy
├── blog/index.html          # Blog
├── css/
│   ├── style.css
│   └── responsive.css
├── js/script.js
├── images/
│   ├── profile/
│   ├── services/
│   └── gallery/
├── temp/                    # Reference materials
│   ├── reference.html       # Original site to migrate from
│   ├── reference.JPG
│   ├── reference2.JPG
│   └── style.css
├── sitemap.xml
├── robots.txt
└── operational_rules.md
```

### Development Commands
Since this is a static website project:
- **No build process required**
- **Local testing**: Open `index.html` in browser
- **Development server**: Use `python -m http.server` or VS Code Live Server extension
- **File watching**: Manual refresh or use live server extensions

### Technical Requirements
- Semantic HTML5 with proper heading structure
- CSS with Flexbox/Grid for layouts
- CSS custom properties for color management
- JavaScript for navigation, FAQ accordion, and smooth scrolling
- SEO optimization with structured data (JSON-LD)
- Include sitemap.xml and robots.txt
- Japanese font stack: '游ゴシック', 'Yu Gothic', 'メイリオ', Meiryo, sans-serif

### Content Migration Guidelines
- Reference temp/reference.html for content structure and information
- Remove unnecessary content during migration
- Focus on meal delivery services for postnatal care
- Maintain trust and professionalism in all content
- Include privacy protection notices for photos and testimonials
- Emergency contact information prominently displayed
- Qualification badges and certifications clearly visible

### Current Implementation Status
- Main website structure is implemented
- CSS uses light pink-beige color scheme (needs update to coral)
- JavaScript includes navigation, FAQ accordion, smooth scrolling
- Structured data and SEO elements are in place
- All pages have semantic HTML structure