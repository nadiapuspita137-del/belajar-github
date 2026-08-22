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

const formKontak = document.querySelector("#form-kontak");
const inputNama = document.querySelector("#nama");
const statusForm = document.querySelector("#status-form");

formKontak.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = inputNama.value.trim();

    statusForm.textContent = `Terima kasih, ${nama}! Pesan latihan berhasil diproses.`;
    formKontak.reset();
});

const formTugas = document.querySelector("#form-tugas");
const inputTugas = document.querySelector("#input-tugas");
const daftarTugas = document.querySelector("#daftar-tugas");

formTugas.addEventListener("submit", function (event) {
    event.preventDefault();

    const teksTugas = inputTugas.value.trim();

    if (teksTugas === "") {
        return;
    }

    const itemTugas = document.createElement("li");
    const namaTugas = document.createElement("span");
    const tombolHapus = document.createElement("button");

    namaTugas.textContent = teksTugas;
    tombolHapus.textContent = "Hapus";
    tombolHapus.type = "button";

    tombolHapus.addEventListener("click", function () {
        itemTugas.remove();
    });

    itemTugas.append(namaTugas, tombolHapus);
    daftarTugas.append(itemTugas);

    formTugas.reset();
    inputTugas.focus();
});
