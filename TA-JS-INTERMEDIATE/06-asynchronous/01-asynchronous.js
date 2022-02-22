// 1. Apa itu synchronous?
// Synchronous merupakan proses eksekusi code secara berurutan sesuai baris code
// sehingga harus menunggu code sebelumnya selesai baru lanjut ke code berikutnya.
// Hal ini berarti code yang paling terakhir tidak akan bisa di proses jika code sebelumnya
// belum selesai di proses maka code paling terakhir harus menunggu.

// 2. Apa itu asynchronous?
// Asynchronous merupakan proses eksekusi code secara tidak berurutan sehingga proses tidak saling menunggu.
// Proses eksekusi dilakukan sesuai dengan code mana yang selesai diproses terlebih dahulu maka code tersebut
// yang akan ditampilkan ke console atau website terlebih duhulu dengan tidak melihat posisi penulisan code tersebut.
// Contohnya walaupun letak penulisan codenya paling terakhir tetapi prosesnya selesai lebih dulu dibandingkan
// code diatasnya maka code tersebut akan tetap ditampilkan lebih dulu.

// 3. Dapatkah kita menerapkan konsep asynchronous pada browser?
// Bisa, diterapkan untuk menampilkan konten secara tidak saling tunggu. Contohnya konten produk di website online shop
// seperti shopee dan tokopedia saat kita akan melihat-lihat gambar produk dan konten masih loading kemudian mulai bermunculan
// gambar produk secara random tidak berurutan. Hal itu karena produk yang tampil lebih dulu bergantung pada proses codenya yang
// terbaca dan selesai terlebih dahulu.

// 4. Apa hasil yang akan tercetak pada baris kode dibawah?
// first log sebanyak 5x isinya 1 sampai 5 karena hasil perulangan loop yang dimulai dari 1 dan berhenti di 5
// second log sebanyak 5x tetapi isinya 6 semua.

// 5. Apabila terdapat ketidak samaan antara console.log pertama dan kedua, bisakah kalian memberikan penjelasan mengapa hal tersebut bisa terjadi
// ada ketidak samaan, karena tipe data i pada perulangan adalah var dimana variable tersebut terlalu global sehingga i yang diakses pada
// second console adalah 6 yaitu i hasil setelah loop selesai yaitu 5 dan ditambah 1 karena i++ itu terjadi karena ada setTimeout() dimana
// code akan di delay selama 1 detik dan dijalankan dibackground setelah loop selesai dieksekusi sehingga i nya bukan hasil iterasi looping.

// 6. Perbaiki baris kode dibawah sehingga ia akan menampilkan angka yang sama
// var diganti dengan let

for (var i = 1; i <= 5; i++) {
    console.log('first log: ', i); // 01 - Pertama
    setTimeout(() => console.log('second log: ', i), 100); // 02 - Kedua
  }
  
  //hasil perbaikan
  for (let i = 1; i <= 5; i++) {
    console.log('first log: ', i); // 01 - Pertama
    setTimeout(() => console.log('second log: ', i), 100); // 02 - Kedua
  }
  