console.log("Nama : Zidan");
console.log("Jurusan : PPL");
document.write("<p>Nama : Zidan, Jurusan <strong>PPL</strong></p>");

alert('Untuk mengetahui tanggal lahir saya, silahkan klik tombol Proses');
function lahirTanggal(){
    alert('14 Mei 2004');
}
// Membuat object element
var hasil = document.getElementById("outputdariinner");

// membuat output ke elemen hasil
hasil.innerHTML = "<p>Saya tinggal di PeTIK Jombang</p>";
