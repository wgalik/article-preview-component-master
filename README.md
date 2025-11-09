# 📰 Article Preview Component

A responsive Article Preview Component built as part of the Frontend Mentor challenge.
This project demonstrates a clean card layout with a share button that toggles an animated social media share bar, implemented using HTML, SCSS, and JavaScript.

## 🧠 Overview

[demo](https://wgalik.github.io/article-preview-component-master/)

## 🎯 Objective

To build an interactive article preview card that allows users to toggle a share panel when clicking the share icon.

## 💡 Features

- Fully responsive layout (mobile & desktop)
- Interactive share button with toggle animation
- Accessible and semantic HTML structure
- Built with SCSS mixins for clean, reusable styles
- Smooth hover transitions and button states
- Modern, minimal, and professional design

## 🧱 Built With

- HTML5 – Semantic markup
- SCSS (Sass) – Modular and maintainable styling
- JavaScript (ES6) – Share button functionality
- Flexbox – Layout alignment and positioning
- Google Fonts – Manrope font family

## 📱 Responsive Layout

| Device  | Layout Description                                                                                 |
| :------ | :------------------------------------------------------------------------------------------------- |
| Mobile  | Stacked layout with share bar appearing below the footer                                           |
| Desktop | Two-column layout with image on the left and text on the right; share bar appears above the footer |

## ⚡ Functionality

The share button toggles a social media share bar:

- On mobile, it expands at the bottom of the card.

- On desktop, it appears above the footer with a tooltip arrow.

- The button changes color to indicate active/inactive states.

`shareBtn.addEventListener("click", openShareBar);`

The logic uses a simple toggle mechanism to control the share panel’s visibility.

## 🧠 SCSS Highlights

Mixins for reusable utilities:

`
@mixin flexbox {
display: flex;
justify-content: center;
align-items: center;
}

@mixin background-image {
background-position: center center;
background-size: cover;
background-repeat: no-repeat;
}
`

- Responsive breakpoints to adjust layout at 55rem (≈880px).
- Hover transitions for interactive feedback.

## 🙌 Acknowledgements

This project is part of the Frontend Mentor challenge:

[Article Preview Component](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT)

Frontend Mentor helps developers improve their front-end skills by building real-world projects.
