import React from 'react';
import { Link } from 'react-router-dom';
import { ProductGrid } from '../components/product/ProductGrid';
import { Search } from 'lucide-react';

export function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1920"
            alt="Modern bathroom"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Quality Plumbing Solutions
          </h1>
          <p className="mt-6 text-xl text-gray-100 max-w-3xl">
            Discover our extensive range of premium bathroom and plumbing products.
            From modern faucets to complete bathroom suites, we have everything you need.
          </p>
          
          <div className="mt-10">
            <Link
              to="/search"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              <Search className="h-5 w-5 mr-2" />
              Browse Products
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
        <ProductGrid />
      </div>

      {/* Categories */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/search?category=${category.name}`}
              className="group relative rounded-lg overflow-hidden"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-200"
              />
              <div className="absolute inset-0 bg-gray-900 bg-opacity-40 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

const categories = [
  {
    name: 'Faucets',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'Showers',
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'Toilets',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
  },
];