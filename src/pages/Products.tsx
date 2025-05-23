
import React, { useState } from 'react';
import { Search, Plus, Edit, Trash2, AlertTriangle } from 'lucide-react';
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

interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  price: number;
  stock: number;
  status: 'active' | 'inactive' | 'low-stock';
  image: string;
}

const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Earbuds Pro',
    sku: 'WEP-001',
    category: 'Electronics',
    price: 129.99,
    stock: 5,
    status: 'low-stock',
    image: '/placeholder.svg'
  },
  {
    id: '2',
    name: 'Smart Watch Series X',
    sku: 'SWX-002',
    category: 'Electronics',
    price: 299.99,
    stock: 0,
    status: 'inactive',
    image: '/placeholder.svg'
  },
  {
    id: '3',
    name: 'USB-C Cable 2m',
    sku: 'USB-003',
    category: 'Accessories',
    price: 19.99,
    stock: 2,
    status: 'low-stock',
    image: '/placeholder.svg'
  },
  {
    id: '4',
    name: 'Phone Case Clear',
    sku: 'PC-004',
    category: 'Accessories',
    price: 24.99,
    stock: 8,
    status: 'low-stock',
    image: '/placeholder.svg'
  },
  {
    id: '5',
    name: 'Bluetooth Speaker',
    sku: 'BS-005',
    category: 'Electronics',
    price: 79.99,
    stock: 25,
    status: 'active',
    image: '/placeholder.svg'
  }
];

const getStatusColor = (status: Product['status']) => {
  switch (status) {
    case 'active':
      return 'bg-success text-success-foreground';
    case 'inactive':
      return 'bg-destructive text-destructive-foreground';
    case 'low-stock':
      return 'bg-warning text-warning-foreground';
    default:
      return 'bg-secondary text-secondary-foreground';
  }
};

const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Products</h1>
        <p className="text-muted-foreground mt-1">Manage your product inventory</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button className="w-full md:w-auto">
          <Plus className="w-4 h-4 mr-2" />
          Add Product
        </Button>
      </div>

      <div className="bg-card rounded-lg border border-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>SKU</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProducts.map((product) => (
              <TableRow key={product.id} className="hover:bg-muted/50">
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-8 h-8 object-cover rounded"
                      />
                    </div>
                    <div>
                      <div className="font-medium">{product.name}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="font-mono text-sm">{product.sku}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell className="font-medium">${product.price}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    {product.stock <= 5 && product.stock > 0 && (
                      <AlertTriangle className="w-4 h-4 text-warning" />
                    )}
                    <span className={product.stock === 0 ? 'text-destructive font-medium' : ''}>
                      {product.stock}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className={getStatusColor(product.status)}>
                    {product.status.replace('-', ' ')}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="w-4 h-4" />
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

export default Products;
