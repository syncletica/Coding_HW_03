function fade() {
  $(".loader").fadeOut("slow");
}
setTimeout(fade, 3000);

$("#toggle").on("click", function () {
  $("#dropDown").slideToggle();
});
