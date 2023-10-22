document.addEventListener('DOMContentLoaded', function () {
        const params = new URLSearchParams(window.location.search);
        const pendaftaranTableBody = document.getElementById('pendaftaranTable').getElementsByTagName('tbody')[0];
    
        if (params.has('nama')) {
        const nama = params.get('nama');
        const tanggalLahir = params.get('tanggalLahir');
        const alamat = params.get('alamat');
        const sosmed = params.get('sosmed');
        const pengalaman = params.get('pengalaman');
    
        const newRow = pendaftaranTableBody.insertRow();
        newRow.insertCell().textContent = nama;
        newRow.insertCell().textContent = tanggalLahir;
        newRow.insertCell().textContent = alamat;
        newRow.insertCell().textContent = sosmed;
        newRow.insertCell().textContent = pengalaman;
        }
    });


    function handleSubmit() {
        // Ambil nilai dari setiap input
        let nama = document.getElementById('nama').value;
        let tanggalLahir = document.getElementById('tanggal_lahir').value;
        // ... ambil nilai input lainnya ...
    
        // Cek apakah sudah ada data di Local Storage
        let existingData = localStorage.getItem('userData');
        let userData = existingData ? JSON.parse(existingData) : [];
    
        // Tambahkan data baru ke array
        userData.push({
        nama: nama,
        tanggalLahir: tanggalLahir,
        // ... tambahkan data input lainnya ...
        });
    
        // Simpan array kembali ke Local Storage
        localStorage.setItem('userData', JSON.stringify(userData));
    
        // Redirect ke halaman tabel
        window.location.href = 'tabel.html';
    }

