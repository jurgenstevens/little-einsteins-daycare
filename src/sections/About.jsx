import styles from "./About.module.css";

const STATS = [
  { value: "10+", label: "Years of Excellence" },
  { value: "200+", label: "Students Enrolled" },
];

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>
        <div className={styles.imageSide}>
          <img
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop"
            alt="Children learning together in a bright classroom"
            className={styles.aboutImg}
          />
        </div>

        <div className={styles.textSide}>
          <span className="section-label">About Us</span>
          <h2>A Safe Place to Learn, Grow &amp; Belong</h2>
          <p>
            At our center, we provide a safe, supportive, and engaging environment where
            children can thrive after the school day ends. We believe in creating the
            perfect balance between learning and fun by helping students complete their
            homework while also encouraging creativity, friendship, and personal growth
            through enriching activities.
          </p>
          <p>
            Our dedicated team is committed to giving every child a place where they feel
            valued, supported, and excited to learn and grow each day.
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