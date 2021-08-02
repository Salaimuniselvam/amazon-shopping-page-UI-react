import React from 'react';
import Headerclasses from ".././css/Header.module.css";
import logo from ".././amazon.png";

const Header = () => {
  return(
    <div className={Headerclasses.header} >
       <img src={logo} alt="amazon logo here" />
    </div>
  )
}
export default Header;