import { render, screen } from '@testing-library/react';
import React from 'react';

import TableCell from './TableCell'; // Adjust the import path as needed

const renderTableCell = (type: 'td' | 'th', className: string | undefined, children: React.ReactNode) => {
  if (type === 'td') {
    render(
      <table>
        <thead>
          <tr><th>table head</th></tr>
        </thead>
        <tbody>
          <tr>
            <TableCell type={type} className={className}>
              {children}
            </TableCell>
          </tr>
        </tbody>
      </table>
    );
    return;
  }

  render(
    <table>
      <thead>
        <tr>
          <TableCell type={type} className={className}>
            {children}
          </TableCell>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>table data</td>
        </tr>
      </tbody>
    </table>
  );
}

describe('TableCell Component', () => {
  it('should render a td element when type is "td"', () => {
    renderTableCell('td', "custom-class", 'Table Cell Content')
    const tdElement = screen.getByText('Table Cell Content').closest('td');
    expect(tdElement).toBeInTheDocument();
    expect(tdElement).toHaveClass('p-3 custom-class');
  });

  it('should render a th element when type is "th"', () => {
    renderTableCell('th', 'custom-class', 'Table Header Content')
    const thElement = screen.getByText('Table Header Content').closest('th');
    expect(thElement).toBeInTheDocument();
    expect(thElement).toHaveClass('p-3 custom-class');
  });

  it('should render children correctly', () => {
    const child = <span data-testid="child-element">Child Element</span>
    renderTableCell('td', '', child)
    const childElement = screen.getByTestId('child-element');
    expect(childElement).toBeInTheDocument();
    expect(childElement).toHaveTextContent('Child Element');
  });

  it('should apply default padding class', () => {
    renderTableCell('td', undefined, 'Default Padding');
    const tdElement = screen.getByText('Default Padding').closest('td');
    expect(tdElement).toHaveClass('p-3');
  });

  it('should handle empty className prop', () => {
    renderTableCell('td', undefined, 'No Extra Classes');
    const tdElement = screen.getByText('No Extra Classes').closest('td');
    expect(tdElement).toHaveClass('p-3');
  });
});
