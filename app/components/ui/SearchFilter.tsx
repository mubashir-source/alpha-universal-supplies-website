
import React from 'react';
import Input from './Input';
import Select from './Select';
import Button from './Button';

interface FilterOption {
  value: string;
  label: string;
}

interface SearchFilterProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  searchPlaceholder?: string;
  filters?: {
    key: string;
    label: string;
    value: string;
    options: FilterOption[];
    onChange: (value: string) => void;
  }[];
  onReset?: () => void;
  className?: string;
}

export default function SearchFilter({
  searchTerm,
  onSearchChange,
  searchPlaceholder = "Search...",
  filters = [],
  onReset,
  className = ''
}: SearchFilterProps) {
  return (
    <div className={`bg-white rounded-lg shadow-sm p-6 ${className}`}>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <Input
            type="search"
            placeholder={searchPlaceholder}
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="min-w-64"
          />
          
          {filters.map((filter) => (
            <Select
              key={filter.key}
              options={filter.options}
              value={filter.value}
              onChange={(e) => filter.onChange(e.target.value)}
              placeholder={filter.label}
            />
          ))}
        </div>
        
        <div className="flex space-x-2">
          {onReset && (
            <Button variant="secondary" onClick={onReset}>
              Reset
            </Button>
          )}
          <Button variant="secondary">
            Export
          </Button>
        </div>
      </div>
    </div>
  );
}
