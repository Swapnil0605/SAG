import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  Lock,
  Building2,
  Sparkles,
} from 'lucide-react';
import { CATALOGUE_PRODUCTS, DetailedProduct } from '../data/productCatalogueData';

interface ProductDetailPageProps {
  initialProductId?: string;
  onBack: () => void;
  onNavigateContact?: (productTitle?: string) => void;
  onSelectProduct?: (productId: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  initialProductId = 'sag-net-catcher',
  onBack,
  onNavigateContact,
}) => {
  const [currentId, setCurrentId] = useState<string>(initialProductId);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (initialProductId && CATALOGUE_PRODUCTS[initialProductId]) {
      setCurrentId(initialProductId);
    }
  }, [initialProductId]);

  useEffect(() => {
    setActiveStep(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentId]);

  const product: DetailedProduct =
    CATALOGUE_PRODUCTS[currentId] ||
    CATALOGUE_PRODUCTS[`sag-${currentId}`] ||
    CATALOGUE_PRODUCTS[currentId.replace(/^sag-/, '')] ||
    CATALOGUE_PRODUCTS['yamraj'] ||
    CATALOGUE_PRODUCTS['sag-net-catcher'];


  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello SAG Aerospace and Defence, I would like to request an official technical briefing and demonstration details for the ${product.title}.`
    );
    window.open(`https://wa.me/919113867676?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen text-slate-100 font-sans selection:bg-red-600 selection:text-white bg-[#07090b] relative pb-28">
      {/* =========================================================================
          1. HERO SECTION (100% FULL-WIDTH EDGE-TO-EDGE IMMERSIVE ARTWORK HERO - NOT A CARD)
          ========================================================================= */}
      <section className="relative w-full min-h-[100svh] lg:h-screen lg:min-h-screen flex flex-col justify-between border-b border-neutral-800/80 overflow-hidden bg-[#07090b]">
        {/* Full-Bleed Artwork Image Background across 100% viewport width */}
        <div className="absolute inset-0 z-0">
          <img
            src={product.heroImage}
            alt={product.title}
            className="w-full h-full object-cover filter contrast-105 brightness-100 transition-all duration-700"
            style={{
              objectPosition: product.heroImagePosition || 'center center',
            }}
          />
          {/* Directional gradient on the left so the product on the center-right is fully uncovered and visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07090b] via-transparent to-black/20" />
        </div>

        {/* Top Breadcrumb & Quick Switch Bar (Integrated smoothly inside Hero) */}
        <div className="relative z-10 w-full border-b border-white/10 bg-black/40 backdrop-blur-md pt-24 sm:pt-28 pb-4">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2.5 text-xs font-mono">
                <button
                  type="button"
                  onClick={onBack}
                  className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors cursor-pointer group"
                >
                  <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                  <span>ALL PRODUCTS</span>
                </button>
                <span className="text-neutral-500">/</span>
                <span className="text-neutral-300 uppercase">{product.category}</span>
                <span className="text-neutral-500">/</span>
                <span className="text-red-500 font-bold">{product.title}</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-600/60 text-emerald-400 text-[11px] font-mono font-bold flex items-center gap-1.5 backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{product.statusBadge}</span>
                </div>
                <button
                  type="button"
                  onClick={onBack}
                  className="text-xs font-mono px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-neutral-200 hover:text-white transition-colors cursor-pointer backdrop-blur-sm"
                >
                  Return to Grid
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Center Content: Title, Tagline & Lead Description */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-20 my-auto">
          <div className="max-w-2xl lg:max-w-xl xl:max-w-2xl space-y-4">
            <div>
              <h1 className="text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-tight drop-shadow-2xl">
                {product.title}
              </h1>
              <p className="text-sm sm:text-xl font-mono font-bold tracking-[0.22em] text-neutral-200 mt-3 uppercase drop-shadow">
                {product.tagline}
              </p>
            </div>

            <p className="text-xs sm:text-base md:text-lg text-neutral-200 leading-relaxed font-normal max-w-xl drop-shadow">
              {product.leadDescription}
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MAIN CONTENT AREA (SUBSEQUENT SECTIONS)
          ========================================================================= */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-16 sm:space-y-24">

        {/* =========================================================================
            2. HOW IT OPERATES - 4-STEP TACTICAL ENGAGEMENT SEQUENCE
            ========================================================================= */}
        <section className="rounded-3xl bg-[#0c1013] border border-neutral-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono font-bold tracking-[0.25em] text-red-500 uppercase block mb-1">
                OPERATIONAL TIMELINE
              </span>
              <h2 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">
                HOW IT OPERATES
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 font-mono max-w-md">
              A 4-step sequence designed for seamless frontline execution and rapid tactical effectiveness.
            </p>
          </div>

          {/* Stepper Grid (4 Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {product.howItOperates.map((st, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={st.num}
                  onClick={() => setActiveStep(idx)}
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? 'bg-gradient-to-b from-[#18232c] to-[#0f161c] border-red-500 shadow-xl shadow-red-950/40'
                      : 'bg-[#101418] border-neutral-800/80 hover:border-neutral-700 hover:bg-[#13181d]'
                  }`}
                >
                  <div>
                    {/* Top step tag */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-2xl font-black font-mono ${isActive ? 'text-red-500' : 'text-neutral-500'}`}>
                        {st.num}
                      </span>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-black/50 border border-white/10 text-neutral-400 uppercase">
                        {st.phase}
                      </span>
                    </div>

                    <h3 className="text-base font-bold uppercase text-white mb-2.5">
                      {st.title}
                    </h3>
                    <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                      {st.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/[0.08] text-[11px] font-mono text-neutral-400">
                    {st.details}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================================
            3. SPECIAL HIGHLIGHT SECTION (If present in product)
            ========================================================================= */}
        {product.specialSection && (
          <section className="rounded-3xl bg-gradient-to-br from-[#0c1216] via-[#090d10] to-[#07090b] border border-neutral-800 p-6 sm:p-10 shadow-2xl">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-800/60 text-sky-400 text-xs font-mono font-bold mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{product.specialSection.tag}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                {product.specialSection.title}{' '}
                {product.specialSection.subtitle && (
                  <span className="text-neutral-500 text-lg sm:text-xl font-normal">
                    {product.specialSection.subtitle}
                  </span>
                )}
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 mt-2 max-w-2xl leading-relaxed">
                {product.specialSection.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {product.specialSection.items.map((item, iIdx) => (
                <div
                  key={iIdx}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-red-950/60 border border-red-800 text-red-400 flex items-center justify-center mb-3">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-white mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-neutral-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* =========================================================================
            4. KEY SPECIFICATIONS & IDEAL DEPLOYMENT DOMAINS
            ========================================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column (7 cols): Engineering Specifications Table */}
          <div className="lg:col-span-7 bg-[#0c1013] border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-xl">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-800">
              <div>
                <span className="text-xs font-mono font-bold tracking-[0.25em] text-red-500 uppercase block mb-1">
                  TECHNICAL DATASHEET
                </span>
                <h3 className="text-2xl font-black uppercase text-white tracking-tight">
                  KEY SPECIFICATIONS
                </h3>
              </div>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-neutral-900 border border-neutral-700 text-neutral-400 font-semibold">
                VERIFIED METRICS
              </span>
            </div>

            <div className="divide-y divide-neutral-800/80">
              {product.specs.map((spec, sIdx) => (
                <div
                  key={sIdx}
                  className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 hover:bg-white/[0.02] px-2 rounded-lg transition-colors"
                >
                  <span className="text-xs font-mono font-bold uppercase text-neutral-400 tracking-wider">
                    {spec.label}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white sm:text-right">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (5 cols): IDEAL FOR & SOVEREIGN BANNER */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#0c1013] border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-xl">
              <span className="text-xs font-mono font-bold tracking-[0.25em] text-red-500 uppercase block mb-1">
                DEPLOYMENT PROFILES
              </span>
              <h3 className="text-2xl font-black uppercase text-white tracking-tight mb-5">
                IDEAL FOR
              </h3>

              <div className="space-y-3">
                {product.idealFor.map((dom, dIdx) => (
                  <div
                    key={dIdx}
                    className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-neutral-700 transition-colors flex items-start gap-3.5"
                  >
                    <div className="p-2.5 rounded-xl bg-red-950/40 border border-red-800/50 text-red-400 flex-shrink-0">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white uppercase">
                        {dom.name}
                      </h4>
                      <span className="text-[10px] font-mono text-sky-400 block mt-0.5">
                        {dom.role}
                      </span>
                      <p className="text-[11px] text-neutral-400 mt-1 leading-relaxed">
                        {dom.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Official Tactical Motto Card */}
            <div className="rounded-3xl bg-gradient-to-r from-red-950/60 via-[#120a0d] to-black border border-red-900/60 p-6 sm:p-8 text-center shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />
              
              <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-red-400 block mb-2">
                MISSION DOCTRINE
              </span>
              <blockquote className="text-lg sm:text-xl font-bold uppercase tracking-wide text-white leading-snug">
                &ldquo;{product.mottoQuote}&rdquo;
              </blockquote>
              <p className="text-xs font-mono text-neutral-400 mt-3">
                SAG Aerospace and Defence Pvt Ltd · Directorate of Unmanned Systems
              </p>
            </div>

          </div>
        </section>

        {/* =========================================================================
            5. TECHNICAL EVALUATION & PROCUREMENT CALL-TO-ACTION
            ========================================================================= */}
        <section className="rounded-3xl bg-gradient-to-b from-[#131920] to-[#090d10] border border-neutral-700/80 p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-red-500 uppercase block">
              OFFICIAL ENGAGEMENT
            </span>
            <h2 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">
              SCHEDULE A FIELD EVALUATION TRIAL
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
              Direct technical liaisons available for armed forces command headquarters, paramilitary forces, homeland security departments, and authorized international partners.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-xs sm:max-w-none mx-auto">
              <button
                type="button"
                onClick={() => onNavigateContact?.(product.title)}
                className="w-full sm:w-auto text-center justify-center px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg shadow-red-600/30 cursor-pointer"
              >
                REQUEST TECHNICAL BRIEFING
              </button>
              <button
                type="button"
                onClick={handleWhatsApp}
                className="w-full sm:w-auto text-center justify-center px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors cursor-pointer"
              >
                WHATSAPP COMMAND CHANNEL
              </button>
            </div>

            <div className="pt-4 flex items-center justify-center gap-2 text-[11px] font-mono text-neutral-500">
              <Lock className="w-3.5 h-3.5 text-neutral-400" />
              <span>All communications and trial logistics protected under sovereign defence protocols.</span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ProductDetailPage;
