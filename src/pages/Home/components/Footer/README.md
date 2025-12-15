# Footer Component

The Footer component is a comprehensive footer section for the Qlaws.ai homepage, featuring a call-to-action section, company information, navigation links, and a newsletter subscription form.

## Location
`src/pages/Home/components/Footer/Footer.tsx`

## Features

### 1. Call-to-Action (CTA) Section
- Prominent heading: "Get started with Qlaws today"
- Descriptive text about Qlaws AI tools
- Two action buttons:
  - **Book a Demo** (dark button)
  - **Contact us** (light button)
- Smooth scroll animations using Framer Motion

### 2. Footer Content Section
Four-column grid layout containing:

#### Column 1: Company Information
- Qlaws.ai logo/brand name
- Address: Brooklyn, New York, 11209, US
- Social media icons:
  - Instagram
  - LinkedIn
  - X (Twitter)
  - Medium
  - Reddit
- Copyright notice: © 2025 Qlaws.ai

#### Column 2: Products
Navigation links to:
- AI Drafting
- AI vault
- AI Summary
- Redlining

#### Column 3: Company
Navigation links to:
- About us
- Blog
- FAQ
- Careers
- Pricing
- Privacy policy

#### Column 4: Newsletter
- Title: "Let's keep in Touch"
- Description text
- Email subscription form with:
  - Email input field
  - Submit button

## Props

None - This is a self-contained component.

## State

- `email`: string - Stores the newsletter subscription email input value

## Styling

### CSS Module Classes (`Footer.module.css`)

#### Layout Classes
- `.footer-wrapper` - Main container wrapper
- `.cta-section` - Call-to-action section container
- `.footer-section` - Footer content section container
- `.footer-content` - Grid container for footer columns
- `.footer-column` - Individual column container

#### Typography Classes
- `.cta-title` - CTA section heading (38px, #1B0C25)
- `.footer-logo` - Company logo text (32px, white)
- `.footer-address` - Address text (15.13px, #FFFFFF, Outfit font)
- `.footer-column-title` - Column headings (15.13px, #FAAE89, Medium weight)
- `.footer-link` - Navigation links (14px, white)
- `.newsletter-description` - Newsletter description text

#### Component Classes
- `.cta-buttons` - Button container
- `.cta-button` - Base button styles
- `.cta-button-dark` - Dark themed button (#1B0C25 background)
- `.cta-button-light` - Light themed button (transparent background)
- `.social-icons` - Social media icons container
- `.social-icon` - Individual social icon
- `.footer-links` - Navigation links list
- `.newsletter-form` - Newsletter form container
- `.newsletter-input` - Email input field
- `.newsletter-submit` - Submit button

### Tailwind Classes Used

- **Layout**: `flex`, `flex-col`, `items-center`, `justify-center`
- **Spacing**: `mt-6`, `mt-4`, `gap-4`, `gap-3`
- **Typography**: `font-semibold`, `font-normal`, `font-medium`, `leading-[52px]`, `leading-[26px]`, `leading-5`, `tracking-normal`, `text-center`, `align-middle`
- **Colors**: `text-white`, `text-[#555555]`
- **Sizing**: `w-[153px]`, `h-[40px]`
- **Border**: `rounded-[6px]`

## Animations

All sections use Framer Motion for smooth scroll-triggered animations:

### CTA Section
- Fades in and slides up when scrolled into view
- Staggered animations for title, description, and buttons

### Footer Columns
- Staggered fade-in and slide-up animations
- Each column animates with a 0.1s delay between them

### Interactive Elements
- Buttons: Scale up on hover (1.05x), scale down on tap (0.95x)
- Social icons: Scale up and lift on hover (1.15x, -2px y)
- Links: Slide right on hover (4px x translation)

## Color Palette

- **Footer Background**: `#1B0C25` (dark purple)
- **Column Titles**: `#FAAE89` (peach/salmon)
- **Text on Dark**: `#FFFFFF` (white)
- **Secondary Text**: `#555555` (gray)
- **CTA Title**: `#1B0C25` (dark purple)
- **Newsletter Input Background**: `rgba(45, 30, 55, 1)` (darker purple)
- **Newsletter Submit**: `rgba(247, 95, 21, 1)` (orange)

## Typography

### Font Family
- **Primary**: Outfit
- **Fallbacks**: system-ui, Avenir, Helvetica, Arial, sans-serif

### Font Sizes
- CTA Title: `38px`
- Footer Logo: `32px`
- Column Titles: `15.13px`
- Address: `15.13px`
- Links: `14px`
- Newsletter Description: `14px`

## Functionality

### Newsletter Subscription
- Form submission handler (`handleSubmit`)
- Currently logs email to console (ready for API integration)
- Resets email input after submission
- Email validation via HTML5 `required` attribute

### Social Media Links
- All links open in new tabs (`target="_blank"`)
- Includes `rel="noopener noreferrer"` for security
- Accessible with `aria-label` attributes

## Usage Example

```tsx
import Footer from "./components/Footer/Footer";

const Home = () => {
    return (
        <div>
            {/* Other sections */}
            <Footer />
        </div>
    );
};
```

## Future Enhancements

1. **Newsletter Integration**: Connect form to backend API
2. **Link Functionality**: Implement actual navigation/routing
3. **Accessibility**: Add keyboard navigation improvements
4. **Responsive Design**: Enhance mobile/tablet layouts
5. **Analytics**: Track newsletter subscriptions and link clicks

## Notes

- The component uses a hybrid styling approach (CSS Modules + Tailwind)
- All animations are optimized for performance (viewport-based triggers)
- Social media icons are inline SVGs for better control and customization
- The component is fully self-contained and doesn't require external props

