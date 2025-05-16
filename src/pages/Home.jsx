import Hero from "../components/Hero"
import ProjectCarousel from "../components/ProjectCarousel"
import AboutSection from "../components/AboutSection"
import { projectData } from "../data/projectData"

const Home = () => {
  // Get the first 3 projects for the featured section
//   const featuredProjects = [
//     projectData.find((p) => p.id === "talent-link"),
//     projectData.find((p) => p.id === "edumon"),
//     projectData.find((p) => p.id === "novatech-site"),
//   ].filter(Boolean)
  const featuredProjects = [
    projectData.find((p) => p.id === "talent-link"),
    projectData.find((p) => p.id === "edumon"),
    projectData.find((p) => p.id === "novatech-site"),
  ]
    featuredProjects.filter(Boolean);

  return (
    <>
      <Hero />

      <section className="featured-projects">
        <div className="container">
          <h2 className="section-title">Check Out Some of My Latest Work!</h2>
          <ProjectCarousel />
        </div>
      </section>

      <AboutSection />
    </>
  )
}

export default Home
