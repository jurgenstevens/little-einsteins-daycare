import styles from "./Mission.module.css";

const PILLARS = [
  {
    icon: "🎯",
    title: "Academic Excellence",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula sapien a lectus venenatis fringilla.",
  },
  {
    icon: "🤝",
    title: "Character & Values",
    body: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas integer.",
  },
  {
    icon: "🌱",
    title: "Holistic Growth",
    body: "Nunc euismod nisl vel ultricies lacinia. Sed euismod nisl vel ultricies lacinia nisl aliquam sit amet.",
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula
            sapien a lectus venenatis, at fringilla purus laoreet. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis egestas.
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
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua."
          </p>
          <cite>— Founder, Little Einstein's After-School Center</cite>
        </blockquote>
      </div>
    </section>
  );
}

export default Mission;
