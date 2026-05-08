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

function App() {
  return (
    <div className={styles.app}>
      <Navbar />

      <main className={styles.main}>
        <Home />
        <About />
        <Mission />
        <Programs />
        <Staff />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
