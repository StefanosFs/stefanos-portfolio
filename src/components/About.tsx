import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerContainer } from "./animations";

const skills = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "JavaScript", level: 75 },
  { name: "SQL", level: 85 },
  { name: "AWS", level: 70 },
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
            I'm a passionate front end developer with experience in building
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
              With over 2 years of experience in software development, I've
              worked on various projects ranging from e-commerce platforms to
              enterprise applications. I focus on writing clean, maintainable
              code and building user-friendly interfaces.
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
