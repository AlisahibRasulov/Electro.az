import React, { useState } from 'react';
import { Link } from "react-router-dom";



const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
       <div className={`dropdown ${isOpen ? 'open' : ''}`}>
      <button className="dropdown-toggle-btn" onClick={toggleDropdown}>
        <div className='btn-name'>
        Kateqoriyalar 
        </div>
      </button>
      <ul className="dropdown-menu">
          <Link className='li' to="/all-products">Bütün məhsullar</Link>
          <Link className='li' to="/computers">Notbuklar</Link>
          <Link className='li' to="/phones">Smartfonlar</Link>
          <Link className='li' to="/cameras">Fotoaparatlar</Link>
          <Link className='li' to="/accessories">Aksesuarlar</Link>
      </ul>
    </div>
    
  );
};

export default Dropdown;
