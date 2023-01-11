import React from "react";
import { Link } from "react-router-dom";
const Navbar=()=>{
  return(
<div className="Menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            {/* <li>
              <Link to="/Search">Search</Link>
            </li> */}
            <li>
              <Link to="/search">Search</Link>
            </li>
     </div>
  )
}
export default Navbar;