'use client';

import { Wallet } from 'lucide-react';
import { useState } from 'react';

export function ConnectWalletButton() {
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = () => {
    setIsConnected(!isConnected);
  };

  if (isConnected) {
    return (
      <button
        onClick={handleConnect}
        className="flex items-center gap-2 px-4 py-2 bg-surface rounded-lg hover:bg-primary transition-all duration-200"
      >
        <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
        <span className="text-sm font-medium">0x1234...5678</span>
      </button>
    );
  }

  return (
    <button
      onClick={handleConnect}
      className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-accent text-white rounded-lg transition-all duration-200 hover:shadow-lg"
    >
      <Wallet className="w-4 h-4" />
      <span className="text-sm font-medium">Connect</span>
    </button>
  );
}
