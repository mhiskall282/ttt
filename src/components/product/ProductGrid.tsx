import React from 'react';
import { ProductCard } from './ProductCard';
import { useCartStore } from '../../lib/store/useCartStore';
import type { Product } from '../../types';

const DEMO_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Premium Bathroom Faucet',
    description: 'Modern design with chrome finish and ceramic disc cartridge',
    price: 129.99,
    category: 'Faucets',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
    stock: 50
  },
  {
    id: '2',
    name: 'Rainfall Shower Head',
    description: 'Luxurious rainfall experience with easy installation',
    price: 89.99,
    category: 'Shower',
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=800',
    stock: 35
  },
  {
    id: '3',
    name: 'Modern Toilet Suite',
    description: 'Water-efficient dual flush system with soft-close seat',
    price: 299.99,
    category: 'Toilets',
    image: 'https://images.unsplash.com/photo-1595425279734-0e55d37c2c55?auto=format&fit=crop&q=80&w=800',
    stock: 20
  }
];

export function ProductGrid() {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {DEMO_PRODUCTS.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={addItem}
        />
      ))}
    </div>
  );
}