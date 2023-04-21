function loadDoc(docName) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
    if(docName == "Aristogatos.png"){
      window.open('Aristogatos.png');
    }
    else{
    xhttp.open("GET", docName);
    xhttp.send();
    }
}