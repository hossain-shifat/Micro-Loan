import React from "react";
import { motion } from "framer-motion";

const SplitText = ({ text, style }) => {
    const letters = text.split("")

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: {
                staggerChildren: 0.03,
                delayChildren: 0.04 * i
            },
        }),
    };

    const child = {
        hidden: { opacity: 0, y: 20, },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", damping: 12, stiffness: 100 },
        },
    };

    return (
        <motion.div style={{ display: "flex", overflow: "hidden", flexWrap: "wrap" }} variants={container} initial="hidden" animate="visible" className={style} >
            {letters.map((letter, index) => (
                <motion.span key={index} variants={child}>
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default SplitText;
