import styles from "./Testimonials.module.css";

const TESTIMONIALS = [
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula sapien a lectus venenatis, at fringilla purus laoreet. Pellentesque habitant morbi tristique.",
    name: "Parent One",
    detail: "Parent of a 3rd Grader",
    rating: 5,
  },
  {
    quote: "Nunc euismod nisl vel ultricies lacinia. Sed euismod nisl vel ultricies lacinia, nisl nisl aliquam nisl. Vestibulum ante ipsum primis in faucibus orci luctus.",
    name: "Parent Two",
    detail: "Parent of a 1st & 4th Grader",
    rating: 5,
  },
  {
    quote: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.",
    name: "Parent Three",
    detail: "Parent of a 2nd Grader",
    rating: 5,
  },
];

const Stars = ({ count }) => (
  <div className={styles.stars} aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i} aria-hidden="true">{i < count ? "★" : "☆"}</span>
    ))}
  </div>
);

function Testimonials() {
  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className="section-label">Testimonials</span>
          <h2>What Parents Are Saying</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula
            sapien a lectus venenatis, at fringilla purus laoreet.
          </p>
        </div>

        <div className={styles.grid}>
          {TESTIMONIALS.map((t) => (
            <blockquote key={t.name} className={styles.card}>
              <Stars count={t.rating} />
              <p className={styles.quote}>"{t.quote}"</p>
              <footer className={styles.author}>
                <div className={styles.authorAvatar} aria-hidden="true">
                  {t.name[0]}
                </div>
                <div>
                  <cite className={styles.name}>{t.name}</cite>
                  <span className={styles.detail}>{t.detail}</span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
