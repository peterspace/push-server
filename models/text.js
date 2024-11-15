const mongoose = require("mongoose");

const pwaSchema = new mongoose.Schema(
  {
    adminId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
    },
    malay: {
      open: { type: String, default: "Buka" },
      stayOn: { type: String, default: "Kekal di pelayar" },
      add: { type: String, default: " Tambah" },
      clickIcon: { type: String, default: "Klik ikon ini untuk melancarkan aplikasi di Laman Utama" },
      pressIcon: { type: String, default: "Tekan ikon ini untuk melancarkan aplikasi di Laman Utama" },
      step1ChromeDesktop: {
        name: { type: String, default: "Langkah 1" },
        instruction: { type: String, default: "Klik ‘Pasang’ pada menu" },
      },
      step2ChromeDesktop: {
        name: { type: String, default: "Langkah 2" },
        instruction: { type: String, default: "Klik ‘Pasang’" },
      },
      step1SafariDesktop: {
        name: { type: String, default: "Langkah 1" },
        instruction: { type: String, default: "Klik ‘Kongsi’ pada menu" },
      },
      step2SafariDesktop: {
        name: { type: String, default: "Langkah 2" },
        instruction: { type: String, default: "Klik ‘Tambahkan ke Dock’" },
      },
      step3SafariDesktop: {
        name: { type: String, default: "Langkah 3" },
        instruction: { type: String, default: "Klik ‘Tambahkan’" },
      },
      step1ChromeMobile: {
        name: { type: String, default: "Langkah 1" },
        instruction: { type: String, default: "Tekan ‘Kongsi’ pada menu" },
      },
      step2ChromeMobile: {
        name: { type: String, default: "Langkah 2" },
        instruction: { type: String, default: "Tekan ‘Tambahkan ke Skrin Utama’" },
      },
      step3ChromeMobile: {
        name: { type: String, default: "Langkah 3" },
        instruction: { type: String, default: "Tekan ‘Tambahkan’" },
      },
      step1SafariMobile: {
        name: { type: String, default: "Langkah 1" },
        instruction: { type: String, default: "Tekan ‘Kongsi’ pada menu" },
      },
      step2SafariMobile: {
        name: { type: String, default: "Langkah 2" },
        instruction: { type: String, default: "Tekan ‘Tambahkan ke Skrin Utama’" },
      },
      step3SafariMobile: {
        name: { type: String, default: "Langkah 3" },
        instruction: { type: String, default: "Tekan ‘Tambahkan’" },
      },
      greeting: { type: String, default: "Halo, Selamat Datang!" },
      wait: { type: String, default: "Sila tunggu" },
      proceed: { type: String, default: "Teruskan" },
      description: { type: String, default: "Ujian 1" },
      containsAds: { type: String, default: "Mengandungi iklan" },
      inAppPurchases: { type: String, default: "Pembelian dalam aplikasi" },
      headerReviews: { type: String, default: "3.2 ribu ulasan" },
      hundredPlus: { type: String, default: "100 ribu+" },
      downloads: { type: String, default: "Muat turun" },
      ageLimit: { type: String, default: "18+" },
      ageRating: { type: String, default: "Dinilai untuk 18+" },
      install: { type: String, default: "Pasang" },
      wishlist: { type: String, default: "Tambahkan ke senarai hajat" },
      available: { type: String, default: "Aplikasi ini tersedia untuk peranti anda" },
      aboutThisGame: { type: String, default: "Tentang aplikasi ini" },
      about1: {
        type: String,
        default: "1xBet™ adalah aplikasi kasino mudah alih yang menarik yang akan membawa anda ke dalam pelbagai permainan unik. Sertai kami hari ini dan dapatkan bonus pendaftaran eksklusif untuk memulakan perjalanan mencari keuntungan anda.",
      },
      about2: {
        type: String,
        default: "Dengan 1xBet™ anda boleh menikmati keseronokan permainan kasino, dapatkan putaran percuma dan tingkatkan peluang anda untuk menang dengan bonus deposit yang murah hati. Aplikasi kami menawarkan pelbagai jenis mesin dengan tema berbeza, grafik berkualiti tinggi, dan animasi menarik.",
      },
      about3: {
        type: String,
        default: "Lakukan transaksi yang selamat dan mudah, mainkan bila-bila masa dan di mana sahaja terima kasih kepada antara muka mudah alih mesra pengguna kami. 1xBet™ adalah tempat yang sempurna untuk pencinta nasib dan keseronokan. Sertai kami hari ini dan menang!",
      },
      updatedOn: { type: String, default: "Dikemaskini pada" },
      updatedDate: { type: String, default: "30 September 2023" },
      casino: { type: String, default: "Kasino" },
      dataSafety: { type: String, default: "Keselamatan data" },
      safety: {
        type: String,
        default: "Keselamatan bermula dengan memahami bagaimana pemaju mengumpul dan berkongsi data anda. Amalan privasi dan keselamatan data mungkin berbeza berdasarkan penggunaan anda, rantau, dan umur. Maklumat ini disediakan oleh pemaju dan mungkin dikemas kini dari masa ke masa.",
      },
      noInformation: { type: String, default: "Tiada maklumat" },
      seeDetails: { type: String, default: "Lihat butiran" },
      ratingsAndReviews: { type: String, default: "Penilaian dan ulasan" },
      verified: { type: String, default: "Penilaian dan ulasan disahkan" },
      phone: { type: String, default: "Telefon" },
      tV: { type: String, default: "TV" },
      chromebook: { type: String, default: "Chromebook" },
      tablet: { type: String, default: "Tablet" },
      reviews: { type: String, default: "ulasan" },
      fourPointThree: { type: String, default: "4.3" },
      fifteenM: { type: String, default: "15.5 juta" },
      review1: {
        name: { type: String, default: "samurai" },
        date: { type: String, default: "22 Januari 2024" },
        review: { type: String, default: "Aplikasi berfungsi dengan baik dan menarik wang dengan cepat. Saya nasihatkan semua orang untuk muat turun aplikasi ini" },
        helpful: { type: String, default: "13 orang mendapati ulasan ini berguna" },
      },
      review2: {
        name: { type: String, default: "Bracken322" },
        date: { type: String, default: "21 Januari 2024" },
        review: { type: String, default: "Tunggu 10 minit untuk menarik wang ke akaun saya, mula risau, menulis kepada sokongan dan wang tiba segera. Aplikasi yang baik" },
        helpful: { type: String, default: "4 orang mendapati ulasan ini berguna" },
      },
      review3: {
        name: { type: String, default: "Jack Sparrow" },
        date: { type: String, default: "18 Januari 2024" },
        review: { type: String, default: "1xBet adalah aplikasi hebat. Saya mengesyorkan kepada semua orang" },
        helpful: { type: String, default: "2 orang mendapati ulasan ini berguna" },
      },
      review4: {
        name: { type: String, default: "Sheff816" },
        date: { type: String, default: "12 Januari 2024" },
        review: { type: String, default: "Baru sahaja menarik 1400$, sangat disyorkan!" },
        helpful: { type: String, default: "185 orang mendapati ulasan ini berguna" },
      },
      allReviews: { type: String, default: "Lihat semua ulasan" },
      whatsNew: { type: String, default: "Apa yang baru" },
      findHelpful: { type: String, default: "Adakah anda mendapati ini berguna?" },
      yes: { type: String, default: "Ya" },
      no: { type: String, default: "Tidak" },
      contact: { type: String, default: "Hubungi pemaju" },
      icon: { type: String, default: "" },
      screenShots: { type: [String], default: [] },
      fallBackScreenShots: { type: [String], default: [] },
      backgroundPhotoMobile: { type: String, default: "" },
      backgroundPhotoDesktop: { type: String, default: "" },
      fallBackBackgroundPhotoMobile: { type: String, default: "" },
      fallBackBackgroundPhotoDesktop: { type: String, default: "" },
      logo: { type: String, default: "" },
      appTitle: { type: String, default: "" },
      appSubTitle: { type: String, default: "" },
    },
    language: String,
    otherLanguages: [String],
  },
  { timestamps: true }
);

const Pwa = mongoose.model("Pwa", pwaSchema);
module.exports = Pwa;
