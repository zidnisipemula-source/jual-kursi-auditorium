Website Kursi Auditorium Zeco - PT Cahaya Mustika Internesia

Halaman:
- index.html     Beranda (6 model pilihan)
- produk.html    16 model, contoh spesifikasi, cara memesan
- kursi-auditorium-zc-XXXX.html  Halaman spesifikasi sendiri untuk tiap model (16 halaman)
- artikel.html + 3 halaman isi artikel (artikel-*.html)
- portofolio.html + 2 halaman detail proyek (portofolio-*.html) dengan foto asli di images/portofolio/
- kontak.html

Spesifikasi:
- Tombol "Spesifikasi" dan foto di kartu model membuka halaman spesifikasi di situs ini, bukan situs Zeco.
- Baru ZC 6706 yang memiliki tabel spesifikasi lengkap. Model lain menampilkan data dasar (merek, jenis, model)
  dan tombol "Minta Lembar Spesifikasi" via WhatsApp sampai datanya dilengkapi.
- Untuk melengkapi: buka file halaman model, lalu tambahkan baris di dalam <dl class="spec-list">:
  <div><dt>Nama spesifikasi</dt><dd>Nilai</dd></div>
  dan hapus blok <div class="spec-notice">...</div> jika data sudah lengkap.

Yang perlu dilengkapi:
- Foto masih ditautkan langsung dari situs Zeco (jika gagal dimuat, tampil ikon kursi). Gunakan foto sendiri
  atau foto yang sudah mendapat izin, lalu ganti atribut src pada <img>.
- Spesifikasi tiap model, isi artikel, dan nama perusahaan/alamat/WhatsApp bila berbeda.

- Portofolio memakai 2 proyek dari foto asli. Nama klien, lokasi, jumlah kursi, dan model belum dicantumkan; tambahkan di file portofolio-*.html bila ada datanya.

Gambar ZC 8808, ZC 9610, dan ZC MV-W sudah lokal di images/produk/ (zc-8808.jpg, zc-9610.jpg, zc-mv-w.jpg).

Portofolio (v32): 5 proyek, 36 foto di images/portofolio/. Foto yang tampak orang (wajah) dan layar monitor tidak dipakai. Beberapa foto area sofa memperlihatkan kartu nama di meja; hapus foto itu bila perlu.

v33:
- portofolio.html: ditambah "Galeri Foto" berisi 36 foto dengan filter per proyek dan lightbox (klik foto untuk memperbesar, panah kiri/kanan, Esc untuk menutup). Thumbnail ada di images/portofolio/thumb/.
- Beranda: bagian portofolio menampilkan 5 proyek + kartu "36 foto proyek".
- Artikel: foto sampul tiap artikel diganti dengan foto proyek yang berbeda dari kartu portofolio (images/artikel/). Foto stok lama tidak dipakai lagi di artikel.
