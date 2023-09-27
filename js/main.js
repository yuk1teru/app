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
const hero = document.querySelector('.hero');
const screenWidth = window.innerWidth;

if (screenWidth <= 768) {
  box.setAttribute('data-aos', 'fade-up');
  box.setAttribute('data-aos-once', 'false');
  box.setAttribute('data-aos-easing', 'ease-in-out-back');
  box.setAttribute('data-aos-duration', '500');
  if (hero) {
    hero.setAttribute('data-aos-duration', '3000');
  }
} else {
  box.setAttribute('data-aos', 'fade');
  box.setAttribute('data-aos-duration', '1200');
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

function checkScroll() {
  const footerRect = footer.getBoundingClientRect();

  if (footerRect.top < window.innerHeight) {
    scrollButton.style.opacity = '0';
  } else {
    scrollButton.style.opacity = '1';
  }
}

window.addEventListener('scroll', checkScroll);

checkScroll();
