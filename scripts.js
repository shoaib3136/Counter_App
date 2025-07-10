document.addEventListener("DOMContentLoaded", function () {
  const textarea = document.getElementById("myTextarea");
  const counter = document.getElementById("charCount");

  textarea.addEventListener("input", function () {
    counter.textContent = textarea.value.length;
  });
});
