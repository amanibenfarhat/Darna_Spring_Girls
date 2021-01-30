import React from 'react'
import  './Menu.css'
import {  NavLink} from "react-router-dom"
import Logo from '../../../logo-darna.png'

import Footer from "./Footer"
import Sidebar from "./Sidebar"
import Navbar from './Navbar'


function Menu({setUser ,user,cookies}) {
  
  const disconnect = (e) =>{
     e.preventDefault()
     cookies.remove("user", { path: '/' })
     setUser(cookies.get("user"))
     console.log(cookies.get("user"),user)
     window.location.reload(false);
  }

  return (
   <>
    <div>
  <div>
    <div className="sidebar" >
     
      <div className="logo"><a href="http://www.darna.tn" target="blank" className="simple-text logo-normal">
      <img src={Logo}/>      </a>
      </div>
      <Sidebar/>
    </div>
    <Navbar />
  </div>
  
</div>

   </>
  );
}

export default Menu;
