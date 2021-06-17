import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Navbar.css';
import React, { useState } from 'react'

import SidebarData from './SidebarData';



function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className='bars'>
        <FaBars onClick={handleClick} />
      </div>
      <nav className={isOpen ? 'nav active' : 'nav'} >
        <AiOutlineClose onClick={handleClick} className='close' />
        <ul>
          {SidebarData.map((item, index) => (
            <li key={index}>
              <Link to={item.path}>
                {item.icon}
                <span className='title'>{item.title}</span>
              </Link>
            </li>
          ))}
          {/* <li>
            <Link to='#'>Item Box</Link>
          </li>
          <li>
            <Link to='#'>Item Box</Link>
          </li>
          <li>
            <Link to='#'>Item Box</Link>
          </li>
          <li>
            <Link to='#'>Item Box</Link>
          </li> */}
        </ul>
      </nav>
    </>
  )
}

export default Navbar
