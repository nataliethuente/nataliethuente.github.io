import { Outlet } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useEffect, useState } from 'react'

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'activities', label: 'Activities' },
]

export default function Layout() {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    // Add scroll listener to update active nav item
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(id)
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
                  className={`nav-scroll-link ${activeSection === id ? 'active' : ''}`}
                >
                  {label}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main className="site-main">
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