$(document).ready(function() {

  $('.sideBar').hide();
  $('.imageGalleryContent').hide();



  $('.albumGallery').on('click', '.imgDiv', function(event) {
        event.preventDefault();

       $('.page-header').hide();
       $('.imageGalleryContent').removeClass('.active');
       $('.sideBar').show();

       var albumName = $(this).attr('title');
       var selectedAlbum = $(this).attr('name');

       $('.imageGalleryContent').removeClass('.active');
       $('.imageGalleryHeaderText').html(albumName);


  });

  $('.sideBar').on('click', '.albumButton', function(event) {
      event.preventDefault();

     var albumName = $(this).attr('title');

     $('.imageGalleryHeaderText').html(albumName);

     selectedAlbum = albumsPics[$(this).attr('name')];
     var imgString = "";
     selectedAlbum.forEach(function(el) {
       imgString += compiledTmpl(el);
     });
     $('.imageGallery').html(imgString);
  });

//    --OVERLAY--   //
    // When the image is clicked, display//
  var $overlay = $('<div id="overlay"></div>');
  var $image = $("<img>");
  $overlay.append($image);

    // add overlay//
  $("body").append($overlay);

    // capture the click even on a link to an image//

$("#imageGallery img").on("click"(event)){}
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  //update overlay with the image linked in the link
  $image.attr("src",imageLocation);
  //show the overlay
  $overlay.show();
}

$overlay.click(function() {
  // Hide the overlay
  $(this).hide();
});
//      end of overlay    //
