
  const menuBtn = document.getElementById("menuBtn");
  const menuCard = document.getElementById("menuCard");

  menuBtn.addEventListener("click", () => {
    if (menuCard.style.display === "flex") {
      menuCard.style.display = "none";
    } else {
      menuCard.style.display = "flex";
    }
  });

 

