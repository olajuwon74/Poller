import "../src/App.css"
import { Link } from "react-router-dom"


export default function Sidebar(){
    return(
        <div className="sidebar-section">
            
            <header>
            <Link to="/create"><h4>CREATE POLL</h4></Link>
                <h4>VOTE</h4>
            </header>
            <div className="content-page">
            <Link to="/"><h1 id="homekey">P</h1></Link>
                <div className="sidebar">
                    <Link to="/active"> <h4>Active Polls</h4></Link> 
                    <Link to="/create"><h4>Create Poll</h4></Link>
                    <Link to="/polls"><h4>My Polls</h4></Link>
                </div>
            </div>
        </div>
    )
}