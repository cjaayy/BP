document.addEventListener("DOMContentLoaded", function () {
  // ====== DATA ======
  const members = [
    {
      name: "Jisoo",
      role: "Lead Vocalist & Visual",
      image: "images/Jisoo/JISOO WALLPAPER.jpg",
      color: "#ff6b9d",
      quote: "\"Just because you're breathing, doesn't mean you're alive.\"",
    },
    {
      name: "Jennie",
      role: "Main Rapper & Vocalist",
      image: "images/Jennie/Jennie Solo Wallpaper I xX_RACH_Xx.jpg",
      color: "#ff4757",
      quote: '"I want to be remembered as a confident woman."',
    },
    {
      name: "Rosé",
      role: "Main Vocalist & Lead Dancer",
      image: "images/Rose/BLACKPINK ROSÉ ON THE GROUND WALLPAPER.jpg",
      color: "#ffa502",
      quote: '"Life is tough, but so are you."',
    },
    {
      name: "Lisa",
      role: "Main Dancer & Rapper",
      image: "images/Lisa/download.jpg",
      color: "#2ed573",
      quote: '"I believe in myself and I believe in my dreams."',
    },
  ];

  const movies = [
    {
      src: "images/Jisoo/JISOO WALLPAPER.jpg",
      title: "Jisoo",
      song: "꽃 (FLOWER)",
      url: "videos/Jisoo/JISOO - '꽃(FLOWER)' M_V.mp4",
    },
    {
      src: "images/Jennie/Jennie Solo Wallpaper I xX_RACH_Xx.jpg",
      title: "Jennie",
      song: "SOLO",
      url: "videos/Jennie/JENNIE - 'SOLO' M_V.mp4",
    },
    {
      src: "images/Rose/BLACKPINK ROSÉ ON THE GROUND WALLPAPER.jpg",
      title: "Rosé",
      song: "On The Ground",
      url: "videos/Rose/ROSÉ - 'On The Ground' M_V.mp4",
    },
    {
      src: "images/Lisa/download.jpg",
      title: "Lisa",
      song: "MONEY",
      url: "videos/Lisa/LISA - 'MONEY' EXCLUSIVE PERFORMANCE VIDEO.mp4",
    },
  ];

  const galleryPhotos = [
    { src: "images/Jisoo/JISOO WALLPAPER.jpg", name: "Jisoo", filter: "jisoo" },
    { src: "images/Jisoo/JISOO.jpg", name: "Jisoo", filter: "jisoo" },
    {
      src: "images/Jisoo/340321530_904790264069735_8084048258346678689_n.jpg",
      name: "Jisoo",
      filter: "jisoo",
    },
    {
      src: "images/Jennie/Jennie Solo Wallpaper I xX_RACH_Xx.jpg",
      name: "Jennie",
      filter: "jennie",
    },
    { src: "images/Jennie/Solo jennie.jpg", name: "Jennie", filter: "jennie" },
    {
      src: "images/Jennie/5db62ab03db00aed7b19248d0ac00a96.jpg",
      name: "Jennie",
      filter: "jennie",
    },
    {
      src: "images/Rose/BLACKPINK ROSÉ ON THE GROUND WALLPAPER.jpg",
      name: "Rosé",
      filter: "rose",
    },
    {
      src: "images/Rose/90a657c8fc89f10a5723ae05c3b0f899.jpg",
      name: "Rosé",
      filter: "rose",
    },
    { src: "images/Lisa/download.jpg", name: "Lisa", filter: "lisa" },
    { src: "images/Lisa/LISA - 'MONEY'.jpg", name: "Lisa", filter: "lisa" },
    {
      src: "images/Lisa/8e4adec23146b099c3354a8f00ff4ec4.jpg",
      name: "Lisa",
      filter: "lisa",
    },
  ];

  // ====== SONGS DATA ======
  // Using Spotify search to find songs (more reliable than track IDs)
  const songs = {
    group: [
      {
        title: "Pink Venom",
        album: "Born Pink",
        year: "2022",
        duration: "3:07",
        type: "Title Track",
        spotify: "https://open.spotify.com/search/BLACKPINK%20Pink%20Venom",
      },
      {
        title: "Shut Down",
        album: "Born Pink",
        year: "2022",
        duration: "2:58",
        type: "Title Track",
        spotify: "https://open.spotify.com/search/BLACKPINK%20Shut%20Down",
      },
      {
        title: "Typa Girl",
        album: "Born Pink",
        year: "2022",
        duration: "2:49",
        type: "B-Side",
        spotify: "https://open.spotify.com/search/BLACKPINK%20Typa%20Girl",
      },
      {
        title: "Yeah Yeah Yeah",
        album: "Born Pink",
        year: "2022",
        duration: "3:17",
        type: "B-Side",
        spotify:
          "https://open.spotify.com/search/BLACKPINK%20Yeah%20Yeah%20Yeah",
      },
      {
        title: "Hard to Love",
        album: "Born Pink",
        year: "2022",
        duration: "2:42",
        type: "B-Side",
        spotify: "https://open.spotify.com/search/BLACKPINK%20Hard%20to%20Love",
      },
      {
        title: "The Happiest Girl",
        album: "Born Pink",
        year: "2022",
        duration: "3:31",
        type: "B-Side",
        spotify:
          "https://open.spotify.com/search/BLACKPINK%20The%20Happiest%20Girl",
      },
      {
        title: "Tally",
        album: "Born Pink",
        year: "2022",
        duration: "2:58",
        type: "B-Side",
        spotify: "https://open.spotify.com/search/BLACKPINK%20Tally",
      },
      {
        title: "Ready for Love",
        album: "Born Pink",
        year: "2022",
        duration: "2:53",
        type: "B-Side",
        spotify:
          "https://open.spotify.com/search/BLACKPINK%20Ready%20for%20Love",
      },
      {
        title: "How You Like That",
        album: "THE ALBUM",
        year: "2020",
        duration: "3:01",
        type: "Title Track",
        spotify:
          "https://open.spotify.com/search/BLACKPINK%20How%20You%20Like%20That",
      },
      {
        title: "Pretty Savage",
        album: "THE ALBUM",
        year: "2020",
        duration: "3:20",
        type: "B-Side",
        spotify: "https://open.spotify.com/search/BLACKPINK%20Pretty%20Savage",
      },
      {
        title: "Bet You Wanna (ft. Cardi B)",
        album: "THE ALBUM",
        year: "2020",
        duration: "2:39",
        type: "Collab",
        spotify:
          "https://open.spotify.com/search/BLACKPINK%20Bet%20You%20Wanna",
      },
      {
        title: "Lovesick Girls",
        album: "THE ALBUM",
        year: "2020",
        duration: "3:16",
        type: "Title Track",
        spotify: "https://open.spotify.com/search/BLACKPINK%20Lovesick%20Girls",
      },
      {
        title: "Crazy Over You",
        album: "THE ALBUM",
        year: "2020",
        duration: "2:42",
        type: "B-Side",
        spotify:
          "https://open.spotify.com/search/BLACKPINK%20Crazy%20Over%20You",
      },
      {
        title: "Love to Hate Me",
        album: "THE ALBUM",
        year: "2020",
        duration: "2:50",
        type: "B-Side",
        spotify:
          "https://open.spotify.com/search/BLACKPINK%20Love%20to%20Hate%20Me",
      },
      {
        title: "You Never Know",
        album: "THE ALBUM",
        year: "2020",
        duration: "3:45",
        type: "B-Side",
        spotify:
          "https://open.spotify.com/search/BLACKPINK%20You%20Never%20Know",
      },
      {
        title: "Ice Cream (ft. Selena Gomez)",
        album: "THE ALBUM",
        year: "2020",
        duration: "2:56",
        type: "Collab",
        spotify:
          "https://open.spotify.com/search/BLACKPINK%20Ice%20Cream%20Selena%20Gomez",
      },
      {
        title: "Kill This Love",
        album: "KILL THIS LOVE",
        year: "2019",
        duration: "3:10",
        type: "Title Track",
        spotify:
          "https://open.spotify.com/search/BLACKPINK%20Kill%20This%20Love",
      },
      {
        title: "Don't Know What to Do",
        album: "KILL THIS LOVE",
        year: "2019",
        duration: "3:22",
        type: "B-Side",
        spotify:
          "https://open.spotify.com/search/BLACKPINK%20Don%27t%20Know%20What%20to%20Do",
      },
      {
        title: "Kick It",
        album: "KILL THIS LOVE",
        year: "2019",
        duration: "2:59",
        type: "B-Side",
        spotify: "https://open.spotify.com/search/BLACKPINK%20Kick%20It",
      },
      {
        title: "Hope Not",
        album: "KILL THIS LOVE",
        year: "2019",
        duration: "3:18",
        type: "B-Side",
        spotify: "https://open.spotify.com/search/BLACKPINK%20Hope%20Not",
      },
      {
        title: "DDU-DU DDU-DU",
        album: "SQUARE UP",
        year: "2018",
        duration: "3:28",
        type: "Title Track",
        spotify: "https://open.spotify.com/search/BLACKPINK%20DDU-DU%20DDU-DU",
      },
      {
        title: "Forever Young",
        album: "SQUARE UP",
        year: "2018",
        duration: "3:24",
        type: "B-Side",
        spotify: "https://open.spotify.com/search/BLACKPINK%20Forever%20Young",
      },
      {
        title: "Really",
        album: "SQUARE UP",
        year: "2018",
        duration: "3:19",
        type: "B-Side",
        spotify: "https://open.spotify.com/search/BLACKPINK%20Really",
      },
      {
        title: "See U Later",
        album: "SQUARE UP",
        year: "2018",
        duration: "3:19",
        type: "B-Side",
        spotify: "https://open.spotify.com/search/BLACKPINK%20See%20U%20Later",
      },
      {
        title: "As If It's Your Last",
        album: "SQUARE TWO",
        year: "2017",
        duration: "3:33",
        type: "Title Track",
        spotify:
          "https://open.spotify.com/search/BLACKPINK%20As%20If%20It%27s%20Your%20Last",
      },
      {
        title: "Playing with Fire",
        album: "SQUARE TWO",
        year: "2016",
        duration: "3:27",
        type: "Title Track",
        spotify:
          "https://open.spotify.com/search/BLACKPINK%20Playing%20with%20Fire",
      },
      {
        title: "Stay",
        album: "SQUARE TWO",
        year: "2016",
        duration: "3:29",
        type: "B-Side",
        spotify: "https://open.spotify.com/search/BLACKPINK%20Stay",
      },
      {
        title: "Whistle",
        album: "SQUARE ONE",
        year: "2016",
        duration: "3:31",
        type: "Title Track",
        spotify: "https://open.spotify.com/search/BLACKPINK%20Whistle",
      },
      {
        title: "Boombayah",
        album: "SQUARE ONE",
        year: "2016",
        duration: "3:44",
        type: "Title Track",
        spotify: "https://open.spotify.com/search/BLACKPINK%20Boombayah",
      },
    ],
    solo: [
      {
        title: "꽃 (FLOWER)",
        artist: "Jisoo",
        album: "ME",
        year: "2023",
        duration: "3:18",
        type: "Solo",
        audio: "audios/Jisoo/[DatMusic.IR] JISOO - FLOWER.mp3",
        spotify: "https://open.spotify.com/search/JISOO%20FLOWER",
      },
      {
        title: "All Eyes On Me",
        artist: "Jisoo",
        album: "ME",
        year: "2023",
        duration: "3:08",
        type: "Solo",
        spotify: "https://open.spotify.com/search/JISOO%20All%20Eyes%20On%20Me",
      },
      {
        title: "SOLO",
        artist: "Jennie",
        album: "SOLO",
        year: "2018",
        duration: "2:53",
        type: "Solo",
        spotify: "https://open.spotify.com/search/JENNIE%20SOLO",
      },
      {
        title: "You & Me",
        artist: "Jennie",
        album: "You & Me",
        year: "2023",
        duration: "3:01",
        type: "Solo",
        spotify: "https://open.spotify.com/search/JENNIE%20You%20and%20Me",
      },
      {
        title: "On The Ground",
        artist: "Rosé",
        album: "R",
        year: "2021",
        duration: "2:52",
        type: "Solo",
        spotify: "https://open.spotify.com/search/ROSE%20On%20The%20Ground",
      },
      {
        title: "Gone",
        artist: "Rosé",
        album: "R",
        year: "2021",
        duration: "3:25",
        type: "Solo",
        spotify: "https://open.spotify.com/search/ROSE%20Gone%20BLACKPINK",
      },
      {
        title: "LALISA",
        artist: "Lisa",
        album: "LALISA",
        year: "2021",
        duration: "3:26",
        type: "Solo",
        spotify: "https://open.spotify.com/search/LISA%20LALISA",
      },
      {
        title: "MONEY",
        artist: "Lisa",
        album: "LALISA",
        year: "2021",
        duration: "2:49",
        type: "Solo",
        audio: "audios/Lisa/26 MONEY (LISA).mp3",
        spotify: "https://open.spotify.com/search/LISA%20MONEY",
      },
      {
        title: "ROCKSTAR",
        artist: "Lisa",
        album: "Single",
        year: "2024",
        duration: "2:58",
        type: "Solo",
        spotify: "https://open.spotify.com/search/LISA%20ROCKSTAR",
      },
      {
        title: "New Woman (ft. Rosalía)",
        artist: "Lisa",
        album: "Single",
        year: "2024",
        duration: "3:10",
        type: "Solo",
        spotify: "https://open.spotify.com/search/LISA%20New%20Woman",
      },
      {
        title: "Moonlit Floor",
        artist: "Lisa",
        album: "Single",
        year: "2024",
        duration: "2:40",
        type: "Solo",
        spotify: "https://open.spotify.com/search/LISA%20Moonlit%20Floor",
      },
      {
        title: "APT. (ft. Bruno Mars)",
        artist: "Rosé",
        album: "Single",
        year: "2024",
        duration: "2:53",
        type: "Solo",
        spotify: "https://open.spotify.com/search/ROSE%20APT%20Bruno%20Mars",
      },
      {
        title: "Toxic Till The End",
        artist: "Rosé",
        album: "rosie",
        year: "2024",
        duration: "3:15",
        type: "Solo",
        spotify:
          "https://open.spotify.com/search/ROSE%20Toxic%20Till%20The%20End",
      },
      {
        title: "Mantra",
        artist: "Jennie",
        album: "Single",
        year: "2024",
        duration: "2:55",
        type: "Solo",
        spotify: "https://open.spotify.com/search/JENNIE%20Mantra",
      },
    ],
    albums: [
      {
        title: "Born Pink",
        year: "2022",
        tracks: 8,
        cover: "images/Blackpink Logo/BLACKPINK (logo).jpg",
        type: "Full Album",
      },
      {
        title: "THE ALBUM",
        year: "2020",
        tracks: 8,
        cover: "images/Blackpink Logo/BLACKPINK (logo).jpg",
        type: "Full Album",
      },
      {
        title: "KILL THIS LOVE",
        year: "2019",
        tracks: 5,
        cover: "images/Blackpink Logo/BLACKPINK (logo).jpg",
        type: "Mini Album",
      },
      {
        title: "SQUARE UP",
        year: "2018",
        tracks: 4,
        cover: "images/Blackpink Logo/BLACKPINK (logo).jpg",
        type: "Mini Album",
      },
      {
        title: "SQUARE TWO",
        year: "2016",
        tracks: 3,
        cover: "images/Blackpink Logo/BLACKPINK (logo).jpg",
        type: "Single Album",
      },
      {
        title: "SQUARE ONE",
        year: "2016",
        tracks: 2,
        cover: "images/Blackpink Logo/BLACKPINK (logo).jpg",
        type: "Single Album",
      },
      {
        title: "ME (Jisoo)",
        year: "2023",
        tracks: 2,
        cover: "images/Jisoo/JISOO WALLPAPER.jpg",
        type: "Solo Album",
      },
      {
        title: "R (Rosé)",
        year: "2021",
        tracks: 2,
        cover: "images/Rose/BLACKPINK ROSÉ ON THE GROUND WALLPAPER.jpg",
        type: "Solo Album",
      },
      {
        title: "LALISA (Lisa)",
        year: "2021",
        tracks: 2,
        cover: "images/Lisa/download.jpg",
        type: "Solo Album",
      },
      {
        title: "rosie (Rosé)",
        year: "2024",
        tracks: 12,
        cover: "images/Rose/BLACKPINK ROSÉ ON THE GROUND WALLPAPER.jpg",
        type: "Solo Album",
      },
    ],
  };

  // ====== CREATE PARTICLES ======
  createParticles();

  function createParticles() {
    const particlesContainer = document.getElementById("particles");
    if (!particlesContainer) return;

    for (let i = 0; i < 30; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.width = Math.random() * 10 + 5 + "px";
      particle.style.height = particle.style.width;
      particle.style.animationDelay = Math.random() * 15 + "s";
      particle.style.animationDuration = Math.random() * 10 + 15 + "s";
      particlesContainer.appendChild(particle);
    }
  }

  // ====== RENDER MEMBERS ======
  const membersGrid = document.getElementById("membersGrid");
  if (membersGrid) {
    members.forEach((member, index) => {
      const card = document.createElement("div");
      card.className = "member-card";
      card.style.animationDelay = `${index * 0.1}s`;

      card.innerHTML = `
        <div class="member-image-container">
          <img src="${member.image}" alt="${member.name}" class="member-image" loading="lazy" />
          <div class="member-overlay"></div>
          <div class="member-color-accent" style="background: ${member.color}"></div>
        </div>
        <div class="member-info">
          <h3 class="member-name">${member.name}</h3>
          <p class="member-role">${member.role}</p>
          <p class="member-quote">${member.quote}</p>
        </div>
      `;

      membersGrid.appendChild(card);
    });
  }

  // ====== RENDER VIDEO CARDS ======
  const movieRow = document.getElementById("movieRow");
  if (movieRow) {
    movies.forEach((movie, index) => {
      const container = document.createElement("div");
      container.className = "movie-container";
      container.style.animationDelay = `${index * 0.1}s`;

      container.innerHTML = `
        <img src="${movie.src}" alt="${movie.title}" class="movie" loading="lazy" />
        <div class="movie-overlay">
          <div class="play-button">
            <i class="fas fa-play"></i>
          </div>
          <p class="movie-text">${movie.title}</p>
          <p class="movie-song">${movie.song}</p>
        </div>
      `;

      container.addEventListener("click", function () {
        playVideo(movie.url);
      });

      movieRow.appendChild(container);
    });
  }

  // ====== RENDER SONGS ======
  const songsGrid = document.getElementById("songsGrid");
  const songsTabs = document.querySelectorAll(".songs-tab");
  let currentSongsTab = "group";

  // Audio Player
  let currentAudio = null;
  let currentPlayingCard = null;

  function renderSongs(tab) {
    if (!songsGrid) return;
    songsGrid.innerHTML = "";

    const data = songs[tab];

    if (tab === "albums") {
      // Render album cards
      data.forEach((album, index) => {
        const card = document.createElement("div");
        card.className = "album-card";
        card.style.animationDelay = `${index * 0.1}s`;

        card.innerHTML = `
          <img src="${album.cover}" alt="${album.title}" class="album-cover" loading="lazy" />
          <div class="album-info">
            <h3 class="album-title">${album.title}</h3>
            <p class="album-year">${album.year} • ${album.type}</p>
            <p class="album-tracks"><i class="fas fa-music"></i> ${album.tracks} tracks</p>
          </div>
        `;

        card.addEventListener("click", () => {
          updateNowPlaying(`${album.title} (${album.year})`, false);
        });

        songsGrid.appendChild(card);
      });
    } else {
      // Render song cards
      data.forEach((song, index) => {
        const card = document.createElement("div");
        card.className = "song-card";
        card.style.animationDelay = `${index * 0.05}s`;

        const artistText = song.artist ? song.artist : "BLACKPINK";
        const coverImage = song.artist
          ? song.artist === "Jisoo"
            ? "images/Jisoo/JISOO WALLPAPER.jpg"
            : song.artist === "Jennie"
            ? "images/Jennie/Jennie Solo Wallpaper I xX_RACH_Xx.jpg"
            : song.artist === "Rosé"
            ? "images/Rose/BLACKPINK ROSÉ ON THE GROUND WALLPAPER.jpg"
            : "images/Lisa/download.jpg"
          : "images/Blackpink Logo/BLACKPINK (logo).jpg";

        const hasAudio = song.audio ? true : false;
        const isLocalAudio = song.audio && song.audio.startsWith("audios/");
        const hasSpotify = song.spotify ? true : false;

        // Determine badge text and class
        let badgeText = song.type;
        let badgeClass = "";
        if (isLocalAudio) {
          badgeText = '<i class="fas fa-headphones"></i> Play Now';
          badgeClass = "local-audio";
        } else if (hasSpotify) {
          badgeText = '<i class="fab fa-spotify"></i> Spotify';
          badgeClass = "spotify-link";
        }

        card.innerHTML = `
          <img src="${coverImage}" alt="${
          song.title
        }" class="song-cover" loading="lazy" />
          <div class="song-info">
            <p class="song-title">${song.title}</p>
            <p class="song-artist">${artistText}</p>
            <div class="song-meta">
              <span><i class="fas fa-compact-disc"></i> ${song.album}</span>
              <span><i class="fas fa-clock"></i> ${song.duration}</span>
            </div>
          </div>
          <span class="song-type-badge ${badgeClass}">${badgeText}</span>
          <div class="song-play-btn ${
            isLocalAudio ? "has-audio" : hasSpotify ? "has-spotify" : ""
          }">
            <i class="fas ${
              isLocalAudio
                ? "fa-play"
                : hasSpotify
                ? "fa-external-link-alt"
                : "fa-play"
            }"></i>
          </div>
        `;

        card.addEventListener("click", () => {
          if (hasAudio || hasSpotify) {
            playSong(song, card, artistText, coverImage);
          } else {
            // Just highlight for songs without audio
            document
              .querySelectorAll(".song-card")
              .forEach((c) => c.classList.remove("playing"));
            card.classList.add("playing");
            updateNowPlaying(`${song.title} - ${artistText}`, false);
          }
        });

        songsGrid.appendChild(card);
      });
    }

    // Re-observe for animations
    document.querySelectorAll(".song-card, .album-card").forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 50);
    });
  }

  function playSong(song, card, artistText, coverImage) {
    const playBtn = card.querySelector(".song-play-btn i");

    // Check if audio is a local file (starts with "audios/") or external URL
    const isLocalAudio = song.audio && song.audio.startsWith("audios/");

    // If not local audio, open Spotify
    if (!isLocalAudio && song.spotify) {
      window.open(song.spotify, "_blank");
      updateNowPlaying(`Opening ${song.title} in Spotify...`, false);
      return;
    }

    // If same song is clicked, toggle play/pause
    if (currentPlayingCard === card && currentAudio) {
      if (currentAudio.paused) {
        currentAudio.play();
        playBtn.className = "fas fa-pause";
        updateNowPlaying(`${song.title} - ${artistText}`, true, coverImage);
      } else {
        currentAudio.pause();
        playBtn.className = "fas fa-play";
        updateNowPlaying(`${song.title} - ${artistText} (Paused)`, false);
      }
      return;
    }

    // Stop current audio if playing
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      if (currentPlayingCard) {
        const prevBtn = currentPlayingCard.querySelector(".song-play-btn i");
        if (prevBtn) prevBtn.className = "fas fa-play";
        currentPlayingCard.classList.remove("playing");
      }
    }

    // Create and play new audio
    currentAudio = new Audio(song.audio);
    currentPlayingCard = card;

    // Update UI
    document
      .querySelectorAll(".song-card")
      .forEach((c) => c.classList.remove("playing"));
    card.classList.add("playing");
    playBtn.className = "fas fa-pause";
    updateNowPlaying(`${song.title} - ${artistText}`, true, coverImage);

    // Play audio
    currentAudio.play().catch((e) => {
      console.error("Error playing audio:", e);
      updateNowPlaying(`${song.title} - ${artistText} (Error loading)`, false);
    });

    // When song ends
    currentAudio.addEventListener("ended", () => {
      playBtn.className = "fas fa-play";
      card.classList.remove("playing");
      currentPlayingCard = null;
      updateNowPlaying("Song ended. Select another song.", false);
    });
  }

  function updateNowPlaying(text, isPlaying, coverImage) {
    const nowPlayingText = document.getElementById("nowPlayingText");
    const nowPlayingEl = document.getElementById("nowPlaying");

    if (nowPlayingText) {
      if (isPlaying) {
        nowPlayingText.innerHTML = `
          <span class="now-playing-indicator"><i class="fas fa-volume-up"></i></span>
          <strong>Now Playing:</strong> ${text}
        `;
        nowPlayingEl?.classList.add("is-playing");
      } else {
        nowPlayingText.innerHTML = `<strong>Selected:</strong> ${text}`;
        nowPlayingEl?.classList.remove("is-playing");
      }
    }
  }

  // Initialize songs
  if (songsGrid) {
    renderSongs(currentSongsTab);
  }

  // Songs tab switching
  songsTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      songsTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      currentSongsTab = tab.dataset.tab;
      renderSongs(currentSongsTab);
    });
  });

  // ====== RENDER GALLERY ======
  const photoGallery = document.getElementById("photoGallery");
  if (photoGallery) {
    galleryPhotos.forEach((photo, index) => {
      const item = document.createElement("div");
      item.className = "gallery-item";
      item.dataset.filter = photo.filter;

      item.innerHTML = `
        <img src="${photo.src}" alt="${photo.name}" loading="lazy" />
        <div class="gallery-item-overlay">
          <p class="gallery-item-name">${photo.name}</p>
        </div>
      `;

      item.addEventListener("click", () => openLightbox(index));
      photoGallery.appendChild(item);
    });
  }

  // ====== GALLERY FILTER ======
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;
      const items = document.querySelectorAll(".gallery-item");

      items.forEach((item) => {
        if (filter === "all" || item.dataset.filter === filter) {
          item.style.display = "block";
          item.style.animation = "fadeInUp 0.5s ease forwards";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // ====== LIGHTBOX ======
  let currentLightboxIndex = 0;
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const lightboxClose = document.getElementById("lightboxClose");
  const lightboxPrev = document.getElementById("lightboxPrev");
  const lightboxNext = document.getElementById("lightboxNext");

  function openLightbox(index) {
    currentLightboxIndex = index;
    updateLightbox();
    lightbox.style.display = "flex";
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.style.display = "none";
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function updateLightbox() {
    const visiblePhotos = getVisiblePhotos();
    if (visiblePhotos.length === 0) return;

    const photo = visiblePhotos[currentLightboxIndex];
    lightboxImg.src = photo.src;
    lightboxCaption.textContent = photo.name;
  }

  function getVisiblePhotos() {
    const activeFilter =
      document.querySelector(".filter-btn.active")?.dataset.filter || "all";
    return galleryPhotos.filter(
      (p) => activeFilter === "all" || p.filter === activeFilter
    );
  }

  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightbox)
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });

  if (lightboxPrev)
    lightboxPrev.addEventListener("click", () => {
      const visiblePhotos = getVisiblePhotos();
      currentLightboxIndex =
        (currentLightboxIndex - 1 + visiblePhotos.length) %
        visiblePhotos.length;
      updateLightbox();
    });

  if (lightboxNext)
    lightboxNext.addEventListener("click", () => {
      const visiblePhotos = getVisiblePhotos();
      currentLightboxIndex = (currentLightboxIndex + 1) % visiblePhotos.length;
      updateLightbox();
    });

  // ====== VIDEO MODAL ======
  const exitBtn = document.getElementById("exitButton");
  const videoPlayerEl = document.getElementById("videoPlayer");
  const videoInner = document.querySelector(".video-inner");

  if (exitBtn) {
    exitBtn.addEventListener("click", function (e) {
      e.preventDefault();
      stopAndHideVideo();
    });
  }

  if (videoPlayerEl) {
    videoPlayerEl.addEventListener("click", function (e) {
      if (e.target === videoPlayerEl) stopAndHideVideo();
    });
  }

  if (videoInner) {
    videoInner.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  }

  // ====== THEME TOGGLE ======
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      const pressed = this.getAttribute("aria-pressed") === "true";
      document.body.classList.toggle("dark");
      this.setAttribute("aria-pressed", String(!pressed));

      // Update icon
      const icon = this.querySelector("i");
      if (icon) {
        icon.className = document.body.classList.contains("dark")
          ? "fas fa-sun"
          : "fas fa-moon";
      }

      localStorage.setItem(
        "bp-theme",
        document.body.classList.contains("dark") ? "dark" : "light"
      );
    });
  }

  // Load saved theme
  const saved = localStorage.getItem("bp-theme");
  if (saved === "dark") {
    document.body.classList.add("dark");
    if (themeToggle) {
      themeToggle.setAttribute("aria-pressed", "true");
      const icon = themeToggle.querySelector("i");
      if (icon) icon.className = "fas fa-sun";
    }
  }

  // ====== KEYBOARD NAVIGATION ======
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      stopAndHideVideo();
      closeLightbox();
    }

    if (lightbox && lightbox.getAttribute("aria-hidden") === "false") {
      if (e.key === "ArrowLeft") lightboxPrev?.click();
      if (e.key === "ArrowRight") lightboxNext?.click();
    }
  });

  // ====== SMOOTH SCROLL FOR NAV LINKS ======
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const headerHeight =
          document.querySelector(".site-header")?.offsetHeight || 70;
        const targetPosition = target.offsetTop - headerHeight;
        window.scrollTo({ top: targetPosition, behavior: "smooth" });
      }
    });
  });

  // ====== ACTIVE NAV LINK ON SCROLL ======
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  function updateActiveNav() {
    const scrollPos = window.scrollY + 100;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", updateActiveNav);

  // ====== HEADER SCROLL EFFECT ======
  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }
  });

  // ====== BACK TO TOP BUTTON ======
  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      backToTop?.classList.add("visible");
    } else {
      backToTop?.classList.remove("visible");
    }
  });

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ====== STATS ANIMATION ======
  const statNumbers = document.querySelectorAll(".stat-number");
  let statsAnimated = false;

  function animateStats() {
    statNumbers.forEach((stat) => {
      const target = parseInt(stat.dataset.target);
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;

      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          stat.textContent = target;
          clearInterval(timer);
        } else {
          stat.textContent = Math.floor(current);
        }
      }, 16);
    });
  }

  const statsSection = document.querySelector(".stats-section");
  if (statsSection) {
    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !statsAnimated) {
            statsAnimated = true;
            animateStats();
          }
        });
      },
      { threshold: 0.5 }
    );

    statsObserver.observe(statsSection);
  }

  // ====== INTERSECTION OBSERVER FOR ANIMATIONS ======
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        fadeObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document
    .querySelectorAll(".member-card, .movie-container, .gallery-item")
    .forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      fadeObserver.observe(el);
    });

  // Add visible class styles
  const style = document.createElement("style");
  style.textContent = `
    .member-card.visible, .movie-container.visible, .gallery-item.visible {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(style);

  // ====== MOBILE MENU ======
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navLinksContainer = document.querySelector(".nav-links");

  if (mobileMenuBtn && navLinksContainer) {
    mobileMenuBtn.addEventListener("click", () => {
      navLinksContainer.classList.toggle("mobile-open");
      mobileMenuBtn.classList.toggle("active");
    });
  }

  // ====== QUIZ DATA & FUNCTIONALITY ======
  const quizQuestions = [
    {
      question: "When did BLACKPINK debut?",
      options: ["2015", "2016", "2017", "2018"],
      correct: 1,
    },
    {
      question: "What is BLACKPINK's official fandom name?",
      options: ["ARMY", "BLINK", "ONCE", "STAY"],
      correct: 1,
    },
    {
      question: "Which member was born in New Zealand?",
      options: ["Jisoo", "Jennie", "Rosé", "Lisa"],
      correct: 2,
    },
    {
      question: "What was BLACKPINK's debut song?",
      options: ["DDU-DU DDU-DU", "Kill This Love", "Whistle", "Boombayah"],
      correct: 2,
    },
    {
      question: "Which member is the main dancer?",
      options: ["Jisoo", "Jennie", "Rosé", "Lisa"],
      correct: 3,
    },
    {
      question: "What is Jisoo's solo debut song?",
      options: ["SOLO", "FLOWER", "On The Ground", "LALISA"],
      correct: 1,
    },
    {
      question: "Which brand is Jennie an ambassador for?",
      options: ["Dior", "Chanel", "YSL", "Gucci"],
      correct: 1,
    },
    {
      question: "What year did BLACKPINK perform at Coachella?",
      options: ["2018", "2019", "2020", "2021"],
      correct: 1,
    },
    {
      question: "Which member is known as the 'Visual' of the group?",
      options: ["Jisoo", "Jennie", "Rosé", "Lisa"],
      correct: 0,
    },
    {
      question: "What is Lisa's nationality?",
      options: ["Korean", "Australian", "Thai", "American"],
      correct: 2,
    },
  ];

  let currentQuestion = 0;
  let score = 0;
  let quizActive = false;

  const startQuizBtn = document.getElementById("startQuizBtn");
  const nextQuizBtn = document.getElementById("nextQuizBtn");
  const quizQuestion = document.getElementById("quizQuestion");
  const quizOptions = document.getElementById("quizOptions");
  const quizResult = document.getElementById("quizResult");
  const quizScore = document.getElementById("quizScore");
  const quizProgressBar = document.getElementById("quizProgressBar");

  function startQuiz() {
    currentQuestion = 0;
    score = 0;
    quizActive = true;
    startQuizBtn.style.display = "none";
    nextQuizBtn.style.display = "none";
    quizScore.innerHTML = "";
    showQuestion();
  }

  function showQuestion() {
    if (currentQuestion >= quizQuestions.length) {
      endQuiz();
      return;
    }

    const q = quizQuestions[currentQuestion];
    quizQuestion.textContent = q.question;
    quizOptions.innerHTML = "";
    quizResult.innerHTML = "";
    quizResult.className = "quiz-result";

    quizProgressBar.style.width = `${
      (currentQuestion / quizQuestions.length) * 100
    }%`;

    q.options.forEach((option, index) => {
      const btn = document.createElement("button");
      btn.className = "quiz-option";
      btn.textContent = option;
      btn.addEventListener("click", () => selectAnswer(index, btn));
      quizOptions.appendChild(btn);
    });
  }

  function selectAnswer(index, btn) {
    if (!quizActive) return;

    const q = quizQuestions[currentQuestion];
    const options = quizOptions.querySelectorAll(".quiz-option");

    options.forEach((opt) => opt.classList.add("disabled"));

    if (index === q.correct) {
      btn.classList.add("correct");
      quizResult.textContent = "🎉 Correct!";
      quizResult.classList.add("correct");
      score++;
      createConfetti(20);
    } else {
      btn.classList.add("wrong");
      options[q.correct].classList.add("correct");
      quizResult.textContent = `❌ Wrong! The answer is "${
        q.options[q.correct]
      }"`;
      quizResult.classList.add("wrong");
    }

    nextQuizBtn.style.display = "inline-flex";
  }

  function nextQuestion() {
    currentQuestion++;
    nextQuizBtn.style.display = "none";
    showQuestion();
  }

  function endQuiz() {
    quizActive = false;
    quizProgressBar.style.width = "100%";
    quizQuestion.textContent = "Quiz Complete!";
    quizOptions.innerHTML = "";
    quizResult.innerHTML = "";

    const percentage = Math.round((score / quizQuestions.length) * 100);
    let message = "";
    let emoji = "";

    if (percentage === 100) {
      message = "Perfect! You're a TRUE BLINK! 💗";
      emoji = "🏆";
    } else if (percentage >= 80) {
      message = "Amazing! You know your BLACKPINK! 🖤";
      emoji = "🌟";
    } else if (percentage >= 60) {
      message = "Good job! Keep stanning! 💕";
      emoji = "👏";
    } else {
      message = "Time to watch more MVs! 💪";
      emoji = "📺";
    }

    quizScore.innerHTML = `
      <span>${emoji} ${score}/${quizQuestions.length}</span>
      ${message}
    `;

    startQuizBtn.textContent = "Play Again";
    startQuizBtn.innerHTML = '<i class="fas fa-redo"></i> Play Again';
    startQuizBtn.style.display = "inline-flex";
    nextQuizBtn.style.display = "none";

    if (percentage >= 80) {
      createConfetti(50);
    }
  }

  if (startQuizBtn) {
    startQuizBtn.addEventListener("click", startQuiz);
  }

  if (nextQuizBtn) {
    nextQuizBtn.addEventListener("click", nextQuestion);
  }

  // ====== NEWSLETTER FORM ======
  const newsletterForm = document.getElementById("newsletterForm");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("emailInput").value;

      if (email) {
        showToast("success", `Thanks for subscribing, BLINK! 💗`);
        newsletterForm.reset();
        createConfetti(30);
      }
    });
  }

  // ====== FLOATING HEARTS FOR NEWSLETTER ======
  const floatingHearts = document.getElementById("floatingHearts");

  if (floatingHearts) {
    for (let i = 0; i < 15; i++) {
      const heart = document.createElement("span");
      heart.className = "floating-heart";
      heart.innerHTML = "💗";
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.top = `${Math.random() * 100}%`;
      heart.style.fontSize = `${Math.random() * 20 + 15}px`;
      heart.style.animationDelay = `${Math.random() * 5}s`;
      heart.style.animationDuration = `${Math.random() * 5 + 5}s`;
      floatingHearts.appendChild(heart);
    }
  }

  // ====== SCROLL PROGRESS BAR ======
  const scrollProgress = document.createElement("div");
  scrollProgress.className = "scroll-progress";
  document.body.appendChild(scrollProgress);

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = `${scrollPercent}%`;
  });

  // ====== CONFETTI EFFECT ======
  function createConfetti(count = 50) {
    const colors = [
      "#ff66b2",
      "#ff99cc",
      "#ffb3d9",
      "#ff4757",
      "#ffa502",
      "#2ed573",
      "#ffffff",
    ];

    for (let i = 0; i < count; i++) {
      const confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.left = `${Math.random() * 100}vw`;
      confetti.style.top = `-20px`;
      confetti.style.background =
        colors[Math.floor(Math.random() * colors.length)];
      confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
      confetti.style.animationDuration = `${Math.random() * 2 + 2}s`;

      if (Math.random() > 0.5) {
        confetti.style.borderRadius = "50%";
      }

      document.body.appendChild(confetti);

      setTimeout(() => confetti.remove(), 3000);
    }
  }

  // ====== TOAST NOTIFICATION ======
  function showToast(type, message) {
    const toast = document.createElement("div");
    toast.className = "toast";

    const iconClass =
      type === "success"
        ? "fa-check"
        : type === "error"
        ? "fa-times"
        : "fa-info";

    toast.innerHTML = `
      <div class="toast-icon ${type}">
        <i class="fas ${iconClass}"></i>
      </div>
      <span class="toast-message">${message}</span>
    `;

    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add("show"), 100);
    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 400);
    }, 3000);
  }

  // ====== CURSOR TRAIL EFFECT ======
  let lastCursorTime = 0;

  document.addEventListener("mousemove", (e) => {
    const now = Date.now();
    if (now - lastCursorTime < 50) return;
    lastCursorTime = now;

    const trail = document.createElement("div");
    trail.className = "cursor-trail active";
    trail.style.left = `${e.clientX}px`;
    trail.style.top = `${e.clientY}px`;

    document.body.appendChild(trail);

    setTimeout(() => trail.remove(), 500);
  });

  // ====== TIMELINE ANIMATION ======
  const timelineItems = document.querySelectorAll(".timeline-item");

  const timelineObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateX(0)";
        }
      });
    },
    { threshold: 0.3 }
  );

  timelineItems.forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform =
      index % 2 === 0 ? "translateX(50px)" : "translateX(-50px)";
    item.style.transition = `all 0.6s ease ${index * 0.2}s`;
    timelineObserver.observe(item);
  });

  // ====== FACT CARDS ANIMATION ======
  const factCards = document.querySelectorAll(".fact-card");

  factCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-10px) scale(1.02) rotateY(5deg)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0) scale(1) rotateY(0)";
    });
  });

  // ====== PAGE LOADER ======
  window.addEventListener("load", () => {
    const loader = document.querySelector(".page-loader");
    if (loader) {
      setTimeout(() => {
        loader.classList.add("hidden");
      }, 1500);
    }
  });

  // ====== TYPING EFFECT FOR HERO ======
  const heroTitle = document.querySelector(".title-highlight");
  if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = "";
    heroTitle.style.borderRight = "3px solid var(--accent)";

    let i = 0;
    function typeWriter() {
      if (i < text.length) {
        heroTitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      } else {
        heroTitle.style.borderRight = "none";
      }
    }

    setTimeout(typeWriter, 1000);
  }

  // ====== PARALLAX EFFECT ON SCROLL ======
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    const hero = document.querySelector(".hero");
    if (hero) {
      hero.style.backgroundPositionY = `${scrollY * 0.5}px`;
    }

    const particles = document.querySelectorAll(".particle");
    particles.forEach((p, i) => {
      const speed = ((i % 3) + 1) * 0.1;
      p.style.transform = `translateY(${scrollY * speed}px)`;
    });
  });

  // ====== EASTER EGG - Konami Code ======
  const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "KeyB",
    "KeyA",
  ];
  let konamiIndex = 0;

  document.addEventListener("keydown", (e) => {
    if (e.code === konamiCode[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiCode.length) {
        showToast("info", "🎉 BLACKPINK IN YOUR AREA! 💗🖤");
        createConfetti(100);
        konamiIndex = 0;

        // Play a fun animation
        document.body.style.animation = "rainbow-bg 2s ease";
        setTimeout(() => {
          document.body.style.animation = "";
        }, 2000);
      }
    } else {
      konamiIndex = 0;
    }
  });

  // Add rainbow animation style
  const rainbowStyle = document.createElement("style");
  rainbowStyle.textContent = `
    @keyframes rainbow-bg {
      0% { filter: hue-rotate(0deg); }
      50% { filter: hue-rotate(180deg); }
      100% { filter: hue-rotate(360deg); }
    }
  `;
  document.head.appendChild(rainbowStyle);

  // ====== MUSIC PLAYER WIDGET ======
  initMusicPlayerWidget();

  // ====== MUSIC WIDGET (Now Playing Bottom) ======
  initMusicWidget();

  // ====== COUNTDOWN TIMER ======
  initCountdown();

  // ====== BIAS PICKER ======
  initBiasPicker();

  // ====== AWARDS SECTION ======
  initAwardsSection();

  // ====== CONCERT EXPERIENCE ======
  initConcertExperience();

  // ====== FLOATING HEARTS ======
  createFloatingHearts();
});

