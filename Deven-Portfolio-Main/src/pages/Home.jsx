import React from 'react'
import { motion } from 'framer-motion'
import "../CSS/Home.css"
import '../index.css' 


// 🖼️ Import Assets
const photo = '/ProfileX.png'
const githubLogo = '/github.png'
const linkedinLogo = '/linkedin.png'
const gmailLogo = '/gmail.png'
const whatsappLogo = '/whatsapp.png'
const instagramLogo = '/insta.png'


export default function Home() {
  const professions = [
    'AI Enthusiast',
    'IT Engineer',
    'Computer Vision Researcher',
    'Developer',
  ]

  const quickLinks = [
    { img: githubLogo, title: 'GitHub', link: 'https://github.com/devenh29' },
    { img: linkedinLogo, title: 'LinkedIn', link: 'https://www.linkedin.com/in/deven-hadkar29' },
    { img: gmailLogo, title: 'Email', link: 'mailto:hadkardeven@gmail.com' },
    { img: whatsappLogo, title: 'WhatsApp', link: 'https://wa.me/8850042376' },
    { img: instagramLogo, title: 'Instagram', link: 'https://www.instagram.com/deven.ftw' },

  ]

  return (
    <section className="home-section">
      {/* Typing Effect Styles */}
      <style>
        {`
          @keyframes typing { from { width: 0; } to { width: 100%; } }
          @keyframes blink { 50% { border-color: transparent; } }
        `}
      </style>

      {/* Top Section: Info */}
      <div className="home-top">
        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="home-info"
          style={{ width: '100%', textAlign: 'center' }}
        >
          <h1 className="home-title">
            Hi, I’m{' '}
            <motion.span
              animate={{ backgroundPositionX: ['0%', '200%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              whileHover={{ scale: 1.1, color: 'var(--accent)' }}
              className="home-name"
            >
              Deven Hadkar
            </motion.span>
          </h1>

          {/* Typing Animated Text */}
          <p className="typing-effect">
            Software Engineer | Frontend Developer | Tech Explorer
          </p>

          {/* Profession Tags */}
          <motion.div className="profession-tags">
            {professions.map((role, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05, background: 'linear-gradient(90deg,var(--accent),var(--accent-2))' }} transition={{ type: 'spring', stiffness: 200 }} className="profession-tag">
                {role}
              </motion.div>
            ))}
          </motion.div>

          {/* Info Cards */}
          <motion.div className="info-cards">
            {[
              { label: '📍 Location', value: 'Parel, Mumbai, India' },
              { label: '💼 Expertise', value: 'AI/ML, Problem Solving' },
              { label: '📧 Contact', value: 'hadkardeven@gmail.com' },
            ].map((info, i) => (
              <motion.div key={i} whileHover={{ y: -4, scale: 1.05 }} transition={{ type: 'spring', stiffness: 250 }} className="info-card">
                <strong>{info.label}</strong>
                <p>{info.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Quick Links */}
      <motion.div className="quick-links">
        <h2 className="quick-links-title">Connect with me</h2>
        <div className="quick-links-list">
          {quickLinks.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              title={item.title}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 250 }}
            >
              <motion.img
                src={item.img}
                alt={item.title}
                whileHover={{ filter: 'drop-shadow(0 0 15px var(--accent)) brightness(1.2)' }}
                className="quick-link-img"
              />
            </motion.a>
          ))}
        </div>
      </motion.div>

    </section>
  )
}
