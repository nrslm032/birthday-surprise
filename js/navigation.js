

function showScreen(screenId) {
    const screens = [
        "login-screen",
        "birthday-screen",
        "memories-screen",
        "video-screen",
        "letter-screen",
        "final-screen"
    ];

    // Stop the video whenever we leave the video screen
    const specialVideo = document.getElementById("special-video");

    if (specialVideo && screenId !== "video-screen") {
        specialVideo.pause();
        specialVideo.currentTime = 0;
    }

    screens.forEach(id => {
        const screen = document.getElementById(id);

        if (screen) {
            screen.hidden = true;
        }
    });

    const nextScreen = document.getElementById(screenId);

    if (nextScreen) {
        nextScreen.hidden = false;
        console.log("Opened screen:", screenId);
    }
}

/* SCREEN 1 -> SCREEN 2 */

const loginForm = document.getElementById("login-form");

if (loginForm) {
    loginForm.addEventListener("submit", event => {
        event.preventDefault();

        const password = document.getElementById("password").value;
        const correctPassword = "2005";

        if (password === correctPassword) {
            showScreen("birthday-screen");
        } else {
            alert("Incorrect password! Please try again. ❤️");
            document.getElementById("password").value = "";
            document.getElementById("password").focus();
        }
    });
}


/* SCREEN 2 -> SCREEN 3 */

const unfoldButton = document.getElementById("unfold-button");

if (unfoldButton) {

    unfoldButton.addEventListener("click", function() {

        showScreen("memories-screen");

    });

}


/* SCREEN 3 -> SCREEN 4 */

// const playMovieButton = document.getElementById("play-movie-button");

// if (playMovieButton) {

//     playMovieButton.addEventListener("click", function() {

//         showScreen("video-screen");

//     });

// }

const playMovieButton = document.getElementById("play-movie-button");
const specialVideo = document.getElementById("special-video");

if (playMovieButton) {
    playMovieButton.addEventListener("click", () => {
        showScreen("video-screen");

        if (specialVideo) {
            specialVideo.loop = true;
            specialVideo.currentTime = 0;

            specialVideo.play().catch(error => {
                console.log("Video autoplay was blocked:", error);
            });
        }
    });
}

const continueToLetterButton = document.getElementById(
    "continue-to-letter-button"
);

if (continueToLetterButton) {
    continueToLetterButton.addEventListener("click", () => {
        showScreen("letter-screen");
    });
}


const finalSurpriseButton = document.getElementById(
    "final-surprise-button"
);

if (finalSurpriseButton) {
    finalSurpriseButton.addEventListener("click", () => {
        showScreen("final-screen");
    });
}

const replayButton = document.getElementById("replay-button");

if (replayButton) {
    replayButton.addEventListener("click", () => {
        showScreen("birthday-screen");
    });
}