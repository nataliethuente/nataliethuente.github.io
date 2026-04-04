import { Container, Row, Col } from 'react-bootstrap'

const activities = [
  {
    name: 'Pre-Law Society',
    role: 'Member',
    organization: 'University of Wisconsin-Madison',
    description: 'Developed valuable professional skills through engagement with legal professionals and explored career paths in law and intellectual property.',
    icon: '⚖️',
    image: null, // Add image path here
    link: null, // Add link to organization/group here
  },
  {
    name: 'Code-to-Connect Club',
    role: 'Volunteer',
    description: 'Volunteered time at local schools and taught fundamental Computer Science concepts to students, fostering interest in technology.',
    icon: '💻',
    image: null,
    link: null,
  },
  {
    name: 'River Food Pantry',
    role: 'Volunteer',
    description: 'Volunteered weekly preparing meals and distributing them to local community members in need.',
    icon: '🤝',
    image: null,
    link: null,
  },
  {
    name: 'Distance Running',
    role: 'Athlete',
    description: 'Passionate about long-distance running. Completed the Duluth Marathon in 2024 and committed to athletic pursuits.',
    icon: '🏃',
    image: null,
    link: null,
  },
]

export default function Activities() {
  return (
    <div className="page-activities">
      <section className="page-header">
        <Container>
          <h1 className="page-title">Involvement & Activities</h1>
          <p className="page-subtitle">Community engagement and personal interests</p>
        </Container>
      </section>

      <section className="content-section">
        <Container>
          <Row>
            {activities.map((activity, i) => (
              <Col md={6} lg={4} className="mb-4" key={i}>
                <div className="activity-card">
                  {activity.image ? (
                    <div className="activity-image">
                      <img src={activity.image} alt={activity.name} />
                    </div>
                  ) : (
                    <div className="activity-icon">{activity.icon}</div>
                  )}
                  <div className="activity-content">
                    <h3 className="activity-name">{activity.name}</h3>
                    <span className="activity-role">{activity.role}</span>
                    {activity.organization && (
                      <span className="activity-org">{activity.organization}</span>
                    )}
                    <p className="activity-desc">{activity.description}</p>
                    {activity.link && (
                      <a href={activity.link} target="_blank" rel="noopener noreferrer" className="activity-link">
                        Learn More →
                      </a>
                    )}
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
