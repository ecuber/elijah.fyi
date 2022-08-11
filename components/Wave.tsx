import { motion } from 'framer-motion';

interface WaveProps {
  className: string
}

export default function Header({ className }: WaveProps) {
  return (
    <div className={`${className} w-full h-full`}>
      <motion.div
        className="w-full h-full bg-white relative z-20"
        initial={{ translateX: 0 }}
        animate={{ translateX: '100%' }}
        transition={{ duration: 1.2 }}
      />
      <div className="z-0 w-full h-20 bg-white" />
    </div>
  );
}
