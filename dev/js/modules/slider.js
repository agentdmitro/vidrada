const bannerSlider = new Swiper(".banner__slider", {
	slidesPerView: "auto",
	loop: true,
	spaceBetween: 0,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".banner__pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".banner__slider .swiper-button-next",
		prevEl: ".banner__slider .swiper-button-prev",
	},
});

const sectionSlider = document.querySelectorAll(".proposal");
sectionSlider.forEach((section) => {
	const sectionSlider = section.querySelector(".products__slider");
	const nextSlideEl = section.querySelector(".swiper-button-next");
	const prevSlideEl = section.querySelector(".swiper-button-prev");

	const swiperSection = new Swiper(sectionSlider, {
		slidesPerView: "auto",
		spaceBetween: 15,
		loop: true,
		navigation: {
			nextEl: nextSlideEl,
			prevEl: prevSlideEl,
		},
		breakpoints: {
			768: {
				spaceBetween: 38,
			},
		},
	});
});

const swiperSection = new Swiper(".reviews .swiper", {
	slidesPerView: "auto",
	spaceBetween: 15,
	loop: true,
	navigation: {
		nextEl: ".reviews .swiper-button-next",
		prevEl: ".reviews .swiper-button-prev",
	},
	breakpoints: {
		768: {
			spaceBetween: 38,
		},
	},
});

// $('.swiper-button-prev').remove();
// $('.swiper-button-next').remove();

// const swiper = new Swiper('.swiper', {
// 	slidesPerView: 1,
// 	watchOverflow: true,
// 	pagination: {
// 		el: '.swiper-pagination',
// 	},
// 	navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev',
// 	},
// 	spaceBetween: 20,
// 	autoHeight: true
// });
