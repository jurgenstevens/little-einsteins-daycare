import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
// Replace hero.png with the actual logo file (src/assets/logo.png) when available
import logo from "../../assets/hero.png";

const NAV_LINKS = [
  { label: "Home",         id: "home" },
  { label: "About",        id: "about" },
  { label: "Mission",      id: "mission" },
  { label: "Programs",     id: "programs" },
  { label: "Staff",        id: "staff" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Contact",      id: "contact" },
];

function Navbar({ activeId, onNavigate }) {
  const [darkMode, setDarkMode]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    document.body.classList.toggle("dark");
    setDarkMode((d) => !d);
  };

  const handleNav = (id) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  return (
    <nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      aria-label="Main navigation"
    >
      <button
        className={styles.brand}
        onClick={() => handleNav("home")}
        aria-label="Go to Home"
      >
        <img src={logo} alt="Little Einstein's After-School Center logo" className={styles.logo} />
        <span className={styles.brandName}>Little Einstein's</span>
      </button>

      {/* Desktop links */}
      <ul className={styles.links} role="list">
        {NAV_LINKS.map((link) => (
          <li key={link.id}>
            <button
              onClick={() => handleNav(link.id)}
              className={`${styles.link} ${activeId === link.id ? styles.linkActive : ""}`}
              aria-current={activeId === link.id ? "page" : undefined}
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>

      <div className={styles.controls}>
        <button
          onClick={toggleTheme}
          className={styles.themeBtn}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        {/* Hamburger — mobile only */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ""}`}
        aria-hidden={!menuOpen}
      >
        <ul role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNav(link.id)}
                className={`${styles.drawerLink} ${activeId === link.id ? styles.drawerLinkActive : ""}`}
                aria-current={activeId === link.id ? "page" : undefined}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {menuOpen && (
        <div
          className={styles.overlay}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </nav>
  );
}

export default Navbar;
