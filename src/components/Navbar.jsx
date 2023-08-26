import React from 'react'
import { Link, Outlet } from "react-router-dom";
import Dropdown from './Dropdown';

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
     <div className="container-fluid">
        <div className="navbar-content">
        <Dropdown/>

          {/* <nav> */}
        <ul className='navbar-menu'>
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <Link to="/product"></Link>
          </li> */}
          <li>
            <Link to="/about">Haqqımızda</Link>
          </li>
          <li>
            <Link to="/contact">Bizimlə Əlaqə</Link>
          </li>
          <li>
            <Link to="/login">Daxil ol</Link>
          </li>
        </ul>
      {/* </nav> */}
</div>
</div>
</div>
<Outlet/>
</>
      
  )
}

export default Navbar
