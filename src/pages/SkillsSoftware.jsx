import { Container, Row, Col } from 'react-bootstrap'

const skillsData = [
  {
    category: 'Programming Languages',
    items: ['Java', 'Python', 'C', 'C++', 'R', 'SQL'],
  },
  {
    category: 'Developer Tools',
    items: ['GitHub', 'Postman', 'RStudio', 'PowerBI'],
  },
  {
    category: 'Web & Frontend Development',
    items: ['JavaScript', 'HTML/CSS', 'React.js'],
  },
  {
    category: 'Technical Frameworks',
    items: ['FHIR', 'HL7', 'OpenEMR', 'DICOM'],
  },
]

export default function SkillsSoftware() {
  return (
    <div className="page-skills">
      <section className="page-header">
        <Container>
          <h1 className="page-title">Skills & Software</h1>
        
        </Container>
      </section>

      <section className="content-section">
        <Container>
          <Row>
            {skillsData.map((skillGroup, i) => (
              <Col lg={6} className="mb-5" key={i}>
                <div className="skills-group">
                  <h3 className="skills-category-title">{skillGroup.category}</h3>
                  <div className="skills-items">
                    {skillGroup.items.map((skill, j) => (
                      <span key={j} className="skill-badge">{skill}</span>
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
