import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
      <div className="header"><h2>Dashboard</h2></div>
      <div className="menu">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
      <div className="content">
        <div className="overview">
          <div className='overview-item'>
            <p>Turn over</p>
          </div>
          <div className='overview-item'>
            <p>Profit</p>
          </div>
          <div className='overview-item'>
            <p>New Customer</p>
          </div>
        </div>
        <div className='dataTable'>
          DataTable
        </div>
      </div>
    </div>
    </>
  )
}

export default App
