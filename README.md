# PocketPlan Landing Page

A Next.js 14 landing page for PocketPlan - the personal finance app that helps you answer "Can I actually afford this right now?"

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Design System:** Custom design system matching the PocketPlan PWA

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository or navigate to the project:

```bash
cd pocket-plan-landing
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
pocket-plan-landing/
├── public/
│   └── images/           # Add screenshots here
├── src/
│   ├── app/
│   │   ├── globals.css   # Design system & Tailwind config
│   │   ├── layout.tsx    # Root layout with SEO
│   │   └── page.tsx      # Home/landing page
│   └── components/
│       ├── sections/     # Page sections
│       │   ├── Hero.tsx
│       │   ├── Problem.tsx
│       │   ├── Comparison.tsx
│       │   ├── Features.tsx
│       │   ├── MoreFeatures.tsx
│       │   ├── WhoItsFor.tsx
│       │   ├── Promise.tsx
│       │   ├── BetaPerks.tsx
│       │   ├── FAQ.tsx
│       │   ├── FinalCTA.tsx
│       │   └── index.ts
│       └── ui/           # Reusable UI components
│           ├── Button.tsx
│           ├── Card.tsx
│           ├── PhoneMockup.tsx
│           └── index.ts
├── tailwind.config.ts
└── package.json
```

## Adding Screenshots

The phone mockup in the Hero section currently uses a placeholder. To add real app screenshots:

1. Take screenshots of the PocketPlan app (recommended size: 390x844px for iPhone 14)
2. Add them to `/public/images/`
3. Update `src/components/ui/PhoneMockup.tsx`:

```tsx
// Replace the PhonePlaceholder component with:
import Image from "next/image";

function PhoneScreen() {
  return (
    <Image
      src="/images/dashboard-screenshot.png"
      alt="PocketPlan Dashboard"
      fill
      className="object-cover object-top"
      priority
    />
  );
}
```

### Recommended Screenshots

- `dashboard-screenshot.png` - Main dashboard view
- `canibuy-screenshot.png` - Can I Buy? feature
- `goals-screenshot.png` - Savings goals
- `recurring-screenshot.png` - Bills & subscriptions

## Integrating the Email Form

The waitlist form in `FinalCTA.tsx` is ready for backend integration. Currently it simulates a successful submission.

### Option 1: Supabase

```tsx
// In FinalCTA.tsx
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus("loading");

  try {
    const { error } = await supabase
      .from('waitlist')
      .insert([{ email, created_at: new Date().toISOString() }]);

    if (error) throw error;
    setStatus("success");
  } catch {
    setStatus("error");
  }
};
```

### Option 2: API Route

Create `src/app/api/waitlist/route.ts`:

```tsx
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email } = await request.json();

  // Add to your database/email service here
  // e.g., Mailchimp, ConvertKit, Resend, etc.

  return NextResponse.json({ success: true });
}
```

Then update the form submission:

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus("loading");

  try {
    const res = await fetch('/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    if (!res.ok) throw new Error();
    setStatus("success");
  } catch {
    setStatus("error");
  }
};
```

## SEO Configuration

SEO is configured in `src/app/layout.tsx`. Before deploying:

1. **Update `metadataBase`** to your actual domain
2. **Add OG image**: Create a 1200x630px image and save as `/public/og-image.png`
3. **Add favicon**: Replace the default icons in `/public/`
4. **Update Twitter handle** in the metadata

### Required Assets

```
/public/
├── favicon.ico
├── icon-192.png
├── icon-512.png
├── apple-icon-180.png
├── og-image.png
└── manifest.json
```

Create `manifest.json`:

```json
{
  "name": "PocketPlan",
  "short_name": "PocketPlan",
  "description": "Smart Personal Finance Manager",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0a0a0a",
  "theme_color": "#0a0a0a",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy (auto-configured for Next.js)

```bash
npm install -g vercel
vercel
```

### Other Platforms

Build the production version:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

Or export as static site:

```bash
npm run build
# Output in .next folder, or configure for static export
```

## Design System

The landing page uses the same design system as the PocketPlan PWA. Key values:

### Colors (Dark Theme)

| Variable | HSL | Hex | Usage |
|----------|-----|-----|-------|
| `--background` | 222 47% 6% | #0d1117 | Page background |
| `--card` | 222 47% 9% | #131b29 | Card backgrounds |
| `--primary` | 142 70% 45% | #22c55e | CTAs, highlights |
| `--net` | 190 90% 55% | #22d3ee | Accent color |
| `--muted-foreground` | 215 20% 55% | #7c8da5 | Secondary text |

### Typography

- **Headings:** SF Pro Display (falls back to system fonts)
- **Hero:** `text-4xl` to `text-7xl` responsive
- **Section titles:** `text-3xl` to `text-5xl`
- **Body:** `text-base` to `text-lg`

### Border Radius

- Base: `0.875rem` (14px)
- Cards: `rounded-2xl`
- Buttons: `rounded-xl`
- Inputs: `rounded-xl`

## Customization

### Updating Content

All section content is in the respective component files:

- `Hero.tsx` - Main headline and subheadline
- `Problem.tsx` - Problem statements
- `Comparison.tsx` - Comparison table
- `Features.tsx` - Main features
- `MoreFeatures.tsx` - Additional features grid
- `WhoItsFor.tsx` - Target personas
- `Promise.tsx` - Brand promise
- `BetaPerks.tsx` - Beta benefits and timeline
- `FAQ.tsx` - Frequently asked questions
- `FinalCTA.tsx` - Final call to action

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Export it from `src/components/sections/index.ts`
3. Import and add it to `src/app/page.tsx`

## License

Private - PocketPlan

---

Built for the PocketPlan beta launch.
