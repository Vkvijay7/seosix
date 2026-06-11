import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight,
  Zap,
  Smartphone,
  MessageSquare,
  Lock,
  TrendingUp,
  Globe,
  FileText,
  Gauge,
  BarChart3,
  ShieldCheck,
  Code,
  CreditCard,
  Layout,
  Sparkles,
  PhoneCall,
  Tv,
  Volume2,
  Paintbrush,
  Share2,
  Film,
  Award
} from 'lucide-react';

const IconMap = {
  zap: Zap,
  smartphone: Smartphone,
  message: MessageSquare,
  lock: Lock,
  seo: TrendingUp,
  globe: Globe,
  cms: FileText,
  speed: Gauge,
  analytics: BarChart3,
  shield: ShieldCheck,
  code: Code,
  creditcard: CreditCard,
  dashboard: Layout,
  ai: Sparkles,
  support: PhoneCall,
  tv: Tv,
  audio: Volume2,
  color: Paintbrush,
  share: Share2,
  film: Film,
  award: Award
};

const pricingData = {
  web: {
    name: "Web Development",
    plans: [
      {
        name: "Basic",
        price: "₹499",
        period: "month",
        desc: "Stop losing clients to a blank screen. Claim your premium 1-page business portfolio instantly.",
        features: [
          { text: "Instant Widescreen 1-Page Layout", icon: "zap" },
          { text: "100% Responsive & Mobile-Optimized", icon: "smartphone" },
          { text: "Direct WhatsApp Lead-Capture Hook", icon: "message" },
          { text: "Free Lifetime SSL & Hosting Config", icon: "lock" },
          { text: "24-Hour Express Launch Guarantee", icon: "award" }
        ],
        rotate: "md:-rotate-6",
        zIndex: "z-10"
      },
      {
        name: "Prime",
        price: "₹7,999",
        period: "project",
        desc: "Dominate Google search results and siphon high-intent buyer traffic directly to your inbox.",
        popular: true,
        features: [
          { text: "High-Impact SEO Keyword Domination", icon: "seo" },
          { text: "Multi-Page Brand Hub (Up to 5 Pages)", icon: "globe" },
          { text: "Dynamic CMS Panel (Blogs & Works)", icon: "cms" },
          { text: "Lightning-Fast Speed Optimization", icon: "speed" },
          { text: "Complete Google Analytics Hookup", icon: "analytics" },
          { text: "3 Months Priority Security Maintenance", icon: "shield" }
        ],
        rotate: "rotate-0",
        zIndex: "z-20"
      },
      {
        name: "Elite",
        price: "Custom",
        period: "plan",
        desc: "Custom-engineered full-stack application built to scale past normal enterprise constraints.",
        features: [
          { text: "100% Bespoke Code (No Templates)", icon: "code" },
          { text: "Custom Stripe & Gateway Checkout Hooks", icon: "creditcard" },
          { text: "Real-Time Admin Dashboard & CRM", icon: "dashboard" },
          { text: "End-to-End Encrypted Data Security", icon: "lock" },
          { text: "Next-Gen AI/LLM API Integrations", icon: "ai" },
          { text: "24-Hour VIP Dedicated Dev Hotline", icon: "support" }
        ],
        rotate: "md:rotate-6",
        zIndex: "z-10"
      }
    ]
  },
  app: {
    name: "App Development",
    plans: [
      {
        name: "Basic",
        price: "₹4,999",
        period: "mockup",
        desc: "Pitch to investors with confidence. Turn your app idea into an interactive high-fidelity MVP.",
        features: [
          { text: "Multi-Platform Prototype Preview", icon: "zap" },
          { text: "5 High-Conversion Interactive Screens", icon: "smartphone" },
          { text: "Firebase Live Authentication Mock", icon: "lock" },
          { text: "Instantly Clickable User Flows", icon: "dashboard" },
          { text: "Pitch-Deck Ready Assets", icon: "award" }
        ],
        rotate: "md:-rotate-6",
        zIndex: "z-10"
      },
      {
        name: "Prime",
        price: "₹39,999",
        period: "project",
        desc: "Deploy a production-grade cross-platform app directly to the Apple & Google stores.",
        popular: true,
        features: [
          { text: "Cross-Platform Launch (Android + iOS)", icon: "globe" },
          { text: "Smart Push Notification Triggers", icon: "message" },
          { text: "Integrated Payment Gateways (Stripe/Razorpay)", icon: "creditcard" },
          { text: "Live Firestore Database & Auth Hooks", icon: "code" },
          { text: "Amplitude Analytics Funnel Setup", icon: "analytics" },
          { text: "6 Months Post-Launch Tech Support", icon: "shield" }
        ],
        rotate: "rotate-0",
        zIndex: "z-20"
      },
      {
        name: "Elite",
        price: "Custom",
        period: "plan",
        desc: "A highly-scalable mobile ecosystem tailored to handle millions of active monthly users.",
        features: [
          { text: "Custom Backend Server Architecture", icon: "code" },
          { text: "Real-Time Chat & Activity Feed Hooks", icon: "message" },
          { text: "Full Web Admin Panel & Stats Board", icon: "dashboard" },
          { text: "Level-5 Security & End-to-End Encryption", icon: "lock" },
          { text: "Custom Offline-First Sync Systems", icon: "speed" },
          { text: "1-Year Dedicated Maintenance Agreement", icon: "support" }
        ],
        rotate: "md:rotate-6",
        zIndex: "z-10"
      }
    ]
  },
  video: {
    name: "Video Editing",
    plans: [
      {
        name: "Basic",
        price: "₹499",
        period: "video",
        desc: "Stop the scroll and hook your audience in the crucial first 3 seconds of viewing.",
        features: [
          { text: "High-Retention Retention Loop Hook", icon: "film" },
          { text: "Animated Dynamic Captions & Typography", icon: "cms" },
          { text: "Sound Design & Cinematic SFX Syncing", icon: "audio" },
          { text: "Express 48-Hour Turnaround Time", icon: "zap" },
          { text: "Formatted for Reels, Shorts, and TikToks", icon: "share" }
        ],
        rotate: "md:-rotate-6",
        zIndex: "z-10"
      },
      {
        name: "Prime",
        price: "₹7,999",
        period: "pack",
        desc: "A steady pipeline of high-retention content designed to aggressively scale your organic reach.",
        popular: true,
        features: [
          { text: "10 Viral Reels OR 3 YouTube Videos", icon: "tv" },
          { text: "Custom Storytelling Retention Hooks", icon: "film" },
          { text: "Premium Motion Graphics & VFX Inlays", icon: "color" },
          { text: "Cinematic Color Grading & Sound Mix", icon: "audio" },
          { text: "Click-Magnet CTR YouTube Thumbnails", icon: "award" },
          { text: "1-on-1 Dedicated Slack Editor Channel", icon: "support" }
        ],
        rotate: "rotate-0",
        zIndex: "z-20"
      },
      {
        name: "Elite",
        price: "Custom",
        period: "plan",
        desc: "Commercial-grade video marketing assets crafted to convert cold traffic into brand loyalists.",
        features: [
          { text: "High-Converting Ad Promo Campaigns", icon: "tv" },
          { text: "Advanced Sound Engineering & Scoring", icon: "audio" },
          { text: "Unique Custom Brand Assets & Intros", icon: "code" },
          { text: "Priority Same-Day Edit Turnarounds", icon: "zap" },
          { text: "Unlimited Collaborative Revisions", icon: "shield" },
          { text: "1-on-1 Creative Director Consultations", icon: "support" }
        ],
        rotate: "md:rotate-6",
        zIndex: "z-10"
      }
    ]
  }
};

