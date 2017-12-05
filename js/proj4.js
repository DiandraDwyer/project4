


// Flickr

var html = "";
var apiUrl = "https://api.flickr.com/services/feeds/photos_public.gne?tags=coralbleaching&tagmode=any&format=json&jsoncallback=?";



$(document).ready(function() {   
   $.getJSON(apiUrl,function(json){
        // console.log(json);
   $.each(json.items,function(i,data){
            // html += '<p>From:"'+ data.author_id+'"</p>';
            html += '<div class="flickr"><a href="' + data.link + '" target="_newtab"><img src ="' + data.media.m + '" class="flickr-img"></a></div>'
            });
      $("#flickr").append(html);
    });
});


//$(document).ready(function() {
//
//    $.getJSON(apiurl,function(json){
//        // console.log(json);
//
//        $.each(json.items,function(i,data){
//            // html += '<p>From:"'+ data.author_id+'"</p>';
//            html += '<div class="col-md-3 no-padding flikr-div"><a href="' + data.link + '" target="_newtab"><img src ="'
//            + data.media.m + '" class="flickr-img"></a></div>'
//            });
//        $("#coral").append(html);
//    });
//});
//      


//     Google Maps 
 function initMap() {
        console.log("initMap()");
        var greatBarrierReef = {lat: -18.156290, lng: 147.485962};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 3,
          center: greatBarrierReef
        });
        
          var coralLabel1 = "<h1>Great Barrier Reef</h1>" + "<img src= 'images/gbr.jpg'>";
  var coralLabel2 = "Great Mayan Reef";
    var coralLabel3 = "Astrolabe Reef";
        var coralLabel5 = "Pedro Bank";
        var coralLabel6 = "Kimbe Bay";
          var coralLabel7 = "Qixingyan";
            var coralLabel8 = "7";
              var coralLabel9 = "Apo Reef";
                var coralLabel10 = "Tubbataha Reef";
                  var coralLabel11 = "Ningaloo Reef";
                    var coralLabel12 = "Pickles Reef";
                      var coralLabel13 = "Sekiseishoko Coral Reef";
                        var coralLabel14 = "New Calcedonia Reef";
                          var coralLabel15 = "14";
                            var coralLabel16 = "15";
                              var coralLabel17 = "16";
                                var coralLabel18 = "17";
                                  var coralLabel19 = "18";
                                    var coralLabel20 = "Amazon Reef";
                                      var coralLabel21 = "Maldives' Reef";
                                        var coralLabel22 = "Flower Garden Banks National Marine Sanctuary";

  var popup1 = new google.maps.InfoWindow({
    content: coralLabel1
  });

  var popup2 = new google.maps.InfoWindow({
    content: coralLabel2 
  });
    var popup3 = new google.maps.InfoWindow({
    content: coralLabel3
  });
        var popup5 = new google.maps.InfoWindow({
    content: coralLabel5
  });
              var popup6 = new google.maps.InfoWindow({
    content: coralLabel6
  });
      
              var popup7 = new google.maps.InfoWindow({
    content: coralLabel7
  });
      
              var popup8 = new google.maps.InfoWindow({
    content: coralLabel8
  });
      
              var popup9 = new google.maps.InfoWindow({
    content: coralLabel9
  });
      
              var popup10 = new google.maps.InfoWindow({
    content: coralLabel10
  });
      
              var popup11 = new google.maps.InfoWindow({
    content: coralLabel11
  });
      
              var popup12 = new google.maps.InfoWindow({
    content: coralLabel12
  });
        var popup13 = new google.maps.InfoWindow({
    content: coralLabel13
  });
        var popup14 = new google.maps.InfoWindow({
    content: coralLabel14
  });
        var popup15 = new google.maps.InfoWindow({
    content: coralLabel15
  });
        var popup16 = new google.maps.InfoWindow({
    content: coralLabel16
  });
        var popup17 = new google.maps.InfoWindow({
    content: coralLabel17
  });
        var popup18 = new google.maps.InfoWindow({
    content: coralLabel18
  });
        var popup19 = new google.maps.InfoWindow({
    content: coralLabel19
  });
        var popup20 = new google.maps.InfoWindow({
    content: coralLabel20
  });
       var popup21 = new google.maps.InfoWindow({
    content: coralLabel21
  });
       var popup22 = new google.maps.InfoWindow({
    content: coralLabel22
  });

      
      
      
        var marker1 = new google.maps.Marker({
          position: greatBarrierReef,
          map: map,
        });
          marker1.addListener('click', function() {
    popup1.open(map, marker1);
  });
              var marker2 = new google.maps.Marker({
          position: {lat: 18.001593, lng: -87.943283},
          map: map
        });
                        marker2.addListener('click', function() {
    popup2.open(map, marker2);
  });
              var marker3 = new google.maps.Marker({
          position: {lat: -21.736330388, lng: 174.637330784},
          map: map
        });
              
    marker3.addListener('click', function() {
    popup3.open(map, marker3);
  });
                     
                    var marker5 = new google.maps.Marker({
          position: {lat: 17.50000, lng:  -78.759513},
          map: map
        });
                    
           marker5.addListener('click', function() {
    popup5.open(map, marker5);
  });
                     var marker6 = new google.maps.Marker({
          position: {lat: -6.55938, lng: 153.281},
          map: map
        });
           marker6.addListener('click', function() {
    popup6.open(map, marker6);
  });
        
                    var marker7 = new google.maps.Marker({
          position: {lat: 21.7553269787, lng: 120.821486714},
          map: map
        });
                 marker7.addListener('click', function() {
    popup7.open(map, marker7);
  });
        
                    
               var marker8 = new google.maps.Marker({
          position: {lat: -2.163106, lng:  -55.126648},
          map: map
        });
       marker8.addListener('click', function() {
    popup8.open(map, marker8);
  });
        
                       var marker9 = new google.maps.Marker({
          position: {lat: 12.6758006, lng:  120.474998},
          map: map
        });
               marker9.addListener('click', function() {
    popup9.open(map, marker9);
  });
        
                        var marker10 = new google.maps.Marker({
          position: {lat: 8.916663, lng:  119.916663},
          map: map
        });
    marker10.addListener('click', function() {
    popup10.open(map, marker10);
  });
        
                        var marker11 = new google.maps.Marker({
          position: {lat:  -22.290649414, lng:  113.803596496},
          map: map
        });
       marker11.addListener('click', function() {
    popup11.open(map, marker11);
  });
        
                        var marker12 = new google.maps.Marker({
          position: {lat: 24.9871, lng:  -80.4148},
          map: map
        });
 marker12.addListener('click', function() {
    popup12.open(map, marker12);
  });
        
                        var marker13 = new google.maps.Marker({
          position: {lat: 24.3407, lng:  124.1556},
          map: map
        });
          marker13.addListener('click', function() {
    popup13.open(map, marker13);
  });
        
                        var marker14 = new google.maps.Marker({
          position: {lat: -20.45437718, lng:  164.81723159},
          map: map
        });
          marker14.addListener('click', function() {
    popup14.open(map, marker14);
  });
        
                        var marker15 = new google.maps.Marker({
          position: {lat: -2.163106, lng:  -55.126648},
          map: map
        });
       marker15.addListener('click', function() {
    popup15.open(map, marker15);
  });
        
                        var marker16 = new google.maps.Marker({
          position: {lat: -2.163106, lng:  -55.126648},
          map: map
        });
    marker16.addListener('click', function() {
    popup16.open(map, marker16);
  });
        
                        var marker17 = new google.maps.Marker({
          position: {lat: -2.163106, lng:  -55.126648},
          map: map
        });
   marker17.addListener('click', function() {
    popup17.open(map, marker17);
  });
        
                        var marker18 = new google.maps.Marker({
          position: {lat: -2.163106, lng:  -55.126648},
          map: map
        });
          marker18.addListener('click', function() {
    popup18.open(map, marker18);
  });
        
                        var marker19 = new google.maps.Marker({
          position: {lat: -2.163106, lng:  -55.126648},
          map: map
        });
          marker19.addListener('click', function() {
    popup19.open(map, marker19);
  });
        
                        var marker20 = new google.maps.Marker({
          position: {lat: -2.163106, lng:  -55.126648},
          map: map
        });
                
          marker20.addListener('click', function() {
    popup20.open(map, marker20);
  });
                                    
                               var marker21 = new google.maps.Marker({
          position: {lat: 3.249999, lng:  73.0},
          map: map
        });
                 
          marker21.addListener('click', function() {
    popup21.open(map, marker21);
  });
                               var marker22 = new google.maps.Marker({
          position: {lat: 27.8841, lng:  -93.8147},
          map: map
        });
                 
          marker22.addListener('click', function() {
    popup22.open(map, marker22);
  });  
                      
      }
      
//BACK TO TOP BUTTON

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


      
