/* =========================================
   EVERGREEN CLUB
   LANGUAGE SWITCHER
   English / Chinese
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* -----------------------------------------
       Get language elements
       ----------------------------------------- */

    const languageButton =
        document.getElementById("languageButton");

    const languageMenu =
        document.getElementById("languageMenu");

    const englishButton =
        document.getElementById("englishButton");

    const chineseButton =
        document.getElementById("chineseButton");


    /* -----------------------------------------
       Get saved language

       English = en
       Chinese = zh
       ----------------------------------------- */

    let currentLanguage =
        localStorage.getItem("language") || "en";


    /* -----------------------------------------
       Set language
       ----------------------------------------- */

    function setLanguage(language) {

        currentLanguage = language;


        /* -------------------------------------
           Save language
           ------------------------------------- */

        localStorage.setItem(
            "language",
            language
        );


        /* -------------------------------------
           Update HTML language
           ------------------------------------- */

        document.documentElement.lang =
            language;


        /* -------------------------------------
           Change all bilingual elements
           ------------------------------------- */

        const elements =
            document.querySelectorAll(
                "[data-en][data-zh]"
            );


        elements.forEach(function (element) {

            if (language === "zh") {

                element.textContent =
                    element.getAttribute("data-zh");

            } else {

                element.textContent =
                    element.getAttribute("data-en");

            }

        });


        /* -------------------------------------
           Change page title
           ------------------------------------- */

        const titleElement =
            document.querySelector(
                "title[data-en][data-zh]"
            );


        if (titleElement) {

            if (language === "zh") {

                document.title =
                    titleElement.getAttribute(
                        "data-zh"
                    );

            } else {

                document.title =
                    titleElement.getAttribute(
                        "data-en"
                    );

            }

        }


        /* -------------------------------------
           Change meta description
           ------------------------------------- */

        const description =
            document.querySelector(
                'meta[name="description"]'
            );


        if (description) {

            const englishDescription =
                description.getAttribute(
                    "data-en"
                );

            const chineseDescription =
                description.getAttribute(
                    "data-zh"
                );


            if (
                language === "zh" &&
                chineseDescription
            ) {

                description.setAttribute(
                    "content",
                    chineseDescription
                );

            }
            else if (englishDescription) {

                description.setAttribute(
                    "content",
                    englishDescription
                );

            }

        }


        /* -------------------------------------
           Update language button
           ------------------------------------- */

        if (languageButton) {

            if (language === "zh") {

                languageButton.innerHTML =
                    "🌐 中文";

            } else {

                languageButton.innerHTML =
                    "🌐 English";

            }

        }


        /* -------------------------------------
           Close language menu
           ------------------------------------- */

        if (languageMenu) {

            languageMenu.classList.remove(
                "show"
            );

        }

    }


    /* -----------------------------------------
       Language menu button
       ----------------------------------------- */

    if (languageButton) {

        languageButton.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                if (languageMenu) {

                    languageMenu.classList.toggle(
                        "show"
                    );

                }

            }
        );

    }


    /* -----------------------------------------
       English button
       ----------------------------------------- */

    if (englishButton) {

        englishButton.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                setLanguage("en");

            }
        );

    }


    /* -----------------------------------------
       Chinese button
       ----------------------------------------- */

    if (chineseButton) {

        chineseButton.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                setLanguage("zh");

            }
        );

    }


    /* -----------------------------------------
       Close language menu when clicking outside
       ----------------------------------------- */

    document.addEventListener(
        "click",
        function (event) {

            if (
                languageMenu &&
                languageButton &&
                !languageMenu.contains(event.target) &&
                !languageButton.contains(event.target)
            ) {

                languageMenu.classList.remove(
                    "show"
                );

            }

        }
    );


    /* -----------------------------------------
       Set saved language when page loads
       ----------------------------------------- */

    setLanguage(currentLanguage);

});