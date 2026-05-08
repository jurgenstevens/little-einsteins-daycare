import styles from "./Staff.module.css";

const STAFF = [
  { initials: "ME", name: "Ms. Example One",   title: "Center Director",        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula sapien a lectus venenatis fringilla purus laoreet." },
  { initials: "MJ", name: "Mr. Example Two",   title: "Lead Curriculum Coach",  bio: "Pellentesque habitant morbi tristique senectus et netus. Nunc euismod nisl vel ultricies lacinia aliquam." },
  { initials: "SA", name: "Ms. Example Three", title: "STEM Program Specialist", bio: "Sed euismod nisl vel ultricies lacinia. Aliquam erat volutpat. Nunc condimentum odio ac mi placerat tristique." },
  { initials: "TL", name: "Mr. Example Four",  title: "Arts & Activities Lead",  bio: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque auctor." },
];

function Staff() {
  return (
    <section id="staff" className={styles.staff}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className="section-label">Our Team</span>
          <h2>Meet the People Behind the Magic</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula
            sapien a lectus venenatis, at fringilla purus laoreet.
          </p>
        </div>

        <div className={styles.grid}>
          {STAFF.map((member) => (
            <article key={member.name} className={styles.card}>
              <div className={styles.avatar} aria-hidden="true">
                {member.initials}
              </div>
              <div className={styles.info}>
                <h3>{member.name}</h3>
                <span className={styles.title}>{member.title}</span>
                <p>{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Staff;
