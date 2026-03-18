import { Container, Row, Col } from 'react-bootstrap'

const experienceData = [
  {
    title: 'Position Title',
    company: 'Company / Organization',
    period: 'Summer 2025',
    type: 'Internship',
    description: 'Contributed to key projects and collaborated with team members to deliver impactful results.',
    responsibilities: [
      'Collaborated with cross-functional teams on key initiatives',
      'Developed and implemented project deliverables',
      'Presented findings and recommendations to stakeholders',
    ],
  },
  {
    title: 'Position Title',
    company: 'Company / Organization',
    period: 'Summer 2024',
    type: 'Internship',
    description: 'Gained valuable hands-on experience in a professional environment.',
    responsibilities: [
      'Assisted with day-to-day operations and project management',
      'Conducted research and analysis to support decision-making',
      'Built strong professional relationships and skills',
    ],
  },
  {
    title: 'Campus Role',
    company: 'University Organization',
    period: '2022 - Present',
    type: 'Leadership',
    description: 'Actively contributed to the campus community through leadership and service.',
    responsibilities: [
      'Led meetings and coordinated events',
      'Mentored new members and facilitated onboarding',
      'Managed organizational communications and outreach',
    ],
  },
]

export default function Experience() {
  return (
    <div className="page-experience">
      <section className="page-header">
        <Container>
          <h1 className="page-title">Experience</h1>
          <p className="page-subtitle">Professional and leadership experience</p>
        </Container>
      </section>

      <section className="content-section">
        <Container>
          {experienceData.map((item, i) => (
            <div className="experience-card" key={i}>
              <Row>
                <Col lg={4}>
                  <span className="experience-type">{item.type}</span>
                  <h3 className="experience-title">{item.title}</h3>
                  <h4 className="experience-company">{item.company}</h4>
                  <span className="experience-period">{item.period}</span>
                </Col>
                <Col lg={8}>
                  <p className="experience-desc">{item.description}</p>
                  <ul className="experience-list">
                    {item.responsibilities.map((r, j) => (
                      <li key={j}>{r}</li>
                    ))}
                  </ul>
                </Col>
              </Row>
            </div>
          ))}
        </Container>
      </section>
    </div>
  )
}