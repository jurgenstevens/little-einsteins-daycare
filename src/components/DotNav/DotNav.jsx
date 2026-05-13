import { NavLink } from "react-router-dom";
import styles from "./DotNav.module.css";

const DOTS = [
  { to: "/",            label: "Home" },
  { to: "/about",       label: "About" },
  { to: "/mission",     label: "Mission" },
  { to: "/programs",    label: "Programs" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact",     label: "Contact" },
];

function DotNav() {
  return (
    <nav className={styles.dotNav} aria-label="Section navigation">
      {DOTS.map((d) => (
        <NavLink
          key={d.to}
          to={d.to}
          end={d.to === "/"}
          aria-label={`Go to ${d.label}`}
          className={({ isActive }) =>
            `${styles.dot} ${isActive ? styles.dotActive : ""}`
          }
        />
      ))}
    </nav>
  );
}

export default DotNav;
