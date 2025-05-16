import ProjectCard from "../components/ProjectCard"
import { projectData } from "../data/projectData"

const AwardProjects = () => {
  const fblaProjects = projectData.filter((project) => project.awards && project.type === "coding")

  const skillsUSAProjects = projectData.filter((project) => project.awards && project.type === "graphic design")

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="section-title">Award Winning Projects</h1>
          <p className="text-center mb-5">
            Here are all of the projects that have won me awards at all of the CTSO competitions I have competed in! I
            started going to these competitions in 2024 and I partook in the Advertising Design competition for
            SkillsUSA and the Website Coding and Development competition for FBLA (Future Business Leaders of America).
            For SkillsUSA I placed first for the regional competition, first for the state competition, and will be
            going to the national competition in Atlanta Georgia this summer! For FBLA I placed first in the regional
            competition, third for the state competition, qualified to go to the national competition but unfortunately
            won't be attending it due to scheduling conflicts. Below you'll find the work I produced for these
            competitions!
          </p>
        </div>
      </section>

      <div className="ctso-container">
        <h1>FBLA Projects</h1>
        <div className="projects-grid">
          {fblaProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <div className="ctso-container">
        <h1>SkillsUSA Projects</h1>
        <div className="projects-grid">
          {skillsUSAProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </>
  )
}

export default AwardProjects
