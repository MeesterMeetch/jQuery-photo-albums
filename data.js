// -- Variables Declared -- //
// var $sitePages = $('body > div');
// var $homePage = $("homePage");
// var $albumPageMain = $("albumPageMain");
// var $imageGallery = $("imageGallery");
// var activeAlbum;
// var activePhoto;


var picAlbums = [
{
  name: "music",
  title: "Music",
  image: "http://wfiles.brothersoft.com/l/led-zeppelin-album_150861-1440x900.jpg",
},
{
  name: "beach",
  title: "Beach",
  image: "http://www.fillmurray.com/g/300/300",
},
{
  name: "boats",
  title: "Boats",
  image: "http://www.fillmurray.com/g/300/300",
},
{
  name: "nature",
  title: "Nature",
  image: "http://www.fillmurray.com/g/300/300",
},
{
  name: "city",
  title: "City",
  image: "http://www.fillmurray.com/g/300/300",
},
{
  name: "animals",
  title: "Animals",
  image: "http://www.fillmurray.com/g/300/300",
}
];

var musicArray = [
{
  title: "pic1",
  image: "http://i.telegraph.co.uk/multimedia/archive/02328/RS_GRRR_CMYK_PACKS_2328658b.jpg",
},
{
  title: "pic2",
  image: "http://www.portugaltheman.com/sites/g/files/g2000000591/f/201305/Portugal.%20The%20Man%20-%20In%20the%20Mountain%20in%20the%20Cloud%20(2011).jpg",
},
{
  title: "pic3",
  image: "http://eil.com/images/main/Muddy-Waters-I-Cant-Be-Satisfi-546844.jpg",
},
{
  title: "pic4",
  image: "http://cache.boston.com/resize/bonzai-fba/Globe_Photo/2010/02/11/1265940929_0595/539w.jpg",
},
{
  title: "pic5",
  image: "https://pbs.twimg.com/profile_images/712863751/lil-wayne-gq-2.jpg",
},
{
  title: "pic6",
  image: "http://www.israbox.com/uploads/posts/2012-01/1326643459_e4f3f3fcd45357c0c3df15968e02716a.jpg",
}
];
var beachArray = [
{
  title: "pic1",
  image: "http://www.fillmurray.com/g/300/300",
},
{
  title: "pic2",
  image: "http://www.fillmurray.com/g/300/300",
},
{
  title: "pic3",
  image: "http://www.fillmurray.com/g/300/300",
},
{
  title: "pic4",
  image: "http://www.fillmurray.com/g/300/300",
},
{
  title: "pic5",
  image: "http://www.fillmurray.com/g/300/300",
},
{
  title: "pic6",
  image: "http://www.fillmurray.com/g/300/300",
}
];
var boatsArray = [
{
  title: "pic1",
  image: "http://www.fillmurray.com/g/300/300",
},
{
  title: "pic2",
  image: "http://www.fillmurray.com/g/300/300",
},
{
  title: "pic3",
  image: "http://www.fillmurray.com/g/300/300",
},
{
  title: "pic4",
  image: "http://www.fillmurray.com/g/300/300",
},
{
  title: "pic5",
  image: "http://www.fillmurray.com/g/300/300",
},
{
  title: "pic6",
  image: "http://www.fillmurray.com/g/300/300",
}
];
var natureArray = [
{
  title: "pic1",
  image: "http://www.fillmurray.com/g/300/300",
},
{
  title: "pic2",
  image: "http://www.fillmurray.com/g/300/300",
},
{
  title: "pic3",
  image: "http://www.fillmurray.com/g/300/300",
},
{
  title: "pic4",
  image: "http://www.fillmurray.com/g/300/300",
},
{
  title: "pic5",
  image: "http://www.fillmurray.com/g/300/300",
},
{
  title: "pic6",
  image: "http://www.fillmurray.com/g/300/300",
}
];
var cityArray = [
{
  title: "pic1",
  image: "http://www.fillmurray.com/g/300/300",
},
{
  title: "pic2",
  image: "http://www.fillmurray.com/g/300/300",
},
{
  title: "pic3",
  image: "http://www.fillmurray.com/g/300/300",
},
{
  title: "pic4",
  image: "http://www.fillmurray.com/g/300/300",
},
{
  title: "pic5",
  image: "http://www.fillmurray.com/g/300/300",
},
{
  title: "pic6",
  image: "http://www.fillmurray.com/g/300/300",
}
];

var animalsArray = [
{
  title: "pic1",
  image: "http://www.fillmurray.com/g/300/300",
},
{
  title: "pic2",
  image: "http://www.fillmurray.com/g/300/300",
},
{
  title: "pic3",
  image: "http://www.fillmurray.com/g/300/300",
},
{
  title: "pic4",
  image: "http://www.fillmurray.com/g/300/300",
},
{
  title: "pic5",
  image: "http://www.fillmurray.com/g/300/300",
},
{
  title: "pic6",
  image: "http://www.fillmurray.com/g/300/300",
}
];


var selectedAlbum;
var albumsPics = {
  music: musicArray,
  beach: beachArray,
  boats: boatsArray,
  nature: natureArray,
  city: cityArray,
  animals: animalsArray
};


$('.albumGallery').on('click', '.imgDiv', function(event) {
    event.preventDefault();
   selectedAlbum = albumsPics[$(this).attr('data-name')];
   var imgString = "";
   $('.albumGallery').removeClass('.active');
   selectedAlbum.forEach(function(el) {
     imgString += compiledTmpl(el);
   });

   $('.imageGallery').append(imgString);
 });

var mytmpl = [
 "<div class='col-md-4 col-sm-6 imgDiv' data-name='<%= name %>' >",
 "<img class='imageCover' src='<%= image %>'> ",
 "<h3 class='caption text-center'><%= title %></h3>",
 "</div>"
].join("");


var compiledTmpl = _.template(mytmpl);


var albString = "";

picAlbums.forEach(function(el) {
  albString += compiledTmpl(el);
});

$('.albumGallery').append(albString);
