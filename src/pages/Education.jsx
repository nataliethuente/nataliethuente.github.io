import { Container, Row, Col } from 'react-bootstrap'

const educationData = [
  {
    school: 'University',
    degree: 'Bachelor of Science',
    period: '2022 - 2026',
    description: 'Pursuing studies with a focus on academics, research, and involvement in campus organizations.',
    highlights: ['Dean\'s List', 'Relevant Coursework', 'Academic Honors'],
  },
  {
    school: 'High School',
    degree: 'High School Diploma',
    period: '2018 - 2022',
    description: 'Graduated with honors while participating in extracurricular activities and community service.',
    highlights: ['Honor Roll', 'AP Courses', 'Student Leadership'],
  },
]

export default function Education() {
  return (
    <div className="page-education">
      <section className="page-header">
        <Container>
          <h1 className="page-title">Education</h1>
          <p className="page-subtitle">My academic journey and achievements</p>
        </Container>
      </section>

      <section className="content-section">
        <Container>
          <div className="timeline">
            {educationData.map((item, i) => (
              <div className="timeline-item" key={i}>
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <Row>
                    <Col lg={8}>
                      <span className="timeline-period">{item.period}</span>
                      <h3 className="timeline-title">{item.school}</h3>
                      <h4 className="timeline-subtitle">{item.degree}</h4>
                      <p>{item.description}</p>
                    </Col>
                    <Col lg={4}>
                      <div className="highlights-box">
                        <h5>Highlights</h5>
                        <ul>
                          {item.highlights.map((h, j) => (
                            <li key={j}>{h}</li>
                          ))}
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}
