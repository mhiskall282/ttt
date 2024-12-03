import React from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingCart, Package, Truck } from 'lucide-react';
import { useCartStore } from '../lib/store/useCartStore';
import type { Product } from '../types';

// TODO: Replace with API call
const DEMO_PRODUCT: Product = {
  id: '1',
  name: 'Premium Bathroom Faucet',
  description: 'Modern design with chrome finish and ceramic disc cartridge. Features a sleek design that complements any bathroom décor. Easy installation and maintenance.',
  price: 129.99,
  category: 'Faucets',
  image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
  stock: 50
};

export function ProductPage() {
  const { id } = useParams();
  const addItem = useCartStore((state) => state.addItem);

  // TODO: Replace with actual API call using the id
  const product = DEMO_PRODUCT;

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="mt-4 text-gray-600">{product.description}</p>
        </div>

        <div className="border-t border-b py-4">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-blue-600">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-green-600 flex items-center">
              <Package className="h-5 w-5 mr-1" />
              {product.stock} in stock
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => addItem(product)}
            className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            Add to Cart
          </button>

          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Truck className="h-6 w-6 text-gray-400" />
              <div>
                <h3 className="text-sm font-medium text-gray-900">
                  Free Shipping
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Free shipping on orders over $500
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}