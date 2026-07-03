import { useNavigate } from "react-router-dom";
import styles from "./Programs.module.css";

const PROGRAMS = [
  {
    icon: "📚",
    tag: "Ages 5–12",
    title: "Homework Help & Tutoring",
    body: "We provide dedicated after-school homework support to help students stay on track, build study habits, and complete assignments with confidence.",
  },
  {
    icon: "➕",
    tag: "Ages 5–12",
    title: "Mathematics",
    body: "From basic arithmetic to advanced problem-solving, we strengthen each child's math foundation to help them excel in the classroom and on assessments.",
  },
  {
    icon: "📖",
    tag: "Ages 5–12",
    title: "Literacy & Reading",
    body: "Our literacy program builds strong reading comprehension and language skills that give children the tools they need to succeed across all subject areas.",
  },
  {
    icon: "🔬",
    tag: "Ages 6–12",
    title: "Science Exploration",
    body: "Through hands-on activities and guided inquiry, students develop a curiosity for science and build a solid foundation in key scientific concepts.",
  },
  {
    icon: "🧠",
    tag: "Ages 8–12",
    title: "Critical Thinking",
    body: "We challenge students to analyze, reason, and solve problems creatively — skills that strengthen performance across every subject and grade level.",
  },
  {
    icon: "🏆",
    tag: "Ages 8–12",
    title: "Selective Enrollment Prep",
    body: "We prepare students for Chicago Public Schools' competitive Selective Enrollment programs with targeted academic support and test-readiness strategies.",
  },
];

function Programs() {
  const navigate = useNavigate();
  return (
    <section id="programs" className={styles.programs}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className="section-label">Programs &amp; Curriculum</span>
          <h2>Building the Skills That Matter Most</h2>
          <p>
            At our center, we focus on building strong academic foundations in mathematics,
            literacy, reading comprehension, science, and critical thinking. Our programs
            are designed to strengthen the essential skills children need to excel in the
            classroom, on standardized assessments, and in Chicago Public Schools'
            Selective Enrollment programs.
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
          <button onClick={() => navigate("/contact")} className="btn-primary">
            Ask About Enrollment
          </button>
        </div>
      </div>
    </section>
  );
}

export default Programs;