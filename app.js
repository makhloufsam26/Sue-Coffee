const navSlide = () => {
   const burger = document.querySelector(".burger");
   const nav = document.querySelector(".nav-list");
   const landingImg = document.querySelector(".landing-img");
   const navLinks = document.querySelectorAll(".nav-item");

   burger.addEventListener("click", () => {
      // toggle nav
      nav.classList.toggle("nav-active");

      // Burger animation X
      burger.classList.toggle("toggle");

      // Blur Image
      setTimeout(() => {
         landingImg.classList.toggle("blur");
      }, 500);

      // Animate links
      navLinks.forEach((link, index) => {
         if (link.style.animation) {
            link.style.animation = "";
         } else {
            link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.5}s`;
         }
      });
   });
};

navSlide();
