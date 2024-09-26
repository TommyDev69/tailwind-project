  const listMenu = document.getElementById("listNav");
        const navbar = document.getElementById("navbar");

        function showNav() {
            listMenu.classList.toggle("hidden"); // Toggle the 'hidden' class
        }

        window.addEventListener("scroll", () => {
            if (window.scrollY > 10) {
                navbar.classList.add("sticky");
                navbar.classList.add("bg-green-500"); // Add green background when scrolling
            } else {
                navbar.classList.remove("sticky");
                navbar.classList.remove("bg-green-500"); // Remove green background when at the top
            }
        });

document.addEventListener("DOMContentLoaded", function () {
  const headSwipe = document.querySelector(".carousel-inner");
  const items = document.querySelectorAll(".carousel-item");

  let currentIndex = 0;

  function showItem(index) {
    const totalItems = items.length;
    if (index >= totalItems) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = totalItems - 1;
    } else {
      currentIndex = index;
    }
    headSwipe.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  setInterval(() => {
    showItem(currentIndex + 1);
  }, 5000);
});

window.onscroll = function () {
  const navbar = document.getElementById("navbar");
  const stickyOffset = navbar.offsetTop;

  if (window.pageYOffset > stickyOffset) {
    navbar.classList.add("sticky"); // Add sticky class
    navbar.style.position = "fixed";
    navbar.style.top = "0";
    navbar.style.backgroundColor = "black";
  } else {
    navbar.classList.remove("sticky"); // Remove sticky class
    navbar.style.position = "relative";
    // navbar.style.backgroundColor = 'hidden'
  }
};

const swiper = document.getElementById("swiper");
const childElementCount = swiper.childElementCount;
let index = 0;

function swipe() {
  swiper.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(() => {
  swipe();

  if (index === childElementCount - 1) {
    index = 0;
  } else {
    index++;
  }
}, 3000);

swipe();



// #deal of the month

// Set the date we're counting down to
const countDate = new Date("2024-12-31T23:59:59").getTime(); // Target date

// Check if the countdownDate is valid
if (isNaN(countDate)) {
    console.error("Invalid countdown date");
}

// Update the countdown every 1 second
const countFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = countDate - now;

    // Check distance calculation
    if (isNaN(distance)) {
        console.error("Distance calculation resulted in NaN");
        return; // Exit the function to avoid further issues
    }

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the respective elements
    document.getElementById("day").innerText = String(days).padStart(2, '0');
    document.getElementById("hour").innerText = String(hours).padStart(2, '0');
    document.getElementById("mins").innerText = String(minutes).padStart(2, '0');
    document.getElementById("sec").innerText = String(seconds).padStart(2, '0');

    // If the countdown is finished, display a message
    if (distance < 0) {
        clearInterval(countFunction);
        document.getElementById("countdown").innerHTML = "<p class='font-bold text-4xl text-red-500'>Countdown Finished!</p>";
    }
}, 1000);


    // Set the date we're counting down to
    const countdownDate = new Date("2024-12-10T23:59:59").getTime(); // Target date

    // Check if the countdownDate is valid
    if (isNaN(countdownDate)) {
        console.error("Invalid countdown date");
    }

    // Update the countdown every 1 second
    const countdownFunction = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        // Check distance calculation
        if (isNaN(distance)) {
            console.error("Distance calculation resulted in NaN");
            return; // Exit the function to avoid further issues
        }

        // Time calculations
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the respective elements
        document.getElementById("days").innerText = String(days).padStart(2, '0');
        document.getElementById("hours").innerText = String(hours).padStart(2, '0');
        document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
        document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');

        // If the countdown is finished, display a message
        if (distance < 0) {
            clearInterval(countdownFunction);
            document.getElementById("countdown").innerHTML = "<p class='font-bold text-4xl text-red-500'>Countdown Finished!</p>";
        }
    }, 1000);




