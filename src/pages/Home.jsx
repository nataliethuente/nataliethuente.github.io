import About from './About'
import Education from './Education'
import Experience from './Experience'
import Projects from './Projects'
import Activities from './Activities'

export default function Home() {
  return (
    <>
      <section id="about">
        <About />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="activities">
        <Activities />
      </section>
    </>
  )
}
