"use client";

import { useState, useRef } from "react";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin, FaFacebook as Facebook, FaInstagram as Instagram } from "react-icons/fa";
import { ScrollUp } from "@/components/ScrollUp";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    // Mock EmailJS submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      formRef.current?.reset();
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-6xl">
      <ScrollUp className="text-center space-y-4 mb-16 max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl text-foreground">
          Get in Touch
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl">
          Have a project in mind or just want to say hi? I'd love to hear from you.
        </p>
      </ScrollUp>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Contact Info */}
        <ScrollUp delay={0.1} y={30} className="space-y-12">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-foreground">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Email</h3>
                  <a href="mailto:kkamranhhasan@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors break-all">
                    kkamranhhasan@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Phone</h3>
                  <a href="tel:+8801743307872" className="text-muted-foreground hover:text-foreground transition-colors">
                    01743307872
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Location</h3>
                  <p className="text-muted-foreground">Fularpar, Muksudpur, Gopalganj</p>
                </div>
              </div>
            </div>

            {/* Google Maps Iframe */}
            <div className="w-full h-[250px] md:h-[300px] rounded-xl overflow-hidden shadow-sm border border-border">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d371.41217643131455!2d89.83207104456002!3d23.273995716819176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sfularpar%2Cmuksudpur%2Cgopalganj!5e0!3m2!1sen!2sbd!4v1777560579973!5m2!1sen!2sbd" 
                className="w-full h-full" 
                style={{ border: 0 }} 
                allowFullScreen={false}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Follow Me</h2>
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/kkamranhhasan" target="_blank" rel="noreferrer" className="p-3 rounded-full border border-border hover:bg-muted transition-colors hover:scale-110">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/kkamranhhasan/" target="_blank" rel="noreferrer" className="p-3 rounded-full border border-border hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-colors hover:scale-110">
                <Linkedin size={20} />
              </a>
              <a href="https://www.facebook.com/L2724O" target="_blank" rel="noreferrer" className="p-3 rounded-full border border-border hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-colors hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com/munshionik_" target="_blank" rel="noreferrer" className="p-3 rounded-full border border-border hover:bg-[#E4405F] hover:text-white hover:border-[#E4405F] transition-colors hover:scale-110">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </ScrollUp>

        {/* Contact Form */}
        <ScrollUp delay={0.2} y={30} className="w-full h-full">
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Send a Message</h2>
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="user_name" className="text-sm font-medium">Name</label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="user_email" className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              {submitStatus.type && (
                <div className={`p-4 rounded-lg text-sm ${submitStatus.type === "success" ? "bg-green-500/10 text-green-600 dark:text-green-400" : "bg-red-500/10 text-red-600 dark:text-red-400"}`}>
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none gap-2"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <Send size={18} />}
              </button>
            </form>
          </div>
        </ScrollUp>
      </div>
    </div>
  );
}
