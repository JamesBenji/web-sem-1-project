import { useState } from "react";
import type { ChangeEvent, SyntheticEvent } from "react";
import { NavBar } from "../components/layout/NavBar";

type ContactFormData = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
};

type ContactField = keyof ContactFormData;
type ContactFormErrors = Partial<Record<ContactField, string>>;

const initialFormData: ContactFormData = {
  fullName: "",
  email: "",
  subject: "",
  message: "",
};

export const ContactPage = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (field: ContactField, value: string): string => {
    const trimmed = value.trim();

    if (field === "fullName") {
      if (!trimmed) return "Please enter your full name.";
      return "";
    }

    if (field === "email") {
      if (!trimmed) return "Please enter your email address.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
        return "Please enter a valid email address.";
      }
      return "";
    }

    if (field === "subject") {
      if (!trimmed) return "Please add a subject.";
      return "";
    }

    if (field === "message") {
      if (!trimmed) return "Please write a message.";
      if (trimmed.length < 10) {
        return "Message should be at least 10 characters.";
      }
      return "";
    }

    return "";
  };

  const validateForm = (data: ContactFormData): ContactFormErrors => {
    const nextErrors: ContactFormErrors = {};
    (Object.keys(data) as ContactField[]).forEach((field) => {
      const message = validateField(field, data[field]);
      if (message) nextErrors[field] = message;
    });
    return nextErrors;
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target as {
      name: ContactField;
      value: string;
    };
    setFormData((previous) => ({ ...previous, [name]: value }));

    if (submitted) {
      setSubmitted(false);
    }
  };

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) {
      return;
    }

    const nextErrors = validateForm(formData);
    setErrors(nextErrors);
    setSubmitted(false);

    if (Object.values(nextErrors).some(Boolean)) {
      return;
    }

    setIsSubmitting(true);
    window.setTimeout(() => {
      setFormData(initialFormData);
      setErrors({});
      setSubmitted(true);
      setIsSubmitting(false);
    }, 650);
  };

  return (
    <div className="min-h-screen bg-brand-50 text-brand-950">
      <NavBar />

      <main className="mx-auto max-w-5xl px-5 pb-14 pt-24 sm:px-8 md:px-10 lg:px-12 lg:pb-16 lg:pt-28">
        <section className="space-y-5 rounded-[2rem] bg-brand-100/15 p-4 sm:p-5 lg:p-6">
          <div className="space-y-2.5 text-center">
            <h1 className="text-3xl font-black leading-[1.04] tracking-tight text-brand-950 sm:text-4xl lg:text-[2.75rem]">
              Get in Touch
            </h1>
            <p className="mx-auto max-w-lg text-sm leading-7 text-brand-700 sm:text-base">
              Whether you have a recipe question or need support with your
              family food journey, our team is happy to help.
            </p>
          </div>

          <div className="mx-auto w-full max-w-xl rounded-3xl border border-brand-200 bg-gradient-to-b from-white to-brand-50 p-4 shadow-xl shadow-brand-100 sm:p-5">
            <form className="space-y-3.5" onSubmit={handleSubmit} noValidate>
              <div className="space-y-1">
                <label
                  className="text-xs font-bold uppercase tracking-[0.14em] text-brand-700"
                  htmlFor="fullName"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  aria-invalid={Boolean(errors.fullName)}
                  aria-describedby={errors.fullName ? "fullName-error" : undefined}
                  className={`w-full rounded-xl border px-3.5 py-2 text-brand-900 outline-none transition placeholder:text-brand-400 focus:ring-2 ${
                    errors.fullName
                      ? "border-brand-300 bg-brand-50 focus:border-brand-500 focus:ring-brand-200"
                      : "border-brand-200 bg-white focus:border-brand-500 focus:ring-brand-100"
                  }`}
                  placeholder="Your name"
                />
                {errors.fullName ? (
                  <p id="fullName-error" className="text-xs leading-relaxed text-brand-700">
                    {errors.fullName}
                  </p>
                ) : null}
              </div>

              <div className="space-y-1">
                <label
                  className="text-xs font-bold uppercase tracking-[0.14em] text-brand-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={`w-full rounded-xl border px-3.5 py-2 text-brand-900 outline-none transition placeholder:text-brand-400 focus:ring-2 ${
                    errors.email
                      ? "border-brand-300 bg-brand-50 focus:border-brand-500 focus:ring-brand-200"
                      : "border-brand-200 bg-white focus:border-brand-500 focus:ring-brand-100"
                  }`}
                  placeholder="you@example.com"
                />
                {errors.email ? (
                  <p id="email-error" className="text-xs leading-relaxed text-brand-700">
                    {errors.email}
                  </p>
                ) : null}
              </div>

              <div className="space-y-1">
                <label
                  className="text-xs font-bold uppercase tracking-[0.14em] text-brand-700"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                  className={`w-full rounded-xl border px-3.5 py-2 text-brand-900 outline-none transition placeholder:text-brand-400 focus:ring-2 ${
                    errors.subject
                      ? "border-brand-300 bg-brand-50 focus:border-brand-500 focus:ring-brand-200"
                      : "border-brand-200 bg-white focus:border-brand-500 focus:ring-brand-100"
                  }`}
                  placeholder="How can we help?"
                />
                {errors.subject ? (
                  <p id="subject-error" className="text-xs leading-relaxed text-brand-700">
                    {errors.subject}
                  </p>
                ) : null}
              </div>

              <div className="space-y-1">
                <label
                  className="text-xs font-bold uppercase tracking-[0.14em] text-brand-700"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={`w-full resize-y rounded-xl border px-3.5 py-2 text-brand-900 outline-none transition placeholder:text-brand-400 focus:ring-2 ${
                    errors.message
                      ? "border-brand-300 bg-brand-50 focus:border-brand-500 focus:ring-brand-200"
                      : "border-brand-200 bg-white focus:border-brand-500 focus:ring-brand-100"
                  }`}
                  placeholder="Share your question or request..."
                />
                {errors.message ? (
                  <p id="message-error" className="text-xs leading-relaxed text-brand-700">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <div className="space-y-2 pt-1">
                {submitted ? (
                  <p
                    className="rounded-2xl bg-brand-100 px-4 py-3 text-sm leading-relaxed text-brand-800"
                    role="status"
                    aria-live="polite"
                  >
                    Message sent. We will get back to you soon.
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex h-10 w-full items-center justify-center rounded-full border-2 border-white bg-brand-900 px-5 text-xs font-bold uppercase tracking-[0.14em] text-brand-50 transition hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-brand-900 sm:w-auto"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                <p className="text-xs leading-relaxed text-brand-600 sm:text-sm">
                  We usually reply within 1-2 business days.
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};
