"use client"
import { motion } from "framer-motion"
// import { Mail} from "lucide-react"
import "../../styles/ContactSection.css"
import { BsInstagram, BsTwitterX } from "react-icons/bs"

function ContactSection() {
  const contactIcons = [
    { Icon: BsTwitterX, key: "github", href: "https://x.com/sw9_e6" },
    { Icon: BsInstagram, key: "linkedin", href: "https://www.instagram.com/kento0808s?igsh=MXVhbzR6cDBjODAy" },
    // { Icon: Mail, key: "mail", href: "mailto:example@example.com" },
  ]

  return (
    <section className="contact-section">
      <h2 className="section-title">SNSリンク</h2>
      <div className="contact-icons">
        {contactIcons.map(({ Icon, key, href }) => (
          <motion.a
            key={key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Icon size={24} />
          </motion.a>
        ))}
      </div>
    </section>
  )
}

export default ContactSection

