// document.addEventListener("DOMContentLoaded", yall);
//AOS
// AOS.init({
//     duration: 600
// });

// Get the header
var header = document.getElementById("header");
var body = document.body;

if (header) {
  // Get the offset position of the navbar
  var sticky = header.offsetTop;

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function updateStickyHeader() {
    if (window.pageYOffset > sticky) {
      body.classList.add("sticky");
    } else {
      body.classList.remove("sticky");
    }
    updateLogoImage();
  }

  // Use an event listener instead of onscroll property
  window.addEventListener("scroll", function () {
    // Use requestAnimationFrame for performance
    window.requestAnimationFrame(updateStickyHeader);
  });
}

// Update the logo image based on the sticky and home page classes
function updateLogoImage() {
  const isHomePage = $("body").hasClass("home");
  const isSticky = $("body").hasClass("sticky");
  const isRegister = $("body").hasClass("regPage");
  const logoImgSrc = isHomePage && !isSticky ? "img/logo-white.png" : "img/logo.png";
  // $(".logo").find("img").attr("src", logoImgSrc);
}

//
//new WOW().init();

/////////////////////////////////////

///////////////////////////////////
$(function () {
  // Push Menu
  const overlay = $(".sidebar-overlay");
  const navMain = $("#navMain");

  // Header
  const headerUrl = "header.html";
  $("#header").load(headerUrl, function () {
    updateLogoImage();

    // Active
    const currentUrl = window.location.href;
    $(".navbar-nav .nav-link, .navbar-nav .dropdown-item").each(function () {
      if (this.href === currentUrl) {
        $(this).addClass("active");
      }
    });
  });

  // Footer
  const footerUrl = "footer.html";
  $("#footer").load(footerUrl, function () {
    // Footer content loaded successfully
    // $('#fraudModal').modal('show');
  });

  // Datepicker
  if ($("#dob").length > 0) {
    $("#dob").datepicker({
      format: "dd/mm/yyyy",
    });
  }

  // Main Slider
  if ($(".mainSlider").length > 0) {
    $(".mainSlider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      autoplay: true,
      autoplayDuration: 3000,
      arrows: false,
      lazyLoad: "ondemand",
      fade: true,
    });
  }

  // Slider
  if ($(".defaultTestiSlider").length > 0) {
    $(".defaultTestiSlider").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: true,
      autoplay: true,
      autoplayDuration: 2000,
      arrows: false,
      lazyLoad: "ondemand",

      responsive: [
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  // Counter
  simplyCountdown(".cstTime", {
    year: 2024, // required
    month: 10, // required
    day: 28, // required
    hours: 0, // Default is 0 [0-23] integer
    minutes: 0, // Default is 0 [0-59] integer
    seconds: 0, // Default is 0 [0-59] integer
    words: {
      //words displayed into the countdown
      days: { singular: "day", plural: "days" },
      hours: { singular: "hour", plural: "hours" },
      minutes: { singular: "minute", plural: "minutes" },
      seconds: { singular: "second", plural: "seconds" },
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
    zeroPad: false,
    countUp: false,
  });

  // Also, you can init with already existing Javascript Object.
  //   let myElement = document.querySelector(".my-countdown");
  //   simplyCountdown(myElement, {
  //     /* options */
  //   });

  //   let multipleElements = document.querySelectorAll(".my-countdown");
  //   simplyCountdown(multipleElements, {
  //     /* options */
  //   });
});
