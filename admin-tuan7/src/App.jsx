import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OverviewItem from './components/OverViewItem'

function App() {

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

  return (
    <>
    <div className="container">
      {/* Header */}
      <div className="header">
        <h2>Dashboard</h2>
        <div>
          <img className='search' src="./src/images/Search.png" alt="" />
          <input type="text" placeholder="Search" />
          <img src="./src/images/Bell.png" alt="" />
          <img src="./src/images/Question.png" alt="" />
          <img src="./src/images/Person.png" alt="" />
        </div>
      </div>

      {/* Menu */}
      <div className="menu">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
        <img src="./src/images/Group.png" alt="" />
      </div>

       {/* Content */}
      <div className="content">
        <div className="overview">
          <div className='overview-header'>
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
          {report.map((detail) => {
              return (
                <div>
                  <img src={detail.avatar} alt="" />
                  <p>Name: {detail.customer_name}</p>
                </div>
                  
              );
          })}
          DataTable

        </div>
      </div>
    </div>
    </>
  )
}

export default App
