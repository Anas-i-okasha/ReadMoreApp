import React from 'react'
import {Link} from 'react-router-dom'
import './nav.css'
 function Navbar() {
    return (
        <div >
           <div className="nav-main">
               <h2>ReadMore KnowMore</h2>
               <ul className="list-item">
                   <li> <Link to="/"> Home  </Link> </li>
                   <li> <Link to="/dash"> DashBoard </Link> </li>
                   <li><Link to="/articles"> Articles </Link> </li>
               </ul>
               </div> 
        </div>
    )
}

export default Navbar
