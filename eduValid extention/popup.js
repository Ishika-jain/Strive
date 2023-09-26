document.addEventListener("DOMContentLoaded", function () {
  const toggleElementsButton = document.getElementById("showHacks");

  toggleElementsButton.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const tab = tabs[0];
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: toggleElements,
      });
    });
  });
});

function toggleElements() {
  const shortsElements = document.querySelectorAll("ytd-rich-section-renderer");
  shortsElements.forEach(function (section) {
    section.style.display = section.style.display === "none" ? "block" : "none";
  });

  const homepageElements = document.querySelectorAll("ytd-browse");
  homepageElements.forEach(function (section) {
    section.style.display = section.style.display === "none" ? "block" : "none";
  });

  const commentSections = document.querySelectorAll("ytd-comments");
  commentSections.forEach(function (section) {
    section.style.display = section.style.display === "none" ? "block" : "none";
  });

  const sidebar = document.getElementById("secondary");
  sidebar.style.display = sidebar.style.display === "none" ? "block" : "none";
}



function getWatchTime() {
  const videoElement = document.querySelector("video");
  let watched = videoElement.currentTime;

  if (videoElement) {
    return videoElement.currentTime;
  }

  return 0;
}

function scrapeDuration(watchTime) {
  const durationElement = document.querySelector(
    'span[class^="ytp-time-duration"]'
  );
  const timeString = durationElement.textContent;
  var timeParts = timeString.split(":");
  console.log(timeParts);

  if (timeParts.length == 3) {
    var hours = parseInt(timeParts[0], 10) || 0;

    var minutes = parseInt(timeParts[1], 10) || 0;
    var seconds = parseInt(timeParts[2], 10) || 0;
  } else if (timeParts.length == 2) {
    var hours = 0;

    var minutes = parseInt(timeParts[0], 10) || 0;
    var seconds = parseInt(timeParts[1], 10) || 0;
  } else {
    var hours = 0;

    var minutes = 0;
    var seconds = parseInt(timeParts[0], 10) || 0;
  }

  var totalSeconds = hours * 3600 + minutes * 60 + seconds;
  return totalSeconds;
}

function compare(watchTime, duration) {
  if (watchTime > 0.5 * duration) {
    console.log("jiok");
    const canvas = document.createElement("canvas");
    const mcanvas = document.querySelector(".ytd-app");
    mcanvas.style.position = "fixed";
    mcanvas.style.top = "0";
    mcanvas.style.left = "0";
    mcanvas.style.zIndex = "1";
    mcanvas.appendChild(canvas);
    const context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const pieces = [];
    const numberOfPieces = 100;
    const colors = [
      "#FF5722",
      "#FFC107",
      "#FFEB3B",
      "#4CAF50",
      "#03A9F4",
      "#9C27B0",
    ];
    function randomColor(colors) {
      return colors[Math.floor(Math.random() * colors.length)];
    }
    function Piece(x, y) {
      this.x = x;
      this.y = y;
      this.radius = Math.random() + 3;
      this.color = randomColor(colors);
      this.rotation = Math.random() * 360;
      this.rotationSpeed = Math.random() * 2 - 1;
      this.velocity = {
        x: (Math.random() - 0.5) * 8,
        y: Math.random() * 3 + 2,
      };
      this.isFalling = false;
    }
    Piece.prototype = {
      update: function () {
        this.rotation += this.rotationSpeed;
        this.x += this.velocity.x;
        this.y += this.velocity.y;

        if (this.y + this.radius > canvas.height) {
          this.isFalling = true;
        }
      },
      draw: function (context) {
        context.save();
        context.translate(this.x, this.y);
        context.rotate((this.rotation * Math.PI) / 180);
        context.fillStyle = this.color;
        context.fillRect(
          -this.radius,
          -this.radius,
          this.radius * 2,
          this.radius * 2
        );
        context.restore();
      },
    };
    function createPieces() {
      const x = Math.random() * canvas.width;
      const y = -20;
      for (let i = 0; i < numberOfPieces; i++) {
        pieces.push(new Piece(x, y));
      }
    }

    function updatePieces() {
      pieces.forEach(function (piece, i) {
        piece.update();
        if (piece.isFalling) {
          pieces.splice(i, 1);
        }
      });
      if (pieces.length === 0) {
        clearInterval(confettiInterval);
      }
    }

    function drawPieces() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach(function (piece) {
        piece.draw(context);
      });
    }

    createPieces();
    const confettiInterval = setInterval(function () {
      createPieces();
    }, 500);

    const duration = 5000; // Specify the duration in milliseconds
    const startTime = Date.now();

    function checkDuration() {
      const elapsed = Date.now() - startTime;
      if (elapsed >= duration) {
        clearInterval(confettiInterval);
      }
    }

    setInterval(updatePieces, 1000 / 60);
    setInterval(drawPieces, 1000 / 60);
    setInterval(checkDuration, 200);
  }
}