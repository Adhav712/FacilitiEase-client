import React from 'react';
import { BarChart3 } from 'lucide-react';

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
    <div className="relative h-[250px] sm:h-[300px]">
      <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs sm:text-sm text-gray-600">
        <span>₹L</span>
        <span>50k</span>
        <span>10k</span>
        <span>1k</span>
        <span>0</span>
      </div>
      <div className="ml-8 h-full flex items-end">
        {data.map((item, index) => (
          <div
            key={item.month}
            className="flex-1 flex flex-col items-center"
          >
            <div className="w-full px-1 sm:px-2">
              <div
                className="w-full bg-green-500 rounded-t"
                style={{
                  height: `${(item.amount / maxAmount) * 220}px`,
                  minHeight: item.amount > 0 ? '4px' : '0',
                }}
              />
            </div>
            <span className="text-xs sm:text-sm text-gray-600 mt-2">{item.month}</span>
          </div>
        ))}
      </div>
    </div>
  );
};