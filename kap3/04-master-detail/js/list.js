// Liste laden

$("#btnLoad").on("click", _ => {
  $.getJSON("server/list.php", items => {
    renderList(items);
  });
});

function renderList(items) {
  const container = $("#items");
  container.empty();

  // Für jedes Item ein Button
  items.forEach(item => {
    container.append(`
      <button class="item-btn" data-id="${item.id}">
        ${item.title}
      </button>`
    );
  });
}