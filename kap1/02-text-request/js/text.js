document.querySelector("#btn").addEventListener("click", _ => {
  
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "server/text.php");

  xhr.onload = _ => {
    // Konsole bewusst nutzen
    console.log("Status:", xhr.status);
    console.log("Response:", xhr.responseText);
    document.querySelector("#output").textContent = xhr.responseText;
  }

  xhr.send();
});