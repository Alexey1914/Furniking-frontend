document.querySelector('.header-languages-title').addEventListener('click', function(){
	document.querySelector('.header-languages-list').classList.toggle('languages-list-active');
});
document.querySelectorAll('.header-languages-option').forEach(function(optionItem){
	optionItem.addEventListener('click', function(){
		document.querySelector('.header-languages-list').classList.remove('languages-list-active');
        document.querySelector('.header-languages-title').innerText = this.innerText;
	});
});

document.querySelector('.header-form-categories').addEventListener('click', function(){
	document.querySelector('.header-categories-list').classList.toggle('languages-list-active');
});
document.querySelectorAll('.header-categories-option').forEach(function(optionItem){
	optionItem.addEventListener('click', function(){
		document.querySelector('.header-categories-list').classList.remove('languages-list-active');
        document.querySelector('.header-form-categories').innerText = this.innerText;
	});
});
document.querySelector('.header-form-submit').addEventListener('click', function(){
	document.querySelector('.header-form-container').classList.toggle('languages-list-active');
});
document.querySelector('.header-burger').addEventListener('click', function(){
	document.querySelector('.header-menu-main').classList.toggle('header-menu-active');
});
document.querySelector('.header-collections-button').addEventListener('click', function(){
	document.querySelector('.collections-menu').classList.toggle('header-menu-active');
});
$(document).on('click', function(e) {
    if (!$(e.target).closest(".header").length) {
        $('.header-categories-list').removeClass('languages-list-active');
        $('.header-languages-list').removeClass('languages-list-active');
        $('.header-menu-main').removeClass('header-menu-active');
    }
});
new Swiper('.specialoffer-slider',{
	// autoplay: {
 //       delay: 2000,
 //    },
    loop: true,
    simulateTouch: true,
    pagination: {
		el: '.specialoffer-slider-pagination',
		clickable: true,
	},
});
new Swiper('.customers-block-slider',{
	// autoplay: {
 //       delay: 2000,
 //    },
    loop: true,
    simulateTouch: true,
	navigation: {
	    nextEl: '.customers-navigation-next',
	    prevEl: '.customers-navigation-prev',
	},
	slidesPerView: '1',
	spaceBetween: 56,
});