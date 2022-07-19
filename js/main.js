$(document).ready(function(){
	$('.gallery-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		lazyLoad: 'ondemand',
		infinite: false,
		nextArrow: '<button type="button" class="gallery-slider__next"><svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.4469 12.3347L10.2308 6.53814L8.86601 8.00066L13.6237 12.4373L9.18684 17.1881L10.6493 18.5519L16.4469 12.3347Z" fill="#0E84DA"/></svg></button>',
		prevArrow: '<button type="button" class="gallery-slider__prev"><svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.4469 12.3347L10.2308 6.53814L8.86601 8.00066L13.6237 12.4373L9.18684 17.1881L10.6493 18.5519L16.4469 12.3347Z" fill="#0E84DA"/></svg></button>',
		
		keyboard: {
		  enabled: true,
		  onlyInViewport: false,
		},
		
		responsive: [
		  {
			breakpoint: 992,
			settings: {
			  slidesToShow: 3,
			  slidesToScroll: 3,
			}
		  },
		  {
			breakpoint: 768,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 2,
			}
		  },
		  {
			breakpoint: 576,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
			}
		  }
		]
	  });
});

$(document).ready(function(){
	$('.gallery-slider1').slick({
		lazyLoad: 'ondemand',
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 4,
		nextArrow: '<button type="button" class="gallery-slider__next"><svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.4469 12.3347L10.2308 6.53814L8.86601 8.00066L13.6237 12.4373L9.18684 17.1881L10.6493 18.5519L16.4469 12.3347Z" fill="#0E84DA"/></svg></button>',
		prevArrow: '<button type="button" class="gallery-slider__prev"><svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.4469 12.3347L10.2308 6.53814L8.86601 8.00066L13.6237 12.4373L9.18684 17.1881L10.6493 18.5519L16.4469 12.3347Z" fill="#0E84DA"/></svg></button>',
		
		keyboard: {
		  enabled: true,
		  onlyInViewport: false,
		},
		
		responsive: [
		  {
			breakpoint: 992,
			settings: {
			  slidesToShow: 3,
			  slidesToScroll: 3,
			  infinite: true,
			}
		  },
		  {
			breakpoint: 768,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 2,
			}
		  },
		  {
			breakpoint: 576,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
			}
		  }
		]
	  });
});

$(document).ready(function(){
	$('.career-slider').slick({
		lazyLoad: 'ondemand',
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: '<button type="button" class="gallery-slider__next"><svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.4469 12.3347L10.2308 6.53814L8.86601 8.00066L13.6237 12.4373L9.18684 17.1881L10.6493 18.5519L16.4469 12.3347Z" fill="#0E84DA"/></svg></button>',
		prevArrow: '<button type="button" class="gallery-slider__prev"><svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.4469 12.3347L10.2308 6.53814L8.86601 8.00066L13.6237 12.4373L9.18684 17.1881L10.6493 18.5519L16.4469 12.3347Z" fill="#0E84DA"/></svg></button>',
		
		keyboard: {
		  enabled: true,
		  onlyInViewport: false,
		},

		responsive: [
		  {
			breakpoint: 4000,
			settings: "unslick",
		  },
		  {
			breakpoint: 992,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
			}
		  },
		  {
			breakpoint: 768,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
			}
		  },
		  {
			breakpoint: 576,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
			}
		  }
		]
	  });
});

const popUp = document.getElementById("pop-up");
const openPopUp = document.getElementById("pop-up__open");
const closePopUp = document.getElementById("pop-up__close");
const body = document.getElementById("body");

openPopUp.addEventListener('click', function(e) {
	e.preventDefault();
	popUp.classList.add('pop-up__active');
    body.style.overflowY = 'hidden';
	body.style.paddingRight = "17px";
})

popUp.addEventListener('click', function(e) {
  const target = e.target;

	if(target.classList.contains('pop-up__container') || target.classList.contains('pop-up-body__close')) {
		popUp.classList.remove('pop-up__active');
		body.style.overflowY = 'scroll';
		body.style.paddingRight = "0";
	}	
})

{
const anchors = document.querySelectorAll('a.scroll-to');

for (let value of anchors) {
  value.addEventListener('click', function (e) {
    e.preventDefault();

    const blockID = value.getAttribute('href');
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
};
}


let tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;

let btn = document.querySelector('.to-play').addEventListener('click', function(e) {
	e.preventDefault();

	let btn = $(this),
		videoID = btn.data('video'),
		playerID = btn.data('id');

	player = new YT.Player(playerID, {
		height: '100%',
		width: '100%',
		playerVars: {
			'controls': 0,
			'showinfo': 0,
			'disablekb': 1,
			'rel': 0,
			'playsinline': 1,

		},
		videoId: videoID,
		events: {
			'onReady': onPlayerReady,
		}
	});
})

function onPlayerReady(event) {
	let video = event.target.h;
	$('.to-play').addClass('removed');
	event.target.playVideo();
}