// Animasi slide-in
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slide-in");
    }
  });
}, {
  threshold: 0.1,
});

sections.forEach((section) => {
  observer.observe(section);
});

// Highlight nav link aktif saat scroll
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100; 
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href").includes(current)) {
      a.classList.add("active");
    }
  });
});

// nav links 
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        });
      }
    }
  });
});

// Contact form handling dengan validasi sederhana
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Harap isi semua field sebelum mengirim pesan.");
      return;
    }

    // Simulasi pengiriman
    alert("Terima kasih, " + name + "! Pesan Anda telah dikirim. Saya akan segera menghubungi Anda.");
    contactForm.reset();
  });
}

// Slider untuk projects
const projectCards = document.querySelector(".project-cards");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let currentIndex = 0;

if (projectCards && prevBtn && nextBtn) {
  const totalCards = document.querySelectorAll(".project-card").length;

  function updateSlider() {
    const translateX = -currentIndex * 400; // 400px lebar card
    projectCards.style.transform = `translateX(${translateX}px)`;
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalCards - 1;
    updateSlider();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex < totalCards - 1) ? currentIndex + 1 : 0;
    updateSlider();
  });
}

// Back to Top button
const backToTopBtn = document.getElementById("backToTop");
if (backToTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// Efek hover tambahan untuk skill dan project cards (menggunakan JS untuk efek scale)
document.querySelectorAll(".skill-card, .project-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px) scale(1.02)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)";
  });
});