"use client";

import { useState } from "react";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { book_call, contact_form, aside } = frontmatter;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showContactForm, setShowContactForm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.target);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your message has been sent.",
        });
        e.target.reset();
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section">
      <div className="container">
        {markdownify(
          showContactForm ? contact_form.title : book_call.title,
          "h1",
          "text-center font-normal",
        )}
        <div className="section row pb-0">
          <div className="col-12 md:col-6 lg:col-7">
            {!showContactForm ? (
              <div className="booking-widget">
                <div className="bg-gray-100 rounded-lg p-8 text-center mb-6">
                  <h3 className="text-2xl font-semibold mb-4">
                    {book_call.subtitle}
                  </h3>
                  <p className="mb-6">{book_call.description}</p>
                  <div className="bg-white rounded-lg p-6 shadow-sm mb-4">
                    <Link
                      className="btn btn-primary mt-4 leading-5 md:leading-none"
                      href={book_call.button.link}
                      rel={book_call.button.rel}
                      target={book_call.button.target}
                    >
                      {book_call.button.label}
                    </Link>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowContactForm(true)}
                    className="text-primary hover:underline text-sm"
                  >
                    {book_call.instead_link_text}
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      className="form-input w-full rounded"
                      name="name"
                      type="text"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-input w-full rounded"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-input w-full rounded"
                      name="subject"
                      type="text"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-textarea w-full rounded-md"
                      name="message"
                      rows="7"
                      placeholder="Your message"
                      required
                    />
                  </div>
                  {submitStatus && (
                    <div
                      className={`mb-3 p-3 rounded ${submitStatus.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                    >
                      {submitStatus.message}
                    </div>
                  )}
                  <div className="w-full flex items-center">
                    <button
                      type="submit"
                      className="btn btn-primary mx-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Now"}
                    </button>
                  </div>
                </form>
                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setShowContactForm(false)}
                    className="text-primary hover:underline text-sm mt-4"
                  >
                    {contact_form.instead_link_text}
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="content col-12 md:col-6 lg:col-5">
            {markdownify(aside.title, "h4")}
            {markdownify(aside.description, "div", "mt-4")}
            <ul className="contact-list mt-5">
              {aside.contacts.map((contact, index) => (
                <li key={index}>
                  {markdownify(contact, "strong", "text-dark")}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
