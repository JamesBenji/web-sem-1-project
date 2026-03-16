# Tiny Spoon

Tiny Spoon is a responsive multi-page website created for parents and caregivers who are looking for simple, healthy, and age-appropriate recipes for babies and young children. The website was developed as part of a group frontend web development project and focuses on building a calm, friendly, and easy-to-use experience for families.

The main idea behind Tiny Spoon is to offer a small digital space where users can explore recipe content, learn more about the purpose of the platform, and reach out through a contact form if they have questions, feedback, or suggestions. Since the website is centered around children’s nutrition, the design was planned to feel soft, welcoming, and clear rather than busy or overly decorative.

This project was built using React, TypeScript, Tailwind CSS, and JavaScript, with a strong focus on responsive design, accessibility, semantic structure, and user-friendly navigation.

[Live Website - Tiny Spoon](https://tinyspoons-c7d21.web.app/)

[GitHub Link](https://github.com/JamesBenji/web-sem-1-project)

---

# How to Run the Project Locally

## Commands
Install all dependencies with `npm install` and launch the project with `npm run dev` 
```bash
npm install
npm run dev
```

Access the website with this URL, only works if the port 5173 is not being used. Otherwise, there will be a URL shown in the console after running `npm run dev`.
```bash
http://localhost:5173
```

---

## Lighthouse Testing

![Lighthouse Audit Results](./public/lighthouse.png)

---

# Project Overview

![Tiny Spoon Home Page](./public/home.png)

The purpose of Tiny Spoon is to create a website that feels approachable and supportive for parents of babies and toddlers. The website was made to feel calm and trustworthy. Tiny Spoon includes four main pages:

- Home
- About
- Recipes
- Contact

---

# User Experience

## Project Goals

- To present the Tiny Spoon brand as trustworthy, warm, and supportive in early childhood nutrition.
- To allow users to browse and filter recipes by age stage.
- To help users understand the brand through the About and Contact pages, building credibility and trust.
- To deliver a responsive website experience across mobile, tablet, and desktop devices.

---

# Website Structure

## Home Page
![Tiny Spoon Home Page](./public/home.png)

## About Page
![Tiny Spoon About Page](./public/about.png)

## Recipes Page

![Tiny Spoon Recipes Page 1](./public/recipe1.png)
![Tiny Spoon Recipes Page 2](./public/recipe2.png)

## Contact Page

![Tiny Spoon Contact Page](./public/contact.png)

---

# Planning and Design Process

Since the audience is parents and caregivers, the site needed to feel gentle, readable, and trustworthy. We considered layout, spacing, color use, and typography so that the design would remain consistent across the whole website. The visual direction was influenced by the idea of making the site feel soft and modern without becoming childish. We wanted the pages to have enough personality to feel warm, but not so many visual elements that they became distracting.

---

# Design Choices

## Color Palette

The project uses an explicit brand palette defined in `src/index.css`.
Main pink brand scale used across the UI:

- `brand-50`: `#fdf2f8`
- `brand-100`: `#fce7f3`
- `brand-200`: `#fccee8`
- `brand-300`: `#fda5d5`
- `brand-400`: `#fb64b6`
- `brand-500`: `#f6339a`
- `brand-600`: `#e60076`
- `brand-700`: `#c6005c`
- `brand-800`: `#a3004c`
- `brand-900`: `#861043`
- `brand-950`: `#510424`

How these colors are used in the current implementation:

- Soft backgrounds and sections mainly use `brand-50` and `brand-100`.
- Headings and strong text use `brand-900` and `brand-950`.
- Buttons and call-to-action elements use deeper brand tones such as `brand-900`.
- Cards and form surfaces use light backgrounds with `brand-100` or `brand-200` borders.
- Visual accents in hero elements use brighter pink highlights from the brand scale.

## Typography

Typography is configured in `src/index.css` using:

- `--font-bricolage: 'Bricolage Grotesque'`

and applied globally via:

```css
font-family: var(--font-bricolage);
```

In practice, the typography style follows a clear hierarchy:

- Large, bold headings for section emphasis
- Softer body text with comfortable line-height for readability
- Compact uppercase labels in UI and form areas for clarity

This combination supports readability and gives the interface a modern but approachable tone.

---

# Features

The website includes the following key features.

## Responsive Navigation

A shared navigation bar allows users to move easily between the pages of the site. This supports one of the main project requirements, which is easy and intuitive navigation.

## Multi-Page Structure

The website includes four separate pages, as required by the project brief:

- Home
- About
- Recipes
- Contact

## Responsive Design

The layout adapts to different screen sizes, including desktop, tablet, and mobile devices. This was implemented through responsive CSS techniques such as media queries, flexible containers, and breakpoint-based utility classes.

## Contact Form

The Contact page includes a form with the following fields:

- Full name
- Email
- Subject
- Message

The form includes frontend validation so that:

- all fields must be completed
- the email must be in a valid format
- the message must meet a minimum length
- invalid submissions show inline errors
- valid submissions show a success message and clear the form

## Accessibility Considerations

Accessibility was part of the development process throughout the project. For example:

- semantic elements are used
- form inputs have associated labels
- field errors are tied to their inputs
- validation and status feedback are clearly presented
- page structure supports readability and usability

---

# Technologies Used

## Languages and Core Technologies

- TypeScript
- HTML
- CSS
- React
- Tailwind CSS
- Framer Motion for animations

## Semantic HTML and Accessibility

One of the project requirements was the use of semantic HTML, and this was an important part of the build. Elements such as `main`, `section`, `form`, `label`, `input`, `textarea`, and `button` were used where appropriate to improve both structure and accessibility.

Accessibility was also considered through:

- proper form labeling
- clear visual hierarchy
- readable text sizes
- meaningful page structure
- feedback messages for form interactions

---

# Responsive Design

Tiny Spoon was designed to work across different device sizes. During development, layouts were adjusted to ensure that text remains readable, spacing feels balanced, and interactive elements remain easy to use on smaller screens.

The website was tested on desktop, tablet, and mobile screen sizes. Responsive behavior was achieved using:

- flexible containers
- responsive widths
- breakpoint-based layout adjustments
- spacing and typography scaling

---

# Testing and Validation

## Manual Testing

The website was manually tested throughout development to check that:

- navigation links work correctly
- each page loads as expected
- the layout adapts well to different screen sizes
- the contact form behaves correctly
- validation messages appear when required
- success feedback appears only when the form is valid

## Contact Form Testing

The contact form was checked to make sure that:

- empty fields do not submit
- invalid email formats are rejected
- error messages are shown near the correct field
- success messages only appear after valid input
- the form clears after a successful submission

## Responsive Testing

The layout was reviewed on multiple screen sizes using browser developer tools to confirm that the website remains usable and visually consistent on smaller devices.

---

# Challenges and Improvements

One of the main areas that required revision during the project was the Contact page. Early versions included additional content blocks that made the page feel too heavy and distracting. After reviewing the layout, the design was simplified so that the form became the central focus.

Another important improvement was form validation. At one stage, the form displayed a success message even when the email format was incorrect. This was resolved by adding proper frontend validation and making sure the success state only appears after all fields are valid.

These changes improved both usability and the overall quality of the final page.

---

# Live Project

[View the live project here](https://tinyspoons-c7d21.web.app/)