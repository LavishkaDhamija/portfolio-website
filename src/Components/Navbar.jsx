import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <nav>
      <div className="left">
        <Link to="/">Lavishka's Portfolio</Link>
      </div>

      <div className="right">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          About
        </Link>
        <Link to="/skills" className={location.pathname === '/skills' ? 'active' : ''}>
          Skills
        </Link>
        <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>
          Projects
        </Link>
        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
          Contact
        </Link>
        <Link to="/resume" className={location.pathname === '/resume' ? 'active' : ''}>
          Resume
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;