document.addEventListener('DOMContentLoaded', function () {
  const loaderContainer = document.querySelector('.loader-container');
  loaderContainer.classList.add('loaded');
});

const workSwiper = new Swiper('.work__swiper', {
  slidesPerView: 'auto',
  freeMode: true,
});
//Approach slider
const approachSwiper = new Swiper('.case-approach__swiper', {
  slidesPerView: 'auto',
  freeMode: true,
  spaceBetween: 25,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 0,
      freeMode: true,
    },
    550: {
      slidesPerView: 'auto',
      spaceBetween: 25,
      freeMode: true,
    },
  },
});
//Our Process slider
var swiper = new Swiper('.our-process__swiper', {
  slidesPerView: 'auto',
  spaceBetween: 14,
  freeMode: true,
  grid: {
    rows: 1,
    fill: 'row',
  },
  breakpoints: {
    1201: {
      slidesPerView: 3,
      spaceBetween: 41,

      grid: {
        rows: 2,
        fill: 'row',
      },
    },
    1025: {
      slidesPerView: 3,
      spaceBetween: 30,

      grid: {
        rows: 2,
        fill: 'row',
      },
    },
  },
});

function updateIndianTime() {
  const options = {
    timeZone: 'Asia/Kolkata',
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
  };

  const indianTime = new Date().toLocaleTimeString('en-US', options);
  const indianTimeElement = document.getElementById('indianTime');
  if (indianTimeElement) {
    indianTimeElement.textContent = ` ${indianTime}`;
  }
}

setInterval(updateIndianTime, 1000);

updateIndianTime();

function scrollToSection(sectionId) {
  const targetElement = document.getElementById(sectionId);

  if (targetElement) {
    const offsetTop = targetElement.offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });
  }
}
const scrollBtnEl = document.getElementById('scroll-btn');
if (scrollBtnEl) {
  scrollBtnEl.addEventListener('click', () => {
    scrollToSection('footer');
  });
}
AOS.init({
  duration: 1200,
  once: true,
});
