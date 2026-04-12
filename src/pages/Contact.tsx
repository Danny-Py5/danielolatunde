import React, { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import "../index.css"; // bring in global variables and utilities
import Footer from "../components/Footer";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // build a message and open WhatsApp with prefilled text
    const text = `Name: ${form.name}
Email: ${form.email}
Message:
Hello,

My name is ${form.name}. I visited your portfolio and I would like to make an inquiry regarding your services.

Please let me know your availability and how we can proceed. I look forward to your response.

Thank you.`;
    const whatsappNumber = "2348165521344"; // international format without +
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text,
    )}`;
    window.open(url, "_blank");
  };

  // inline styles using existing css variables so no new stylesheet needed
  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "var(--padding)",
    marginBottom: "var(--margin)",
    border: "1px solid var(--border-color)",
    color: "#848484",
    backgroundColor: "var(--color-white)",
    borderRadius: "var(--border-radius-normal)",
    fontSize: "var(--font-size-normal)",
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: "var(--color-secondary)",
    color: "var(--color-white)",
    border: "none",
    padding: "var(--padding) var(--padding-xl)",
    borderRadius: "var(--border-radius-normal)",
    cursor: "pointer",
    fontSize: "var(--font-size-normal)",
  };

  return (
    <section className="contact section-wrapper">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          style={inputStyle}
          type="text"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          style={inputStyle}
          type="email"
          name="email"
          placeholder="Your email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <textarea
          style={{
            ...inputStyle,
            minHeight: "120px",
            resize: "vertical",
          }}
          name="message"
          placeholder="Your message"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button type="submit" style={buttonStyle}>
          Send via WhatsApp
        </button>
      </form>
      <Footer />
    </section>
  );
}

export default Contact;
