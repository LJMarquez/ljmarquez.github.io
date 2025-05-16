import { useNavigate } from "react-router-dom"
import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import "../styles/Projects.css"

const Projects = () => {
  const navigate = useNavigate()
  const projectsRef = useRef(null)

  const handleProjectTypeClick = (type) => {
    if (type === "code") {
      navigate("/code-projects")
    } else if (type === "design") {
      navigate("/graphic-design-projects")
    }
  }

  useEffect(() => {
    // Mouse move effect for the projects background
    const handleMouseMove = (e) => {
      if (!projectsRef.current) return

      const { clientX, clientY } = e
      const { width, height, left, top } = projectsRef.current.getBoundingClientRect()

      const x = (clientX - left) / width
      const y = (clientY - top) / height

      const shapes = projectsRef.current.querySelectorAll(".projects-shape")
      shapes.forEach((shape) => {
        const speed = shape.dataset.speed || 1
        const xOffset = (x - 0.5) * 50 * speed
        const yOffset = (y - 0.5) * 50 * speed
        shape.style.transform = `translate(${xOffset}px, ${yOffset}px)`
      })
    }

    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="projects-page"
      ref={projectsRef}
    >
      <div className="projects-background">
        <div className="projects-shape shape-1" data-speed="2"></div>
        <div className="projects-shape shape-2" data-speed="3"></div>
        <div className="projects-shape shape-3" data-speed="1.5"></div>
        <div className="projects-shape shape-4" data-speed="2.5"></div>
        <div className="projects-shape shape-5" data-speed="2"></div>
      </div>

      <section className="page-header">
        <div className="container">
          <motion.h1
            className="section-title glowing-text"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Projects
          </motion.h1>
          <motion.p
            className="text-center mb-5 subtitle-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Explore my work in web development and graphic design
          </motion.p>
        </div>
      </section>

      <section className="project-types-section">
        <div className="container">
          <div className="project-types">
            <motion.div
              className="project-type"
              onClick={() => handleProjectTypeClick("code")}
              whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0,0,200,0.4)" }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1, delay: 0.4 }}
            >
              <div className="project-type-icon">
                <i className="fas fa-code"></i>
              </div>
              <h3 className="fancy-title">Coding Projects</h3>
              <p>Web development projects built with HTML, CSS, JavaScript and more</p>
            </motion.div>

            <motion.div
              className="project-type"
              onClick={() => handleProjectTypeClick("design")}
              whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0,0,200,0.4)" }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1, delay: 0.4 }}
            >
              <div className="project-type-icon">
                <i className="fas fa-bezier-curve"></i>
              </div>
              <h3 className="fancy-title">Graphic Design Projects</h3>
              <p>Logos, flyers, brochures, and other design work</p>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Projects
