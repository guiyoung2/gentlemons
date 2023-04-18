$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    margin: 10,
    loop: true,
    nav: true,
    navText: ["<", ">"],
    dots: true,
    responsive: {
      360: {
        items: 4,
      },
      600: {
        items: 5,
      },
      1000: {
        items: 6,
      },
    },
  });

  let nav_c = $(".nav_area a");
  let tnb_c = $(".tnb a");
  let svg_c = $("svg path");
  let svg_cc = $("svg rect");
  let sub_bg = $(".sub_bg");
  let sun_sub = $(".sun_sub");
  let glass_sub = $(".glass_sub");
  let col_sub = $(".col_sub");
  let sun = $(".sun");
  let glass = $(".glass");
  let col = $(".col");
  let span_c = $(".span_c");

  nav_c.addClass("active_w");
  tnb_c.addClass("active_w");
  svg_c.addClass("active_w");
  svg_cc.addClass("active_w");
  span_c.addClass("active_span_w");
  $(window).scroll(function () {
    let scrollT = $(window).scrollTop();
    let sec_top = Math.round($(".sec2").offset().top);

    if (scrollT >= sec_top) {
      nav_c.removeClass("active_w");
      tnb_c.removeClass("active_w");
      svg_c.removeClass("active_w");
      svg_cc.removeClass("active_w");
      span_c.removeClass("active_span_w");
    }
    if (scrollT < sec_top) {
      nav_c.addClass("active_w");
      tnb_c.addClass("active_w");
      svg_c.addClass("active_w");
      svg_cc.addClass("active_w");
      span_c.addClass("active_span_w");
    }
  });

  sun.mouseenter(function () {
    glass_sub.css({ display: "none" });
    col_sub.css({ display: "none" });
    sun_sub.css({ display: "block" });
    sub_bg.css({ display: "block" });
    nav_c.addClass("active_b");
    tnb_c.addClass("active_b");
    svg_c.addClass("active_b");
    svg_cc.addClass("active_b");
    span_c.addClass("active_span_b");
  });
  glass.mouseenter(function () {
    sun_sub.css({ display: "none" });
    col_sub.css({ display: "none" });
    glass_sub.css({ display: "block" });
    sub_bg.css({ display: "block" });
    nav_c.addClass("active_b");
    tnb_c.addClass("active_b");
    svg_c.addClass("active_b");
    svg_cc.addClass("active_b");
    span_c.addClass("active_span_b");
  });
  col.mouseenter(function () {
    sun_sub.css({ display: "none" });
    glass_sub.css({ display: "none" });
    col_sub.css({ display: "block" });
    sub_bg.css({ display: "block" });
    nav_c.addClass("active_b");
    tnb_c.addClass("active_b");
    svg_c.addClass("active_b");
    svg_cc.addClass("active_b");
    span_c.addClass("active_span_b");
  });
  sub_bg.mouseleave(function () {
    sun_sub.css({ display: "none" });
    glass_sub.css({ display: "none" });
    col_sub.css({ display: "none" });
    sub_bg.css({ display: "none" });
    nav_c.removeClass("active_b");
    tnb_c.removeClass("active_b");
    svg_c.removeClass("active_b");
    svg_cc.removeClass("active_b");
    span_c.removeClass("active_span_b");
  });
});
