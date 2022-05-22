function mySubmit() { 

    let Alamat = document.getElementById('alamat').value;
    let namapemohon = document.getElementById('namapemohon');

    if (namapemohon = namapemohon.value) {
        if (alamat = alamat.value) {
            document.getElementById('paparnamapemohon').innerHTML = namapemohon;
            document.getElementById('paparalamat').innerHTML = Alamat;
        }
        else {
            alert("Sila isi alamat anda !");
        }
    }
    else {
        alert("Sila isi nama anda !");
    }
}