// ====== MUSIC PLAYER WIDGET FUNCTIONS ======
function initMusicPlayerWidget() {
  const playerWidget = document.getElementById("musicPlayerWidget");
  const playerToggle = document.querySelector(".player-toggle");
  const playlistItems = document.querySelectorAll(".playlist-item");
  const playBtn = document.querySelector(".player-btn.play-btn");
  const prevBtn = document.querySelector(".player-btn.prev-btn");
  const nextBtn = document.querySelector(".player-btn.next-btn");

  if (!playerWidget) return;

  // Toggle player visibility
  if (playerToggle) {
    playerToggle.addEventListener("click", () => {
      playerWidget.classList.toggle("active");
      const icon = playerToggle.querySelector("i");
      if (playerWidget.classList.contains("active")) {
        icon.className = "fas fa-times";
      } else {
        icon.className = "fas fa-music";
      }
    });
  }

  let isPlaying = false;
  let currentTrack = 0;

  // Play/Pause button
  if (playBtn) {
    playBtn.addEventListener("click", () => {
      isPlaying = !isPlaying;
      const icon = playBtn.querySelector("i");
      icon.className = isPlaying ? "fas fa-pause" : "fas fa-play";

      if (isPlaying) {
        showToast("success", "🎵 Now Playing: BLACKPINK Mix");
      }
    });
  }

  // Playlist item clicks
  playlistItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      playlistItems.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");
      currentTrack = index;

      const trackName = item.querySelector(".playlist-item-name").textContent;
      const playerTrackName = document.querySelector(".player-track-name");
      if (playerTrackName) {
        playerTrackName.textContent = trackName;
      }

      isPlaying = true;
      const playIcon = playBtn?.querySelector("i");
      if (playIcon) playIcon.className = "fas fa-pause";

      showToast("success", `🎵 Now Playing: ${trackName}`);
    });
  });

  // Previous/Next buttons
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentTrack =
        (currentTrack - 1 + playlistItems.length) % playlistItems.length;
      playlistItems[currentTrack].click();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentTrack = (currentTrack + 1) % playlistItems.length;
      playlistItems[currentTrack].click();
    });
  }

  // Progress bar interaction
  const progressBar = document.querySelector(".player-progress-bar");
  if (progressBar) {
    progressBar.addEventListener("click", (e) => {
      const rect = progressBar.getBoundingClientRect();
      const percent = ((e.clientX - rect.left) / rect.width) * 100;
      const progressFill = document.querySelector(".player-progress-fill");
      if (progressFill) {
        progressFill.style.width = `${percent}%`;
      }
    });
  }

  // Auto-show player after 5 seconds
  setTimeout(() => {
    playerWidget.classList.add("active");
    const icon = playerToggle?.querySelector("i");
    if (icon) icon.className = "fas fa-times";
  }, 5000);
}

