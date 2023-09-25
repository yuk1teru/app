document.addEventListener('DOMContentLoaded', function () {
  const loaderContainer = document.querySelector('.loader-container');
  loaderContainer.classList.add('loaded');
});

//workSlider
function createSlider(slider) {
  if (!slider) {
    return;
  }
  slider.addEventListener('mouseenter', () => {
    slider.addEventListener('wheel', handleWheel);
  });

  slider.addEventListener('mouseleave', () => {
    slider.removeEventListener('wheel', handleWheel);
  });

  function handleWheel(event) {
    event.preventDefault();
    const direction = event.deltaY > 0 ? 1 : -1;

    if (
      (direction === 1 && slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) ||
      (direction === -1 && slider.scrollLeft === 0)
    ) {
      window.scrollBy(0, direction * 50);
    } else {
      slider.scrollLeft += direction * 50;
    }
  }
}

const workSlider = document.querySelector('.work__swiper-wrapper');

createSlider(workSlider);
// // Додаємо обробник події при наведенні на slider
// slider.addEventListener('mouseenter', () => {
//   // Додаємо обробник події wheel
//   slider.addEventListener('wheel', handleWheel);
// });

// // Видаляємо обробники подій при відведенні миші від slider
// slider.addEventListener('mouseleave', () => {
//   slider.removeEventListener('wheel', handleWheel);
// });

// function handleWheel(event) {
//   event.preventDefault();
//   // Визначаємо напрямок прокручування
//   const direction = event.deltaY > 0 ? 1 : -1;

//   // Змінюємо значення scrollLeft відповідно до напрямку
//   slider.scrollLeft += direction * 50; // 50 - кількість пікселів для прокрутки
// }

// document.querySelector('.work__swiper').addEventListener('touchmove', function (event) {
//   // Заборонити прокручування сторінки
//   event.preventDefault();
// });
// const workSwiper = new Swiper('.work__swiper', {
//   slidesPerView: 'auto',
//   mousewheel: true,
//   freeMode: true,

//   mousewheel: {
//     // Чутливість прокрутки мишкою (за замовчуванням 1)
//     sensitivity: 0.5,
//     releaseOnEdges: true,
//   },
//   on: {
//     reachEnd: function () {
//       workSwiper.mousewheel.disable();
//     },

//     fromEdge: function () {
//       workSwiper.mousewheel.enable();
//     },
//   },
// });
//Approach slider
const approachSlider = document.querySelector('.case-approach__swiper');
// createSlider(approachSlider);

// const approachSwiper = new Swiper('.case-approach__swiper', {
//   slidesPerView: 'auto',
//   freeMode: true,
//   spaceBetween: 25,
//   mousewheel: true,

//   mousewheel: {
//     // Чутливість прокрутки мишкою (за замовчуванням 1)
//     sensitivity: 0.5,
//     releaseOnEdges: true,
//   },
//   on: {
//     reachEnd: function () {
//       setTimeout(() => {
//         approachSwiper.mousewheel.disable();
//       }, 0);
//     },

//     fromEdge: function () {
//       setTimeout(() => {
//         approachSwiper.mousewheel.enable();
//       }, 0);
//     },
//   },
//   breakpoints: {
//     768: {
//       slidesPerView: 3,
//       spaceBetween: 0,
//       freeMode: true,
//     },
//     550: {
//       slidesPerView: 'auto',
//       spaceBetween: 25,
//       freeMode: true,
//     },
//   },
// });
//Our Process slider
// if (window.innerWidth >= 1024) {
//   const ourSlider = document.querySelector('.our-process__swiper');

//   createSlider(ourSlider);
// }
// var ourSwiper = new Swiper('.our-process__swiper', {
//   slidesPerView: 'auto',
//   spaceBetween: 14,
//   freeMode: true,

//   grid: {
//     rows: 1,
//     fill: 'row',
//   },
//   breakpoints: {
//     1201: {
//       slidesPerView: 3,
//       spaceBetween: 41,
//       grid: {
//         rows: 2,
//         fill: 'row',
//       },
//     },
//     1025: {
//       slidesPerView: 3,
//       spaceBetween: 30,

//       grid: {
//         rows: 2,
//         fill: 'row',
//       },
//     },
//   },
// });

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
    indianTimeElement.innerHTML = indianTime.replace(':', '<span class="doublePoint">:</span>');
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

const box = document.getElementById('scroll-btn');

// Визначте розмір екрану для перевірки типу пристрою
const screenWidth = window.innerWidth;

if (screenWidth <= 768) {
  // Мобільний пристрій: використовуємо AOS для з'явлення знизу
  box.setAttribute('data-aos', 'fade-up');
  box.setAttribute('data-aos-once', 'false');
  box.setAttribute('data-aos-easing', 'ease-in-out-back');
  box.setAttribute('data-aos-duration', '500');
} else {
  box.setAttribute('data-aos', 'fade');
  box.setAttribute('data-aos-duration', '1200');
  // Десктоп: використовуємо звичайний fade
  // box.classList.add('aos-disabled'); // Вимикаємо AOS
  // box.style.opacity = 1; // Встановлюємо повну видимість
}
if (screenWidth <= 768) {
  AOS.init({
    duration: 700,
    once: true,
    offset: 100,
  });
} else {
  AOS.init({
    duration: 1200,
    once: true,
  });
}

const footer = document.querySelector('footer');
const scrollButton = document.querySelector('#scroll-btn');

// Функція, яка буде викликатися при прокрутці сторінки
function checkScroll() {
  // Отримання розмірів і позиції елементів
  const footerRect = footer.getBoundingClientRect();

  // Перевірка, чи футер вже видимий
  if (footerRect.top < window.innerHeight) {
    // Футер видно, ховаємо кнопку
    scrollButton.style.opacity = '0';
  } else {
    // Футер не видно, показуємо кнопку
    scrollButton.style.opacity = '1';
  }
}

// Додаємо слухача подій для визначення, коли потрібно перевіряти стан
window.addEventListener('scroll', checkScroll);

// Визиваємо функцію одразу при завантаженні сторінки
checkScroll();
