import React from 'react';

export interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
}

export function DataTable<T extends { [key: string]: any }>({
  data,
  columns,
  loading = false,
  selectable = false,
  onRowSelect,
}: DataTableProps<T>) {
  const [selectedRows, setSelectedRows] = React.useState<T[]>([]);
  const [sortKey, setSortKey] = React.useState<string | null>(null);
  const [sortAsc, setSortAsc] = React.useState(true);

  const handleSort = (col: Column<T>) => {
    if (!col.sortable) return;
    if (sortKey === col.key) {
      setSortAsc(!sortAsc);
    } else {
      setSortKey(col.key);
      setSortAsc(true);
    }
  };

  const sortedData = React.useMemo(() => {
    if (!sortKey) return data;
    return [...data].sort((a, b) => {
      if (a[sortKey] < b[sortKey]) return sortAsc ? -1 : 1;
      if (a[sortKey] > b[sortKey]) return sortAsc ? 1 : -1;
      return 0;
    });
  }, [data, sortKey, sortAsc]);

  const handleRowSelect = (row: T) => {
    let updated: T[];
    if (selectedRows.includes(row)) {
      updated = selectedRows.filter(r => r !== row);
    } else {
      updated = [...selectedRows, row];
    }
    setSelectedRows(updated);
    onRowSelect?.(updated);
  };

  const allSelected = selectable && selectedRows.length === data.length && data.length > 0;

  const handleSelectAll = () => {
    if (allSelected) {
      setSelectedRows([]);
      onRowSelect?.([]);
    } else {
      setSelectedRows(data);
      onRowSelect?.(data);
    }
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full border-collapse shadow-soft rounded-lg bg-white">
        <thead>
          <tr>
            {selectable && (
              <th className="px-2 py-2">
                <input type="checkbox" checked={allSelected} onChange={handleSelectAll} aria-label="Select all rows" />
              </th>
            )}
            {columns.map(col => (
              <th
                key={col.key}
                className={`px-4 py-2 text-left font-semibold cursor-pointer select-none font-display text-primary ${col.sortable ? 'hover:underline' : ''}`}
                onClick={() => handleSort(col)}
                aria-sort={sortKey === col.key ? (sortAsc ? 'ascending' : 'descending') : undefined}
                scope="col"
              >
                {col.title}
                {col.sortable && (
                  <span className="ml-1">{sortKey === col.key ? (sortAsc ? '▲' : '▼') : '↕'}</span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={columns.length + (selectable ? 1 : 0)} className="text-center py-4 text-gray-400">
                Loading...
              </td>
            </tr>
          ) : sortedData.length === 0 ? (
            <tr>
              <td colSpan={columns.length + (selectable ? 1 : 0)} className="text-center py-4 text-gray-400">
                No data available
              </td>
            </tr>
          ) : (
            sortedData.map((row, i) => {
              const isSelected = selectable && selectedRows.includes(row);
              return (
                <tr key={i} className={isSelected ? 'bg-primary-light' : 'hover:bg-gray-50 transition'}>
                  {selectable && (
                    <td className="px-2 py-2">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => handleRowSelect(row)}
                        aria-label={`Select row ${i + 1}`}
                      />
                    </td>
                  )}
                  {columns.map(col => (
                    <td key={col.key} className="px-4 py-2 border-t border-gray-200">
                      {String(row[col.dataIndex])}
                    </td>
                  ))}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
