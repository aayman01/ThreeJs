import React, { useState } from 'react';
import { navLinks } from "../constants/index.js";
const NavItems = () => {
  return (
    <ul className='nav-ul'>
      {navLinks.map(({id, href, name}) => (
        <li
          key={id}
          className="nav-li"
        >
          <a href={href} className="nav-li_a" onClick={()=>{}}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};
const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 text-white">
        <div className="max-w-7xl mx-auto inline">
          <div className="flex justify-between items-center py-5 c-space">
            <a
              href="/"
              className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
            >
              Aayman
            </a>
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="text-natural-400 hover:text-white focus:outline-none sm:hidden flex"
              aria-label="Toggle-menu"
            >
              <img
                src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
                className="w-6 h-6"
                alt="toggle"
              />
            </button>
            <nav className='sm:flex hidden'><NavItems/></nav>
          </div>
        </div>
        <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
            <nav className='p-5'>
                <NavItems/>
            </nav>

        </div>
      </header>
    );
};

export default NavBar;