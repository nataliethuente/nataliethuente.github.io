import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'

const navLinks = [
  { path: '/', label: 'About' },
  { path: '/education', label: 'Education' },
  { path: '/experience', label: 'Experience' },
  { path: '/skills', label: 'Skills' },
  { path: '/projects', label: 'Projects' },
  { path: '/activities', label: 'Activities' },
]

export default function Layout() {
  const location = useLocation()

  return (
    <div className="site-wrapper">
      <Navbar expand="lg" className="site-navbar" sticky="top">
        <Container>
          <Navbar.Brand as={NavLink} to="/" className="site-brand">
            NT
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-nav" />
          <Navbar.Collapse id="main-nav">
            <Nav className="ms-auto">
              {navLinks.map(({ path, label }) => (
                <Nav.Link
                  key={path}
                  as={NavLink}
                  to={path}
                  end={path === '/'}
                  className={({ isActive }) => isActive ? 'active' : ''}
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
