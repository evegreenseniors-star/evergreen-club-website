/* =========================================
   EVERGREEN CLUB
   Main JavaScript
   ========================================= */


/* =========================================
   MOBILE NAVIGATION
   ========================================= */

const menuButton =
    document.getElementById("menuButton");

const menu =
    document.querySelector(".nav-links");


if (menuButton && menu) {

    menuButton.addEventListener(
        "click",
        () => {

            menu.classList.toggle("show");

        }
    );

}


/* =========================================
   CLOSE MOBILE MENU AFTER CLICKING A LINK
   ========================================= */

if (menu) {

    const menuLinks =
        menu.querySelectorAll("a");


    menuLinks.forEach(link => {

        link.addEventListener(
            "click",
            () => {

                menu.classList.remove("show");

            }
        );

    });

}


/* =========================================
   DARK MODE
   ========================================= */

const darkButton =
    document.getElementById("darkModeButton");

const body =
    document.body;


/* =========================================
   LOAD SAVED THEME
   ========================================= */

if (localStorage.getItem("theme") === "dark") {

    body.classList.add("dark");

}


/* =========================================
   SET DARK MODE BUTTON ICON
   ========================================= */

if (darkButton) {

    if (body.classList.contains("dark")) {

        darkButton.textContent = "☀️";

    } else {

        darkButton.textContent = "🌙";

    }


    /* =====================================
       TOGGLE DARK MODE
       ===================================== */

    darkButton.addEventListener(
        "click",
        () => {

            body.classList.toggle("dark");


            if (body.classList.contains("dark")) {

                localStorage.setItem(
                    "theme",
                    "dark"
                );

                darkButton.textContent = "☀️";

            } else {

                localStorage.setItem(
                    "theme",
                    "light"
                );

                darkButton.textContent = "🌙";

            }

        }
    );

}