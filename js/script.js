// Responsive nav
$(document).ready(function () {
  $(".toggle").click(function () {
    $("#nav").toggleClass("active");
  });
});

// Slider initilization
$(document).ready(function () {
  $(".home-slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});
