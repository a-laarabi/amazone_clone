import React from "react";
import Logo from "../../assets/amazon_logo.png";
import "./NavBelt.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import {AiOutlineSearch, AiFillCaretDown} from 'react-icons/ai';


const NavBelt = () => {
  return (
    <div className="nav-belt">
      <div className="nav-left flexRow">
        <a href="#">
           <img className="amazonLogo" src={Logo} alt="" />
        </a>
       
        <div className="nav-global-location flexRow">
          <HiOutlineLocationMarker className="deliver" />
          <div>
            <div className="deliver nav-line-1">Deliver to</div>
            <div className="nav-line-2">Morocco</div>
          </div>
        </div>
      </div>
      <div className="nav-fill">
        <form className="nav-fill-form flexRow">
          <div className="allCategories">
            All
            <AiFillCaretDown fontSize="10px"/>
          </div>
          <input className="searchInput" placeholder="Search Amazon" />
          <button><AiOutlineSearch fontSize="30px" /></button>
        </form>
      </div>
      <div className="nav-right flexRow">
        <a href="#">
          <span className="nav-line-2">EN <AiFillCaretDown fontSize="10px"/></span>
        </a>
        <a href="">
          <div className="nav-line-1">Hello, sign in</div>
          <div className="nav-line-2">Account & Lists <AiFillCaretDown fontSize="10px"/></div>
        </a>
        <a href="">
          <div className="nav-line-1">Returns</div>
          <div className="nav-line-2">& Orders</div>
        </a>
        <a href="" className="cart">
          <HiOutlineShoppingCart fontSize="30px"/>
          <span className="cart-count-items">0</span>
          <span className="nav-line-2">Cart</span>
        </a>
      </div>
    </div>
  );
};

export default NavBelt;
