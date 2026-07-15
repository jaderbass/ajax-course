resObj = new XMLHttpRequest();

document.querySelector("#searchBtn").addEventListener("click", _ => {
  // Inhalt des Suchformularfeldes speichern
  const query = document.querySelector("#searchInput").value;
  console.log(query);
  
  // Verbindung öffnen und Formularinhalt anhängen
  resObj.open( 'get', 'server/search.php?q=' + encodeURIComponent(query), true );
  resObj.onload = handleResponse;
  resObj.send( null );
});

function handleResponse() {
  console.log(resObj.responseText);
  
  const output = document.querySelector("#output");
  const result = JSON.parse(resObj.responseText);
  console.log(result);
  
  result.forEach(book => {
    output.innerHTML += `${book.title}<br>`;
  });
}