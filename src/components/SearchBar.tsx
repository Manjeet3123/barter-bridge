
import React, { useState } from 'react';
import { Search, Sliders, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  className?: string;
  placeholder?: string;
  onSearch?: (query: string) => void;
  showFilters?: boolean;
}

const SearchBar = ({ 
  className, 
  placeholder = "Search skills...", 
  onSearch,
  showFilters = true
}: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  const clearSearch = () => {
    setQuery('');
    if (onSearch) {
      onSearch('');
    }
  };

  return (
    <form 
      onSubmit={handleSearch} 
      className={cn(
        "relative flex items-center w-full max-w-2xl mx-auto",
        isFocused ? "ring-2 ring-primary/20" : "",
        className
      )}
    >
      <div className="relative flex-1">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search size={18} className="text-muted-foreground" />
        </div>
        
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="h-12 w-full rounded-l-full border border-input bg-background pl-10 pr-10 focus:outline-none"
        />
        
        {query && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute inset-y-0 right-3 flex items-center"
          >
            <X size={16} className="text-muted-foreground hover:text-foreground transition-colors" />
          </button>
        )}
      </div>
      
      {showFilters && (
        <button
          type="button"
          className="h-12 px-4 border-y border-r border-input bg-background text-foreground/80 hover:text-foreground transition-colors"
        >
          <Sliders size={18} />
        </button>
      )}
      
      <button
        type="submit"
        className="h-12 px-6 rounded-r-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
