document.addEventListener("DOMContentLoaded", () => {
    console.log("Script loaded!");

    let noClicks = 0;
    let yesClicks = 0;
    const maxNoClicks = 6; 
    const minNoScale = 0.65;
    let noScale = 1;
    let yesScale = 1;

    const gifElement = document.getElementById("togepi-gif");
    const noButton = document.getElementById("no-btn");
    const yesButton = document.getElementById("yes-btn");
    const message = document.getElementById("message");

    // Debugging: pastikan elemen ditemukan
    if (!gifElement || !noButton || !yesButton || !message) {
        console.error("Some elements are missing!");
        return;
    }

    // Array gambar untuk respon "No"
    const noImages = [
        "./assets/images/No/2.jpg",
        "./assets/images/No/3.jpg",
        "./assets/images/No/4.jpg",
        "./assets/images/No/5.jpg",
        "./assets/images/No/6.jpg",
        "./assets/images/No/1.jpg"

    ];

    // Array gambar untuk respon "Yes"
    const yesImages = [
        "./assets/images/yes/1.png",
        "./assets/images/yes/2.png",
        "./assets/images/yes/3.png",
        "./assets/images/yes/4.png",
        "./assets/images/yes/5.png",
    ];

    // Array pesan untuk tombol No
    const noButtonMessages = [
        "Yakin nih? 🤨",
        "Pliss jangan 😭",
        "Jangan gitu dong 🥺",
        "Kamu tega banget! 😩",
        "Kesempatan terakhir! 😤"
    ];

    // Array pesan untuk setiap klik Yes
    const yesMessages = [
        "Kamu sayang aku ga? 😳💕",
        "Kamu happy ga sama aku? 😊",
        "Kamu bahagia ga sama aku? 🥰",
        "Kamu suka sama aku ga? 😏🔥",
        "Final question, kalau aku jadi udang, kamu masih suka sama aku ga? 🦐"
    ];

    // Set default state
    message.innerText = yesMessages[0];
    gifElement.src = yesImages[0]; // Default image

    // Event listener untuk tombol No
    // Event listener untuk tombol No
noButton.addEventListener("click", () => {
    if (noClicks < maxNoClicks - 1) {
        // Ubah gambar sesuai index noClicks
        gifElement.src = noImages[Math.min(noClicks, noImages.length - 1)];

        // Ubah teks tombol No
        noButton.textContent = noButtonMessages[Math.min(noClicks, noButtonMessages.length - 1)];

        // Perkecil tombol No
        if (noScale > minNoScale) {
            noScale -= 0.1;
            noButton.style.transform = `scale(${noScale})`;
        }

        // Perbesar tombol Yes
        yesScale += 0.2;
        yesButton.style.transform = `scale(${yesScale})`;

        noClicks++;
    }

    // Jika ini adalah klik terakhir (klik ke-6), langsung ubah gambar ke 1.jpg dan sembunyikan tombol No
    if (noClicks === maxNoClicks - 1) {
        gifElement.src = noImages[5]; // Pastikan gambar terakhir berubah ke 1.jpg
        noButton.style.display = "none"; // Hilangkan tombol No tanpa animasi
        yesButton.textContent = "Udah iya aja! 😌";
        yesButton.style.transform = `scale(${yesScale + 0.5})`;
    }
});

    // Event listener untuk tombol Yes
    yesButton.addEventListener("click", () => {
        if (yesClicks < yesMessages.length - 1) {
            yesClicks++;

            // Reset kondisi tombol No
            noClicks = 0;
            noScale = 1;
            yesScale = 1;

            // Reset tampilan tombol
            noButton.style.display = "inline-block";
            noButton.style.transform = `scale(${noScale})`;
            yesButton.style.transform = `scale(${yesScale})`;
            noButton.textContent = "No";
            yesButton.textContent = "Yes";

            // Ubah pesan dan gambar ke Yes berikutnya
            message.innerText = yesMessages[yesClicks];
            gifElement.src = yesImages[Math.min(yesClicks, yesImages.length - 1)];
        } else {
            // Setelah semua pesan selesai
            window.location.href = "yay.html";
        }
    });
});