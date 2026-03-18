import { Container, Row, Col } from 'react-bootstrap'

const activities = [
  {
    name: 'Student Organization',
    role: 'Member / Officer',
    period: '2022 - Present',
    description: 'Actively involved in campus life, contributing to events, discussions, and organizational growth.',
    icon: '&#127979;',
  },
  {
    name: 'Volunteer Work',
    role: 'Volunteer',
    period: '2020 - Present',
    description: 'Dedicated time to community service projects, supporting local organizations and initiatives.',
    icon: '&#129309;',
  },
  {
    name: 'Athletics / Fitness',
    role: 'Participant',
    period: 'Ongoing',
    description: 'Committed to maintaining an active lifestyle through sports, fitness, and outdoor activities.',
    icon: '&#127939;',
  },
  {
    name: 'Creative Pursuits',
    role: 'Hobbyist',
    period: 'Ongoing',
    description: 'Exploring creative outlets including art, music, writing, or other personal interests.',
    icon: '&#127912;',
  },
  {
    name: 'Professional Development',
    role: 'Attendee / Member',
    period: '2023 - Present',
    description: 'Participating in workshops, conferences, and networking events to grow professionally.',
    icon: '&#128218;',
  },
  {
    name: 'Travel & Cultural Exploration',
    role: 'Explorer',
    period: 'Ongoing',
    description: 'Exploring new places and cultures, broadening perspectives and building global awareness.',
    icon: '&#9992;&#65039;',
  },
]

export default function Activities() {
  return (
    <div className="page-activities">
      <section className="page-header">
        <Container>
          <h1 className="page-title">Activities</h1>
          <p className="page-subtitle">Interests, involvement, and extracurricular pursuits</p>
        </Container>
      </section>

      <section className="content-section">
        <Container>
          <Row>
            {activities.map((activity, i) => (
              <Col md={6} lg={4} className="mb-4" key={i}>
                <div className="activity-card">
                  <div className="activity-icon" dangerouslySetInnerHTML={{ __html: activity.icon }} />
                  <h3 className="activity-name">{activity.name}</h3>
                  <span className="activity-role">{activity.role}</span>
                  <span className="activity-period">{activity.period}</span>
                  <p className="activity-desc">{activity.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  )
}
