import styles from "./Programs.module.css";

const PROGRAMS = [
  {
    icon: "📚",
    tag: "Ages 5–8",
    title: "Homework Help & Tutoring",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula sapien a lectus venenatis, at fringilla purus laoreet pellentesque.",
  },
  {
    icon: "🔬",
    tag: "Ages 6–12",
    title: "STEM Exploration",
    body: "Pellentesque habitant morbi tristique senectus et netus. Nunc euismod nisl vel ultricies lacinia, nisl nisl aliquam nec aliquam.",
  },
  {
    icon: "🎨",
    tag: "All Ages",
    title: "Arts & Creativity",
    body: "Sed euismod nisl vel ultricies lacinia. Aliquam erat volutpat. Nunc condimentum odio ac mi placerat, in tristique metus faucibus.",
  },
  {
    icon: "⚽",
    tag: "Ages 5–12",
    title: "Sports & Fitness",
    body: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet.",
  },
  {
    icon: "🎭",
    tag: "Ages 7–12",
    title: "Performing Arts",
    body: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo lacinia eget consectetur sed convallis.",
  },
  {
    icon: "🧠",
    tag: "Ages 8–12",
    title: "Critical Thinking",
    body: "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Cras ultricies ligula sed magna dictum porta.",
  },
];

function Programs() {
  return (
    <section id="programs" className={styles.programs}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className="section-label">Programs &amp; Curriculum</span>
          <h2>Enrichment for Every Learner</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula
            sapien a lectus venenatis, at fringilla purus laoreet.
          </p>
        </div>

        <div className={styles.grid}>
          {PROGRAMS.map((p) => (
            <article key={p.title} className={styles.card}>
              <span className={styles.cardIcon} aria-hidden="true">{p.icon}</span>
              <span className={styles.tag}>{p.tag}</span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </article>
          ))}
        </div>

        <div className={styles.cta}>
          <a href="#contact" className="btn-primary">Ask About Enrollment</a>
        </div>
      </div>
    </section>
  );
}

export default Programs;
