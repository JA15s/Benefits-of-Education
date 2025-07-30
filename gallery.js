
function enlarge(img) {
  if (img.style.transform === "scale(1.5)") {
    img.style.transform = "scale(1)";
    img.style.transition = "transform 0.3s";
  } else {
    img.style.transform = "scale(1.5)";
    img.style.transition = "transform 0.3s";
  }
}


