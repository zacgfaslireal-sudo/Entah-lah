document.getElementById('tombol-lanjut').addEventListener('click', function(e) {
    e.preventDefault(); 
    console.log("Tombol diklik!"); // Cek di Console (F12) apakah tulisan ini muncul
    
    const boxElement = document.querySelector('.box');
    boxElement.classList.add('fade-out');
    
    setTimeout(function() {
        console.log("Waktu habis, pindah halaman...");
        window.location.href = 'pendahuluan.html';
    }, 800);
});
