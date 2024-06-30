import React from 'react';

interface TableCellProps {
  children: React.ReactNode;
  type: 'th' | 'td';
  className?: string;
}

const TableCell: React.FC<TableCellProps> = ({ children, type, className }) => {
  const Element = type; // This will be either 'th' or 'td'
  return <Element className={`p-3 ${className}`}>{children}</Element>;
};

export default TableCell;