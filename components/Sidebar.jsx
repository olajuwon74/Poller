import "../src/App.css"
import { Link } from "react-router-dom"


export default function Sidebar(){
    return(
        <div className="sidebar-section">
            <header>
                <h3>CREATE POLL</h3>
                <h3>VOTE</h3>
            </header>
            <div className="content-page">
                <div className="sidebar">
                    <Link to="/active"> <h4>Active polls</h4></Link> 
                    <Link to="/create"><h4>Create poll</h4></Link>
                    <Link to="/polls"><h4>My polls</h4></Link>
                </div>
            </div>
        </div>
    )
}