$(function () {
  //tilteEffect
  //   $(".card").tilt({
  //     glare: true,
  //     maxGlare: 0.2,
  //   });

  $(".burger-menu").click(function (e) {
   
    $(".menu-mobile").slideDown();
    e.preventDefault();
  });
  $(".close-menu").click(function (e) {
    $(".menu-mobile").slideUp();
    e.preventDefault();
  
  });
  //onePageNav

  //sliderActus
  $(".slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    dots: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $("nav#menu").onePageNav();
  $(".menu-mobile ul").onePageNav({
    end: function () {
      $(".menu-mobile").slideUp();
    },
  });

  // scroll a propos
  $(".go").click(function (e) {
    var elem = $("#skills");
    $("html, body").animate({ scrollTop: elem.offset().top }, 750);
    e.preventDefault();
  });
  $(".btn").click(function (e) {
    var elem = $("#nos-burger");
    $("html, body").animate({ scrollTop: elem.offset().top }, 750);
    e.preventDefault();
  });

  // Header change

  $(window).scroll(function () {
    var Hscroll = $(this).scrollTop();

    if (Hscroll >= 250) {
      $("header").addClass("fix-white");
    } else {
      $("header").removeClass("fix-white");
    }

    var OpScroll = Hscroll / 500;
    $("h1").css({ opacity: 1 - OpScroll });
  });

  $('[data-fancybox="gallery"]').fancybox({
    buttons: [
      //"zoom",
      "share",
      //"slideShow",
      "fullScreen",
      "download",
      "thumbs",
      "close",
    ],
  });
});
