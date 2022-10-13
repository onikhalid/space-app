import { useState, useRef, useEffect } from "react";
import { motion } from 'framer-motion'

import { data } from "../data/data";

const Crew = () => {
   const { crew } = data
   const [current, setCurrent] = useState(0);
   const { name, img, role, bio } = crew[current];

   const [touchPosition, setTouchPosition] = useState(null)
   const ref = useRef(null);

   // use keyboard arrows to navigate and change crewMember in view
   const onkeydown = (e) => {
      if (e.key === 'ArrowRight' && current < 3) {
         setCurrent(current + 1)
      }

      else if (e.key === 'ArrowRight' && current === 3) {
         setCurrent(0)
      }
      else if (e.key === 'ArrowLeft' && current > 0) {
         setCurrent(current - 1)
      }
      else if (e.key === 'ArrowLeft' && current === 0) {
         setCurrent(3)
      }
   }
   
   // use swipe gestures to navigate and change crewMember in view
   const handleTouchStart = (e) => {
      const touchDown = e.touches[0].clientX
      setTouchPosition(touchDown)
   }

   const handleTouchMove = (e) => {
      const touchDown = touchPosition
  
      if(touchDown === null) {return}
  
      const currentTouch = e.touches[0].clientX
      const diff = touchDown - currentTouch
  
      if (diff > 15) {
         if (current < 3) {setCurrent(current + 1)}
         else if (current === 3) {setCurrent(3)}
      }
      else if (diff < -15) {
         if (current > 0) {setCurrent(current - 1)}
         else if (current === 0) {setCurrent(0)}
      }
      setTouchPosition(null)
  }

   useEffect(() => {
      ref.current.focus();
   }, []);

   return (
      <div className="crew" ref={ref} tabIndex={0} 
         onKeyDown={onkeydown}
         onTouchStart={handleTouchStart}
         onTouchMove={handleTouchMove}
      >
         <div className="crew__content">
            <h5><span>02</span>Meet your Crew</h5>
            <div className="crew__main">
               <motion.div 
                  className={current < 2 ? "crew__main__img variant" : "crew__main__img"} 
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  key={img}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
               >
                  <img src={img} alt={role} />
               </motion.div>
               <div className="crew__main__text">
                  <div className="crew__main__text-options">
                     {crew.map((crewMember, index) => (
                        <div
                           className={index === current ? 'crew__main__text-option active' : 'crew__main__text-option'}
                           key={index}
                           onClick={() => setCurrent(index)}
                        ></div>
                     ))}
                  </div>
                  <div className="crew__main__text-info">
                     <h4>{role}</h4>
                     <h2>{name}</h2>
                     <p>{bio}</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Crew;
