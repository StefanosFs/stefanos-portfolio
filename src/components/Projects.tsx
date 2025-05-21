import { motion } from 'framer-motion';
import { fadeIn, fadeInUp, staggerContainer } from './animations';
import { useEffect } from 'react';

const projects = [
  {
    title: 'GitHub Profile Finder',
    description: 'An application that allows users to search and view GitHub profiles, displaying user information, repositories, and statistics.',
    image: {
      url: 'https://placehold.co/600x400/1a1a1a/ffffff?text=GitHub+Profile+Finder',
      alt: 'GitHub Profile Finder - Application interface displaying GitHub user profiles and statistics'
    },
    tags: ['GitHub API', 'React', 'Tailwind CSS', 'JavaScript'],
    sourceCode: 'https://github.com/StefanosFs/github-profile-finder',
    liveDemo: 'https://git-hub-profile-finder-flame.vercel.app',
  }, 
  {
    title: 'Gym App React',
    description: 'A comprehensive fitness application built with React, featuring workout tracking, exercise library, and personalized routines.',
    image: {
      url: 'https://placehold.co/600x400/1a1a1a/ffffff?text=Gym+App+React',
      alt: 'Gym App React - Fitness tracking application interface showing workout routines and exercises'
    },
    tags: ['React', 'TypeScript', 'Material-UI', 'RapidAPI'],
    sourceCode: 'https://github.com/StefanosFs/gym-app-react',
    liveDemo: 'https://gym-app-react-eight.vercel.app',
  },
  {
    title: 'Meal App Live',
    description: 'A recipe discovery application that leverages a meal API to provide users with recipes, ingredients, and cooking instructions.',
    image: {
      url: 'https://placehold.co/600x400/1a1a1a/ffffff?text=Meal+App+Live',
      alt: 'Meal API Project - Recipe discovery application showing various dishes and ingredients'
    },
    tags: ['React.js', 'API Integration', 'CSS3', 'JavaScript'],
    sourceCode: 'https://github.com/StefanosFs/meal-api-project-react.js',
    liveDemo: 'https://meal-api-project-react-js.vercel.app',
  },
  {
    title: 'Random Password Generator',
    description: 'A simple tool that generates random passwords of varying lengths and complexity, featuring customizable options and instant clipboard support.',
    image: {
      url: 'https://placehold.co/600x400/1a1a1a/ffffff?text=Password+Generator',
      alt: 'Random Password Generator - Simple password generator interface'
    },
    tags: ['React.js', 'CSS3', 'JavaScript'],
    sourceCode: 'https://github.com/StefanosFs/random-password-generator',
    liveDemo: 'https://random-password-generator-js-eta.vercel.app/'
  },
  {
    title: 'Nasa React App',
    description: "An interactive tool that fetches NASA's Image of the Day using their public API, featuring detailed explanations, high-res images, and date-based search.",
    image: {
      url: 'https://placehold.co/600x400/1a1a1a/ffffff?text=Nasa+React+App',
      alt: 'Nasa React App - NASA Image of the Day interface'
    },
    tags: ['React.js', 'CSS3', 'JavaScript', 'NASA API'],
    sourceCode: 'https://github.com/StefanosFs/nasa-react-app',
    liveDemo: 'https://nasa-react-app-roan.vercel.app/'
  },
  {
    title: 'Tip Calculator',
    description: 'A responsive tip calculator that calculates tips based on bill amount and service quality, featuring real-time updates and customizable tip percentages.',
    image: {
      url: 'https://placehold.co/600x400/1a1a1a/ffffff?text=Tip+Calculator',
      alt: 'Tip Calculator - Simple tip calculator interface'
    },
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    sourceCode: 'https://github.com/StefanosFs/Tip-Calculator',
    liveDemo: 'https://tip-calculator-gd8c.vercel.app/'
  },
];

export default function Projects() {
  // Preload images
  useEffect(() => {
    projects.forEach(project => {
      const img = new Image();
      img.src = project.image.url;
    });
  }, []);

  return (
    <section id="projects" className="py-20 bg-transparent dark:bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading dark:text-white">My Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects. Each project showcases different skills
            and technologies I've worked with.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={fadeInUp}
              className="card group"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={project.image.url}
                  alt={project.image.alt}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-200"
                  loading="eager"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  Source Code
                </a>
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 