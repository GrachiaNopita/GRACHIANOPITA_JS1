//if else nested if
let nilaiUjian = 85;
let kehadiran = 54;
let lulusUjian = nilaiUjian >= 70;
let lulusKehadiran = kehadiran >= 80;

if (lulusUjian) {
  if (lulusKehadiran) {
    console.log("Selamat! Anda lulus ujian dan memenuhi syarat kehadiran.");
  } else {
    console.log("Anda lulus ujian, tetapi perlu meningkatkan kehadiran.");
  }
} else {
  console.log("Anda tidak lulus ujian.");
}
//if else nested if


//switch case
let nilaiHuruf = "A";
let keteranganNilai = "";

switch (nilaiHuruf) {
  case "A":
  case "A+":
    keteranganNilai = "Terbaik! Pertahankan prestasi Anda!";
    break;
  case "A-":
    keteranganNilai = "Sangat Bagus! Pertahankan dan tingkatkan lagi.";
    break;
  case "B":
    keteranganNilai = "Bagus, tingkatkan lagi.";
    break;
  case "C":
    keteranganNilai = "Cukup, perbanyak belajar.";
    break;
  case "D":
    keteranganNilai = "Anda perlu belajar lebih keras.";
    break;
  case "E":
    keteranganNilai = "Maaf, Anda tidak lulus.";
    break;
  default:
    keteranganNilai = "Nilai tidak valid";
}

console.log("Keterangan nilai: " + keteranganNilai);
//switch case


//for statement
let pilihanPekerjaan = ["Programmer", "Pengusaha", "Tentara"];
let pekerjaanImpian = "";
let isValid = false;

// Menampilkan pilihan pekerjaan
for (let i = 0; i < pilihanPekerjaan.length; i++) {
  console.log(`Pilihan ke-${i + 1}: ${pilihanPekerjaan[i]}`);
}

// Meminta input pengguna dan melakukan validasi
while (!isValid) {
  pekerjaanImpian = prompt("Pilih pekerjaan impian");

  // Memeriksa apakah input valid
  for (let i = 0; i < pilihanPekerjaan.length; i++) {
    if (pekerjaanImpian === pilihanPekerjaan[i]) {
      isValid = true;
      break;
    }
  }

  if (!isValid) {
    console.log("Pilihan tidak valid. Silakan pilih dari opsi yang disediakan.");
  }
}

// Menampilkan pekerjaan impian yang dipilih
console.log(`Anda bercita-cita menjadi seorang ${pekerjaanImpian}.`);
//for statement


//while do while
// Program validasi password menggunakan while dan do-while
let correctPassword = "tes1";
let enteredPassword;

console.log("While: Masukkan password");
while (enteredPassword !== correctPassword) {
  enteredPassword = prompt("Masukkan password pertama");
  if (enteredPassword !== correctPassword) {
    console.log("Password salah. Coba lagi.");
  }
}
console.log("Password benar. Akses diberikan.");

let correctPassword2 = "tes2";
let enteredPassword2;

console.log("Do-While: Masukkan password");
do {
  enteredPassword2 = prompt("Masukkan password kedua");
  if (enteredPassword2 !== correctPassword2) {
    console.log("Password salah. Coba lagi.");
  }
} while (enteredPassword2 !== correctPassword2);
console.log("Password benar. Akses diberikan.");
//while do while


//function
// Program menghitung jumlah kata dalam sebuah kalimat menggunakan fungsi
function hitungJumlahKata(kalimat) {
    let kataArray = kalimat.trim().split(/\s+/);
    return kataArray.length;
  }
  
  // Meminta input dari pengguna menggunakan prompt
  let kalimatUji = prompt("Masukkan kalimat untuk menghitung jumlah katanya");
  let jumlahKata = hitungJumlahKata(kalimatUji);
  console.log(`Jumlah kata dalam kalimat: ${jumlahKata}.`);
//function