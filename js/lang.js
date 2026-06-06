/* IndoGig — Language Toggle (EN / ID) */

(function () {
  var STORAGE_KEY = 'indogig-lang';
  var DEFAULT_LANG = 'id';
  var enStore = {};

  var T = {
    /* ══════════════ NAV ══════════════ */
    'nav.home': 'Beranda',
    'nav.hire': 'Rekrut Staf',
    'nav.find': 'Cari Kerja',
    'nav.industries': 'Industri',
    'nav.about': 'Tentang Kami',
    'nav.pricing': 'Harga',
    'nav.wa': 'WhatsApp',
    'nav.wa.kerja': 'Kirim "KERJA"',

    /* ══════════════ FOOTER ══════════════ */
    'footer.brand.desc': 'Penyedia tenaga kerja hospitality untuk venue terbaik di Bali. PT INDOGIG HRTECH INDONESIA.',
    'footer.brand.desc.short': 'Penyedia tenaga kerja hospitality untuk venue terbaik di Bali.',
    'footer.brand.desc.loc': 'Penyedia tenaga kerja PT-terdaftar di Bali. Pekerja terverifikasi, pemesanan via WhatsApp.',
    'footer.services': 'Layanan',
    'footer.hire': 'Rekrut Staf',
    'footer.find': 'Cari Kerja',
    'footer.how': 'Cara Kerja',
    'footer.pricing': 'Harga',
    'footer.industries': 'Industri',
    'footer.hotels': 'Hotel',
    'footer.beach': 'Beach Club',
    'footer.events': 'Acara',
    'footer.restaurants': 'Restoran',
    'footer.weddings': 'Pernikahan',
    'footer.retail': 'Retail',
    'footer.locations': 'Lokasi',
    'footer.company': 'Perusahaan',
    'footer.about': 'Tentang Kami',
    'footer.contact': 'Kontak',
    'footer.privacy': 'Kebijakan Privasi',
    'footer.terms': 'Syarat &amp; Ketentuan',

    /* ══════════════ HOME (index.html) ══════════════ */
    'home.hero.h1': 'Agensi tenaga kerja hospitality <em>untuk Bali.</em>',
    'home.hero.sub': 'Tenaga kerja terverifikasi untuk hotel, beach club, dan acara di Bali. Satu pesan WhatsApp &mdash; kami urus seleksi, kepatuhan, dan penjadwalan.',
    'home.hero.btn.hire': 'Rekrut Staf <span class="material-symbols-outlined" style="font-size:18px">arrow_forward</span>',
    'home.hero.btn.find': 'Cari Kerja <span class="material-symbols-outlined" style="font-size:18px">arrow_forward</span>',
    'home.hero.trust.pt': 'PT Terdaftar',
    'home.hero.trust.bali': 'Berbasis di Bali',
    'home.hero.trust.rated': 'Pekerja Terverifikasi',
    'home.hero.trust.wa': 'WhatsApp-First',

    'home.proof.pt': 'PT Terdaftar',
    'home.proof.rated': 'Pekerja Terverifikasi',
    'home.proof.districts': '8 Kecamatan di Bali',
    'home.proof.industries': '6 Industri Dilayani',

    'home.fbadge.fill': '<span class="fb-icon">&#9201;</span> Staffing hari yang sama',
    'home.fbadge.verified': '<span class="fb-icon">&#10003;</span> PT Terdaftar',
    'home.fbadge.rated': '<span class="fb-icon">&#11088;</span> Pekerja terverifikasi',

    'home.paths.biz.label': 'Untuk Bisnis',
    'home.paths.biz.h2': 'Butuh tenaga kerja hospitality?',
    'home.paths.biz.p': 'Pekerja terverifikasi untuk shift atau penempatan sementara. Satu pesan WhatsApp — kami urus semuanya.',
    'home.paths.biz.li1': 'Shift tunggal atau kontrak 1-3 bulan',
    'home.paths.biz.li2': 'Lisensi KBLI 78104',
    'home.paths.biz.li3': 'Rating pekerja &amp; pemesanan ulang',
    'home.paths.biz.li4': 'Check-in GPS &amp; tracking real-time',
    'home.paths.biz.cta': 'Rekrut Staf &rarr;',

    'home.paths.work.label': 'Untuk Pekerja',
    'home.paths.work.h2': 'Sedang cari shift?',
    'home.paths.work.p': 'Temukan pekerjaan hospitality di venue terbaik Bali. Tanpa biaya. Langsung via WhatsApp. Gaji mingguan.',
    'home.paths.work.li1': 'Transfer bank mingguan',
    'home.paths.work.li2': 'Asuransi setiap shift',
    'home.paths.work.li3': 'Jadwal fleksibel',
    'home.paths.work.li4': 'Bangun rating Anda',
    'home.paths.work.cta': 'Cari Kerja &rarr;',

    'home.how.label': 'Cara Kerja',
    'home.how.h2': 'Sederhana. Cepat. Via WhatsApp.',
    'home.how.sub': 'Kirim pesan, kami cocokkan pekerja terbaik ke venue Anda, dan tim Anda hadir &mdash; semua melalui WhatsApp.',
    'home.how.s1.h3': 'Hubungi Kami',
    'home.how.s1.p': 'Kirim permintaan via WhatsApp &mdash; posisi, tanggal, lokasi, jumlah. Kami respons dalam hitungan menit.',
    'home.how.s2.h3': 'Kami Cocokkan',
    'home.how.s2.p': 'Kami pilih pekerja terverifikasi terbaik untuk kebutuhan Anda. Anda review profil dan setujui tim.',
    'home.how.s3.h3': 'Selesai',
    'home.how.s3.p': 'Staf tiba. Check-in GPS. Anda beri rating setelah shift.',

    'home.ind.label': 'Industri yang Kami Layani',
    'home.ind.h2': 'Spesialisasi untuk<br>hospitality Bali.',
    'home.ind.sub': 'Dari resort bintang lima hingga pernikahan di pantai.',
    'home.ind.hotels.h3': 'Hotel &amp; Resort',
    'home.ind.hotels.desc': 'Front desk, housekeeping, layanan F&amp;B, staf banquet',
    'home.ind.beach.h3': 'Beach Club',
    'home.ind.beach.desc': 'Bartender, pelayan, host, attendant kolam',
    'home.ind.events.h3': 'Acara &amp; MICE',
    'home.ind.events.desc': 'Usher, registrasi, kru catering, tim setup',
    'home.ind.restaurants.h3': 'Restoran',
    'home.ind.restaurants.desc': 'Pelayan, helper dapur, barista, runner',
    'home.ind.weddings.h3': 'Pernikahan',
    'home.ind.weddings.desc': 'Staf layanan, koordinator, kru setup dan cleanup',
    'home.ind.retail.h3': 'Retail',
    'home.ind.retail.desc': 'Brand ambassador, promosi, aktivasi acara',
    'home.ind.learn': 'Selengkapnya <span class="material-symbols-outlined">arrow_forward</span>',

    'home.loc.label': 'Area Layanan',
    'home.loc.h2': 'Seluruh Bali.<br>Satu pesan saja.',
    'home.loc.sub': 'Kami menyediakan staf di seluruh area utama pulau.',
    'home.loc.seminyak.desc': 'Beach club, fine dining, hotel butik',
    'home.loc.canggu.desc': 'Surf club, kafe, venue co-working',
    'home.loc.kuta.desc': 'Hotel besar, bar, venue hiburan malam',
    'home.loc.ubud.desc': 'Retreat wellness, villa, acara budaya',
    'home.loc.denpasar.desc': 'Pusat konvensi, acara korporat, retail',
    'home.loc.nusadua.desc': 'Resort bintang lima, konferensi internasional',
    'home.loc.jimbaran.desc': 'Restoran seafood, resort mewah, pernikahan pantai',
    'home.loc.sanur.desc': 'Hotel butik, wellness, restoran keluarga',

    'home.trust.label': 'Mengapa Percaya IndoGig',
    'home.trust.h2': 'Perusahaan staffing,<br>bukan startup.',
    'home.trust.sub': 'IndoGig adalah perusahaan Indonesia terdaftar yang menyediakan tenaga kerja hospitality di seluruh Bali. Berbasis di Seminyak.',
    'home.trust.pt.title': 'PT Terdaftar',
    'home.trust.pt.desc': 'PT INDOGIG HRTECH INDONESIA. NIB dan NPWP terdaftar.',
    'home.trust.kbli.title': 'Lisensi KBLI 78104',
    'home.trust.kbli.desc': 'Lisensi staffing terverifikasi dari Dinas Tenaga Kerja Bali. Kepatuhan regulasi terjamin.',
    'home.trust.bali.title': 'Berbasis di Bali',
    'home.trust.bali.desc': 'Tim lokal. Kami kenal venue, musim, dan orangnya.',
    'home.trust.rating.title': 'Rating Pekerja',
    'home.trust.rating.desc': 'Setiap shift dinilai. Yang tidak andal dihapus. Pekerja terbaik diprioritaskan.',
    'home.trust.invoice.title': 'Invoice Mingguan',
    'home.trust.invoice.desc': 'Invoice jelas. Tanpa biaya tersembunyi. Bayar per shift selesai.',
    'home.trust.pdp.title': 'Kepatuhan UU PDP',
    'home.trust.pdp.desc': 'Perlindungan data sesuai undang-undang Indonesia. Data Anda ditangani secara bertanggung jawab.',

    'home.faq.h2': 'Pertanyaan<br>yang sering<br>ditanyakan',
    'home.faq.cant': 'Tidak menemukan jawaban?',
    'home.faq.wa': 'WhatsApp kami <span class="material-symbols-outlined" style="font-size:14px">arrow_forward</span>',
    'home.faq.q1': 'Seberapa cepat saya bisa mendapatkan staf? <span class="material-symbols-outlined">expand_more</span>',
    'home.faq.a1': 'Kebanyakan permintaan dipenuhi dalam 4 jam. Untuk acara besar (20+ staf), kami rekomendasikan pemberitahuan 48-72 jam.',
    'home.faq.q2': 'Bagaimana sistem harga? <span class="material-symbols-outlined">expand_more</span>',
    'home.faq.a2': 'Biaya transparan per shift berdasarkan posisi dan durasi. Tanpa minimum bulanan. Tanpa biaya tersembunyi. Invoice mingguan.',
    'home.faq.q3': 'Apakah pekerja diasuransikan? <span class="material-symbols-outlined">expand_more</span>',
    'home.faq.a3': 'Ya. Setiap pekerja yang ditempatkan melalui IndoGig dijamin kepatuhannya.',
    'home.faq.q4': 'Area mana saja di Bali yang dilayani? <span class="material-symbols-outlined">expand_more</span>',
    'home.faq.a4': 'Seminyak, Canggu, Kuta, Ubud, Denpasar, Nusa Dua, Jimbaran, dan Sanur.',
    'home.faq.q5': 'Bisakah saya memesan pekerja yang sama? <span class="material-symbols-outlined">expand_more</span>',
    'home.faq.a5': 'Ya. Pekerja favorit mendapat prioritas untuk pemesanan Anda. Ideal untuk shift rutin.',
    'home.faq.q6': 'Apakah perlu download aplikasi? <span class="material-symbols-outlined">expand_more</span>',
    'home.faq.a6': 'Tidak. Semuanya berjalan melalui WhatsApp. Dashboard dan check-in terbuka sebagai link web.',
    'home.faq.q7': 'Bagaimana pekerja dibayar? <span class="material-symbols-outlined">expand_more</span>',
    'home.faq.a7': 'Transfer bank mingguan ke rekening terdaftar mereka. Tercatat dan transparan.',

    'home.cta.h2': 'Siap untuk memulai?',
    'home.cta.p': 'Butuh staf atau ingin bekerja &mdash; kami hanya satu pesan WhatsApp.',
    'home.cta.hire': 'Rekrut Staf <span class="material-symbols-outlined" style="font-size:18px">arrow_forward</span>',
    'home.cta.find': 'Cari Kerja <span class="material-symbols-outlined" style="font-size:18px">arrow_forward</span>',

    /* ══════════════ HIRE STAFF ══════════════ */
    'hire.bc.services': 'Layanan',
    'hire.bc.hire': 'Rekrut Staf',
    'hire.hero.h1': 'Rekrut staf hospitality <em>tanpa repot.</em>',
    'hire.hero.lead': 'Pelayan, housekeeper, bartender, dan koordinator terseleksi. Dipesan dalam hitungan menit, sepenuhnya patuh, dilacak secara real-time.',
    'hire.hero.cta': 'Pesan Staf via WhatsApp <span class="material-symbols-outlined" style="font-size:18px">chat</span>',

    'hire.comp.label': 'Kepatuhan &amp; Seleksi',
    'hire.comp.h2': 'Nol risiko. Kepatuhan penuh.',
    'hire.comp.sub': 'Kami melindungi reputasi dan operasional venue Anda dengan kerangka perizinan dan kepatuhan yang ketat.',
    'hire.comp.pt.h3': 'PT Terdaftar',
    'hire.comp.pt.p': 'PT INDOGIG HRTECH INDONESIA. Badan hukum dengan NIB, NPWP, dan lisensi staffing KBLI 78104.',
    'hire.comp.labor.h3': 'Kepatuhan Ketenagakerjaan',
    'hire.comp.labor.p': 'Semua pekerja dijamin kepatuhannya terhadap regulasi ketenagakerjaan. Nol kewajiban pajak atau izin untuk bisnis Anda.',
    'hire.comp.vetted.h3': 'Terseleksi Penuh',
    'hire.comp.vetted.p': 'Latar belakang diperiksa, referensi diverifikasi, dan performa shift dinilai. Staf yang tidak andal dihapus.',

    'hire.demo.label': 'Kemudahan dalam Aksi',
    'hire.demo.h2': 'Staffing secepat WhatsApp',
    'hire.demo.p': 'Tanpa portal korporat. Tanpa pelatihan. Cukup kirim pesan ke lini operasi kami, review kandidat terseleksi, dan lacak check-in secara real-time.',
    'hire.demo.perk1': 'Rata-rata waktu respons: kurang dari 5 menit',
    'hire.demo.perk2': 'Tracking check-in GPS pekerja &amp; staf cadangan instan',
    'hire.demo.perk3': 'Invoice mingguan terkonsolidasi',

    'hire.roles.label': 'Posisi yang Kami Tawarkan',
    'hire.roles.h2': 'Tenaga hospitality profesional',
    'hire.roles.sub': 'Kami menyediakan staf berpengalaman untuk semua departemen utama hospitality.',
    'hire.roles.fnb.h3': 'Food &amp; Beverage',
    'hire.roles.fnb.p': 'Pelayan, food runner, helper dapur, pencuci piring.',
    'hire.roles.bar.h3': 'Bar &amp; Lounge',
    'hire.roles.bar.p': 'Bartender, barback, barista, mixologist.',
    'hire.roles.rooms.h3': 'Rooms Division',
    'hire.roles.rooms.p': 'Housekeeper, cleaner area publik, attendant kolam.',
    'hire.roles.guest.h3': 'Guest Services',
    'hire.roles.guest.p': 'Agen front desk, resepsionis, host, hostess.',
    'hire.roles.events.h3': 'Events &amp; MICE',
    'hire.roles.events.p': 'Koordinator acara, staf registrasi, usher, kru setup.',
    'hire.roles.promo.h3': 'Promosi &amp; Retail',
    'hire.roles.promo.p': 'SPG, SPB, brand ambassador, model promosi.',

    'hire.cta.h2': 'Siap memesan staf?',
    'hire.cta.p': 'Beri tahu kami posisi dan tanggal yang Anda butuhkan. Kami balas dengan penawaran dan profil kandidat segera.',
    'hire.cta.wa': 'Hubungi Kami via WhatsApp <span class="material-symbols-outlined" style="font-size:18px">chat</span>',
    'hire.cta.pricing': 'Lihat Harga',

    /* ── Hire Staff: Scroll Storytelling ── */
    'hire.story.s1.label': '01 &middot; MASALAH',
    'hire.story.s1.h2': 'Masih menelepon mencari staf dadakan?',
    'hire.story.s1.p': 'Kebanyakan venue di Bali mengandalkan grup WhatsApp, telepon, dan harapan. Tanpa seleksi. Tanpa asuransi. Tanpa jaminan. Berjam-jam terbuang. Tamu menunggu.',
    'hire.story.s1.b1': '&#128336; 3+ jam mencari staf',
    'hire.story.s1.b2': '&#128683; ~30% tingkat ketidakhadiran',
    'hire.story.s1.b3': '&#128308; Nol kepatuhan BPJS',
    'hire.story.s1.badge': '&#128260; Pesan ulang favorit',
    'hire.story.s1.chat.nm': 'Grup Staffing Bali',
    'hire.story.s1.chat.st': '18 peserta',
    'hire.story.s1.chat.m1': 'Butuh 5 waiter malam ini untuk dinner service, ada yang available??<div class="t">19:42 &#10003;&#10003;</div>',
    'hire.story.s1.chat.m2': 'Maaf bos, sudah ada booking &#128591;',
    'hire.story.s1.chat.m3': 'Mungkin besok?',
    'hire.story.s1.chat.m4': 'Saya bisa bawa 2 teman, tapi belum pernah service',
    'hire.story.s1.chat.sys': '&#9200; 2 jam kemudian',
    'hire.story.s1.chat.m5': 'Masih butuh 3 lagi, service mulai 1 jam lagi &#128547;',
    'hire.story.s1.chat.seen': 'dilihat oleh 12',

    'hire.story.s2.label': '02 &middot; SATU PESAN',
    'hire.story.s2.h2': 'Kirim satu pesan WhatsApp. Kami urus sisanya.',
    'hire.story.s2.p': 'Beri tahu kami kebutuhan Anda &mdash; posisi, tanggal, lokasi, jumlah. Tim kami merespons dalam hitungan menit. Tanpa formulir. Tanpa portal. Tanpa aplikasi.',
    'hire.story.s2.badge': '&#9201; Menit, bukan jam',
    'hire.story.s2.chat.m1': 'Butuh 5 waiter untuk dinner Sabtu, Seminyak, 17:00-23:00<div class="t">09:14 &#10003;&#10003;</div>',
    'hire.story.s2.chat.m2': 'Siap! &#10003; Mengecek pool terverifikasi kami...<div class="t">09:14</div>',

    'hire.story.s3.label': '03 &middot; TERCOCOKKAN',
    'hire.story.s3.h2': 'Pekerja terseleksi. Dinilai oleh venue seperti milik Anda.',
    'hire.story.s3.p': 'Setiap pekerja diperiksa latar belakangnya, diverifikasi keahliannya, dan dinilai oleh klien sebelumnya. Anda lihat profil, rating, dan riwayat shift sebelum konfirmasi.',
    'hire.story.s3.b1': '&#11088; Setiap pekerja dinilai',
    'hire.story.s3.b2': '&#128336; Riwayat shift terverifikasi',
    'hire.story.s3.b3': '&#128993; Dijamin BPJS',
    'hire.story.s3.badge': '&#11088; Setiap pekerja dinilai',
    'hire.story.s3.chat.m1': 'Ditemukan 5 waiter terverifikasi:<div class="t">09:15</div>',
    'hire.story.s3.chat.bpjs': 'Semua dijamin BPJS &#10003;',
    'hire.story.s3.chat.confirm': '&#10003; Konfirmasi',
    'hire.story.s3.chat.change': '&#128260; Ganti',

    'hire.story.s4.label': '04 &middot; TERKONFIRMASI',
    'hire.story.s4.h2': 'Check-in GPS. Tracking real-time. Nol ketidakhadiran.',
    'hire.story.s4.p': 'Pekerja check-in di venue Anda via GPS. Anda lacak kedatangan secara real-time melalui WhatsApp. Jika ada yang tidak bisa hadir, kami kirim pengganti segera.',
    'hire.story.s4.badge': '&#8596;&#65039; Cadangan instan',
    'hire.story.s4.chat.m1': '&#10003; Shift terkonfirmasi!',
    'hire.story.s4.chat.card': '&#128197; Sab, 7 Jun &middot; &#9200; 17:00-23:00 &middot; &#128205; Seminyak',
    'hire.story.s4.chat.m2': '5/5 terkonfirmasi &#127881; &middot; Semua BPJS aktif &#10003;<div class="t">16:55</div>',

    /* ══════════════ FIND WORK ══════════════ */
    'find.bc.services': 'Layanan',
    'find.bc.find': 'Cari Kerja',
    'find.hero.h1': 'Temukan pekerjaan hospitality <em>di Bali.</em>',
    'find.hero.lead': 'Shift fleksibel di hotel, beach club, dan restoran terbaik. Gratis untuk pekerja. Gaji mingguan ke rekening bank Anda. Semuanya via WhatsApp.',
    'find.hero.id': 'Cari kerja hospitality di Bali? Gratis, tanpa aplikasi. Gaji mingguan.',
    'find.hero.cta': 'Mulai Bekerja (WhatsApp) <span class="material-symbols-outlined" style="font-size:18px">chat</span>',

    'find.perks.label': 'Keuntungan Pekerja',
    'find.perks.h2': 'Mengapa bekerja dengan IndoGig?',
    'find.perks.sub': 'Kami menawarkan model staffing yang andal dan transparan untuk membantu Anda mengembangkan karier dan penghasilan.',
    'find.perks.pay.h3': 'Gaji Mingguan',
    'find.perks.pay.p': 'Tidak perlu menunggu siklus gaji bulanan. Pembayaran ditransfer langsung ke rekening bank Anda (BCA, Mandiri, dll.) setiap hari Senin.',
    'find.perks.comp.h3': 'Kepatuhan Pekerja',
    'find.perks.comp.p': 'Keselamatan Anda adalah prioritas kami. Setiap shift dijamin kepatuhannya terhadap regulasi ketenagakerjaan, memberikan keamanan penuh saat bertugas.',
    'find.perks.rating.h3': 'Bangun Rating Anda',
    'find.perks.rating.p': 'Selesaikan shift, terima rating tinggi dari venue, dan dapatkan akses ke shift premium dan venue bergaji lebih tinggi.',

    'find.calc.label': 'Kalkulator Penghasilan',
    'find.calc.h2': 'Hitung penghasilan bulanan Anda',
    'find.calc.p': 'Geser slider untuk memperkirakan penghasilan bulanan. IndoGig 100% gratis untuk pekerja — kami tidak pernah memotong komisi dari tarif shift Anda.',
    'find.calc.perk1': 'Nol biaya pendaftaran',
    'find.calc.perk2': 'Rata-rata tarif: Rp 150.000 - Rp 350.000 / shift',
    'find.calc.perk3': 'Transfer mingguan setiap hari Senin',
    'find.calc.shifts': 'Shift per minggu',
    'find.calc.rate': 'Rata-rata per shift',
    'find.calc.result': 'Estimasi Penghasilan Bulanan',

    'find.join.label': 'Cara Bergabung',
    'find.join.h2': 'Mulai bekerja dalam 3 langkah mudah',
    'find.join.s1.h3': 'Kirim "KERJA"',
    'find.join.s1.p': 'Kirim kata kunci "KERJA" ke WhatsApp resmi kami. Sistem otomatis kami akan langsung menyambut Anda.',
    'find.join.s2.h3': 'Buat Profil',
    'find.join.s2.p': 'Lengkapi profil singkat 2 menit (nama, pengalaman, KTP, dan data bank untuk pembayaran).',
    'find.join.s3.h3': 'Pilih Shift',
    'find.join.s3.p': 'Terima undangan shift di wilayah Anda, terima yang Anda suka, dan mulai mendapatkan penghasilan.',

    'find.cta.h2': 'Siap bergabung dengan tim?',
    'find.cta.p': 'Hubungi kami di WhatsApp. Buat profil, pilih shift, dan mulai bekerja di venue premium Bali.',
    'find.cta.wa': 'Kirim "KERJA" di WhatsApp <span class="material-symbols-outlined" style="font-size:18px">chat</span>',

    /* ══════════════ INDUSTRIES ══════════════ */
    'ind.bc': 'Industri',
    'ind.hero.h1': 'Tenaga kerja hospitality untuk <em>setiap venue di Bali.</em>',
    'ind.hero.lead': 'Dari hotel bintang lima hingga pernikahan di pantai — IndoGig menyediakan staf terverifikasi sesuai industri Anda.',

    'ind.section.label': 'Industri',
    'ind.section.h2': 'Siapa klien kami',
    'ind.section.sub': 'Enam sektor, satu standar: terverifikasi, terjamin, dan siap bekerja.',

    'ind.hotels.h3': 'Hotel &amp; Resort',
    'ind.hotels.p': 'Hotel dan resort di Bali membutuhkan staf andal sepanjang tahun. Dari front desk hingga layanan banquet, kami menyediakan profesional berpengalaman yang memahami standar hospitality mewah.',
    'ind.hotels.roles': 'Posisi yang kami isi:',
    'ind.beach.h3': 'Beach Club',
    'ind.beach.p': 'Beach club di Bali adalah lingkungan bervolume tinggi dan serba cepat yang membutuhkan staf berpengalaman. Kami menyediakan bartender, host, dan security terlatih.',
    'ind.beach.roles': 'Posisi yang kami isi:',
    'ind.events.h3': 'Acara &amp; MICE',
    'ind.events.p': 'Konferensi, retreat korporat, peluncuran produk. Bali menyelenggarakan ribuan acara setiap tahun. Kami sesuaikan ukuran tim sesuai kebutuhan — tim dalam skala apapun.',
    'ind.events.roles': 'Posisi yang kami isi:',
    'ind.restaurants.h3': 'Restoran &amp; Kafe',
    'ind.restaurants.p': 'Dunia kuliner Bali sedang berkembang pesat. Baik restoran fine-dining di Seminyak maupun kafe di Canggu, kami menyediakan pelayan, barista, dan support dapur sesuai permintaan.',
    'ind.restaurants.roles': 'Posisi yang kami isi:',
    'ind.weddings.h3': 'Pernikahan',
    'ind.weddings.p': 'Bali adalah salah satu lokasi pernikahan destinasi terbaik di dunia. Kami menyediakan staf upacara, support catering, dan kru setup yang memahami setiap detail.',
    'ind.weddings.roles': 'Posisi yang kami isi:',
    'ind.retail.h3': 'Retail &amp; Promosi',
    'ind.retail.p': 'Aktivasi brand, pop-up store, peluncuran produk. Kami menyediakan SPG/SPB dan brand ambassador terlatih yang mewakili brand Anda secara profesional.',
    'ind.retail.roles': 'Posisi yang kami isi:',

    'ind.how.label': 'Cara Kerja',
    'ind.how.h2': 'Tiga langkah. Industri apapun.',
    'ind.how.sub': 'Proses sederhana yang sama, tidak peduli jenis venue Anda.',
    'ind.how.s1.h3': 'Hubungi kami via WhatsApp',
    'ind.how.s1.p': 'Beri tahu industri, posisi, tanggal, dan lokasi Anda. Kami respons dalam hitungan menit.',
    'ind.how.s2.h3': 'Kami cocokkan staf terverifikasi',
    'ind.how.s2.p': 'Tim kami memilih pekerja terverifikasi dengan pengalaman di industri spesifik Anda.',
    'ind.how.s3.h3': 'Staf tiba, Anda beri rating',
    'ind.how.s3.p': 'Pekerja tiba siap bekerja. Setelah shift, Anda beri rating performa mereka.',

    'ind.cta.h2': 'Butuh staf untuk venue Anda?',
    'ind.cta.p': 'Beri tahu industri Anda dan kami cocokkan orang yang tepat — cepat.',
    'ind.cta.hire': 'Rekrut Staf via WhatsApp',
    'ind.cta.find': 'Cari Kerja',

    /* ══════════════ LOCATIONS ══════════════ */
    'loc.bc': 'Lokasi',
    'loc.hero.h1': 'Tenaga kerja hospitality di seluruh <em>Bali.</em>',
    'loc.hero.lead': 'IndoGig beroperasi di distrik hospitality utama Bali. Dari beach club Seminyak hingga resort butik Ubud.',

    'loc.section.label': 'Area Layanan',
    'loc.section.h2': '8 kecamatan. Satu platform.',
    'loc.section.sub': 'Tenaga kerja hospitality terverifikasi di setiap area utama Bali.',

    'loc.seminyak.p': 'Hub premium dining dan nightlife Bali. Rumah bagi beach club top, restoran fine-dining, dan hotel butik. Permintaan tinggi untuk bartender, host, dan staf F&amp;B sepanjang tahun.',
    'loc.seminyak.key': 'Venue utama: Beach club, restoran, hotel',
    'loc.canggu.p': 'Area dengan pertumbuhan tercepat di Bali. Surf club, kafe co-working, dan venue baru buka setiap bulan. Permintaan staf layanan dan barista meningkat pesat.',
    'loc.canggu.key': 'Venue utama: Kafe, surf club, restoran baru',
    'loc.kuta.h3': 'Kuta &amp; Legian',
    'loc.kuta.p': 'Koridor wisata tersibuk Bali. Hotel berskala besar, outlet retail, dan venue hiburan. Staffing volume untuk hospitality dan retail.',
    'loc.kuta.key': 'Venue utama: Hotel, retail, hiburan',
    'loc.ubud.p': 'Jantung budaya Bali. Resort butik, retreat wellness, dan venue pernikahan destinasi dikelilingi sawah terasering. Staf perlu sensitivitas budaya dan perhatian terhadap detail.',
    'loc.ubud.key': 'Venue utama: Resort butik, pernikahan, wellness',
    'loc.denpasar.p': 'Ibu kota Bali dan hub MICE. Pusat konvensi, acara korporat, dan fungsi pemerintahan. Staffing acara profesional dan koordinasi.',
    'loc.denpasar.key': 'Venue utama: MICE, acara korporat, konvensi',
    'loc.nusadua.p': 'Enclave resort mewah. Jaringan hotel bintang lima internasional, konferensi kelas dunia, dan pernikahan destinasi high-end.',
    'loc.nusadua.key': 'Venue utama: Resort mewah, konferensi, pernikahan',
    'loc.jimbaran.p': 'Terkenal dengan seafood beach dining. Hotel butik dan restoran sunset. Staffing F&amp;B khusus dengan fokus pada layanan berkualitas.',
    'loc.jimbaran.key': 'Venue utama: Restoran seafood, hotel butik',
    'loc.sanur.p': 'Pesona santai pantai timur. Resort keluarga, beach hotel, dan pusat olahraga air. Permintaan staf hospitality yang stabil.',
    'loc.sanur.key': 'Venue utama: Beach hotel, resort keluarga',

    'loc.all.label': 'Cakupan Seluruh Pulau',
    'loc.all.h2': 'Semua area, satu pesan WhatsApp',
    'loc.all.sub': 'Di mana pun venue Anda di Bali — satu pesan menghadirkan staf terverifikasi. Kami mencocokkan berdasarkan lokasi dan ketersediaan pekerja.',
    'loc.all.stat1': 'Kecamatan Dilayani',
    'loc.all.stat2': 'Pemesanan',
    'loc.badge': 'Staf Tersedia',

    'loc.cta.h2': 'Butuh staf di area Anda?',
    'loc.cta.p': 'Satu pesan WhatsApp. Staf terverifikasi dicocokkan ke kecamatan Anda.',
    'loc.cta.hire': '<span class="material-symbols-outlined" style="font-size:18px">chat</span> Rekrut Staf via WhatsApp',
    'loc.cta.find': 'Cari Kerja',

    /* ══════════════ ABOUT ══════════════ */
    'about.bc': 'Tentang Kami',
    'about.hero.h1': 'Dibangun di Bali. <em>Untuk Bali.</em>',
    'about.hero.lead': 'IndoGig adalah perusahaan staffing Indonesia terdaftar yang menyediakan tenaga kerja hospitality terverifikasi di seluruh Bali.',

    'about.story.label': 'Cerita Kami',
    'about.story.h2': 'Dari kesenjangan staffing ke platform staffing',
    'about.story.p1': 'Sergei Krushinskikh pindah ke Bali dan segera menemukan masalah berulang: hotel, beach club, dan venue acara selalu kebingungan mengisi shift di menit terakhir. Mereka mengandalkan informasi dari mulut ke mulut, grup WhatsApp yang tersebar, dan perantara yang menambah biaya tanpa akuntabilitas.',
    'about.story.p2': 'IndoGig dimulai dari ide sederhana: bagaimana jika bisnis bisa meminta pekerja terverifikasi dan terjamin melalui satu pesan WhatsApp dan shift terisi dalam hitungan jam? Tanpa perlu download. Tanpa onboarding rumit. Hanya staffing cepat dan patuh yang dibangun di atas alat yang sudah digunakan di Bali.',
    'about.story.p3': 'Saat ini, PT INDOGIG HRTECH INDONESIA adalah perusahaan Indonesia yang sepenuhnya terdaftar. Setiap pekerja dijamin kepatuhannya. Setiap penempatan terdokumentasi. Kami beroperasi di Seminyak, Canggu, Kuta, Ubud, Nusa Dua, dan sekitarnya — melayani hotel, restoran, beach club, pernikahan, dan acara berskala besar.',

    'about.facts.label': 'Fakta Perusahaan',
    'about.facts.h2': 'Patuh. Transparan. Lokal.',
    'about.facts.sub': 'Semua yang perlu Anda ketahui tentang cara kami beroperasi.',
    'about.facts.pt.h3': 'PT Terdaftar',
    'about.facts.pt.p': 'PT INDOGIG HRTECH INDONESIA. NIB dan NPWP terdaftar.',
    'about.facts.comp.h3': 'Sepenuhnya Patuh',
    'about.facts.comp.p': 'Setiap pekerja dijamin kepatuhannya terhadap regulasi ketenagakerjaan Indonesia.',
    'about.facts.bali.h3': 'Berbasis di Bali',
    'about.facts.bali.p': 'Jl. Sunset Road Tengah Building No. 9, Seminyak, Bali 80361',
    'about.facts.rating.h3': 'Rating Pekerja',
    'about.facts.rating.p': 'Setiap shift dinilai. Pekerja terbaik diprioritaskan.',
    'about.facts.invoice.h3': 'Invoice Mingguan',
    'about.facts.invoice.p': 'Transparan. Tanpa biaya tersembunyi.',
    'about.facts.pdp.h3': 'Kepatuhan UU PDP',
    'about.facts.pdp.p': 'Undang-undang perlindungan data Indonesia.',

    'about.lead.label': 'Kepemimpinan',
    'about.lead.h2': 'Siapa yang menjalankan IndoGig',
    'about.lead.sk.role': 'Direktur',
    'about.lead.sk.p': 'Software engineer yang beralih menjadi operator staffing hospitality. Berbasis di Bali, membangun solusi tenaga kerja untuk industri pariwisata Indonesia.',
    'about.lead.sn.role': 'Komisaris',
    'about.lead.sn.p': '15+ tahun dalam pengembangan bisnis, manajemen HR, dan kepatuhan regulasi di Indonesia. Assessor HR Tersertifikasi (BNSP). Ahli dalam perizinan, lisensi, dan keunggulan operasional.',

    'about.values.label': 'Nilai-Nilai Kami',
    'about.values.h2': 'Apa yang kami perjuangkan',
    'about.values.sub': 'Tiga prinsip yang memandu setiap keputusan kami.',
    'about.values.comp.h3': 'Kepatuhan Utama',
    'about.values.comp.p': 'Kepatuhan di setiap penempatan. Tanpa pengecualian. Kami percaya kepatuhan hukum melindungi pekerja dan bisnis.',
    'about.values.quality.h3': 'Kualitas di Atas Kuantitas',
    'about.values.quality.p': 'Pekerja terseleksi, bukan volume. Setiap shift direview, dan pekerja terbaik mendapat akses prioritas ke venue premium.',
    'about.values.wa.h3': 'WhatsApp-Native',
    'about.values.wa.p': 'Tanpa aplikasi tambahan. Kami menemui bisnis dan pekerja di tempat mereka sudah berada — di WhatsApp.',

    'about.cta.h2': 'Siap bekerja sama dengan kami?',
    'about.cta.p': 'Butuh staf atau ingin mencari kerja, kami permudah semuanya.',
    'about.cta.hire': 'Rekrut Staf',
    'about.cta.find': 'Cari Kerja',
    'about.cta.contact': 'Hubungi Kami',

    /* ══════════════ PRICING ══════════════ */
    'pricing.bc': 'Harga',
    'pricing.hero.h1': 'Harga yang <em>transparan.</em>',
    'pricing.hero.lead': 'Biaya sederhana per shift. Tanpa minimum bulanan. Tanpa biaya tersembunyi. Anda hanya membayar shift yang selesai.',

    'pricing.how.label': 'Cara Kerja',
    'pricing.how.h2': 'Cara kerja harga kami',
    'pricing.how.sub': 'Tiga prinsip sederhana di balik setiap penawaran.',
    'pricing.how.fee.h3': 'Biaya Per Shift',
    'pricing.how.fee.p': 'Anda dikenakan biaya transparan per shift berdasarkan posisi dan durasi. Tanpa kejutan.',
    'pricing.how.min.h3': 'Tanpa Minimum',
    'pricing.how.min.p': 'Pesan satu shift atau seratus. Tanpa komitmen bulanan. Tanpa minimum order.',
    'pricing.how.invoice.h3': 'Invoice Mingguan',
    'pricing.how.invoice.p': 'Terima invoice terperinci setiap minggu. Bayar via transfer bank.',

    'pricing.incl.label': 'Sudah Termasuk',
    'pricing.incl.h2': 'Setiap shift sudah termasuk',
    'pricing.incl.sub': 'Tanpa add-on. Tanpa upsell. Semua di bawah ini termasuk dalam biaya per shift.',
    'pricing.incl.perk1': 'Pekerja terseleksi dengan pengalaman terverifikasi',
    'pricing.incl.perk2': 'Kepatuhan pekerja komprehensif',
    'pricing.incl.perk3': 'Tracking check-in dan check-out GPS',
    'pricing.incl.perk4': 'Rating performa pasca-shift',
    'pricing.incl.perk5': 'Garansi pengganti jika pekerja tidak hadir',
    'pricing.incl.perk6': 'Invoice mingguan terkonsolidasi',
    'pricing.incl.perk7': 'Dukungan WhatsApp khusus',

    'pricing.tiers.label': 'Tingkat Harga',
    'pricing.tiers.h2': 'Kategori posisi &amp; jenis shift',
    'pricing.tiers.info.h4': 'Harga sederhana per shift. Tanpa biaya tersembunyi.',
    'pricing.tiers.info.p': 'Anda membayar satu tarif per shift yang mencakup gaji pekerja, seleksi, kepatuhan, dan biaya layanan kami (20%). Tanpa markup kejutan.',
    'pricing.tiers.th.role': 'Posisi',
    'pricing.tiers.th.rate': 'Per Shift (8 jam)',
    'pricing.tiers.th.incl': 'Sudah Termasuk',
    'pricing.tiers.td.incl': 'Gaji pekerja + seleksi + kepatuhan',
    'pricing.tiers.td.spg': 'Tarif berjenjang berdasarkan profil. Seleksi + kepatuhan termasuk.',
    'pricing.tiers.quote.h4': 'Butuh penawaran pasti?',
    'pricing.tiers.quote.p': 'Kirim pesan WhatsApp dengan detail shift (posisi, tanggal, jumlah, lokasi) dan kami kirim penawaran dalam hitungan menit.',
    'pricing.tiers.quote.cta': 'Minta Penawaran <span class="material-symbols-outlined" style="font-size:14px">arrow_forward</span>',
    'pricing.tiers.volume': 'Diskon volume tersedia untuk 10+ shift per minggu.',

    'pricing.temp.label': 'Penempatan Sementara',
    'pricing.temp.h2': 'Butuh pekerja lebih lama?',
    'pricing.temp.sub': 'Selain shift tunggal, kami menawarkan penempatan sementara 1-3 bulan dengan kontrak PKWT penuh. Pemesanan WhatsApp yang sama, komitmen lebih panjang, tarif lebih baik.',
    'pricing.temp.contract.h3': 'Kontrak 1-3 Bulan',
    'pricing.temp.contract.p': 'Penempatan sementara sesuai PKWT. Pekerja tinggal di venue Anda penuh waktu selama masa kontrak.',
    'pricing.temp.cost.h3': 'Biaya Bulanan Lebih Rendah',
    'pricing.temp.cost.p': 'Biaya bulanan 20% dari gaji pekerja. Jauh lebih murah dari booking shift harian untuk kebutuhan rutin.',
    'pricing.temp.upgrade.h3': 'Upgrade Shift ke Temp',
    'pricing.temp.upgrade.p': 'Menemukan pekerja shift yang bagus? Ubah menjadi penempatan sementara tanpa rekrut ulang. Transisi mulus.',

    'pricing.workers.label': 'Untuk Pekerja',
    'pricing.workers.h2': 'IndoGig gratis untuk pekerja',
    'pricing.workers.p': 'Tanpa biaya pendaftaran. Tanpa komisi dari gaji Anda. Anda mendapatkan tarif pekerja penuh di setiap shift.',
    'pricing.workers.cta': 'Cari Kerja <span class="material-symbols-outlined" style="font-size:18px">arrow_forward</span>',

    'pricing.faq.label': 'Tanya Jawab',
    'pricing.faq.h2': 'Pertanyaan tentang harga',
    'pricing.faq.q1': 'Berapa biayanya?<span class="material-symbols-outlined">expand_more</span>',
    'pricing.faq.a1': 'Harga per shift, berdasarkan posisi dan durasi. Hubungi kami via WhatsApp untuk penawaran sesuai kebutuhan Anda.',
    'pricing.faq.q2': 'Apakah ada biaya tersembunyi?<span class="material-symbols-outlined">expand_more</span>',
    'pricing.faq.a2': 'Tidak. Biaya per shift yang ditawarkan sudah mencakup gaji pekerja, asuransi, seleksi, dan layanan kami. Tidak ada tambahan.',
    'pricing.faq.q3': 'Bagaimana cara membayar?<span class="material-symbols-outlined">expand_more</span>',
    'pricing.faq.a3': 'Transfer bank mingguan. Anda menerima invoice terperinci setiap hari Senin untuk shift minggu sebelumnya.',
    'pricing.faq.q4': 'Apakah ada minimum order?<span class="material-symbols-outlined">expand_more</span>',
    'pricing.faq.a4': 'Tidak. Pesan satu shift atau seratus. Tanpa kontrak, tanpa minimum.',
    'pricing.faq.q5': 'Apakah pekerja membayar?<span class="material-symbols-outlined">expand_more</span>',
    'pricing.faq.a5': 'Tidak. IndoGig sepenuhnya gratis untuk pekerja.',

    'pricing.cta.h2': 'Siap mendapatkan penawaran?',
    'pricing.cta.p': 'Beri tahu posisi dan tanggal yang Anda butuhkan. Kami balas dengan penawaran terperinci dalam hitungan jam.',
    'pricing.cta.wa': 'Minta Penawaran via WhatsApp',

    /* ══════════════ CONTACT ══════════════ */
    'contact.bc': 'Kontak',
    'contact.hero.h1': 'Hubungi <em>kami.</em>',
    'contact.hero.lead': 'Butuh staf atau ingin bergabung dengan jaringan pekerja kami — kami siap membantu.',

    'contact.wa.h3': 'WhatsApp',
    'contact.wa.p': 'Cara tercepat menghubungi kami. Kami respons dalam hitungan menit.',
    'contact.wa.cta': 'Buka Chat WhatsApp <span class="material-symbols-outlined" style="font-size:16px">arrow_forward</span>',
    'contact.email.h3': 'Email',
    'contact.email.p': 'Untuk pertanyaan formal, kemitraan, atau dokumentasi.',
    'contact.office.h3': 'Kunjungi Kantor Kami',
    'contact.office.p': 'Jl. Sunset Road Tengah Building No. 9, Seminyak, Bali 80361',
    'contact.office.cta': 'Lihat di Google Maps <span class="material-symbols-outlined" style="font-size:16px">arrow_forward</span>',

    'contact.hours.h4': 'Jam Operasional',
    'contact.hours.days': 'Senin — Sabtu: 08:00 — 20:00 WITA',
    'contact.hours.wa': 'WhatsApp: Tersedia 24/7 (respons otomatis di luar jam kerja)',

    'contact.hire.h3': 'Ingin merekrut staf?',
    'contact.hire.p': 'Dapatkan pekerja hospitality terverifikasi untuk venue Anda di Bali.',
    'contact.hire.cta': 'Rekrut Staf <span class="material-symbols-outlined" style="font-size:16px">arrow_forward</span>',
    'contact.find.h3': 'Sedang cari kerja?',
    'contact.find.p': 'Bergabunglah dengan jaringan pekerja hospitality kami di Bali. Shift fleksibel, gaji mingguan.',
    'contact.find.cta': 'Cari Kerja <span class="material-symbols-outlined" style="font-size:16px">arrow_forward</span>',

    'contact.cta.h2': 'Lebih suka WhatsApp? Kebanyakan orang juga.',
    'contact.cta.p': 'Kirim pesan dan kami akan membalas dalam hitungan menit.',
    'contact.cta.wa': 'Hubungi Kami via WhatsApp <span class="material-symbols-outlined" style="font-size:18px">arrow_forward</span>'
  };

  /* ══════════════ META DESCRIPTIONS (per page path) ══════════════ */
  var META = {
    '/': {
      title: 'IndoGig — Tenaga Kerja Hospitality di Bali | Hotel, Acara, Beach Club',
      description: 'Agensi tenaga kerja hospitality di Bali. Pekerja terverifikasi untuk hotel, beach club, acara, dan restoran. Pesan via WhatsApp. KBLI 78104 berlisensi.'
    },
    '/about/': {
      title: 'Tentang IndoGig — Tenaga Kerja Hospitality di Bali | Cerita Kami',
      description: 'IndoGig adalah perusahaan staffing PT-terdaftar, berlisensi KBLI 78104, menyediakan pekerja hospitality terverifikasi di seluruh Bali.'
    },
    '/pricing/': {
      title: 'Harga — IndoGig | Biaya Staffing Per Shift yang Transparan',
      description: 'Harga per shift yang sederhana. Tanpa minimum bulanan. Tanpa biaya tersembunyi. Kepatuhan termasuk. Dapatkan penawaran untuk tenaga kerja hospitality di Bali.'
    },
    '/services/hire-staff/': {
      title: 'Rekrut Staf Hospitality di Bali — IndoGig | Pekerja Terverifikasi',
      description: 'Dapatkan staf hospitality terseleksi untuk venue Anda di Bali. Waiter, housekeeper, bartender, dan koordinator. Pesan dalam satu pesan WhatsApp.'
    },
    '/services/find-work/': {
      title: 'Cari Kerja Hospitality di Bali — IndoGig | Shift Fleksibel & Gaji Mingguan',
      description: 'Cari kerja hospitality di Bali. Shift fleksibel di hotel, beach club, dan restoran terbaik. Gratis untuk pekerja. Gaji mingguan via transfer bank.'
    },
    '/industries/': {
      title: 'Industri yang Kami Layani — IndoGig | Tenaga Kerja Hospitality di Bali',
      description: 'IndoGig menyediakan staf terverifikasi untuk hotel, beach club, acara, restoran, pernikahan, dan venue retail di seluruh Bali.'
    },
    '/locations/': {
      title: 'Lokasi — Cakupan Area Staffing IndoGig di Bali',
      description: 'IndoGig menyediakan tenaga kerja hospitality di 8 kecamatan Bali: Seminyak, Canggu, Kuta, Ubud, Denpasar, Nusa Dua, Jimbaran, dan Sanur.'
    },
    '/contact/': {
      title: 'Kontak IndoGig — Tenaga Kerja Hospitality di Bali | WhatsApp, Email, Kantor',
      description: 'Hubungi IndoGig. WhatsApp, email, atau kunjungi kantor kami di Seminyak, Bali. Kami merespon dalam hitungan menit.'
    }
  };

  /* ══════════════ PHONE CHAT TRANSLATIONS ══════════════ */
  var CHATS = {
    /* Homepage hero phone */
    'hm1': { en: 'Need 3 waiters for Saturday, Seminyak, 6-11pm', id: 'Butuh 3 waiter untuk Sabtu, Seminyak, 18:00-23:00' },
    'hm2': { en: 'Got it! \u2713 Found 3 rated waiters:', id: 'Siap! \u2713 Ditemukan 3 waiter terverifikasi:' },
    'hm4': { en: 'Confirm team? <span style="background:#DCF8C6;padding:2px 8px;border-radius:4px;font-weight:600;font-size:10px">\u2713 Confirm</span>', id: 'Konfirmasi tim? <span style="background:#DCF8C6;padding:2px 8px;border-radius:4px;font-weight:600;font-size:10px">\u2713 Konfirmasi</span>' },
    'hm5': { en: 'Confirmed! \u2713', id: 'Dikonfirmasi! \u2713' },
    'hm6': { en: '\u2713 <b>Shift booked!</b> Your team will arrive at 5:45pm. Track status anytime.', id: '\u2713 <b>Shift dipesan!</b> Tim Anda akan tiba pukul 17:45. Pantau status kapan saja.' },
    /* Hire-staff demo chat */
    'hire-hm1': { en: 'Need 2 waiters for Seminyak Club, Sat 6pm-2am', id: 'Butuh 2 waiter untuk Seminyak Club, Sabtu 18:00-02:00' },
    'hire-hm2': { en: 'Got it! Finding available waiters for Saturday...', id: 'Siap! Mencari waiter tersedia untuk Sabtu...' },
    'hire-hm4': { en: 'Confirm Putu and Kadek? <span style="background:#DCF8C6;padding:2px 8px;border-radius:4px;font-weight:600;font-size:10px">\u2713 Confirm</span>', id: 'Konfirmasi Putu dan Kadek? <span style="background:#DCF8C6;padding:2px 8px;border-radius:4px;font-weight:600;font-size:10px">\u2713 Konfirmasi</span>' },
    'hire-hm5': { en: 'Yes, confirm team! \u2713', id: 'Ya, konfirmasi tim! \u2713' },
    'hire-hm6': { en: '\u2713 <b>Staff Booked!</b> Team will arrive at 5:45pm. Weekly transfer via BCA invoice.', id: '\u2713 <b>Staf Dipesan!</b> Tim akan tiba pukul 17:45. Transfer mingguan via faktur BCA.' },
    /* Pricing phone chat */
    'im1': { en: 'Hi! I booked 2 waiters for tonight. Are they verified?', id: 'Halo! Saya pesan 2 waiter untuk malam ini. Sudah terverifikasi?' },
    'im2': { en: 'Yes! Both are fully vetted \u2713', id: 'Ya! Keduanya sudah terverifikasi \u2713' },
    'im4': { en: 'What if someone doesn\'t show?', id: 'Bagaimana kalau ada yang tidak datang?' },
    'im5': { en: '\u2713 <b>Replacement guarantee.</b> We send a backup within 30 minutes. No extra charge.', id: '\u2713 <b>Garansi pengganti.</b> Kami kirim cadangan dalam 30 menit. Tanpa biaya tambahan.' },
    'im6': { en: 'Perfect. And invoicing?', id: 'Sempurna. Bagaimana invoicing-nya?' },
    'im7': { en: 'Weekly invoice every Monday \u2014 one clear PDF, bank transfer. \u2713', id: 'Faktur mingguan setiap Senin \u2014 satu PDF jelas, transfer bank. \u2713' }
  };

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  function saveOriginals() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (!(key in enStore)) {
        enStore[key] = el.innerHTML;
      }
    });
  }

  var enMeta = {};

  function applyLang(lang) {
    // 1. Translate data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (lang === 'id' && T[key]) {
        el.innerHTML = T[key];
      } else if (lang === 'en' && enStore[key]) {
        el.innerHTML = enStore[key];
      }
    });

    // 2. Translate meta tags (title + description) for SEO
    var path = window.location.pathname.replace(/index\.html$/, '');
    if (!path.endsWith('/')) path += '/';
    // Normalize local file paths
    var match = path.match(/\/landing(\/.*)/);
    if (match) path = match[1];
    // Also try root
    if (path === '/') path = '/';

    var pageMeta = null;
    for (var p in META) {
      if (path.endsWith(p) || path === p) { pageMeta = META[p]; break; }
    }
    if (pageMeta) {
      var titleEl = document.querySelector('title');
      var descEl = document.querySelector('meta[name="description"]');
      var ogTitle = document.querySelector('meta[property="og:title"]');
      var ogDesc = document.querySelector('meta[property="og:description"]');
      if (lang === 'id') {
        if (titleEl && !enMeta.title) enMeta.title = titleEl.textContent;
        if (descEl && !enMeta.desc) enMeta.desc = descEl.getAttribute('content');
        if (ogTitle && !enMeta.ogTitle) enMeta.ogTitle = ogTitle.getAttribute('content');
        if (ogDesc && !enMeta.ogDesc) enMeta.ogDesc = ogDesc.getAttribute('content');
        if (titleEl) titleEl.textContent = pageMeta.title;
        if (descEl) descEl.setAttribute('content', pageMeta.description);
        if (ogTitle) ogTitle.setAttribute('content', pageMeta.title);
        if (ogDesc) ogDesc.setAttribute('content', pageMeta.description);
      } else {
        if (titleEl && enMeta.title) titleEl.textContent = enMeta.title;
        if (descEl && enMeta.desc) descEl.setAttribute('content', enMeta.desc);
        if (ogTitle && enMeta.ogTitle) ogTitle.setAttribute('content', enMeta.ogTitle);
        if (ogDesc && enMeta.ogDesc) ogDesc.setAttribute('content', enMeta.ogDesc);
      }
    }

    // 3. Translate phone chat messages (preserve timestamp divs)
    for (var chatId in CHATS) {
      var el = document.getElementById(chatId);
      if (!el) continue;
      // Save original on first run
      if (!el._enHTML) el._enHTML = el.innerHTML;
      var chat = CHATS[chatId];
      var tClass = chatId.indexOf('im') === 0 ? 'incl-t' : 't';
      var tDiv = el.querySelector('.' + tClass) || el.querySelector('.hp-t') || el.querySelector('.incl-t');
      var timeHTML = tDiv ? tDiv.outerHTML : '';
      if (lang === 'id') {
        el.innerHTML = chat.id + timeHTML;
      } else {
        el.innerHTML = el._enHTML;
      }
    }

    // 4. Update html lang attribute
    document.documentElement.lang = lang === 'id' ? 'id' : 'en';
    // 5. Update toggle button text (show the OTHER language)
    var btn = document.querySelector('.lang-toggle');
    if (btn) btn.textContent = lang === 'id' ? 'EN' : 'ID';
    localStorage.setItem(STORAGE_KEY, lang);
  }

  function initLang() {
    saveOriginals();
    var lang = getLang();
    applyLang(lang);
  }

  // Expose globally
  window.toggleLang = function () {
    var current = getLang();
    var next = current === 'id' ? 'en' : 'id';
    applyLang(next);
  };

  // Auto-init
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLang);
  } else {
    initLang();
  }
})();
