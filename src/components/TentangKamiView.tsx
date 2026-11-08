import React from 'react';
import {
  Compass,
  FileText,
  Target,
  Award,
  Heart,
  Download,
  CheckCircle2,
  Instagram,
  Sparkles,
  ExternalLink,
  Shield,
  Layers,
  MapPin
} from 'lucide-react';

export const TentangKamiView: React.FC = () => {
  const saqibPhoto = '/assets/aistudio/WhatsApp_Image_2026-11-08_at_08.09.38_13c3ca8a.jpeg';

  return (
    <div className="py-10 md:py-16 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0c2b64]/10 dark:bg-[#1a56a4]/30 border border-[#1a56a4]/30 text-[#0c2b64] dark:text-[#38bdf8] text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            Program Advokasi Pariwisata & Ekraf
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Mengenal Inisiatif{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#0c2b64] via-[#1a56a4] to-[#2575fc] dark:from-[#38bdf8] dark:to-[#60a5fa]">
              SIP: Sedina ing Pati
            </span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Menghadirkan panduan perjalanan 1 hari paling efisien, bermakna, dan berdampak nyata bagi pertumbuhan ekonomi para pelaku wisata dan UMKM ekonomi kreatif di Bumi Mina Tani.
          </p>
        </div>

        {/* ================= SPECIAL SHOWCASE: INITIATOR & DUTA WISATA PROFILE ================= */}
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#071736] via-[#0c2b64] to-[#164b91] text-white p-6 sm:p-10 shadow-2xl border border-[#2071dc]/40">
          {/* Background ambient lighting */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2071dc]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#38bdf8]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Foto Tokoh / Inisiator Mas Saqib */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-sm rounded-2xl overflow-hidden border-2 border-[#38bdf8]/40 shadow-2xl group">
                <img
                  src={saqibPhoto}
                  alt="Ahmad Husnus Saqib - Mas Pati 2026"
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                />
                {/* Luminous overlay badge */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/75 backdrop-blur-md border border-white/20 text-center">
                  <div className="flex items-center justify-center gap-1.5 text-[#fbbf24] text-xs font-extrabold uppercase tracking-wide">
                    <Sparkles className="w-3.5 h-3.5 fill-current" />
                    <span>Duta Wisata Kab. Pati</span>
                  </div>
                  <div className="text-sm font-black text-white mt-0.5">
                    Ahmad Husnus Saqib (Mas Saqib)
                  </div>
                  <div className="text-[11px] text-slate-300">
                    Finalis Mas Mbak Jawa Tengah 2026
                  </div>
                </div>
              </div>

              {/* Instagram link */}
              <div className="mt-4 flex items-center gap-3">
                <a
                  href="https://instagram.com/husnussaqibb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold backdrop-blur border border-white/20 transition-all hover:scale-105"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span>@husnussaqibb</span>
                </a>
                <a
                  href="https://instagram.com/masmbakjateng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold backdrop-blur border border-white/20 transition-all hover:scale-105"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span>@masmbakjateng</span>
                </a>
              </div>
            </div>

            {/* Informasi & Narasi Inisiator */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#fbbf24]/20 text-[#fbbf24] border border-[#fbbf24]/40 text-xs font-extrabold uppercase tracking-wider mb-2">
                  <span>Sambutan Inisiator Program</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  "Menghubungkan Pesona Muria Hingga Kemegahan Maritim Juwana dalam Satu Hari"
                </h2>
                <p className="text-xs text-[#93c5fd] font-medium mt-1">
                  Oleh: Ahmad Husnus Saqib — Inisiator Program Advokasi SIP (Sedina ing Pati) & Finalis Mas Mbak Jawa Tengah 2026
                </p>
              </div>

              <div className="text-xs sm:text-sm text-slate-200 space-y-3 leading-relaxed font-normal bg-black/25 p-5 rounded-2xl border border-white/10 backdrop-blur">
                <p>
                  "Kabupaten Pati menyimpan kekayaan luar biasa: dari sejuknya waduk dan perkebunan kopi lereng Gunung Muria, keajaiban gua karst Pegunungan Kendeng, jejak cikal bakal Kadipaten Pesantenan warisan Majapahit, hingga adiluhungnya Batik Tulis Bakaran dan kelezatan kuliner Nasi Gandul beralas daun pisang."
                </p>
                <p>
                  "Melalui inisiatif <strong>SIP: Sedina ing Pati</strong>, kami merumuskan <strong>Formula Itinerary Terpadu</strong> dan direktori <strong>135 destinasi lengkap</strong>. Tujuannya adalah memastikan setiap pelancong yang singgah memiliki panduan yang jelas, rute searah tanpa macet, koordinat Google Maps terintegrasi, dan berkontribusi langsung pada kesejahteraan para pelaku UMKM ekonomi kreatif lokal."
                </p>
              </div>

              {/* Badges / Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-white/10 border border-white/15">
                  <div className="text-lg font-black text-[#fbbf24]">Itinerary SIP</div>
                  <div className="text-[11px] text-slate-300">Rute Harian Efisien</div>
                </div>
                <div className="p-3 rounded-xl bg-white/10 border border-white/15">
                  <div className="text-lg font-black text-[#38bdf8]">135 Titik</div>
                  <div className="text-[11px] text-slate-300">Wisata & Kuliner Valid</div>
                </div>
                <div className="p-3 rounded-xl bg-white/10 border border-white/15 col-span-2 sm:col-span-1">
                  <div className="text-lg font-black text-emerald-400">100% Advokasi</div>
                  <div className="text-[11px] text-slate-300">Pemberdayaan UMKM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#0c2b64]/10 dark:bg-[#1a56a4]/30 text-[#0c2b64] dark:text-[#38bdf8] flex items-center justify-center font-bold">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Visi Kami
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Menjadikan Kabupaten Pati sebagai destinasi wisata unggulan berbasis kearifan lokal yang terintegrasi, mudah diakses pelancong nusantara maupun mancanegara, serta menjunjung tinggi kelestarian lingkungan dan budaya.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Misi & Komitmen
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Menyusun rencana perjalanan harian searah yang efisien (zero-waste travel time), mempromosikan 135 destinasi autentik, dan memberdayakan 6 sub-sektor ekonomi kreatif (Ekraf) secara langsung tanpa perantara.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#fbbf24]/20 text-[#d97706] dark:text-[#fbbf24] flex items-center justify-center font-bold">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Filosofi "Bumi Mina Tani"
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Harmoni antara kesuburan agraris lereng Gunung Muria (Tani) dan kekayaan maritim pesisir muara Juwana Laut Jawa (Mina), melahirkan budaya toleransi, etos kerja tinggi, serta kuliner kaya rempah legendaris.
            </p>
          </div>
        </div>

        {/* Latar Belakang & Konsultasi Resmi SIP */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-[#0c2b64] dark:text-[#38bdf8] uppercase tracking-wider">
                Latar Belakang Advokasi
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Mengapa Program "Sedina ing Pati" (SIP) Dibutuhkan?
              </h2>
              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed">
                <p>
                  Seringkali pelancong yang berkunjung ke wilayah Pantura Timur Jawa Tengah bingung menentukan destinasi karena belum tersedianya panduan terintegrasi yang memperhitungkan letak geografis dan waktu tempuh. Banyak wisatawan hanya singgah sebentar di jalur jalan raya tanpa sempat menyentuh kekayaan lereng Muria atau pesisir Juwana.
                </p>
                <p>
                  Program advokasi <strong>Sedina ing Pati (SIP)</strong> menjawab tantangan ini dengan menyusun formula <strong>Itinerary SIP Siap Pakai</strong>. Setiap paket dirancang secara matematis: tepat 3 destinasi utama (Alam, Religi/Sejarah, Budaya) ditambah 1 titik kuliner legendaris dengan estimasi durasi antar-titik hanya 10 hingga 45 menit.
                </p>
              </div>

              {/* Check features */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Rute Teruji Geografis Searah</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Direct URL Google Maps Aktif</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Transparansi Tiket & Biaya</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Berdampak Langsung ke UMKM Desa</span>
                </div>
              </div>
            </div>

            {/* Sekretariat & Konsultasi Langsung */}
            <div className="lg:col-span-5 bg-linear-to-br from-[#071736] via-[#0c2b64] to-[#164b91] text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-5 border border-[#2071dc]/30">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/20 backdrop-blur">
                  Pusat Layanan & Advokasi
                </span>
                <h3 className="mt-2 text-xl font-bold">
                  Konsultasi Rute & Kunjungan Lapangan
                </h3>
                <p className="mt-1 text-xs text-blue-100 leading-relaxed">
                  Tim relawan advokasi SIP siap membantu perencanaan rombongan, studi banding, atau kunjungan langsung ke sentra UMKM dan pengrajin lokal.
                </p>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-[#38bdf8] shrink-0" />
                    <div>
                      <div className="text-xs font-bold">Sekretariat Advokasi SIP</div>
                      <div className="text-[10px] text-blue-200">Kabupaten Pati, Jawa Tengah</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">Resmi</span>
                </div>

                <a
                  href="mailto:sipsaqib1@gmail.com"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white text-[#0c2b64] hover:bg-blue-50 transition-all font-bold text-xs group"
                >
                  <span>Kirim Email ke Inisiator (sipsaqib1@gmail.com)</span>
                  <ExternalLink className="w-4 h-4 text-[#0c2b64] group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

              <div className="pt-2 text-[11px] text-blue-200 text-center">
                Diprakarsai oleh Ahmad Husnus Saqib (Finalis Mas Mbak Jateng 2026 - Kab. Pati)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
