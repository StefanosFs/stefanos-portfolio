import { motion } from 'framer-motion';
import { fadeIn } from './animations';

export default function Footer() {
  return (
    <motion.footer
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-6 bg-white/80 backdrop-blur-sm dark:bg-primary border-t border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p>© 2025 Stefanos Fessahaie - Portfolio. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
} 