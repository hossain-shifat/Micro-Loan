import React from "react";
import { motion } from "framer-motion";

const FadeIn = ({ children, direction = "up", delay = 0, duration = 0.8, className = "",}) => {

    const position = {
        up: { y: 50, x: 0 },
        down: { y: -50, x: 0 },
        left: { x: -50, y: 0 },
        right: { x: 50, y: 0 },
    };

    return (
        <motion.div className={className} initial={{ opacity: 0, ...position[direction] }} whileInView={{ opacity: 1, y: 0, x: 0 }} viewport={{ once: true }} transition={{ duration, delay }}>
            {children}
        </motion.div>
    );
};

export default FadeIn;
