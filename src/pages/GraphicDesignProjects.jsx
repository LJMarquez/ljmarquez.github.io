import ProjectCard from "../components/ProjectCard"
import { projectData } from "../data/projectData"

const GraphicDesignProjects = () => {
  const designProjects = projectData.filter((project) => project.type === "graphic design")

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="section-title">Graphic Design Projects</h1>
          <p className="text-center mb-5">
            {/* Here are all of the graphic design projects I've made over the course of my time at Verrado High School, in SkillsUSA, along with some freelancing work I've done! I develop my logos using Adobe Illustrator. */}
            I’ve earned a national medal in Advertising Design at SkillsUSA, along with two state and two regional gold medals. My senior year, I interned with the Agua Fria High School District and at ViperINK, my school’s student-run design studio. There, I used a Roland wide-format printer, RIP software, and produced t-shirts, stickers, posters, and banners.

            Most of my logos are created in Adobe Illustrator. This portfolio includes work from school, SkillsUSA, internships, and freelance projects.
          </p>
        </div>
      </section>

      <section className="projects">
        <div className="container">
          <div className="projects-grid">
            {designProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default GraphicDesignProjects
