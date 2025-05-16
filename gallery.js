

  const fashionBtn = document.querySelector(".gcon_2");
  const allImages = document.querySelectorAll(".filter-img");

  const img1 = document.getElementById("img1");
  const img5 = document.getElementById("img5");
  const img8 = document.getElementById("img8");

  fashionBtn.addEventListener("click", () => {
    // Tüm filter-img sınıflı görselleri gizle
    allImages.forEach(img => {
      img.style.display = "none";
    });

    // Hedef 3 resmi göster
    img1.style.display = "flex";
    img5.style.display = "flex";
    img8.style.display = "flex";

    // 5. resmi yukarı çıkart
    img5.classList.add("active-up");
  });
   


