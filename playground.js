// var nama = "Budi";
// let usia = 10;
// const pi = 3.14;

// usia = 12;
// function a() {
//   // function scope
//   for (let i = 0; i < 10; i++) {
//     // function scope
//     // block scope
//   }
//   // function scope
// }

// const nilai = [];
// console.log(nilai);
// console.log("masukkan 1 ke array");
// nilai.push(1);
// console.log(nilai);
// console.log("masukkan 5 ke array");
// nilai.push(5);
// console.log(nilai);

// console.log("nilai di index 1:", nilai[1]);
// nilai[1] = 10;

// console.log("nilai di index 1 setelah diubah:", nilai[1]);
// console.log(nilai);

// nilai.pop();
// console.log(nilai);

// const data = [5, 10, 15];
// const newData = data.map((datum) => datum * 10);
// console.log(newData);

// pass by reference
// pass by value

// A dan B
// pass by value, saat B berubah maka A akan tetap

// C dan D
// pass by reference, saat B berubah maka A akan ikut berubah juga

// immutable -> tidak bisa berubah
// mutable -> bisa berubah

// ada yg mutate data, alias mengubah data secara langsung
// ada juga yang tidak mengubah data secara langsung dan hanya mereturn datanya saja

// const mobil = {
//   merk: "Mitsubishi",
//   model: "Xpander Cross",
// };

// console.log(mobil);

// mobil.tahun = 2021;
// mobil["warna"] = "Putih Mutiara";

// console.log(mobil);

// console.log("Warna mobilnya adalah:", mobil.warna);
// console.log("Mobil ini dibuat tahun:", mobil["tahun"]);

// mobil.tahun = 2025;
// console.log("Mobil ini dibuat tahun:", mobil["tahun"]);

// delete mobil.tahun;
// console.log(mobil);

// misalnya kita butuh function untuk menambahkan 2 angka
function add(nilai1, nilai2) {
  return nilai1 + nilai2;
}

const hasilTambah = add(10, 20);
console.log("Hasil penambahan 10 dan 20 adalah:", hasilTambah);

// misalnya kita butuh function untuk mengurangi nilai1 dengan nilai2
const subtract = (nilai1, nilai2) => {
  const hasil = nilai1 - nilai2;
  return hasil;
};

const hasilKurang = subtract(10, 20);
console.log("Hasil pengurangan 10 dan 20 adalah:", hasilKurang);

// 1000 => Rp 1.000,00
function formatCurrency(amount) {
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  const result = formatter.format(amount);

  return result;

  // pertama, lihat dulu nominal inputnya
  // misal input 10000
  // lalu tambahkan titik per 3 nol dari belakang
  // 10.000
  // lalu tambahkan koma nol nol postfix (belakang)
  // 10.000,00
  // kemudian tambahkan Rp di Prefix (depannya)
  // Rp 10.000,00
}

const hasilFormat = formatCurrency(1000);
console.log(hasilFormat);
