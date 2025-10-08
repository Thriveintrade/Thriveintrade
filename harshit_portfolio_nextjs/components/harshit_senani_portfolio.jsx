import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Briefcase, Mail, Menu, X } from "lucide-react";
import Lottie from "react-lottie-player";

export default function HarshitSenaniPortfolio() {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const containerRef = useRef(null);
  const lockRef = useRef(false);

  const sections = ["hero", "about", "services", "contact"];

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onWheel = (e) => {
      if (lockRef.current) return;
      const delta = e.deltaY || e.wheelDelta;
      if (Math.abs(delta) < 10) return;
      lockRef.current = true;
      if (delta > 0) moveNext(); else movePrev();
      setTimeout(() => (lockRef.current = false), 900);
    };

    let startX = 0;
    let startY = 0;
    const onTouchStart = (ev) => {
      const t = ev.touches[0]; startX = t.clientX; startY = t.clientY;
    };
    const onTouchEnd = (ev) => {
      if (lockRef.current) return;
      const t = ev.changedTouches[0];
      const dx = t.clientX - startX; const dy = t.clientY - startY;
      if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;
      lockRef.current = true;
      if (dx < 0) moveNext(); else movePrev();
      setTimeout(() => (lockRef.current = false), 900);
    };

    el.addEventListener("wheel", onWheel, { passive: true });
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [index]);

  const moveNext = () => setIndex((i) => Math.min(i + 1, sections.length - 1));
  const movePrev = () => setIndex((i) => Math.max(i - 1, 0));
  const goTo = (i) => setIndex(Math.max(0, Math.min(i, sections.length - 1)));

  const lottieUrls = {
    hero: "https://assets3.lottiefiles.com/packages/lf20_5ngs2ksb.json",
    about: "https://assets7.lottiefiles.com/packages/lf20_tutvdkg0.json",
    services: "https://assets4.lottiefiles.com/packages/lf20_w51pcehl.json",
    contact: "https://assets10.lottiefiles.com/packages/lf20_jz1q8hbq.json",
    greenParticles: "https://assets2.lottiefiles.com/packages/lf20_tll0j4bb.json",
    avatar: "https://assets5.lottiefiles.com/packages/lf20_nhkhh0ms.json"
  };

  return (
    <div className="min-h-screen h-screen bg-gray-900 text-gray-100 overflow-hidden relative">
      <AnimatePresence>
        {loading && (
          <motion.div key="loader" initial={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1.6, ease: "linear" }} className="w-28 h-28 rounded-3xl bg-white/5 flex items-center justify-center shadow-2xl">
              <motion.div animate={{ scale: [1, 0.85, 1.1, 1] }} transition={{ repeat: Infinity, duration: 1.3 }} className="w-12 h-12 rounded-full bg-white/80" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Toggle (Always Visible) */}
      <div className="fixed top-6 left-6 z-50">
        <button onClick={() => setMenuOpen(!menuOpen)} className="p-3 rounded-full bg-black/50 border border-green-400/50 hover:bg-black/70">
          {menuOpen ? <X size={24} className="text-green-400" /> : <Menu size={24} className="text-green-400" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} transition={{ type: 'spring', stiffness: 80, damping: 18 }} className="fixed inset-y-0 left-0 w-64 bg-black/80 backdrop-blur z-40 p-6 flex flex-col justify-between">
            <div className="flex flex-col gap-6 mt-12">
              {sections.map((s, i) => (
                <button key={s} onClick={() => { goTo(i); setMenuOpen(false); }} className="text-green-400 text-lg font-semibold hover:text-white transition">{s.charAt(0).toUpperCase() + s.slice(1)}</button>
              ))}
            </div>
            <button onClick={() => { goTo(3); setMenuOpen(false); }} className="mt-8 px-4 py-2 rounded-lg bg-green-500 text-black font-semibold hover:bg-green-600 transition">Hire Me</button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Horizontal Scroll Container */}
      <motion.div ref={containerRef} className="w-[400vw] h-screen flex" animate={{ x: `-${index * 100}vw` }} transition={{ type: "spring", stiffness: 90, damping: 18 }}>
        <Panel key="hero" id="hero">
          <LottieBackground url={lottieUrls.hero} intensity={0.85} />
          <GreenAnimatedLottie url={lottieUrls.greenParticles} />
          <FloatingAvatar url={lottieUrls.avatar} />
          <PanelContent index={index} myIndex={0}>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Hi, I’m <span className="text-green-400">Harshit Senani</span></h1>
            <p className="mt-4 text-gray-300 max-w-2xl">Web Developer • SEO Specialist • Performance Marketing — I design fast, accessible websites and marketing that converts. 5 years in the industry with 50+ clients.</p>
          </PanelContent>
        </Panel>

        <Panel key="about" id="about">
          <LottieBackground url={lottieUrls.about} intensity={0.9} />
          <GreenAnimatedLottie url={lottieUrls.greenParticles} />
          <FloatingAvatar url={lottieUrls.avatar} />
          <PanelContent index={index} myIndex={1}>
            <h2 className="text-3xl font-bold">About me</h2>
            <p className="mt-4 text-gray-300 max-w-3xl">I started building websites and marketing campaigns 5 years ago — what began as freelance projects grew into a focus on building performant front-ends and SEO-first strategies. I value clean code, measurable marketing, and collaborative client relationships.</p>
          </PanelContent>
        </Panel>

        <Panel key="services" id="services">
          <LottieBackground url={lottieUrls.services} intensity={0.9} />
          <PanelContent index={index} myIndex={2}>
            <h2 className="text-3xl font-bold">Services</h2>
          </PanelContent>
        </Panel>

        <Panel key="contact" id="contact">
          <LottieBackground url={lottieUrls.contact} intensity={0.85} />
          <PanelContent index={index} myIndex={3}>
            <h2 className="text-3xl font-bold">Let's work together</h2>
          </PanelContent>
        </Panel>
      </motion.div>
    </div>
  );
}

const Panel = ({ children, id }) => <section id={id} className="w-screen h-screen relative flex items-center justify-center">{children}</section>;

const PanelContent = ({ children, index, myIndex }) => {
  const isActive = index === myIndex;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={
        isActive
          ? { opacity: 1, scale: 1 }
          : { opacity: 0, scale: 0.98 }
      }
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}; // ✅ <-- Missing closing brace added here

const LottieBackground = ({ url, intensity }) => (
  <Lottie
    loop
    animationData={null}
    play
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      opacity: intensity,
      pointerEvents: "none",
    }}
    path={url}
  />
);

const FloatingAvatar = ({ url }) => (
  <motion.div
    initial={{ scale: 0.95, y: 10 }}
    animate={{ y: [0, -10, 0], scale: [0.95, 1, 0.95] }}
    transition={{ duration: 4, repeat: Infinity }}
    className="absolute w-40 h-40 rounded-full overflow-hidden border-4 border-green-400"
  >
    <Lottie loop animationData={null} play path={url} />
  </motion.div>
);

const GreenAnimatedLottie = ({ url }) => (
  <Lottie
    loop
    animationData={null}
    play
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      opacity: 0.4,
    }}
    path={url}
  />
);
