import React from 'react';

interface TableColumn {
  key: string;
  label: string;
  sortable?: boolean;
}

interface TableProps {
  columns: TableColumn[];
  data: any[];
  renderCell: (item: any, column: TableColumn) => React.ReactNode;
  onSort?: (key: string) => void;
  sortKey?: string;
  sortDirection?: 'asc' | 'desc';
  className?: string;
}

export default function Table({
  columns,
  data,
  renderCell,
  onSort,
  sortKey,
  sortDirection,
  className = ''
}: TableProps) {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
                  column.sortable && onSort ? 'cursor-pointer hover:bg-gray-100' : ''
                }`}
                onClick={() => column.sortable && onSort && onSort(column.key)}
              >
                <div className="flex items-center space-x-1">
                  <span>{column.label}</span>
                  {column.sortable && sortKey === column.key && (
                    <span className="text-blue-500">
                      {sortDirection === 'asc' ? '↑' : '↓'}
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              {columns.map((column) => (
                <td key={column.key} className="px-6 py-4 whitespace-nowrap">
                  {renderCell(item, column)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
