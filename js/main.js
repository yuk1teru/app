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
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
});
swiper.on('slideChange', () => {
  updateButtonState();
});
nextButton.addEventListener('click', () => {
  swiper.slideNext(1000);
});
prevButton.addEventListener('click', () => {
  swiper.slidePrev(1000);
});
function updateButtonState() {
  if (swiper.isBeginning) {
    prevButton.classList.add('swiper-button-disabled');
  } else {
    prevButton.classList.remove('swiper-button-disabled');
  }

  if (swiper.isEnd) {
    nextButton.classList.add('swiper-button-disabled');
  } else {
    nextButton.classList.remove('swiper-button-disabled');
  }
}

// Ініціалізуємо стан кнопок при завантаженні сторінки
updateButtonState();
//Approach slider
const approachSlider = document.querySelector('.case-approach__swiper');

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

setInterval(updateIndianTime, 2000);

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
const contactUsEl = document.querySelector('.header__contact-us');

if (contactUsEl) {
  contactUsEl.addEventListener('click', () => {
    scrollToSection('footer');
  });
}
if (scrollBtnEl) {
  scrollBtnEl.addEventListener('click', () => {
    scrollToSection('footer');
  });
}

const box = document.getElementById('scroll-btn');
const hero = document.querySelector('.hero');
const screenWidth = window.innerWidth;

box.setAttribute('data-aos', 'fade-up');
box.setAttribute('data-aos-once', 'false');
box.setAttribute('data-aos-easing', 'ease-in-out-back');
box.setAttribute('data-aos-duration', '500');
if (screenWidth <= 768) {
  if (hero) {
    hero.setAttribute('data-aos-duration', '3000');
  }
} else {
  box.setAttribute('data-aos-duration', '1200');
}
if (screenWidth <= 768) {
  AOS.init({
    duration: 700,
    once: true,
    offset: 90,
  });
  document.querySelector('.work').classList.add('aos-animate');
} else {
  AOS.init({
    duration: 1200,
    once: true,
  });
}

const footer = document.querySelector('footer');
const scrollButton = document.querySelector('#scroll-btn');

function checkScroll() {
  const footerRect = footer.getBoundingClientRect();

  if (footerRect.top < window.innerHeight) {
    scrollButton.classList.add('hide');
  } else {
    scrollButton.classList.remove('hide');
  }
}

window.addEventListener('scroll', checkScroll);

checkScroll();
