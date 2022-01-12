let fungsi = function (nama) {
    console.log("Belajar Function " + nama);
};

fungsi("Widian");

let contoh = (nama)=>{
    console.log("Belajar Function " + nama);
}

contoh("Natasyah");

let tambah = function (a,b) {
    return a + b;
};

console.log(tambah(2, 3));

let plus = (a, b) => a + b;

console.log(plus(2, 3));

let hasil = a => a * 2;

console.log(hasil(4));

let lagi = ()=> console.log("Coba Lagi");

lagi();

let belajar =()=>{
    console.log("Baris satu");
    console.log("Baris dua");
    console.log("Baris tiga");
    console.log("Baris selanjutnya");
};

belajar();

let nilai = 6;

let uji = nilai < 10 ? () => predikat = "GAGAL" : () => predikat = "LULUS";
console.log(uji());