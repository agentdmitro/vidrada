// ANCHOR VARIABLES
// ==============================================
let isDesk = $("body").hasClass("desktop"),
	isIE = $("body").hasClass("isIe"),
	menuOpen = false;

let st = $(window).scrollTop(),
	prevSt = st;

window.st = st;

if ($(document).scrollTop() > 200) {
	$(".header").addClass("header--scrolled");
}

$(document).scroll(() => {
	st = $(window).scrollTop();
	window.st = st;

	if (!window.autoscrolling) {
		// check if scroll not happening during anchor scrolling
		if (st < prevSt && prevSt - st < 500) {
			// scroll UP
			$(".header").removeClass("header--hide");
		} else {
			// scroll DOWN
			if (st > $(".header").height()) {
				$(".header").addClass("header--hide");
			}
		}
	} else {
		$(".header").addClass("header--hide");
	}

	if (window.scrollY > 200) {
		$(".header").addClass("header--scrolled");
		$(".bubbles").addClass("active");
	} else {
		$(".header").removeClass("header--scrolled");
		$(".bubbles").removeClass("active");
	}

	prevSt = st;
});

$(document).ready(function () {
	$(".header__burger").on("click", function () {
		if (!$("body").hasClass("menu-open")) {
			$("body").addClass("menu-open");
		} else {
			$("body").removeClass("menu-open");
		}
	});

	$(".header__menu-list a").on("click", function () {
		$(".header__burger").removeClass("active");
		$("body").removeClass("menu-open");
	});
});
