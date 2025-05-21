import React from 'react';

interface TableRow {
  inlineText: string;
  name: string;
  screens: string;
  issues: string;
}

const TableComponent: React.FC = () => {
  const tableData: TableRow[] = [
    {
      inlineText:
        'Thanks, Sarah I appreciate your responsibilities and support. Looking forward to seeing these changes in action!',
      name: 'Owner',
      screens: '1,293',
      issues: '256k',
    },
    {
      inlineText: 'Dummy Heading',
      name: 'Owner',
      screens: '1,293',
      issues: '256k',
    },
  ];

  return (
    <div className="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-semibold text-gray-800">
        More Screens Showing Solution & Objectives
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
              >
                Inline-Text Something
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
              >
                A. Screens
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
              >
                B. Issues
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {tableData.map((row, index) => (
              <tr key={index}>
                <td className="max-w-xs px-6 py-4 text-sm whitespace-normal text-gray-900">
                  {row.inlineText}
                </td>
                <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">{row.name}</td>
                <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">{row.screens}</td>
                <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">{row.issues}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComponent;
