import styles from "./About.module.css";

const STATS = [
  { value: "10+", label: "Years of Excellence" },
  { value: "200+", label: "Students Enrolled" },
  { value: "15+", label: "Dedicated Staff" },
  { value: "98%", label: "Parent Satisfaction" },
];

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>
        <div className={styles.imageSide}>
          <div className={styles.imagePlaceholder} aria-label="About us image coming soon">
            <span>📸 Photo Coming Soon</span>
          </div>
        </div>

        <div className={styles.textSide}>
          <span className="section-label">About Us</span>
          <h2>A Safe Place to Learn, Grow &amp; Belong</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula
            sapien a lectus venenatis, at fringilla purus laoreet. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
          <p>
            Nunc euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec
            aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia,
            nisl nisl aliquam nisl, nec aliquam nisl.
          </p>

          <div className={styles.stats}>
            {STATS.map((s) => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
