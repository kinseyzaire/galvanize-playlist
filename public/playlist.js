// var allDeezCovers = $("#allAlbums")
// $(document).ready(function(){
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

// });

var babysFirstPost = $.ajax( {
      url:"https://lit-fortress-6467.herokuapp.com/post",
      method:"POST",
   });

babysFirstPost.done(function(message){
   console.log(message);
});

$(document).on('click','#allDuhAlbums0',function(){
   $('#bin').append('<p>'+ getAllAlbums.responseJSON.results[0]["artist"]+ ' : '+getAllAlbums.responseJSON.results[0]["title"] +'</p>');
});
$(document).on('click','#allDuhAlbums1',function(){
   $('#bin').append('<p>'+ getAllAlbums.responseJSON.results[1]["artist"]+ ' : '+getAllAlbums.responseJSON.results[1]["title"] +'</p>');
});
$(document).on('click','#allDuhAlbums2',function(){
   $('#bin').append('<p>'+ getAllAlbums.responseJSON.results[2]["artist"]+ ' : '+getAllAlbums.responseJSON.results[2]["title"] +'</p>');
});
$(document).on('click','#allDuhAlbums3',function(){
   $('#bin').append('<p>'+ getAllAlbums.responseJSON.results[3]["artist"]+ ' : '+getAllAlbums.responseJSON.results[3]["title"] +'</p>');
});
$(document).on('click','#allDuhAlbums4',function(){
   $('#bin').append('<p>'+ getAllAlbums.responseJSON.results[4]["artist"]+ ' : '+getAllAlbums.responseJSON.results[4]["title"] +'</p>');
});


//
// $('#allDuhAlbums0').click(function(){
//    console.log("made it this far");
//    console.log("anything append?");
// });

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
