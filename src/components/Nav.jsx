import { useState, useLayoutEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion'

import { data } from "../data/data";
import Menu from "./Menu";



const Nav = () => {
   const [showMenu, setShowMenu] = useState(false);
   const { logo } = data
   const location = useLocation()
   
   useLayoutEffect(()=>{
      setShowMenu(false)
   }, [location.pathname])

   const pageLinks = [
      {
         path: "/",
         number: "00",
         name: "Home",
      },
      {
         path: "/destination",
         number: "01",
         name: "Destination",
      },
      {
         path: "/crew",
         number: "02",
         name: "Crew",
      },
      {
         path: "/technology",
         number: "03",
         name: "Technology",
      },
   ];
   
   return (
      <>
         <nav className="nav">
            <div className="nav__logo">
               <img src={logo.img} alt="" />
            </div>
            <div className="nav__links">
               {
                  pageLinks.map(link => (
                     <NavLink
                        to={link.path}
                        key={link.number}
                        className='nav__link' >
                        <span>{link.number}</span> {link.name.toUpperCase()}
                     </NavLink>
                  ))
               }
            </div>


            {/* Mobile Menu */}
            <AnimatePresence>
               {showMenu && <Menu links={pageLinks} />}
            </AnimatePresence>

            <div
               className={showMenu ? 'nav__hamburger cross' : 'nav__hamburger'}
               onClick={() => {
                  setShowMenu(!showMenu);}}
            >
               <span></span>
               <span></span>
               <span></span>
            </div>
         </nav>
      </>
   );
};

export default Nav;
