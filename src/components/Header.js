import React from "react";
import logo from "../assets/Li.png"
import "./Header.css"
import { Link } from 'react-router-dom';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
export default function Header() {
  return (
    <header>
      <div className="nav">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="seachbar">
          <div className="learning">
            <p>Learning</p>
            <ArrowDropDownIcon />
            <div className="vl"></div>

          </div>
          <input type="text" placeholder="Search skills, subjects, or software" />
          <div className="vl"></div>
          <div className="search">
            <SearchIcon />
          </div>
        </div>
        <div className="buttons">
          <div className="trail">
            <p> <Link  to='/signin' role='button'>Join Now</Link></p>
          </div>
          <div className="sign">
            <p>Sign In</p>
          </div>
        </div>
      </div>
    </header>
  )
}
