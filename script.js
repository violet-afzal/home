$(document).ready(() => {
  $(".menu-toggle").click(() => {
    $(".menu-toggle").toggleClass("menu-open");
    $(".menu").toggleClass("active");
  });
  $(".link").click(() => {
    $(".menu-toggle").toggleClass("menu-open");
    $(".menu").toggleClass("active");
  });
  $(this).scrollTop(0);
});
