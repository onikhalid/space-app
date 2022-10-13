import { NavLink } from "react-router-dom";
import { motion } from 'framer-motion'


const Menu = ({ links }) => {
   return (
         <motion.div
            className="mobileMenu"
            key="mobile-menu"
            initial={{x:"100%", opacity: 0, zIndex: 18 }}
            animate={{x:0, opacity: 1}}
            exit={{x:"100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
         >
            <div className="menu__links">
               {
                  links.map(link => (
                     <NavLink
                        to={link.path}
                        key={link.number}
                        className='menu__link' 
                     >
                        <span>{link.number}</span> {link.name.toUpperCase()}
                     </NavLink>)
                  )
               }
            </div>
         </motion.div>
   );
};

export default Menu;
