SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function() {
  // soundcloude song id
  SC.stream('/tracks/298956840',function(sound){
    // start the music
    $('#start').click(function(e) {
           e.preventDefault(); //Don't buuton function
           sound.start();
         });
    $("#test").click(function(e){
      e.preventDefault();
      console.log(sound);
    })
    // stop the music
    $('#stop').click(function(e) {
          e.preventDefault();
          sound.stop();
        });

  });
});
