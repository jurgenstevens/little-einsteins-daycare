import styles from "./Testimonials.module.css";

const TESTIMONIALS = [
  {
    quote: "My child has become more confident and independent, and I appreciate the patience and support the staff provides every day.",
    rating: 5,
  },
  {
    quote: "The communication is excellent, the staff is dependable, and I have complete confidence that my child is in great hands every day.",
    rating: 5,
  },
  {
    quote: "From day one, we felt welcomed into a caring, family-oriented environment where our child feels safe and supported.",
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
            Hear directly from the families who trust us with their children every day.
          </p>
        </div>

        <div className={styles.grid}>
          {TESTIMONIALS.map((t, i) => (
            <blockquote key={i} className={styles.card}>
              <Stars count={t.rating} />
              <p className={styles.quote}>"{t.quote}"</p>
              <footer className={styles.author}>
                <span className={styles.detail}>Little Einstein's Parent</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;