// ====== COUNTDOWN TIMER FUNCTIONS ======
function initCountdown() {
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");
  const countdownBtn = document.querySelector(".countdown-btn");

  if (!daysEl) return;

  // Set target date - BLACKPINK World Tour 2025 (example: June 1, 2025)
  const targetDate = new Date("2025-06-01T19:00:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      daysEl.textContent = "00";
      hoursEl.textContent = "00";
      minutesEl.textContent = "00";
      secondsEl.textContent = "00";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = days.toString().padStart(2, "0");
    hoursEl.textContent = hours.toString().padStart(2, "0");
    minutesEl.textContent = minutes.toString().padStart(2, "0");
    secondsEl.textContent = seconds.toString().padStart(2, "0");

    // Add pulse animation when numbers change
    [daysEl, hoursEl, minutesEl, secondsEl].forEach((el) => {
      el.style.animation = "none";
      el.offsetHeight; // Trigger reflow
      el.style.animation = "countPulse 0.5s ease";
    });
  }

  // Update every second
  updateCountdown();
  setInterval(updateCountdown, 1000);

  // Countdown button click
  if (countdownBtn) {
    countdownBtn.addEventListener("click", () => {
      showToast("success", "🔔 You'll be notified about BLACKPINK events!");
      countdownBtn.innerHTML = '<i class="fas fa-check"></i> Subscribed!';
      countdownBtn.style.background = "#00c853";

      setTimeout(() => {
        countdownBtn.innerHTML = '<i class="fas fa-bell"></i> Get Notified';
        countdownBtn.style.background = "";
      }, 3000);
    });
  }

  // Add pulse animation style
  const countStyle = document.createElement("style");
  countStyle.textContent = `
    @keyframes countPulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.1); }
      100% { transform: scale(1); }
    }
  `;
  document.head.appendChild(countStyle);
}

