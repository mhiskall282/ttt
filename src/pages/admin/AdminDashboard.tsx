import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { LayoutDashboard, Package, Users, ShoppingBag } from 'lucide-react';
import { ProductsManager } from './ProductsManager';
import { OrdersManager } from './OrdersManager';
import { CustomersManager } from './CustomersManager';

export function AdminDashboard() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white p-6">
        <div className="mb-8">
          <h2 className="text-xl font-bold">Admin Dashboard</h2>
        </div>
        <nav className="space-y-2">
          <Link
            to="/admin"
            className="flex items-center space-x-2 px-4 py-2 rounded hover:bg-gray-700"
          >
            <LayoutDashboard className="h-5 w-5" />
            <span>Overview</span>
          </Link>
          <Link
            to="/admin/products"
            className="flex items-center space-x-2 px-4 py-2 rounded hover:bg-gray-700"
          >
            <Package className="h-5 w-5" />
            <span>Products</span>
          </Link>
          <Link
            to="/admin/orders"
            className="flex items-center space-x-2 px-4 py-2 rounded hover:bg-gray-700"
          >
            <ShoppingBag className="h-5 w-5" />
            <span>Orders</span>
          </Link>
          <Link
            to="/admin/customers"
            className="flex items-center space-x-2 px-4 py-2 rounded hover:bg-gray-700"
          >
            <Users className="h-5 w-5" />
            <span>Customers</span>
          </Link>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        <Routes>
          <Route index element={<AdminOverview />} />
          <Route path="products" element={<ProductsManager />} />
          <Route path="orders" element={<OrdersManager />} />
          <Route path="customers" element={<CustomersManager />} />
        </Routes>
      </main>
    </div>
  );
}

function AdminOverview() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardCard
          title="Total Products"
          value="150"
          icon={<Package className="h-8 w-8" />}
        />
        <DashboardCard
          title="Total Orders"
          value="1,234"
          icon={<ShoppingBag className="h-8 w-8" />}
        />
        <DashboardCard
          title="Total Customers"
          value="5,678"
          icon={<Users className="h-8 w-8" />}
        />
      </div>
    </div>
  );
}

function DashboardCard({ title, value, icon }: { title: string; value: string; icon: React.ReactNode }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
        <div className="text-blue-600">{icon}</div>
      </div>
    </div>
  );
}