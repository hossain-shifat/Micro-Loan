import React from "react";
import { motion } from "framer-motion";

const FadeInScroll = ({ children, direction = "up", delay = 0, duration = 0.8, distance = 50, className = "",}) => {

    const offset = {
        up: { y: distance, x: 0 },
        down: { y: -distance, x: 0 },
        left: { x: -distance, y: 0 },
        right: { x: distance, y: 0 },
    };

    return (
        <motion.div className={className} initial={{ opacity: 0, ...offset[direction] }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration, delay }} whileHover={{ y: 0 }}>
            {children}
        </motion.div>
    );
};

export default FadeInScroll;
