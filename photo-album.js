$(document).ready(function() {

//
  $("#homePage").on("click", ".albumHolder", function(event){
    event.preventDefault();
    activeAlbum = $(this).attr("rel");

    $sitePages.removeClass(".active");
    $imageGallery.addClass(".active");
    //show them the site for that album//
  });


//    --OVERLAY--   //
// when the actual picture is clicked, the image is displayed//
  var $overlay = $('<div id="overlay"></div>');
  var $image = $("<img>");

  $overlay.append($image);

  // add overlay
  $("body").append($overlay);

// capture the click even on a link to an image

$("#imageGallery img").click(function(event)){
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


//  template  //
var template = "";
posts.forEach(function(el) {
  template += "<article class='post'><h3>"
  + el.title
  +"</h3><p>"
  + el.content
  + "</p>"
  + "<blockquote cite='http://calvin.io'>"
  + el.author
  + "</blockquote><a href='' class='delete'>delete</a>"
  + "</article>";


});




})
