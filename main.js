window.onload = () => {
  setTimeout(() => {
    document.body.classList.remove("not-loaded");

    // kasih delay 6 detik setelah bunga muncul
    setTimeout(() => {
      const textContainer = document.querySelector(".typewriter-container");
      const text = document.querySelector(".typewriter-text");
      if (textContainer && text) {
        textContainer.style.opacity = 1;
        text.classList.add("show");
        console.log("✅ Typewriter text muncul!");
      } else {
        console.error("❌ Elemen teks tidak ditemukan!");
      }
    }, 2000);

  }, 1000);
};
