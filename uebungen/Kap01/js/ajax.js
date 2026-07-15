const xhr = new XMLHttpRequest();
const btn = document.querySelector("#btn");
const div = document.querySelector("#output");

btn.addEventListener("click", _ => {
  xhr.open("get", "server/text.txt");

  xhr.onload = _ => {
    // Aufgabe 2
    if(xhr.status === 200){
      div.textContent = xhr.responseText;
    } else {
      div.textContent = "Es wurden keine Daten gefunden";
    }
  };

  xhr.send();
});