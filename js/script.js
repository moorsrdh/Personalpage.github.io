document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("maineButton");
  const answer = document.getElementById("maineAnswer");

  button.addEventListener("click", function () {
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
});
