document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       ELEMENTOS
    ===================================================== */

    const startButton =
        document.getElementById("startButton");

    const intro =
        document.getElementById("intro");

    const story =
        document.getElementById("story");

    const music =
        document.getElementById("music");

    const musicControl =
        document.getElementById("musicControl");

    const musicText =
        document.getElementById("musicText");


    /* =====================================================
       INICIAR HISTÓRIA
    ===================================================== */

    startButton.addEventListener("click", () => {


        intro.classList.add("started");


        musicControl.classList.add("visible");


        const musicPromise =
            music.play();


        if (musicPromise !== undefined) {

            musicPromise
                .then(() => {

                    musicControl.classList.add(
                        "playing"
                    );

                    musicText.textContent =
                        "TOCANDO";

                })
                .catch((error) => {

                    console.log(
                        "Áudio não iniciado:",
                        error
                    );

                    musicText.textContent =
                        "MÚSICA";

                });

        }


        setTimeout(() => {

            window.scrollTo({

                top: story.offsetTop,

                behavior: "smooth"

            });

        }, 500);

    });


    /* =====================================================
       CONTROLE MANUAL DA MÚSICA
    ===================================================== */

    musicControl.addEventListener(
        "click",
        () => {


            if (music.paused) {


                music.play()
                    .then(() => {

                        musicControl.classList.add(
                            "playing"
                        );

                        musicText.textContent =
                            "TOCANDO";

                    })
                    .catch((error) => {

                        console.log(
                            "Erro ao tocar música:",
                            error
                        );

                    });


            } else {


                music.pause();

                musicControl.classList.remove(
                    "playing"
                );

                musicText.textContent =
                    "PAUSADA";

            }

        }
    );


    /* =====================================================
       QUANDO A MÚSICA TERMINAR
    ===================================================== */

    music.addEventListener(
        "ended",
        () => {

            musicControl.classList.remove(
                "playing"
            );

            musicText.textContent =
                "MÚSICA";

        }
    );


});
