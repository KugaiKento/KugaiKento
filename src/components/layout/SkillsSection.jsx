"use client"
import { motion } from "framer-motion"
import "../../styles/SkillsSection.css"

function SkillsSection() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js"]

  return (
    <section className="skills-section">
      <h2 className="section-title">スキル</h2>
      <motion.div
        className="skills-container"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        initial="hidden"
        animate="show"
      >
        {skills.map((skill) => (
          <motion.span
            key={skill}
            className="skill-badge"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              show: { opacity: 1, scale: 1 },
            }}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </section>
  )
}

export default SkillsSection

