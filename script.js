document.addEventListener("DOMContentLoaded", function () {
  const movies = [
    {
      src: "images/Jisoo/JISOO WALLPAPER.jpg",
      title: "Jisoo",
      url: "videos/Jisoo/JISOO - ‘꽃(FLOWER)’ M_V.mp4",
    },
    {
      src: "images/Jennie/Jennie Solo Wallpaper I xX_RACH_Xx.jpg",
      title: "Jennie",
      url: "videos/Jennie/JENNIE - 'SOLO' M_V.mp4",
    },
    {
      src: "images/Rose/BLACKPINK ROSÉ ON THE GROUND WALLPAPER.jpg",
      title: "Rosé",
      url: "videos/Rose/ROSÉ - 'On The Ground' M_V.mp4",
    },
    {
      src: "images/Lisa/download.jpg",
      title: "Lisa",
      url: "videos/Lisa/LISA - 'MONEY' EXCLUSIVE PERFORMANCE VIDEO.mp4",
    },
  ];

  const movieRow = document.getElementById("movieRow");

  movies.forEach((movie) => {
    const container = document.createElement("div");
    container.className = "movie-container";

    const img = document.createElement("img");
    img.src = movie.src;
    img.alt = movie.title + " image";
    img.className = "movie";
    img.loading = "lazy";

    const text = document.createElement("p");
    text.innerText = movie.title;
    text.className = "movie-text title-bar"; // Apply the class

    container.appendChild(img);
    container.appendChild(text);

    container.addEventListener("click", function () {
      playVideo(movie.url);
    });

    movieRow.appendChild(container);
  });
  // Exit button functionality (attach safely)
  const exitBtn = document.getElementById("exitButton");
  const videoPlayerEl = document.getElementById("videoPlayer");
  const videoInner = document.querySelector(".video-inner");
  if (exitBtn) {
    exitBtn.addEventListener("click", function (e) {
      e.preventDefault();
      stopAndHideVideo();
    });
  } else {
    console.warn("Exit button not found");
  }

  // Clicking on overlay (outside video) closes modal
  if (videoPlayerEl) {
    videoPlayerEl.addEventListener("click", function (e) {
      if (e.target === videoPlayerEl) stopAndHideVideo();
    });
  }

  // Prevent clicks inside the inner video area from bubbling to the overlay
  if (videoInner) {
    videoInner.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  }

  // Theme toggle
  const themeToggle = document.getElementById("themeToggle");
  themeToggle.addEventListener("click", function () {
    const pressed = this.getAttribute("aria-pressed") === "true";
    document.body.classList.toggle("dark");
    this.setAttribute("aria-pressed", String(!pressed));
    // save preference
    localStorage.setItem(
      "bp-theme",
      document.body.classList.contains("dark") ? "dark" : "light"
    );
  });

  // load saved theme
  const saved = localStorage.getItem("bp-theme");
  if (saved === "dark") {
    document.body.classList.add("dark");
    if (themeToggle) themeToggle.setAttribute("aria-pressed", "true");
  }

  // Close on Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") stopAndHideVideo();
  });
});

function playVideo(url) {
  const videoPlayer = document.getElementById("videoPlayer");
  const movieVideo = document.getElementById("movieVideo");
  // set source and show modal
  movieVideo.src = url;
  movieVideo.currentTime = 0;
  movieVideo.load();
  movieVideo.play().catch(() => {});
  videoPlayer.style.display = "flex";
  videoPlayer.setAttribute("aria-hidden", "false");
}

function stopAndHideVideo() {
  const videoPlayer = document.getElementById("videoPlayer");
  const movieVideo = document.getElementById("movieVideo");
  if (movieVideo) {
    movieVideo.pause(); // Stop the video
    try {
      movieVideo.currentTime = 0;
    } catch (e) {}
    movieVideo.removeAttribute("src");
    movieVideo.load();
  }
  videoPlayer.style.display = "none";
  videoPlayer.setAttribute("aria-hidden", "true");
}
