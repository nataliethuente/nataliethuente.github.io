import { Container, Row, Col } from 'react-bootstrap'

const projectsAndAwards = [
  {
    title: 'RegenMed Capstone',
    category: 'Project',
    date: 'September 2025',
    description: 'Improved patient portal accessibility to increase patient engagement and leverage of healthcare data.',
    tags: ['Healthcare', 'Portal', 'UX'],
  },
  {
    title: 'Virtual Environment Patient Portal',
    category: 'Project',
    date: 'July 2024',
    description: 'Installed and configured patient portal in virtual testing environment at Olympus Corporation, managing setup, testing and configuration to ensure secure access to healthcare data.',
    tags: ['Testing', 'Configuration', 'Security'],
  },
  {
    title: 'Dick and Julie Daly Award',
    category: 'Award',
    date: '2026',
    description: 'Selected for outstanding initiative, professionalism and representation of the School of Education Deans Office.',
    tags: ['Achievement', 'Recognition'],
  },
  {
    title: 'Folds of Honor Scholarship',
    category: 'Award',
    date: '2022-2026',
    description: 'Awarded merit-based scholarship supporting the education of military families for all four years of undergraduate study.',
    tags: ['Scholarship', 'Merit'],
  },
  {
    title: 'Deans List Recognition',
    category: 'Award',
    date: '2022-2026',
    description: 'Recognized for maintaining a high GPA (3.8+) throughout all semesters of undergraduate study.',
    tags: ['Academic Excellence'],
  },
]

export default function Projects() {
  return (
    <div className="page-projects">
      <section className="page-header">
        <Container>
          <h1 className="page-title">Projects & Awards</h1>
          <p className="page-subtitle">Notable work and recognition</p>
        </Container>
      </section>

      <section className="content-section">
        <Container>
          <Row>
            {projectsAndAwards.map((item, i) => (
              <Col md={6} lg={4} className="mb-4" key={i}>
                <div className="project-card">
                  <span className={`project-category ${item.category.toLowerCase()}`}>{item.category}</span>
                  {item.date && <span className="project-date">{item.date}</span>}
                  <h3 className="project-title">{item.title}</h3>
                  <p className="project-desc">{item.description}</p>
                  <div className="project-tags">
                    {item.tags.map((tag, j) => (
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
