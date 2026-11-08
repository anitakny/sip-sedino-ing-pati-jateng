import React from 'react';
import {
  Compass,
  MapPin,
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Search,
  Layers,
  ShoppingBag,
  ExternalLink,
  Download
} from 'lucide-react';

interface HeroSectionProps {
  onExploreWisata: () => void;
  onExploreEkraf: () => void;
  onOpenMap: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreWisata,
  onExploreEkraf,
  onOpenMap
}) => {
  return (
    <div className="relative overflow-hidden bg-linear-to-b from-blue-50/70 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-950 py-12 md:py-20 border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      {/* Decorative ambient background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-400/10 dark:bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-5">
          {/* Tag Pill & Ambassador Badge */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0c2b64]/10 dark:bg-[#1a56a4]/30 border border-[#1a56a4]/30 text-[#0c2b64] dark:text-[#38bdf8] text-xs font-bold tracking-wide uppercase shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#1a56a4] animate-pulse" />
              <span>Portal Resmi SIP: Sedina ing Pati & Ekraf</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fbbf24]/15 border border-[#fbbf24]/30 text-[#b45309] dark:text-[#fbbf24] text-xs font-bold shadow-xs">
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-11-08_at_08.09.38_13c3ca8a.jpeg"
                alt="Ahmad Husnus Saqib"
                className="w-5 h-5 rounded-full object-cover border border-[#fbbf24]"
              />
              <span>Inisiasi Mas Saqib (Finalis Mas Mbak Jateng 2026)</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.12]">
            Eksplorasi Pesona Wisata & Kreativitas{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#0c2b64] via-[#1a56a4] to-[#2575fc] dark:from-[#38bdf8] dark:to-[#60a5fa]">
              Bumi Mina Tani
            </span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            Panduan harian terpadu <strong>Itinerary SIP (Sedina ing Pati)</strong>, direktori <strong>135 destinasi terlengkap</strong>, peta interaktif terintegrasi Google Maps, dan etalase ekonomi kreatif (Ekraf) Kabupaten Pati.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={onExploreWisata}
              className="px-6 py-3 rounded-2xl bg-[#0c2b64] hover:bg-[#164b91] text-white font-bold text-xs sm:text-sm shadow-lg shadow-[#0c2b64]/30 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 border border-[#38bdf8]/30"
            >
              <Compass className="w-4 h-4 text-[#38bdf8]" />
              <span>Jelajah Itinerary SIP</span>
              <ArrowRight className="w-4 h-4 ml-0.5 text-[#38bdf8]" />
            </button>

            <button
              type="button"
              onClick={onOpenMap}
              className="px-6 py-3 rounded-2xl bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 font-bold text-xs sm:text-sm shadow-xs hover:border-[#1a56a4] dark:hover:border-[#38bdf8] transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <MapPin className="w-4 h-4 text-[#0c2b64] dark:text-[#38bdf8]" />
              <span>Buka Peta Interaktif</span>
            </button>

            <button
              type="button"
              onClick={onExploreEkraf}
              className="px-5 py-3 rounded-2xl bg-[#0c2b64]/10 dark:bg-[#1a56a4]/20 text-[#0c2b64] dark:text-[#38bdf8] font-bold text-xs sm:text-sm hover:bg-[#0c2b64]/20 dark:hover:bg-[#1a56a4]/30 transition-all flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Direktori Ekraf</span>
            </button>
          </div>
        </div>

        {/* Minimalist Dashboard Metric Strip */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-[#0c2b64] dark:text-[#38bdf8] flex items-center justify-center shrink-0">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-black text-slate-900 dark:text-white">135</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Destinasi Terdata</div>
            </div>
          </div>

          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-300 flex items-center justify-center shrink-0">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-black text-slate-900 dark:text-white">20</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Itinerary SIP 1 Hari</div>
            </div>
          </div>

          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 flex items-center justify-center shrink-0">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-black text-slate-900 dark:text-white">6</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Sektor Ekraf Utama</div>
            </div>
          </div>

          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-black text-slate-900 dark:text-white">100%</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Direct Google Maps</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
