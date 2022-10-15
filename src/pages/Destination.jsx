import { useState } from "react";
import { data } from "../data/data";
import { motion, AnimatePresence } from 'framer-motion'


const Destination = () => {
   const [currentPlanet, setCurrentPlanet] = useState(0);
   const { destinations } = data
   const { name, img, description, distance, travel } = destinations[currentPlanet];
   return (
      <AnimatePresence>
         <div className="destination">
            <div className="destination__content container">
               <h5><span>01</span>Pick your destination</h5>
               <div className="destination__main">
                  <motion.div
                     className="destination__main__img"
                     initial={{ zIndex: 0, opacity: 0, scale: 0.5 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ zIndex: 0, opacity: 0, scale: 0.5, transition: { duration: 0.0625, ease: "easeOut" } }}
                     key={currentPlanet}
                     transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
                  >
                     <img src={img} alt="planet" />
                  </motion.div>
                  <div className="destination__main__text">
                     <div className="destination__options">
                        {destinations.map((planet, index) => (
                           <h6
                              className={index === currentPlanet ? 'destination__option active' : 'destination__option'}
                              key={index}
                              onClick={() => setCurrentPlanet(index)}
                           >
                              {planet.name}
                           </h6>
                        ))}
                     </div>

                     <motion.div className="destination__info"
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -100, opacity: 0, transition: { duration: 0.625, ease: "easeOut" } }}
                        key={travel}
                        layout 
                        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
                     >
                        <div className="destination__info1">
                           <h1>{name}</h1>
                           <p className="description">{description}</p>
                        </div>
                        <div className="destination__info2">
                           <div className="distance">
                              <h6>Avg. Distance</h6>
                              <h3>{distance}</h3>
                           </div>
                           <div className="time">
                              <h6>Est. Travel Time</h6>
                              <h3>{travel}</h3>
                           </div>
                        </div>
                     </motion.div>
                  </div>
               </div>
            </div>
         </div>
      </AnimatePresence>
   );
};

export default Destination;
