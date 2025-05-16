import { Link } from "react-router-dom"

const MobileMenu = ({ isOpen, setIsOpen }) => {
  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <div id="mobile-menu" className={`mobile-menu ${isOpen ? "active" : ""}`}>
      <Link to="/" className="mobile-menu-link" onClick={handleLinkClick}>
        Home
      </Link>
      <Link to="/projects" className="mobile-menu-link" onClick={handleLinkClick}>
        Projects
      </Link>
      <Link to="/contact" className="mobile-menu-link" onClick={handleLinkClick}>
        Contact
      </Link>
      <Link to="/about" className="mobile-menu-link" onClick={handleLinkClick}>
        About
      </Link>
    </div>
  )
}

export default MobileMenu
