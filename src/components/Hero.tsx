import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from './animations';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-transparent dark:bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div variants={fadeInUp}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Hi, I'm <span className="text-blue-500">Stefanos Fessahaie</span>
            </h1>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8">
              Front-End Developer & Software Engineer
            </h2>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              Specializing in React, Node.js, TypeScript, and modern web technologies. 
              Building scalable web applications and innovative software solutions.
            </p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="space-x-4">
            <a
              href="#projects"
              className="btn-primary inline-block"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-block px-6 py-3 rounded-full border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition-colors duration-200"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 