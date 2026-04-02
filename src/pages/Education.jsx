import { Container, Row, Col } from 'react-bootstrap'

const educationData = [
  {
    school: 'University of Wisconsin-Madison',
    degree: 'Bachelor of Science, Majors: Computer Science and Political Science',
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
        </Container>
      </section>
  <div class="edu-card">
    
    <div class="edu-header">
      <div>
        <h2>University of Wisconsin–Madison</h2>
        <p class="location">Madison, WI</p>
      </div>
      <div class="grad">Anticipated May 2026</div>
    </div>

    <div class="edu-grid">
      <div class="edu-box">
        <span class="label">Degree</span>
        <p>Bachelor of Science</p>
      </div>

      <div class="edu-box">
        <span class="label">Majors</span>
        <p>Computer Science & Political Science</p>
      </div>

      <div class="edu-box">
        <span class="label">GPA</span>
        <p>3.8</p>
      </div>
    </div>

    <div class="edu-coursework">
      <span class="label">Relevant Coursework</span>
      <div class="course-list">
        <span class="course-pill">Artificial Intelligence & LLMs</span>
        <span class="course-pill">Algorithms</span>
        <span class="course-pill">Machine & Assembly Programming</span>
        <span class="course-pill">Object-Oriented Programming</span>
        <span class="course-pill">Calculus I & II</span>
        <span class="course-pill">Abstract Data Types</span>
        <span class="course-pill">Discrete Mathematics</span>
        <span class="course-pill">Database Management Systems</span>
        <span class="course-pill">Software Security</span>
      </div>
    </div>

  </div>
  </div>
  )
}