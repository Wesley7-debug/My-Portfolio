"use client";
import React, { useState } from 'react'
import Menu from './Menu/Menu'
import Nav from './Menu/Nav'

const NavBoth = () => {
   const [ismenuActive, setismenuActive] = useState(false);

   const handleClick = () =>{
    console.log("menu toggled")
    setismenuActive(!ismenuActive)
}

  return (
    <div>
        <Menu ismenuActive ={ismenuActive} handleClick={handleClick} />
        <Nav handleClick={handleClick} />
    </div>
  )
}

export default NavBoth