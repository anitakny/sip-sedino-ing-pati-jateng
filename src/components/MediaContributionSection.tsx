import React, { useState } from 'react';
import {
  Camera,
  Video,
  PlusCircle,
  Heart,
  Maximize2,
  Play,
  Sparkles,
  MapPin,
  CheckCircle2,
  X,
  Upload
} from 'lucide-react';
import { MediaItem } from '../types';
import confetti from 'canvas-confetti';

interface MediaContributionSectionProps {
  mediaList: MediaItem[];
  onAddMedia: (newMedia: MediaItem) => void;
  onOpenLightbox: (item: MediaItem) => void;
}

export const MediaContributionSection: React.FC<MediaContributionSectionProps> = ({
  mediaList,
  onAddMedia,
  onOpenLightbox
}) => {
  const [filterType, setFilterType] = useState<'all' | 'foto' | 'video'>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [likedMap, setLikedMap] = useState<Record<string, boolean>>({});

  // Form states
  const [formJudul, setFormJudul] = useState('');
  const [formTipe, setFormTipe] = useState<'foto' | 'video'>('foto');
  const [formUrl, setFormUrl] = useState('');
  const [formPenulis, setFormPenulis] = useState('');
  const [formLokasi, setFormLokasi] = useState('Waduk Seloromo, Gembong');
  const [formKeterangan, setFormKeterangan] = useState('');
  const [formTags, setFormTags] = useState('PatiWisata, SedinaIngPati');
  const [formSuccess, setFormSuccess] = useState(false);

  // Preset sample pictures so users can easily try 1-click photo demo
  const samplePictures = [
    { label: 'Waduk Seloromo Sunset', url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80' },
    { label: 'Batik Bakaran Juwana', url: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=1200&q=80' },
    { label: 'Kuliner Gandul Pati', url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80' },
    { label: 'Kebun Kopi Jolong Muria', url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80' }
  ];

  const handleLike = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setLikedMap((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setFormUrl(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formJudul.trim() || !formUrl.trim() || !formPenulis.trim()) return;

    const newMedia: MediaItem = {
      id: `media-user-${Date.now()}`,
      judul: formJudul,
      keterangan: formKeterangan || 'Dokumentasi perjalanan wisata di Kabupaten Pati.',
      tipe: formTipe,
      url: formUrl,
      thumbnailUrl: formTipe === 'foto' ? formUrl : 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80',
      penulis: formPenulis,
      lokasi: formLokasi,
      tanggal: 'Baru saja',
      likes: 1,
      tags: formTags
        .split(',')
        .map((t) => t.trim().replace(/^#/, ''))
        .filter(Boolean)
    };

    onAddMedia(newMedia);

    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch {
      // ignore
    }

    setFormSuccess(true);
    setTimeout(() => {
      setFormSuccess(false);
      setIsModalOpen(false);
      // Reset form
      setFormJudul('');
      setFormUrl('');
      setFormPenulis('');
      setFormKeterangan('');
    }, 1200);
  };

  const filteredMedia = mediaList.filter((item) => {
    if (filterType === 'all') return true;
    return item.tipe === filterType;
  });

  return (
    <section className="relative py-12 md:py-16 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0c2b64]/10 dark:bg-[#1a56a4]/30 border border-[#1a56a4]/30 text-[#0c2b64] dark:text-[#38bdf8] text-xs font-bold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              Galeri Wisatawan & Ruang Interaktif
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Cerita & Dokumentasi <span className="text-transparent bg-clip-text bg-linear-to-r from-[#0c2b64] via-[#1a56a4] to-[#2575fc] dark:from-[#38bdf8] dark:to-[#60a5fa]">Sedina ing Pati</span>
            </h2>
            <p className="mt-1 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl font-normal">
              Abadikan momen indah liburan Anda di Bumi Mina Tani. Bagikan foto atau video petualangan Anda dan klik galeri untuk memperbesar resolusi tinggi.
            </p>
          </div>

          {/* Action Button & Filters */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Filter Tabs */}
            <div className="flex p-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-medium">
              <button
                type="button"
                onClick={() => setFilterType('all')}
                className={`px-3 py-1.5 rounded-lg transition ${
                  filterType === 'all'
                    ? 'bg-[#0c2b64] text-white font-bold shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                Semua ({mediaList.length})
              </button>
              <button
                type="button"
                onClick={() => setFilterType('foto')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition ${
                  filterType === 'foto'
                    ? 'bg-[#0c2b64] text-white font-bold shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                <Camera className="w-3.5 h-3.5" />
                Foto ({mediaList.filter((m) => m.tipe === 'foto').length})
              </button>
              <button
                type="button"
                onClick={() => setFilterType('video')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition ${
                  filterType === 'video'
                    ? 'bg-[#0c2b64] text-white font-bold shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                <Video className="w-3.5 h-3.5" />
                Video ({mediaList.filter((m) => m.tipe === 'video').length})
              </button>
            </div>

            {/* Add Media Button */}
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0c2b64] hover:bg-[#164b91] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#0c2b64]/30 transition-all hover:scale-[1.02] active:scale-[0.98] border border-[#38bdf8]/30"
            >
              <PlusCircle className="w-4 h-4 text-[#38bdf8]" />
              <span>Tambah Foto / Video</span>
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMedia.map((item) => {
            const isLiked = likedMap[item.id];
            const currentLikes = item.likes + (isLiked ? 1 : 0);

            return (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(item)}
                className="group relative bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700/80 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1"
              >
                {/* Media Image / Video Preview */}
                <div className="relative aspect-4/3 w-full bg-slate-100 dark:bg-slate-900 overflow-hidden">
                  <img
                    src={item.thumbnailUrl || item.url}
                    alt={item.judul}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-black/20 opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Media Type Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-white backdrop-blur shadow-xs flex items-center gap-1.5">
                    {item.tipe === 'video' ? (
                      <>
                        <Video className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                        <span>Video</span>
                      </>
                    ) : (
                      <>
                        <Camera className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                        <span>Foto</span>
                      </>
                    )}
                  </div>

                  {/* Play icon overlay for videos */}
                  {item.tipe === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-blue-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 ml-1 fill-current" />
                      </div>
                    </div>
                  )}

                  {/* Zoom indicator on hover */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white p-1.5 rounded-lg backdrop-blur">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Location badge on bottom of thumbnail */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="flex items-center gap-1.5 text-xs font-medium text-slate-200 truncate">
                      <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span className="truncate">{item.lokasi}</span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                      {item.judul}
                    </h3>
                    <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                      {item.keterangan}
                    </p>
                  </div>

                  {/* Footer: User & Likes */}
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-medium text-slate-700 dark:text-slate-300 truncate max-w-[150px]">
                      {item.penulis}
                    </span>

                    <button
                      type="button"
                      onClick={(e) => handleLike(e, item.id)}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full transition-colors ${
                        isLiked
                          ? 'bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400'
                          : 'hover:bg-slate-100 dark:hover:bg-slate-700'
                      }`}
                      title="Sukai foto/video ini"
                    >
                      <Heart
                        className={`w-3.5 h-3.5 ${
                          isLiked ? 'fill-rose-500 text-rose-500' : 'text-slate-400'
                        }`}
                      />
                      <span className="font-semibold text-[11px]">{currentLikes}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal Add Photo / Video */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="relative w-full max-w-xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden max-h-[92vh] flex flex-col">
            {/* Modal Header */}
            <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/40">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-300">
                  <Camera className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    Tambah Foto atau Video Wisata
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Bagikan keindahan destinasi Pati dengan sesama pelancong
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

            {/* Modal Form */}
            <form onSubmit={handleSubmit} className="p-5 overflow-y-auto space-y-4">
              {formSuccess ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-300 flex items-center justify-center animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-lg text-slate-900 dark:text-white">
                    Berhasil Ditambahkan!
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 max-w-xs mx-auto">
                    Dokumentasi Anda telah tayang di galeri utama Sedina ing Pati. Terima kasih atas kontribusi Anda!
                  </p>
                </div>
              ) : (
                <>
                  {/* Media Type Selector */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Tipe Konten
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setFormTipe('foto')}
                        className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border text-xs font-semibold transition ${
                          formTipe === 'foto'
                            ? 'border-blue-600 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-500'
                            : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
                        }`}
                      >
                        <Camera className="w-4 h-4" />
                        Foto Dokumentasi
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormTipe('video')}
                        className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border text-xs font-semibold transition ${
                          formTipe === 'video'
                            ? 'border-blue-600 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-500'
                            : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
                        }`}
                      >
                        <Video className="w-4 h-4" />
                        Video Wisata (MP4 / Reel)
                      </button>
                    </div>
                  </div>

                  {/* Judul */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Judul Dokumentasi <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Sunset Indah di Waduk Seloromo"
                      value={formJudul}
                      onChange={(e) => setFormJudul(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* URL / File Upload */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        {formTipe === 'foto' ? 'Tautan Gambar (URL) atau Unggah Berkas' : 'Tautan Video (MP4 / Web Video)'} <span className="text-rose-500">*</span>
                      </label>
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="url"
                        required
                        placeholder={formTipe === 'foto' ? 'https://images.unsplash.com/...' : 'https://assets.mixkit.co/.../video.mp4'}
                        value={formUrl}
                        onChange={(e) => setFormUrl(e.target.value)}
                        className="flex-1 px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      {formTipe === 'foto' && (
                        <label className="cursor-pointer inline-flex items-center justify-center px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-medium border border-slate-200 dark:border-slate-700 transition">
                          <Upload className="w-4 h-4 mr-1.5" />
                          <span>Pilih Foto</span>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileUpload}
                            className="hidden"
                          />
                        </label>
                      )}
                    </div>

                    {/* Quick Preset Samples for Easy Testing */}
                    {formTipe === 'foto' && (
                      <div className="mt-2 flex flex-wrap items-center gap-1.5 text-[11px] text-slate-500">
                        <span>Pilihan Cepat:</span>
                        {samplePictures.map((sample, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => {
                              setFormUrl(sample.url);
                              if (!formJudul) setFormJudul(sample.label);
                            }}
                            className="px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 hover:underline"
                          >
                            {sample.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Lokasi & Nama Pengirim */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Lokasi Wisata Pati <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Waduk Seloromo, Gembong"
                        value={formLokasi}
                        onChange={(e) => setFormLokasi(e.target.value)}
                        className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Nama Wisatawan / Kontributor <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Nama Anda"
                        value={formPenulis}
                        onChange={(e) => setFormPenulis(e.target.value)}
                        className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  {/* Cerita Singkat / Keterangan */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Deskripsi & Pengalaman Singkat
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Ceritakan serunya pengalaman Anda di tempat ini..."
                      value={formKeterangan}
                      onChange={(e) => setFormKeterangan(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    />
                  </div>

                  {/* Tags */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Tagar (Pisahkan dengan koma)
                    </label>
                    <input
                      type="text"
                      placeholder="PatiWisata, SedinaIngPati, KulinerNusantara"
                      value={formTags}
                      onChange={(e) => setFormTags(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Submit Button */}
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
                      className="px-5 py-2 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md shadow-blue-500/20 transition-all hover:scale-105"
                    >
                      Tayangkan di Galeri
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
