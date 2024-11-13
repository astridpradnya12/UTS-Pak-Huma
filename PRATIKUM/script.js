document.getElementById('fotm').addEventListener('submit', function (event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Untuk mencegah ada kolom yang kosong
    if (!name || !email || !password) {
        alert('Harap Mengisi kolom!!!'); 
        return; 
    }

    // Untuk memastikan alamat email benar
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Alamat email tidak valid!'); 
        return; 
    }

    alert('Formulir berhasil dikirim!'); 
});