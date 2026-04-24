import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, Send, Github, Instagram, Facebook, Loader2 } from "lucide-react";
import { useState, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

// EmailJS configuration — replace these with your actual IDs from https://emailjs.com
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // 1. Save to Supabase (as a record) - Non blocking
      try {
        const { error: dbError } = await supabase
          .from("contact_submissions")
          .insert({ name, email, message });
        if (dbError) {
          console.warn("Supabase error:", dbError);
        }
      } catch (err) {
        console.error("Failed to save to database, continuing with email.", err);
      }

      console.log("Sending email with EmailJS...", {
        service: EMAILJS_SERVICE_ID,
        template: EMAILJS_TEMPLATE_ID,
        publicKey: EMAILJS_PUBLIC_KEY ? "Set" : "Not Set"
      });

      // 2. Send email notification via EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          message: message,
          to_name: "Sagheer Ahmad",
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      toast.success("Message sent! I'll get back to you soon.");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: any) {
      console.error("EmailJS Error:", err);
      // Display the actual error message to the user
      const errorMessage = err?.text || err?.message || "Something went wrong";
      toast.error(`Email error: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={submit}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      <input
        required value={name} onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
        className="bg-card border border-border rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors"
      />
      <input
        required type="email" value={email} onChange={(e) => setEmail(e.target.value)}
        placeholder="you@email.com"
        className="bg-card border border-border rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors"
      />
      <textarea
        required value={message} onChange={(e) => setMessage(e.target.value)}
        placeholder="Tell me about your project…" rows={5}
        className="md:col-span-2 bg-card border border-border rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors resize-none"
      />
      <button
        type="submit"
        disabled={loading}
        className="md:col-span-2 group inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-primary text-primary-foreground font-mono text-xs uppercase tracking-widest hover:shadow-glow transition-all disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Sending…" : "Send message"}
        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
      </button>
    </motion.form>
  );
};

export const Contact = () => (
  <section id="contact" className="relative py-24 md:py-36 overflow-hidden">
    <div className="container">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
        (05) — Contact
      </p>
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-display font-black leading-[0.85] tracking-tight text-[16vw] md:text-[12vw]"
      >
        Let's <span className="italic text-primary">talk</span>.
      </motion.h2>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <a
          href="mailto:sagheerahmad5767@gmail.com"
          className="group rounded-2xl bg-card border border-border p-8 hover:border-primary transition-all hover:-translate-y-1"
        >
          <Mail className="w-6 h-6 text-primary mb-6" />
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Email</p>
          <p className="font-display text-lg font-bold mt-2 break-all group-hover:text-primary transition-colors">
            sagheerahmad5767@gmail.com
          </p>
        </a>
        <a
          href="https://www.linkedin.com/in/sagheer-ahmad-96a833250"
          target="_blank" rel="noreferrer"
          className="group rounded-2xl bg-card border border-border p-8 hover:border-primary transition-all hover:-translate-y-1"
        >
          <Linkedin className="w-6 h-6 text-primary mb-6" />
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">LinkedIn</p>
          <p className="font-display text-xl font-bold mt-2 group-hover:text-primary transition-colors">
            /in/sagheer-ahmad
          </p>
        </a>
        <a
          href="https://github.com/Sagheer1122"
          target="_blank" rel="noreferrer"
          className="group rounded-2xl bg-card border border-border p-8 hover:border-primary transition-all hover:-translate-y-1"
        >
          <Github className="w-6 h-6 text-primary mb-6" />
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">GitHub</p>
          <p className="font-display text-xl font-bold mt-2 group-hover:text-primary transition-colors">
            @Sagheer1122
          </p>
        </a>
        <div className="rounded-2xl bg-card border border-border p-8">
          <MapPin className="w-6 h-6 text-primary mb-6" />
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Location</p>
          <p className="font-display text-xl font-bold mt-2">Lahore, Pakistan</p>
        </div>
      </div>

      <ContactForm />
    </div>
  </section>
);

export const Footer = () => (
  <footer className="container py-10 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground uppercase tracking-widest">
    <p>© {new Date().getFullYear()} Sagheer Ahmad</p>
    <div className="flex items-center gap-5">
      <a
        href="https://www.linkedin.com/in/sagheer-ahmad-96a833250"
        target="_blank" rel="noreferrer"
        aria-label="LinkedIn"
        className="hover:text-primary transition-colors"
      >
        <Linkedin className="w-5 h-5" />
      </a>
      <a
        href="https://github.com/Sagheer1122"
        target="_blank" rel="noreferrer"
        aria-label="GitHub"
        className="hover:text-primary transition-colors"
      >
        <Github className="w-5 h-5" />
      </a>
      <a
        href="https://www.instagram.com/mian_sagheer_007?igsh=NnlqMWF2MTV3dDBp"
        target="_blank" rel="noreferrer"
        aria-label="Instagram"
        className="hover:text-primary transition-colors"
      >
        <Instagram className="w-5 h-5" />
      </a>
      <a
        href="https://www.facebook.com/share/1DVTEBVTrG/?mibextid=wwXIfr"
        target="_blank" rel="noreferrer"
        aria-label="Facebook"
        className="hover:text-primary transition-colors"
      >
        <Facebook className="w-5 h-5" />
      </a>
    </div>
  </footer>
);
