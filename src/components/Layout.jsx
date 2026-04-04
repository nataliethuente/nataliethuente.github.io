import { Outlet, useLocation } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useEffect } from 'react'

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects, Awards & Activities' },
]

export default function Layout() {
  const location = useLocation()

  useEffect(() => {
    // Enable smooth scrolling
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location])

  const handleNavClick = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="site-wrapper">
      <Navbar expand="lg" className="site-navbar" sticky="top">
        <Container>
          <Navbar.Brand 
            href="#about" 
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('about')
            }} 
            className="site-brand"
          >
            NT
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-nav" />
          <Navbar.Collapse id="main-nav">
            <Nav className="ms-auto">
              {navLinks.map(({ id, label }) => (
                <Nav.Link
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(id)
                  }}
                  className="nav-scroll-link"
                >
                  {label}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main className="site-main" key={location.pathname}>
        <Outlet />
      </main>

      <footer className="site-footer">
        <Container>
          <p>&copy; {new Date().getFullYear()} Natalie Thuente. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  )
}
