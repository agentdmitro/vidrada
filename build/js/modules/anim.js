var controller = new ScrollMagic.Controller();

function translateElem(elem, elemX, elemY, elemIndex) {
	$(elem).css({
		"-webkit-transform": "translate(" + elemX * (elemIndex + 1) + "px, " + elemY * (elemIndex + 1) + "px)",
		"-ms-transform": "translate(" + elemX * (elemIndex + 1) + "px, " + elemY * (elemIndex + 1) + "px)",
		transform: "translate(" + elemX * (elemIndex + 1) + "px, " + elemY * (elemIndex + 1) + "px)",
	});
}

// Proposal
if ($(".proposal").length) {
	$(".proposal").each((index, section) => {
		translateElem($(section).find(".proposal__bttn"), 0, 70, 0);
		translateElem($(section).find(".proposal__wrap"), 0, 30, 0);
		translateElem($(section).find(".section__head"), 0, 20, 0);

		var proposalScene = new ScrollMagic.Scene({
			triggerElement: section,
			triggerHook: 1,
			duration: window.innerHeight / 2,
		})
			.on("progress", function (event) {
				gsap.to($(section).find(".proposal__bttn"), {
					y: 70 - 70 * event.progress,
				});
				gsap.to($(section).find(".proposal__wrap"), {
					y: 30 - 30 * event.progress,
				});
				gsap.to($(section).find(".section__head"), {
					y: 20 - 20 * event.progress,
					duration: 1,
				});
			})
			.addTo(controller);
	});
}

// // Products
// if ($(".product__card").length) {
// 	const productItems = document.querySelectorAll(".product__card");
// 	if (productItems) {
// 		productItems.forEach((productItem, index) => {
// 			const effectiveIndex = index % 4;

// 			translateElem($(productItem), 0, (effectiveIndex + 1) * 15, 0);

// 			var productScene = new ScrollMagic.Scene({
// 				triggerElement: productItem,
// 				triggerHook: 0.8,
// 				duration: window.innerHeight / 2,
// 			})
// 				.on("progress", function (event) {
// 					gsap.to($(productItem), {
// 						y: (effectiveIndex + 1) * 15 - (effectiveIndex + 1) * 15 * event.progress,
// 						duration: 0.5,
// 					});
// 				})
// 				.addTo(controller);
// 		});
// 	}
// }

// categories
if ($(".categories").length) {
	$(".categories__item").each((index, section) => {
		var categoriesTranslate = [];
		$(section)
			.find(".categories__item-info > *")
			.each(function (index, item) {
				translateElem(item, 0, 40, index);
				categoriesTranslate[index] = 40 * (index + 1);
			});

		var categoriesScene = new ScrollMagic.Scene({
			triggerElement: section,
			triggerHook: 1,
			duration: window.innerHeight / 2,
		})
			.on("progress", function (event) {
				$(section)
					.find(".categories__item-info > *")
					.each(function (index, item) {
						gsap.to($(item), {
							y: categoriesTranslate[index] - categoriesTranslate[index] * event.progress,
							duration: 0.3,
						});
					});
			})
			.addTo(controller);
	});
}

// about
if ($(".about").length) {
	translateElem($(".about h2"), 0, 30, 0);

	var aboutTranslate = [];

	$(".about__content-wrap > *").each((index, item) => {
		translateElem(item, 0, 40, index);
		aboutTranslate[index] = 40 * (index + 1);
	});

	var aboutScene = new ScrollMagic.Scene({
		triggerElement: ".about",
		triggerHook: 1,
		duration: window.innerHeight / 2,
	})
		.on("progress", function (event) {
			gsap.to($(".about h2"), { y: 30 - 30 * event.progress });

			$(".about__content-wrap > *").each((index, item) => {
				gsap.to($(item), {
					y: aboutTranslate[index] - aboutTranslate[index] * event.progress,
					duration: 0.5,
				});
			});
		})
		.addTo(controller);
}

// info
if ($(".info").length) {
	translateElem($(".info h2"), 0, 30, 0);

	var infoTranslate = [];

	$(".info__content > *").each((index, item) => {
		translateElem(item, 0, 40, index);
		infoTranslate[index] = 40 * (index + 1);
	});

	var infoScene = new ScrollMagic.Scene({
		triggerElement: ".info",
		triggerHook: 1,
		duration: window.innerHeight / 2,
	})
		.on("progress", function (event) {
			gsap.to($(".info h2"), { y: 30 - 30 * event.progress });

			$(".info__content > *").each((index, item) => {
				gsap.to($(item), {
					y: infoTranslate[index] - infoTranslate[index] * event.progress,
					duration: 0.5,
				});
			});
		})
		.addTo(controller);
}

// reviews
if ($(".reviews").length) {
	translateElem($(".reviews h2"), 0, 30, 0);
	translateElem($(".reviews__wrap"), 0, 50, 0);

	var proposalScene = new ScrollMagic.Scene({
		triggerElement: ".reviews",
		triggerHook: 1,
		duration: window.innerHeight / 2,
	})
		.on("progress", function (event) {
			gsap.to($(".reviews h2"), {
				y: 30 - 30 * event.progress,
			});
			gsap.to($(".reviews__wrap"), {
				y: 50 - 50 * event.progress,
			});
		})
		.addTo(controller);
}
