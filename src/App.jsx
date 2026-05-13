import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar      from "./components/Navbar/Navbar";
import Footer      from "./components/Footer/Footer";
import styles      from "./App.module.css";

import Home         from "./sections/Home";
import About        from "./sections/About";
import Mission      from "./sections/Mission";
import Programs     from "./sections/Programs";
import Testimonials from "./sections/Testimonials";
import Contact      from "./sections/Contact";

function ScrollPage() {
  return (
    <>
      <Home />
      <About />
      <Mission />
      <Programs />
      <Testimonials />
      <Contact />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Navbar />
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<ScrollPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
