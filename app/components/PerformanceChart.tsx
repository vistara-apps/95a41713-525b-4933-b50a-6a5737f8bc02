'use client';

export function PerformanceChart() {
  const data = [65, 72, 68, 75, 82, 78, 85, 90, 88, 95, 92, 100];
  const max = Math.max(...data);
  
  return (
    <div className="mt-4">
      <div className="flex items-end justify-between h-32 gap-1">
        {data.map((value, index) => {
          const height = (value / max) * 100;
          return (
            <div
              key={index}
              className="flex-1 bg-gradient-to-t from-primary to-accent rounded-t-sm transition-all duration-300 hover:opacity-80"
              style={{ height: `${height}%` }}
            />
          );
        })}
      </div>
      <div className="flex justify-between mt-2 text-xs text-muted">
        <span>Jan</span>
        <span>Feb</span>
        <span>Mar</span>
        <span>Apr</span>
        <span>May</span>
        <span>Jun</span>
      </div>
    </div>
  );
}
