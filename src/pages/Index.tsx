
import React from 'react';
import { AnalyticsCards } from '@/components/dashboard/AnalyticsCards';
import { SalesChart } from '@/components/dashboard/SalesChart';
import { RecentOrders } from '@/components/dashboard/RecentOrders';
import { InventoryAlerts } from '@/components/dashboard/InventoryAlerts';

const Index: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Welcome back! Here's what's happening with your store.</p>
      </div>

      <AnalyticsCards />

      <div className="grid gap-6 lg:grid-cols-3">
        <SalesChart />
        <InventoryAlerts />
      </div>

      <RecentOrders />
    </div>
  );
};

export default Index;
