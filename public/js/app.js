$(window).resize(function() {
  $('#myaffix').affix('checkPosition');
  $('#myaffix').css({
    'width': $('#myaffix').parent().width()
  });
});

$('#myaffix').on('affixed.bs.affix', function() {
  $(this).css({
    'width': $(this).parent().width()
  });
});

$('#hover-collapse').hover(function(){
  $('#collapse').collapse('show');
});

$('[data-toggle="tooltip"]').tooltip();
$('[data-toggle="popover"]').popover();
