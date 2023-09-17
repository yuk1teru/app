const workSwiper = new Swiper('.work__swiper', {
  slidesPerView: 'auto',
});
//Approach slider
const approachSwiper = new Swiper('.case-approach__swiper', {
  slidesPerView: 'auto',
  spaceBetween: 25,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    550: {
      slidesPerView: 'auto',
      spaceBetween: 55,
    },
  },
});
//Our Process slider
var swiper = new Swiper('.our-process__swiper', {
  slidesPerView: 1.1,
  spaceBetween: 14,
  grid: {
    rows: 1,
    fill: 'row',
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 41,
      grid: {
        rows: 2,
        fill: 'row',
      },
    },
    1025: {
      slidesPerView: 3,
      spaceBetween: 32,
      grid: {
        rows: 2,
        fill: 'row',
      },
    },
    768: {
      slidesPerView: 2.2,
      grid: {
        rows: 1,
        fill: 'row',
      },
    },
    650: {
      slidesPerView: 2.1,
      grid: {
        rows: 1,
        fill: 'row',
      },
    },
    540: {
      slidesPerView: 1.7,
      grid: {
        rows: 1,
        fill: 'row',
      },
    },
    450: {
      slidesPerView: 1.3,
      grid: {
        rows: 1,
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
    indianTimeElement.textContent = indianTime;
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
