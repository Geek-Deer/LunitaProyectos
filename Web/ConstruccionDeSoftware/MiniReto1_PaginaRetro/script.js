 //DOM Elements
 const $boxes = $(".box")
 $image = $(".image");
 const $audio = $("#mi-audio");
 const $audio2 = $("#idkAudio");
 const $audio3 = $("#idkAudio2");
 const $inv = $(".inv");
 const $jeje = $("#not");
 const jejeje = document.getElementById("not");
 var i = 0;

 document.getElementById(".carousel")


//Loop through each boxes element
$boxes.on("dragover", function (e) {
    e.preventDefault();
    $(this).addClass("hovered");
  });
  
  $boxes.on("dragleave", function () {
    $(this).removeClass("hovered");
  });
  
  $boxes.on("drop", function () {
    $(this).append($image);
    $(this).removeClass("hovered");
    if ($("#ret").children().length == 1) {
      $inv.each(function () {
        if ($(this).attr("id") != "not") {
          $(this).removeClass("inv");
        }
      });
      $(this).addClass("retro gradient-border");
      $("body").addClass("retroBody");
      $audio.attr("src", "MusicBG.mp3");
    } else {
      $inv.addClass("inv");
      $("#ret").removeClass("gradient-border");
      $("body").removeClass("retroBody");
      $audio.attr("src", "");
    }
  });

  

 function boom(){
    i++;
    if(i>3){
        jejeje.classList.remove("inv");
        jejeje.classList.add("boom");
        $audio2.attr("src", "media/png/bom.mp3");
        $audio2.attr("src", "media/png/ratata.mp3");
        setTimeout(() => {  jejeje.classList.remove("boom"); jejeje.classList.add("inv");  $audio2.attr("src", ""); $audio2.attr("src", ""); window.location.href = 'idk.html';}, 4000);
    }
    else loadDoc();
}

function bonk(){
    var cat = document.getElementById("kitty");
    setTimeout(() => {
        document.getElementById("kitty").classList.add("appear");
        document.getElementById("idkA").src="media/png/meow.mp3";
        setTimeout(() => {
            window.location.href = ("index.html");
        }, 3000);
        
    }, 4000); 
}
 
function loadDoc() {
    if(i>0){
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
        document.getElementById("AJAX-Container").innerHTML = this.responseText;
        }
        switch(i){
        case 1:
            xhttp.open("GET", "warning1.txt");
        break;
        case 2:
            xhttp.open("GET", "warning2.txt");
        break;
        case 3:
            xhttp.open("GET", "warning3.txt");
        break;
        }
        xhttp.send();
    }
    
    
}