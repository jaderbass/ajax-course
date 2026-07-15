// Wiederverwendbare AJAX-Hilfsfunktion

function ajaxGet(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("get", url);

  xhr.onload = _ => {
    callback(xhr.responseText, xhr.status);
  }

  xhr.send();
}