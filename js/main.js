$(window).on("load", function () {
  "use strict";

  //setTimeout(function(){
  // $('#preloader').delay(350).addClass('loaded');
  //},preloaderTimeout);
  // new WOW().init();

  $("body").addClass("page-loaded");
});

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $("header").outerHeight();

$(window).scroll(function (event) {
  didScroll = true;

  var scroll = $(window).scrollTop();
  if (scroll >= 200) {
    $("body").addClass("scrolled");
    // $('.logo img').attr('src', 'assets/img/logo.png');
  } else {
    $("body").removeClass("scrolled");
    // $('.logo img').attr('src', 'assets/img/logo-bg.png');
  }

  if (scroll >= 800) {
    $(".go-top").addClass("active");
  } else {
    $(".go-top").removeClass("active");
  }
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();

  // Make sure they scroll more than delta
  if (Math.abs(lastScrollTop - st) <= delta) return;

  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down
    $("header").removeClass("nav-down").addClass("nav-up");
  } else {
    // Scroll Up
    if (st + $(window).height() < $(document).height()) {
      $("header").removeClass("nav-up").addClass("nav-down");
    }
  }

  lastScrollTop = st;
}

//AOS
AOS.init({
  duration: 800,
});

/////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  // Check if the comingSoon element exists
  const comingSoonElement = document.querySelector(".comingSoon");

  if (comingSoonElement) {
    document.getElementById("openCs").addEventListener("click", function () {
      comingSoonElement.classList.remove("hideCs");
    });

    document.getElementById("closeCs").addEventListener("click", function () {
      comingSoonElement.classList.add("hideCs");
    });
  }
});

