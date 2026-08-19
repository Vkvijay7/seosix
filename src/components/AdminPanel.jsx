import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock, Eye, Trash2, Edit, Plus, FileCode, Check, AlertCircle, ArrowLeft, RefreshCw, Upload, LogOut } from 'lucide-react';

const ADMIN_USERNAME = 'seosix';
const ADMIN_PASSWORD = 'templates1234';

const DEFAULT_TEMPLATES = [
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

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [templates, setTemplates] = useState([]);
  
  // Form State
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formTitle, setFormTitle] = useState('');
  const [formCategory, setFormCategory] = useState('Portfolio');
  const [formDescription, setFormDescription] = useState('');
  const [formPreviewLink, setFormPreviewLink] = useState('');
  
  const [formThumbnail, setFormThumbnail] = useState('');
  const [formSourceCode, setFormSourceCode] = useState('');
  const [formSourceCodeFilename, setFormSourceCodeFilename] = useState('');

  // Lock status persistence in session storage
  useEffect(() => {
    const isAuth = sessionStorage.getItem('seosix_admin_auth') === 'true';
    setIsAuthenticated(isAuth);

    const stored = localStorage.getItem('seosix_templates');
    if (stored) {
      try {
        setTemplates(JSON.parse(stored));
      } catch (err) {
        setTemplates(DEFAULT_TEMPLATES);
      }
    } else {
      localStorage.setItem('seosix_templates', JSON.stringify(DEFAULT_TEMPLATES));
      setTemplates(DEFAULT_TEMPLATES);
    }
  }, []);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (enteredUsername === ADMIN_USERNAME && enteredPassword === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('seosix_admin_auth', 'true');
      setErrorMsg('');
    } else {
      setErrorMsg('Incorrect credentials. Please try again.');
      setEnteredPassword('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('seosix_admin_auth');
  };

  // Process uploaded thumbnail file
  const handleThumbnailUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormThumbnail(reader.result); // Base64 data URL
    };
    reader.readAsDataURL(file);
  };

  // Process uploaded source code file
  const handleSourceCodeUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFormSourceCodeFilename(file.name);
    
    const reader = new FileReader();
    // For ZIP or binary, base64 data URL is required.
    // For plain HTML/CSS/JS, we can store as text. Let's read ZIP files as DataURL (base64) 
    // and text files as DataURL too (safest approach since our triggerDownload handles both dataURLs and text!).
    reader.onloadend = () => {
      setFormSourceCode(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleResetDefaults = () => {
    if (window.confirm('Are you sure you want to reset all templates to default? This will overwrite your current changes.')) {
      localStorage.setItem('seosix_templates', JSON.stringify(DEFAULT_TEMPLATES));
      setTemplates(DEFAULT_TEMPLATES);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this template?')) {
      const updated = templates.filter(t => t.id !== id);
      localStorage.setItem('seosix_templates', JSON.stringify(updated));
      setTemplates(updated);
    }
  };

  const handleEditClick = (template) => {
    setEditingId(template.id);
    setFormTitle(template.title);
    setFormCategory(template.category);
    setFormDescription(template.description);
    setFormPreviewLink(template.previewLink);
    setFormThumbnail(template.thumbnail);
    setFormSourceCode(template.sourceCode);
    setFormSourceCodeFilename(template.sourceCodeFilename || '');
    setIsEditing(true);
  };

  const handleAddNewClick = () => {
    setEditingId(null);
    setFormTitle('');
    setFormCategory('Portfolio');
    setFormDescription('');
    setFormPreviewLink('');
    setFormThumbnail('');
    setFormSourceCode('');
    setFormSourceCodeFilename('');
    setIsEditing(true);
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (!formTitle || !formDescription || !formPreviewLink || !formThumbnail || !formSourceCode) {
      alert('Please fill out all fields and upload both a thumbnail and source code file.');
      return;
    }

    let updatedTemplates;
    if (editingId) {
      // Edit existing
      updatedTemplates = templates.map(t => {
        if (t.id === editingId) {
          return {
            ...t,
            title: formTitle,
            category: formCategory,
            description: formDescription,
            previewLink: formPreviewLink,
            thumbnail: formThumbnail,
            sourceCode: formSourceCode,
            sourceCodeFilename: formSourceCodeFilename
          };
        }
        return t;
      });
    } else {
      // Create new
      const newTemplate = {
        id: 'user-' + Date.now(),
        title: formTitle,
        category: formCategory,
        description: formDescription,
        previewLink: formPreviewLink,
        thumbnail: formThumbnail,
        sourceCode: formSourceCode,
        sourceCodeFilename: formSourceCodeFilename
      };
      updatedTemplates = [newTemplate, ...templates];
    }

    localStorage.setItem('seosix_templates', JSON.stringify(updatedTemplates));
    setTemplates(updatedTemplates);
    setIsEditing(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="w-full min-h-screen bg-[#1b1b1b] flex flex-col justify-center items-center p-6 relative overflow-hidden font-sans select-none">
        {/* Glow ambient design */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-red-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] h-[350px] bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative max-w-md w-full bg-[#161616]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 text-center shadow-2xl flex flex-col items-center gap-6"
        >
          {/* Animated Lock Icon */}
          <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-red-500/10 border border-red-500/20 text-[#DC143C]">
            <Lock className="w-9 h-9" />
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-xl md:text-2xl font-bold tracking-widest text-[#FFF8E7] uppercase font-mono">
              Admin Portal
            </h1>
            <p className="text-xs tracking-wider text-white/40 uppercase font-mono">
              Authorized personnel only
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLoginSubmit} className="w-full flex flex-col gap-4">
            <div className="space-y-3.5">
              <input
                type="text"
                placeholder="Username"
                value={enteredUsername}
                onChange={(e) => setEnteredUsername(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 px-5 text-center text-sm font-semibold placeholder-white/30 text-white outline-none focus:border-[#DC143C] focus:bg-white/10 transition"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={enteredPassword}
                onChange={(e) => setEnteredPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 px-5 text-center text-sm font-semibold placeholder-white/30 text-white outline-none focus:border-[#DC143C] focus:bg-white/10 transition"
                required
              />
            </div>

            {errorMsg && (
              <div className="flex items-center justify-center gap-1.5 text-red-500 text-xs font-semibold uppercase tracking-wide">
                <AlertCircle size={14} />
                <span>{errorMsg}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-4 bg-[#DC143C] hover:bg-[#b01030] text-white font-extrabold uppercase text-xs tracking-widest rounded-2xl transition duration-300 shadow-[0_4px_15px_rgba(220,20,60,0.2)] select-none cursor-pointer"
            >
              Unlock Dashboard
            </button>
          </form>

          <div className="w-full h-px bg-white/10 my-1" />

          {/* Back links */}
          <div className="flex gap-6 text-xs text-white/50 font-semibold select-none">
            <a href="#home" className="hover:text-[#DC143C] transition">Home</a>
            <span>•</span>
            <a href="#templates" className="hover:text-[#DC143C] transition">Templates</a>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#1B1B1B] text-[#FFF8E7] pt-28 pb-20 px-6 md:px-12 relative overflow-hidden font-sans">
      {/* Background ambient blur */}
      <div className="absolute top-10 left-10 w-[450px] h-[450px] rounded-full bg-[#DC143C]/3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[550px] rounded-full bg-yellow-500/2 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Action Row */}
        <div className="flex flex-wrap items-center justify-between gap-6 mb-12 border-b border-white/5 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#DC143C] font-semibold tracking-widest text-xs uppercase font-mono">
                Management Console
              </span>
              <span className="bg-green-500/10 border border-green-500/20 text-green-500 text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-md flex items-center gap-1">
                <Check size={8} /> Authorized
              </span>
            </div>
            <h1 className="font-school font-black text-4xl sm:text-5xl md:text-6xl uppercase leading-none tracking-tight text-white">
              ADMIN — PANEL
            </h1>
          </div>

          <div className="flex items-center gap-3.5 select-none">
            <button
              onClick={handleResetDefaults}
              className="flex items-center gap-2 px-4 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-extrabold uppercase text-[10px] tracking-widest rounded-xl transition cursor-pointer"
              title="Reset templates to initial values"
            >
              <RefreshCw size={12} />
              <span>Reset Defaults</span>
            </button>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-3 bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 text-red-500 font-extrabold uppercase text-[10px] tracking-widest rounded-xl transition cursor-pointer"
            >
              <LogOut size={12} />
              <span>Lock Panel</span>
            </button>
          </div>
        </div>

        {/* Dashboard Panels */}
        <AnimatePresence mode="wait">
          {!isEditing ? (
            <motion.div
              key="dashboard-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Analytics Summary */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 select-none">
                <div className="bg-[#161616]/60 border border-white/5 rounded-2xl p-6 flex flex-col justify-between">
                  <span className="text-white/40 text-xs font-bold uppercase tracking-wider">Total Templates</span>
                  <span className="text-4xl font-school font-black text-white mt-2">{templates.length}</span>
                </div>
                <div className="bg-[#161616]/60 border border-white/5 rounded-2xl p-6 flex flex-col justify-between">
                  <span className="text-white/40 text-xs font-bold uppercase tracking-wider">Active Categories</span>
                  <span className="text-4xl font-school font-black text-white mt-2">
                    {new Set(templates.map(t => t.category)).size}
                  </span>
                </div>
                <div className="bg-[#161616]/60 border border-white/5 rounded-2xl p-6 flex flex-col justify-between">
                  <span className="text-white/40 text-xs font-bold uppercase tracking-wider">Admin Credentials</span>
                  <span className="text-xs font-mono text-[#DC143C] mt-2 font-bold select-text tracking-wider uppercase">
                    U: {ADMIN_USERNAME} | P: {ADMIN_PASSWORD}
                  </span>
                </div>
              </div>

              {/* Template Items Header */}
              <div className="flex items-center justify-between select-none">
                <h2 className="font-school font-black text-2xl uppercase tracking-wider">Templates List</h2>
                <button
                  onClick={handleAddNewClick}
                  className="flex items-center gap-2 px-5 py-3.5 bg-[#DC143C] hover:bg-[#b01030] text-white font-extrabold uppercase text-[10px] tracking-widest rounded-xl transition duration-300 shadow-[0_4px_12px_rgba(220,20,60,0.15)] cursor-pointer"
                >
                  <Plus size={14} />
                  <span>Create Template</span>
                </button>
              </div>

              {/* Templates Table/Grid for management */}
              {templates.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {templates.map(template => (
                    <div 
                      key={template.id}
                      className="bg-[#161616]/60 border border-white/5 rounded-3xl p-6 flex flex-col sm:flex-row gap-6 hover:border-white/10 transition-colors"
                    >
                      {/* Left Thumbnail Preview */}
                      <div className="w-full sm:w-28 h-20 bg-neutral-900 border border-white/5 rounded-xl overflow-hidden shrink-0 select-none">
                        <img 
                          src={template.thumbnail} 
                          alt="" 
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Right Details */}
                      <div className="flex-grow flex flex-col justify-between gap-4">
                        <div>
                          <div className="flex items-center justify-between gap-2 flex-wrap">
                            <h3 className="text-white font-bold text-base truncate max-w-[200px]">
                              {template.title}
                            </h3>
                            <span className="bg-white/5 border border-white/10 text-white/60 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md select-none">
                              {template.category}
                            </span>
                          </div>
                          <p className="text-[#FFF8E7]/50 text-xs font-light line-clamp-2 mt-1.5">
                            {template.description}
                          </p>
                          <div className="text-[10px] font-mono text-[#DC143C]/80 mt-2 truncate">
                            File: {template.sourceCodeFilename || 'index.html'}
                          </div>
                        </div>

                        {/* Actions row */}
                        <div className="flex items-center gap-3.5 pt-2 border-t border-white/5 select-none">
                          <button
                            onClick={() => handleEditClick(template)}
                            className="flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider text-[#FFF8E7]/60 hover:text-white transition cursor-pointer"
                          >
                            <Edit size={12} />
                            <span>Edit</span>
                          </button>
                          
                          <button
                            onClick={() => handleDelete(template.id)}
                            className="flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider text-red-500/80 hover:text-red-500 transition cursor-pointer ml-auto"
                          >
                            <Trash2 size={12} />
                            <span>Delete</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="w-full text-center py-20 bg-white/3 border border-white/5 rounded-3xl p-6">
                  <p className="text-[#FFF8E7]/50 text-sm">No templates listed in local storage. Click "Create Template" to add one.</p>
                </div>
              )}

              {/* View Templates Page */}
              <div className="flex justify-center pt-8 select-none">
                <a
                  href="#templates"
                  className="inline-flex items-center gap-2 text-xs text-[#FFF8E7]/60 hover:text-[#DC143C] font-semibold transition"
                >
                  <ArrowLeft size={14} />
                  <span>Go to Templates Live View</span>
                </a>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="edit-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-[#161616]/60 border border-white/5 rounded-3xl p-8 max-w-3xl mx-auto"
            >
              <h2 className="font-school font-black text-2xl uppercase tracking-wider mb-8">
                {editingId ? 'Edit Template' : 'Add New Template'}
              </h2>

              <form onSubmit={handleSave} className="space-y-6">
                
                {/* Title */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/50">Template Title</label>
                  <input
                    type="text"
                    value={formTitle}
                    onChange={(e) => setFormTitle(e.target.value)}
                    placeholder="e.g. Minimalist Designer Portfolio"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 px-4 text-xs font-semibold text-white outline-none focus:border-[#DC143C] focus:bg-white/10 transition"
                    required
                  />
                </div>

                {/* Category & Preview */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-white/50">Category</label>
                    <select
                      value={formCategory}
                      onChange={(e) => setFormCategory(e.target.value)}
                      className="w-full bg-[#161616] border border-white/10 rounded-xl py-3.5 px-4 text-xs font-semibold text-white outline-none focus:border-[#DC143C] transition cursor-pointer"
                    >
                      <option value="Portfolio">Portfolio</option>
                      <option value="Agency">Agency</option>
                      <option value="SaaS">SaaS</option>
                      <option value="Corporate">Corporate</option>
                      <option value="General">General Site</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-white/50">Live Preview Link</label>
                    <input
                      type="url"
                      value={formPreviewLink}
                      onChange={(e) => setFormPreviewLink(e.target.value)}
                      placeholder="https://example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 px-4 text-xs font-semibold text-white outline-none focus:border-[#DC143C] focus:bg-white/10 transition"
                      required
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/50">Description</label>
                  <textarea
                    value={formDescription}
                    onChange={(e) => setFormDescription(e.target.value)}
                    placeholder="Provide a comprehensive summary of features and layouts..."
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 px-4 text-xs font-semibold text-white outline-none focus:border-[#DC143C] focus:bg-white/10 transition"
                    required
                  />
                </div>

                {/* File Upload fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Thumbnail File upload */}
                  <div className="space-y-2.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-white/50">Thumbnail Image</label>
                    <div className="border-2 border-dashed border-white/10 rounded-2xl p-6 text-center hover:border-[#DC143C]/40 transition relative">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleThumbnailUpload}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <div className="flex flex-col items-center gap-2">
                        <Upload size={20} className="text-white/40" />
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-white/60">
                          {formThumbnail ? 'Change Thumbnail' : 'Upload Image'}
                        </span>
                        <span className="text-[9px] text-white/30">PNG, JPG, SVG up to 2MB</span>
                      </div>
                    </div>
                    {formThumbnail && (
                      <div className="flex items-center gap-2.5 bg-green-500/10 border border-green-500/20 text-green-500 p-2.5 rounded-xl text-[10px] font-bold uppercase tracking-wider select-none">
                        <Check size={12} />
                        <span>Thumbnail Loaded successfully</span>
                      </div>
                    )}
                  </div>

                  {/* Source Code File upload */}
                  <div className="space-y-2.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-white/50">Source Code File</label>
                    <div className="border-2 border-dashed border-white/10 rounded-2xl p-6 text-center hover:border-[#DC143C]/40 transition relative">
                      <input
                        type="file"
                        accept=".zip,.html,.css,.js,.txt"
                        onChange={handleSourceCodeUpload}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <div className="flex flex-col items-center gap-2">
                        <Upload size={20} className="text-white/40" />
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-white/60">
                          {formSourceCode ? 'Change Source File' : 'Upload File'}
                        </span>
                        <span className="text-[9px] text-white/30">ZIP, HTML, CSS, JS, TXT files</span>
                      </div>
                    </div>
                    {formSourceCode && (
                      <div className="flex items-center gap-2.5 bg-green-500/10 border border-green-500/20 text-green-500 p-2.5 rounded-xl text-[10px] font-bold uppercase tracking-wider">
                        <Check size={12} />
                        <span className="truncate max-w-[180px]">Loaded: {formSourceCodeFilename || 'code.txt'}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Form Actions */}
                <div className="flex items-center justify-end gap-3.5 pt-6 border-t border-white/5 select-none">
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-5 py-3.5 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-extrabold uppercase text-[10px] tracking-widest rounded-xl transition cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3.5 bg-[#DC143C] hover:bg-[#b01030] text-white font-extrabold uppercase text-[10px] tracking-widest rounded-xl transition duration-300 shadow-[0_4px_12px_rgba(220,20,60,0.15)] cursor-pointer border border-[#DC143C]"
                  >
                    {editingId ? 'Save Changes' : 'Publish Template'}
                  </button>
                </div>

              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
