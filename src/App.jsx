import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.css";

import Home        from "./sections/Home";
import About       from "./sections/About";
import Mission     from "./sections/Mission";
import Programs    from "./sections/Programs";
import Staff       from "./sections/Staff";
import Testimonials from "./sections/Testimonials";
import Contact     from "./sections/Contact";

const SECTIONS = [
  { id: "home",         label: "Home",         Component: Home },
  { id: "about",        label: "About",         Component: About },
  { id: "mission",      label: "Mission",       Component: Mission },
  { id: "programs",     label: "Programs",      Component: Programs },
  { id: "staff",        label: "Staff",         Component: Staff },
  { id: "testimonials", label: "Testimonials",  Component: Testimonials },
  { id: "contact",      label: "Contact",       Component: Contact },
];

function App() {
  const [activeId, setActiveId] = useState("home");

  const navigate = (id) => {
    setActiveId(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const active = SECTIONS.find((s) => s.id === activeId) ?? SECTIONS[0];
  const { Component } = active;

  return (
    <div className={styles.app}>
      <Navbar activeId={activeId} onNavigate={navigate} />

      <main className={styles.main}>
        <div className={styles.sectionWrap} key={activeId}>
          <Component onNavigate={navigate} />
        </div>
      </main>

      {/* Section pagination dots */}
      <nav className={styles.dotNav} aria-label="Section navigation">
        {SECTIONS.map((s) => (
          <button
            key={s.id}
            onClick={() => navigate(s.id)}
            className={`${styles.dot} ${s.id === activeId ? styles.dotActive : ""}`}
            aria-label={`Go to ${s.label}`}
            aria-current={s.id === activeId ? "true" : undefined}
          />
        ))}
      </nav>

      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;
