document.getElementById("titleInput").addEventListener("input", function () {
  document.getElementById("liveTitle").textContent =
    this.value || "Your Title Here";
});

document.getElementById("authorInput").addEventListener("input", function () {
  const val = this.value.trim();
  document.getElementById("liveAuthor").textContent = val
    ? "By " + val
    : "By Author Name";
});

document.getElementById("summaryInput").addEventListener("input", function () {
  document.getElementById("liveSummary").textContent =
    this.value || "This is a short summary of the article.";
});

document.getElementById("fileInput").addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = document.getElementById("mainPreviewImage");
      img.src = e.target.result;
      img.style.display = "block";
    };
    reader.readAsDataURL(file);
  }
});
// const params = new URLSearchParams(window.location.search);
// document.getElementById("preview-img").src = params.get("image");
// document.getElementById("preview-title").textContent = params.get("title");
// document.getElementById("preview-author").textContent =
//   "By " + params.get("author");
// document.getElementById("preview-summary").textContent = params.get("summary");
