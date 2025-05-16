import { Link } from "react-router-dom"
import { useEffect } from "react"

const Navbar = ({ toggleMobileMenu, mobileMenuOpen }) => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar")
      if (window.scrollY > 50) {
        navbar.style.padding = "0.5rem 0"
        navbar.style.boxShadow = "0 5px 15px var(--shadow-color)"
      } else {
        navbar.style.padding = "1rem 0"
        navbar.style.boxShadow = "0 2px 10px var(--shadow-color)"
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          LEO MARQUEZ
        </Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">
            Home
          </Link>
          <Link to="/projects" className="navbar-link">
            Projects
          </Link>
          <Link to="/contact" className="navbar-link">
            Contact
          </Link>
          <Link to="/about" className="navbar-link">
            About
          </Link>
        </div>
        <button id="hamburger" className="hamburger" onClick={toggleMobileMenu}>
          <i className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
