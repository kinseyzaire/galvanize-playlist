// var allDeezCovers = $("#allAlbums")
$(document).ready(function(){
var getAllAlbums = $.ajax( {
      url:"https://lit-fortress-6467.herokuapp.com/object",
      method:"GET",
      dataType: "json"
   });

getAllAlbums.done(function(data){
   for (var i = 0; i < data["results"].length; i++) {
   $("#allAlbums").append('<div class="covvvers" id="allDuhAlbums'+[i]+'"><img src="images/'+ data.results[i]["cover_art"] +'" width="90px" height="90px alt="album cover"></div>')
      };
});

});



// var ccchoose = $("#chooseEm")
//
// ccchoose.click(function() {

// var lookie = $.ajax( {
//     url: "https://lit-fortress-6467.herokuapp.com/object",
//     method: "GET",
//     dataType: "json",
//     });
//     lookie.done(function(payload)){
//     console.log(payload);
//      };

// var lookiePOST = $.ajax( {
//     url: "https://lit-fortress-6467.herokuapp.com/post",
//     method: "POST",
//     data: {obj being sent}}
//     });
//     lookie.done(function(payload)){
//     console.log(payload);
//      };
