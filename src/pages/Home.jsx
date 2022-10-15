import { Link, useNavigate } from "react-router-dom";
import {motion} from 'framer-motion'

const Home = () => {
const navigate = useNavigate()

   return (
      <div className="home">
         <div className="home__content container">
            <div className="home__text">
               <h5>So, you want to travel to</h5>
               <h1 className="home__heading">Space</h1>
               <p className="home__text">
                  Let’s face it; if you want to go to space, you might as well
                  genuinely go to outer space and not hover kind of on the edge of
                  it. Well sit back, and relax because we’ll give you a truly out
                  of this world experience!
               </p>
            </div>
            <motion.div 
               onClick={()=>navigate('/destination')} className="home__cta"
               initial={{ y: "-100%", opacity: 0 }}
               animate={{ y: [-100, 50, 0], opacity: 1 }}
               transition={{type:"spring", duration: .75, ease: 'easeInOut'}}
            >
               <Link to="/destination">Explore</Link>
            </motion.div>
         </div>
      </div>
   );
};

export default Home;
