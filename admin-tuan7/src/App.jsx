import { useState } from 'react'
import { useEffect } from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import SideBar from './components/SideBar.jsx';
import DashboardHeader from './components/DashboardHeader.jsx';
import Dashboard from './components/Dashboard.jsx';
import Project from './components/Project.jsx';
import Teams from './components/Teams.jsx';
import Analystics from './components/Analystics.jsx';
import Messages from './components/Messages.jsx';
import Integrations from './components/Integrations.jsx';

function App() {

  return (
    <>
    <div className="container">
      <div className="header">
        <DashboardHeader/>
      </div>

      <div className="menu">
        <SideBar/>
      </div>

      <div className="content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/analystics" element={<Analystics />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/integrations" element={<Integrations />} />
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
