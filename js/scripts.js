$(document).ready(function() {
  $("button#blue").click(function() {
    $("body").removeClass();
    $("body").addClass("blue-background");
  });

  $("button#navy_blue").click(function() {
    $("body").removeClass();
    $("body").addClass("navy_blue_background");
  });

  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green_background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red_background");
  });

  $("button#orange").click(function() {
    $("body").removeClass();
    $("body").addClass("orange_background");
  });

  $("button#grey").click(function() {
    $("body").removeClass();
    $("body").addClass("grey_background");
  });

  $("button#custom").click(function() {
    $("body").removeClass();
  });
});
