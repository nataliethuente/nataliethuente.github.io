import { Container, Row, Col } from 'react-bootstrap'

const educationData = [
  {
    school: 'University of Wisconsin-Madison',
    location: 'Madison, WI',
    degree: 'Bachelor of Science',
    majors: 'Computer Science and Political Science',
    period: 'Anticipated Graduation: May 2026',
    gpa: '3.8',
    coursework: 'Artificial Intelligence and Large Language Models, Algorithms, Machine and Assembly Language Programming, Object Oriented Programming, Calculus I & II, Abstract Data Types, Discrete Mathematics, Database Management Systems, Software Security',
  },
]

export default function Education() {
  return (
    <div className="page-education">
      <section className="page-header">
        <Container>
          <h1 className="page-title">Education</h1>
        </Container>
      </section>
      <section className="content-section">
        <Container>
          <div className="edu-card">
            <div className="edu-header">
              <div>
                <h2>{educationData[0].school}</h2>
                <p className="location">{educationData[0].location}</p>
              </div>
              <div className="grad">{educationData[0].period}</div>
            </div>

            <div className="edu-grid">
              <div className="edu-box">
                <span className="label">Degree</span>
                <p>{educationData[0].degree}</p>
              </div>

              <div className="edu-box">
                <span className="label">Majors</span>
                <p>{educationData[0].majors}</p>
              </div>

              <div className="edu-box">
                <span className="label">GPA</span>
                <p>{educationData[0].gpa}</p>
              </div>
            </div>

            <div className="edu-coursework">
              <span className="label">Relevant Coursework</span>
              <div className="course-list">
                {educationData[0].coursework.split(', ').map((course, index) => (
                  <span key={index} className="course-pill">{course}</span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}