import { useState } from "react";
import { motion } from 'framer-motion'

import { useWindowWidth } from '../hooks/windowWidth'
import { data } from "../data/data";

const Technology = () => {
   const { technology } = data
   const [currentTech, setCurrentTech] = useState(0);
   const { name, images, description } = technology[currentTech];

   const width = useWindowWidth();
   console.log(width)



   const variants = width < 1023 ? 
      { 
         initial:{ x: "100%", opacity: 0 },
         animate:{ x: "0%", opacity: 1 },
      }
      : { 
         initial:{ y: "100%", opacity: 0 },
         animate:{ y: "-10%", opacity: 1 },
      }
    
    
   return (
      <div className="tech" tabIndex={0}>
         <div className="tech__content">
            <h5><span>03</span>Space Launch 101</h5>
            <div className="tech__main">


               <motion.div 
                  className="tech__main__img"
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  transition={{duration: 0.65, ease: 'easeOut'}}
                  key={description}
               >
                  <img src={width < 1024 ? images.landscape : images.portrait} alt="vehicle technology" />
               </motion.div>


               <div className="tech__main__text">
                  <div className="tech__main__text-options">
                     {technology.map((tech, index) => (
                        <div
                           className={index === currentTech ? 'tech__main__text-option active' : 'tech__main__text-option'}
                           key={index}
                           onClick={() => setCurrentTech(index)}
                        >
                           {tech.id}
                        </div>
                     ))}
                  </div>

                  <div className="tech__main__text-info">
                     <h6>THE TERMINOLOGY...</h6>
                     <h2 className="vehicle">{name}</h2>
                     <p>{description}</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Technology;
