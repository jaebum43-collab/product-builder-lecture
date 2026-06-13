# Project Blueprint: Singapore Localizer Analysis & Boyfriend Deficiency Index

## Overview
A fun, interactive web application that "analyzes" how much a user has localized to Singapore and their "boyfriend deficiency index" using humorous metrics like humidity adaptation. The app features a modern, mobile-responsive UI with light/dark theme support.

## Project Details & Features
- **Modern UI:** Centered card layout with expressive typography and emoji-based icons.
- **Theme Support:** Toggle between light and dark modes, with colors adapting dynamically.
- **Interactive Flow:**
  - **Initial View:** Input for user name and a call to action.
  - **Loading View:** A "Merlion" themed loader with a progress bar.
  - **Result View:** Displays a score and humorous analysis text based on the name input.
- **Contact Form:** Integration with Formspree for user inquiries.
- **Community Comments:** Disqus integration at the bottom of the card for user engagement.
- **Technology Stack:** Pure HTML, CSS (Variables, Flexbox), and Modern JavaScript (ES Modules).

## Implementation History

### Phase 1: Initial Concept & UI
- Established basic HTML structure with a card-based layout.
- Implemented light/dark theme switching logic.
- Added Merlion-themed loading animation and result calculation logic.

### Phase 2: Engagement & Distribution (Current)
- **Disqus Integration:** Added community comment section at the bottom of the main container.
- **Google AdSense Integration:** Added the AdSense script to the head of the document for monetization.
- **GitHub Integration:** Connected the local repository to `https://github.com/jaebum43-collab/product-builder-lecture`.
- **Cloudflare Deployment:** Prepared for deployment via Cloudflare Pages for global accessibility.

## Current Plan: Adding & Optimizing Google AdSense
1. **Integration:** Insert the Google AdSense script into the `<head>` section of `index.html`.
2. **Verification Optimization:** 
    - Added `<meta name="google-adsense-account" content="ca-pub-2033339749168479">` to the head.
    - Moved the AdSense script to the top of the `<head>` for faster detection.
    - Created `ads.txt` in the root directory for ownership verification.
3. **Verification:** Ensure the script is correctly loaded and the site is ready for Google's crawl.

## Design Guidelines
- **Typography:** Uses 'Pretendard' for a modern, clean look.
- **Colors:** Singapore Red (`#ef5350`) as the primary accent color.
- **Responsiveness:** Mobile-first approach using Flexbox and viewport-relative units.
