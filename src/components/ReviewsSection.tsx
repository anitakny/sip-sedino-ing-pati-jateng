import React, { useState } from 'react';
import {
  Star,
  MessageSquare,
  PlusCircle,
  ThumbsUp,
  CheckCircle2,
  X,
  UserCheck,
  Sparkles,
  MapPin
} from 'lucide-react';
import { ReviewItem } from '../types';
import confetti from 'canvas-confetti';

interface ReviewsSectionProps {
  reviews: ReviewItem[];
  onAddReview: (review: ReviewItem) => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  reviews,
  onAddReview
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [helpfulMap, setHelpfulMap] = useState<Record<string, number>>({});

  // Form states
  const [formNama, setFormNama] = useState('');
  const [formAsal, setFormAsal] = useState('');
  const [formDestinasi, setFormDestinasi] = useState('Paket 1: Waduk Seloromo & Nasi Gandul Gajahmati');
  const [formRating, setFormRating] = useState(5);
  const [formKomentar, setFormKomentar] = useState('');
  const [formRekomendasi, setFormRekomendasi] = useState(true);
  const [formSuccess, setFormSuccess] = useState(false);

  // Calculate average rating
  const avgRating = (
    reviews.reduce((acc, r) => acc + r.rating, 0) / (reviews.length || 1)
  ).toFixed(1);

