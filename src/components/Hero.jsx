import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import "../styles/Hero.css"

const Hero = () => {
  const personalitiesSpanRef = useRef(null)
  const heroRef = useRef(null)

  useEffect(() => {
    const personalitiesArray = ["Developer", "Designer", "Creator", "Programmer", "Learner"]
    let personalityIndex = 0
    let charIndex = 0

    const typePersonality = () => {
      const typingInterval = setInterval(() => {
        const currentText = personalitiesArray[personalityIndex]
        personalitiesSpanRef.current.textContent += currentText[charIndex]
        charIndex++

        if (charIndex === currentText.length) {
          clearInterval(typingInterval)
          charIndex = 0

          setTimeout(() => {
            deletePersonality()
          }, 1500)
        }
      }, 100)
    }

    const deletePersonality = () => {
      const deletingInterval = setInterval(() => {
        const text = personalitiesSpanRef.current.textContent
        personalitiesSpanRef.current.textContent = text.slice(0, -1)

        if (personalitiesSpanRef.current.textContent.length === 0) {
          clearInterval(deletingInterval)
          personalityIndex = (personalityIndex + 1) % personalitiesArray.length
          setTimeout(() => {
            typePersonality()
          }, 500)
        }
      }, 50)
    }

    setTimeout(() => {
      typePersonality()
    }, 2000)

    // Mouse move effect for the hero background
    const handleMouseMove = (e) => {
      if (!heroRef.current) return

      const { clientX, clientY } = e
      const { width, height, left, top } = heroRef.current.getBoundingClientRect()

      const x = (clientX - left) / width
      const y = (clientY - top) / height

      const shapes = heroRef.current.querySelectorAll(".shape")
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
    <section className="hero" ref={heroRef}>
      <div className="hero-background">
        <div className="shape shape-1" data-speed="2"></div>
        <div className="shape shape-2" data-speed="3"></div>
        <div className="shape shape-3" data-speed="1.5"></div>
        <div className="shape shape-4" data-speed="2.5"></div>
      </div>
      <div className="container hero-content">
        <motion.div
          className="hero-text-centered"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title-fancy">Hi! I'm Leo</h1>
          <div className="typing-container">
            <p className="hero-subtitle">and I'm a</p>
            <div className="personalities-wrapper">
              <span id="personalities-span" ref={personalitiesSpanRef} className="personalities-fancy"></span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="code-container">
              <pre className="code-block">
                <code>
                  <span className="code-keyword">const</span> <span className="code-variable">leo</span> = {"{"}
                  <br />
                  {"  "}
                  <span className="code-property">skills</span>: [<span className="code-string">'Web Dev'</span>,{" "}
                  <span className="code-string">'Design'</span>, <span className="code-string">'UI/UX'</span>],
                  <br />
                  {"  "}
                  <span className="code-property">passion</span>:{" "}
                  <span className="code-string">'Creating amazing experiences'</span>,
                  <br />
                  {"  "}
                  <span className="code-property">status</span>:{" "}
                  <span className="code-string">'Ready to collaborate!'</span>,
                  <br />
                  {"  "}
                  <span className="code-method">connect</span>() {"{"}
                  <br />
                  {"    "}
                  <span className="code-keyword">return</span>{" "}
                  <span className="code-string">'Let\'s build something great!'</span>
                  <br />
                  {"  "}
                  {"}"}
                  <br />
                  {"}"};
                </code>
              </pre>
              <div className="code-reflection"></div>
            </div>
          </div>

          <div className="hero-cta-container">
            <Link to="/contact" className="hero-cta primary">
              Let's Get Talking!
            </Link>
            <Link to="/about" className="hero-cta secondary">
              Learn More About Me
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
