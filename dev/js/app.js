// JS fragment import example
// import * as functions from "./modules/functions.js";
// functions.isWebp();
// functions.spollers();

// БАЗОВІ СКРИПТИ
import "./modules/base.js";

addEventListener("DOMContentLoaded", function () {
	var menuBreakpoint = window.matchMedia("(max-width: 1140.2px)");

	if (menuBreakpoint.matches && $(".menu-item-has-children ")) {
		$(".menu-item-has-children ").click(function (e) {
			$(this).toggleClass("active");
			$(this).children(".sub-menu").toggle();
		});
	}
});

//  СЛАЙДЕР
import "./libs/swiper-bundle.min.js";
import "./modules/slider.js";

// ПОПАП
import "./modules/popup.js";

// ВІДЕО
import "./modules/video.js";

// ANIMATIONS
import "./modules/anim.js";

// ТАБИ
// import "./modules/tabs.js";

// Динамический адаптив
// Документация: https://github.com/FreelancerLifeStyle/dynamic_adapt#readme
import "./libs/dynamicAdapt.js";

// 2 ВАРІАНТ ТАБУ НА ЧИСТОМУ JS
// import "./modules/tabs2.js";

//  IMAGES LAZY LOAD
// import Bound from './libs/bounds.js'

// const boundary = Bound({
// 	margins: {bottom: 100}
// })

// const image = document.querySelectorAll('img[data-src]')

// const whenImageEnters = (image) => {
// 	return () => {
// 		image.src = image.dataset.src
// 	}
// }

// image.forEach(img => {
// 	boundary.watch(img, whenImageEnters(img))
// })
