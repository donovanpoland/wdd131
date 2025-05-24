
window.addEventListener("DOMContentLoaded", () => {
  const img = document.getElementById("hero-img");

  function updateImageTitle() {
    const width = window.innerWidth;

    if (width >= 1000) {
      img.title = "largest image";
      console.log("largest image displayed");
    } else if (width >= 500) {
      img.title = "medium image";
      console.log("medium image displayed");
    } else {
      img.title = "smallest image";
      console.log("smallest image displayed");
    }
  }

  updateImageTitle(); // Call on load
  window.addEventListener("resize", updateImageTitle); // Optional: update on resize
});
