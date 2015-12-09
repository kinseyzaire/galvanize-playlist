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


var ppplaylist = {"results":[]}

$(document).on('click','#allDuhAlbums0',function(){
   $('#bin').append('<p>'+ getAllAlbums.responseJSON.results[0]["artist"]+ ' : '+getAllAlbums.responseJSON.results[0]["title"] +'</p>');
   var result = {}
      result["artist"]= getAllAlbums.responseJSON.results[0]["artist"];
      result["title"]= getAllAlbums.responseJSON.results[0]["title"];
   ppplaylist.results.push(result);
});
$(document).on('click','#allDuhAlbums1',function(){
   $('#bin').append('<p>'+ getAllAlbums.responseJSON.results[1]["artist"]+ ' : '+getAllAlbums.responseJSON.results[1]["title"] +'</p>');
   var result = {}
      result["artist"]= getAllAlbums.responseJSON.results[1]["artist"];
      result["title"]= getAllAlbums.responseJSON.results[1]["title"];
      ppplaylist.results.push(result);
});
$(document).on('click','#allDuhAlbums2',function(){
   $('#bin').append('<p>'+ getAllAlbums.responseJSON.results[2]["artist"]+ ' : '+getAllAlbums.responseJSON.results[2]["title"] +'</p>');
   var result = {}
      result["artist"]= getAllAlbums.responseJSON.results[2]["artist"];
      result["title"]= getAllAlbums.responseJSON.results[2]["title"];
      ppplaylist.results.push(result);
});
$(document).on('click','#allDuhAlbums3',function(){
   $('#bin').append('<p>'+ getAllAlbums.responseJSON.results[3]["artist"]+ ' : '+getAllAlbums.responseJSON.results[3]["title"] +'</p>');
   var result = {}
      result["artist"]= getAllAlbums.responseJSON.results[3]["artist"];
      result["title"]= getAllAlbums.responseJSON.results[3]["title"];
      ppplaylist.results.push(result);
});
$(document).on('click','#allDuhAlbums4',function(){
   $('#bin').append('<p>'+ getAllAlbums.responseJSON.results[4]["artist"]+ ' : '+getAllAlbums.responseJSON.results[4]["title"] +'</p>');
   var result = {}
      result["artist"]= getAllAlbums.responseJSON.results[4]["artist"];
      result["title"]= getAllAlbums.responseJSON.results[4]["title"];
      ppplaylist.results.push(result);
});

$(document).on('click',"#subBin",function(){
var babysFirstPost = $.ajax( {
      url:"https://lit-fortress-6467.herokuapp.com/post",
      method:"POST",
      data: ppplaylist
   });

babysFirstPost.done(function(){
   console.log("playlist sent?");
});
});


$(document).on('click',"#clearEm",function(){
   $('#bin').html("<p></p>");
   ppplaylist.results = [];
});
