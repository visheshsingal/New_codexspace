import { motion } from 'framer-motion';

export const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative pointer-events-auto z-10"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center">
          <img
            src="https://c.animaapp.com/mk1krdvf8IZhRk/assets/icon-9.svg"
            alt="CodeXSpace Logo"
            className="w-6 h-6"
          />
        </div>
        <div className="hidden md:block">
          <span className="text-white font-medium text-lg tracking-wide">
            CodeXSpace
          </span>
        </div>
      </div>
    </motion.div>
  );
};