///////////////////////////////////
$(function () {
  // Counter - Coming Soon Page
  if ($(".cstTime").length > 0) {
    simplyCountdown(".cstTime", {
      year: 2024, // required
      month: 7, // required
      day: 26, // required
      hours: 0, // Default is 0 [0-23] integer
      minutes: 0, // Default is 0 [0-59] integer
      seconds: 0, // Default is 0 [0-59] integer
      words: {
        //words displayed into the countdown
        days: { singular: "day", plural: "days" },
        hours: { singular: "hour", plural: "hours" },
        minutes: { singular: "min", plural: "mins" },
        seconds: { singular: "sec", plural: "sec" },
      },
      plural: true, //use plurals
      inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
      inlineClass: "simply-countdown-inline", //inline css span class in case of inline = true
      // in case of inline set to false
      enableUtc: false, //Use UTC or not - default : false
      onEnd: function () {
        return;
      }, //Callback on countdown end, put your own function here
      refresh: 1000, // default refresh every 1s
      sectionClass: "simply-section", //section css class
      amountClass: "simply-amount", // amount css class
      wordClass: "simply-word", // word css class
      zeroPad: true,
      countUp: true,
    });
  }

  // Counter - Home Page
  // Counter
  if ($(".csTimer").length > 0) {
    simplyCountdown(".csTimer", {
      year: 2024, // required
      month: 7, // required
      day: 26, // required
      hours: 0, // Default is 0 [0-23] integer
      minutes: 0, // Default is 0 [0-59] integer
      seconds: 0, // Default is 0 [0-59] integer
      words: {
        //words displayed into the countdown
        days: { singular: "day", plural: "days" },
        hours: { singular: "hour", plural: "hours" },
        minutes: { singular: "min", plural: "mins" },
        seconds: { singular: "sec", plural: "sec" },
      },
      plural: true, //use plurals
      inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
      inlineClass: "simply-countdown-inline", //inline css span class in case of inline = true
      // in case of inline set to false
      enableUtc: false, //Use UTC or not - default : false
      onEnd: function () {
        return;
      }, //Callback on countdown end, put your own function here
      refresh: 1000, // default refresh every 1s
      sectionClass: "csBox", //section css class
      amountClass: "csNumber", // amount css class
      wordClass: "csWord", // word css class
      zeroPad: true,
      countUp: true,
    });
  }

  // Header / Footer

  // Header
  $("#header").load("header.html", function () {
    // ScrollAnchor
    // $('[data-scroll]').on('click',function (e) {
    //     e.preventDefault();
    //     var target = this.hash;
    //     var $target = $(target);

    //     $('html, body').stop().animate({
    //         'scrollTop': $target.offset().top
    //     }, 900, 'swing', function () {
    //         window.location.hash = target;
    //     });
    // });

    // Active
    var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
    $(".navbar-nav .nav-link, .navbar-nav .dropdown-item").each(function () {
      if (this.href === path) {
        $(this).addClass("active");
      }
    });

    $(".searchToggle").on("click", function () {
      $(".searchWrap").addClass("show");
    });
    $(".closeSearch").on("click", function () {
      $(".searchWrap").removeClass("show");
    });
  });

  // Footer
  $("#footer").load("footer.html", function () {});

  // Main Slider
  if ($(".mainSlider").length > 0) {
    $(".mainSlider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      // autoplay: true,
      autoplayDuration: 2000,
      arrows: true,
      pauseOnHover: false,
      prevArrow: "<button type='button' class='slick-prev pull-left'><img src='img/icons/long-arrow.svg'></button>",
      nextArrow: "<button type='button' class='slick-next pull-right'><img src='img/icons/long-arrow.svg'></button>",
    });
  }

  // Events Slider
  if ($(".eventSlider").length > 0) {
    $(".eventSlider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      autoplay: false,
      arrows: false,
      // prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fas fa-chevron-left'></i></button>",
      // nextArrow:"<button type='button' class='slick-next pull-right'><i class='fas fa-chevron-right'></i></button>",

      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });

    $(".ePrev").click(function () {
      $(".eventSlider").slick("slickPrev");
    });

    $(".eNext").click(function () {
      $(".eventSlider").slick("slickNext");
    });
  }

  // Experiences Slider
  if ($(".expSlider").length > 0) {
    $(".expSlider").slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      dots: false,
      autoplay: false,
      arrows: true,
      prevArrow: "<button type='button' class='slick-prev pull-left'><img src='img/icons/long-arrow.svg'></button>",
      nextArrow: "<button type='button' class='slick-next pull-right'><img src='img/icons/long-arrow.svg'></button>",
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    });
  }

  // Fancybox
  if ($("[data-fancybox]").length > 0) {
    Fancybox.bind();
  }

  // Aos refresh
  AOS.refresh();

  // Sponsors
  // Load sponsor data from the JSON file
  $.getJSON("data/sponsors.json", function (sponsors) {
    const $container = $("#sponsorData");

    $.each(sponsors, function (index, sponsor) {
      const sponsorHtml = `
        <div class="sponsorBoxx igBox">
          <img src="${sponsor.imgSrc}" alt="${sponsor.altText}">
        </div>
      `;
      $container.append(sponsorHtml);
    });
  }).fail(function () {
    console.error("An error occurred while loading the sponsor data.");
  });

  // Load sponsor data from the JSON file
  $.getJSON("data/sponsors2.json", function (sponsors) {
    const $container = $("#sponsorData2");

    $.each(sponsors, function (index, sponsor) {
      const sponsorHtml = `
        <div class="sponsorBoxx igBox">
          <img src="${sponsor.imgSrc}" alt="${sponsor.altText}">
        </div>
      `;
      $container.append(sponsorHtml);
    });
  }).fail(function () {
    console.error("An error occurred while loading the sponsor data.");
  });

  // Partners
  // Load partner data from the JSON file
  $.getJSON("data/partners.json", function (partners) {
    const $container = $("#partnerData");

    $.each(partners, function (index, partner) {
      const partnerHtml = `
        <div class="partnerBox igBox">
          <img src="${partner.imgSrc}" alt="${partner.altText}">
        </div>
      `;
      $container.append(partnerHtml);
    });
  }).fail(function () {
    console.error("An error occurred while loading the partner data.");
  });
});

$(function () {
  // Isotope
  // Check if the grid element exists
  if ($(".grid").length > 0) {
    var $grid = $(".grid").isotope({
      itemSelector: ".grid-item",
      percentPosition: true,
      masonry: {
        columnWidth: ".grid-sizer",
        // gutter: 15,
      },
    });

    // Layout Isotope after each image loads
    $grid.imagesLoaded().progress(function () {
      $grid.isotope("layout");
    });

    // Reinitialize Isotope when tab changes
    const tabs = document.querySelectorAll('#mediaCentreTab [data-bs-toggle="tab"]');
    tabs.forEach((tab) => {
      tab.addEventListener("shown.bs.tab", (event) => {
        console.log("Tab changed!");
        $grid.imagesLoaded().progress(function () {
          $grid.isotope("layout");
        });
      });
    });
  }
});
