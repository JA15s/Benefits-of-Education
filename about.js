

const showMoreBtn = document.getElementById("showMoreBtn");
const moreBenefits = document.getElementById("moreBenefits");

showMoreBtn.addEventListener("click", function () {
  if (moreBenefits.style.display === "none") {
    moreBenefits.style.display = "block";
    showMoreBtn.textContent = "Show Less";
  } else {
    moreBenefits.style.display = "none";
    showMoreBtn.textContent = "Show More Benefits";
  }
});
