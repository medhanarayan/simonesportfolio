$(document).ready(function () {
    //initialise variables
    var $listItems = $('.list');
    var $itemBoxes = $('.itemBox');
  
    // Initialize Fancybox with additional options
    $('[data-fancybox="gallery"]').fancybox({
      loop: true,
      buttons: [
        "zoom",
        "slideShow",
        "fullScreen",
        "close",
        "thumbs",
        "prev",
        "next"
      ],
    });
  //
    $listItems.on('click', function () {
    //This line retrieves the value of the 'data-filter' attribute from the clicked list item
      var filter = $(this).data('filter');
  
      $itemBoxes.each(function () {
        var $itemBox = $(this);//current item in the itemBox
        var $link = $itemBox.find('a');
  
        if (filter === 'all' || $itemBox.hasClass(filter)) {
            $link.attr('data-fancybox', 'gallery-' + filter);//This line sets the 'data-fancybox' attribute of the anchor element to 'gallery-' plus the value of the filter.
            $itemBox.show();
        } else {
          $link.removeAttr('data-fancybox');
          $itemBox.hide();
        }
      });
  
      $listItems.removeClass('active');
      $(this).addClass('active');

    });
  });
  