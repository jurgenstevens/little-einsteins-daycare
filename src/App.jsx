import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useSwipeNavigation } from "./hooks/useSwipeNavigation";

import Navbar       from "./components/Navbar/Navbar";
import Footer       from "./components/Footer/Footer";
import DotNav       from "./components/DotNav/DotNav";
import styles       from "./App.module.css";

import Home          from "./sections/Home";
import About         from "./sections/About";
import Mission       from "./sections/Mission";
import Programs      from "./sections/Programs";
import Testimonials  from "./sections/Testimonials";
import Contact       from "./sections/Contact";

function AnimatedRoutes() {
  const location               = useLocation();
  const [direction, setDirection] = useState("forward");

  useSwipeNavigation(setDirection);

  return (
    <div
      className={`${styles.sectionWrap} ${styles[direction]}`}
      key={location.pathname}
    >
      <Routes location={location}>
        <Route path="/"             element={<Home />} />
        <Route path="/about"        element={<About />} />
        <Route path="/mission"      element={<Mission />} />
        <Route path="/programs"     element={<Programs />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact"      element={<Contact />} />
        <Route path="*"             element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Navbar />
        <main className={styles.main}>
          <AnimatedRoutes />
        </main>
        <DotNav />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;