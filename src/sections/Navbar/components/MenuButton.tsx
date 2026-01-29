import { motion } from 'framer-motion';

export const MenuButton = () => {
  return (
    <motion.button
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      role="button"
      className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300 pointer-events-auto"
    >
      <div className="flex items-center gap-2">
        <span>Menu</span>
      </div>
    </motion.button>
  );
};