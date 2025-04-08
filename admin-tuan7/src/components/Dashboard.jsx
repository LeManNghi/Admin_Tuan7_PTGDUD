import { useState } from 'react'
import { useEffect } from 'react'
import DataTable from 'react-data-table-component'
import OverviewItem from './OverViewItem';


const columns = [
  {
    cell: row => (
      <input type="checkbox" onChange={() => {}} />
    ),
    maxWidth: "50px",
  },
  {
    name: 'CUSTOMER NAME',
    selector: row => row.customer_name,
    cell: row => (
      <div className='customer-name'>
        <img src={row.avatar} alt=''/>
        <span>{row.customer_name}</span>
      </div>
    ),
    grow: 2,
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
      <span className={row.status}>{row.status}</span>
    ),
    sortable: true,
  },
  {
    cell: row => (
      <button><img src="./src/images/create.png" alt="" /></button>
    ),
    right: true,
  },
];

export default function Dashboard() {

  const [report, setReport] = useState([]);
  const [overview, setOverview] = useState([]);

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const response = await fetch('https://67f3bab0cbef97f40d2bd34b.mockapi.io/detailed_report');
        const data = await response.json();

        setReport(data[0].report);
        setOverview(data[0].overview);
      } catch (error) {
        console.error("Erro:", error);
      }
    };

    fetchReport();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 6;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedData = report.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <>
       {/* Content */}
      <div className="content">
        <div className="overview">
          <div className='title'>
            <img src="./src/images/Squares four 1.png" alt="" />
            <span>Overview</span>
          </div>
          <div className='overview-items'>
            {overview.map((detail) => {
                return (
                  <OverviewItem 
                    label={detail.label} 
                    value={detail.value} 
                    percentage={detail.percentage} 
                    icon={detail.icon}
                    bgColor={detail.bgColor}
                  />
                );
            })}
          </div>
        </div>
        <div className='dataTable'>

          <div className='import-export'>
            <button><img src="./src/images/Download.png" alt="" />Import</button>
            <button><img src="./src/images/Move up.png" alt=""/>Export</button>
          </div>

          <div className='title'>
            <img src="./src/images/Squares four 1.png" alt="" />
            <span>Detailed Report</span>
          </div>
          {/* DataTable */}
          <DataTable
            columns={columns}
            data={paginatedData}
            pagination
            paginationServer
            paginationTotalRows={report.length}
            paginationPerPage={rowsPerPage}
            paginationComponentOptions={{ noRowsPerPage: true }}
            onChangePage={handlePageChange}
          />
          <div className='result'>{report.length} results</div>
          
        </div>
      </div>
    </>
  )
}


