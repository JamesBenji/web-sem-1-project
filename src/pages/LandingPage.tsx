import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { Search, Heart, ShieldCheck, Star, ArrowRight, BookOpen, Smartphone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// --- NAVIGATION COMPONENT ---
export const NavBar = () => {
  return (
    <nav className="h-20 flex justify-between items-center px-12 py-8 fixed top-0 w-full z-50 bg-brand-50/80 backdrop-blur-md border-b border-brand-100">
      <div className="text-2xl font-bold tracking-tighter uppercase text-brand-900">Tiny Spoon.</div>
      <div className="flex align-middle justify-center gap-8">
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-brand-700 my-auto">
          <a href="#" className="hover:text-brand-500 transition-colors">Recipes</a>
          <a href="#" className="hover:text-brand-500 transition-colors">About</a>
          <a href="#" className="hover:text-brand-500 transition-colors">Contact</a>
        </div>
        <button className="flex items-center bg-brand-900 text-brand-50 px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-brand-700 transition-all shadow-md rounded-full border-2 border-white">
          <Search size={16} className="mr-2" /> Find Recipes
        </button>
      </div>
    </nav>
  );
};

export default function LandingPage() {
  const mainRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. 3D Spatial Zoom Effect
      gsap.to(".grid-item", {
        scale: 4,
        z: 500,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".zoom-section",
          start: "top top",
          end: "+=2000",
          scrub: 1,
          pin: true,
        },
      });

      // 2. Video Tabs Sync Logic
      const sections = gsap.utils.toArray('.tabs-content-block');
      sections.forEach((section: any, i) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onToggle: self => {
            if (self.isActive) {
              setActiveVideo(i);
            }
          }
        });
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  const [activeVideo, setActiveVideo] = React.useState(0);

  return (
    <div ref={mainRef} className="bg-brand-50 text-brand-950 selection:bg-brand-200 overflow-x-hidden">
      <NavBar />

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 1200 500" preserveAspectRatio="none">
            <path d="M0 160 C 250 80 450 240 650 160 S 1000 80 1200 160" fill="none" stroke="#fda5d5" strokeWidth="2" />
          </svg>
        </div>
        
        <div className="container mx-auto px-6 text-center z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-widest mb-6">
              The Art of Weaning
            </span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-brand-900 mb-8 leading-[0.9]">
              Nourishing <br /> Their <span className="text-brand-500 italic">First Steps</span>.
            </h1>
            <p className="max-w-xl mx-auto text-lg text-brand-700 font-medium leading-relaxed mb-10">
              Expertly curated recipes designed to build a lifetime of healthy eating, 
              delivered with love and professional care.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="px-10 py-4 bg-brand-900 text-white rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-xl">
                Shop the Collection
              </button>
              <button className="px-10 py-4 bg-white text-brand-900 border-2 border-brand-100 rounded-full font-bold uppercase tracking-widest hover:bg-brand-50 transition-colors">
                Explore Free Recipes
              </button>
            </div>
          </motion.div>
        </div>

        {/* Floating Decorative Elements */}
        <motion.div 
          animate={{ y: [0, -20, 0] }} 
          transition={{ repeat: Infinity, duration: 4 }}
          className="absolute right-[10%] top-[25%] w-32 h-32 bg-brandBlue-100 rounded-full blur-3xl opacity-60"
        />
      </section>

      {/* --- 3D SPATIAL ZOOM (The Core Values) --- */}
      <section className="zoom-section h-screen bg-brand-900 flex items-center justify-center overflow-hidden">
        <div className="grid grid-cols-3 md:grid-cols-5 gap-8 p-10 w-full max-w-6xl">
          {['Safe', 'Healthy', 'Simple', 'Curated', 'Expert', 'Trusted', 'Love', 'Pure', 'Natural', 'Safety First'].map((item, i) => (
            <div key={i} className="grid-item text-brand-200 text-2xl font-bold uppercase tracking-tighter opacity-80 border border-brand-700 p-8 rounded-2xl flex items-center justify-center text-center">
              {item}
            </div>
          ))}
          <div className="grid-item col-span-full text-brand-50 text-5xl md:text-7xl font-bold text-center py-20">
            TINY SPOONS.
          </div>
        </div>
      </section>

      {/* --- STICKY FULL PAGE SLIDES (The Journey) --- */}
      <section className="relative">
        {/* Slide 1 */}
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-brand-50 px-6">
          <div className="max-w-4xl grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] bg-gray-200">
               {/* <img src={RealLifePhoto1} className="object-cover h-full w-full" /> */}
               <div className="w-full h-full bg-brand-200 flex items-center justify-center italic text-brand-700">Mother & Baby Photo</div>
            </div>
            <div>
              <h2 className="text-5xl font-bold text-brand-900 leading-tight mb-6 tracking-tighter">The transition to solids is a milestone of love.</h2>
              <p className="text-brand-700 text-lg">We provide the safety of professional guidance combined with the warmth of a home-cooked meal.</p>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-brandBlue-50 px-6">
           <div className="max-w-4xl grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-5xl font-bold text-brandBlue-900 leading-tight mb-6 tracking-tighter">Science-backed nutrition for tiny tummies.</h2>
              <p className="text-brandBlue-800 text-lg">Every recipe is vetted to ensure your baby gets exactly what they need at every stage of weaning.</p>
            </div>
            <div className="order-1 md:order-2 rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] bg-brandBlue-200 flex items-center justify-center italic text-brandBlue-700">
               Nutritional Content Photo
            </div>
          </div>
        </div>
      </section>

      {/* --- PINNED VIDEO TABS (The Products) --- */}
      <section className="relative flex flex-col md:flex-row bg-white">
        {/* Left Side: Content */}
        <div className="w-full md:w-1/2 px-12 py-24">
          <div className="tabs-content-block h-screen flex flex-col justify-center">
            <Smartphone size={48} className="text-brand-500 mb-6" />
            <h3 className="text-4xl font-bold text-brand-900 mb-4 tracking-tight">The Digital Experience</h3>
            <p className="text-brand-700 text-lg mb-8">Access 200+ recipes on the go. Perfectly categorized by age and ingredient.</p>
            <ul className="space-y-4 text-brand-600 font-medium">
              <li className="flex items-center"><Star size={18} className="mr-2 text-brand-400" /> Filter by allergens</li>
              <li className="flex items-center"><Star size={18} className="mr-2 text-brand-400" /> Weekly meal planners</li>
            </ul>
          </div>

          <div className="tabs-content-block h-screen flex flex-col justify-center">
            <BookOpen size={48} className="text-brand-500 mb-6" />
            <h3 className="text-4xl font-bold text-brand-900 mb-4 tracking-tight">The Physical Heirloom</h3>
            <p className="text-brand-700 text-lg mb-8">A premium, high-grade linen bound book for your kitchen counter. Designed to last.</p>
            <ul className="space-y-4 text-brand-600 font-medium">
              <li className="flex items-center"><Star size={18} className="mr-2 text-brand-400" /> High-grade typography</li>
              <li className="flex items-center"><Star size={18} className="mr-2 text-brand-400" /> Wipe-clean premium pages</li>
            </ul>
          </div>
        </div>

        {/* Right Side: Pinned Video/Image */}
        <div className="hidden md:block w-1/2 sticky top-0 h-screen overflow-hidden bg-brand-100">
           <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-4/5 h-4/5 rounded-2xl bg-white shadow-2xl flex items-center justify-center overflow-hidden">
                {/* Dynamically swap content based on scroll position */}
                {activeVideo === 0 ? (
                  <div className="text-brand-500 animate-pulse font-bold uppercase tracking-widest">App Demo Video</div>
                ) : (
                  <div className="text-brand-900 animate-pulse font-bold uppercase tracking-widest">Book Showcase Video</div>
                )}
             </div>
           </div>
        </div>
      </section>

      {/* --- MARQUEE TEXT --- */}
      <div className="py-20 bg-brand-950 overflow-hidden whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }} 
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-20"
        >
          {[1,2,3,4,5].map((_) => (
            <span key={_} className="text-6xl font-black text-brand-800 uppercase italic opacity-50">
              High-Grade • Safe • Professional • Well-Curated • High-Grade • Safe
            </span>
          ))}
        </motion.div>
      </div>

      {/* --- FOOTER CTA --- */}
      <footer className="bg-brand-50 py-24 px-12 border-t border-brand-200 text-center">
        <h2 className="text-5xl font-bold text-brand-900 tracking-tighter mb-8">Ready to start your journey?</h2>
        <p className="text-brand-700 mb-12 max-w-md mx-auto">Join 10,000+ mothers who trust Tiny Spoons for their weaning transition.</p>
        <div className="flex justify-center gap-6">
          <Heart className="text-brand-500 fill-brand-500" />
          <ShieldCheck className="text-brand-500" />
          <Star className="text-brand-500" />
        </div>
        <div className="mt-20 text-xs font-bold uppercase tracking-widest text-brand-400">
          © {new Date().getFullYear()} Tiny Spoons. Built for Love.
        </div>
      </footer>
    </div>
  );
}