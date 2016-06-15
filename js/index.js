$(document).ready(function() {
  Galleria.loadTheme('http://cdnjs.cloudflare.com/ajax/libs/galleria/1.2.9/themes/classic/galleria.classic.min.js');
  

  $('#about').hide();
  $('#gallery').hide();
  
  $('#homeButton').click(function() {
    $(this).addClass('active');
    $('#home').show();
    $('#about').hide();
    $('#aboutButton').removeClass('active');
    $('#gallery').hide();
    $('#galleryButton').removeClass('active');
  });
  
  $('#aboutButton').click(function() {
    $(this).addClass('active');
    $('#about').show();
    $('#home').hide();
    $('#homeButton').removeClass('active');
    $('#gallery').hide();
    $('#galleryButton').removeClass('active');
  });
  
  $('#galleryButton').click(function() {
    Galleria.run('.galleria');
    $(this).addClass('active');
    $('#gallery').show();
    $('#about').hide();
    $('#aboutButton').removeClass('active');
    $('#home').hide();
    $('#homeButton').removeClass('active');
  });
});