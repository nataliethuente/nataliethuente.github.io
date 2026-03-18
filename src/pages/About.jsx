import { Container, Row, Col } from 'react-bootstrap'

export default function About() {
  return (
    <div className="page-about">
      <section className="hero-section">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col lg={8} className="text-center">
              <div className="hero-avatar">NT</div>
              <h1 className="hero-title">Natalie Thuente</h1>
              <p className="hero-subtitle">
                Welcome to my personal website. I'm passionate about learning, growing, and making an impact through my work and interests.
              </p>
              <div className="hero-links">
                <a href="mailto:contact@example.com" className="btn-pill">Get in Touch</a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="about-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="section-card">
                <h2 className="section-heading">About Me</h2>
                <p>
                  I am a driven and curious individual who thrives on new challenges and experiences.
                  With a strong foundation in academics and a passion for personal growth, I am always
                  looking for opportunities to expand my horizons.
                </p>
                <p>
                  Outside of my professional and academic pursuits, I enjoy staying active, engaging
                  with my community, and exploring creative outlets. I believe in the power of
                  continuous learning and meaningful connections.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center mt-4">
            <Col md={4}>
              <div className="highlight-card">
                <div className="highlight-icon">&#127891;</div>
                <h3>Learner</h3>
                <p>Committed to academic excellence and lifelong learning.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="highlight-card">
                <div className="highlight-icon">&#128640;</div>
                <h3>Leader</h3>
                <p>Passionate about leading initiatives and driving results.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="highlight-card">
                <div className="highlight-icon">&#127758;</div>
                <h3>Explorer</h3>
                <p>Eager to explore new ideas, cultures, and perspectives.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}
