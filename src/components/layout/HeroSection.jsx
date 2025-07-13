"use client"
import { motion } from "framer-motion"
import "../../styles/HeroSection.css"

function HeroSection() {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="profile-image-container"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
      >
        <img src="images/kento.png" alt="プロフィール画像" className="profile-image" />
      </motion.div>
      <motion.h1 className="hero-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        久貝建都
      </motion.h1>
      <motion.p className="hero-subtitle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        Webサービス・開発エンジニア
      </motion.p>
      <motion.p
        className="hero-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
      株式会社メンバーズ
      </motion.p>
    </motion.section>
  )
}

export default HeroSection

