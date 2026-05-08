import styles from "./Footer.module.css";
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

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        {/* Brand */}
        <div className={styles.brand}>
          <img src={logo} alt="Little Einstein's logo" className={styles.logo} />
          <p className={styles.tagline}>
            Enriching young minds — one curious learner at a time.
          </p>
        </div>

        {/* Quick links */}
        <nav aria-label="Footer navigation">
          <h4 className={styles.colTitle}>Quick Links</h4>
          <ul className={styles.linkList}>
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={styles.footerLink}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div className={styles.contactCol}>
          <h4 className={styles.colTitle}>Contact</h4>
          <address className={styles.address}>
            <p>123 Learning Lane</p>
            <p>Chicago, IL 60601</p>
            <p><a href="tel:+11234567890">(123) 456-7890</a></p>
            <p><a href="mailto:info@littleeinsteins.com">info@littleeinsteins.com</a></p>
            <p>Mon – Fri: 3:00 PM – 7:00 PM</p>
          </address>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Little Einstein's After-School Center. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
