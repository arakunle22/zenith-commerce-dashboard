
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface Order {
  id: string;
  customer: string;
  email: string;
  amount: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  date: string;
}

const recentOrders: Order[] = [
  {
    id: '#3210',
    customer: 'John Doe',
    email: 'john@example.com',
    amount: 129.99,
    status: 'delivered',
    date: '2024-01-15'
  },
  {
    id: '#3209',
    customer: 'Jane Smith',
    email: 'jane@example.com',
    amount: 79.99,
    status: 'shipped',
    date: '2024-01-14'
  },
  {
    id: '#3208',
    customer: 'Bob Johnson',
    email: 'bob@example.com',
    amount: 199.99,
    status: 'processing',
    date: '2024-01-14'
  },
  {
    id: '#3207',
    customer: 'Alice Brown',
    email: 'alice@example.com',
    amount: 49.99,
    status: 'pending',
    date: '2024-01-13'
  },
  {
    id: '#3206',
    customer: 'Charlie Wilson',
    email: 'charlie@example.com',
    amount: 89.99,
    status: 'cancelled',
    date: '2024-01-13'
  }
];

const getStatusColor = (status: Order['status']) => {
  switch (status) {
    case 'delivered':
      return 'bg-success text-success-foreground';
    case 'shipped':
      return 'bg-info text-info-foreground';
    case 'processing':
      return 'bg-warning text-warning-foreground';
    case 'pending':
      return 'bg-secondary text-secondary-foreground';
    case 'cancelled':
      return 'bg-destructive text-destructive-foreground';
    default:
      return 'bg-secondary text-secondary-foreground';
  }
};

export const RecentOrders: React.FC = () => {
  return (
    <Card className="dashboard-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Recent Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentOrders.map((order) => (
              <TableRow key={order.id} className="hover:bg-muted/50">
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>
                  <div>
                    <div className="font-medium">{order.customer}</div>
                    <div className="text-sm text-muted-foreground">{order.email}</div>
                  </div>
                </TableCell>
                <TableCell className="font-medium">${order.amount}</TableCell>
                <TableCell>
                  <Badge className={getStatusColor(order.status)}>
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">{order.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
