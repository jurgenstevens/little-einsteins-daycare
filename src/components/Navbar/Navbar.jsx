import { useState, useEffect } from "react";
import { NavLink }             from "react-router-dom";
import styles from "./Navbar.module.css";
// Replace hero.png with the actual logo file (src/assets/logo.png) when available
import logo from "../../assets/logo.png";

const NAV_LINKS = [
  { label: "Home",         to: "/" },
  { label: "About",        to: "/about" },
  { label: "Mission",      to: "/mission" },
  { label: "Programs",     to: "/programs" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact",      to: "/contact" },
];

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    document.body.classList.toggle("dark");
    setDarkMode((d) => !d);
  };

  const closeMenu = () => setMenuOpen(false);

  /* NavLink className helper — adds .linkActive when route matches */
  const linkClass = ({ isActive }) =>
    `${styles.link} ${isActive ? styles.linkActive : ""}`;

  const drawerLinkClass = ({ isActive }) =>
    `${styles.drawerLink} ${isActive ? styles.drawerLinkActive : ""}`;

  return (
    <nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      aria-label="Main navigation"
    >
      <NavLink to="/" className={styles.brand} onClick={closeMenu}>
        <img src={logo} alt="Little Einstein's After-School Center logo" className={styles.logo} />
        <span className={styles.brandName}>Little Einstein's</span>
      </NavLink>

      {/* Desktop links */}
      <ul className={styles.links} role="list">
        {NAV_LINKS.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              end={link.to === "/"}
              className={linkClass}
            >
              {link.label}
            </NavLink>
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
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={drawerLinkClass}
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {menuOpen && (
        <div
          className={styles.overlay}
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </nav>
  );
}

export default Navbar;
