import React from 'react';
// ? components
import Input from "./library/Input";
import Button from "./library/Button";


// ? icons
import {SearchIcon,HeaderLikeHeartIcon,HeaderBasketIcon,PlayLogo} from "../svg"
import { Outlet } from 'react-router-dom';

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
    <div className='header'>
     <div className="container">
      <div className="header-content">
          <div className='logo'>
            <PlayLogo className="play-logo"/>
            <h1 className='logo-name'><a href="/">Electro.<span>az</span> </a></h1>
          </div>
          <div className='search'>
          <Input className="search-input" placeholder="Axtar..."/>
          <Button className='search-btn' btn-type='secondary' icon={<SearchIcon/>}></Button>
          </div>
          <div className="header-icons">
            <HeaderLikeHeartIcon className="like_header-icon"/>
            <Link  to="/basket"><HeaderBasketIcon className="basket_header-icon"/></Link>
          </div>
      </div>
     </div>
    </div>
    <Outlet/>
   </>
  );
};

export default Header;