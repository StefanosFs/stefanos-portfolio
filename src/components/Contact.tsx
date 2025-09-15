import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { emailjsConfig } from "../config/emailjs";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    try {
      setIsSubmitting(true);
      setSubmitStatus({ type: null, message: "" });

      // Check if EmailJS credentials are configured
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || emailjsConfig.serviceId;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || emailjsConfig.templateId;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || emailjsConfig.publicKey;

      if (!serviceId || !templateId || !publicKey || 
          serviceId === 'service_placeholder' || 
          templateId === 'template_placeholder' || 
          publicKey === 'public_key_placeholder') {
        // Fallback: Create a mailto link with form data
        const formData = new FormData(form.current);
        const name = formData.get('user_name') as string;
        const email = formData.get('user_email') as string;
        const message = formData.get('message') as string;
        
        const subject = encodeURIComponent(`Contact Form Message from ${name}`);
        const body = encodeURIComponent(
          `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        );
        
        const mailtoLink = `mailto:stef07codes@gmail.com?subject=${subject}&body=${body}`;
        window.open(mailtoLink, '_blank');
        
        setSubmitStatus({
          type: "success",
          message: "Opening your email client to send the message. If it doesn't open, please email me directly at stef07codes@gmail.com",
        });
        form.current.reset();
        return;
      }

      console.log("Sending email with:", { 
        serviceId, 
        templateId, 
        publicKey: publicKey ? publicKey.substring(0, 10) + "..." : "undefined",
        hasEnvVars: {
          serviceId: !!import.meta.env.VITE_EMAILJS_SERVICE_ID,
          templateId: !!import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          publicKey: !!import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        }
      });

      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      );

      console.log("EmailJS result:", result);

      if (result.text === "OK") {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! I will get back to you soon.",
        });
        form.current.reset();
      } else {
        throw new Error(`EmailJS returned: ${result.text}`);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      
      let errorMessage = "Failed to send message. Please try again later.";
      
      if (error instanceof Error) {
        if (error.message.includes("Failed to fetch")) {
          errorMessage = "Network error. This might be a CORS issue. Please check your EmailJS domain settings or contact me directly at stef07codes@gmail.com";
        } else if (error.message.includes("credentials are not configured")) {
          errorMessage = "Email service is not configured. Please contact me directly at stef07codes@gmail.com";
        } else if (error.message.includes("Invalid template")) {
          errorMessage = "Email template error. Please contact me directly at stef07codes@gmail.com";
        } else if (error.message.includes("Invalid service")) {
          errorMessage = "Email service error. Please contact me directly at stef07codes@gmail.com";
        } else {
          errorMessage = `Error: ${error.message}`;
        }
      }
      
      setSubmitStatus({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-heading dark:text-white">Get In Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have a question or want to work together? Feel free to use the form below or email me directly at <a href="https://stef07codes@gmail.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">stef07codes@gmail.com</a> !
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.form
            ref={form}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="user_name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-tertiary dark:border-gray-600 dark:text-white"
              />
            </div>

            <div>
              <label
                htmlFor="user_email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-tertiary dark:border-gray-600 dark:text-white"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-tertiary dark:border-gray-600 dark:text-white"
              />
            </div>

            {submitStatus.message && (
              <div
                className={`p-4 rounded-md ${
                  submitStatus.type === "success"
                    ? "bg-green-50 text-green-800 dark:bg-green-900 dark:text-green-100"
                    : "bg-red-50 text-red-800 dark:bg-red-900 dark:text-red-100"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn-primary ${
                  isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/StefanosFs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                LinkedIn
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                Email
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
