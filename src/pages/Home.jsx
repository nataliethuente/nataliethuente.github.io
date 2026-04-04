import About from './About'
import Education from './Education'
import SkillsSoftware from './SkillsSoftware'
import Experience from './Experience'
import Projects from './Projects'

export default function Home() {
  return (
    <>
      <section id="about">
        <About />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="skills">
        <SkillsSoftware />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </>
  )
}
