import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 text-center py-6 mt-16 border-t border-slate-800">
      <p>&copy; {new Date().getFullYear()} ShopHub React Training Final Project. All rights reserved.</p>
    </footer>
  );
}