// ====== MUSIC WIDGET (Now Playing) FUNCTIONS ======
function initMusicWidget() {
  const musicWidget = document.getElementById("musicWidget");
  const musicWidgetFab = document.getElementById("musicWidgetFab");
  const widgetClose = document.getElementById("widgetClose");
  const playPauseWidget = document.getElementById("playPauseWidget");
  const prevTrack = document.getElementById("prevTrack");
  const nextTrack = document.getElementById("nextTrack");
  const widgetTitle = document.getElementById("widgetTitle");
  const widgetArtist = document.getElementById("widgetArtist");
  const widgetCover = document.getElementById("widgetCover");
  const widgetProgress = document.getElementById("widgetProgress");

  if (!musicWidget) return;

  // Playlist
  const playlist = [
    { title: "Pink Venom", artist: "BLACKPINK", duration: 187 },
    { title: "Shut Down", artist: "BLACKPINK", duration: 178 },
    { title: "How You Like That", artist: "BLACKPINK", duration: 181 },
    { title: "DDU-DU DDU-DU", artist: "BLACKPINK", duration: 209 },
    { title: "Kill This Love", artist: "BLACKPINK", duration: 190 },
    { title: "FLOWER", artist: "JISOO", duration: 195 },
    { title: "SOLO", artist: "JENNIE", duration: 169 },
    { title: "On The Ground", artist: "ROSÉ", duration: 168 },
    { title: "MONEY", artist: "LISA", duration: 169 },
  ];

  let currentIndex = 0;
  let isPlaying = false;
  let progress = 0;
  let progressInterval;

  // Open widget panel
  if (musicWidgetFab) {
    musicWidgetFab.addEventListener("click", () => {
      musicWidget.classList.add("expanded");
    });
  }

  // Close widget panel
  if (widgetClose) {
    widgetClose.addEventListener("click", () => {
      musicWidget.classList.remove("expanded");
    });
  }

  // Update display
  function updateDisplay() {
    const track = playlist[currentIndex];
    if (widgetTitle) widgetTitle.textContent = track.title;
    if (widgetArtist) widgetArtist.textContent = track.artist;
  }

  // Play/Pause
  function togglePlay() {
    isPlaying = !isPlaying;

    if (playPauseWidget) {
      const icon = playPauseWidget.querySelector("i");
      icon.className = isPlaying ? "fas fa-pause" : "fas fa-play";
    }

    if (isPlaying) {
      musicWidget.classList.add("playing");
      startProgress();
      showToast("success", `🎵 Now Playing: ${playlist[currentIndex].title}`);
    } else {
      musicWidget.classList.remove("playing");
      stopProgress();
    }
  }

  // Progress bar
  function startProgress() {
    stopProgress();
    const track = playlist[currentIndex];
    const increment = 100 / track.duration;

    progressInterval = setInterval(() => {
      progress += increment;
      if (progress >= 100) {
        progress = 0;
        nextSong();
      }
      if (widgetProgress) {
        widgetProgress.style.width = `${progress}%`;
      }
    }, 1000);
  }

  function stopProgress() {
    clearInterval(progressInterval);
  }

  // Next/Previous
  function nextSong() {
    currentIndex = (currentIndex + 1) % playlist.length;
    progress = 0;
    updateDisplay();
    if (isPlaying) {
      startProgress();
      showToast("info", `⏭️ ${playlist[currentIndex].title}`);
    }
  }

  function prevSong() {
    currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
    progress = 0;
    updateDisplay();
    if (isPlaying) {
      startProgress();
      showToast("info", `⏮️ ${playlist[currentIndex].title}`);
    }
  }

  // Event listeners
  if (playPauseWidget) {
    playPauseWidget.addEventListener("click", (e) => {
      e.stopPropagation();
      togglePlay();
    });
  }

  if (nextTrack) {
    nextTrack.addEventListener("click", (e) => {
      e.stopPropagation();
      nextSong();
    });
  }

  if (prevTrack) {
    prevTrack.addEventListener("click", (e) => {
      e.stopPropagation();
      prevSong();
    });
  }

  // Initialize display
  updateDisplay();
}

