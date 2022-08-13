import { BsFillMoonFill } from 'react-icons/bs';
import { motion } from 'framer-motion';

export default function Moon() {
  return (
    <motion.span
      initial={{ translateY: '-4rem' }}
      animate={{ translateY: '0rem' }}
      transition={{ delay: 0.3, duration: 0.7, ease: 'circOut' }}
      drag
      dragElastic={0.2}
      dragConstraints={{
        left: 10, right: 10, top: 10, bottom: 10,
      }}
      dragSnapToOrigin
      className="absolute top-[-20%] sm:top-[-20%] md:top-[-30%] left-[-30%] xs:left-[-26%] sm:left-[-22%] md:left-[-27%] text-[16rem] sm:text-[20rem] md:text-[24rem] text-dark-2 opacity-[0.2] z-0"
    >
      <BsFillMoonFill />
    </motion.span>
  );
}
