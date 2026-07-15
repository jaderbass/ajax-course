// document.querySelector("#btn").addEventListener("click", _ => {
//   document.querySelector("#output").textContent = "Hallihallo";
// });

$("#btn").on("click", _ => {
  $("#output").text("Hallo aus jQuery");
});