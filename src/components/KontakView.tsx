import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Clock,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  Copy,
  Check,
  AlertCircle
} from 'lucide-react';
import { ContactMessage } from '../types';
import confetti from 'canvas-confetti';

export const KontakView: React.FC = () => {
  const recipientEmail = 'sipsaqib1@gmail.com';
  const whatsappNumber = '6281234567890';

  const [formData, setFormData] = useState<ContactMessage>({
    nama: '',
    email: '',
    telepon: '',
    subjek: '',
    kategori: 'pertanyaan',
    pesan: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(recipientEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare direct mailto URL
    const mailtoSubject = encodeURIComponent(`[SIP Pati - ${formData.kategori.toUpperCase()}] ${formData.subjek || 'Pesan dari Pengunjung'}`);
    const mailtoBody = encodeURIComponent(
      `Halo Tim Advokasi SIP Sedina ing Pati,\n\n` +
      `Nama: ${formData.nama}\n` +
      `Email: ${formData.email}\n` +
      `No. Telepon/WA: ${formData.telepon || '-'}\n` +
      `Kategori: ${formData.kategori}\n\n` +
      `Pesan:\n${formData.pesan}\n\n` +
      `---\nDikirim melalui Portal Resmi SIP (Sedina ing Pati)`
    );

    const mailtoUrl = `mailto:${recipientEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch {}

      // Prompt to trigger mailto client
      window.location.href = mailtoUrl;

      // Reset form after 4 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          nama: '',
          email: '',
          telepon: '',
          subjek: '',
          kategori: 'pertanyaan',
          pesan: ''
        });
      }, 4000);
    }, 800);
  };

  const faqs = [
    {
      q: 'Bagaimana cara memanfaatkan Itinerary SIP "Sedina ing Pati"?',
      a: 'Setiap paket telah disusun secara tematik dan geografis searah dari jam 08.00 pagi hingga 17.30 sore. Anda cukup memilih paket yang sesuai dengan minat (misal: Pesona Muria, Pesisir Juwana, atau Sejarah Kerajaan) dan mengklik tautan Direct Google Maps di setiap destinasi untuk navigasi langsung di lapangan.'
    },
    {
      q: 'Bagaimana cara menggunakan navigasi peta ke lokasi destinasi?',
      a: 'Setiap destinasi pada direktori 135 wisata dan jadwal Itinerary SIP telah terhubung langsung dengan tombol Direct Google Maps. Anda cukup menekan tombol tersebut untuk membuka rute navigasi dan estimasi waktu tempuh secara instan di ponsel Anda.'
    },
    {
      q: 'Bagaimana jika kami ingin memesan produk batik Bakaran atau kerajinan kuningan Juwana?',
      a: 'Pada menu "Ekraf", kami menyediakan kontak WhatsApp langsung ke perajin dan kelompok tani setempat tanpa perantara, sehingga Anda mendapatkan harga asli perajin dengan kualitas terjamin.'
    },
    {
      q: 'Apakah ada pemandu wisata lokal (tour guide) resmi di Pati?',
      a: 'Ya, komunitas penggerak wisata (Pokdarwis) dan dinas pariwisata memiliki pemandu lokal bersertifikat terutama untuk susur gua karst (Gua Pancur), edukasi batik Bakaran, dan tur kopi lereng Muria. Anda dapat mengajukan permintaan via form kontak ini.'
    }
  ];

  return (
    <div className="py-10 md:py-16 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-3 pb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0c2b64]/10 dark:bg-[#1a56a4]/30 border border-[#1a56a4]/30 text-[#0c2b64] dark:text-[#38bdf8] text-xs font-bold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            Layanan Komunikasi & Integrasi Email
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Hubungi <span className="text-transparent bg-clip-text bg-linear-to-r from-[#0c2b64] via-[#1a56a4] to-[#2575fc] dark:from-[#38bdf8] dark:to-[#60a5fa]">Tim Advokasi SIP Pati</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Punya pertanyaan mengenai rute wisata, konsultasi paket rombongan, atau ingin bermitra dengan para pengrajin Ekraf? Kirim pesan langsung ke email resmi kami.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Form Card (7 Cols) */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-md">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 mb-6">
              <div>
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                  Kirim Pesan Terintegrasi Email
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Terkirim langsung ke: <span className="font-bold text-[#0c2b64] dark:text-[#38bdf8]">{recipientEmail}</span>
                </p>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0c2b64]/10 hover:bg-[#0c2b64]/20 dark:bg-[#1a56a4]/30 dark:hover:bg-[#1a56a4]/50 text-[#0c2b64] dark:text-[#38bdf8] text-xs font-bold transition"
                title="Salin alamat email"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? 'Email Tersalin' : 'Salin Email'}</span>
              </button>
            </div>

            {submitSuccess ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-300 flex items-center justify-center animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Pesan Berhasil Disiapkan & Dikirim!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                  Aplikasi email Anda telah dibuka dengan format pesan otomatis. Tim Sekretariat Advokasi SIP Pati akan segera merespons ke email <strong>{formData.email}</strong>.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setSubmitSuccess(false)}
                    className="px-5 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition"
                  >
                    Kirim Pesan Lainnya
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Nama */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Nama Lengkap <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Budi Santoso"
                      value={formData.nama}
                      onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Alamat Email Pengirim <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="nama@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Telepon */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Nomor WhatsApp / HP
                    </label>
                    <input
                      type="tel"
                      placeholder="0812xxxxxxx"
                      value={formData.telepon}
                      onChange={(e) => setFormData({ ...formData, telepon: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Kategori */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Kategori Keperluan
                    </label>
                    <select
                      value={formData.kategori}
                      onChange={(e) => setFormData({ ...formData, kategori: e.target.value as any })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                    >
                      <option value="pertanyaan">Pertanyaan Destinasi & Tiket</option>
                      <option value="advokasi_sip">Konsultasi Itinerary SIP 1 Hari</option>
                      <option value="kerjasama">Kerjasama Wisata & Pelaku Ekraf</option>
                      <option value="saran">Kritik, Saran & Kontribusi</option>
                    </select>
                  </div>
                </div>

                {/* Subjek */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Subjek Pesan <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Rencana Kunjungan Rombongan ke Lereng Muria"
                    value={formData.subjek}
                    onChange={(e) => setFormData({ ...formData, subjek: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Pesan */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Isi Pesan Detail <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tuliskan pertanyaan, rencana waktu kunjungan, atau kebutuhan informasi Anda secara lengkap di sini..."
                    value={formData.pesan}
                    onChange={(e) => setFormData({ ...formData, pesan: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
                    <AlertCircle className="w-3.5 h-3.5 text-blue-500" />
                    <span>Terhubung otomatis dengan aplikasi email Anda</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/20 transition-all hover:scale-105 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Mengirimkan...' : 'Kirim Pesan Sekarang'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Info Card & FAQ (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact & Office Box */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                Sekretariat & Hub Informasi
              </h3>

              <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 dark:text-white block">Posko Informasi Wisata SIP:</strong>
                    <span>Kawasan Alun-Alun Simpang Lima Pati, Jl. Tombronegoro No. 1, Pati Kota, Jawa Tengah 59111</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <div>
                    <strong className="text-slate-900 dark:text-white block">Email Resmi:</strong>
                    <a href={`mailto:${recipientEmail}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                      {recipientEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <div>
                    <strong className="text-slate-900 dark:text-white block">Jam Layanan:</strong>
                    <span>Senin - Minggu: 08.00 - 20.00 WIB</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <a
                href={`https://wa.me/${whatsappNumber}?text=Halo%20Tim%20Advokasi%20SIP%20Sedina%20ing%20Pati,%20saya%20ingin%20berkonsultasi%20mengenai%20paket%20wisata%20Pati.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Langsung via WhatsApp</span>
              </a>
            </div>

            {/* FAQ Accordion */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs">
              <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                <HelpCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Tanya Jawab Seputar Program SIP</span>
              </h3>

              <div className="space-y-2">
                {faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                      className="w-full p-3.5 text-left flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition"
                    >
                      <span className="pr-2">{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                          activeFaq === idx ? 'rotate-180 text-blue-600' : ''
                        }`}
                      />
                    </button>
                    {activeFaq === idx && (
                      <div className="p-3.5 pt-0 text-xs text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-850">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
