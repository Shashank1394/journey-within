"use client";

import { useState } from "react";

type EnquiryForm = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const Enquire = () => {
  const [formData, setFormData] = useState<EnquiryForm>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/enquire", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        alert("Your message has been sent successfully!");

        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        alert(data.message || "Failed to send your message.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="enquire-section">
      <div className="enquire-section__bg-wrapper">
        <div className="container">
          {/* Page header */}
          <div className="row">
            <div className="col-10 offset-1 text-center">
              <h1 className="title">Enquire With Us</h1>
              <p className="intro">
                Have a question, a doubt, or simply want to know more about us?
                <br />
                We are here to help you begin your Journey Within.
              </p>
            </div>
          </div>

          {/* Form card */}
          <div className="row">
            <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 card-container">
              <div className="form-card">
                <h2 className="form-title">Send us a message</h2>

                <form
                  className="enquire-form"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <div className="field">
                    <label htmlFor="name">Your Name</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Enter Your Name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter Your Email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="Enter Your Phone Number"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="subject">Subject</label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="Enter Your Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="message">Your Message</label>
                    <textarea
                      id="message"
                      rows={6}
                      placeholder="Enter Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="submit-btn"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>

                <p className="privacy">
                  <span className="privacy__icon" aria-hidden="true">
                    🔒
                  </span>
                  We respect your privacy. Your information will never be shared
                  with third parties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Enquire;
