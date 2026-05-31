import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import logo from "../../assets/logo.png";

const NAV_LINKS = [
  { label: "Home",         to: "/" },
  { label: "About",        to: "/about" },
  { label: "Mission",      to: "/mission" },
  { label: "Programs",     to: "/programs" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact",      to: "/contact" },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>

        <div className={styles.brand}>
          <img src={logo} alt="Little Einstein's logo" className={styles.logo} />
          <p className={styles.tagline}>
            Enriching young minds — one curious learner at a time.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h4 className={styles.colTitle}>Quick Links</h4>
          <ul className={styles.linkList}>
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className={styles.footerLink}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.contactCol}>
          <h4 className={styles.colTitle}>Contact</h4>
          <address className={styles.address}>
            <p>1125 W 31st Street</p>
            <p>Chicago, IL 60608</p>
            <p><a href="tel:+17734756004">(773) 475-6004</a></p>
            <p><a href="mailto:littleeinsteinsafterschool@gmail.com">littleeinsteinsafterschool@gmail.com</a></p>
            <p>Mon – Fri: 2:00 PM – 8:00 PM</p>
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