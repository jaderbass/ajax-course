// AJAX mit jQuery

$("#btn").on("click", _ => {
  $.getJSON("server/list.php", data => {
    render(data);
  });
});

function render(items) {
  $("#output").empty();

  items.forEach(item => {
    $("#output").append(`<p>${item.title}</p>`);
  });
}