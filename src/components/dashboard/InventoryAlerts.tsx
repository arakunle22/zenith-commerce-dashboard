
import React from 'react';
import { AlertTriangle, Package } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface InventoryItem {
  id: string;
  name: string;
  sku: string;
  currentStock: number;
  minStock: number;
  status: 'low' | 'out' | 'critical';
}

const inventoryItems: InventoryItem[] = [
  {
    id: '1',
    name: 'Wireless Earbuds Pro',
    sku: 'WEP-001',
    currentStock: 5,
    minStock: 10,
    status: 'low'
  },
  {
    id: '2',
    name: 'Smart Watch Series X',
    sku: 'SWX-002',
    currentStock: 0,
    minStock: 5,
    status: 'out'
  },
  {
    id: '3',
    name: 'USB-C Cable 2m',
    sku: 'USB-003',
    currentStock: 2,
    minStock: 20,
    status: 'critical'
  },
  {
    id: '4',
    name: 'Phone Case Clear',
    sku: 'PC-004',
    currentStock: 8,
    minStock: 15,
    status: 'low'
  }
];

const getStatusColor = (status: InventoryItem['status']) => {
  switch (status) {
    case 'out':
      return 'bg-destructive text-destructive-foreground';
    case 'critical':
      return 'bg-warning text-warning-foreground';
    case 'low':
      return 'bg-secondary text-secondary-foreground';
    default:
      return 'bg-secondary text-secondary-foreground';
  }
};

const getStatusIcon = (status: InventoryItem['status']) => {
  switch (status) {
    case 'out':
    case 'critical':
      return <AlertTriangle className="w-4 h-4" />;
    case 'low':
      return <Package className="w-4 h-4" />;
    default:
      return <Package className="w-4 h-4" />;
  }
};

export const InventoryAlerts: React.FC = () => {
  return (
    <Card className="dashboard-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-warning" />
          Inventory Alerts
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {inventoryItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-3">
                {getStatusIcon(item.status)}
                <div>
                  <div className="font-medium text-sm">{item.name}</div>
                  <div className="text-xs text-muted-foreground">SKU: {item.sku}</div>
                </div>
              </div>
              <div className="text-right">
                <Badge className={`${getStatusColor(item.status)} mb-1`}>
                  {item.status}
                </Badge>
                <div className="text-xs text-muted-foreground">
                  {item.currentStock}/{item.minStock} units
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
