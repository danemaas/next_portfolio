"use client";

import Link from "next/link";
import emailjs, { EmailJSResponseStatus } from "emailjs-com";
import { GithubIcon, LinkedinIcon, RssIcon } from "lucide-react";
import { useState } from "react";

const INITIAL_DATA = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const EmailSection = () => {
  const [formData, setFormData] = useState(INITIAL_DATA);
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState("");

  const sendEmail: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_10mzhyp",
        "template_kodiowk",
        e.currentTarget,
        "QemH39hUwGl242MUc"
      )
      .then(
        (result: EmailJSResponseStatus) => {
          setFormData(INITIAL_DATA);
          setEmailSent("Message successfully sent!");
          setLoading(false);
          setTimeout(() => {
            setEmailSent("");
          }, 3000);
        },
        (error: EmailJSResponseStatus) => {
          console.log(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="grid grid-cols-1 md:grid-cols-2 md:my-12 py-24 gap-4"
    >
      <div>
        <h2 className="text-xl font-semibold text-white my-2 flex items-center gap-2">
          Let&apos;s Connect <RssIcon />
        </h2>
        <p className="text-slate-300 mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="flex gap-2 items-center text-white">
          <Link
            href={"https://github.com/danemaas"}
            target="_blank"
            className="border-2 p-1 rounded-full hover:border-cyan-300 hover:text-cyan-300 transition-all duration-300"
          >
            <GithubIcon />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/dan-emaas-b96312289/"}
            target="_blank"
            className="border-2 p-1 rounded-full hover:border-cyan-300 hover:text-cyan-300 transition-all duration-300"
          >
            <LinkedinIcon />
          </Link>
        </div>
      </div>
      <div>
        <form onSubmit={sendEmail} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="user_name" className="text-white">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              placeholder="john doe"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="p-2 rounded-sm outline-none focus:outline-cyan-300"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="user_email" className="text-white">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              placeholder="johndoe@email.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="p-2 rounded-sm outline-none focus:outline-cyan-300"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="user_subject" className="text-white">
              Subject
            </label>
            <input
              type="text"
              name="user_subject"
              placeholder="Just saying hi..."
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              className="p-2 rounded-sm outline-none focus:outline-cyan-300"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="user_message" className="text-white">
              Message
            </label>
            <textarea
              name="user_message"
              placeholder="Hi there..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              rows={5}
              className="resize-none p-2 rounded-sm outline-none focus:outline-cyan-300"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="text-white bg-cyan-500 p-2 rounded-md hover:bg-cyan-300 hover:text-slate-800 transition-all duration-300"
          >
            {loading ? "Sending..." : "Send Email"}
          </button>
          {emailSent !== "" && (
            <p className="text-green-500 text-xs font-semibold">{emailSent}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
