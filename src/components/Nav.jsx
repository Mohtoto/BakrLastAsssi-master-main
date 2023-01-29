import React from "react";
import logo from "../assets/2.png";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Nav = () => {
  return (
    <div className="border">
      <nav className="navbar">
        <ul>
          <li>
            <a href="list">SHOP</a>
          </li>
          <li>
            <a href="list">ABOUT</a>
          </li>
          <li >
            <img className="logo" src={logo} alt="" />
          </li>
          <li>
            <a href="list">CONTACT</a>
          </li>
          <li>
            <a href="list">FAQS</a>
          </li>
        </ul>


      </nav>
        <div className="icons">
            
              <SearchIcon  />
              <ShoppingCartIcon />
          
        </div>
    </div>
  );
};

export default Nav;
