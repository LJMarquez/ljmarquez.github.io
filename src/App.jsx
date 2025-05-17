import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import CodeProjects from "./pages/CodeProjects"
import GraphicDesignProjects from "./pages/GraphicDesignProjects"
import AwardProjects from "./pages/AwardProjects"
import About from "./pages/About"
import Contact from "./pages/Contact"
import LoadingScreen from "./components/LoadingScreen"
import "./App.css"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Preload fonts and critical resources
    const preloadResources = async () => {
      // Simulate resource loading
      await new Promise((resolve) => setTimeout(resolve, 2000))
    }

    preloadResources()
  }, [])

  return (
    <>
      {loading && <LoadingScreen finishLoading={() => setLoading(false)} />}
      <div className={loading ? "app-content hidden" : "app-content visible"}>
        <Router basename={import.meta.env.BASE_URL || "/"}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="projects" element={<Projects />} />
              <Route path="code-projects" element={<CodeProjects />} />
              <Route path="graphic-design-projects" element={<GraphicDesignProjects />} />
              <Route path="award-projects" element={<AwardProjects />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
