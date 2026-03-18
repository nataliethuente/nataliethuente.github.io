import { Container, Row, Col } from 'react-bootstrap'

const projects = [
  {
    title: 'Research Project',
    category: 'Academic',
    description: 'Conducted in-depth research on a topic of interest, resulting in a comprehensive paper and presentation.',
    tags: ['Research', 'Analysis', 'Writing'],
  },
  {
    title: 'Community Initiative',
    category: 'Service',
    description: 'Organized and led a community service initiative that brought together volunteers to make a positive impact.',
    tags: ['Leadership', 'Community', 'Planning'],
  },
  {
    title: 'Creative Portfolio',
    category: 'Personal',
    description: 'Developed a personal portfolio showcasing creative work, design skills, and personal interests.',
    tags: ['Design', 'Creativity', 'Branding'],
  },
  {
    title: 'Team Collaboration Project',
    category: 'Academic',
    description: 'Worked with a team to develop a comprehensive solution to a real-world challenge presented in coursework.',
    tags: ['Teamwork', 'Problem Solving', 'Presentation'],
  },
  {
    title: 'Event Coordination',
    category: 'Leadership',
    description: 'Planned and executed large-scale events, managing logistics, budgets, and volunteer coordination.',
    tags: ['Event Planning', 'Management', 'Organization'],
  },
  {
    title: 'Personal Development Blog',
    category: 'Personal',
    description: 'Created content around personal growth, productivity tips, and reflections on experiences.',
    tags: ['Writing', 'Content', 'Growth'],
  },
]

export default function Projects() {
  return (
    <div className="page-projects">
      <section className="page-header">
        <Container>
          <h1 className="page-title">Projects</h1>
          <p className="page-subtitle">A showcase of meaningful work and initiatives</p>
        </Container>
      </section>

      <section className="content-section">
        <Container>
          <Row>
            {projects.map((project, i) => (
              <Col md={6} lg={4} className="mb-4" key={i}>
                <div className="project-card">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, j) => (
                      <span className="project-tag" key={j}>{tag}</span>
                    ))}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  )
}