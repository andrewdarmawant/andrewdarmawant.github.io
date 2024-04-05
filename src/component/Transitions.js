// Filename - Components/Transition.js 

import { motion } from "framer-motion";
const animationConfiguration = {
    initial: { x:"-50%", opacity: 0, scale:0.5 },
    animate: { x:0, opacity: 1, scale:1 },
    transition: {duration:0.2, ease:"easeOut"},
    exit: { x:"50%", opacity: 0, scale:1, 
    transition:{
        duration:0.3
    }
},
};
const Transitions = ({ children }) => {
    return (
        <motion.div
            variants={animationConfiguration}
            initial="initial"
            animate="animate"
            exit="exit"
            transition="transition"
        >
            {children}
        </motion.div>
    );
};
export default Transitions;