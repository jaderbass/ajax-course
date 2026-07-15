document.querySelector("#btn").addEventListener("click", _ => {
  
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "server/not-existing.php");

  xhr.onload = _ => {
    // Konsole bewusst nutzen
    console.log("Status:", xhr.status);
    console.log("Response:", xhr.responseText);
    document.querySelector("#output").innerHTML = "HTTP-Status: " + xhr.status + "<br>" + xhr.responseText;
  }

  xhr.send();
});