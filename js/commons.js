var commons = {};
(function () {
  var that = this;

  this.init = function () {
    console.log("JS is ready");
    that.initSliderTeam();
  };

  /**
   * Escucha cuando se cmabiam las categorias
   */
  this.addListener = function () {};

  /**
   * Este meodo ini
   */
  this.initSliderTeam = function () {
    if ($(".team-caurousel")) {
      $(".team-caurousel").slick({
        dots: false,
        arrows: true,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
      });
    }
  };

  

  window.onload = function (e) {
    that.init();
  };
}.call(commons));
