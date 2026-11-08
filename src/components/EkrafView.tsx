import React, { useState } from 'react';
import {
  Sparkles,
  ShoppingBag,
  MapPin,
  MessageCircle,
  ExternalLink,
  CheckCircle2,
  Phone,
  Layers,
  ArrowUpRight,
  Store,
  ChevronRight
} from 'lucide-react';
import { EKRAF_CATEGORIES, EKRAF_PRODUCTS } from '../data/ekrafData';
import { EkrafProduct } from '../types';

interface EkrafViewProps {
  onOpenLightbox?: (imgUrl: string, title: string) => void;
}

export const EkrafView: React.FC<EkrafViewProps> = ({ onOpenLightbox }) => {
  const [selectedKategoriId, setSelectedKategoriId] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<EkrafProduct | null>(null);

  const filteredProducts = EKRAF_PRODUCTS.filter((prod) => {
    if (selectedKategoriId === 'all') return true;
    return prod.kategoriId === selectedKategoriId;
  });

  return (
    <div className="py-10 md:py-16 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0c2b64]/10 dark:bg-[#1a56a4]/30 border border-[#1a56a4]/30 text-[#0c2b64] dark:text-[#38bdf8] text-xs font-bold uppercase tracking-wider mb-2">
              <ShoppingBag className="w-3.5 h-3.5" />
              Potensi Unggulan Ekonomi Kreatif
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Ekonomi Kreatif <span className="text-transparent bg-clip-text bg-linear-to-r from-[#0c2b64] via-[#1a56a4] to-[#2575fc] dark:from-[#38bdf8] dark:to-[#60a5fa]">(Ekraf) Kabupaten Pati</span>
            </h1>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl font-normal">
              Mengenal kearifan lokal, kerajinan tangan adiluhung, kuliner inovatif, dan sentra produksi binaan masyarakat Bumi Mina Tani.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-bold shadow-xs">
              6 Sektor Unggulan • 800+ Pelaku UMKM
            </span>
          </div>
        </div>

        {/* Categories Section */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#0c2b64] dark:text-[#38bdf8]" />
              <span>Kategori Produk Kreatif & Sentra Industri</span>
            </h2>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Pilih kategori untuk memfilter produk
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {EKRAF_CATEGORIES.map((cat) => {
              const isSelected = selectedKategoriId === cat.id;
              return (
                <div
                  key={cat.id}
                  onClick={() => setSelectedKategoriId(isSelected ? 'all' : cat.id)}
                  className={`p-5 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'border-blue-600 bg-blue-50/70 dark:bg-blue-950/40 shadow-md ring-2 ring-blue-500/20'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-300 hover:shadow-md'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
                        {cat.jumlahPelaku}
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium">
                        Sentra Terpadu
                      </span>
                    </div>

                    <h3 className="mt-3 font-bold text-base text-slate-900 dark:text-white">
                      {cat.nama}
                    </h3>
                    <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {cat.deskripsi}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    <span className="truncate max-w-[200px] font-medium text-slate-700 dark:text-slate-300">
                      📍 {cat.sentra}
                    </span>
                    <span className="text-blue-600 dark:text-blue-400 font-bold text-[11px] flex items-center gap-1">
                      {isSelected ? 'Tampilkan Semua' : 'Filter'}
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Showcase Products Grid */}
        <div className="mt-12">
          <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 mb-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Katalog Produk Kreatif Unggulan
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Produk berstandar kurasi mutu tinggi hasil kreasi pengrajin lokal Pati
              </p>
            </div>
            {selectedKategoriId !== 'all' && (
              <button
                type="button"
                onClick={() => setSelectedKategoriId('all')}
                className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
              >
                Reset Filter (Tampilkan Semua)
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                onClick={() => setSelectedProduct(prod)}
                className="group bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative aspect-4/3 w-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <img
                    src={prod.imageUrl}
                    alt={prod.nama}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-blue-600 text-white shadow-xs">
                    {prod.kategori}
                  </div>
                </div>

                {/* Details */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1 mb-1">
                      <MapPin className="w-3 h-3 text-blue-600 dark:text-blue-400 shrink-0" />
                      <span className="truncate">{prod.lokasiSentra}</span>
                    </span>
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                      {prod.nama}
                    </h3>
                    <p className="mt-1 text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                      {prod.deskripsi}
                    </p>
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] text-slate-500">Estimasi Harga:</span>
                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                        {prod.harga}
                      </span>
                    </div>

                    <a
                      href={`https://wa.me/${prod.kontakWa}?text=Halo%20${encodeURIComponent(prod.pengrajin)},%20saya%20tertarik%20dengan%20produk%20${encodeURIComponent(prod.nama)}%20yang%20ada%20di%20portal%20SIP%20Pati.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs transition"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Hubungi Pengrajin</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pasar Pragolo Hub Banner */}
        <div className="mt-14 rounded-3xl bg-linear-to-r from-blue-900 via-blue-800 to-slate-900 text-white p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur">
              Pusat Ekraf Terpadu Kabupaten Pati
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
              Ingin Belanja Semua Produk Ekraf Sekaligus di Satu Tempat?
            </h3>
            <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
              Kunjungi <strong>Pasar Pragolo (Pusat UMKM Pati)</strong> di Margorejo. Menyediakan ratusan cinderamata, batik tulis Bakaran, perabot kuningan Juwana, hingga pusat kuliner terpadu.
            </p>
          </div>

          <a
            href="https://maps.app.goo.gl/4cD6OvC4uUuY4fvF2"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-white text-blue-900 font-bold text-xs sm:text-sm hover:bg-blue-50 shadow-md transition-all shrink-0 flex items-center gap-2"
          >
            <MapPin className="w-4 h-4 text-blue-600" />
            <span>Petunjuk Arah ke Pasar Pragolo</span>
          </a>
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden max-h-[90vh] flex flex-col">
            <div className="relative aspect-16/10 w-full bg-slate-100 dark:bg-slate-800">
              <img
                src={selectedProduct.imageUrl}
                alt={selectedProduct.nama}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition"
              >
                ✕
              </button>
              <div className="absolute bottom-3 left-4 px-3 py-1 rounded-md text-xs font-bold uppercase bg-blue-600 text-white">
                {selectedProduct.kategori}
              </div>
            </div>

            <div className="p-6 overflow-y-auto space-y-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {selectedProduct.nama}
                </h3>
                <p className="text-xs text-blue-600 dark:text-blue-400 font-medium mt-0.5">
                  Pengrajin: {selectedProduct.pengrajin} • {selectedProduct.lokasiSentra}
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/60 text-xs flex justify-between items-center">
                <span className="text-slate-600 dark:text-slate-300 font-medium">Rentang Harga:</span>
                <span className="text-sm font-extrabold text-blue-700 dark:text-blue-300">{selectedProduct.harga}</span>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-1">
                  Deskripsi Produk
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {selectedProduct.deskripsi}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-1.5">
                  Keunggulan Produk
                </h4>
                <div className="space-y-1">
                  {selectedProduct.keunggulan.map((k, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{k}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                <a
                  href={`https://wa.me/${selectedProduct.kontakWa}?text=Halo%20${encodeURIComponent(selectedProduct.pengrajin)},%20saya%20tertarik%20dengan%20produk%20${encodeURIComponent(selectedProduct.nama)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Hubungi Pengrajin via WhatsApp ({selectedProduct.kontakWa})</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
