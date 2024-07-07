$(document).ready(function() {
    $('#hamburger-icon').click(function() {
      $('.nav-links').toggleClass('show');
      $('#hamburger-icon').toggleClass('fa-bars fa-times');

    });

  $(document).on('click', function(event) {
    var navLinks = $('.nav-links');
    var hamburgerIcon = $('#hamburger-icon');
    if (!navLinks.is(event.target) && !hamburgerIcon.is(event.target)) {
      navLinks.removeClass('show');
      hamburgerIcon.removeClass('fa-times').addClass('fa-bars');
    }
  });

});
  
  