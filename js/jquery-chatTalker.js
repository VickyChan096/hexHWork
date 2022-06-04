$(document).ready(function () {
  $('h2').hide();
});

$('.click').click(function () {
  $('p').hide();
});

$('button').click(function () {
  $('.words').toggle();
});
