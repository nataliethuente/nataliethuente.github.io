import { Container, Row, Col } from 'react-bootstrap'

const skillCategories = [
  {
    category: 'Technical Skills',
    icon: '&#128187;',
    skills: [
      { name: 'Microsoft Office Suite', level: 90 },
      { name: 'Data Analysis', level: 75 },
      { name: 'Research Methods', level: 85 },
      { name: 'Presentation Design', level: 80 },
    ],
  },
  {
    category: 'Communication',
    icon: '&#128172;',
    skills: [
      { name: 'Public Speaking', level: 85 },
      { name: 'Written Communication', level: 90 },
      { name: 'Team Collaboration', level: 95 },
      { name: 'Active Listening', level: 88 },
    ],
  },
  {
    category: 'Leadership',
    icon: '&#11088;',
    skills: [
      { name: 'Project Management', level: 80 },
      { name: 'Event Planning', level: 85 },
      { name: 'Mentoring', level: 78 },
      { name: 'Strategic Thinking', level: 75 },
    ],
  },
  {
    category: 'Personal',
    icon: '&#127793;',
    skills: [
      { name: 'Time Management', level: 90 },
      { name: 'Adaptability', level: 88 },
      { name: 'Problem Solving', level: 85 },
      { name: 'Creativity', level: 80 },
    ],
  },
]

export default function Skills() {
  return (
    <div className="page-skills">
      <section className="page-header">
        <Container>
          <h1 className="page-title">Skills</h1>
          <p className="page-subtitle">Capabilities and areas of expertise</p>
        </Container>
      </section>

      <section className="content-section">
        <Container>
          <Row>
            {skillCategories.map((cat, i) => (
              <Col md={6} className="mb-4" key={i}>
                <div className="skill-card">
                  <div className="skill-card-header">
                    <span className="skill-icon" dangerouslySetInnerHTML={{ __html: cat.icon }} />
                    <h3>{cat.category}</h3>
                  </div>
                  <div className="skill-list">
                    {cat.skills.map((skill, j) => (
                      <div className="skill-item" key={j}>
                        <div className="skill-info">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-pct">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <div
                            className="skill-fill"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
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
