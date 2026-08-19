import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, ExternalLink } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  // Contact Form States
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'SELECT A SERVICE',
    plan: 'PRIME',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Category Options
  const categories = [
    'SELECT A SERVICE',
    'WEB DEVELOPMENT',
    'SEO OPTIMIZATION',
    'UI/UX DESIGN',
    'DIGITAL MARKETING',
    'VIDEO EDITING'
  ];

  // Form Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    if (formData.category === 'SELECT A SERVICE') {
      alert('Please select a service.');
      return;
    }

    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.warn("EmailJS credentials not configured in environment variables. Falling back to simulation mode.");
      
      // Fallback simulation mode for testing UI
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          category: 'SELECT A SERVICE',
          plan: 'PRIME',
          message: ''
        });
        setTimeout(() => setIsSuccess(false), 4000);
      }, 1500);
      return;
    }

    const templateParams = {
      name: formData.name,
      from_name: formData.name, // compatibility
      email: formData.email,
      from_email: formData.email, // compatibility
      phone: formData.phone,
      service: formData.category,
      category: formData.category, // compatibility
      plan: formData.plan,
      message: formData.message,
      to_name: 'SEOSIX Team'
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          category: 'SELECT A SERVICE',
          plan: 'PRIME',
          message: ''
        });
        setTimeout(() => setIsSuccess(false), 4000);
      })
      .catch((err) => {
        console.error('FAILED to send email via EmailJS:', err);
        setIsSubmitting(false);
        alert('Failed to send message. Please verify your EmailJS credentials or try again later.');
      });
  };

  // Framer Motion Animation Variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05
      }
    }
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.215, 0.610, 0.355, 1.000]
      }
    }
  };

  return (
    <section 
      id="contact" 
      className="curved-section relative flex flex-col items-center bg-[#1B1B1B] pt-24 md:pt-32 select-none overflow-hidden"
    >
      {/* Background radial gradient glow for premium depth */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#DC143C]/3% blur-[120px] pointer-events-none z-1" />

      {/* Main Container */}
      <div className="w-full max-w-6xl px-6 md:px-12 z-10 flex flex-col items-center">
        
        {/* Contact Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 w-full mb-24 items-center">
          
          {/* LEFT COLUMN: Business Profile Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col justify-center text-white"
          >
            <span className="text-[#DC143C]/60 font-semibold tracking-wider text-xs uppercase block mb-3" style={{ fontFamily: 'var(--font-custom)' }}>
              [ 05 / CONTACT US ]
            </span>
            
            <h2 className="font-school font-black text-6xl sm:text-7xl md:text-8xl uppercase leading-none tracking-tighter mb-4 text-[#FFF8E7]">
              HAVE AN <br />
              <span className="text-[#DC143C]">IDEA?</span>
            </h2>

            <p className="text-neutral-400 font-semibold text-xs uppercase tracking-widest mb-10" style={{ fontFamily: 'var(--font-custom)' }}>
              Let's make it real.
            </p>

            <div className="flex flex-col gap-5 text-sm font-semibold text-neutral-300">
              <a href="tel:+919344045661" className="flex items-center gap-3.5 hover:text-[#DC143C] transition-colors duration-200">
                <Phone size={18} className="text-[#DC143C]" />
                <span>+91 9344045661</span>
              </a>
              <a href="mailto:seosixofficial@gmail.com" className="flex items-center gap-3.5 hover:text-[#DC143C] transition-colors duration-200">
                <Mail size={18} className="text-[#DC143C]" />
                <span>seosixofficial@gmail.com</span>
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Interactive Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 w-full"
          >
            <form 
              onSubmit={handleSubmit}
              className="bg-neutral-950/95 border border-neutral-800 rounded-[32px] p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:border-[#DC143C]/35 transition-all duration-300 flex flex-col gap-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div className="flex flex-col">
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full bg-white border border-neutral-200 focus:border-[#DC143C] focus:ring-1 focus:ring-[#DC143C]/20 rounded-xl px-4 py-3.5 text-black placeholder-neutral-400 font-bold outline-none transition-all duration-200 text-xs tracking-wider"
                  />
                </div>

                {/* Email Address */}
                <div className="flex flex-col">
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Your Email"
                    className="w-full bg-white border border-neutral-200 focus:border-[#DC143C] focus:ring-1 focus:ring-[#DC143C]/20 rounded-xl px-4 py-3.5 text-black placeholder-neutral-400 font-bold outline-none transition-all duration-200 text-xs tracking-wider"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="flex flex-col">
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Your Phone Number"
                  className="w-full bg-white border border-neutral-200 focus:border-[#DC143C] focus:ring-1 focus:ring-[#DC143C]/20 rounded-xl px-4 py-3.5 text-black placeholder-neutral-400 font-bold outline-none transition-all duration-200 text-xs tracking-wider"
                />
              </div>

              {/* Select Service Dropdown */}
              <div className="flex flex-col">
                <div className="relative">
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-white border border-neutral-200 focus:border-[#DC143C] focus:ring-1 focus:ring-[#DC143C]/20 rounded-xl px-4 py-3.5 text-black font-extrabold outline-none appearance-none transition-all duration-200 cursor-pointer text-xs tracking-wider"
                  >
                    {categories.map((cat, idx) => (
                      <option key={idx} value={cat} className="bg-white text-black font-semibold">
                        {cat === 'SELECT A SERVICE' ? 'Select a Service' : cat.toLowerCase().split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-neutral-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Select Plan Tab Menu */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-extrabold text-neutral-400 uppercase tracking-widest">
                  Select Plan:
                </label>
                <div className="grid grid-cols-3 gap-3 bg-neutral-900/60 p-1.5 rounded-2xl border border-neutral-800">
                  {['BASIC', 'PRIME', 'ELITE'].map((plan) => (
                    <button
                      key={plan}
                      type="button"
                      onClick={() => setFormData({ ...formData, plan })}
                      className={`py-3 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                        formData.plan === plan
                          ? 'bg-neutral-800 text-[#DC143C] border border-[#DC143C]/50 shadow-[0_0_15px_rgba(220,20,60,0.15)]'
                          : 'text-neutral-400 hover:text-white border border-transparent'
                      }`}
                    >
                      {plan}
                    </button>
                  ))}
                </div>
              </div>

              {/* Project Details Textarea */}
              <div className="flex flex-col">
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Project Details / Message Inquiry"
                  className="w-full bg-white border border-neutral-200 focus:border-[#DC143C] focus:ring-1 focus:ring-[#DC143C]/20 rounded-xl px-4 py-3.5 text-black placeholder-neutral-400 font-bold outline-none resize-none transition-all duration-200 text-xs tracking-wider"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className={`w-full rounded-xl py-4 font-extrabold uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.01]
                  ${isSuccess 
                    ? "bg-white text-neutral-950 cursor-default" 
                    : isSubmitting 
                      ? "bg-neutral-800 text-neutral-500 cursor-wait" 
                      : "bg-[#DC143C] hover:bg-[#b01030] text-white shadow-[0_4px_14px_rgba(220,20,60,0.25)] hover:shadow-[0_8px_20px_rgba(220,20,60,0.4)] cursor-pointer"
                  }`}
              >
                {isSubmitting ? (
                  <span className="w-5.5 h-5.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : isSuccess ? (
                  <>
                    <CheckCircle2 size={19} className="text-[#DC143C]" />
                    <span>Inquiry Sent Successfully</span>
                  </>
                ) : (
                  <>
                    <span>Send Inquiry</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>

      {/* FOOTER SECTION */}
      <footer className="w-full bg-[#050505] border-t border-white/5 py-8 md:py-10 select-none z-10 flex flex-col items-center">
        <div className="w-full max-w-6xl px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 mb-8 items-start">
          
          {/* Col 1: Studio Identity & Logo */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3.5">
              {/* Logo with pulsing crimson glow */}
              <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#DC143C]/30 flex items-center justify-center bg-neutral-900 shadow-[0_0_15px_rgba(220,20,60,0.15)]">
                <img 
                  src="/images/seosix_logo.jpg?v=1" 
                  alt="SEOSIX Logo" 
                  className="w-full h-full object-cover"
                  width="44"
                  height="44"
                  loading="lazy"
                />
              </div>
              <span className="font-school font-black text-2xl tracking-tighter text-white">
                SEO<span className="text-[#DC143C]">SIX</span>
              </span>
            </div>
            <p className="text-neutral-500 font-semibold text-xs uppercase leading-relaxed max-w-sm">
              We design and engineer high-end digital spaces, scaling businesses with custom web layouts, dynamic application interfaces, and viral cinematic content.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 flex flex-col gap-3.5">
            <span className="text-xs font-semibold text-[#DC143C] uppercase tracking-wider block">
              Navigation
            </span>
            <ul className="flex flex-col gap-2 font-semibold text-neutral-400 text-xs uppercase">
              <li>
                <a href="#home" className="hover:text-white transition-colors duration-200 block">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors duration-200 block">Services</a>
              </li>
              <li>
                <a href="#creation" className="hover:text-white transition-colors duration-200 block">Creation</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors duration-200 block">Pricing</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors duration-200 block">About Us</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contacts */}
          <div className="lg:col-span-3 flex flex-col gap-3.5 font-semibold">
            <span className="text-xs font-semibold text-[#DC143C] uppercase tracking-wider block">
              Inquiries
            </span>
            <div className="flex flex-col gap-2 text-neutral-400 text-xs">
              <div>
                <span className="text-[10px] text-neutral-600 block uppercase mb-0.5">Email</span>
                <a href="mailto:seosixofficial@gmail.com" className="hover:text-white transition-colors duration-200 font-extrabold text-sm block">
                  seosixofficial@gmail.com
                </a>
              </div>
              <div>
                <span className="text-[10px] text-neutral-600 block uppercase mb-0.5">Phone</span>
                <a href="tel:+919344045661" className="hover:text-white transition-colors duration-200 font-extrabold text-sm block">
                  +91 93440 45661
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Social Channels */}
          <div className="lg:col-span-2 flex flex-col gap-3.5 font-semibold">
            <span className="text-xs font-semibold text-[#DC143C] uppercase tracking-wider block">
              Follow Us
            </span>
            <ul className="flex flex-col gap-2 text-neutral-400 text-xs uppercase">
              <li>
                <a href="https://linkedin.com/in/seo-six-" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200 block">LinkedIn</a>
              </li>
              <li>
                <a href="https://www.instagram.com/seosix_official?igsh=MTR6M2E1d3pnNnp6bQ==" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200 block">Instagram</a>
              </li>
              <li>
                <a href="https://www.youtube.com/@seosixofficial" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200 block">YouTube</a>
              </li>
              <li>
                <a href="https://github.com/seosixofficial" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200 block">GitHub</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Divider & Copyright Bar */}
        <div className="w-full max-w-6xl px-6 md:px-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between gap-4 text-center sm:text-left text-neutral-600 font-semibold text-[10px] uppercase tracking-wider">
          <span>
            © 2026 SEOSIX. All rights reserved.
          </span>
          <span>
            Crafted for high performance & conversion.
          </span>
        </div>
      </footer>
    </section>
  );
}
