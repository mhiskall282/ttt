import React, { useState } from 'react';
import { ShoppingCart, User, Menu } from 'lucide-react';
import { CartDrawer } from '../cart/CartDrawer';
import { useCartStore } from '../../lib/store/useCartStore';

export function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const items = useCartStore((state) => state.items);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold text-blue-600">TTT</span>
              </div>
              <nav className="hidden md:flex ml-10 space-x-8">
                <a href="#" className="text-gray-700 hover:text-blue-600">Products</a>
                <a href="#" className="text-gray-700 hover:text-blue-600">Categories</a>
                <a href="#" className="text-gray-700 hover:text-blue-600">Deals</a>
                <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                className="p-2 rounded-full hover:bg-gray-100 relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className="h-6 w-6 text-gray-600" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <User className="h-6 w-6 text-gray-600" />
              </button>
              <button className="md:hidden p-2 rounded-full hover:bg-gray-100">
                <Menu className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </header>
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}