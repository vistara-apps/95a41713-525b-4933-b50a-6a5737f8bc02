'use client';

import { TrendingUp, Shield, ExternalLink } from 'lucide-react';

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

interface YieldStrategyCardProps {
  strategy: YieldStrategy;
}

export function YieldStrategyCard({ strategy }: YieldStrategyCardProps) {
  const getRiskColor = (score: number) => {
    if (score <= 1) return 'text-success';
    if (score === 2) return 'text-warning';
    return 'text-error';
  };

  const getRiskLabel = (score: number) => {
    if (score <= 1) return 'Low Risk';
    if (score === 2) return 'Medium Risk';
    return 'High Risk';
  };

  return (
    <div className="glass-card rounded-lg p-5 shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center text-2xl">
            {strategy.icon}
          </div>
          <div>
            <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
              {strategy.name}
            </h3>
            <p className="text-sm text-muted">{strategy.protocol}</p>
          </div>
        </div>
        <ExternalLink className="w-5 h-5 text-muted group-hover:text-primary transition-colors" />
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <p className="text-xs text-muted mb-1">APY</p>
          <div className="flex items-center gap-1">
            <TrendingUp className="w-4 h-4 text-success" />
            <p className="text-xl font-bold text-success">{strategy.apy}%</p>
          </div>
        </div>
        <div>
          <p className="text-xs text-muted mb-1">TVL</p>
          <p className="text-lg font-semibold">{strategy.tvl}</p>
        </div>
        <div>
          <p className="text-xs text-muted mb-1">Risk</p>
          <div className="flex items-center gap-1">
            <Shield className={`w-4 h-4 ${getRiskColor(strategy.riskScore)}`} />
            <p className={`text-sm font-medium ${getRiskColor(strategy.riskScore)}`}>
              {getRiskLabel(strategy.riskScore)}
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <button className="flex-1 bg-primary hover:bg-accent text-white font-medium py-3 rounded-lg transition-all duration-200 hover:shadow-lg">
          Deposit Now
        </button>
        <button className="px-4 py-3 border border-[var(--color-border)] rounded-lg hover:bg-surface transition-all duration-200">
          Details
        </button>
      </div>
    </div>
  );
}
