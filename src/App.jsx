import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"
import styles from "./App.module.css";

import Home from "./sections/Home";
import About from "./sections/About";
import Programs from "./sections/Programs";
import Testimonials from "./sections/Testimonials";
import Enroll from "./sections/Enroll";

function App() {
  return (
    <div className={styles.app}>
      <Navbar />

      <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="programs"><Programs /></section>
        <section id="testimonials"><Testimonials /></section>
        <section id="enroll"><Enroll /></section>
      </main>
      
      {/* <Footer /> */}
    </div>
  );
}

export default App;