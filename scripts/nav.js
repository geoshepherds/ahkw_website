$(document).ready(function() {
  $(".hamburger").on("click", function() {
    $(this).toggleClass("is-active");
    $("body").toggleClass("nav-open");
    $(".hamburger-label.menu").toggleClass("is-active");
    $(".hamburger-label.close").toggleClass("is-active");

    $("nav").toggleClass("is-active");
    $("header").toggleClass("fixed");
  });

  $(".navKeyIndicator").on("click", function() {
    $(".hamburger").toggleClass("is-active");
    $(".hamburger-label.menu").toggleClass("is-active");
    $(".hamburger-label.close").toggleClass("is-active");
    $("nav").toggleClass("is-active");
    $("header").toggleClass("fixed");
  });

  $(".ui-BackToTop").on("click", function() {
    $("html, body").animate({ scrollTop: 0 }, 400);
  });

  //Language click event
  $(".langSetting a").on("click", function() {
    //record current page uri
    var url = $(this).context.baseURI;
    if ($("html").attr("lang") == "en") {
      if (
        url === "http://www.activehealthykidswales.com/" ||
        url === "activehealthykidswales.com"
      ) {
        var newUrl = url.replace(
          "activehealthykidswales.com/",
          "activehealthykidswales.com/cy/home"
        );
        $("a.cy").attr("href", newUrl);
      } else if (url.indexOf("home") > -1) {
        var newUrl = url.replace("/home", "/cy/home");
        $("a.cy").attr("href", newUrl);
      } else if (url.indexOf("about") > -1) {
        var newUrl = url.replace("/about", "/cy/about");
        $("a.cy").attr("href", newUrl);
      } else if (url.indexOf("report") > -1) {
        var newUrl = url.replace("/report", "/cy/report");
        $("a.cy").attr("href", newUrl);
      } else {
        var newUrl = url.replace("indicators", "cy");
        $("a.cy").attr("href", newUrl);
      }
    } else if ($("html").attr("lang") == "cy") {
      if (
        url.indexOf("about") > -1 ||
        url.indexOf("home") > -1 ||
        url.indexOf("report") > -1
      ) {
        var newUrl = url.replace("/cy", "");
        $("a.en").attr("href", newUrl);
      } else {
        var newUrl = url.replace("cy", "indicators");
        $("a.en").attr("href", newUrl);
      }
    }
  });

  //rotate device
  var html = '<div class="rotateDevice">';
  html += "<h5>Please rotate your device</h5>";
  html += '<img src="/media/icons/rotate.svg" alt="Rotate Device">';
  html += "</div>";

  //show rotate device if on mobile and landscape orientation
  if ($(window).height() < $(window).width() && $(window).width() < 768) {
    $("body").append(html);
  }

  //resize function
  $(window).resize(function() {
    if ($(window).height() < $(window).width() && $(window).width() < 768) {
      $("body").append(html);
    } else {
      $(".rotateDevice").hide();
    }
  });
});
