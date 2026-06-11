import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, ExternalLink } from 'lucide-react';

export default function Contact() {
  // Contact Form States
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'Web Development',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Email Copy State
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Category Options
  const categories = [
    'Web Development',
    'App Development',
    'Video Editing',
    'SEO Optimization',
    'Creative Branding',
    'Other Consultations'
  ];

  // Copy Email Helper
  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('seosixofficial@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  // Form Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate server request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        category: 'Web Development',
        message: ''
      });

      // Clear success message after 4 seconds
      setTimeout(() => setIsSuccess(false), 4000);
    }, 1500);
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
      className="relative flex flex-col items-center bg-white pt-24 md:pt-32 select-none overflow-hidden"
    >
      {/* Background radial gradient glow for premium depth */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#DC143C]/3% blur-[120px] pointer-events-none z-1" />

      {/* Main Container */}
      <div className="w-full max-w-6xl px-6 md:px-12 z-10 flex flex-col items-center">
        
        {/* Section Header */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16 max-w-xl"
        >
          <motion.span 
            variants={fadeUpVariants}
            className="text-[#DC143C] font-semibold tracking-wider text-xs sm:text-sm uppercase block mb-4"
          >
            Selected — Contact
          </motion.span>
          <motion.h2 
            variants={fadeUpVariants}
            className="font-school font-black text-5xl sm:text-6xl md:text-7xl uppercase leading-none tracking-tighter text-neutral-900 mb-6"
          >
            GET IN <span className="text-[#DC143C]">TOUCH</span>
          </motion.h2>
          <motion.p 
            variants={fadeUpVariants}
            className="text-neutral-500 font-semibold text-sm sm:text-base leading-relaxed uppercase"
          >
            Have a project in mind? Let's build something exceptional. Drop us a line below or reach out directly.
          </motion.p>
        </motion.div>

        {/* Contact Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 w-full mb-24 items-start">
          
          {/* LEFT COLUMN: Business Profile Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Email Info Card */}
            <div className="relative overflow-hidden group bg-[#000000] border border-[#000000]/40 rounded-3xl p-6 transition-all duration-300 shadow-[0_10px_30px_rgba(251,191,36,0.05)] hover:shadow-[0_15px_35px_rgba(251,191,36,0.15)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-white border border-white/25 transition-all duration-300">
                  <Mail size={22} />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-bold text-white/95 uppercase tracking-wider block mb-1 [text-shadow:_0_1px_2px_rgba(0,0,0,0.2)]">
                    Email Address
                  </span>
                  <a 
                    href="mailto:seosixofficial@gmail.com" 
                    className="text-white font-extrabold hover:text-white/80 transition-colors duration-200 text-sm sm:text-base break-words block [text-shadow:_0_1px_2.5px_rgba(0,0,0,0.3)]"
                  >
                    seosixofficial@gmail.com
                  </a>
                </div>
                <button 
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-white/15 text-white/90 hover:text-white hover:bg-white/25 border border-white/20 transition cursor-pointer self-start"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check size={16} className="text-white" /> : <Copy size={16} />}
                </button>
              </div>
              
              {/* Copy success popup inside the card */}
              <AnimatePresence>
                {copiedEmail && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute bottom-2 right-4 text-[10px] font-extrabold tracking-wider text-white uppercase [text-shadow:_0_1px_2px_rgba(0,0,0,0.3)]"
                  >
                    Copied to Clipboard!
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Phone Info Card */}
            <div className="group bg-[#000000] border border-[#000000]/40 rounded-3xl p-6 transition-all duration-300 shadow-[0_10px_30px_rgba(251,191,36,0.05)] hover:shadow-[0_15px_35px_rgba(251,191,36,0.15)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-white border border-white/25 transition-all duration-300">
                  <Phone size={22} />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold text-white/95 uppercase tracking-wider block mb-1 [text-shadow:_0_1px_2px_rgba(0,0,0,0.2)]">
                    Phone Contact
                  </span>
                  <a 
                    href="tel:+919344045661" 
                    className="text-white font-extrabold hover:text-white/80 transition-colors duration-200 text-sm sm:text-base block [text-shadow:_0_1px_2.5px_rgba(0,0,0,0.3)]"
                  >
                    +91 93440 45661
                  </a>
                </div>
                <a 
                  href="tel:+919344045661"
                  className="p-2 rounded-xl bg-white/15 text-white/90 hover:text-white hover:bg-white/25 border border-white/20 transition cursor-pointer self-start"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Office Location Card */}
            <div className="group bg-[#000000] border border-[#000000]/40 rounded-3xl p-6 transition-all duration-300 shadow-[0_10px_30px_rgba(251,191,36,0.05)] hover:shadow-[0_15px_35px_rgba(251,191,36,0.15)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-white border border-white/25 transition-all duration-300">
                  <MapPin size={22} />
                </div>
                <div>
                  <span className="text-xs font-bold text-white/95 uppercase tracking-wider block mb-1 [text-shadow:_0_1px_2px_rgba(0,0,0,0.2)]">
                    Operating Studio
                  </span>
                  <p className="text-white font-extrabold text-sm sm:text-base [text-shadow:_0_1px_2.5px_rgba(0,0,0,0.3)]">
                    Global Engineering Studio • Remote
                  </p>
                </div>
              </div>
            </div>

            {/* Social Channels Container */}
            <div className="bg-[#000000] border border-[#000000]/40 rounded-3xl p-6 shadow-[0_10px_30px_rgba(251,191,36,0.05)] hover:shadow-[0_15px_35px_rgba(251,191,36,0.15)] flex flex-col gap-4 mt-2 transition-all duration-300">
              <span className="text-xs font-bold text-white/95 uppercase tracking-wider block [text-shadow:_0_1px_2px_rgba(0,0,0,0.2)]">
                Connect With Us
              </span>
              <div className="flex flex-wrap gap-3">
                {/* LinkedIn */}
                <a 
                  href="https://linkedin.com/in/seo-six-" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-white/20 hover:bg-[#0077B5] border border-white/25 hover:border-[#0077B5] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg cursor-pointer"
                  aria-label="LinkedIn Profile"
                >
                  <svg viewBox="0 0 448 512" fill="currentColor" className="w-[18px] h-[18px]"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                </a>
                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/seosix_official?igsh=MTR6M2E1d3pnNnp6bQ==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-white/20 hover:bg-[#E1306C] border border-white/25 hover:border-[#E1306C] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg cursor-pointer"
                  aria-label="Instagram Page"
                >
                  <svg viewBox="0 0 448 512" fill="currentColor" className="w-[18px] h-[18px]"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12.1 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                </a>
                {/* YouTube */}
                <a 
                  href="https://www.youtube.com/@seosixofficial" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-white/20 hover:bg-[#FF0000] border border-white/25 hover:border-[#FF0000] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg cursor-pointer"
                  aria-label="YouTube Channel"
                >
                  <svg viewBox="0 0 576 512" fill="currentColor" className="w-[18px] h-[18px]"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.781 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
                </a>
                {/* GitHub */}
                <a 
                  href="https://github.com/seosixofficial" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-white/20 hover:bg-[#24292E] border border-white/25 hover:border-[#24292E] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg cursor-pointer"
                  aria-label="GitHub Account"
                >
                  <svg viewBox="0 0 496 512" fill="currentColor" className="w-[18px] h-[18px]"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Interactive Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <form 
              onSubmit={handleSubmit}
              className="bg-neutral-950 border border-neutral-800 rounded-[32px] p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_60px_rgba(220,20,60,0.08)] hover:border-[#DC143C]/40 transition-all duration-300 flex flex-col gap-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-semibold text-neutral-350 uppercase tracking-wide">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full bg-neutral-900 border border-neutral-800 focus:border-[#DC143C] focus:ring-1 focus:ring-[#DC143C]/20 rounded-xl px-4 py-3.5 text-white placeholder-neutral-500 font-semibold outline-none transition-all duration-200"
                  />
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-semibold text-neutral-350 uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full bg-neutral-900 border border-neutral-800 focus:border-[#DC143C] focus:ring-1 focus:ring-[#DC143C]/20 rounded-xl px-4 py-3.5 text-white placeholder-neutral-500 font-semibold outline-none transition-all duration-200"
                  />
                </div>
              </div>

              {/* Project Category Dropdown */}
              <div className="flex flex-col gap-2">
                <label htmlFor="category" className="text-xs font-semibold text-neutral-350 uppercase tracking-wide">
                  Project Category
                </label>
                <div className="relative">
                  <select
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 focus:border-[#DC143C] focus:ring-1 focus:ring-[#DC143C]/20 rounded-xl px-4 py-3.5 text-white font-semibold outline-none appearance-none transition-all duration-200 cursor-pointer"
                  >
                    {categories.map((cat, idx) => (
                      <option key={idx} value={cat} className="bg-neutral-900 text-white font-semibold">
                        {cat}
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

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-semibold text-neutral-350 uppercase tracking-wide">
                  Project Details
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your project requirements..."
                  className="w-full bg-neutral-900 border border-neutral-800 focus:border-[#DC143C] focus:ring-1 focus:ring-[#DC143C]/20 rounded-xl px-4 py-3.5 text-white placeholder-neutral-500 font-semibold outline-none resize-none transition-all duration-200"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className={`w-full rounded-xl py-4 font-extrabold uppercase tracking-wider flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.01]
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
                    <Send size={16} />
                    <span>Send Message</span>
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
                  src="/images/sedsix_logo.jpg" 
                  alt="SEOSIX Logo" 
                  className="w-full h-full object-cover"
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
