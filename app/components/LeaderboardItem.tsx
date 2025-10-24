'use client';

import { TrendingUp, Award } from 'lucide-react';

interface LeaderboardUser {
  rank: number;
  username: string;
  avatar: string;
  totalYield: string;
  apy: number;
}

interface LeaderboardItemProps {
  user: LeaderboardUser;
}

export function LeaderboardItem({ user }: LeaderboardItemProps) {
  const getRankColor = (rank: number) => {
    if (rank === 1) return 'bg-warning text-black';
    if (rank === 2) return 'bg-gray-400 text-black';
    if (rank === 3) return 'bg-orange-600 text-white';
    return 'bg-surface text-fg';
  };

  return (
    <div className="glass-card rounded-lg p-4 shadow-card hover:shadow-hover transition-all duration-300">
      <div className="flex items-center gap-4">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${getRankColor(user.rank)}`}>
          {user.rank <= 3 ? <Award className="w-5 h-5" /> : user.rank}
        </div>
        
        <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-2xl">
          {user.avatar}
        </div>
        
        <div className="flex-1">
          <h3 className="font-bold text-lg">{user.username}</h3>
          <p className="text-sm text-muted">Total Yield: {user.totalYield}</p>
        </div>
        
        <div className="text-right">
          <div className="flex items-center gap-1 justify-end mb-1">
            <TrendingUp className="w-4 h-4 text-success" />
            <p className="text-lg font-bold text-success">{user.apy}%</p>
          </div>
          <p className="text-xs text-muted">APY</p>
        </div>
      </div>
    </div>
  );
}
