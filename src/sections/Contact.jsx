import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || "YOUR_SERVICE_ID";
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || "YOUR_PUBLIC_KEY";

const REASONS = [
  "General Inquiry",
  "Enroll My Child",
  "Program Information",
  "Scheduling & Hours",
  "Pricing & Fees",
  "Other",
];

function Contact() {
  const formRef  = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.inner}>
        {/* ── Info column ── */}
        <div className={styles.info}>
          <span className="section-label">Contact Us</span>
          <h2>Get in Touch</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula
            sapien a lectus venenatis, at fringilla purus laoreet.
          </p>

          <ul className={styles.contactList}>
            <li>
              <span className={styles.contactIcon} aria-hidden="true">📍</span>
              <div>
                <strong>Address</strong>
                <span>123 Learning Lane, Chicago, IL 60601</span>
              </div>
            </li>
            <li>
              <span className={styles.contactIcon} aria-hidden="true">📞</span>
              <div>
                <strong>Phone</strong>
                <a href="tel:+11234567890">(123) 456-7890</a>
              </div>
            </li>
            <li>
              <span className={styles.contactIcon} aria-hidden="true">✉️</span>
              <div>
                <strong>Email</strong>
                <a href="mailto:info@littleeinsteins.com">info@littleeinsteins.com</a>
              </div>
            </li>
            <li>
              <span className={styles.contactIcon} aria-hidden="true">🕐</span>
              <div>
                <strong>Hours</strong>
                <span>Mon – Fri: 2:00 PM – 8:00 PM</span>
              </div>
            </li>
          </ul>
        </div>

        {/* ── Form column ── */}
        <div className={styles.formWrap}>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className={styles.form}
            noValidate
          >
            <h3>Send Us a Message</h3>

            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="from_name">Full Name <span aria-hidden="true">*</span></label>
                <input
                  id="from_name"
                  name="from_name"
                  type="text"
                  placeholder="Jane Smith"
                  required
                  autoComplete="name"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="from_email">Email <span aria-hidden="true">*</span></label>
                <input
                  id="from_email"
                  name="from_email"
                  type="email"
                  placeholder="jane@example.com"
                  required
                  autoComplete="email"
                />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="phone">Phone (optional)</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(555) 555-5555"
                  autoComplete="tel"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="reason">Reason for Contact <span aria-hidden="true">*</span></label>
                <select id="reason" name="reason" required>
                  <option value="">Select a reason…</option>
                  {REASONS.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="message">Message <span aria-hidden="true">*</span></label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell us how we can help…"
                required
              />
            </div>

            <button type="submit" className="btn-primary" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>

            {status === "success" && (
              <p className={styles.successMsg} role="status">
                ✅ Message sent! We'll be in touch soon.
              </p>
            )}
            {status === "error" && (
              <p className={styles.errorMsg} role="alert">
                ❌ Something went wrong. Please try again or email us directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
