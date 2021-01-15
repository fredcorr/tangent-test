import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

const Loader = () => {
    
        return (
            <AnimatePresence exitBeforeEnter>
                <motion.div className="loader" initial="hidden" animate="visible" variants={variants} exit={"hidden"}>
                    <span></span>
                </motion.div>
            </AnimatePresence>
        )
    }

export default Loader;