
import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, Users, ShoppingCart, Package } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface AnalyticsCardProps {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
  description?: string;
}

const AnalyticsCard: React.FC<AnalyticsCardProps> = ({ 
  title, 
  value, 
  change, 
  icon, 
  description 
}) => {
  const isPositive = change >= 0;
  
  return (
    <Card className="dashboard-card hover:shadow-lg transition-all duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="text-muted-foreground">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground mb-1">
          {value}
        </div>
        <div className="flex items-center text-xs">
          {isPositive ? (
            <TrendingUp className="w-3 h-3 text-success mr-1" />
          ) : (
            <TrendingDown className="w-3 h-3 text-destructive mr-1" />
          )}
          <span className={isPositive ? 'text-success' : 'text-destructive'}>
            {Math.abs(change)}%
          </span>
          <span className="text-muted-foreground ml-1">
            {description || 'from last month'}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export const AnalyticsCards: React.FC = () => {
  const analyticsData = [
    {
      title: 'Total Revenue',
      value: '$54,231',
      change: 12.5,
      icon: <DollarSign className="w-4 h-4" />,
      description: 'from last month'
    },
    {
      title: 'Total Orders',
      value: '1,429',
      change: 8.2,
      icon: <ShoppingCart className="w-4 h-4" />,
      description: 'from last month'
    },
    {
      title: 'Active Customers',
      value: '892',
      change: -2.1,
      icon: <Users className="w-4 h-4" />,
      description: 'from last month'
    },
    {
      title: 'Products Sold',
      value: '2,847',
      change: 15.3,
      icon: <Package className="w-4 h-4" />,
      description: 'from last month'
    }
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {analyticsData.map((data, index) => (
        <AnalyticsCard
          key={index}
          title={data.title}
          value={data.value}
          change={data.change}
          icon={data.icon}
          description={data.description}
        />
      ))}
    </div>
  );
};
