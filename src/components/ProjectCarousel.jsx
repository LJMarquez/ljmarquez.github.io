import { useState } from "react"
import { projectData } from "../data/projectData"

const ProjectCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const featuredProjects = projectData.filter((project) => project.id === "talent-link" || project.id === "edumon")

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProjects.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length)
  }

  return (
    <div className="carousel">
      <div className="carousel-container">
        {featuredProjects.map((project, index) => (
          <div
            key={project.id}
            className={`carousel-slide ${index === currentSlide ? "active" : ""}`}
            onClick={() => window.open(project.projectLink, "_blank")}
          >
            <div className="carousel-header">
              <h2 className="carousel-title">{project.title}</h2>
              <div className="carousel-controls">
                <span
                  className="carousel-control red"
                  onClick={(e) => {
                    e.stopPropagation()
                    prevSlide()
                  }}
                >
                  <i className="fas fa-times"></i>
                </span>
                <span className="carousel-control yellow"></span>
                <span
                  className="carousel-control green"
                  onClick={(e) => {
                    e.stopPropagation()
                    window.open(project.projectLink, "_blank")
                  }}
                >
                  <i className="fas fa-plus"></i>
                </span>
              </div>
            </div>
            <div className="carousel-image-wrapper">
              <img
                className="carousel-image"
                src={`/assets/${project.type === "coding" ? "project-covers" : `graphic-design-projects/${project.id}`}/${project.coverImg}`}
                alt={project.title}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-arrows">
        <div className="carousel-arrow prev" onClick={prevSlide}>
          <i className="fas fa-chevron-left"></i>
        </div>
        <div className="carousel-arrow next" onClick={nextSlide}>
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
    </div>
  )
}

export default ProjectCarousel
