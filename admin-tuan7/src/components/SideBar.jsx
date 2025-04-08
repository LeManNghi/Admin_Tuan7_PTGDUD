import { Link } from 'react-router-dom'
import './SideBar.css'

const SideBar = () => {
  return (
    <div>
        <img src="./src/images/Logo.png" alt="" />
        <ul>
            <li>
                <Link to='/' className='nav-link'>Dashboard</Link>
            </li>
            <li>
                <Link to='/projects' className='nav-link'>Projects</Link>
            </li>
            <li>
                <Link to='/teams' className='nav-link'>Teams</Link>
            </li>
            <li>
                <Link to='/analystics' className='nav-link'>Analystics</Link>
            </li>
            <li>
                <Link to='/messages' className='nav-link'>Messages</Link>
            </li>
            <li>
                <Link to='/integrations' className='nav-link'>Integrations</Link>
            </li>
        </ul>
        <div className='sidebar-footer'>
            <img src="./src/images/Group.png" alt="" />
            <h2>V2.0 is available</h2>
            <button>Try now</button>
        </div>
    </div>
    
  )
}
export default SideBar
