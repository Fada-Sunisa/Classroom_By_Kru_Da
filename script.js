document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Image Slider functionality for all sliders
  const sliders = document.querySelectorAll(".image-slider");

  sliders.forEach((slider) => {
    const images = slider.querySelectorAll(".slider-image");
    let currentIndex = 0;

    // Function to show a specific image
    const showImage = (index) => {
      images.forEach((img, i) => {
        if (i === index) {
          img.classList.add("active"); // Add active class to show image
        } else {
          img.classList.remove("active"); // Remove active class from others
        }
      });
    };

    // Initial display
    showImage(currentIndex);

    // Function to go to the next image
    const nextImage = () => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    };

    // Set interval for automatic sliding (e.g., every 3 seconds)
    setInterval(nextImage, 3000); // Change image every 3 seconds
  });
});
