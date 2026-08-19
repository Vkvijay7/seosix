import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ExternalLink, Search, FileCode, ArrowLeft, Layers } from 'lucide-react';
import ScrollIndicator from './ScrollIndicator';

const INITIAL_TEMPLATES = [
  {
    id: 'default-1',
    title: 'Sleek Developer Portfolio',
    category: 'Portfolio',
    description: 'An ultra-premium, dark-themed single-page portfolio with glowing ambient highlights, modern typography, and structured project sections.',
    previewLink: 'https://seosixofficial.github.io/construction1/',
    thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    sourceCodeFilename: 'portfolio-template.html',
    sourceCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Premium Developer Portfolio</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body { background-color: #0f0f11; color: #f3f4f6; font-family: 'Inter', sans-serif; }
    .glow { box-shadow: 0 0 80px rgba(220, 20, 60, 0.15); }
  </style>
</head>
<body class="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
  <div class="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none"></div>
  <div class="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
  <div class="max-w-2xl w-full bg-[#161619] border border-white/5 rounded-3xl p-8 md:p-12 text-center glow relative z-10 backdrop-blur-md">
    <span class="text-red-500 font-mono tracking-widest text-xs uppercase">Portfolio Template</span>
    <h1 class="text-4xl md:text-5xl font-black tracking-tight text-white mt-4 uppercase">Alex Morgan</h1>
    <p class="text-red-500/80 font-mono text-sm tracking-wider uppercase mt-1">Creative Tech Lead & Architect</p>
    <p class="text-neutral-400 text-sm leading-relaxed mt-6">
      Building ultra-premium digital interfaces, custom web experiences, and immersive products with state-of-the-art architectures.
    </p>
    <div class="flex flex-wrap justify-center gap-4 mt-8">
      <a href="#" class="px-6 py-3 bg-red-600 text-white font-extrabold uppercase text-xs tracking-wider rounded-xl hover:bg-red-700 transition">View Work</a>
      <a href="#" class="px-6 py-3 bg-[#1e1e24] text-neutral-300 font-extrabold uppercase text-xs tracking-wider rounded-xl hover:bg-[#25252d] transition border border-white/5">Let's Talk</a>
    </div>
  </div>
</body>
</html>`
  },
  {
    id: 'default-2',
    title: 'Kinetic Creative Studio',
    category: 'Agency',
    description: 'A bold, neon-highlighted design agency landing page with immersive grid items, high contrast layouts, and conversion-optimized call-to-actions.',
    previewLink: 'https://seosixofficial.github.io/cafe/',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    sourceCodeFilename: 'agency-template.html',
    sourceCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Creative Design Studio</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body { background-color: #0b0c10; color: #c5c6c7; font-family: 'Montserrat', sans-serif; }
    .neon-text { text-shadow: 0 0 10px #66fcf1; }
  </style>
</head>
<body class="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
  <div class="max-w-3xl w-full text-center relative z-10">
    <span class="text-[#66fcf1] font-mono tracking-widest text-xs uppercase font-bold">Design Agency Template</span>
    <h1 class="text-5xl md:text-7xl font-extrabold text-white mt-4 leading-none uppercase tracking-tight">KINETIC <span class="text-[#66fcf1] neon-text">STUDIO</span></h1>
    <p class="text-neutral-400 text-md leading-relaxed mt-6 max-w-xl mx-auto">
      We craft high-performance brand identities, interactive campaigns, and digital platforms that accelerate growth and engage modern audiences.
    </p>
    <div class="mt-10">
      <a href="#" class="px-8 py-4 bg-[#66fcf1] text-[#0b0c10] font-bold uppercase text-xs tracking-widest rounded-full hover:bg-[#45c2ba] transition duration-300 shadow-[0_4px_20px_rgba(102,252,241,0.3)]">Get in Touch</a>
    </div>
  </div>
</body>
</html>`
  },
  {
    id: 'default-3',
    title: 'Apex Realtime Analytics',
    category: 'SaaS',
    description: 'A modern SaaS marketing landing page featuring a layout optimized for product showcases, core feature grids, statistics panels, and tier pricing blocks.',
    previewLink: 'https://screenmirror-59eb6.web.app/',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    sourceCodeFilename: 'saas-template.html',
    sourceCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Apex SaaS Analytics</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body { background-color: #06070d; color: #94a3b8; font-family: 'Inter', sans-serif; }
  </style>
</head>
<body class="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
  <div class="max-w-4xl w-full bg-[#0b0f19] border border-white/10 rounded-2xl p-8 md:p-12 text-center relative z-10 shadow-2xl">
    <div class="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-xs font-semibold tracking-wide">
      <span class="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
      Version 2.0 Released
    </div>
    <h1 class="text-4xl md:text-6xl font-black text-white mt-6 leading-tight tracking-tight uppercase">Analyze Data <br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">In Realtime</span></h1>
    <p class="text-neutral-400 text-sm leading-relaxed mt-6 max-w-lg mx-auto">
      Consolidate all customer interaction logs, usage graphs, and database diagnostics in a single dashboard to scale fast.
    </p>
    <div class="mt-8 flex justify-center gap-4">
      <a href="#" class="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold text-xs uppercase tracking-wider rounded-lg hover:from-blue-600 hover:to-indigo-700 transition">Start Free Trial</a>
    </div>
  </div>
</body>
</html>`
  }
];

export default function Templates() {
  const [templates, setTemplates] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    // Load templates from LocalStorage, or set initial templates
    const stored = localStorage.getItem('seosix_templates');
    if (stored) {
      try {
        setTemplates(JSON.parse(stored));
      } catch (err) {
        setTemplates(INITIAL_TEMPLATES);
      }
    } else {
      localStorage.setItem('seosix_templates', JSON.stringify(INITIAL_TEMPLATES));
      setTemplates(INITIAL_TEMPLATES);
    }
  }, []);

  const triggerDownload = (template) => {
    const content = template.sourceCode;
    const filename = template.sourceCodeFilename || `${template.title.toLowerCase().replace(/\s+/g, '-')}-template.html`;

    try {
      let blob;
      if (content.startsWith('data:')) {
        // Handle uploaded binary file (base64 Data URL)
        const parts = content.split(',');
        const mime = parts[0].split(':')[1].split(';')[0];
        const base64 = parts[1];
        const binary = atob(base64);
        const array = [];
        for (let i = 0; i < binary.length; i++) {
          array.push(binary.charCodeAt(i));
        }
        blob = new Blob([new Uint8Array(array)], { type: mime });
      } else {
        // Handle normal text strings (the default templates HTML)
        blob = new Blob([content], { type: 'text/html' });
      }

      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      // Trigger Toast notification
      setToastMessage(`Downloading "${filename}"...`);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (error) {
      console.error('Download failed:', error);
      setToastMessage('Download failed. Check file integrity.');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  const categories = ['All', 'Portfolio', 'Agency', 'SaaS', 'Corporate', 'General'];

  const filteredTemplates = templates.filter(t => {
    const matchesCategory = selectedCategory === 'All' || t.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = t.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          t.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          t.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full min-h-screen bg-[#1B1B1B] text-[#FFF8E7] pt-28 pb-20 px-6 md:px-12 relative overflow-hidden font-sans">
      {/* Background Decorative Shaders */}
      <div className="absolute top-10 left-10 w-[450px] h-[450px] rounded-full bg-[#DC143C]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[550px] rounded-full bg-yellow-500/3 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Back Link */}
        <div className="mb-8">
          <a
            href="#home"
            className="inline-flex items-center gap-2 text-sm text-[#FFF8E7]/60 hover:text-[#DC143C] font-semibold transition-colors duration-200 select-none"
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </a>
        </div>

        {/* Header Section */}
        <div className="mb-14 text-left">
          <span className="text-[#DC143C] font-semibold tracking-widest text-xs uppercase block mb-3 font-mono">
            Premium Assets
          </span>
          <h1 className="font-school font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase leading-none tracking-tight text-white animate-fade-in">
            WEBSITE — TEMPLATES
          </h1>
          <p className="text-[#FFF8E7]/60 text-sm md:text-base max-w-xl mt-4 leading-relaxed font-sans font-light">
            Kickstart your next venture with our pre-built, production-ready website templates. Coded with performance and premium layouts in mind.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-white/5 pb-8">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-extrabold uppercase tracking-wider rounded-xl transition-all duration-300 select-none border cursor-pointer ${
                  selectedCategory.toLowerCase() === cat.toLowerCase()
                    ? 'bg-[#DC143C] border-[#DC143C] text-white shadow-[0_4px_15px_rgba(220,20,60,0.3)]'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 text-[#FFF8E7]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:max-w-xs select-none">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30">
              <Search size={16} />
            </span>
            <input
              type="text"
              placeholder="Search templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-10 pr-4 text-xs font-semibold placeholder-white/30 text-white outline-none focus:border-[#DC143C] focus:bg-white/10 transition-all duration-200"
            />
          </div>
        </div>

        {/* Templates Grid */}
        <AnimatePresence mode="popLayout">
          {filteredTemplates.length > 0 ? (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              layout
            >
              {filteredTemplates.map((template, idx) => (
                <motion.div
                  key={template.id}
                  layoutId={template.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group bg-[#161616]/70 border border-white/8 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between hover:border-[#DC143C]/20 transition-all duration-300 hover:shadow-[#DC143C]/5"
                >
                  {/* Thumbnail / Image Container */}
                  <div className="relative aspect-video w-full overflow-hidden bg-neutral-900 border-b border-white/5">
                    <img
                      src={template.thumbnail}
                      alt={template.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-black/80 backdrop-blur-md text-[#DC143C] border border-[#DC143C]/30 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-xl shadow-lg">
                        {template.category}
                      </span>
                    </div>
                  </div>

                  {/* Template Info Content */}
                  <div className="p-6 md:p-8 flex-grow flex flex-col justify-between gap-6">
                    <div className="space-y-3">
                      <h3 className="text-white font-school font-extrabold text-xl uppercase tracking-tight group-hover:text-[#DC143C] transition-colors duration-200">
                        {template.title}
                      </h3>
                      <p className="text-[#FFF8E7]/60 text-xs md:text-sm font-light leading-relaxed">
                        {template.description}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-3.5 pt-4">
                      {/* Live Preview Button */}
                      <a
                        href={template.previewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 px-4 py-3 border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-[#FFF8E7] font-extrabold uppercase text-[10px] tracking-widest rounded-2xl transition duration-300 select-none cursor-pointer"
                      >
                        <span>Preview</span>
                        <ExternalLink size={12} />
                      </a>

                      {/* Download Button */}
                      <button
                        onClick={() => triggerDownload(template)}
                        className="flex items-center justify-center gap-1.5 px-4 py-3 bg-[#DC143C] hover:bg-[#b01030] text-white font-extrabold uppercase text-[10px] tracking-widest rounded-2xl transition duration-300 shadow-[0_4px_12px_rgba(220,20,60,0.15)] select-none cursor-pointer border border-[#DC143C]"
                      >
                        <span>Download</span>
                        <Download size={12} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full flex flex-col items-center justify-center py-24 text-center border border-white/5 bg-white/3 rounded-3xl p-8"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#DC143C] mb-4">
                <Layers size={24} />
              </div>
              <h3 className="text-white font-school font-black text-xl uppercase tracking-wider mb-2">
                No Templates Found
              </h3>
              <p className="text-[#FFF8E7]/50 text-xs md:text-sm max-w-sm">
                We couldn't find any templates matching your search criteria. Try a different filter or search phrase.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Toast Notification for Download Status */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 bg-[#161616] border border-green-500/30 text-white rounded-2xl px-5 py-4 flex items-center gap-3 shadow-2xl max-w-sm select-none"
          >
            <div className="w-8 h-8 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 flex items-center justify-center shrink-0">
              <FileCode size={16} />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-extrabold uppercase tracking-wider text-green-500">Download Started</span>
              <span className="text-[11px] text-[#FFF8E7]/70 truncate max-w-[200px] mt-0.5">{toastMessage}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
