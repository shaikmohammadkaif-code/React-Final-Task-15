import React from 'react';

export default function Navbar({ activePage, setActivePage, cartCount }) {
  return (
    <nav className="bg-slate-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <button 
          onClick={() => setActivePage('home')} 
          className="text-xl font-extrabold text-indigo-400 flex items-center gap-2 cursor-pointer"
        >
          🛍️ ShopHub
        </button>
        <div className="flex gap-6 items-center font-medium">
          <button 
            onClick={() => setActivePage('home')} 
            className={`hover:text-indigo-300 cursor-pointer ${activePage === 'home' ? 'text-indigo-400 font-bold' : ''}`}
          >
            Home
          </button>
          <button 
            onClick={() => setActivePage('products')} 
            className={`hover:text-indigo-300 cursor-pointer ${activePage === 'products' ? 'text-indigo-400 font-bold' : ''}`}
          >
            Products
          </button>
          <button 
            onClick={() => setActivePage('dashboard')} 
            className={`hover:text-indigo-300 cursor-pointer ${activePage === 'dashboard' ? 'text-indigo-400 font-bold' : ''}`}
          >
            Dashboard
          </button>
          <button 
            onClick={() => setActivePage('contact')} 
            className={`hover:text-indigo-300 cursor-pointer ${activePage === 'contact' ? 'text-indigo-400 font-bold' : ''}`}
          >
            Contact
          </button>
          <button 
            onClick={() => setActivePage('cart')} 
            className="relative bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700 flex items-center gap-2 cursor-pointer"
          >
            🛒 Cart 
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}