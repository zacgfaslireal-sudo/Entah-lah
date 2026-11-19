document.addEventListener('DOMContentLoaded', function() {
    const tombolLanjut = document.getElementById('tombol-lanjut');
    
    if (tombolLanjut) {
        tombolLanjut.addEventListener('click', function(e) {
            e.preventDefault();
            console.log("Tombol diklik!");

            const boxElement = document.querySelector('.box');
            if (boxElement) {
                boxElement.classList.add('fade-out');
            }

            setTimeout(function() {
                console.log("Waktu habis, pindah halaman...");
                window.location.href = 'harapan.html';
            }, 800);
        });
    }
});
