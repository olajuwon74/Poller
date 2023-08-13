import "../src/App.css"
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"


export default function Sidebar(){
    const menuItem = [
        {
            path:"/active",
            icon:"/public/pajamas_check-xs (1).svg",
            name:"Active Poll"
        },
        {
            path:"/create",
            icon:"/public/+.svg",
            name:"Create Poll"
        },
        {
            path:"/polls",
            icon:"/public/ic_baseline-folder.svg",
            name:"My Polls"
        }
    ]
    return(
        <div className="sidebar-section">
            
            <header>
            <Link to="/create"><h4>CREATE POLL</h4></Link>
                <h4>VOTE</h4>
            </header>
            <div className="content-page">
            <Link to="/"><h1 id="homekey">P</h1></Link>
                <div className="bottom-content">
                {menuItem.map((item,index) => (
                    <NavLink to={item.path} key={index} className="sidebar" activeClassName="active">
                        <div className="sidebar-nav">{item.name}</div>
                        <div className="icon-nav"><img src={item.icon} id="icons"></img></div>
                    </NavLink>
                ))}
                </div>
                
            </div>
        </div>
    )
}