  const handleHelpful = (id: string) => {
    setHelpfulMap((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formNama.trim() || !formKomentar.trim()) return;

    const newRev: ReviewItem = {
      id: `rev-${Date.now()}`,
      nama: formNama,
      asal: formAsal || 'Wisatawan Nusantara',
      destinasi: formDestinasi,
      rating: formRating,
      tanggal: 'Hari ini',
      komentar: formKomentar,
      avatarUrl: `https://images.unsplash.com/photo-${1534528741775 + Math.floor(Math.random() * 50)}?auto=format&fit=crop&w=150&q=80`,
      rekomendasi: formRekomendasi
    };

    onAddReview(newRev);

    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch {}

    setFormSuccess(true);
    setTimeout(() => {
      setFormSuccess(false);
      setIsModalOpen(false);
      setFormNama('');
      setFormAsal('');
      setFormKomentar('');
    }, 1200);
  };

  return (
    <section className="py-12 md:py-16 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0c2b64]/10 dark:bg-[#1a56a4]/30 border border-[#1a56a4]/30 text-[#0c2b64] dark:text-[#38bdf8] text-xs font-bold uppercase tracking-wider mb-2">
              <UserCheck className="w-3.5 h-3.5" />
              Testimoni & Kredibilitas Wisatawan
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Ulasan Pengunjung <span className="text-transparent bg-clip-text bg-linear-to-r from-[#0c2b64] via-[#1a56a4] to-[#2575fc] dark:from-[#38bdf8] dark:to-[#60a5fa]">Sedina ing Pati</span>
            </h2>
            <p className="mt-1 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl font-normal">
              Pengalaman nyata para pelancong, pecinta kuliner, dan pemerhati budaya yang telah merasakan efisiensi itinerary harian di Kabupaten Pati.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0c2b64] hover:bg-[#164b91] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#0c2b64]/30 transition-all hover:scale-105 border border-[#38bdf8]/30"
          >
            <PlusCircle className="w-4 h-4 text-[#38bdf8]" />
            <span>Tulis Ulasan Anda</span>
          </button>
        </div>

        {/* Rating Score Card & Breakdown */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-slate-50 dark:bg-slate-800/40 rounded-3xl p-6 border border-slate-200 dark:border-slate-800">
          {/* Average Rating (4 Cols) */}
          <div className="md:col-span-4 text-center md:text-left md:border-r border-slate-200 dark:border-slate-700/60 md:pr-6 space-y-2">
            <div className="text-5xl font-black text-slate-900 dark:text-white">
              {avgRating} <span className="text-2xl font-bold text-slate-400">/ 5.0</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Berdasarkan <strong>{reviews.length} ulasan terverifikasi</strong> wisatawan
            </p>
          </div>

          {/* Highlights (8 Cols) */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left">
            <div className="p-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
              <span className="text-xs text-slate-500 dark:text-slate-400 block">Tingkat Kepuasan</span>
              <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">98.4% Positif</span>
              <span className="text-[11px] text-slate-400 block mt-0.5">Rute efisien & hemat</span>
            </div>
            <div className="p-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
              <span className="text-xs text-slate-500 dark:text-slate-400 block">Akurasi Rute Maps</span>
              <span className="text-lg font-bold text-blue-600 dark:text-blue-400">100% Valid</span>
              <span className="text-[11px] text-slate-400 block mt-0.5">Direct link Maps</span>
            </div>
            <div className="p-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
              <span className="text-xs text-slate-500 dark:text-slate-400 block">Navigasi Presisi</span>
              <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">135 Titik</span>
              <span className="text-[11px] text-slate-400 block mt-0.5">Google Maps siap pakai</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((rev) => {
            const helpfulCount = (helpfulMap[rev.id] || 0);

            return (
              <div
                key={rev.id}
                className="bg-white dark:bg-slate-800/70 rounded-3xl p-6 border border-slate-200 dark:border-slate-700/80 shadow-xs flex flex-col justify-between space-y-4"
              >
                <div>
                  {/* Top: Avatar, Name, Rating */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={rev.avatarUrl}
                        alt={rev.nama}
                        className="w-11 h-11 rounded-full object-cover border-2 border-blue-500/30"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                            {rev.nama}
                          </h4>
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-semibold flex items-center gap-1">
                            <CheckCircle2 className="w-2.5 h-2.5" />
                            Terverifikasi
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-blue-500" />
                          <span>{rev.asal}</span>
                        </div>
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex items-center gap-0.5 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${
                            i < Math.floor(rev.rating) ? 'fill-current' : 'text-slate-300 dark:text-slate-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Destination visited tag */}
                  <div className="mt-3">
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 inline-block">
                      Kunjungan: {rev.destinasi}
                    </span>
                  </div>

                  {/* Review Text */}
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">
                    "{rev.komentar}"
                  </p>
                </div>

                {/* Footer: Date & Helpful button */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span>{rev.tanggal}</span>

                  <button
                    type="button"
                    onClick={() => handleHelpful(rev.id)}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-50 dark:bg-slate-700/60 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 text-[11px] font-medium transition"
                  >
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span>Membantu ({helpfulCount})</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal Add Review */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden max-h-[92vh] flex flex-col">
            <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-800/40">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-300">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    Tulis Ulasan Perjalanan
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Bantu wisatawan lain merencanakan liburan di Pati
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-5 overflow-y-auto space-y-4">
              {formSuccess ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-300 flex items-center justify-center animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-lg text-slate-900 dark:text-white">
                    Ulasan Anda Berhasil Ditayangkan!
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    Terima kasih telah berbagi pengalaman otentik perjalanan Anda di Kabupaten Pati.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Nama Anda <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Nama Lengkap"
                        value={formNama}
                        onChange={(e) => setFormNama(e.target.value)}
                        className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Kota Asal <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Misal: Kudus, Semarang, Jakarta"
                        value={formAsal}
                        onChange={(e) => setFormAsal(e.target.value)}
                        className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Destinasi / Paket yang Dikunjungi
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Paket 1 (Waduk Seloromo & Nasi Gandul)"
                      value={formDestinasi}
                      onChange={(e) => setFormDestinasi(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Rating Selector */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Beri Nilai Bintang
                    </label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setFormRating(star)}
                          className="p-1 hover:scale-110 transition-transform"
                        >
                          <Star
                            className={`w-7 h-7 ${
                              star <= formRating
                                ? 'fill-amber-400 text-amber-400'
                                : 'text-slate-300 dark:text-slate-600'
                            }`}
                          />
                        </button>
                      ))}
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-2">
                        {formRating}.0 dari 5.0
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Ulasan & Rekomendasi Anda <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Bagaimana kondisi rute, keramahan warga lokal, rasa kuliner khas, dan pengalaman liburan Anda?"
                      value={formKomentar}
                      onChange={(e) => setFormKomentar(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition"
                    >
                      Batal
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md transition-all hover:scale-105"
                    >
                      Kirimkan Ulasan
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
