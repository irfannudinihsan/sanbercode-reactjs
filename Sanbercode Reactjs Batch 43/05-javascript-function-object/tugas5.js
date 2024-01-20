//soal 1

const cetakFunction = () => {
  return "Hallo Nama saya Irfannudin ihsan";
};

console.log(cetakFunction());

// soal 2
const myFunction = (angka1, angka2) => {
  return angka1 + angka2;
};

console.log(myFunction(20, 7));

// soal 3
const Hello = () => {
  return "Hello";
};

console.log(Hello());

// soal 4

let obj = {
  nama: "john",
  umur: 22,
  bahasa: "indonesia",
};

console.log(obj.bahasa);

// soal 5
let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku", 1992];
let objDaftarPeserta = {
  nama: arrayDaftarPeserta[0],
  kelamin: arrayDaftarPeserta[1],
  hobi: arrayDaftarPeserta[2],
  tahunLahir: arrayDaftarPeserta[3],
};
console.log(objDaftarPeserta);

// soal 6

let buah = [
  {
    nama: "Nanas",
    warna: "Kuning",
    adaBijinya: false,
    harga: 9000,
  },
  {
    nama: "Jeruk",
    warna: "Oranye",
    adaBijinya: true,
    harga: 8000,
  },
  {
    nama: "Semangka",
    warna: "Hijau & Merah",
    adaBijinya: true,
    harga: 10000,
  },
  {
    nama: "Pisang",
    warna: "Kuning",
    adaBijinya: false,
    harga: 5000,
  },
];

const filterBuah = buah.filter((item) => {
  return item.adaBijinya === false;
});

console.log(filterBuah);

//soal 7
let phone = {
  name: "Galaxy Fold 5",
  brand: "Samsung",
  year: 2023,
};

const { name, brand, year } = phone;

console.log(name, brand, year);

//soal 8

let dataBukuTambahan = {
  penulis: "john doe",
  tahunTerbit: 2020,
};

let buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172,
};

let objOutput = { ...dataBukuTambahan, ...buku };

console.log(objOutput);

// soal 9

let mobil = {
  merk: "bmw",

  color: "red",

  year: 2002,
};

const functionObject = (param) => {

  return param;
};


console.log(functionObject(mobil))