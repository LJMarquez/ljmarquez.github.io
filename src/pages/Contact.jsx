import ContactForm from "../components/ContactForm"
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="page-header">
        <div className="container">
          <h1 className="section-title">Let's Get Talking!</h1>
        </div>
      </section>

      <section className="contact">
        <div className="container">
          <div className="contact-container">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <div className="contact-methods">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=marquez.leo100@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-method"
                >
                  <div className="contact-method-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-method-content">
                    <h3>Email</h3>
                    <p>marquez.leo100@gmail.com</p>
                  </div>
                </a>

                <div className="contact-method">
                  <div className="contact-method-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="contact-method-content">
                    <h3>Phone</h3>
                    <p>623-703-4686</p>
                  </div>
                </div>

                <a
                  href="https://github.com/LJMarquez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-method"
                >
                  <div className="contact-method-icon">
                    <i className="fab fa-github"></i>
                  </div>
                  <div className="contact-method-content">
                    <h3>GitHub</h3>
                    <p>LJMarquez</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/leo-marquez-960598296/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-method"
                >
                  <div className="contact-method-icon">
                    <i className="fab fa-linkedin"></i>
                  </div>
                  <div className="contact-method-content">
                    <h3>LinkedIn</h3>
                    <p>Leo Marquez</p>
                  </div>
                </a>

              </div>
            </div>


            <div>
              <h2 style={{ marginBottom: "2rem" }}>Leave A Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Contact
