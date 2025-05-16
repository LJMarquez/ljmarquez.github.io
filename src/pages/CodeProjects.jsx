import ProjectCard from "../components/ProjectCard"
import { projectData } from "../data/projectData"
import { Link } from "react-router-dom"

const CodeProjects = () => {
  const codingProjects = projectData.filter((project) => project.type === "coding")

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="section-title">Coding Projects</h1>
          <p className="text-center mb-5">
            {/* Here are all of the coding projects I've made over the course of my time at West-MEC! Most of these projects */}
            {/* aren't fully polished but are here to display my knowledge and skills in web development. */}

            I completed West-MEC’s two-year coding program and earned industry-recognized certifications in HTML Application Development and JavaScript. I’ve also received multiple awards in web development and mobile app competitions through FBLA.

            These projects showcase my skills and growth in web development—some are still in progress, but each reflects what I’ve learned along the way.
          </p>
        </div>
      </section>

      <section className="projects">
        <div className="container">
          <div className="projects-grid">
            {codingProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default CodeProjects
