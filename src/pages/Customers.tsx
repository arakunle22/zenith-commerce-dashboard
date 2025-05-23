
import React, { useState } from 'react';
import { Search, Plus, Mail, Phone } from 'lucide-react';
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

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  orders: number;
  totalSpent: number;
  status: 'active' | 'inactive';
  joinedDate: string;
}

const customers: Customer[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    orders: 12,
    totalSpent: 1299.99,
    status: 'active',
    joinedDate: '2023-03-15'
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '+1 (555) 234-5678',
    orders: 8,
    totalSpent: 789.99,
    status: 'active',
    joinedDate: '2023-05-22'
  },
  {
    id: '3',
    name: 'Bob Johnson',
    email: 'bob@example.com',
    phone: '+1 (555) 345-6789',
    orders: 15,
    totalSpent: 2199.99,
    status: 'active',
    joinedDate: '2023-01-10'
  },
  {
    id: '4',
    name: 'Alice Brown',
    email: 'alice@example.com',
    phone: '+1 (555) 456-7890',
    orders: 3,
    totalSpent: 149.99,
    status: 'inactive',
    joinedDate: '2023-08-05'
  },
  {
    id: '5',
    name: 'Charlie Wilson',
    email: 'charlie@example.com',
    phone: '+1 (555) 567-8901',
    orders: 6,
    totalSpent: 599.99,
    status: 'active',
    joinedDate: '2023-06-18'
  }
];

const getStatusColor = (status: Customer['status']) => {
  switch (status) {
    case 'active':
      return 'bg-success text-success-foreground';
    case 'inactive':
      return 'bg-secondary text-secondary-foreground';
    default:
      return 'bg-secondary text-secondary-foreground';
  }
};

const Customers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Customers</h1>
        <p className="text-muted-foreground mt-1">Manage customer relationships</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search customers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button className="w-full md:w-auto">
          <Plus className="w-4 h-4 mr-2" />
          Add Customer
        </Button>
      </div>

      <div className="bg-card rounded-lg border border-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Orders</TableHead>
              <TableHead>Total Spent</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Joined</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCustomers.map((customer) => (
              <TableRow key={customer.id} className="hover:bg-muted/50">
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium">
                      {customer.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-medium">{customer.name}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="space-y-1">
                    <div className="flex items-center gap-1 text-sm">
                      <Mail className="w-3 h-3 text-muted-foreground" />
                      {customer.email}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Phone className="w-3 h-3" />
                      {customer.phone}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="font-medium">{customer.orders}</TableCell>
                <TableCell className="font-medium">${customer.totalSpent}</TableCell>
                <TableCell>
                  <Badge className={getStatusColor(customer.status)}>
                    {customer.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">{customer.joinedDate}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="sm">
                      <Mail className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Customers;
