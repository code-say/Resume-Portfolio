$(document).ready(function () {
  $(window).scroll(function () {
    // Sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // Scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // Slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    $("html").css("scrollBehavior", "smooth");
  });

  // Toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // Typing text animation script
  new Typed(".typing", {
    strings: ["Developer", "Learner", "Software engineer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  new Typed(".typing-2", {
    strings: ["Developer", "Learner", "Software engineer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});
$(document).ready(function () {
  $(".carousel").owlCarousel({
    items: 1, // One testimonial visible at a time
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 3000, // Change slides every 3 seconds
    autoplayHoverPause: true, // Pause on hover
    dots: true, // Add navigation dots
    nav: false, // No navigation arrows
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});

