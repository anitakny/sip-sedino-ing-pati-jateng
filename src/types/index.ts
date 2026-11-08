export type CategoryType = 
  | 'alam' 
  | 'sejarah' 
  | 'budaya' 
  | 'religi' 
  | 'buatan' 
  | 'kuliner';

export interface Destination {
  id: number;
  nama: string;
  kategori: CategoryType;
  kategoriLabel: string;
  lokasi: string;
  kecamatan: string;
  tiket: string;
  dayaTarik: string;
  aktivitas: string;
  sumberGambar: string;
  imageUrl: string;
  googleMapsUrl: string;
  lat: number;
  lng: number;
  rating: number;
  reviewsCount: number;
  jamBuka?: string;
  fasilitas?: string[];
  isPopular?: boolean;
}

export interface ItineraryStop {
  waktu: string;
  jenisWisata: string;
  namaDestinasi: string;
  lokasi: string;
  tiket: string;
  aktivitas: string;
  travelTime: string;
  mapsUrl: string;
}

export interface ItineraryPackage {
  id: number;
  nomor: number;
  judul: string;
  deskripsi: string;
  ruteRingkas: string;
  estimasiBiaya: string;
  destinasiUtama: string[];
  stops: ItineraryStop[];
}

export interface EkrafCategory {
  id: string;
  nama: string;
  deskripsi: string;
  ikon: string;
  jumlahPelaku: string;
  sentra: string;
}

export interface EkrafProduct {
  id: string;
  kategoriId: string;
  nama: string;
  kategori: string;
  deskripsi: string;
  harga: string;
  lokasiSentra: string;
  pengrajin: string;
  kontakWa: string;
  keunggulan: string[];
  imageUrl: string;
}

export interface MediaItem {
  id: string;
  judul: string;
  keterangan: string;
  tipe: 'foto' | 'video';
  url: string;
  thumbnailUrl?: string;
  penulis: string;
  lokasi: string;
  tanggal: string;
  likes: number;
  tags?: string[];
}

export interface ReviewItem {
  id: string;
  nama: string;
  asal: string;
  destinasi: string;
  rating: number;
  tanggal: string;
  komentar: string;
  avatarUrl: string;
  rekomendasi: boolean;
}

export interface ContactMessage {
  nama: string;
  email: string;
  telepon: string;
  subjek: string;
  kategori: 'pertanyaan' | 'saran' | 'kerjasama' | 'advokasi_sip';
  pesan: string;
}
