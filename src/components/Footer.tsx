import React from 'react';
import {
  Compass,
  MapPin,
  Mail,
  Phone,
  Download,
  FileText,
  Heart,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Col 1: Brand & Bio (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-linear-to-tr from-[#071736] via-[#0c2b64] to-[#1a56a4] text-white flex items-center justify-center shadow-md border border-[#38bdf8]/30">
                <Compass className="w-5 h-5 text-[#38bdf8]" />
              </div>
              <span className="text-xl font-black text-slate-900 dark:text-white tracking-tight">
                SIP<span className="text-[#1a56a4] dark:text-[#38bdf8]">PATI</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
              <strong>Sedina ing Pati (SIP)</strong> adalah inisiatif program advokasi pariwisata 1 hari terpadu, direktori 135 destinasi, dan etalase ekonomi kreatif (Ekraf) Kabupaten Pati, Jawa Tengah.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Direct Google Maps Ready • Real Geographic Route</span>
            </div>
          </div>

          {/* Col 2: Navigasi Cepat (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wider">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#0c2b64] dark:hover:text-[#38bdf8] transition"
                >
                  Beranda / Dashboard
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('wisata')}
                  className="hover:text-[#0c2b64] dark:hover:text-[#38bdf8] transition"
                >
                  135 Destinasi & Itinerary SIP
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('ekraf')}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  Ekonomi Kreatif (Ekraf) & Produk UMKM
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('tentang')}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  Tentang Advokasi SIP
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('kontak')}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  Hubungi Kami & Layanan Email
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Layanan & Fitur Utama (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wider">
              Fitur Utama Portal
            </h4>
            <div className="space-y-2 text-xs">
              <button
                type="button"
                onClick={() => onNavigate('wisata')}
                className="w-full text-left p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 hover:bg-blue-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 transition block font-medium"
              >
                🗺️ 135 Destinasi & Peta Lengkap
              </button>

              <button
                type="button"
                onClick={() => onNavigate('wisata')}
                className="w-full text-left p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 hover:bg-blue-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 transition block font-medium"
              >
                ⏱️ Itinerary SIP 1 Hari Terpadu
              </button>

              <button
                type="button"
                onClick={() => onNavigate('ekraf')}
                className="w-full text-left p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 hover:bg-blue-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 transition block font-medium"
              >
                🛍️ Sentra Ekonomi Kreatif (Ekraf)
              </button>
            </div>
          </div>

          {/* Col 4: Kontak Cepat (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wider">
              Kontak
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href="mailto:sipsaqib1@gmail.com"
                className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                <Mail className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span className="truncate">sipsaqib1@gmail.com</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                <span>Pati Kota, Jawa Tengah</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-500">
          <p>© {new Date().getFullYear()} SIP - Sedina ing Pati & Ekraf. Dilindungi Hak Cipta.</p>
          <p className="flex items-center gap-1">
            Dibangun untuk kemajuan pariwisata <span className="font-semibold text-slate-700 dark:text-slate-300">Bumi Mina Tani</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
