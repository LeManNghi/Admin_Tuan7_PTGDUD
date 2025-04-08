import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import avatarLee from './src/images/Lee.png';
import avatarGarcia from './src/images/Garcia.png';
import avatarBailey from './src/images/Bailey.png';
import avatarBrown from './src/images/Brown.png';
import avatarYoung from './src/images/Young.png';
import avatarAdams from './src/images/Adams.png';

const avatarMap = {
  './src/images/Lee.png': avatarLee,
  './src/images/Garcia.png': avatarGarcia,
  './src/images/Bailey.png': avatarBailey,
  './src/images/Brown.png': avatarBrown,
  './src/images/Young.png': avatarYoung,
  './src/images/Adams.png': avatarAdams,
};

const statusStyles = {
  New: 'bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-semibold',
  'In-progress': 'bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-semibold',
  Completed: 'bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold',
};

const data = [{
  report: [
    { avatar: './src/images/Lee.png', customer_name: 'Elizabeth Lee', company: 'AvatarSystems', order_value: '$359', order_date: '10/07/2023', status: 'New' },
    { avatar: './src/images/Garcia.png', customer_name: 'Carlos Garcia', company: 'SmoozeShift', order_value: '$747', order_date: '24/07/2023', status: 'New' },
    { avatar: './src/images/Bailey.png', customer_name: 'Elizabeth Bailey', company: 'Prime Time Telecom', order_value: '$564', order_date: '08/08/2023', status: 'In-progress' },
    { avatar: './src/images/Brown.png', customer_name: 'Ryan Brown', company: 'OmniTech Corporation', order_value: '$541', order_date: '31/08/2023', status: 'In-progress' },
    { avatar: './src/images/Young.png', customer_name: 'Ryan Young', company: 'DataStream Inc.', order_value: '$769', order_date: '01/05/2023', status: 'Completed' },
    { avatar: './src/images/Adams.png', customer_name: 'Hailey Adams', company: 'FlowRush', order_value: '$922', order_date: '10/06/2023', status: 'Completed' }
  ]
}];

const columns = [
  {
    name: 'CUSTOMER NAME',
    selector: row => row.customer_name,
    cell: row => (
      <div className="flex items-center gap-2">
        <img src={avatarMap[row.avatar]} alt={row.customer_name} className="w-8 h-8 rounded-full" />
        <span className="font-medium">{row.customer_name}</span>
      </div>
    ),
    sortable: true,
  },
  {
    name: 'COMPANY',
    selector: row => row.company,
    sortable: true,
  },
  {
    name: 'ORDER VALUE',
    selector: row => row.order_value,
    sortable: true,
  },
  {
    name: 'ORDER DATE',
    selector: row => row.order_date,
    sortable: true,
  },
  {
    name: 'STATUS',
    selector: row => row.status,
    cell: row => (
      <span className={statusStyles[row.status]}>{row.status}</span>
    ),
    sortable: true,
  },
];

export default function CustomerReportTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedData = data[0].report.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Detailed report</h2>
        <div className="flex gap-2">
          <button className="border rounded px-3 py-1 text-sm">Import</button>
          <button className="border rounded px-3 py-1 text-sm">Export</button>
        </div>
      </div>
      <DataTable
        columns={columns}
        data={paginatedData}
        pagination
        paginationServer
        paginationTotalRows={data[0].report.length}
        paginationPerPage={rowsPerPage}
        paginationComponentOptions={{ noRowsPerPage: true }}
        onChangePage={handlePageChange}
      />
      <div className="text-sm mt-2">{data[0].report.length} results</div>
    </div>
  );
}
