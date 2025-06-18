import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerContainer } from "./animations";

const skills = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "JavaScript", level: 75 },
  { name: "Node.js", level: 80 },
  { name: "Python", level: 75 },
  { name: "SQL", level: 85 },
  { name: "AWS", level: 70 },
  { name: "Git", level: 80 },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-transparent dark:bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading dark:text-white">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate Front-End Developer with experience building
            scalable web applications. I love learning new technologies and
            solving complex problems.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <motion.div variants={fadeInUp} className="card">
            <h3 className="text-2xl font-semibold mb-4 dark:text-white">
              Experience
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              With over two years of software development experience, I have honed my skills through extensive self-study, practical application, and certified coursework, contributing to a variety of projects, including e-commerce platforms
              <br />
              such as <a href="https://warmlydecor.store" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">warmlydecor.store</a>
              <br /> 
              a full-featured modern online store 
              built with performance and user experience in mind, to
              enterprise applications.
              <br /> 
              I'm passionate about crafting elegant digital experiences through clean code and intuitive design. When I step away from the keyboard, you'll find me at the gym, lost in a good book, or experimenting in the kitchen.
              <br /> 
              This website serves as
              a portfolio of my work and a journal of my career as a developer.
              Feel free to explore. It will be updated from time to time as I
              grow my skills and expertise.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="card">
            <h3 className="text-2xl font-semibold mb-4 dark:text-white">
              Skills
            </h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
