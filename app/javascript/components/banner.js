import Typed from 'typed.js';

function loadDynamicBannerText() {
  const bannerText = document.getElementById('banner-typed-text');

  if (bannerText) {
    new Typed('#banner-typed-text', {
      strings: ["Get your dranks here...", "...or create your own"],
      typeSpeed: 65,
      loop: true
    });
  }
}

export { loadDynamicBannerText };
