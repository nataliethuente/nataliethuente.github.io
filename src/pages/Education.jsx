import { Container, Row, Col } from 'react-bootstrap'

const educationData = {
  school: 'University of Wisconsin-Madison',
  location: 'Madison, WI',
  degree: 'Bachelor of Science',
  majors: ['Computer Science', 'Political Science'],
  period: 'May 2026',
  gpa: '3.8',
  coursework: [
    'Artificial Intelligence and Large Language Models',
    'Algorithms',
    'Machine and Assembly Language Programming',
    'Object Oriented Programming',
    'Calculus I & II',
    'Abstract Data Types',
    'Discrete Mathematics',
    'Database Management Systems',
    'Software Security',
  ],
}

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
                <h2>{educationData.school}</h2>
                <p className="location">{educationData.location}</p>
              </div>
              <div className="grad">Anticipated Graduation: {educationData.period}</div>
            </div>

            <div className="edu-main-info">
              <div className="edu-box large">
                <span className="label">Degree</span>
                <p>{educationData.degree}</p>

                <div style={{ marginTop: '1rem' }}>
                  <span className="label">Majors</span>
                  <div className="majors-list" style={{ marginTop: '0.5rem' }}>
                    {educationData.majors.map((major, index) => (
                      <span key={index} className="major-item">{major}</span>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: '1rem' }}>
                  <span className="label">GPA</span>
                  <p>{educationData.gpa}</p>
                </div>
                <div style={{ marginTop: '1rem' }}>
                  <span className="label">Honors</span>
                  <p>Dean's List Recognition (2022–2026)</p>
                </div>
              </div>
            </div>

            <div className="edu-coursework">
              <span className="label">Relevant Coursework</span>
              <div className="course-list">
                {educationData.coursework.map((course, index) => (
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