export default function Pricing() {
  const [activeTab, setActiveTab] = useState("web");
  const whatsappNumber = "919000000000"; // Placeholder WhatsApp number

  const services = [
    { id: "web", name: "Web Development" },
    { id: "app", name: "App Development" },
    { id: "video", name: "Video Editing" }
  ];

  const getWhatsAppLink = (planName, serviceName) => {
    const text = encodeURIComponent(`Hi, I'm interested in the ${planName} package for ${serviceName}. Please provide more details on getting started.`);
    return `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${text}`;
  };

  return (
    <section 
      id="pricing" 
      className="w-full bg-white text-black py-24 md:py-32 px-6 md:px-12 lg:px-24 select-none relative overflow-hidden"
    >
      {/* Red Ambient Blurs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-[#DC143C]/3 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-[#DC143C]/3 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-[#DC143C] font-semibold tracking-wider text-sm uppercase block mb-3">
            Pricing
          </span>
          <h2 className="font-school font-extrabold text-5xl sm:text-6xl md:text-7xl uppercase leading-none tracking-tight text-neutral-950">
            PRICING — PLANS
          </h2>
          <p className="text-neutral-500 font-semibold mt-4 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Choose the perfect category to elevate your brand presence and scale your engineering capabilities.
          </p>
        </div>

        {/* Dynamic Selector Tabs Switcher */}
        <div className="flex justify-center mb-20">
          <div className="flex bg-neutral-950/95 p-1.5 rounded-full border border-neutral-800 relative">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`relative px-4 sm:px-6 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-widest transition-colors duration-300 z-10 cursor-pointer ${
                  activeTab === service.id ? 'text-white' : 'text-neutral-400 hover:text-white'
                }`}
              >
                {service.name}
                {activeTab === service.id && (
                  <motion.div
                    layoutId="activePricingTab"
                    className="absolute inset-0 bg-[#DC143C] rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards Grid container */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-6 lg:gap-8 max-w-6xl mx-auto py-12">
          <AnimatePresence mode="wait">
            {pricingData[activeTab].plans.map((plan, index) => {
              const serviceName = pricingData[activeTab].name;
              
              if (plan.popular) {
                // HIGHLIGHTED PRO CARD (Floating Center Card in Deep Black)
                return (
                  <motion.div
                    key={`${activeTab}-${plan.name}`}
                    initial={{ opacity: 0, y: 60, rotate: 0 }}
                    animate={{ opacity: 1, y: -12, rotate: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ type: "spring", duration: 0.7 }}
                    className="relative z-20 w-full sm:w-[360px] lg:w-[380px] scale-100 md:scale-105 rounded-3xl border-4 border-[#DC143C]/50 bg-neutral-950 px-8 py-12 lg:px-10 lg:py-14 text-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-transform hover:scale-[1.08] flex flex-col justify-between"
                  >
                    {/* Floating "Best Deal" Badge */}
                    <motion.div
                      animate={{ y: [10, 5, 10] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                      className="absolute -top-6 left-1/2 -translate-x-1/2 rounded-full bg-[#DC143C] px-6 py-1.5 text-xs font-black text-white shadow uppercase tracking-widest"
                    >
                      Best Deal
                    </motion.div>

                    <div>
                      {/* Name & Desc */}
                      <div className="mb-2 text-xl lg:text-2xl font-black uppercase tracking-wide text-white">{plan.name}</div>
                      <p className="text-neutral-300 text-xs sm:text-sm font-semibold mb-6 leading-relaxed">
                        {plan.desc}
                      </p>

                      {/* Price */}
                      <div className="mb-6 flex items-baseline gap-1">
                        <span className="text-4xl lg:text-5xl font-black tracking-tight text-white">{plan.price}</span>
                        {plan.price !== "Custom" && (
                          <span className="text-neutral-400 text-xs sm:text-sm uppercase tracking-wider">/ {plan.period}</span>
                        )}
                      </div>

                      <div className="w-full h-px bg-neutral-800 mb-6" />

                      {/* Features */}
                      <ul className="mb-8 space-y-4 text-sm lg:text-base font-semibold text-neutral-200">
                        {plan.features.map((feature, fIdx) => {
                          const IconComponent = IconMap[feature.icon] || ShieldCheck;
                          return (
                            <li key={fIdx} className="flex items-center gap-3">
                              <IconComponent className="w-[18px] h-[18px] flex-shrink-0 text-[#DC143C]" />
                              <span>{feature.text}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <a
                      href={getWhatsAppLink(plan.name, serviceName)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full rounded-2xl bg-white py-4 font-extrabold text-sm sm:text-base text-black hover:bg-neutral-200 transition uppercase tracking-wider flex items-center justify-center gap-2 group/btn"
                    >
                      {plan.price === "Custom" ? "Get Custom Quote" : `Choose ${plan.name}`}
                      <ArrowRight size={16} className="transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </a>
                  </motion.div>
                );
              } else {
                // STARTER AND ENTERPRISE CARDS (Slanted Cards in Solid White)
                return (
                  <motion.div
                    key={`${activeTab}-${plan.name}`}
                    initial={{ opacity: 0, y: 40, rotate: 0 }}
                    animate={{ opacity: 1, y: 0, rotate: index === 0 ? -4 : 4 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ type: "spring", duration: 0.6 }}
                    className={`relative z-10 w-full sm:w-[300px] lg:w-[320px] rounded-2xl border border-neutral-200 bg-white px-6 py-10 lg:px-8 text-neutral-800 shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-transform hover:scale-105 ${plan.zIndex} flex flex-col justify-between`}
                  >
                    <div>
                      {/* Name & Desc */}
                      <div className="mb-2 text-lg lg:text-xl font-bold uppercase tracking-wide text-[#DC143C]">{plan.name}</div>
                      <p className="text-neutral-500 text-xs sm:text-sm font-semibold mb-6 leading-relaxed">
                        {plan.desc}
                      </p>

                      {/* Price */}
                      <div className="mb-6 flex items-baseline gap-1">
                        <span className="text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-950">{plan.price}</span>
                        {plan.price !== "Custom" && (
                          <span className="text-neutral-400 text-xs uppercase tracking-wider">/ {plan.period}</span>
                        )}
                      </div>

                      <div className="w-full h-px bg-neutral-100 mb-6" />

                      {/* Features */}
                      <ul className="mb-8 space-y-4 text-xs lg:text-sm font-semibold text-neutral-600">
                        {plan.features.map((feature, fIdx) => {
                          const IconComponent = IconMap[feature.icon] || ShieldCheck;
                          return (
                            <li key={fIdx} className="flex items-center gap-3">
                              <IconComponent className="w-[18px] h-[18px] flex-shrink-0 text-[#DC143C]" />
                              <span>{feature.text}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <a
                      href={getWhatsAppLink(plan.name, serviceName)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full rounded-2xl bg-[#DC143C] py-3.5 font-bold text-xs sm:text-sm text-white hover:bg-[#b01030] transition uppercase tracking-wider flex items-center justify-center gap-2 group/btn"
                    >
                      {plan.price === "Custom" ? "Get Custom Quote" : `Choose ${plan.name}`}
                      <ArrowRight size={14} className="transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </a>
                  </motion.div>
                );
              }
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
