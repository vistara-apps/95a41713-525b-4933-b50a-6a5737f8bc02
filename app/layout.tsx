import type { Metadata } from 'next'
import { Providers } from './components/Providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'YieldBeacon - DeFi Yield on Base',
  description: 'Discover, manage, and socialize DeFi yield on Base, directly from Farcaster.',
  openGraph: {
    title: 'YieldBeacon',
    description: 'Discover, manage, and socialize DeFi yield on Base',
    images: ['/og-image.png'],
  },
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': 'https://yieldbeacon.app/splash-200x200.png',
    'fc:frame:button:1': 'Discover Yields',
    'fc:frame:button:1:action': 'link',
    'fc:frame:button:1:target': 'https://yieldbeacon.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
