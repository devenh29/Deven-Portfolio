import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section className="container" style={{ padding: "60px 0" }}>
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: "#0b0b0b",
          borderRadius: 16,
          padding: "40px 30px",
          color: "#e5e5e5",
          boxShadow: "0 0 25px rgba(0, 153, 255, 0.1)",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: 28, color: "#00b4ff", marginBottom: 12 }}
        >
          📄 Resume
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ color: "#aaa", marginBottom: 25 }}
        >
          A quick glance at my journey.
        </motion.p>

        {/* Section 1: Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            background: "rgba(255,255,255,0.03)",
            padding: "24px 20px",
            borderRadius: 12,
          }}
        >
          <div>
            <h3 style={{ fontSize: 24, color: "#00b4ff", marginBottom: 4 }}>
              👨‍💻 DEVEN HADKAR
            </h3>
            <p style={{ marginTop: 10, fontSize: 15, color: "#ccc" }}>
              3rd Year B.Tech — Information Technology | Vidyalankar Institute of Technology
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              📍 Mumbai, Maharashtra
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              ✉️ hadkardeven@gmail.com | 📞 8850042376
            </p>
          </div>
        </motion.div>

        {/* Section 2: Professional Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{
            marginTop: 30,
            background: "linear-gradient(135deg, #00b4ff22, #0b0b0b)",
            borderRadius: 16,
            padding: "24px 28px",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "0 4px 15px rgba(0,180,255,0.1)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 16, fontWeight: 600 }}>
            📋 Professional Summary
          </h4>
          <div style={{ display: "grid", gap: 12 }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
              <span style={{ color: "#00b4ff", fontSize: 16 }}>•</span>
              <p style={{ margin: 0, color: "#ddd", lineHeight: 1.6 }}>
                <strong>Full-stack Developer & IT Engineering Student</strong> with expertise in object-oriented programming, data structures, and database management.
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
              <span style={{ color: "#00b4ff", fontSize: 16 }}>•</span>
              <p style={{ margin: 0, color: "#ddd", lineHeight: 1.6 }}>
                Experienced in building impactful web applications using <strong>React, JavaScript, Python, Java, and Supabase</strong>.
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
              <span style={{ color: "#00b4ff", fontSize: 16 }}>•</span>
              <p style={{ margin: 0, color: "#ddd", lineHeight: 1.6 }}>
                Hands-on with developing secure, scalable systems including university management platforms, AI-integrated health applications, and sustainability-focused dashboards.
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
              <span style={{ color: "#00b4ff", fontSize: 16 }}>•</span>
              <p style={{ margin: 0, color: "#ddd", lineHeight: 1.6 }}>
                Proactive, detail-oriented, and passionate about using technology to solve real-world problems. Seeking opportunities to contribute to innovative projects and grow as a developer in dynamic tech environments.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Section 3: Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: 40,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
            🎓 Education
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>
              <strong>Bachelor of Engineering (Information Technology)</strong> — Vidyalankar Institute of Technology, Mumbai <br />
              <span style={{ color: "#aaa" }}>2023 – Present</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>Higher Secondary Certificate (HSC) – Computer Science</strong> — Maharshi Dayanand College <br />
              <span style={{ color: "#aaa" }}>2021</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>Secondary School Certificate (SSC)</strong> — St. Paul High School <br />
              <span style={{ color: "#aaa" }}>2019</span>
            </li>
          </ul>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>💼 Projects</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>1️⃣ University Management System — React, Vite, JavaScript, Supabase</li>
            <li>2️⃣ Clarity – Early Alzheimer Detection System — React, Tailwind, Supabase</li>
            <li>3️⃣ Connect-E Impact — React, Tailwind CSS</li>
          </ul>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 16 }}>⚙️ Skills</h4>

          {/* Programming Languages */}
          <div style={{ marginBottom: 20 }}>
            <h5 style={{ fontSize: 16, color: "#00b4ff", marginBottom: 8, fontWeight: 500 }}>Programming Languages</h5>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["Python", "C", "C++", "Java", "NumPy", "Pandas", "Scikit-learn"].map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(0,180,255,0.3)" }}
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    padding: "6px 12px",
                    borderRadius: 8,
                    fontSize: 13,
                    color: "#ccc",
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Frameworks & Libraries */}
          <div style={{ marginBottom: 20 }}>
            <h5 style={{ fontSize: 16, color: "#00b4ff", marginBottom: 8, fontWeight: 500 }}>Frameworks & Libraries</h5>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["NumPy", "Pandas", "Scikit-learn", "TensorFlow", "PyTorch", "OpenCV", "Streamlit", "React"].map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(0,180,255,0.3)" }}
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    padding: "6px 12px",
                    borderRadius: 8,
                    fontSize: 13,
                    color: "#ccc",
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Databases & Tools */}
          <div style={{ marginBottom: 20 }}>
            <h5 style={{ fontSize: 16, color: "#00b4ff", marginBottom: 8, fontWeight: 500 }}>Databases & Tools</h5>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["MySQL", "MongoDB", "Git"].map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(0,180,255,0.3)" }}
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    padding: "6px 12px",
                    borderRadius: 8,
                    fontSize: 13,
                    color: "#ccc",
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Other Skills */}
          <div>
            <h5 style={{ fontSize: 16, color: "#00b4ff", marginBottom: 8, fontWeight: 500 }}>Other Skills</h5>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["NLP", "Problem Solving", "Teamwork", "Adaptability", "Creativity"].map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(0,180,255,0.3)" }}
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    padding: "6px 12px",
                    borderRadius: 8,
                    fontSize: 13,
                    color: "#ccc",
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 30,
            marginTop: 40,
          }}
        >
          {[
            { name: "🏆 LeetCode", link: "https://leetcode.com/u/deven_hadkar/" },
            { name: "💻 GitHub", link: "https://github.com/devenh29" },
            { name: "💼 LinkedIn", link: "https://www.linkedin.com/in/deven-hadkar29" },
          ].map((site) => (
            <motion.a
              key={site.name}
              href={site.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, color: "#00b4ff" }}
              style={{
                color: "#ccc",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              {site.name}
            </motion.a>
          ))}
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            marginTop: 50,
            borderRadius: 12,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <iframe
            src="/resume.pdf"
            title="Deven Hadkar Resume"
            style={{
              width: "100%",
              height: "650px",
              border: "none",
              background: "#111",
            }}
          />
        </motion.div>

        {/* Download Button */}
        <motion.a
          href="/resume.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: "inline-block",
            marginTop: 20,
            background: "#00b4ff",
            color: "#fff",
            padding: "10px 22px",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: 500,
            letterSpacing: 0.3,
          }}
        >
          ⬇️ Download Resume
        </motion.a>


      </motion.div>
    </section>
  );
}
