
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const salesData = [
  { month: 'Jan', sales: 4000, orders: 240 },
  { month: 'Feb', sales: 3000, orders: 139 },
  { month: 'Mar', sales: 2000, orders: 980 },
  { month: 'Apr', sales: 2780, orders: 390 },
  { month: 'May', sales: 1890, orders: 480 },
  { month: 'Jun', sales: 2390, orders: 380 },
  { month: 'Jul', sales: 3490, orders: 430 },
  { month: 'Aug', sales: 4000, orders: 520 },
  { month: 'Sep', sales: 3000, orders: 290 },
  { month: 'Oct', sales: 2000, orders: 190 },
  { month: 'Nov', sales: 2780, orders: 390 },
  { month: 'Dec', sales: 4890, orders: 680 },
];

export const SalesChart: React.FC = () => {
  return (
    <Card className="dashboard-card col-span-1 lg:col-span-2">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Sales Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis 
                dataKey="month" 
                axisLine={false}
                tickLine={false}
                className="text-muted-foreground"
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                className="text-muted-foreground"
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--popover))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                  color: 'hsl(var(--popover-foreground))'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="sales" 
                stroke="hsl(var(--primary))" 
                strokeWidth={3}
                dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: 'hsl(var(--primary))', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
