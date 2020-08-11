SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function() {
  // soundcloude song id
  SC.stream('/tracks/294425882',function(sound){
    // start the music
    $('#start').click(function(e) {
           e.preventDefault(); //Don't buuton function
           sound.start();
         });

    // stop the music
    $('#stop').click(function(e) {
          e.preventDefault();
          sound.stop();
        });

  });
});
