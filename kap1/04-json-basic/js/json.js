document.querySelector("#btn").addEventListener("click", _ => {
  
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "server/books.json");

  xhr.onload = _ => {
    // Konsole bewusst nutzen
    console.log("Response:", xhr.responseText);
    const data = JSON.parse(xhr.responseText);
    render(data);
  }

  xhr.send();
});

function render(books) {
  console.log(books);
  
  const ul = document.querySelector("#list");
  // Reset des Listen-Inhalts
  ul.innerHTML = "";

  books.forEach( book => {
    // Listenelement erzeugen
    const li = document.createElement("li");
    // dem Listenelement Inhalt hinzufügen
    li.textContent = `${book.title} (${book.author})`;
    // Listelement samt Inhalt in den Listen-Container einfügen
    ul.appendChild(li);
  });
}