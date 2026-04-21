import styles from "./Navbar.module.css";
import { useState } from "react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    document.body.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        Little Einsteins After School Center
      </div>

      <div className={styles.links}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#programs">Programs & Curriculum</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#enroll">Enroll Now</a>

        <button onClick={toggleTheme} className={styles.toggle}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;