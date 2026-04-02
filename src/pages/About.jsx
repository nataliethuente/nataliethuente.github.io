import { Container, Row, Col } from 'react-bootstrap'
import headshotImage from '../assets/headshot.jpeg'

const contactItems = [
  { label: "Email", value: "nthuente@wisc.edu", link: "mailto:nthuente@wisc.edu" },
  { label: "Phone", value: "(651)-233-0031" },
  { label: "Location", value: "Madison, WI" },
  { label: "LinkedIn", value: "linkedin.com/in/natalie-thuente", link: "https://linkedin.com/in/natalie-thuente" }
];

export default function About() {
  return (
    <div className="page-about">
      <section className="hero-section">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col lg={8} className="text-center">
              <div className="hero-avatar">
                <img src={headshotImage} alt="Natalie Thuente" className="avatar-image" />
              </div>
              <h1 className="hero-title">Natalie Thuente</h1>
              <p className="hero-subtitle">
                Driven Computer Science and Political Science student entering a Patent Engineer role upon graduation in May 2026. 
Interested in Intellectual Property law and applying technical expertise to contribute to patent development.
              </p>
              <div className="hero-links">
                <a href="https://www.linkedin.com/in/natalie-thuente" target="_blank" rel="noopener noreferrer" className="hero-link">
                  Linkedin
                </a>
                 <ul className="contact-list">
                  {contactItems.map((item, index) => (
                    <li key={index}>
                      <strong>{item.label}:</strong>{" "}
                      {item.link ? (
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}