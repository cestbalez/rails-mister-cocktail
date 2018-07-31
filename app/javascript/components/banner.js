import Typed from 'typed.js';

function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["Get your dranks here...", "...or create your own"],
    typeSpeed: 65,
    loop: true
  });
}

export { loadDynamicBannerText };
