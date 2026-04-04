import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useAllRealCategories } from '../../hooks/api/useRealCategories';

const SecondaryNav: React.FC = () => {
  const location = useLocation();
  const { loading, getMainCategories } = useAllRealCategories();
  
  const mainCategories = getMainCategories();
  const displayCategories = mainCategories.filter(cat => !cat.archived);

  const isActive = (path: string) => {
    if (path === '/products') {
      return location.pathname === '/products' || location.pathname.startsWith('/products/');
    }
    if (path === '/services') {
      return location.pathname === '/services' || location.pathname.startsWith('/services/');
    }
    return location.pathname === path;
  };

  if (location.pathname === '/about') return null;

  return (
    <nav className="bg-muted text-muted-foreground border-t border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center space-x-6 py-2 overflow-x-auto scrollbar-hide">
          <Link
            to="/products"
            className={`flex items-center whitespace-nowrap text-sm hover:text-primary transition-colors py-1 flex-shrink-0 relative ${
              isActive('/products') ? 'text-primary font-medium' : ''
            }`}
          >
            All
          </Link>

          {loading ? (
            Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="h-4 bg-gray-200 rounded w-16 animate-pulse flex-shrink-0" />
            ))
          ) : (
            displayCategories.slice(0, 8).map((category, index) => {
              const categoryPath = category.id === 'services' ? '/services' : `/category/${category.id}`;
              const active = isActive(categoryPath);
              return (
                <React.Fragment key={category.id}>
                  <Link
                    to={categoryPath}
                    state={category.id !== 'services' ? { categoryName: category.name } : undefined}
                    className={`whitespace-nowrap text-sm hover:text-primary transition-colors py-1 flex-shrink-0 relative ${
                      active ? 'text-primary font-medium' : ''
                    }`}
                  >
                    {category.name}
                  </Link>
                  {index < displayCategories.slice(0, 8).length - 1 && (
                    <ChevronRight className="w-3 h-3 text-muted-foreground/50 flex-shrink-0" />
                  )}
                </React.Fragment>
              );
            })
          )}

          <div className="flex items-center space-x-6 ml-auto flex-shrink-0">
            <Link
              to="/deals"
              className={`whitespace-nowrap text-sm hover:text-primary/80 transition-colors py-1 relative ${
                isActive('/deals') ? 'text-primary font-medium' : ''
              }`}
            >
              Today's Deals
            </Link>
            <Link
              to="/new-arrivals"
              className={`whitespace-nowrap text-sm hover:text-primary transition-colors py-1 relative ${
                isActive('/new-arrivals') ? 'text-primary font-medium' : ''
              }`}
            >
              New Arrivals
            </Link>
            <Link
              to="/bestsellers"
              className={`whitespace-nowrap text-sm hover:text-primary transition-colors py-1 relative ${
                isActive('/bestsellers') ? 'text-primary font-medium' : ''
              }`}
            >
              Best Sellers
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SecondaryNav;
