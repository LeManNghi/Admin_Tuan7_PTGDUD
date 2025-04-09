import { NavLink, useMatch, useResolvedPath } from "react-router-dom";
import './SideBar.css'

const SideBar = () => {
    const navLinkStyle = ({ isActive }) => ({
        color: isActive ? '#fff' : '',
        backgroundColor: isActive ? '#f44b86' : ''
    })

    const CustomLink = ({ children, to, img, ...props }) => {
        const resolved = useResolvedPath(to)
        const match = useMatch({ path: resolved.pathname, end: true })
        return (
            <li className="nav-link" style={match ? { color: '#fff', backgroundColor: '#f44b86' } : {}}>
                <NavLink to={to} {...props}>
                    <img src={img} alt="" />
                    {children}
                </NavLink>
            </li>
        )
    }

  return (
    <div>
        <img src="./src/images/Logo.png" alt="" />
        <ul>
            <CustomLink to='/' img='./src/images/Squares four 1.png'>Dashboard</CustomLink>
            <CustomLink to='/projects' img='./src/images/Folder.png'>Projects</CustomLink>
            <CustomLink to='/teams' img='./src/images/Groups.png'>Teams</CustomLink>
            <CustomLink to='/analystics' img='./src/images/Pie chart.png'>Analystics</CustomLink>
            <CustomLink to='/messages' img='./src/images/Chat.png'>Messages</CustomLink>
            <CustomLink to='/integrations' img='./src/images/Code.png'>Integrations</CustomLink>
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
