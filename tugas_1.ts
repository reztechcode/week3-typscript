// 1. Tipe Data String
const namaPengguna: string = "Irez Abdullah";
const kota: string = "Sukabumi";
const ucapan: string = `Halo, nama saya ${namaPengguna}, Saya berasal dari ${kota}`;

// 2. Tipe Data Number
const nilaiHeksadesimal: number = 0x1c; // Mengubah angka heksadesimal

// 3. Tipe Data Boolean
const isVerified: boolean = true; // Mengubah nilai boolean

// 4. Tipe Data Symbol
let simbolC: symbol = Symbol("spesial");
let simbolD: symbol = Symbol("unik lagi");

// 5. Tipe Data Undefined
const nilaiTakAda: undefined = undefined; // Mengganti nama variabel

// 6. Tipe Data Null
const dataKosongSekali: null = null; // Mengubah nama variabel

// 7. Tipe Data Any
const userProfile: any = { name: "Irez", age: 10 }; // Mengganti nama objek

// 8. Penggunaan Fungsi Void
const massage: string = "Uji coba message";
const showMessage = (msg: string): void => {
  console.log(msg);
};

// 9. Penggunaan ReadOnly
let dataIdentitas: { readonly id: number; nama: string } = {
  id: 20240927,
  nama: "Irez Abd",
};

// 10. Penggunaan Fungsi Object
let informasi: object = { nama: "Irez", number: 211 };

// 11. Penggunaan Tipe Unknown
let nilaiTakTerdefinisi: unknown;

nilaiTakTerdefinisi = 30; // Mengubah nilai

// 12. Penggunaan Array Number
const penjualan: number[] = [2500, 40000, 70000];

// Penggunaan Tuple Array
const cabangData: [string, number, boolean] = ["Toko Jaya", 2500, true];

// 13. Penggunaan Union
const pegawaiData: (string | number)[] = ["Staff", 28];

// 14. Penggunaan Enum
enum DataCabang {
  NamaCabang = "Cabang Jaya1",
  JumlahCustomer = 8,
}
let DataCabangs: (string | number)[] = [
  DataCabang.NamaCabang,
  DataCabang.JumlahCustomer,
];

// 15. Penggunaan Nilai Tetap (Literal)
let statusPenghasilan:  | "Stabil" | "Meningkat" | "Menurun"
  | "Belum Ada Penghasilan" = "Belum Ada Penghasilan";

// 16. Penggunaan Custom Tipe
type Staff = { id: number; nama: string; phone: number };
let daftarKasir: Staff[] = [
  { id: 2401, nama: "Staff 1", phone: 1231},
  { id: 2402, nama: "Staff 2", phone: 1232},
];

// 17. Penggunaan Object Date
const waktuLibur: (string | boolean | object)[] = ["Minggu", new Date(), false];
const jadwalLibur = `Jadwal Libur : ${waktuLibur}`;

// 18. Penggunaan Map
let stokProduk = new Map<string, number>([
  ["Keyboard", 12],
  ["Mouse", 17],
]);

// 19. Penggunaan Set untuk menghindari duplikat data
let produkTersedia: Set<string | number> = new Set();
produkTersedia.add("Keyboard");
produkTersedia.add(5);
produkTersedia.add("Mouse"); // Duplikat tidak akan ditambahkan

// 20. Penggunaan Iterasi
let pendapatanBulanan: (string | number)[] = [
  "Minggu Pertama",
  20000,
  "Minggu Kedua",
  30000,
  "Minggu Ketiga",
  18000,
];

let ringkasanLaporan: string = "Ringkasan Pendapatan Bulan Mei:\n";
for (let index: number = 0; index < pendapatanBulanan.length; index++) {
  ringkasanLaporan += `Data: ${pendapatanBulanan[index]}\n`;
}

// 21. Penggunaan Interface
interface SparePart {
  nama: string;
  jumlah: number;
}

const SparePart: SparePart = {
  nama: "Monitor/ LCD/LED",
  jumlah: 5,
};

// 22. tupple
const TuplesExample: [string, number] = ["Toko Jaya", 100];

// 23. function
  const hitunginLuas = (panjang: number, lebar: number): number => {
    return panjang * lebar;
  };

// 24. Angka Besar
const angkaBesar: bigint = BigInt(12345678901234567890);

// 25. Penggunaan Assertion
let hitungPanjangString: number = ('coba-coba' as string).length



  // Menampilkan semua hasil
console.log(ucapan);
console.log(nilaiHeksadesimal);
console.log(simbolC || simbolD);
console.log(nilaiTakAda);
console.log(dataKosongSekali);
console.log(userProfile);

console.log(showMessage("Contoh Penggunaan Fungsi Void")); //contoh penggunaan Void
console.log(dataIdentitas);
console.log(informasi);
console.log(penjualan);

if (typeof nilaiTakTerdefinisi === "number") {
  console.log(`Jumlah Nilai: ${nilaiTakTerdefinisi + 5}`);
  console.log("Tipe nilaiTakTerdefinisi:", typeof nilaiTakTerdefinisi);
} else if (typeof nilaiTakTerdefinisi === "string") {
  console.log(`Anda memasukkan string: ${nilaiTakTerdefinisi}`);
  console.log("Tipe nilaiTakTerdefinisi:", typeof nilaiTakTerdefinisi);
}
console.log(cabangData);
console.log(DataCabangs);
console.log(pegawaiData);
console.log(statusPenghasilan);
console.log(daftarKasir);
console.log(jadwalLibur);
console.log(stokProduk);
console.log(produkTersedia);
console.log(ringkasanLaporan);
console.log(SparePart);
console.log(TuplesExample);
console.log(`Luas: ${hitunginLuas(5, 10)}`);
console.log(`Angka Besar: ${angkaBesar}`);
console.log(hitungPanjangString);

// // ================== Operasi Aritmatika ==================
const jumlah = (a: number, b: number, c: number) => {
  return a + b + c;
};

const kurang = (a: number, b: number) => {
  return a - b;
};

const kali = (a: number, b: number, c: number) => {
  return a * b * c;
};

const bagi = (a: number, b: number, c: number, d: number) => {
  return a / b / c / d;
};

console.log('======= Operasi Aritmatika =======');
console.log(`Hasil Penjumlahan: ${jumlah(2, 4, 5)}`);
console.log(`Hasil Pengurangan: ${kurang(50, 10)}`);
console.log(`Hasil Perkalian: ${kali(2, 4, 5)}`);
console.log(`Hasil Pembagian: ${bagi(40, 2, 4, 2)}`);
