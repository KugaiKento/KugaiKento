"use client"
import { motion } from "framer-motion"
import "../../styles/HobbiesSection.css"

function HobbiesSection() {
  const hobbies = [
    { title: "ゲーム", description: "マイクラ、第五人格、ポケポケなどー", icon: "🎮" },
    { title: "美味しいものいっぱい食べに行くこと", description: "カフェに行ったり", icon: "📚" },
    { title: "本屋さんに行くこと", description: "ジュンク堂によく行きます！主にプログラミングの技術書などを見るのが好きで新しい本が追加されていたらテンション上がります!", icon: "🥾" },
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


