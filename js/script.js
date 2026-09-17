console.log("Life-Link website loaded successfully!");

document.addEventListener("DOMContentLoaded", function () {

    /* ================= DONOR FORM ================= */

    const donorForm = document.getElementById("donorForm");

    if (donorForm) {

        donorForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const organs = document.querySelectorAll(
                'input[name="organ"]:checked'
            );

            if (organs.length === 0) {
                alert("Please select at least one organ.");
                return;
            }

            const successMessage =
                document.getElementById("successMessage");

            successMessage.style.display = "block";

            donorForm.reset();

            successMessage.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        });
    }


    /* ================= FIND ORGAN FILTER ================= */

    const organFilter = document.getElementById("organFilter");
    const cityFilter = document.getElementById("cityFilter");
    const requestCards = document.querySelectorAll(".request-card");
    const resultCount = document.getElementById("resultCount");
    const noResults = document.getElementById("noResults");


    if (organFilter && cityFilter) {

        function filterRequests() {

            const selectedOrgan =
                organFilter.value.toLowerCase();

            const enteredCity =
                cityFilter.value.trim().toLowerCase();

            let visibleCards = 0;


            requestCards.forEach(function (card) {

                const cardOrgan =
                    card.dataset.organ.toLowerCase();

                const cardCity =
                    card.dataset.city.toLowerCase();


                const organMatches =
                    selectedOrgan === "all" ||
                    cardOrgan === selectedOrgan;

                const cityMatches =
                    enteredCity === "" ||
                    cardCity.includes(enteredCity);


                if (organMatches && cityMatches) {

                    card.style.display = "block";
                    visibleCards++;

                } else {

                    card.style.display = "none";

                }

            });


            /* RESULT COUNT */

            resultCount.textContent =
                visibleCards +
                (visibleCards === 1 ? " request" : " requests");


            /* NO RESULTS MESSAGE */

            if (visibleCards === 0) {

                noResults.style.display = "block";

            } else {

                noResults.style.display = "none";

            }

        }


        /* ORGAN FILTER */

        organFilter.addEventListener(
            "change",
            filterRequests
        );


        /* CITY SEARCH */

        cityFilter.addEventListener(
            "input",
            filterRequests
        );

    }


    /* ================= VIEW REQUEST BUTTON ================= */

    const viewButtons =
        document.querySelectorAll(".view-btn");

    viewButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            alert(
                "This is demonstration data for the Life-Link student project."
            );

        });

    });

});
// Hospital Details Demo
function showHospitalMessage(hospitalName) {
    alert(
        hospitalName +
        "\n\nThis is a demonstration hospital profile for the Life-Link student project."
    );
}
// =========================
// LOGIN / SIGN UP
// =========================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;
        const message = document.getElementById("loginMessage");

        if (email && password) {

            localStorage.setItem("lifeLinkUser", email);

            message.textContent =
    "Login successful! Redirecting to dashboard...";

setTimeout(function() {
    window.location.href = "dashboard.html";
}, 1000);

        }

    });
}


// Open Sign Up
function showSignup() {

    document.getElementById("signupBox").style.display = "flex";
}


// Close Sign Up
function closeSignup() {

    document.getElementById("signupBox").style.display = "none";
}


// Sign Up
const signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("signupName").value;
        const email = document.getElementById("signupEmail").value;
        const password = document.getElementById("signupPassword").value;

        const message = document.getElementById("signupMessage");

        if (name && email && password) {

            localStorage.setItem("lifeLinkUser", email);

            message.textContent =
                "Account created successfully!";

            signupForm.reset();
        }

    });
}
// =========================
// DASHBOARD
// =========================

const storedUser = localStorage.getItem("lifeLinkUser");

const userEmailElement = document.getElementById("userEmail");

if (storedUser && userEmailElement) {

    userEmailElement.textContent = storedUser;

}


// Logout
function logoutUser() {

    localStorage.removeItem("lifeLinkUser");

    alert("You have been logged out.");

    window.location.href = "login.html";
}