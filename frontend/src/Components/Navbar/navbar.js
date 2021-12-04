import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './nav.css'
 class Navbar extends Component {
    render() {
        return (
            <div className="nav-main">
                <h2> Read More KnowMore </h2>
            <div>
               <ul className="list-item">
                   <li> <Link to="/"> Home  </Link> </li>
                   <li> <Link to="/dash"> DashBoard </Link> </li>
                   <li><Link to="/articles"> Articles </Link> </li>
                   <li>  <Link to="/login">Sign up</Link> </li>
               </ul>
               </div>
            </div>
        )
    }
}
export default Navbar
 



