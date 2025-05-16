import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import "../styles/AboutSection.css";

const AboutSection = () => {
  return (
    <section className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-container">
          <motion.div
            className="about-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
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
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2>
              I'm Leo, a<span style={{ fontFamily: "'FiraCode', monospace" }}> web developer</span> and a{" "}
              <span style={{ fontFamily: "'Dunley'", fontSize: "2.5rem" }}>graphic designer!</span>
            </h2>
            <p>
              I'm a high school student looking for an opportunity to gain experience in the field of graphic design,
              web development, or any other related subjects. At my high school I learn graphic design and at West-MEC I
              learn coding/web development.
            </p>
            <p>
              I have experience working with a client to develop work for them and am ready to use my technical skills
              in a professional setting. I have multiple awards from the CTSO competitions I competed in my junior year
              of high school.
            </p>
            <div className="mt-4 cta-container">
            {/* <div> */}
              <Link to="/contact" className="hero-cta primary">
                Let's Get Talking!
              </Link>
              <Link to="/about" className="hero-cta secondary">
                Learn More About Me!
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
