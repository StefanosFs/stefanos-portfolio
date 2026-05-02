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
              My background includes full-stack development experience building modern web applications, e-commerce platforms, and AI-driven projects using current technologies.
              <br />
              I’m currently preparing for the Azure AI Engineer certification, with a strong interest in AI-integrated systems and practical machine learning applications.
              <br />
              I’m also the creator of EventIQ (coming soon), along with several other projects in active development,
              such as <a href="https://warmlydecor.store" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">warmlydecor.store</a>
              <br /> 
              I enjoy working across both frontend and backend systems, with a growing focus on AI-integrated applications.
              <br /> 
              I'm passionate about writing clean, maintainable code and designing intuitive user experiences that solve real problems.
              <br /> 
              This portfolio showcases my work and ongoing journey as a developer, with frequent updates as I continue to grow and take on new challenges.
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
