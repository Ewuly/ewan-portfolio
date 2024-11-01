import { motion } from "framer-motion";

// variants
const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    }
}

// calculate the reversed index dor staggered delay
const reversedIndex = (index) => {
    const totalSteps = 6; // total number of steps
    return totalSteps - index - 1;
}


const Stairs = () => {
    return <>
        {/* render 6 motion divs each representing a step of the stairs 
each div will have the same  animation defined by the stairAnimation object
the delay for each div is calculated dynamically based on its reserved index
creating a staggered effect with decreasing delay for each subsequent div
*/}
        {[...Array(6)].map((_, index) => (
            <motion.div key={index} variants={stairAnimation} initial="initial" animate="animate" exit="exit"
                transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                    delay: reversedIndex(index) * 0.1
                }}
                className="h-screen w-full bg-white relative" />
        ))}
    </>
}

export default Stairs