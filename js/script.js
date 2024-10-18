// gsap
if (window.innerWidth > 915) {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero-img-container",
      start: "top top",
      end: "bottom -70%",
      scrub: true,
      markers: false,
    },
  });

  tl.to(".hero-img-container", {
    x: "60vw",
    y: "50vh",
    scale: 0.8,
    rotation: -30,
    ease: "power3.inOut",
  });

  tl.to(".hero-img-container", {
    x: "0vw",
    y: "150vh",
    scale: 1,
    rotation: 30,
    ease: "power3.inOut",
  });
}
// stats section
let section = document.querySelector("#stats");
let progs = document.querySelectorAll(".prog-holder .prog");

window.onscroll = function () {
  // stats animation
  if (window.scrollY >= section.offsetTop - 100) {
    progs.forEach((prog) => {
      prog.classList.add("animate");
    });
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};
if (window.innerWidth < 767) {
  window.onscroll = function () {
    // stats animation
    if (window.scrollY >= section.offsetTop - 300) {
      progs.forEach((prog) => {
        prog.classList.add("animate");
      });
      if (!started) {
        nums.forEach((num) => startCount(num));
      }
      started = true;
    }
  };
}

let nums = document.querySelectorAll(".prog .percent");
let started = false;

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

// about section
const aboutImg = document.querySelector(".about-container img");
let aboutSection = document.querySelector("#about");

window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;
  let sectionOffset = aboutSection.offsetTop;

  if (scrollPosition >= sectionOffset - 800) {
    let dynamicMarginTop = (scrollPosition - sectionOffset + 100) * 0.8;
    aboutImg.style.cssText = `transform: translateY(${dynamicMarginTop}px)`;
  }
});

// scroll to top button
const backTopBtn = document.querySelector("[data-back-top-btn]");
window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    backTopBtn.classList.add("active");
  } else {
    backTopBtn.classList.remove("active");
  }
});
// cursor
const customCursor = document.getElementById('cursor');
document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  customCursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
});
// preloader
const preloader = document.querySelector('.preloader');
window.addEventListener('load', () => {
  preloader.classList.add('loaded');
})