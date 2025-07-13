"use client"
import { motion } from "framer-motion"
import "../../styles/HobbiesSection.css"

function HobbiesSection() {
  const hobbies = [
    { title: "本を読むこと", description: "技術書とか", icon: "🎮" },
    { title: "水泳", description: "小学校からやってる。今もたまに趣味で泳ぎに行ったりする", icon: "📚" },
    { title: "音楽関連", description: "KPOP:ILLIT、QWER", icon: "🥾" },
  ]

  return (
    <section className="hobbies-section">
      <h2 className="section-title">趣味</h2>
      <div className="hobbies-container">
        {hobbies.map((hobby, index) => (
          <motion.div
            key={index}
            className="hobby-card"
            whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="hobby-icon">{hobby.icon}</div>
            <h3 className="hobby-title">{hobby.title}</h3>
            <p className="hobby-description">{hobby.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default HobbiesSection


