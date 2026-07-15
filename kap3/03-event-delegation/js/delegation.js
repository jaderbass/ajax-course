// Event Delegation
// Event-Listener wird an das Eltern-Element gebunden

$("#load").on("click", _ => {
  $.getJSON("server/items.php", items => {
    $("#list").empty();

    items.forEach( item => {
      $("#list").append(`
        <button class="item-btn" data-id="${item.id}">
          ${item.name}
        </button>  
      `);
    });
  });
});

// das ist jetzt das Event-Delegation
// ! Bei Nutzung von this immer klassische anonyme Funktionen nutzen. Niemals Arrow-Funktionen, die diese das this auf das window-Objekt beziehen!
$("#list").on("click", ".item-btn", function () {
  $("#info").text("Gecklickte ID: " + $(this).data("id"));
});

// document.addEventListener("click", function(event){
//   const btn = event.target;
//   console.log(btn.dataset.id);
//   document.querySelector("#info").textContent = "Geklickte ID: " + btn.dataset.id;
// });