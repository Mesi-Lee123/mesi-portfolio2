// Dark mode toggle + active link highlight (your existing code)
const body = document.body;
const toggle = document.createElement("button");
toggle.innerText = "🌙";
toggle.classList.add("dark-mode-toggle");
document.body.appendChild(toggle);

toggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  toggle.innerText = body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Highlight active nav link
const navLinks = document.querySelectorAll("header nav a");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// ✅ Pitch video embed converter
document.addEventListener("DOMContentLoaded", function () {
  const videoDiv = document.getElementById("pitch-video");
  if (videoDiv) {
    const youtubeLink = videoDiv.getAttribute("data-youtube");
    if (youtubeLink) {
      let videoId = null;

      // Handle both long and short YouTube URLs
      if (youtubeLink.includes("watch?v=")) {
        videoId = youtubeLink.split("watch?v=")[1].split("&")[0];
      } else if (youtubeLink.includes("youtu.be/")) {
        videoId = youtubeLink.split("youtu.be/")[1].split("?")[0];
      }

      if (videoId) {
        videoDiv.innerHTML = `
          <iframe width="560" height="315"
            src="https://www.youtube.com/embed/${videoId}"
            title="Pitch Video" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
          </iframe>`;
      } else {
        videoDiv.innerHTML = "<p style='color:red;'>⚠️ Invalid YouTube link</p>";
      }
    }
  }
});