// ====== BIAS PICKER FUNCTIONS ======
function initBiasPicker() {
  const biasOptions = document.querySelectorAll(".bias-option");
  const biasResult = document.getElementById("biasResult");

  if (!biasOptions.length) return;

  // Vote counts stored in localStorage
  let votes = JSON.parse(localStorage.getItem("blackpinkVotes")) || {
    jisoo: 2847,
    jennie: 3201,
    rose: 2543,
    lisa: 3102,
  };

  function updateVoteBars() {
    const total = Object.values(votes).reduce((a, b) => a + b, 0);

    biasOptions.forEach((option) => {
      const member = option.dataset.member;
      const percentage = Math.round((votes[member] / total) * 100);
      const bar = option.querySelector(".bias-bar");
      const percentText = option.querySelector(".bias-percent");

      if (bar) bar.style.setProperty("--percentage", `${percentage}%`);
      if (percentText) percentText.textContent = `${percentage}%`;
    });
  }

  // Initialize vote bars
  updateVoteBars();

  biasOptions.forEach((option) => {
    option.addEventListener("click", () => {
      const member = option.dataset.member;
      const memberName = member.charAt(0).toUpperCase() + member.slice(1);

      // Check if already voted
      const hasVoted = localStorage.getItem("blackpinkHasVoted");

      if (hasVoted) {
        showToast(
          "info",
          `You already voted! Your bias is ${localStorage.getItem(
            "blackpinkBias"
          )} 💗`
        );
        return;
      }

      // Add vote
      votes[member]++;
      localStorage.setItem("blackpinkVotes", JSON.stringify(votes));
      localStorage.setItem("blackpinkHasVoted", "true");
      localStorage.setItem("blackpinkBias", memberName);

      // Update bars
      updateVoteBars();

      // Add selected class
      biasOptions.forEach((o) => o.classList.remove("selected"));
      option.classList.add("selected");

      // Show result
      if (biasResult) {
        biasResult.innerHTML = `
          <div class="bias-result-content">
            <i class="fas fa-heart" style="color: var(--pink); font-size: 2rem;"></i>
            <h3>💗 ${memberName} is your bias! 💗</h3>
            <p>You're officially part of the ${memberName} squad! Thanks for voting!</p>
          </div>
        `;
        biasResult.classList.add("show");
      }

      showToast("success", `💗 You voted for ${memberName}!`);
      createConfetti(50);
    });

    // Hover effects
    option.addEventListener("mouseenter", () => {
      option.style.transform = "scale(1.05)";
    });

    option.addEventListener("mouseleave", () => {
      if (!option.classList.contains("selected")) {
        option.style.transform = "";
      }
    });
  });

  // Show existing vote if user already voted
  const existingBias = localStorage.getItem("blackpinkBias");
  if (existingBias) {
    const selectedOption = document.querySelector(
      `.bias-option[data-member="${existingBias.toLowerCase()}"]`
    );
    if (selectedOption) {
      selectedOption.classList.add("selected");
      if (biasResult) {
        biasResult.innerHTML = `
          <div class="bias-result-content">
            <i class="fas fa-heart" style="color: var(--pink); font-size: 2rem;"></i>
            <h3>💗 ${existingBias} is your bias! 💗</h3>
            <p>You're officially part of the ${existingBias} squad!</p>
          </div>
        `;
        biasResult.classList.add("show");
      }
    }
  }
}

