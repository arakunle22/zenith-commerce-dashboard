
import React, { useState } from 'react';
import { Search, Filter, Download, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface Order {
  id: string;
  customer: string;
  email: string;
  amount: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  date: string;
  items: number;
}

const orders: Order[] = [
  {
    id: '#3210',
    customer: 'John Doe',
    email: 'john@example.com',
    amount: 129.99,
    status: 'delivered',
    date: '2024-01-15',
    items: 2
  },
  {
    id: '#3209',
    customer: 'Jane Smith',
    email: 'jane@example.com',
    amount: 79.99,
    status: 'shipped',
    date: '2024-01-14',
    items: 1
  },
  {
    id: '#3208',
    customer: 'Bob Johnson',
    email: 'bob@example.com',
    amount: 199.99,
    status: 'processing',
    date: '2024-01-14',
    items: 3
  },
  {
    id: '#3207',
    customer: 'Alice Brown',
    email: 'alice@example.com',
    amount: 49.99,
    status: 'pending',
    date: '2024-01-13',
    items: 1
  },
  {
    id: '#3206',
    customer: 'Charlie Wilson',
    email: 'charlie@example.com',
    amount: 89.99,
    status: 'cancelled',
    date: '2024-01-13',
    items: 2
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

const Orders: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Orders</h1>
        <p className="text-muted-foreground mt-1">Manage and track customer orders</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex flex-col md:flex-row gap-4 flex-1">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search orders..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="processing">Processing</SelectItem>
              <SelectItem value="shipped">Shipped</SelectItem>
              <SelectItem value="delivered">Delivered</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="w-full md:w-auto">
          <Download className="w-4 h-4 mr-2" />
          Export
        </Button>
      </div>

      <div className="bg-card rounded-lg border border-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Items</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.map((order) => (
              <TableRow key={order.id} className="hover:bg-muted/50">
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>
                  <div>
                    <div className="font-medium">{order.customer}</div>
                    <div className="text-sm text-muted-foreground">{order.email}</div>
                  </div>
                </TableCell>
                <TableCell>{order.items} items</TableCell>
                <TableCell className="font-medium">${order.amount}</TableCell>
                <TableCell>
                  <Badge className={getStatusColor(order.status)}>
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">{order.date}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <Eye className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Orders;
