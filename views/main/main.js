

const MainComponent = defineAsyncComponent(async () => {
  return {
    data() {

      

    },
    template: await getHTML('./views/main/main.html'),

  }
});






    // Array of images
    const imageData = [
      { src: "./images/Safety-Officer-2.png", alt: "Safety Officer 2" },
      { src: "./images/fortinet.png", alt: "Associate Cybersecurity" },
      { src: "./images/Zendesk-Certification.jfif", alt: "Zendesk Professional" },
      { src: "./images/new-certification.png", alt: "New Certification" },
      { src: "./images/cloud-security.png", alt: "Cloud Security" }
    ];

    // Render images dynamically
    const gallery = document.getElementById("gallery");
    imageData.forEach(img => {
      const imageEl = document.createElement("img");
      imageEl.src = img.src;
      imageEl.alt = img.alt;
      imageEl.className = "rounded shadow transition-transform duration-300 ease-in-out cursor-pointer transform relative gallery-img";
      imageEl.onclick = () => toggleZoom(imageEl);
      gallery.appendChild(imageEl);
    });

    // Zoom toggle function
    function toggleZoom(clickedImg) {
      const images = document.querySelectorAll('.gallery-img');
      const overlay = document.getElementById('overlay');

      // Remove zoom from other images
      images.forEach(img => {
        if (img !== clickedImg) {
          img.classList.remove('scale-[3]', 'z-50');
        }
      });

      // Toggle zoom on clicked image
      clickedImg.classList.toggle('scale-[3]');
      clickedImg.classList.toggle('z-50');

      // Show overlay if any image is zoomed
      if ([...images].some(img => img.classList.contains('scale-[3]'))) {
        overlay.classList.remove('hidden');
        setTimeout(() => overlay.classList.add('opacity-100'), 10);
      } else {
        overlay.classList.remove('opacity-100');
        setTimeout(() => overlay.classList.add('hidden'), 300);
      }
    }

    // Reset zoom when clicking overlay
    document.getElementById('overlay').addEventListener('click', function() {
      const images = document.querySelectorAll('.gallery-img');
      images.forEach(img => img.classList.remove('scale-[3]', 'z-50'));
      this.classList.remove('opacity-100');
      setTimeout(() => this.classList.add('hidden'), 300);
    });

    // Reset zoom when clicking outside any image
    document.addEventListener('click', function(e) {
      const images = document.querySelectorAll('.gallery-img');
      const overlay = document.getElementById('overlay');
      if (![...images].some(img => img.contains(e.target)) && e.target.id !== 'overlay') {
        images.forEach(img => img.classList.remove('scale-[3]', 'z-50'));
        overlay.classList.remove('opacity-100');
        setTimeout(() => overlay.classList.add('hidden'), 300);
      }
    });






// function toggleMenu(id) {
//   document.getElementById(id).classList.toggle('hidden');
// }

// function toggleSidebar() {
//   document.getElementById('sidebar').classList.toggle('-translate-x-full');
// }

