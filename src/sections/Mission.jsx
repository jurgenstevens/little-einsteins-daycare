import styles from "./Mission.module.css";

const PILLARS = [
  {
    icon: "🎯",
    title: "Academic Excellence",
    body: "We provide homework assistance and focused instruction in mathematics, literacy, reading comprehension, science, and critical thinking to help every student excel in the classroom and beyond.",
  },
  {
    icon: "🤝",
    title: "Community & Belonging",
    body: "Proudly serving families from schools across the Chicagoland area, we create a warm, family-oriented environment where children form meaningful friendships and feel truly valued.",
  },
  {
    icon: "🌱",
    title: "Confidence & Growth",
    body: "We give every child the encouragement and personalized support they need to develop confidence, unlock their potential, and build skills that last a lifetime.",
  },
];

function Mission() {
  return (
    <section id="mission" className={styles.mission}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className="section-label">Our Mission</span>
          <h2>Inspiring the Next Generation of Thinkers</h2>
          <p className={styles.lead}>
            Our mission is to provide children ages 5–12 with a safe, nurturing, and
            enriching after-school environment where they can learn, grow, and thrive.
            Proudly serving families from schools across the Chicagoland area, we are
            committed to supporting academic success through homework assistance while
            fostering confidence, creativity, and meaningful friendships through
            engaging activities.
          </p>
        </div>

        <div className={styles.pillars}>
          {PILLARS.map((p) => (
            <div key={p.title} className={styles.pillar}>
              <span className={styles.icon} aria-hidden="true">{p.icon}</span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>

        <blockquote className={styles.quote}>
          <p>
            "We strive to create the perfect balance between education and fun, giving
            every child a place where they feel encouraged, valued, and inspired to
            reach their full potential."
          </p>
          <cite>— Little Einstein's After-School Center</cite>
        </blockquote>
      </div>
    </section>
  );
}

export default Mission;