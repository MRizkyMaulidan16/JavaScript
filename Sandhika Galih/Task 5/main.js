//alert
alert("Halo Guys");


//prompt
function mintanama(){
    var nama = prompt("Masukkan nama anda");

    if(nama){
        document.getElementById("output").innerHTML = '<br>Halo, nama saya ' + nama + '<br><br>';
        console.log("Selamat datang, " + nama);
    } else {
        document.getElementById("output").innerHTML = '<br>Nama kosong, silahkan isi<br><br>';
        console.log("Nama kosong");
    }
}
//confirm
function datahapus(){
    var yakin = confirm("Apakah anda yakin ingin menghapus data ini?");

    if(yakin){
        document.getElementById("hapus").innerHTML = '<br>Berhasil data dihapus<br><br>';
        console.log("Data dihapus");
    } else {
        document.getElementById("hapus").innerHTML = '<br>Data ga jadi dihapus<br><br>';
        console.log("Data batal dihapus");
    }
}