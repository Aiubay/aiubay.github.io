import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="cyber-nav">
      <div className="brand">DevBay</div>
      <div className="nav-center">
        <a href="#" className="np active">Home</a>
        <a href="#projects" className="np">Work</a>
        <a href="#experience" className="np">About</a>
        <a href="#contact" className="np">Contact</a>
      </div>
      <div className="nav-right">
        <ThemeToggle />
        <div className="avail-pill"><span className="avail-dot" />Open to work</div>
        <a className="btn-nav" href="/Assets/resume.pdf" target="_blank" rel="noopener noreferrer">Resume ↗</a>
      </div>
    </nav>
  );
}
