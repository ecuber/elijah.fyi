import { motion } from 'framer-motion';

export default function TransitionWipe() {
  return (
    <div className="absolute w-full h-full pointer-events-none overflow-hidden">
      <motion.div
        className="w-full h-full relative bg-primary z-10"
        initial={{ translateX: 0 }}
        animate={{ translateX: '100%' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />
    </div>
  );
}
