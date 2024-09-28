type IdentitasPrajurit = { 
    namaPahlawana: string; 
    umur: number; 
    status: boolean; 
    point: number 
};

type SumberDaya = { 
    nama: string; 
    jumlah: number,
};

const identitas: IdentitasPrajurit[] = [
    { namaPahlawana: 'Arion', umur: 30, status: true, point: 75 }
];

const perlengkapan: SumberDaya[] = [
    { nama: "Emas", jumlah: 5000 },
    { nama: "Makanan", jumlah: 120 },
    { nama: "Prajurit", jumlah: 200 }
];

function PetualanganPahlawan(namaSumber: string, tambahan: number): number | void {
    const sumber = perlengkapan.find(item => item.nama === namaSumber);
    if (sumber) {
        sumber.jumlah += tambahan;
        console.log(`${sumber.nama} telah ditambahkan sebanyak ${tambahan}.`);
        console.log(`Total ${sumber.nama} saat ini: ${sumber.jumlah}`);
        return sumber.jumlah;
    } else {
        console.log(`Maaf! Data ${namaSumber} tidak ditemukan.`);
    }
}

    // penggunaan fungsi --PetualanganPrajurit
PetualanganPahlawan("Makanan", 50);

    // Misi Penyembuhan
let kesehatanAwal: number = 100;
function cekKelayakanBertarung(jumlahPrajurit: number, poinHilang: number) {
    const totalKesehatanHilang = jumlahPrajurit * poinHilang;
    const kesehatanAkhir = kesehatanAwal - totalKesehatanHilang; 

    if (kesehatanAkhir > 0) {
        console.log('Prajurit masih bisa bertarung.');
    } else {
        console.log('Prajurit tidak bisa bertarung.');
    }
}
cekKelayakanBertarung(10, 5); 

// Rangkuman Misi
const namaPahlawan: string = "Arion";
let emasDikumpulkan: number = 1500;
let poinPengalaman: number = 75;

function rangkumanMisi() {
    console.log(`Nama Pahlawan: ${namaPahlawan}`);
    console.log(`Emas yang dikumpulkan: ${emasDikumpulkan} keping`);
    console.log(`Poin pengalaman yang didapat: ${poinPengalaman} XP`);
}

rangkumanMisi();

