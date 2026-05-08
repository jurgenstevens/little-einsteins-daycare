import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
// Replace hero.png with the actual logo file (src/assets/logo.png) when available
import logo from "../../assets/hero.png";

const NAV_LINKS = [
  { label: "Home",         href: "#home" },
  { label: "About",        href: "#about" },
  { label: "Mission",      href: "#mission" },
  { label: "Programs",     href: "#programs" },
  { label: "Staff",        href: "#staff" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact",      href: "#contact" },
];

function Navbar() {
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

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      aria-label="Main navigation"
    >
      <a href="#home" className={styles.brand} onClick={closeMenu}>
        <img src={logo} alt="Little Einstein's After-School Center logo" className={styles.logo} />
        <span className={styles.brandName}>Little Einstein's</span>
      </a>

      {/* Desktop links */}
      <ul className={styles.links} role="list">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href} className={styles.link}>
              {link.label}
            </a>
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
            <li key={link.href}>
              <a href={link.href} className={styles.drawerLink} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
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
