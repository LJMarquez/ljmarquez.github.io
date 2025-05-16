const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <p className="footer-text">Leo Marquez</p>
        <div className="social-links">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=marquez.leo100@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <i className="fas fa-envelope"></i>
          </a>
          <a href="tel:6237034686" className="social-link">
            <i className="fas fa-phone"></i>
          </a>
          <a href="https://github.com/LJMarquez" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
