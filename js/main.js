$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

$(".owl-carousel").owlCarousel({
  
  items: 3,
  loop: true,
  margin: 25,
  autoplay:true,
  autoplayTimeout:2000,
  autoplayHoverPause:false,
  dots:true,
  responsive: {
    0: {
      items:1
    },
    600: {
      items:2
    },
    1000: {
      items:3
    }
  }
});

$(document).ready(function(){
  $('.navbar-nav').on('click', 'a', function(){
    $('.navbar-nav a.active').removeClass('active');
    $(this).addClass('active');
  })
})

$(function() {

	$('#exampleModalCenter').modal();

	
})

	


