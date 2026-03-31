# RAW ALMOND - Coaching Center Website

A comprehensive, responsive website for RAW ALMOND coaching center built with vanilla HTML, CSS, and JavaScript. This project is designed as an educational clone that covers all essential HTML, CSS, and JavaScript concepts taught in an academic year.

## 📁 Project Structure

```
ecomerce/
├── index.html      (Main HTML file)
├── styles.css      (Complete CSS styling)
├── script.js       (JavaScript functionality)
└── README.md       (This file)
```

## 🎓 HTML Concepts Covered

### Semantic Elements
- `<header>` - Page header with navigation
- `<nav>` - Navigation menu
- `<section>` - Multiple content sections
- `<article>` - Course cards
- `<footer>` - Footer section
- `<main>` - Main content area (implicit)

### Structure & Layout
- Proper DOCTYPE declaration
- Meta tags (charset, viewport for responsiveness)
- Title tag for SEO
- Link tags for external stylesheets

### Content Elements
- Headings (`<h1>` to `<h6>`)
- Paragraphs (`<p>`)
- Unordered lists (`<ul>`, `<li>`)
- Lists with semantic meaning

### Forms & Input Elements
- Form element with fieldset and legend
- Input types:
  - `text` - Name input
  - `email` - Email validation
  - `tel` - Phone number input
  - `checkbox` - Terms and conditions
- Select dropdowns for course selection
- Textarea for messages
- Form buttons (submit, reset)
- Labels with `for` attribute (accessibility)
- Required attribute for validation

### Interactive Elements
- Buttons with onclick handlers
- Links with href and anchor navigation
- Table for class schedule with:
  - `<table>`, `<thead>`, `<tbody>`
  - `<tr>`, `<th>`, `<td>`

### Structural Components
- Badges/pills for course categories
- Cards for courses, testimonials, features
- Statistics cards
- Contact information sections

## 🎨 CSS Concepts Covered

### Selectors
- Element selectors (`header`, `nav`, `section`)
- Class selectors (`.container`, `.btn`, `.course-card`)
- ID selectors (`#home`, `#hamburgerBtn`)
- Pseudo-classes (`:hover`, `:nth-child()`, `:focus`)
- Pseudo-elements (`::after`, `::before`)
- Attribute selectors (`[type="text"]`)
- Universal selector (`*`)

### Box Model
- Margin, padding, border properties
- Box-sizing: border-box for consistent sizing
- Border-radius for rounded corners
- Box-shadow for depth effects

### Flexbox Layout
- `display: flex` for navigation menus
- `justify-content` for alignment
- `align-items` for vertical alignment
- `gap` for spacing between items
- `flex-direction` for column layouts
- Flex properties for responsive columns

### CSS Grid
- `display: grid` for course cards layout
- `grid-template-columns` with `repeat()` and `minmax()`
- `auto-fit` and `auto-fill` for responsive grids
- `gap` for grid spacing
- Grid with multiple layouts at different breakpoints

### Colors & Styling
- CSS variables (custom properties) with `--primary-color`, etc.
- Color applications to text, backgrounds, borders
- Linear gradients for hero section
- Rgba colors for transparency effects
- Color transitions and hover states

### Typography
- Font-family with fallbacks
- Font-size and font-weight
- Line-height for readability
- Text-align and text-decoration
- Letter-spacing and text-transform
- Font styling (italic) for testimonials

### Positioning & Layout
- Sticky positioning for header
- Fixed positioning for back-to-top button
- Position relative for pseudo-elements
- Z-index for stacking context

### Animations & Transitions
- CSS transitions for smooth effects
- `transition` shorthand property
- `@keyframes` for custom animations:
  - slideInDown animation
  - slideInUp animation
  - fadeIn animation
  - scaleIn animation
- Transform effects:
  - `translateX()` and `translateY()`
  - `scale()`
  - `rotate()`

### Responsive Design
- Media queries for different screen sizes:
  - Tablet (768px and below)
  - Mobile (480px and below)
  - Small tablets (600px and below)
  - Large screens (1200px and above)
- Mobile-first approach considerations
- Viewport meta tag integration
- Responsive typography (font-size adjustments)
- Responsive grid adjustments
- Hidden/shown elements based on screen size

### Advanced CSS
- CSS variables (custom properties) for theming
- Calc() for dynamic sizing
- Object-fit for images
- Overflow and overflow-x for table responsiveness
- Display properties: flex, grid, none, block, inline-block
- Opacity for visual effects
- Background properties and gradients

### Styling States
- Hover states (`:hover`)
- Focus states for form inputs
- Active states for navigation
- Even/odd row styling in tables

## 🚀 JavaScript Concepts Covered

### DOM Manipulation
- `getElementById()` - Getting elements by ID
- `querySelector()` and `querySelectorAll()` - CSS selectors
- `classList` manipulation:
  - `add()`
  - `remove()`
  - `toggle()`
- Dynamic style changes via `.style`
- Creating and appending elements

### Event Handling
- `addEventListener()` - Attaching event listeners
- Click events (`click`)
- Scroll events (`scroll`)
- Load events (`load`)
- Keyboard events (`keydown`)
- Blur events for form validation
- Submit events for form handling

