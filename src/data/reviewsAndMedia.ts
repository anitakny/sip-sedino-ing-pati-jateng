import { MediaItem, ReviewItem } from '../types';

export const INITIAL_MEDIA_ITEMS: MediaItem[] = [
  {
    id: 'media-1',
    judul: 'Kabut Pagi & Savana Hijau Waduk Seloromo',
    keterangan: 'Pemandangan dramatis saat matahari terbit di Waduk Seloromo berlatar Gunung Muria. Suasana sangat damai dan menyejukkan hati.',
    tipe: 'foto',
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85',
    thumbnailUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    penulis: 'Rian Pratama',
    lokasi: 'Gribigan, Gembong',
    tanggal: '3 hari yang lalu',
    likes: 142,
    tags: ['WadukSeloromo', 'SunriseMuria', 'CampingPati']
  },
  {
    id: 'media-2',
    judul: 'Eksplorasi Stalaktit & Sungai Bawah Tanah Gua Pancur',
    keterangan: 'Video susur gua karst sejauh 127 meter di Jimbaran Kayen. Airnya jernih dingin dan formasi batuannya luar biasa indah!',
    tipe: 'video',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-waterfall-in-forest-2213-large.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80',
    penulis: 'Dian Safitri (Traveler)',
    lokasi: 'Jimbaran, Kayen',
    tanggal: '5 hari yang lalu',
    likes: 98,
    tags: ['Caving', 'GuaPancur', 'GeoparkKendeng']
  },
  {
    id: 'media-3',
    judul: 'Mencanting Motif Sigar Penjalin di Sentra Batik Bakaran',
    keterangan: 'Dokumentasi proses detail pembuatan batik tulis Bakaran kuno oleh pengrajin generasi ketiga Juwana. Bangga budaya nusantara!',
    tipe: 'foto',
    url: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=1600&q=85',
    thumbnailUrl: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=600&q=80',
    penulis: 'Budi Santoso',
    lokasi: 'Bakaran Wetan, Juwana',
    tanggal: '1 minggu yang lalu',
    likes: 187,
    tags: ['BatikBakaran', 'EkrafPati', 'WarisanBudaya']
  },
  {
    id: 'media-4',
    judul: 'Nikmatnya Nasi Gandul Asli Gajahmati Beralas Daun Pisang',
    keterangan: 'Kuah santan gurih manis berpadu lauk lidah dan paru goreng garing dower. Wajib dicoba kalau mampir ke Pati!',
    tipe: 'foto',
    url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=85',
    thumbnailUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
    penulis: 'Maya Anggraini (Food Blogger)',
    lokasi: 'Gajahmati, Pati Kota',
    tanggal: '1 minggu yang lalu',
    likes: 245,
    tags: ['KulinerPati', 'NasiGandul', 'MakanMalam']
  },
  {
    id: 'media-5',
    judul: 'Pemandangan Udara Perkebunan Kopi Jolong Lereng Muria',
    keterangan: 'Suasana asri nan damai di kebun kopi peninggalan kolonial Belanda. Udaranya sangat sejuk dan bebas polusi.',
    tipe: 'video',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-green-mountain-range-42907-large.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80',
    penulis: 'Ahmad Fauzi (Drone Pilot)',
    lokasi: 'Sitiluhur, Gembong',
    tanggal: '2 minggu yang lalu',
    likes: 310,
    tags: ['Jolong', 'KopiMuria', 'WisataAlam']
  },
  {
    id: 'media-6',
    judul: 'Kemegahan Arsitektur Masjid Agung Baitunnur Saat Senja',
    keterangan: 'Pancaran lampu malam Alun-Alun Simpang Lima Pati berpadu anggun dengan kubah hijau masjid kebanggaan warga Pati.',
    tipe: 'foto',
    url: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1600&q=85',
    thumbnailUrl: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=600&q=80',
    penulis: 'Hendra Gunawan',
    lokasi: 'Alun-Alun Simpang Lima, Pati Kota',
    tanggal: '2 minggu yang lalu',
    likes: 164,
    tags: ['MasjidBaitunnur', 'ReligiPati', 'PusatKota']
  }
];

export const INITIAL_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    nama: 'Dr. Hendra Wijaya',
    asal: 'Semarang, Jawa Tengah',
    destinasi: 'Paket 1: Waduk Seloromo & Nasi Gandul Gajahmati',
    rating: 5,
    tanggal: '4 November 2026',
    komentar: 'Program Sedina ing Pati (SIP) sangat sistematis! Rutenya terarah dari lereng Muria ke pusat kota tanpa buang waktu macet. Waduk Seloromo pagi hari sungguh magis pemandangannya, lalu ditutup Nasi Gandul Pak H. Gajah yang dagingnya lumer.',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    rekomendasi: true
  },
  {
    id: 'rev-2',
    nama: 'Siti Sarah Nurhaliza',
    asal: 'Jakarta Selatan',
    destinasi: 'Sentra Batik Tulis Bakaran & Mangut Juwana',
    rating: 5,
    tanggal: '28 Oktober 2026',
    komentar: 'Website ini sangat memudahkan wisatawan dari luar kota. Kami bisa langsung klik direct Google Maps ke sentra Batik Bakaran dan pesan makan siang di Mangut Bu Fat. Fitur navigasi petanya sangat responsif dan akurat!',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    rekomendasi: true
  },
  {
    id: 'rev-3',
    nama: 'Aris Wicaksono',
    asal: 'Surabaya, Jawa Timur',
    destinasi: 'Paket 2: Gua Pancur & Sego Tewel Tambakromo',
    rating: 5,
    tanggal: '22 Oktober 2026',
    komentar: 'Caving di Gua Pancur seru banget, stalaktitnya masih sangat aktif meneteskan air sejuk. Dilanjut makan Sego Tewel beralas daun jati di Tambakromo harganya murah meriah tapi rasanya juara dunia.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    rekomendasi: true
  },
  {
    id: 'rev-4',
    nama: 'Dewi Sartika & Keluarga',
    asal: 'Solo / Surakarta',
    destinasi: 'Desa Wisata Jrahi & Agrowisata Jolong',
    rating: 4.9,
    tanggal: '15 Oktober 2026',
    komentar: 'Desa Jrahi betul-betul percontohan toleransi yang indah di lereng Muria. Anak-anak sangat gembira bisa petik jeruk pamelo dan minum kopi robusta asli Jolong. Sangat merekomendasikan aplikasi SIP ini untuk siapa pun yang hendak berlibur di Pati.',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    rekomendasi: true
  }
];
