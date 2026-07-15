// Die Buttons gibt es erst nach Klick auf den "Laden"-Button.
// Darum nutzen wir Event-Delegation
$(document).on("click", ".item-btn" , function() {
  const id = $(this).data("id");
  loadDetails(id);
});

function loadDetails(id){
  $.getJSON("server/detail.php", { id }, data => {
    renderDetails(data);
  });
}

function renderDetails(data){
  if(data.error) {
    $("#details").html("<p>Keine Details gefunden.</p>");
    return;
  }

  $("#details").html(`
    <h3>${data.title}</h3>
    <p>${data.description}</p>
  `);
}