// ====== AWARDS SECTION FUNCTIONS ======
function initAwardsSection() {
  const awardCards = document.querySelectorAll(".award-card");

  if (!awardCards.length) return;

  // Add hover effects and animations
  awardCards.forEach((card, index) => {
    // Staggered entrance animation
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";

    setTimeout(() => {
      card.style.transition = "all 0.6s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 100);

    // Interactive hover effects
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-10px) scale(1.05)";
      const icon = card.querySelector(".award-icon");
      if (icon) {
        icon.style.transform = "scale(1.2) rotate(10deg)";
      }
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0) scale(1)";
      const icon = card.querySelector(".award-icon");
      if (icon) {
        icon.style.transform = "";
      }
    });

    // Click effect
    card.addEventListener("click", () => {
      const title = card.querySelector("h3")?.textContent;
      const description = card.querySelector("p")?.textContent;
      showToast("success", `🏆 ${title}: ${description}`);

      // Pulse animation
      card.style.animation = "pulse 0.5s ease";
      setTimeout(() => {
        card.style.animation = "";
      }, 500);
    });
  });

  // Intersection Observer for scroll animations
  const awardsSection = document.querySelector(".awards-section");
  if (awardsSection) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            awardCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("visible");
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(awardsSection);
  }
}

// ====== CONCERT EXPERIENCE FUNCTIONS ======
function initConcertExperience() {
  const watchBtn = document.getElementById("watchConcertBtn");
  const viewSetlistBtn = document.getElementById("viewSetlistBtn");
  const effectBtns = document.querySelectorAll(".effect-btn");
  const setlistPanel = document.querySelector(".setlist-panel");
  const setlistClose = document.querySelector(".setlist-close");
  const setlistItems = document.querySelectorAll(".setlist-item");
  const crowdCheers = document.querySelector(".crowd-cheers");
  const lightstickCursor = document.querySelector(".lightstick-cursor");
  const concertScreen = document.getElementById("concertScreen");
  const concertVideo = document.getElementById("concertVideo");
  const stageOverlay = document.getElementById("stageOverlay");

  let lightstickMode = false;
  let cheerInterval = null;
  let isPlaying = false;

  // Watch Now button - play/pause video
  if (watchBtn && concertVideo && concertScreen) {
    watchBtn.addEventListener("click", () => {
      if (!isPlaying) {
        concertVideo.play();
        concertScreen.classList.add("playing");
        watchBtn.innerHTML = '<i class="fas fa-pause"></i> Pause';
        isPlaying = true;
        showToast("success", "🎬 Now playing: Virtual Concert!");
        createConfetti(30);
      } else {
        concertVideo.pause();
        concertScreen.classList.remove("playing");
        watchBtn.innerHTML = '<i class="fas fa-play"></i> Watch Now';
        isPlaying = false;
      }
    });

    // Video ended event
    concertVideo.addEventListener("ended", () => {
      concertScreen.classList.remove("playing");
      watchBtn.innerHTML = '<i class="fas fa-play"></i> Watch Now';
      isPlaying = false;
      showToast("info", "🎵 Performance ended!");

      // Auto-play next song from setlist
      const currentPlaying = document.querySelector(".setlist-item.playing");
      if (currentPlaying) {
        const nextItem = currentPlaying.nextElementSibling;
        if (nextItem && nextItem.classList.contains("setlist-item")) {
          nextItem.click();
        }
      }
    });
  }

  // View Setlist button
  if (viewSetlistBtn && setlistPanel) {
    viewSetlistBtn.addEventListener("click", () => {
      setlistPanel.classList.add("active");
    });
  }

  // Effect buttons
  effectBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      const effect = btn.dataset.effect;

      switch (effect) {
        case "lightstick":
          lightstickMode = !lightstickMode;
          if (lightstickCursor) {
            lightstickCursor.classList.toggle("active", lightstickMode);
          }
          if (lightstickMode) {
            document.body.style.cursor = "none";
            showToast("success", "🔦 Lightstick mode ON! Wave it around!");
          } else {
            document.body.style.cursor = "";
            showToast("info", "Lightstick mode OFF");
          }
          break;

        case "cheers":
          if (btn.classList.contains("active")) {
            if (crowdCheers) crowdCheers.classList.add("active");
            cheerInterval = setInterval(createCheerEmoji, 200);
            showToast("success", "📣 Crowd cheers ON!");
            // Play a quick audio cue if available
          } else {
            if (crowdCheers) crowdCheers.classList.remove("active");
            clearInterval(cheerInterval);
            showToast("info", "Crowd cheers OFF");
          }
          break;

        case "confetti":
          createConfetti(100);
          showToast("success", "🎊 Confetti time!");
          btn.classList.remove("active");
          break;
      }
    });
  });

  // Setlist panel close
  if (setlistClose) {
    setlistClose.addEventListener("click", () => {
      if (setlistPanel) setlistPanel.classList.remove("active");
    });
  }

  // Setlist items - click to play video
  setlistItems.forEach((item) => {
    item.addEventListener("click", () => {
      const videoSrc = item.dataset.video;
      const songName = item.querySelector(".setlist-song-name").textContent;

      // Update playing state
      setlistItems.forEach((i) => i.classList.remove("playing"));
      item.classList.add("playing");

      // Change video source and play
      if (videoSrc && concertVideo && concertScreen) {
        concertVideo.src = videoSrc;
        concertVideo.load();
        concertVideo.play();
        concertScreen.classList.add("playing");
        if (watchBtn) watchBtn.innerHTML = '<i class="fas fa-pause"></i> Pause';
        isPlaying = true;
        showToast("success", `🎵 Now Playing: ${songName}`);
      }
    });
  });

  // Lightstick cursor movement
  if (lightstickCursor) {
    document.addEventListener("mousemove", (e) => {
      if (lightstickMode) {
        lightstickCursor.style.left = e.clientX + "px";
        lightstickCursor.style.top = e.clientY + "px";

        // Add glow effect on click
        if (e.buttons === 1) {
          createLightstickGlow(e.clientX, e.clientY);
        }
      }
    });

    document.addEventListener("click", (e) => {
      if (lightstickMode) {
        createLightstickGlow(e.clientX, e.clientY);
      }
    });
  }

  function createCheerEmoji() {
    if (!crowdCheers) return;

    const emojis = [
      "💗",
      "🖤",
      "💕",
      "🔥",
      "⭐",
      "✨",
      "💖",
      "🎵",
      "🎶",
      "👏",
      "🙌",
      "💜",
    ];
    const emoji = document.createElement("span");
    emoji.className = "cheer-emoji";
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.random() * window.innerWidth + "px";
    emoji.style.bottom = "0";
    emoji.style.fontSize = 1.5 + Math.random() * 1.5 + "rem";

    crowdCheers.appendChild(emoji);

    setTimeout(() => emoji.remove(), 2000);
  }

  function createLightstickGlow(x, y) {
    const glow = document.createElement("div");
    glow.className = "lightstick-glow";
    glow.style.left = x + "px";
    glow.style.top = y + "px";
    document.body.appendChild(glow);

    setTimeout(() => glow.remove(), 500);
  }
}

// ====== FLOATING HEARTS ======
function createFloatingHearts() {
  const floatingElements = document.querySelector(".floating-elements");
  if (!floatingElements) return;

  const hearts = ["💗", "🖤", "💕", "💖", "✨"];

  for (let i = 0; i < 15; i++) {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDelay = Math.random() * 15 + "s";
    heart.style.animationDuration = 15 + Math.random() * 10 + "s";
    floatingElements.appendChild(heart);
  }
}

// ====== VIDEO FUNCTIONS ======
function playVideo(url) {
  const videoPlayer = document.getElementById("videoPlayer");
  const movieVideo = document.getElementById("movieVideo");

  movieVideo.src = url;
  movieVideo.currentTime = 0;
  movieVideo.load();
  movieVideo.play().catch(() => {});
  videoPlayer.style.display = "flex";
  videoPlayer.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function stopAndHideVideo() {
  const videoPlayer = document.getElementById("videoPlayer");
  const movieVideo = document.getElementById("movieVideo");

  if (movieVideo) {
    movieVideo.pause();
    try {
      movieVideo.currentTime = 0;
    } catch (e) {}
    movieVideo.removeAttribute("src");
    movieVideo.load();
  }

  videoPlayer.style.display = "none";
  videoPlayer.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
