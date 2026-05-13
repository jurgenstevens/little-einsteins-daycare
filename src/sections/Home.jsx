import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
// Replace hero.png with the actual logo file (src/assets/logo.png) when available
import logo from "../assets/hero.png";

function Home() {
  const navigate = useNavigate();

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.logoWrap}>
          <img src={logo} alt="Little Einstein's After-School Center" className={styles.heroLogo} />
        </div>

        <div className={styles.content}>
          <span className="section-label">Welcome</span>
          <h1 className={styles.heading}>
            Where Young Minds <span className={styles.accent}>Thrive</span> Every Day
          </h1>
          <p className={styles.sub}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula
            sapien a lectus venenatis, at fringilla purus laoreet. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames.
          </p>
          <div className={styles.ctas}>
            <button onClick={() => navigate("/programs")} className="btn-primary">
              Explore Programs
            </button>
            <button onClick={() => navigate("/contact")} className="btn-outline">
              Enroll Now
            </button>
          </div>
        </div>
      </div>

      <div className={styles.wave} aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="var(--bg-alt)" />
        </svg>
      </div>
    </section>
  );
}

export default Home;
