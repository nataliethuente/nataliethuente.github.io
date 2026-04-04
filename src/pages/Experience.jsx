import { Container, Row, Col } from 'react-bootstrap'

const experienceData = [
  {
    title: 'EDGE Patent Engineer Intern',
    company: 'Michael Best & Friedrich',
    location: 'Milwaukee, WI',
    period: 'May 2025 - July 2025',
    type: 'Internship',
    description: 'Analyzed Office Actions, attended Examiner interviews, and drafted assessments and responses accordingly.',
    responsibilities: [
      'Analyzed Office Actions and prepared written responses',
      'Attended Examiner interviews and discussed case strategy',
      'Discussed invention clearance and patentability with clients',
      'Managed concurrent deadlines and delivered high-quality work product',
    ],
  },
  {
    title: 'Business Office Assistant',
    company: 'School of Education, University of Wisconsin',
    location: 'Madison, WI',
    period: 'September 2023 - Present',
    type: 'Part-Time',
    description: 'Provide office administration and technical support to School of Education personnel.',
    responsibilities: [
      'Performed office administration tasks including electronic filing and visitor intake',
      'Answered phone calls and provided customer service',
      'Offered IT and technical support services to office personnel',
      'Maintained organized filing systems and databases',
    ],
  },
  {
    title: 'Software Engineering Intern',
    company: 'Olympus Corporation of the Americas',
    location: 'Brooklyn Park, MN',
    period: 'May 2024 - December 2024',
    type: 'Internship',
    description: 'Analyzed healthcare data and configured patient healthcare portal for testing environment.',
    responsibilities: [
      'Created interactive reports in PowerBI with Healthcare (FHIR) data',
      'Installed and configured patient healthcare portal for testing environment',
      'Researched Data Transferral in EMR Systems and presented findings',
      'Contributed to product development discussions with findings',
    ],
  },
  {
    title: 'Paralegal',
    company: 'Guyton-Thuente P.A.',
    location: 'St. Paul, MN',
    period: 'May 2019 - August 2023',
    type: 'Part-Time',
    description: 'Drafted immigration petition forms and managed legal database systems.',
    responsibilities: [
      'Drafted immigration petition forms and collated filings',
      'Reorganized and managed legal database and online filing systems',
      'Improved accessibility and workflow efficiency',
      'Provided administrative support to attorneys',
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
                  {item.location && <p className="experience-location">{item.location}</p>}
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