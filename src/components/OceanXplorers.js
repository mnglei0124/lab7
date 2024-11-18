export function OceanXplorers() {
  const section = document.createElement("section");
  section.className =
    "oceanx-section position-relative vh-100 d-flex align-items-center overflow-hidden";

  section.innerHTML = `
    <!-- Background video container -->
    <div class="background-media position-absolute w-100 h-100">
      <div id="youtube-player"></div>
    </div>

    <!-- Content overlay -->
    <div class="container position-relative z-1 text-white text-center">
      <h2 class="display-1 mb-4">OCEANXPLORERS</h2>
      <p class="lead mb-5 mx-auto" style="max-width: 800px;">
        In this series from James Cameron, go aboard the OceanXplorer—the most advanced
        research vessel ever built—to investigate the farthest frontiers of the world's oceans.
      </p>
      <a href="#" class="btn btn-warning text-uppercase px-4 py-2">
        Stream Now
      </a>
    </div>

    <!-- Play/Pause button -->
    <button class="btn btn-link position-absolute bottom-0 start-0 m-4 text-white" id="playPauseBtn">
      <i class="bi bi-pause-circle fs-1"></i>
    </button>
  `;

  const styles = document.createElement("style");
  styles.textContent = `
    .oceanx-section {
      background: black;
    }
    .oceanx-section .background-media {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100vw;
      height: 100vh;
      pointer-events: none;
    }
    .oceanx-section #youtube-player {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100vw;
      height: 100vh;
      pointer-events: none;
    }
    .oceanx-section #youtube-player iframe {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 150vw; /* Increased width to ensure full coverage */
      height: 150vh; /* Increased height to ensure full coverage */
      pointer-events: none;
    }
  `;
  document.head.appendChild(styles);

  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  window.onYouTubeIframeAPIReady = function () {
    const player = new YT.Player("youtube-player", {
      videoId: "SKVV4dvH2Iw",
      playerVars: {
        autoplay: 1,
        controls: 0,
        loop: 1,
        mute: 1,
        playlist: "SKVV4dvH2Iw",
        playsinline: 1,
        rel: 0,
        showinfo: 0,
        modestbranding: 1,
      },
      events: {
        onReady: onPlayerReady,
      },
    });

    const playPauseBtn = document.getElementById("playPauseBtn");
    const playPauseIcon = playPauseBtn.querySelector("i");
    let isPlaying = true;

    playPauseBtn.addEventListener("click", () => {
      if (isPlaying) {
        player.pauseVideo();
        playPauseIcon.classList.replace("bi-pause-circle", "bi-play-circle");
      } else {
        player.playVideo();
        playPauseIcon.classList.replace("bi-play-circle", "bi-pause-circle");
      }
      isPlaying = !isPlaying;
    });
  };

  function onPlayerReady(event) {
    event.target.playVideo();
  }

  return section;
}
