'use client';

import { Users, TrendingUp, ArrowRight } from 'lucide-react';

interface Pool {
  id: string;
  name: string;
  members: number;
  totalValue: string;
  apy: number;
  strategy: string;
}

interface CommunityPoolProps {
  pool: Pool;
}

export function CommunityPool({ pool }: CommunityPoolProps) {
  return (
    <div className="glass-card rounded-lg p-5 shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer group">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
            {pool.name}
          </h3>
          <p className="text-sm text-muted">{pool.strategy}</p>
        </div>
        <ArrowRight className="w-5 h-5 text-muted group-hover:text-primary transition-colors" />
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <p className="text-xs text-muted mb-1">Members</p>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4 text-primary" />
            <p className="text-lg font-semibold">{pool.members}</p>
          </div>
        </div>
        <div>
          <p className="text-xs text-muted mb-1">Total Value</p>
          <p className="text-lg font-semibold">{pool.totalValue}</p>
        </div>
        <div>
          <p className="text-xs text-muted mb-1">APY</p>
          <div className="flex items-center gap-1">
            <TrendingUp className="w-4 h-4 text-success" />
            <p className="text-lg font-bold text-success">{pool.apy}%</p>
          </div>
        </div>
      </div>

      <button className="w-full bg-primary hover:bg-accent text-white font-medium py-3 rounded-lg transition-all duration-200 hover:shadow-lg">
        Join Pool
      </button>
    </div>
  );
}
