# YieldBeacon - DeFi Yield on Base

Discover, manage, and socialize DeFi yield on Base, directly from Farcaster.

## Features

- 📊 **Personalized Yield Recommendations** - AI-powered yield strategy suggestions
- ⚡ **One-Click Deposits** - Gasless transactions via OnchainKit
- 👥 **Community Pools** - Collaborative yield farming with friends
- 🏆 **Leaderboards & Badges** - Gamified DeFi experience

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (L2 on Ethereum)
- **Wallet**: OnchainKit + Coinbase Wallet
- **Social**: Farcaster Mini App SDK
- **Styling**: Tailwind CSS with BASE theme

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.local.example .env.local
# Add your OnchainKit API key
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Base Mini App Integration

This app is optimized for Farcaster Frames and Base Mini Apps:

- ✅ OnchainKit for wallet connections and transactions
- ✅ MiniKit for Farcaster context and social features
- ✅ Gasless transactions via Paymaster
- ✅ Frame metadata for discovery
- ✅ Mobile-first responsive design

## Deployment

Deploy to Vercel or any Next.js-compatible platform:

```bash
npm run build
npm start
```

## License

MIT
