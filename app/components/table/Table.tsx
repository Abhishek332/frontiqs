import React from 'react';

interface TableProps {
  headers: string[];
  data: Array<Array<string | number>>;
}

const Table: React.FC<TableProps> = ({ headers, data }) => {
  return (
    <div className='overflow-x-auto'>
      <table className='w-full border-collapse border border-gray-300 dark:border-gray-700'>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className='border border-gray-300 bg-gray-100 px-4 py-2 text-left text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300'
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className='even:bg-gray-50 dark:even:bg-gray-800'
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className='border border-gray-300 px-4 py-2 text-gray-700 dark:border-gray-700 dark:text-gray-300'
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
