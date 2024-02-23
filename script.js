

document.addEventListener("DOMContentLoaded", function() {
    const movies = [
        { src: "images/Jisoo/JISOO WALLPAPER.jpg", title: "Jisoo", url: "videos/Jisoo/JISOO - ‘꽃(FLOWER)’ M_V.mp4"},
        { src: "images/Jennie/Jennie Solo Wallpaper I xX_RACH_Xx.jpg", title: "Jennie", url: "videos/Jennie/JENNIE - 'SOLO' M_V.mp4"},
        { src: "images/Rose/BLACKPINK ROSÉ ON THE GROUND WALLPAPER.jpg", title: "Rosé", url: "videos/Rose/ROSÉ - 'On The Ground' M_V.mp4"},
        { src: "images/Lisa/download.jpg", title: "Lisa", url: "videos/Lisa/LISA - 'MONEY' EXCLUSIVE PERFORMANCE VIDEO.mp4"},
    ];

    const movieRow = document.getElementById('movieRow');

    movies.forEach(movie => {
        const container = document.createElement('div');
        container.className = 'movie-container';

        const img = document.createElement('img');
        img.src = movie.src;
        img.alt = movie.title;
        img.className = 'movie';

        const text = document.createElement('p');
        text.innerText = movie.title;
        text.className = 'movie-text';

        container.appendChild(img);
        container.appendChild(text);

        container.addEventListener('click', function() {
            playVideo(movie.url);
        });

        movieRow.appendChild(container);
    });

    // Exit button functionality
    document.getElementById('exitButton').addEventListener('click', function() {
        stopAndHideVideo();
    });
});

function playVideo(url) {
    const videoPlayer = document.getElementById('videoPlayer');
    const movieVideo = document.getElementById('movieVideo');
    movieVideo.src = url;
    movieVideo.play();
    videoPlayer.style.display = 'block'; // Show the video player
}

function stopAndHideVideo() {
    const videoPlayer = document.getElementById('videoPlayer');
    const movieVideo = document.getElementById('movieVideo');
    movieVideo.pause(); // Stop the video
    movieVideo.currentTime = 0; // Reset the video to start
    videoPlayer.style.display = 'none'; // Hide the video player
}
