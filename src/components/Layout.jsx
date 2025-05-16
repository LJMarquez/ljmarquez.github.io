import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import MobileMenu from "./MobileMenu"
import Footer from "./Footer"
import { useState } from "react"

const Layout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <>
      <Navbar toggleMobileMenu={toggleMobileMenu} mobileMenuOpen={mobileMenuOpen} />
      <MobileMenu isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
