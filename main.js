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

    // stop the music
    $('#stop').click(function(e) {
          e.preventDefault();
          sound.stop();
        });
    $("#Duration").click(function(e){
      e.preventDefault();
      alert(sound.duration);
    });
    $("#mute").click(function(e){
      e.preventDefault();
      sound.toggleMute();
    });
    $("#pause").click(function(e){
      e.preventDefault();
      sound.pause();
    });
    $("#position").click(function(e){
      e.preventDefault();
      sound.setPosition(10000);
    });
    $("#volume").click(function(e){
      e.preventDefault();
      sound.setVolume(60);
    });
    $("#timer").click(function(e){
      e.preventDefault();
      alert(sound.onTimer());
    });
  });
});
