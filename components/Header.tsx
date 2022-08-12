import { motion } from 'framer-motion';

export default function Header() {
  return (
    <div className="absolute w-full h-full pointer-events-none overflow-hidden">
      <motion.div
        className="w-full h-full relative bg-primary z-10 rotate-[70deg]"
        initial={{ translateX: 0 }}
        animate={{ translateX: '100%' }}
        transition={{ duration: 1.2 }}
      />
    </div>
  );
}
