import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Left: Brand */}
        <div className={styles.brand}>
          <h2>Little Einsteins</h2>
          <p>After School Center</p>
        </div>

        {/* Middle: Navigation */}
        <div className={styles.links}>
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#programs">Programs</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#enroll">Enroll</a>
        </div>

        {/* Right: Contact */}
        <div className={styles.contact}>
          <h3>Contact</h3>
          <p>123 Learning Lane</p>
          <p>Chicago, IL</p>
          <p>(123) 456-7890</p>
          <p>info@littleeinsteins.com</p>
        </div>

      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <p>
          © {new Date().getFullYear()} Little Einsteins After School Center. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;