### Functions
- Function declarations and expressions
- Arrow functions (modern approach can be added)
- Function parameters
- Return statements
- Event handler functions

### Conditional Logic
- If-else statements for validation
- Ternary operators
- Logical operators (&&, ||)

### Form Validation
- Text validation (empty checks)
- Email validation using regex
- Phone number validation using regex
- Real-time validation on blur
- Preventing default form submission

### String & Array Methods
- `forEach()` for iterating over elements
- String methods: `getAttribute()`, `replace()`
- Array methods: `querySelectorAll()`, `forEach()`
- Template literals for dynamic messages

### Regular Expressions (Regex)
- Email validation pattern
- Phone number validation pattern
- Creating and testing regex patterns

### Object & Data Handling
- Objects for course name mappings
- Accessing object properties

### Browser APIs
- `window.scrollTo()` for smooth scrolling
- `window.pageYOffset` for scroll position detection
- `window.addEventListener()` for global events
- `document` object methods
- `element.getBoundingClientRect()` for element positioning

### Control Flow
- Loops (`forEach`)
- Conditional rendering
- Early returns in functions

### Advanced Features
- Intersection Observer API for animations
- Animation timing and sequences
- Console logging for debugging
- Event delegation and propagation
- Preventing default behavior (`event.preventDefault()`)

## 📱 Responsive Features

The website is fully responsive with breakpoints for:
- **Desktop/Large Screens** (1200px+): Full multi-column layouts
- **Tablet** (768px and below): Adjusted grids and navigation
- **Mobile** (480px and below): Single column layouts, touch-friendly navigation

### Mobile-Specific Features
- Hamburger menu with animation
- Touch-friendly buttons and links
- Optimized font sizes
- Simplified grid layouts
- Full-width form inputs

## ⌨️ Keyboard Shortcuts

Users can use these keyboard shortcuts (shown in console):
- **Ctrl + H**: Go to Home section
- **Ctrl + C**: Go to Courses section
- **Ctrl + T**: Scroll to Top

## 🎯 Key Features

### Navigation
- Sticky header bar
- Responsive hamburger menu for mobile
- Smooth anchor navigation
- Active link highlighting while scrolling

### Hero Section
- Large, eye-catching header with gradient background
- Call-to-action buttons
- Animated entrance effects

### Course Cards
- Grid layout that adapts to screen size
- Hover effects with transform animations
- Course badges
- Enrollment buttons

### About Section
- Two-column layout (responsive)
- Statistics cards with counter animations
- Feature list styling

### Features Grid
- 8 feature items in responsive grid
- Icon emoji integration
- Hover lift effects

### Class Schedule
- Table with proper semantic markup
- Responsive table wrapper with horizontal scroll
- Alternating row colors for readability
- Hover effects on rows

### Testimonials
- Card-based layout
- Star rating display
- Author information
- Responsive grid

### Contact Section
- Two-column form and information layout
- Comprehensive form with validation
- Contact information display
- Form field styling with focus states

### Footer
- Multi-column footer with links
- Social media links
- Copyright information
- Responsive grid layout

### Back to Top Button
- Fixed positioning
- Shows/hides based on scroll position
- Smooth scroll animation

## 🔧 How to Use

1. **Open the website**: Open `index.html` in any web browser
2. **Navigate sections**: Click on navigation links or use keyboard shortcuts
3. **Fill forms**: Try submitting the contact form with/without valid data
4. **Test responsiveness**: Resize browser window or test on mobile devices
5. **Open console**: Press F12 and check console for hidden messages

## 💡 Learning Outcomes

After studying and cloning this website, you will understand:

1. **HTML**: Proper semantic structure, form handling, table creation, and content organization
2. **CSS**: Responsive design, flexbox, grid, animations, gradients, and modern styling techniques
3. **JavaScript**: DOM manipulation, event handling, form validation, and interactive features
4. **Web Design**: UX/UI principles, responsive layouts, color schemes, and typography
5. **Best Practices**: Code organization, accessibility, performance optimization, and browser compatibility

## 🎓 Use Cases

This website template can be used as:
- **Learning Project**: Study each component and run/modify the CSS and JS
- **Portfolio Piece**: Demonstrates HTML, CSS, and JavaScript proficiency
- **Starting Template**: Base for other educational websites
- **Comparison Study**: Compare with other websites to understand industry standards

## 📝 Notes

- All code is vanilla JavaScript (no frameworks/libraries)
- CSS follows modern standards with custom properties
- Completely responsive with mobile-first considerations
- Form doesn't actually submit to server (would need backend)
- All HTML elements are semantic and properly structured
- Colors use CSS variables for easy customization

## 🚀 Future Enhancements (Optional)

- Add backend integration for form submission
- Add email functionality
- Add payment gateway for course enrollment
- Add student login system
- Add admin dashboard
- Add animations library (AOS, GSAP)
- Add dark mode toggle
- Add multi-language support

## 📄 License

This is an educational project created for learning purposes. Feel free to modify, enhance, and distribute as needed.

---

**Created for**: Academic Learning of HTML, CSS, and JavaScript
**Course**: Web Development Fundamentals
**Institute**: RAW ALMOND Coaching Center
