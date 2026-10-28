// MOBILE NAVIGATION MENU
        const menuBtn = document.getElementById("menuBtn");
        const navLinks = document.getElementById("navLinks");

        menuBtn.addEventListener("click", () => {
            const open = navLinks.classList.toggle("active");
            menuBtn.setAttribute("aria-expanded", open);
            menuBtn.textContent = open ? "✕" : "☰";
        });

        // CLOSE MENU AFTER CLICKING A LINK
        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                menuBtn.textContent = "☰";
                menuBtn.setAttribute("aria-expanded", "false");
            });
        });

        // ANIMATED WELCOME TEXT
        const welcomeText = document.getElementById("welcomeText");
        const welcomeMessage = "Welcome to Mithila's Digital Space";

        welcomeText.setAttribute("aria-label", welcomeMessage);

        welcomeText.innerHTML = [...welcomeMessage].map((letter, index) => {
            return `<span aria-hidden="true"
                    style="--i:${index}">${
                        letter === " " ? "&nbsp;" : letter
                    }</span>`;
        }).join("");

        // ROTATING INSPIRATIONAL QUOTES
        const quotes = [
            [
                "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.",
                "— Dr. A. P. J. Abdul Kalam"
            ],
            [
                "You have to dream before your dreams can come true.",
                "— Dr. A. P. J. Abdul Kalam"
            ],
            [
                "Excellence is a continuous process and not an accident.",
                "— Dr. A. P. J. Abdul Kalam"
            ]
        ];

        let quoteIndex = 0;

        setInterval(() => {
            quoteIndex = (quoteIndex + 1) % quotes.length;

            const quoteBox = document.getElementById("quoteText");
            const quoteCredit = document.getElementById("quoteCredit");

            quoteBox.style.opacity = 0;

            setTimeout(() => {
                quoteBox.textContent = quotes[quoteIndex][0];
                quoteCredit.textContent = quotes[quoteIndex][1];
                quoteBox.style.opacity = 1;
            }, 350);
        }, 5000);

        // DICE ROLLER GAME
        const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

        document.getElementById("rollBtn").addEventListener("click", () => {
            const number = Math.floor(Math.random() * 6) + 1;

            document.getElementById("diceResult").textContent =
                diceFaces[number - 1];

            document.getElementById("rollMessage").textContent =
                `You rolled a ${number}! 🎉`;
        });

        // REVEAL ELEMENTS WHEN SCROLLING
        const revealElements = document.querySelectorAll(".reveal");

        if ("IntersectionObserver" in window) {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.12
            });

            revealElements.forEach(element => observer.observe(element));
        } else {
            revealElements.forEach(element => {
                element.classList.add("show");
            });
        }

        // CUSTOM PURPLE CURSOR
        const cursor = document.getElementById("cursor");

        document.addEventListener("mousemove", event => {
            cursor.style.left = event.clientX + "px";
            cursor.style.top = event.clientY + "px";
        });

        // AUTOMATIC COPYRIGHT YEAR
        document.getElementById("year").textContent =
            new Date().getFullYear();
