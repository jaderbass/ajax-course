// Uhrzeit ohne Seiten-Reload laden

document.querySelector("#btn").addEventListener("click", _ => {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("load", _ => {
    // onload heißt NICHT automatisch Erfolg -> HTTP-Status prüfen
    // dieser sollte 200 sein
    if(xhr.status === 200) {
      document.querySelector("#output").textContent = xhr.responseText;
    } else {
      document.querySelector("#output").textContent = "Hat leider nicht geklappt 😒";
    }
  });

  // Verbindung zum Server öffnen
  xhr.open("GET", "server/time.php");

  // Anforderung an den Server senden
  xhr.send();
});