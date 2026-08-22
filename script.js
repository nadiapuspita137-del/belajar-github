const tombolTema = document.querySelector("#tombol-tema");

tombolTema.addEventListener("click", function () {
    document.body.classList.toggle("mode-gelap");

    const modeGelapAktif = document.body.classList.contains("mode-gelap");

    if (modeGelapAktif) {
        tombolTema.textContent = "Aktifkan Mode Terang";
    } else {
        tombolTema.textContent = "Aktifkan Mode Gelap";
    }
});
