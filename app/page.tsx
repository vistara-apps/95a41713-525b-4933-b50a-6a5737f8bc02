'use client';

import { useEffect, useState } from 'react';
import { TrendingUp, Users, Trophy, Wallet } from 'lucide-react';
import { YieldStrategyCard } from './components/YieldStrategyCard';
import { PerformanceChart } from './components/PerformanceChart';
import { LeaderboardItem } from './components/LeaderboardItem';
import { CommunityPool } from './components/CommunityPool';
import { ConnectWalletButton } from './components/ConnectWalletButton';

interface YieldStrategy {
  id: string;
  name: string;
  protocol: string;
  apy: number;
  tvl: string;
  riskScore: number;
  asset: string;
  icon: string;
}

interface LeaderboardUser {
  rank: number;
  username: string;
  avatar: string;
  totalYield: string;
  apy: number;
}

interface Pool {
  id: string;
  name: string;
  members: number;
  totalValue: string;
  apy: number;
  strategy: string;
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<'discover' | 'pools' | 'leaderboard'>('discover');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const strategies: YieldStrategy[] = [
    {
      id: '1',
      name: 'Base ETH Staking',
      protocol: 'Aave',
      apy: 28.63,
      tvl: '$2.4M',
      riskScore: 2,
      asset: 'ETH',
      icon: '🔷',
    },
    {
      id: '2',
      name: 'USDC Lending',
      protocol: 'Compound',
      apy: 18.5,
      tvl: '$5.2M',
      riskScore: 1,
      asset: 'USDC',
      icon: '💵',
    },
    {
      id: '3',
      name: 'LP Farming',
      protocol: 'Uniswap V3',
      apy: 17.7,
      tvl: '$1.8M',
      riskScore: 3,
      asset: 'ETH-USDC',
      icon: '🦄',
    },
    {
      id: '4',
      name: 'Base Yield',
      protocol: 'Yearn',
      apy: 12.8,
      tvl: '$3.1M',
      riskScore: 2,
      asset: 'DAI',
      icon: '🌾',
    },
  ];

  const leaderboard: LeaderboardUser[] = [
    { rank: 1, username: 'yieldmaster', avatar: '👑', totalYield: '$12,450', apy: 32.5 },
    { rank: 2, username: 'defi_pro', avatar: '🚀', totalYield: '$9,820', apy: 28.3 },
    { rank: 3, username: 'base_builder', avatar: '🔷', totalYield: '$8,150', apy: 25.7 },
    { rank: 4, username: 'yield_hunter', avatar: '🎯', totalYield: '$6,940', apy: 22.1 },
  ];

  const pools: Pool[] = [
    {
      id: '1',
      name: 'BaseETH Yield Explorers',
      members: 127,
      totalValue: '$450K',
      apy: 24.5,
      strategy: 'Conservative ETH Staking',
    },
    {
      id: '2',
      name: 'DeFi Maximalists',
      members: 89,
      totalValue: '$320K',
      apy: 31.2,
      strategy: 'Aggressive LP Farming',
    },
    {
      id: '3',
      name: 'Stable Yield Club',
      members: 203,
      totalValue: '$680K',
      apy: 15.8,
      strategy: 'Stablecoin Lending',
    },
  ];

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-card border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-2xl">
                📡
              </div>
              <div>
                <h1 className="text-xl font-bold gradient-text">YieldBeacon</h1>
                <p className="text-xs text-muted">DeFi Yield on Base</p>
              </div>
            </div>
            <ConnectWalletButton />
          </div>
        </div>
      </header>

      {/* Performance Overview */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="glass-card rounded-lg p-6 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-muted mb-1">Total Portfolio Value</p>
              <h2 className="text-3xl font-bold">$6,177</h2>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted mb-1">Average APY</p>
              <p className="text-2xl font-bold text-success">+23.4%</p>
            </div>
          </div>
          <PerformanceChart />
        </div>
      </section>

      {/* Navigation Tabs */}
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex gap-2 glass-card rounded-lg p-1">
          <button
            onClick={() => setActiveTab('discover')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-md transition-all duration-200 ${
              activeTab === 'discover'
                ? 'bg-primary text-white shadow-lg'
                : 'text-muted hover:text-fg'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span className="font-medium">Discover</span>
          </button>
          <button
            onClick={() => setActiveTab('pools')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-md transition-all duration-200 ${
              activeTab === 'pools'
                ? 'bg-primary text-white shadow-lg'
                : 'text-muted hover:text-fg'
            }`}
          >
            <Users className="w-4 h-4" />
            <span className="font-medium">Pools</span>
          </button>
          <button
            onClick={() => setActiveTab('leaderboard')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-md transition-all duration-200 ${
              activeTab === 'leaderboard'
                ? 'bg-primary text-white shadow-lg'
                : 'text-muted hover:text-fg'
            }`}
          >
            <Trophy className="w-4 h-4" />
            <span className="font-medium">Leaders</span>
          </button>
        </div>
      </nav>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4">
        {activeTab === 'discover' && (
          <section className="space-y-4 animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Top Yield Strategies</h2>
              <span className="text-sm text-muted">Updated 2m ago</span>
            </div>
            {strategies.map((strategy) => (
              <YieldStrategyCard key={strategy.id} strategy={strategy} />
            ))}
          </section>
        )}

        {activeTab === 'pools' && (
          <section className="space-y-4 animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Community Pools</h2>
              <button className="text-sm text-primary hover:text-accent transition-colors">
                Create Pool
              </button>
            </div>
            {pools.map((pool) => (
              <CommunityPool key={pool.id} pool={pool} />
            ))}
          </section>
        )}

        {activeTab === 'leaderboard' && (
          <section className="space-y-4 animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Top Yielders</h2>
              <span className="text-sm text-muted">This Week</span>
            </div>
            {leaderboard.map((user) => (
              <LeaderboardItem key={user.rank} user={user} />
            ))}
          </section>
        )}
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 glass-card border-t border-[var(--color-border)] z-50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-around items-center">
            <button className="flex flex-col items-center gap-1 text-primary">
              <TrendingUp className="w-6 h-6" />
              <span className="text-xs font-medium">Yields</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-muted hover:text-fg transition-colors">
              <Users className="w-6 h-6" />
              <span className="text-xs">Pools</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-muted hover:text-fg transition-colors">
              <Wallet className="w-6 h-6" />
              <span className="text-xs">Portfolio</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-muted hover:text-fg transition-colors">
              <Trophy className="w-6 h-6" />
              <span className="text-xs">Rewards</span>
            </button>
          </div>
        </div>
      </nav>
    </main>
  );
}
