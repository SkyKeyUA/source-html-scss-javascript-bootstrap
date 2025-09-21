window.addEventListener('load', windowLoad);
const header = document.querySelector('.header');
const html = document.documentElement;
const bannerPosts = document.querySelector('.posts__banner');
const viewCards = document.querySelector('.view__root');
const searchBoard = document.querySelector('.search-board');

const heightHeader = (tag) => {
  if (header) tag.style.top = `${header.offsetHeight}px`;
};
bannerPosts && heightHeader(bannerPosts);
viewCards && heightHeader(viewCards);

function windowLoad() {
  document.addEventListener('click', documentActions);
  html.classList.add('loaded');
}
function documentActions(e) {
  const targetElement = e.target;
  if (992 >= window.innerWidth) {
    if (targetElement.closest('.icon-menu')) {
      html.classList.toggle('menu-open');
    }
    targetElement.closest('.menu__link') && html.classList.contains('menu-open')
      ? html.classList.remove('menu-open')
      : null;
  }
  if (
    (!targetElement.closest('.search-board') &&
      document.querySelector('.search-board').classList.contains('active')) ||
    targetElement.closest('.search-board__close')
  ) {
    searchBoard.classList.remove('active');
  } else if (targetElement.closest('.actions__search')) {
    searchBoard.classList.add('active');
  }
}
if (document.querySelector('.issue-hero__swiper')) {
  var swiper = new Swiper('.issue-hero__swiper', {
    navigation: {
      nextEl: '.issue-hero__arrow--next',
      prevEl: '.issue-hero__arrow--prev',
    },
  });
}

if (document.querySelector('.advertise-swiper')) {
  var swiper = new Swiper('.advertise-swiper', {
    slidesPerView: 'auto',
    speed: 700,
    spaceBetween: 16,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      1440: { spaceBetween: 134 },
    },
  });
}
