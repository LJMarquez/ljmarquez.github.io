import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import "../styles/AboutSection.css"

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <section className="page-header">
        <div className="container">
          <h1 className="section-title">About Me</h1>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <div className="about-container">
            <motion.div
              className="about-visual"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="skills-sphere">
                <div className="skill-tag html">HTML</div>
                <div className="skill-tag css">CSS</div>
                <div className="skill-tag js">JavaScript</div>
                <div className="skill-tag react">React</div>
                <div className="skill-tag node">Node.js</div>
                <div className="skill-tag design">Design</div>
                <div className="skill-tag ui">UI/UX</div>
                <div className="skill-tag mongo">MongoDB</div>
              </div>
            </motion.div>

            <motion.div
              className="about-content"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p>
                Hey, I'm Leo! I'm a high school student looking for an opportunity to gain experience in the field of
                graphic design, web development, or any other related subjects. At my high school I learn graphic design
                and at West-MEC I learn coding/web development.
              </p>

              <p>
                I have experience working with a client to develop work for them and am ready to use my technical skills
                in a professional setting. I have multiple {" "}
                {/* {" "}
                <Link to="/award-projects" className="about-link">
                  awards
                </Link>
                {" "} */}

                 awards

                 from the CTSO competitions I competed in my junior year of high school.
              </p>

              <p>
                By the end of my junior year I will have an Adobe illustrator certification and an ITS certification in
                HTML5 Application Development. I have hobbies in gaming, collecting figurines and other collectibles,
                and game development!
              </p>

              <div className="mt-4">
                <Link to="/contact" className="hero-cta primary">
                  Let's Get Talking!
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="skills">
        <div className="container">
          <h2 className="section-title">My Skills</h2>

          <motion.div className="skills-container" variants={containerVariants} initial="hidden" animate="visible">
            <motion.div className="skill-category" variants={itemVariants}>
              <h3>
                <i className="fas fa-code"></i> Web Development
              </h3>
              <ul className="skills-list">
                <li>HTML5</li>
                <li>CSS3 & Tailwind</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>Express</li>
              </ul>
            </motion.div>

            <motion.div className="skill-category" variants={itemVariants}>
              <h3>
                <i className="fas fa-paint-brush"></i> Graphic Design
              </h3>
              <ul className="skills-list">
                <li>Adobe Illustrator</li>
                <li>Adobe Photoshop</li>
                <li>Logo Design</li>
                <li>Brand Identity</li>
                <li>Print Design</li>
                <li>Print Layout</li>
                <li>RIP Software</li>
                <li>UI/UX Design</li>
              </ul>
            </motion.div>

            <motion.div className="skill-category" variants={itemVariants}>
              <h3>
                <i className="fas fa-laptop-code"></i> Other Skills
              </h3>
              <ul className="skills-list">
                <li>Problem Solving</li>
                <li>Time Management</li>
                <li>Attention to Detail</li>
                <li>Adaptability</li>
                <li>Team Collaboration</li>
                <li>Project Management</li>
                <li>Client Communication</li>
                <li>Game Development</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default About
