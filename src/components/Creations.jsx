import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "CAF Civil Services",
    category: "Construction & Engineering",
    link: "https://seosixofficial.github.io/construction1/",
    image: "/images/civil.jpg",
    align: "right"
  },
  {
    id: 2,
    title: "TakeWake Cafe",
    category: "Cafe & Coffee Shop",
    link: "https://seosixofficial.github.io/cafe/",
    image: "/images/takewake.jpg",
    align: "left"
  },
  {
    id: 3,
    title: "Tek Monk",
    category: "Screen Mirroring App",
    link: "https://screenmirror-59eb6.web.app/",
    image: "/images/tekmonk.jpg",
    align: "center"
  },
  {
    id: 4,
    title: "Smartbill",
    category: "Retail Billing Software",
    link: "https://seosixofficial.github.io/smartbill_site/",
    image: "/images/smartbill.png",
    align: "left"
  }
];


const imageVariants = {
  hidden: { 
    scale: 1.12,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 1, 0.5, 1] 
    }
  },
  visible: { 
    scale: 1.0,
    transition: { 
      duration: 1.2, 
      ease: [0.25, 1, 0.5, 1] 
    }
  }
};

const overlayVariants = {
  hidden: { 
    x: "0%",
    transition: { 
      duration: 0.8, 
      ease: [0.25, 1, 0.5, 1] 
    }
  },
  visible: { 
    x: "100%",
    transition: { 
      duration: 1.1, 
      ease: [0.25, 1, 0.5, 1] 
    }
  }
};

const textVariants = {
  hidden: { 
    opacity: 0, 
    y: 15,
    transition: { 
      duration: 0.5, 
      ease: "easeIn" 
    }
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: "easeOut",
      delay: 0.25
    }
  }
};

export default function Creations() {
  return (
    <section 
      id="creation" 
      className="w-full bg-black text-white py-24 md:py-32 px-6 md:px-12 lg:px-24 select-none relative overflow-hidden"
    >
      {/* Background Accent Gradients */}
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-[#DC143C]/3 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 rounded-full bg-[#DC143C]/3 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 md:mb-28">
          <span className="text-[#DC143C] font-semibold tracking-wider text-sm uppercase block mb-3">
            Portfolio
          </span>
          <h2 className="font-school font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase leading-none tracking-tight">
            SELECTED — WORK
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="flex flex-col gap-24 md:gap-32">
          {projects.map((project) => {
            // Determine alignment classes
            let alignmentClass = "mx-auto w-full md:w-[82%]"; // Center
            if (project.align === "left") {
              alignmentClass = "mr-auto w-full md:w-[62%]";
            } else if (project.align === "right") {
              alignmentClass = "ml-auto w-full md:w-[62%]";
            }

            return (
              <div 
                key={project.id} 
                className={`${alignmentClass} flex flex-col group`}
              >
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block cursor-pointer outline-none"
                >
                  {/* Image Container with Scroll Mask Reveal */}
                  <div className="relative overflow-hidden rounded-[24px] md:rounded-[32px] aspect-[16/9] bg-neutral-950 border border-neutral-900">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: "some" }}
                      variants={imageVariants}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                    {/* Sliding Reveal Overlay Cover */}
                    <motion.div
                      className="absolute inset-0 bg-neutral-950 pointer-events-none z-10"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: "some" }}
                      variants={overlayVariants}
                    />
                  </div>

                  {/* Metadata Row */}
                  <motion.div 
                    className="flex justify-between items-center mt-5 px-1 md:px-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: "some" }}
                    variants={textVariants}
                  >
                    <h4 className="font-extrabold text-xl md:text-2xl text-white tracking-wide uppercase group-hover:text-[#DC143C] transition-colors duration-200">
                      {project.title}
                    </h4>
                    <p className="text-xs md:text-sm text-neutral-500 font-custom font-semibold tracking-widest uppercase">
                      {project.category}
                    </p>
                  </motion.div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
