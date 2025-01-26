import React from 'react';

interface ChartData {
  month: string;
  amount: number;
}

interface DashboardChartProps {
  data: ChartData[];
}

export const DashboardChart: React.FC<DashboardChartProps> = ({ data }) => {
  const maxAmount = Math.max(...data.map(d => d.amount));

  return (
    <div className="relative h-[300px]">
      <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-sm text-gray-600">
        <span>1L</span>
        <span>50k</span>
        <span>10k</span>
        <span>1k</span>
        <span>0</span>
      </div>
      <div className="ml-8 h-full flex items-end">
        {data.map((item) => (
          <div
            key={item.month}
            className="flex-1 flex flex-col items-center"
          >
            <div className="w-full px-2">
              <div
                className="w-full bg-green-500 rounded-t"
                style={{
                  height: `${(item.amount / maxAmount) * 220}px`,
                  minHeight: item.amount > 0 ? '4px' : '0',
                }}
              />
            </div>
            <div className="flex items-center mt-2">
              <span className="text-sm text-gray-600">₹ {item.amount.toLocaleString()}</span>
            </div>
            <span className="text-sm text-gray-600 mt-1">{item.month}</span>
          </div>
        ))}
      </div>
    </div>
  );
};