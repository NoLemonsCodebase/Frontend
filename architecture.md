# NoLemons - Frontend Architecture

## Tech Stack

### Core Technologies
- **Next.js 14**: React framework providing server-side rendering, static site generation, and API routes
- **TypeScript**: For type-safe code
- **Tailwind CSS**: For responsive styling
- **next-intl**: For internationalization support

### UI Components
- **Radix UI**: For accessible UI components
- **Framer Motion**: For animations
- **React Icons**: For icon components
- **Lucide React**: Additional icon library

### State Management & Data Fetching
- **React Context API**: For global state management
- **Server Actions**: Next.js server components for data fetching

### Third-party Integrations
- **Stripe**: For payment processing
- **Google Analytics & Tag Manager**: For site analytics
- **Meta Pixel & Snap Pixel**: For marketing analytics
- **Slack**: For error reporting

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/                # API routes
│   │   ├── checkout-session/
│   │   └── payment-intent/
│   └── [locale]/           # Locale-specific routes
│       ├── cars/           # Car listings
│       ├── import-a-car/   # Import car functionality
│       ├── payment-success/# Payment confirmation
│       ├── request-a-car/  # Car request feature
│       ├── return/         # Return policy
│       ├── sell-your-car/  # Car selling feature
│       ├── layout.tsx      # Main layout
│       └── page.tsx        # Home page
├── components/             # React components
│   ├── ui/                 # UI primitive components
│   ├── navbar/             # Navigation components
│   ├── cars-detail/        # Car details components
│   ├── cars-filter/        # Car filtering components
│   ├── search/             # Search functionality
│   ├── ImageCarousel/      # Image display components
│   ├── CarCard/            # Car card components
│   ├── RequestCar/         # Car request components
│   ├── LangSwitcher/       # Language switching
│   └── other components    # Various utility components
└── lib/                    # Utility functions and hooks
    ├── hooks/              # Custom React hooks
    ├── services/           # External service integrations
    ├── context/            # React context definitions
    ├── actions.ts          # Server actions
    ├── car-actions.ts      # Car-related server actions
    ├── buyer-actions.ts    # Buyer-related server actions
    └── types.ts            # TypeScript type definitions
```

## Architectural Patterns

### Next.js App Router
The application uses Next.js App Router for routing, with internationalization through dynamic route segments (`[locale]`). This enables language-specific routing and content.

### Server Components and Actions
Next.js server components and server actions are used for data fetching and mutations, reducing client-side JavaScript and improving performance.

### Internationalization
Implemented using next-intl with locale detection and switching capabilities. The application supports right-to-left (RTL) languages through the `useTextDirection` hook.

### Component Structure
- **UI Components**: Reusable primitive components built with Tailwind CSS
- **Feature Components**: Domain-specific components for car listings, filtering, etc.
- **Layout Components**: Components used for layout structure (navbar, footer, etc.)

### Data Flow
1. **Server Actions**: Defined in `lib/actions.ts`, `lib/car-actions.ts`, etc., these handle data fetching and mutations
2. **Component Rendering**: Data is passed to components for rendering
3. **Client Interactions**: User interactions trigger server actions for data updates

## Backend Integration

### Primary API Service
The application interacts with a custom backend API through an environment variable `process.env.OUR_API`. This API handles various functionalities:

1. **Car Data Management**:
   - Car listings: `${process.env.OUR_API}/api/v2/cars/`
   - Individual car details (numeric ID): `${process.env.OUR_API}/api/v2/cars/[id]`
   - Car details by route: `${process.env.OUR_API}/cars/by-route/[route]/`
   - Search functionality: `${process.env.OUR_API}/api/v2/cars/?search=[query]`

2. **Imported Car Data**:
   - Import car listings: `${process.env.OUR_API}/parser/api/v1/cars/`
   - Import car details: `${process.env.OUR_API}/parser/api/v1/cars/[id]`
   - Import car details by route: `${process.env.OUR_API}/parser/by-route/[route]/`

3. **User Interactions**:
   - Submit offers: `${process.env.OUR_API}/user-offer/`
   - Additional direct API integration with `https://nolemons2.onrender.com/user-offer/`

### Server Actions Pattern
The frontend uses server actions to encapsulate API calls:
- `car-actions.ts`: Car-related data fetching and management
- `buyer-actions.ts`: Buyer interaction handling
- `actions.ts`: General application actions

### Error Reporting
The application uses Slack webhooks for error reporting:
```typescript
export async function sendErrorMessageToSlack(message: string) {
  const url_slack = "https://hooks.slack.com/services/[webhook-id]";
  const res = await fetch(url_slack, {
    method: "POST",
    body: JSON.stringify({ text: message }),
  });
}
```

## Payment Processing

The application integrates with Stripe for secure payment processing:

### 1. Checkout Sessions
- API Route: `/api/checkout-session`
- Functionality: Creates Stripe setup sessions to collect payment methods
- Implementation: Uses Stripe's embedded UI mode for a seamless experience
- Return URL handling: Manages post-payment redirection through `return_url`

### 2. Payment Intents
- API Route: `/api/payment-intent`
- Functionality: Creates payment intents for processing actual payments
- Features: Supports different currencies and dynamic amounts
- Metadata handling: Passes transaction context to Stripe for tracking

### 3. Client Integration
- Uses `@stripe/react-stripe-js` and `@stripe/stripe-js` for client-side components
- Implements secure element mounting for PCI compliance
- Handles payment confirmation and error states

## Analytics and Tracking

The application implements a comprehensive analytics stack:

### 1. Google Analytics
- Integrated using the Next.js Third Parties package
- Configuration: `<GoogleAnalytics gaId="G-5LKFJ76994" />`
- Tracks page views, user journeys, and conversion events

### 2. Google Tag Manager
- Implementation: Inline script in the layout component
- Container ID: `GTM-M6BCNQDM`
- Enables dynamic tag management and advanced event tracking

### 3. Meta (Facebook) Pixel
- Pixel ID: `1433213310911440`
- Purpose: Conversion tracking and ad targeting
- Implementation: Inline script in the document head

### 4. Snap Pixel
- Tracking ID: `89acb1a3-d93c-4de1-a78d-72168a70fdba`
- Purpose: Snapchat advertising and conversion tracking
- Implementation: Custom script loading pattern

## Key Features

1. **Car Listings**: Display and filtering of available cars
2. **Car Details**: Detailed information about specific cars
3. **Import-a-Car**: Functionality for importing cars
4. **Sell-Your-Car**: Process for users to sell their cars
5. **Request-a-Car**: Feature to request specific cars
6. **Internationalization**: Multiple language support with RTL capabilities
7. **Payment Processing**: Secure payment handling through Stripe

## Performance Considerations

- **Server-Side Rendering**: Improves initial page load times and SEO
- **Image Optimization**: Custom image components for optimized loading
- **Analytics**: Integration with Google Analytics for performance monitoring
