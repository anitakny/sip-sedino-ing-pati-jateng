import React, { useState } from 'react';
import {
  Search,
  Filter,
  MapPin,
  ExternalLink,
  Clock,
  Tag,
  Star,
  Bookmark,
  BookmarkCheck,
  Calendar,
  Compass,
  ArrowRight,
  Download,
  Info,
  ChevronRight,
  Layers,
  Sparkles,
  Share2,
  Check,
  Navigation
} from 'lucide-react';
import { Destination, CategoryType, ItineraryPackage } from '../types';
import { DESTINATIONS_DATA, CATEGORIES_CONFIG, KECAMATAN_LIST } from '../data/destinationsData';
import { PACKAGES_DATA } from '../data/packagesData';

interface WisataViewProps {
  onOpenLightbox?: (imgUrl: string, title: string) => void;
}

export const WisataView: React.FC<WisataViewProps> = () => {
  const [activeTab, setActiveTab] = useState<'katalog' | 'itinerary'>('katalog');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedKecamatan, setSelectedKecamatan] = useState('Semua Kecamatan');
  const [priceFilter, setPriceFilter] = useState<'all' | 'free' | 'under10k'>('all');
  const [bookmarkedIds, setBookmarkedIds] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('sip_pati_bookmarks');
      return saved ? JSON.parse(saved) : [1, 49, 101];
    } catch {
      return [1, 49, 101];
    }
  });

  // Modal detail destination
  const [selectedDestDetail, setSelectedDestDetail] = useState<Destination | null>(null);
  const [selectedPackageDetail, setSelectedPackageDetail] = useState<ItineraryPackage | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const toggleBookmark = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarkedIds((prev) => {
      const updated = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem('sip_pati_bookmarks', JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  // Filter logic
  const filteredDestinations = DESTINATIONS_DATA.filter((dest) => {
    const matchCat = selectedCategory === 'all' || dest.kategori === selectedCategory;
    const matchKec = selectedKecamatan === 'Semua Kecamatan' || dest.kecamatan.toLowerCase().includes(selectedKecamatan.toLowerCase());
    const matchSearch =
      dest.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.lokasi.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.dayaTarik.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.aktivitas.toLowerCase().includes(searchQuery.toLowerCase());

    let matchPrice = true;
    if (priceFilter === 'free') {
      matchPrice = dest.tiket.toLowerCase().includes('gratis') || dest.tiket.toLowerCase().includes('free');
    } else if (priceFilter === 'under10k') {
      matchPrice = dest.tiket.includes('3.000') || dest.tiket.includes('5.000') || dest.tiket.toLowerCase().includes('gratis');
    }

    return matchCat && matchKec && matchSearch && matchPrice;
  });

  const handleShare = (nama: string, mapsUrl: string) => {
    if (navigator.share) {
      navigator.share({
        title: `${nama} - SIP Sedina ing Pati`,
        text: `Kunjungi ${nama} di Kabupaten Pati!`,
        url: mapsUrl
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(mapsUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="py-10 md:py-16 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title & Tab Toggle */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0c2b64]/10 dark:bg-[#1a56a4]/30 border border-[#1a56a4]/30 text-[#0c2b64] dark:text-[#38bdf8] text-xs font-bold uppercase tracking-wider mb-2">
              <Compass className="w-3.5 h-3.5" />
              Direktori Resmi Pariwisata Kabupaten Pati
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Eksplorasi Destinasi & <span className="text-transparent bg-clip-text bg-linear-to-r from-[#0c2b64] via-[#1a56a4] to-[#2575fc] dark:from-[#38bdf8] dark:to-[#60a5fa]">Itinerary SIP</span>
            </h1>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl font-normal">
              Temukan 135 destinasi pilihan autentik lengkap dengan koordinat Google Maps dan pilihan paket Itinerary SIP (Sedina ing Pati) terpadu.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-3">
            <div className="flex p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
              <button
                type="button"
                onClick={() => setActiveTab('katalog')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
                  activeTab === 'katalog'
                    ? 'bg-[#0c2b64] text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>135 Destinasi Lengkap</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('itinerary')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
                  activeTab === 'itinerary'
                    ? 'bg-[#0c2b64] text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                <Calendar className="w-4 h-4" />
                <span>Itinerary SIP (Sedina ing Pati)</span>
              </button>
            </div>
          </div>
        </div>

        {/* ================= TAB 1: 135 DESTINASI ================= */}
        {activeTab === 'katalog' && (
          <div className="mt-8 space-y-8">
            {/* Filter Card */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
              {/* Category Filter Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs font-semibold">
                {CATEGORIES_CONFIG.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl whitespace-nowrap transition-all ${
                      selectedCategory === cat.id
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                        selectedCategory === cat.id
                          ? 'bg-blue-700 text-white'
                          : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* Sub filters: Search, Kecamatan, Price */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
                {/* Search */}
                <div className="lg:col-span-6 relative">
                  <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Cari nama destinasi, daya tarik, kuliner khas..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Kecamatan Dropdown */}
                <div className="lg:col-span-3">
                  <select
                    value={selectedKecamatan}
                    onChange={(e) => setSelectedKecamatan(e.target.value)}
                    className="w-full px-3 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                  >
                    {KECAMATAN_LIST.map((kec) => (
                      <option key={kec} value={kec}>
                        {kec}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Filter */}
                <div className="lg:col-span-3">
                  <select
                    value={priceFilter}
                    onChange={(e) => setPriceFilter(e.target.value as any)}
                    className="w-full px-3 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                  >
                    <option value="all">Semua Tiket</option>
                    <option value="free">Gratis Masuk</option>
                    <option value="under10k">Tiket ≤ Rp 10.000</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Results count & Quick action */}
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span className="font-semibold">
                Menampilkan {filteredDestinations.length} destinasi dari total database Kabupaten Pati
              </span>
              <span className="text-[11px] text-slate-400 dark:text-slate-500">
                Data terverifikasi siap navigasi Maps
              </span>
            </div>

            {/* Destination Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDestinations.map((dest) => {
                const isBookmarked = bookmarkedIds.includes(dest.id);

                return (
                  <div
                    key={dest.id}
                    onClick={() => setSelectedDestDetail(dest)}
                    className="group bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1"
                  >
                    {/* Image Box */}
                    <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                      <img
                        src={dest.imageUrl}
                        alt={dest.nama}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 flex items-center gap-1.5">
                        <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider bg-blue-600 text-white shadow-xs">
                          {dest.kategoriLabel}
                        </span>
                        {dest.isPopular && (
                          <span className="px-2 py-0.5 rounded-lg text-[10px] font-bold uppercase bg-amber-500 text-white shadow-xs flex items-center gap-1">
                            <Sparkles className="w-3 h-3" />
                            Favorit
                          </span>
                        )}
                      </div>

                      {/* Bookmark button */}
                      <button
                        type="button"
                        onClick={(e) => toggleBookmark(dest.id, e)}
                        className="absolute top-3 right-3 p-2 rounded-xl bg-black/50 hover:bg-black/70 text-white backdrop-blur transition-all"
                        title={isBookmarked ? 'Hapus dari daftar favorit' : 'Simpan ke rencana perjalanan'}
                      >
                        {isBookmarked ? (
                          <BookmarkCheck className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                        ) : (
                          <Bookmark className="w-4 h-4" />
                        )}
                      </button>

                      {/* Bottom Image Stats */}
                      <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-xs font-semibold">
                        <span className="px-2 py-0.5 rounded-md bg-black/60 backdrop-blur">
                          ⭐ {dest.rating} ({dest.reviewsCount})
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-blue-900/80 backdrop-blur">
                          {dest.tiket}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-1.5 text-xs font-medium text-[#0c2b64] dark:text-[#38bdf8] mb-1">
                          <MapPin className="w-3.5 h-3.5 shrink-0" />
                          <span className="truncate">{dest.lokasi}</span>
                        </div>
                        <h3 className="font-bold text-slate-900 dark:text-white text-lg group-hover:text-[#1a56a4] dark:group-hover:text-[#38bdf8] transition-colors line-clamp-1">
                          {dest.nama}
                        </h3>
                        <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                          {dest.dayaTarik}
                        </p>
                        <div className="mt-2.5">
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#0c2b64]/10 dark:bg-[#1a56a4]/30 text-[#0c2b64] dark:text-[#38bdf8] truncate block max-w-full">
                            📷 Dokumentasi Resmi: {dest.sumberGambar}
                          </span>
                        </div>
                      </div>

                      {/* Footer Actions */}
                      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                        <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 truncate max-w-[150px]">
                          {dest.aktivitas.slice(0, 32)}...
                        </span>
                        <div className="flex items-center gap-1.5">
                          <a
                            href={dest.googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 rounded-xl bg-[#0c2b64]/10 text-[#0c2b64] hover:bg-[#0c2b64]/20 dark:bg-[#1a56a4]/30 dark:text-[#38bdf8] dark:hover:bg-[#1a56a4]/50 transition"
                            title="Buka Direct URL Google Maps"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                          <button
                            type="button"
                            className="inline-flex items-center gap-1 text-xs font-bold text-[#0c2b64] dark:text-[#38bdf8] group-hover:translate-x-1 transition-transform"
                          >
                            <span>Detail</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ================= TAB 2: 20 PAKET SIP ITINERARY ================= */}
        {activeTab === 'itinerary' && (
          <div className="mt-8 space-y-8">
            {/* Banner Itinerary */}
            <div className="p-6 md:p-8 rounded-3xl bg-linear-to-r from-[#071736] via-[#0c2b64] to-[#164b91] text-white shadow-xl relative overflow-hidden border border-[#2071dc]/30">
              <div className="relative z-10 max-w-3xl space-y-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur">
                  Program Advokasi Resmi SIP: Sedina ing Pati
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Itinerary SIP: Rencana Perjalanan Harian Terpadu
                </h2>
                <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
                  Setiap paket dirancang tepat untuk perjalanan 1 hari penuh (pukul 08.00 - 17.30 WIB) dengan rute geografis searah efisien: 3 Destinasi Utama (Alam, Religi/Sejarah, Budaya) + 1 Titik Kuliner Legendaris Pati.
                </p>
                <div className="pt-1 flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/15 backdrop-blur border border-white/20 text-xs font-semibold text-white">
                    <Sparkles className="w-4 h-4 text-[#fbbf24]" />
                    <span>Terdiri dari 20 Variasi Rute Lengkap Se-Kabupaten Pati</span>
                  </div>
                </div>
              </div>
            </div>

            {/* List of 20 Itinerary Packages */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PACKAGES_DATA.map((pkg) => (
                <div
                  key={pkg.id}
                  onClick={() => setSelectedPackageDetail(pkg)}
                  className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer hover:border-blue-400 dark:hover:border-blue-500"
                >
                  <div>
                    {/* Header Package */}
                    <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-blue-600 text-white font-black text-sm flex items-center justify-center shrink-0">
                          {pkg.nomor}
                        </div>
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
                          Sedina ing Pati (1 Hari Penuh)
                        </span>
                      </div>
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        {pkg.estimasiBiaya}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-3 text-lg font-bold text-slate-900 dark:text-white leading-snug">
                      {pkg.judul}
                    </h3>
                    <p className="mt-1 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {pkg.deskripsi}
                    </p>

                    {/* Route Summary */}
                    <div className="mt-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-xs">
                      <span className="font-semibold text-slate-500 dark:text-slate-400 block mb-1">
                        Rute Perjalanan Terpadu:
                      </span>
                      <p className="font-medium text-blue-700 dark:text-blue-300 font-mono text-[11px]">
                        {pkg.ruteRingkas}
                      </p>
                    </div>

                    {/* 4 Stops Timeline Preview */}
                    <div className="mt-4 space-y-2">
                      {pkg.stops.map((stop, i) => (
                        <div key={i} className="flex items-center justify-between text-xs py-1">
                          <div className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 flex items-center justify-center text-[10px] font-bold">
                              {i + 1}
                            </span>
                            <span className="font-medium text-slate-800 dark:text-slate-200">
                              {stop.namaDestinasi}
                            </span>
                          </div>
                          <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                            {stop.waktu}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions footer */}
                  <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      4 Titik Kunjungan (08.00 - 17.30 WIB)
                    </span>
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700"
                    >
                      <span>Lihat Rincian Itinerary</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Destination Detail Modal */}
      {selectedDestDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden max-h-[90vh] flex flex-col">
            <div className="relative aspect-16/9 w-full bg-slate-100 dark:bg-slate-800">
              <img
                src={selectedDestDetail.imageUrl}
                alt={selectedDestDetail.nama}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedDestDetail(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition"
              >
                ✕
              </button>
              <div className="absolute bottom-3 left-4 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-[#0c2b64] text-white border border-[#38bdf8]/30">
                {selectedDestDetail.kategoriLabel}
              </div>
            </div>

            <div className="p-6 overflow-y-auto space-y-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {selectedDestDetail.nama}
                </h3>
                <div className="mt-1 flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                  <MapPin className="w-4 h-4 text-[#0c2b64] dark:text-[#38bdf8]" />
                  <span>{selectedDestDetail.lokasi}</span>
                </div>
              </div>

              {/* Official Photo Attribution */}
              <div className="p-3 rounded-2xl bg-[#0c2b64]/5 dark:bg-[#1a56a4]/20 border border-[#1a56a4]/20 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#1a56a4] dark:text-[#38bdf8] shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300 font-medium">Sumber Data & Dokumentasi Resmi:</span>
                </div>
                <span className="font-bold text-[#0c2b64] dark:text-[#38bdf8]">{selectedDestDetail.sumberGambar}</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 text-xs">
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block">Tiket Masuk:</span>
                  <span className="font-bold text-[#0c2b64] dark:text-[#38bdf8]">{selectedDestDetail.tiket}</span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block">Jam Operasional:</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">{selectedDestDetail.jamBuka || '08.00 - 17.00 WIB'}</span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block">Rating Wisatawan:</span>
                  <span className="font-bold text-amber-500">⭐ {selectedDestDetail.rating} / 5.0</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-1">
                  Daya Tarik Utama
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {selectedDestDetail.dayaTarik}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-1">
                  Aktivitas Wisatawan
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {selectedDestDetail.aktivitas}
                </p>
              </div>

              {selectedDestDetail.fasilitas && (
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-1.5">
                    Fasilitas Pendukung
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedDestDetail.fasilitas.map((f, i) => (
                      <span key={i} className="text-xs px-2.5 py-1 rounded-lg bg-[#0c2b64]/10 dark:bg-[#1a56a4]/30 text-[#0c2b64] dark:text-[#38bdf8] font-medium">
                        ✓ {f}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
                <a
                  href={selectedDestDetail.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0c2b64] hover:bg-[#164b91] text-white font-bold text-xs sm:text-sm shadow-md transition border border-[#38bdf8]/30"
                >
                  <ExternalLink className="w-4 h-4 text-[#38bdf8]" />
                  <span>Petunjuk Arah Google Maps</span>
                </a>
                <button
                  type="button"
                  onClick={() => handleShare(selectedDestDetail.nama, selectedDestDetail.googleMapsUrl)}
                  className="px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-semibold flex items-center gap-1.5 transition"
                >
                  {copiedLink ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4" />}
                  <span>{copiedLink ? 'Tersalin' : 'Bagikan'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Package Detail Modal */}
      {selectedPackageDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden max-h-[92vh] flex flex-col">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-start justify-between bg-blue-50/50 dark:bg-slate-800/40">
              <div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-blue-600 text-white uppercase tracking-wider">
                  Paket #{selectedPackageDetail.nomor} Advokasi SIP
                </span>
                <h3 className="mt-2 text-xl font-extrabold text-slate-900 dark:text-white">
                  {selectedPackageDetail.judul}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  {selectedPackageDetail.deskripsi}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPackageDetail(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                ✕
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-4">
              <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 text-xs font-medium">
                <span>Rute: <strong className="text-blue-600 dark:text-blue-400">{selectedPackageDetail.ruteRingkas}</strong></span>
                <span>Estimasi Biaya: <strong className="text-slate-900 dark:text-white">{selectedPackageDetail.estimasiBiaya}</strong></span>
              </div>

              <h4 className="font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wider">
                Jadwal & Rute Perjalanan 1 Hari Penuh:
              </h4>

              <div className="space-y-3">
                {selectedPackageDetail.stops.map((stop, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
                          {stop.waktu}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase">
                          {stop.jenisWisata}
                        </span>
                      </div>
                      <h5 className="font-bold text-slate-900 dark:text-white text-base">
                        {stop.namaDestinasi}
                      </h5>
                      <p className="text-xs text-slate-600 dark:text-slate-300">
                        {stop.aktivitas}
                      </p>
                      <div className="flex items-center gap-3 text-[11px] text-slate-500 pt-1">
                        <span>Lokasi: {stop.lokasi}</span>
                        <span>•</span>
                        <span>Tiket: {stop.tiket}</span>
                        <span>•</span>
                        <span>Estimasi Jalan: {stop.travelTime}</span>
                      </div>
                    </div>

                    <a
                      href={stop.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/40 dark:text-blue-300 text-xs font-bold transition shrink-0"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Google Maps</span>
                    </a>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedPackageDetail(null)}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-200 dark:hover:bg-slate-700 transition"
                >
                  Tutup Rincian
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
