import React, { useEffect, useState, useRef } from 'react';
import {
  MapPin,
  ExternalLink,
  Layers,
  Search,
  WifiOff,
  CheckCircle,
  Compass,
  Navigation,
  Download,
  Share2,
  FileText
} from 'lucide-react';
import { Destination, CategoryType } from '../types';
import { DESTINATIONS_DATA } from '../data/destinationsData';

interface InteractiveMapProps {
  onSelectDestination?: (dest: Destination) => void;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({
  onSelectDestination
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDestination, setActiveDestination] = useState<Destination | null>(
    DESTINATIONS_DATA[0] // Default Waduk Seloromo
  );
  const [viewMode, setViewMode] = useState<'interactive' | 'offline_vector'>('interactive');
  const [cachedStatus, setCachedStatus] = useState<boolean>(true);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const leafletMapRef = useRef<any>(null);
  const markersGroupRef = useRef<any>(null);

  // Filter destinations
  const filteredDestinations = DESTINATIONS_DATA.filter((dest) => {
    const matchCategory = selectedCategory === 'all' || dest.kategori === selectedCategory;
    const matchSearch =
      dest.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.lokasi.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.kecamatan.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  // Color mapping based on category (Clean Blue & White themed accents)
  const getCategoryColor = (kategori: CategoryType) => {
    switch (kategori) {
      case 'alam':
        return '#0284c7'; // Sky blue
      case 'sejarah':
        return '#2563eb'; // Royal blue
      case 'budaya':
        return '#3b82f6'; // Bright blue
      case 'religi':
        return '#1d4ed8'; // Deep blue
      case 'buatan':
        return '#0ea5e9'; // Cyan blue
      case 'kuliner':
        return '#f97316'; // Amber accent for food
      default:
        return '#2563eb';
    }
  };

  // Initialize or update Leaflet Map
  useEffect(() => {
    let isMounted = true;

    const initMap = async () => {
      if (!mapContainerRef.current || viewMode !== 'interactive') return;

      try {
        const L = await import('leaflet');

        if (!leafletMapRef.current && mapContainerRef.current) {
          const map = L.map(mapContainerRef.current, {
            center: [-6.755, 111.037], // Center of Pati
            zoom: 11,
            zoomControl: true,
            scrollWheelZoom: false
          });

          // OpenStreetMap Tile Layer
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution: '© OpenStreetMap contributors | SIP Sedina ing Pati'
          }).addTo(map);

          leafletMapRef.current = map;
          markersGroupRef.current = L.layerGroup().addTo(map);
        }

        // Update markers
        if (markersGroupRef.current && leafletMapRef.current) {
          markersGroupRef.current.clearLayers();

          filteredDestinations.forEach((dest) => {
            const color = getCategoryColor(dest.kategori);
            const isSelected = activeDestination?.id === dest.id;

            // Custom SVG icon for pristine crisp appearance
            const customIcon = L.divIcon({
              className: 'custom-pin-marker',
              html: `
                <div style="
                  background-color: ${isSelected ? '#1e3a8a' : color};
                  width: ${isSelected ? '32px' : '26px'};
                  height: ${isSelected ? '32px' : '26px'};
                  border-radius: 50% 50% 50% 0;
                  transform: rotate(-45deg);
                  border: 2px solid #ffffff;
                  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  transition: all 0.2s ease;
                ">
                  <div style="
                    width: 8px;
                    height: 8px;
                    background-color: #ffffff;
                    border-radius: 50%;
                  "></div>
                </div>
              `,
              iconSize: [isSelected ? 32 : 26, isSelected ? 32 : 26],
              iconAnchor: [isSelected ? 16 : 13, isSelected ? 32 : 26]
            });

            const marker = L.marker([dest.lat, dest.lng], { icon: customIcon });

            marker.on('click', () => {
              if (isMounted) {
                setActiveDestination(dest);
                if (leafletMapRef.current) {
                  leafletMapRef.current.setView([dest.lat, dest.lng], 13, {
                    animate: true
                  });
                }
              }
            });

            marker.addTo(markersGroupRef.current);
          });
        }
      } catch (err) {
        console.warn('Leaflet map initialization fallback to Vector Map:', err);
        setViewMode('offline_vector');
      }
    };

    initMap();

    return () => {
      isMounted = false;
    };
  }, [filteredDestinations, activeDestination, viewMode]);

  // Clean up leaflet when unmounting
  useEffect(() => {
    return () => {
      if (leafletMapRef.current) {
        leafletMapRef.current.remove();
        leafletMapRef.current = null;
      }
    };
  }, []);

  const handleSelectFromList = (dest: Destination) => {
    setActiveDestination(dest);
    if (leafletMapRef.current && viewMode === 'interactive') {
      leafletMapRef.current.setView([dest.lat, dest.lng], 13, { animate: true });
    }
  };

  return (
    <section className="py-12 md:py-16 bg-slate-50 dark:bg-slate-950/60 border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0c2b64]/10 dark:bg-[#1a56a4]/30 border border-[#1a56a4]/30 text-[#0c2b64] dark:text-[#38bdf8] text-xs font-bold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5" />
              Sistem Navigasi & Peta Geografis Pati
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Peta Interaktif <span className="text-transparent bg-clip-text bg-linear-to-r from-[#0c2b64] via-[#1a56a4] to-[#2575fc] dark:from-[#38bdf8] dark:to-[#60a5fa]">Destinasi Wisata Pati</span>
            </h2>
            <p className="mt-1 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl font-normal">
              Eksplorasi persebaran 135 destinasi di seluruh Kabupaten Pati dengan pin lokasi presisi dan rute langsung via Google Maps.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-bold flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>135 Titik Terintegrasi Google Maps</span>
            </span>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="mt-2 bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Cari titik peta (misal: Seloromo, Juwana)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Category Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 text-xs font-medium">
            {[
              { id: 'all', label: 'Semua Kategori' },
              { id: 'alam', label: 'Alam' },
              { id: 'sejarah', label: 'Sejarah' },
              { id: 'budaya', label: 'Budaya' },
              { id: 'religi', label: 'Religi' },
              { id: 'buatan', label: 'Rekreasi' },
              { id: 'kuliner', label: 'Kuliner & Oleh-Oleh' }
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white font-semibold shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Map View & Active Card Grid */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Map Display Box (8 Cols) */}
          <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-lg h-[460px] md:h-[560px] relative">
            {viewMode === 'interactive' ? (
              <div ref={mapContainerRef} className="w-full h-full z-10" />
            ) : (
              /* Offline Vector / Schematic Map of Kabupaten Pati */
              <div className="w-full h-full bg-linear-to-b from-blue-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 p-6 flex flex-col justify-between overflow-y-auto">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider">
                        Peta Vektor Luring Aktif (Offline Guaranteed)
                      </span>
                    </div>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      Titik Pusat: Alun-Alun Simpang Lima Pati (0.0 km)
                    </span>
                  </div>

                  <p className="mt-3 text-xs text-slate-600 dark:text-slate-300">
                    Mode ini tidak membutuhkan koneksi internet sama sekali. Anda dapat memilih destinasi di bawah untuk melihat rute kompas, jarak tempuh, dan koordinat GPS.
                  </p>
                </div>

                {/* Vector Grid of Locations */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
                  {filteredDestinations.slice(0, 8).map((dest) => (
                    <div
                      key={dest.id}
                      onClick={() => setActiveDestination(dest)}
                      className={`p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                        activeDestination?.id === dest.id
                          ? 'border-blue-600 bg-blue-50/80 dark:bg-blue-900/30 text-blue-900 dark:text-blue-100 shadow-xs'
                          : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/60 hover:border-blue-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold truncate max-w-[170px]">{dest.nama}</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-semibold">
                          {dest.kecamatan}
                        </span>
                      </div>
                      <div className="mt-1 flex items-center justify-between text-slate-500 dark:text-slate-400 text-[11px]">
                        <span>Tiket: {dest.tiket}</span>
                        <span className="font-mono">{dest.lat.toFixed(3)}, {dest.lng.toFixed(3)}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-3 bg-[#0c2b64] text-white rounded-2xl flex items-center justify-between text-xs border border-[#38bdf8]/30">
                  <div className="flex items-center gap-2">
                    <Navigation className="w-4 h-4 text-[#38bdf8] shrink-0" />
                    <span>Navigasi langsung: Klik tombol Google Maps pada destinasi untuk rute berkendara.</span>
                  </div>
                  <span className="font-bold text-[#38bdf8] text-[11px] shrink-0">135 Titik Siap</span>
                </div>
              </div>
            )}

            {/* Floating Quick Legend */}
            <div className="absolute bottom-3 left-3 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-3 py-2 rounded-xl border border-slate-200/80 dark:border-slate-700 shadow-md hidden sm:flex items-center gap-3 text-[11px]">
              <span className="font-semibold text-slate-700 dark:text-slate-300">Legenda:</span>
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-600" />
                <span className="text-slate-600 dark:text-slate-400">Alam</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-700" />
                <span className="text-slate-600 dark:text-slate-400">Religi & Sejarah</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                <span className="text-slate-600 dark:text-slate-400">Kuliner & Ekraf</span>
              </div>
            </div>
          </div>

          {/* Active Destination Card (4 Cols) */}
          <div className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-5 shadow-lg flex flex-col justify-between">
            {activeDestination ? (
              <div className="space-y-4">
                {/* Image */}
                <div className="relative aspect-16/10 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={activeDestination.imageUrl}
                    alt={activeDestination.nama}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wide bg-[#0c2b64] text-white shadow-xs border border-[#38bdf8]/30">
                    {activeDestination.kategoriLabel}
                  </div>
                  <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md text-xs font-semibold bg-black/70 text-white backdrop-blur">
                    ⭐ {activeDestination.rating} ({activeDestination.reviewsCount})
                  </div>
                </div>

                {/* Details */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    {activeDestination.nama}
                  </h3>
                  <div className="mt-1 flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-[#0c2b64] dark:text-[#38bdf8] shrink-0" />
                    <span>{activeDestination.lokasi}</span>
                  </div>
                  <div className="mt-2 text-[10px] font-bold px-2 py-1 rounded-md bg-[#0c2b64]/10 dark:bg-[#1a56a4]/30 text-[#0c2b64] dark:text-[#38bdf8]">
                    📷 Dokumentasi Resmi: {activeDestination.sumberGambar}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-xs space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-slate-500 dark:text-slate-400">Tiket / Masuk:</span>
                    <span className="font-bold text-[#0c2b64] dark:text-[#38bdf8]">{activeDestination.tiket}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 dark:text-slate-400">Jam Buka:</span>
                    <span className="font-medium text-slate-700 dark:text-slate-200">{activeDestination.jamBuka || '08.00 - 17.00 WIB'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 dark:text-slate-400">Koordinat GPS:</span>
                    <span className="font-mono text-slate-700 dark:text-slate-200 text-[11px]">{activeDestination.lat.toFixed(4)}, {activeDestination.lng.toFixed(4)}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-1">
                    Daya Tarik Utama
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {activeDestination.dayaTarik}
                  </p>
                </div>

                {/* Facilities */}
                {activeDestination.fasilitas && (
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-1.5">
                      Fasilitas
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {activeDestination.fasilitas.map((fas, i) => (
                        <span
                          key={i}
                          className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                        >
                          ✓ {fas}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Direct Google Maps & Action */}
                <div className="pt-2 space-y-2">
                  <a
                    href={activeDestination.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#0c2b64] hover:bg-[#164b91] text-white text-xs font-bold shadow-md shadow-[#0c2b64]/30 transition-all hover:scale-[1.02] border border-[#38bdf8]/30"
                  >
                    <Navigation className="w-4 h-4 text-[#38bdf8]" />
                    <span>Buka Rute Langsung (Google Maps)</span>
                  </a>

                  {onSelectDestination && (
                    <button
                      type="button"
                      onClick={() => onSelectDestination(activeDestination)}
                      className="w-full py-2 px-4 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-semibold transition"
                    >
                      Lihat Rincian Destinasi Lengkap
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div className="p-8 text-center text-slate-400">
                Pilih pin pada peta untuk menampilkan detail destinasi.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
