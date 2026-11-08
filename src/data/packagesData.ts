import { ItineraryPackage } from '../types';

export const OFFICIAL_PDF_URLS = {
  paketAdvokasiSip: '/assets/aistudio/20_Paket_Advokasi_SIP_Sedina_ing_Pati_e806a65f.pdf',
  daftar135Wisata: '/assets/aistudio/Daftar_135_Wisata_dan_Kuliner_Pati_Full_Maps-v5_ec65a6d3.pdf'
};

export const PACKAGES_DATA: ItineraryPackage[] = [
  {
    id: 1,
    nomor: 1,
    judul: 'Pesona Lereng Muria & Kuliner Native Gajahmati',
    deskripsi: 'Rute kawasan Pegunungan Muria bagian tengah menggabungkan waduk alami, situs spiritual wali, kebudayaan toleransi, dan Nasi Gandul asli Gajahmati.',
    ruteRingkas: 'Gembong ➔ Mojosemi ➔ Gajahmati ➔ Alun-Alun Pati',
    estimasiBiaya: 'Rp 25.000 - Rp 45.000 / orang',
    destinasiUtama: ['Waduk Seloromo', 'Makam Ki Ageng Majasemi', 'Nasi Gandul H. Gajah', 'Pendopo Kabupaten Pati'],
    stops: [
      {
        waktu: '08:00 - 10:30',
        jenisWisata: 'Wisata Alam',
        namaDestinasi: 'Waduk Seloromo',
        lokasi: 'Gribigan, Gembong',
        tiket: 'Rp 5.000',
        aktivitas: 'Nikmati keindahan waduk berlatar Gunung Muria & piknik rumput hijau',
        travelTime: 'Start Pagi',
        mapsUrl: 'https://maps.app.goo.gl/JoqPwXomjZz7asxG9'
      },
      {
        waktu: '11:00 - 13:00',
        jenisWisata: 'Wisata Religi',
        namaDestinasi: 'Makam Ki Ageng Majasemi',
        lokasi: 'Mojosemi, Pati Kota',
        tiket: 'Gratis',
        aktivitas: 'Ziarah sejarah ulama tua pendiri desa & babad Pati',
        travelTime: '± 25 menit',
        mapsUrl: 'https://maps.app.goo.gl/0lL3XeL1dDdH1oeO9'
      },
      {
        waktu: '13:15 - 14:30',
        jenisWisata: 'Wisata Kuliner',
        namaDestinasi: 'Nasi Gandul H. Gajah',
        lokasi: 'Gajahmati, Pati Kota',
        tiket: 'Rp 15k - 30k',
        aktivitas: 'Makan siang kuliner ikonik Pati berkuah santan gurih & potongan daging sapi empuk beralas daun pisang',
        travelTime: '± 10 menit',
        mapsUrl: 'https://maps.app.goo.gl/gajahmatigandul1'
      },
      {
        waktu: '15:00 - 17:00',
        jenisWisata: 'Wisata Budaya',
        namaDestinasi: 'Pendopo Kabupaten Pati',
        lokasi: 'Pusat Kota Pati',
        tiket: 'Gratis',
        aktivitas: 'Fotografi arsitektur Jawa klasik & napak tilas pusat Kadipaten kuno Pesantenan',
        travelTime: '± 10 menit',
        mapsUrl: 'https://maps.google.com/?q=Pendopo+Kabupaten+Pati'
      }
    ]
  },
  {
    id: 2,
    nomor: 2,
    judul: 'Eksotisme Karst Kendeng & Kuliner Sego Tewel',
    deskripsi: 'Jelajah kawasan Pegunungan Kendeng Selatan menikmati keajaiban gua alami berstalaktit aktif, petilasan sejarah lokal, dan tradisi makan beralas daun jati.',
    ruteRingkas: 'Jimbaran Kayen ➔ Landoh Kayen ➔ Tambakromo',
    estimasiBiaya: 'Rp 20.000 - Rp 35.000 / orang',
    destinasiUtama: ['Gua Pancur', 'Makam Syekh Jangkung (Saridin)', 'Sego Tewel Mbah Har', 'Petilasan Nyai Ageng Ngerang'],
    stops: [
      {
        waktu: '08:00 - 10:30',
        jenisWisata: 'Wisata Alam',
        namaDestinasi: 'Gua Pancur',
        lokasi: 'Jimbaran, Kayen',
        tiket: 'Rp 5.000',
        aktivitas: 'Eksplorasi gua karst, stalaktit aktif, sungai bawah tanah, & wahana bebek air',
        travelTime: 'Start Pagi',
        mapsUrl: 'https://maps.app.goo.gl/4dU6QlB4wWwA4hyH2'
      },
      {
        waktu: '11:00 - 12:30',
        jenisWisata: 'Wisata Religi',
        namaDestinasi: 'Makam Syekh Jangkung (Saridin)',
        lokasi: 'Landoh, Kayen',
        tiket: 'Gratis',
        aktivitas: 'Ziarah religi & mempelajari keteladanan spiritual Syekh Jangkung',
        travelTime: '± 15 menit',
        mapsUrl: 'https://maps.app.goo.gl/6dE5PwD3vVvZ3gwG1'
      },
      {
        waktu: '13:00 - 14:30',
        jenisWisata: 'Wisata Kuliner',
        namaDestinasi: 'Sego Tewel Tambakromo (Mbah Har)',
        lokasi: 'Tambakromo',
        tiket: 'Rp 8k - 15k',
        aktivitas: 'Makan siang gulai nangka muda kuah santan pedas beralas daun jati otentik',
        travelTime: '± 20 menit',
        mapsUrl: 'https://maps.app.goo.gl/segotewel22'
      },
      {
        waktu: '15:00 - 17:00',
        jenisWisata: 'Wisata Budaya',
        namaDestinasi: 'Petilasan Nyai Ageng Ngerang',
        lokasi: 'Tambakromo',
        tiket: 'Gratis',
        aktivitas: 'Napak tilas kebudayaan & sejarah peranan wanita dalam babad Pati',
        travelTime: '± 10 menit',
        mapsUrl: 'https://maps.app.goo.gl/3fF9RyF7xXxB7iyI5'
      }
    ]
  },
  {
    id: 3,
    nomor: 3,
    judul: 'Pesisir Maritim Juwana & Batik Ancient Bakaran',
    deskripsi: 'Menelusuri warisan budaya pesisir Juwana mulai dari batik kuno Bakaran, kelenteng tua akulturasi budaya, hingga olahan Mangut Manyung pedas.',
    ruteRingkas: 'Bakaran Juwana ➔ Klenteng Tjoe Tik Bio ➔ Mangut Juwana ➔ Muara Juwana',
    estimasiBiaya: 'Rp 45.000 - Rp 100.000 / orang',
    destinasiUtama: ['Sentra Batik Bakaran', 'Kelenteng Tjoe Tik Bio', 'Mangut Kepala Manyung Bu Fat', 'Monumen Bandeng & Muara'],
    stops: [
      {
        waktu: '08:00 - 10:30',
        jenisWisata: 'Wisata Budaya',
        namaDestinasi: 'Sentra Batik Bakaran',
        lokasi: 'Bakaran, Juwana',
        tiket: 'Gratis',
        aktivitas: 'Belajar membatik motif kuno Sigar Penjalin & keliling kampung batik pesisir',
        travelTime: 'Start Pagi',
        mapsUrl: 'https://maps.app.goo.gl/2rR7DkR5jJjN5ukU3'
      },
      {
        waktu: '11:00 - 12:30',
        jenisWisata: 'Wisata Religi',
        namaDestinasi: 'Kelenteng Tjoe Tik Bio Juwana',
        lokasi: 'Juwana Kota',
        tiket: 'Gratis',
        aktivitas: 'Wisata sejarah arsitektur klenteng kuno muara pesisir Juwana',
        travelTime: '± 15 menit',
        mapsUrl: 'https://maps.app.goo.gl/7cD1PwD9vVvZ9gwG7'
      },
      {
        waktu: '12:45 - 14:30',
        jenisWisata: 'Wisata Kuliner',
        namaDestinasi: 'Mangut Kepala Manyung Bu Fat',
        lokasi: 'Juwana Kota',
        tiket: 'Rp 35k - 90k',
        aktivitas: 'Makan siang kuliner kepala ikan ndas manyung asap super pedas fenomenal',
        travelTime: '± 5 menit',
        mapsUrl: 'https://maps.app.goo.gl/bufatmanyung20'
      },
      {
        waktu: '15:00 - 17:00',
        jenisWisata: 'Wisata Alam',
        namaDestinasi: 'Monumen Bandeng & Muara Juwana',
        lokasi: 'Juwana Kota',
        tiket: 'Gratis',
        aktivitas: 'Foto di monumen bandeng raksasa ikonik & menikmati angin sore muara sungai',
        travelTime: '± 10 menit',
        mapsUrl: 'https://maps.app.goo.gl/2qP7BiX5hHhL5siS3'
      }
    ]
  },
  {
    id: 4,
    nomor: 4,
    judul: 'Desa Pancasila Jrahi & Cita Rasa Soto Kemiri',
    deskripsi: 'Kunjungan ke Desa Wisata Pancasila Jrahi di lereng Gunung Muria dengan air terjun alami, vihara bukit, dan Soto Kemiri khas Pati.',
    ruteRingkas: 'Air Terjun Grenjengan ➔ Vihara Bodhi Giri ➔ Soto Pak Man ➔ Desa Jrahi',
    estimasiBiaya: 'Rp 20.000 - Rp 35.000 / orang',
    destinasiUtama: ['Air Terjun Grenjengan Sewu', 'Vihara Bodhi Giri', 'Soto Kemiri Pak Man', 'Desa Wisata Jrahi'],
    stops: [
      {
        waktu: '08:00 - 10:30',
        jenisWisata: 'Wisata Alam',
        namaDestinasi: 'Air Terjun Grenjengan Sewu',
        lokasi: 'Jrahi, Gunungwungkal',
        tiket: 'Rp 5.000',
        aktivitas: 'Trekking hijau & menikmati keasrian air terjun alami lereng Muria',
        travelTime: 'Start Pagi',
        mapsUrl: 'https://maps.app.goo.gl/9xK2LmN7yPqR3bsB8'
      },
      {
        waktu: '11:00 - 12:30',
        jenisWisata: 'Wisata Religi',
        namaDestinasi: 'Vihara Bodhi Giri',
        lokasi: 'Jrahi, Gunungwungkal',
        tiket: 'Gratis',
        aktivitas: 'Wisata spiritual & meditasi dengan panorama bukit yang menenangkan',
        travelTime: '± 10 menit',
        mapsUrl: 'https://maps.app.goo.gl/7hI1TaF9zZzD9kaK7'
      },
      {
        waktu: '13:30 - 14:45',
        jenisWisata: 'Wisata Kuliner',
        namaDestinasi: 'Soto Kemiri Pak Man',
        lokasi: 'Pati Kota',
        tiket: 'Rp 10k - 20k',
        aktivitas: 'Makan siang Soto Kemiri kuah kuning gurih rempah kemiri dengan suwiran ayam',
        travelTime: '± 45 menit',
        mapsUrl: 'https://maps.app.goo.gl/mankemiri12'
      },
      {
        waktu: '15:00 - 17:00',
        jenisWisata: 'Wisata Budaya',
        namaDestinasi: 'Desa Wisata Jrahi (Keliling Desa)',
        lokasi: 'Jrahi, Gunungwungkal',
        tiket: 'Gratis',
        aktivitas: 'Edukasi kerukunan umat 5 agama, tradisi kebun kopi, & budaya lokal',
        travelTime: '± 45 menit',
        mapsUrl: 'https://maps.app.goo.gl/5oO0AhO8gGgK8rhR6'
      }
    ]
  },
  {
    id: 5,
    nomor: 5,
    judul: 'Warisan Majapahit & Sejarah Genuk Kemiri',
    deskripsi: 'Napak tilas sejarah besar Kerajaan Majapahit, cikal bakal Kadipaten Pesantenan Pati, serta keasrian Sendang Kalijaga.',
    ruteRingkas: 'Muktiharjo ➔ Sendang Sani ➔ Nasi Gandul Warsoman ➔ Situs Genuk Kemiri',
    estimasiBiaya: 'Rp 25.000 - Rp 40.000 / orang',
    destinasiUtama: ['Pintu Gerbang Majapahit', 'Sendang Sani', 'Nasi Gandul Warsoman', 'Situs Genuk Kemiri'],
    stops: [
      {
        waktu: '08:00 - 10:30',
        jenisWisata: 'Wisata Sejarah',
        namaDestinasi: 'Pintu Gerbang Majapahit',
        lokasi: 'Muktiharjo, Margorejo',
        tiket: 'Rp 3.000',
        aktivitas: 'Melihat cagar budaya pintu jati kuno Majapahit & legenda Sunan Muria',
        travelTime: 'Start Pagi',
        mapsUrl: 'https://maps.app.goo.gl/3uL9HyS7nNnR7yoY5'
      },
      {
        waktu: '10:45 - 12:15',
        jenisWisata: 'Wisata Alam',
        namaDestinasi: 'Mata Air Sendang Sani',
        lokasi: 'Tamansari, Tlogowungu',
        tiket: 'Rp 5.000',
        aktivitas: 'Menikmati mata air jernih peninggalan Sunan Kalijaga & pohon tua rindang',
        travelTime: '± 15 menit',
        mapsUrl: 'https://maps.app.goo.gl/7sJ1FwQ9lLlP9wmW7'
      },
      {
        waktu: '12:30 - 14:00',
        jenisWisata: 'Wisata Kuliner',
        namaDestinasi: 'Nasi Gandul Pak Warsoman',
        lokasi: 'Mayor Kusmanto, Pati Kota',
        tiket: 'Rp 15k - 30k',
        aktivitas: 'Makan siang Nasi Gandul lauk kikil/daging empuk & tempe goreng renyah',
        travelTime: '± 15 menit',
        mapsUrl: 'https://maps.app.goo.gl/warsomangandul5'
      },
      {
        waktu: '14:30 - 17:00',
        jenisWisata: 'Wisata Religi',
        namaDestinasi: 'Situs Genuk Kemiri',
        lokasi: 'Kalidoro, Pati Kota',
        tiket: 'Gratis',
        aktivitas: 'Ziarah sejarah asal mula Kadipaten Pesantenan cikal bakal Kota Pati',
        travelTime: '± 10 menit',
        mapsUrl: 'https://maps.app.goo.gl/2hH7TaH5zZzD5kaK3'
      }
    ]
  },
  {
    id: 6,
    nomor: 6,
    judul: 'Agrowisata Gembong & Pusat Oleh-Oleh Waroeng Pati',
    deskripsi: 'Kombinasi wisata mangrove pesisir, pabrik gula peninggalan Belanda 1835, dan pusat belanja oleh-oleh terbesar Pati.',
    ruteRingkas: 'Kertomulyo ➔ PG Trangkil ➔ Waroeng Pati ➔ Masjid Agung Baitunnur',
    estimasiBiaya: 'Rp 25.000 - Rp 100.000 / orang',
    destinasiUtama: ['Pantai Kertomulyo Mangrove', 'Pabrik Gula Trangkil (Heritage)', 'Waroeng Pati Dua Kelinci', 'Masjid Baitunnur'],
    stops: [
      {
        waktu: '08:00 - 10:30',
        jenisWisata: 'Wisata Alam',
        namaDestinasi: 'Pantai Kertomulyo Mangrove',
        lokasi: 'Kertomulyo, Trangkil',
        tiket: 'Rp 3.000',
        aktivitas: 'Menelusuri jembatan kayu konservasi hutan mangrove & panorama pesisir',
        travelTime: 'Start Pagi',
        mapsUrl: 'https://maps.app.goo.gl/9hY2UlF0aAaE0lcL8'
      },
      {
        waktu: '11:00 - 12:30',
        jenisWisata: 'Wisata Sejarah',
        namaDestinasi: 'Pabrik Gula Trangkil (Heritage)',
        lokasi: 'Trangkil',
        tiket: 'Gratis',
        aktivitas: 'Foto arsitektur industri kolonial Belanda tahun 1835 yang megah',
        travelTime: '± 10 menit',
        mapsUrl: 'https://maps.app.goo.gl/1vM8IzT6oOoS6zpZ4'
      },
      {
        waktu: '13:00 - 15:00',
        jenisWisata: 'Wisata Kuliner',
        namaDestinasi: 'Waroeng Pati (Resto & Oleh-Oleh)',
        lokasi: 'Margorejo, Pati',
        tiket: 'Rp 15k - 100k',
        aktivitas: 'Makan siang masakan khas Jawa & belanja oleh-oleh Dua Kelinci super lengkap',
        travelTime: '± 25 menit',
        mapsUrl: 'https://maps.app.goo.gl/waroengpati19'
      },
      {
        waktu: '15:30 - 17:30',
        jenisWisata: 'Wisata Religi',
        namaDestinasi: 'Masjid Agung Baitunnur Pati',
        lokasi: 'Alun-Alun Pati',
        tiket: 'Gratis',
        aktivitas: 'Ibadah & menikmati keindahan arsitektur masjid utama di jantung kota',
        travelTime: '± 15 menit',
        mapsUrl: 'https://maps.app.goo.gl/9gH2SzG0yYyC0jzJ8'
      }
    ]
  },
  {
    id: 7,
    nomor: 7,
    judul: 'Kearifan Adat Samin & Tradisi Kuliner Petis Runting',
    deskripsi: 'Mengenal faham kejujuran masyarakat adat Sedulur Sikep Samin di Sukolilo, petilasan irigasi kuno Menak Sopal, dan kuliner unik Petis Runting.',
    ruteRingkas: 'Sedulur Sikep ➔ Gua Wareh ➔ Menak Sopal ➔ Petis Runting',
    estimasiBiaya: 'Rp 20.000 - Rp 35.000 / orang',
    destinasiUtama: ['Komunitas Adat Sedulur Sikep', 'Gua Wareh', 'Petilasan Menak Sopal', 'Petis Runting Mbah Yanti'],
    stops: [
      {
        waktu: '08:00 - 10:30',
        jenisWisata: 'Wisata Budaya',
        namaDestinasi: 'Komunitas Adat Sedulur Sikep',
        lokasi: 'Karangrowo, Sukolilo',
        tiket: 'Gratis',
        aktivitas: 'Diskusi kebudayaan, belajar kearifan lokal faham Samin & kejujuran alam',
        travelTime: 'Start Pagi',
        mapsUrl: 'https://maps.app.goo.gl/7xX1JqX9pPpT9aqA7'
      },
      {
        waktu: '10:45 - 12:30',
        jenisWisata: 'Wisata Alam',
        namaDestinasi: 'Gua Wareh',
        lokasi: 'Kedumulyo, Sukolilo',
        tiket: 'Gratis / Parkir',
        aktivitas: 'Mandi di mata air jernih pegunungan Kendeng yang tak pernah surut',
        travelTime: '± 15 menit',
        mapsUrl: 'https://maps.app.goo.gl/6eV5RkC3xXxB3izI1'
      },
      {
        waktu: '12:45 - 14:00',
        jenisWisata: 'Wisata Sejarah',
        namaDestinasi: 'Petilasan Menak Sopal',
        lokasi: 'Sukolilo',
        tiket: 'Gratis',
        aktivitas: 'Ziarah sejarah pahlawan irigasi kuno pegunungan Kendeng',
        travelTime: '± 10 menit',
        mapsUrl: 'https://maps.app.goo.gl/8zA4MzA2sSsW2dtD0'
      },
      {
        waktu: '14:45 - 16:30',
        jenisWisata: 'Wisata Kuliner',
        namaDestinasi: 'Petis Runting Mbah Yanti',
        lokasi: 'Runting, Pati Kota',
        tiket: 'Rp 10k - 20k',
        aktivitas: 'Santap sore petis balungan kambing khas berkuah santan tepung beras sangrai',
        travelTime: '± 35 menit',
        mapsUrl: 'https://maps.app.goo.gl/petisrunting25'
      }
    ]
  },
  {
    id: 10,
    nomor: 10,
    judul: 'Sejuknya Agrowisata Jolong & Soto Kemiri Kemiri',
    deskripsi: 'Menikmati perkebunan kopi peninggalan Belanda di perbukitan Jolong, ziarah Kendeng, dan Soto Kemiri langsung di desa asalnya.',
    ruteRingkas: 'Agrowisata Jolong ➔ Omah Kopi Heritage ➔ Soto Pak Utomo ➔ Makam Ki Ageng Ngerang',
    estimasiBiaya: 'Rp 25.000 - Rp 40.000 / orang',
    destinasiUtama: ['Agrowisata Jolong 1', 'Omah Kopi Jolong Heritage', 'Soto Kemiri Pak Utomo', 'Makam Ki Ageng Ngerang'],
    stops: [
      {
        waktu: '08:00 - 11:00',
        jenisWisata: 'Wisata Alam',
        namaDestinasi: 'Agrowisata Jolong 1',
        lokasi: 'Sitiluhur, Gembong',
        tiket: 'Rp 10.000',
        aktivitas: 'Keliling kebun kopi kolonial Belanda, terapi ikan, & foto rumah pohon',
        travelTime: 'Start Pagi',
        mapsUrl: 'https://maps.app.goo.gl/8yY4KrO2qQqU2brB0'
      },
      {
        waktu: '11:30 - 13:00',
        jenisWisata: 'Wisata Budaya',
        namaDestinasi: 'Omah Kopi Jolong Heritage',
        lokasi: 'Gembong',
        tiket: 'Sesuai Jajan',
        aktivitas: 'Minum kopi robusta asli Jolong & foto arsitektur rustic kebun tua',
        travelTime: '± 10 menit',
        mapsUrl: 'https://maps.app.goo.gl/kopijolong30'
      },
      {
        waktu: '13:45 - 15:00',
        jenisWisata: 'Wisata Kuliner',
        namaDestinasi: 'Soto Kemiri Pak Utomo',
        lokasi: 'Kemiri, Pati Kota',
        tiket: 'Rp 10k - 18k',
        aktivitas: 'Makan siang Soto Kemiri resep tertua di desa asalnya lengkap dengan uritan',
        travelTime: '± 40 menit',
        mapsUrl: 'https://maps.app.goo.gl/utomokemiri11'
      },
      {
        waktu: '15:30 - 17:30',
        jenisWisata: 'Wisata Religi',
        namaDestinasi: 'Makam Ki Ageng Ngerang',
        lokasi: 'Tambakromo',
        tiket: 'Gratis',
        aktivitas: 'Ziarah spiritual kompleks waliyullah penyebar Islam perbukitan Kendeng',
        travelTime: '± 30 menit',
        mapsUrl: 'https://maps.app.goo.gl/0fG3RyF1xXxB1iyI9'
      }
    ]
  },
  {
    id: 16,
    nomor: 16,
    judul: 'Petualangan Air Terjun Lorodan Semar & Sentra Kuningan',
    deskripsi: 'Berenang di air terjun tebing bertingkat Kayen, industri kerajinan kuningan Juwana, dan kuliner Mangut Kepala Manyung.',
    ruteRingkas: 'Lorodan Semar ➔ Sentra Kuningan Juwana ➔ Mangut Istana ➔ Air Terjun Tadah Hujan',
    estimasiBiaya: 'Rp 40.000 - Rp 95.000 / orang',
    destinasiUtama: ['Air Terjun Lorodan Semar', 'Sentra Kerajinan Kuningan', 'Mangut Kepala Manyung Istana', 'Air Terjun Tadah Hujan'],
    stops: [
      {
        waktu: '08:00 - 10:30',
        jenisWisata: 'Wisata Alam',
        namaDestinasi: 'Air Terjun Lorodan Semar',
        lokasi: 'Sumbersari, Kayen',
        tiket: 'Rp 5.000',
        aktivitas: 'Berenang di kolam alami & perosotan air di tebing batu bertingkat',
        travelTime: 'Start Pagi',
        mapsUrl: 'https://maps.app.goo.gl/7yN3KmP5xQrS2ctC9'
      },
      {
        waktu: '11:00 - 12:30',
        jenisWisata: 'Wisata Budaya',
        namaDestinasi: 'Sentra Kerajinan Kuningan',
        lokasi: 'Juwana',
        tiket: 'Gratis',
        aktivitas: 'Melihat proses pengecoran logam kuningan & tembaga hiasan rumah',
        travelTime: '± 25 menit',
        mapsUrl: 'https://maps.app.goo.gl/1qQ8CjQ6iIiM6tjT4'
      },
      {
        waktu: '12:45 - 14:15',
        jenisWisata: 'Wisata Kuliner',
        namaDestinasi: 'Mangut Kepala Manyung Istana',
        lokasi: 'Raya Juwana-Pati',
        tiket: 'Rp 30k - 85k',
        aktivitas: 'Makan siang restoran spesialis mangut kepala ikan ndas manyung asap pedas',
        travelTime: '± 10 menit',
        mapsUrl: 'https://maps.app.goo.gl/istanamanyung21'
      },
      {
        waktu: '14:45 - 16:45',
        jenisWisata: 'Wisata Religi',
        namaDestinasi: 'Air Terjun Tadah Hujan & Petilasan',
        lokasi: 'Sukolilo',
        tiket: 'Gratis',
        aktivitas: 'Piknik tepi sungai tebing cadas & melihat petilasan sejarah sekitar',
        travelTime: '± 25 menit',
        mapsUrl: 'https://maps.app.goo.gl/5zP1LnQ4wRtU8duD6'
      }
    ]
  },
  {
    id: 20,
    nomor: 20,
    judul: 'Sentra Jeruk Bageng & Modernise Plaza Pati Cinema',
    deskripsi: 'Wisata petik buah jeruk Pamelo raksasa di perkebunan Bageng, hiburan modern bioskop Plaza Pati, & pusat kuliner gandul.',
    ruteRingkas: 'Bageng Gembong ➔ Plaza Pati ➔ Nasi Gandul Ronggo ➔ Hutan Kota Kalidoro',
    estimasiBiaya: 'Rp 25.000 - Rp 65.000 / orang',
    destinasiUtama: ['Desa Wisata Bageng (Jeruk)', 'Plaza Pati & Cinema', 'Nasi Gandul Pak H. Ronggo', 'Taman Hutan Kota Kalidoro'],
    stops: [
      {
        waktu: '08:00 - 10:30',
        jenisWisata: 'Wisata Budaya',
        namaDestinasi: 'Desa Wisata Bageng (Sentra Jeruk)',
        lokasi: 'Bageng, Gembong',
        tiket: 'Gratis / Petik',
        aktivitas: 'Petik jeruk Pamelo raksasa manis langsung dari pohon perkebunan Bageng',
        travelTime: 'Start Pagi',
        mapsUrl: 'https://maps.app.goo.gl/3pP9BiP7hHhL7siS5'
      },
      {
        waktu: '11:00 - 12:30',
        jenisWisata: 'Wisata Buatan',
        namaDestinasi: 'Plaza Pati & Cinema',
        lokasi: 'Pusat Kota Pati',
        tiket: 'Gratis Masuk',
        aktivitas: 'Hiburan perbelanjaan modern indoor & wahana cinema kota Pati',
        travelTime: '± 30 menit',
        mapsUrl: 'https://maps.app.goo.gl/4rQ6CjW4iIiM4tjT2'
      },
      {
        waktu: '12:45 - 14:15',
        jenisWisata: 'Wisata Kuliner',
        namaDestinasi: 'Nasi Gandul Pak H. Ronggo',
        lokasi: 'Jl. Kembang, Pati Kota',
        tiket: 'Rp 15k - 30k',
        aktivitas: 'Makan siang Nasi Gandul lauk limpa & otak sapi segar perasan jeruk nipis',
        travelTime: '± 5 menit',
        mapsUrl: 'https://maps.app.goo.gl/ronggogandul9'
      },
      {
        waktu: '14:45 - 17:00',
        jenisWisata: 'Wisata Alam',
        namaDestinasi: 'Taman Hutan Kota Kalidoro',
        lokasi: 'Kalidoro, Pati Kota',
        tiket: 'Gratis',
        aktivitas: 'Bersantai di ruang terbuka hijau kota bawah pepohonan rindang',
        travelTime: '± 10 menit',
        mapsUrl: 'https://maps.app.goo.gl/3dD9PwJ7vVvZ7gwG5'
      }
    ]
  }
];
