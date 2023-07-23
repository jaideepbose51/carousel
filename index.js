let i = 0;
let intervalId;

function startCarousel() {
  intervalId = setInterval(scroll, 6 * 1000);
}

function stopCarousel() {
  clearInterval(intervalId);
}

function scroll() {
  let a = document.getElementsByClassName("content")[i];
  a.classList.add("hide");
  if (i === 4) {
    i = 0;
    a = document.getElementsByClassName("content")[i];
    a.classList.remove("hide");
  } else {
    i++;
    a = document.getElementsByClassName("content")[i];
    a.classList.remove("hide");
  }
}

function right() {
  stopCarousel();
  scroll();
  startCarousel();
}

function left() {
  stopCarousel();
  let a = document.getElementsByClassName("content")[i];
  a.classList.add("hide");
  if (i === 0) {
    i = 4;
    a = document.getElementsByClassName("content")[i];
    a.classList.remove("hide");
  } else {
    i--;
    a = document.getElementsByClassName("content")[i];
    a.classList.remove("hide");
  }
  startCarousel();
}

// Start the carousel when the page loads
startCarousel();





// mini scroll image
const container = document.querySelector(".parent");
const scrollLeftButton = document.querySelector(".leftminiL");
const scrollRightButton = document.querySelector(".rightminiR");

scrollLeftButton.addEventListener("click", () => {
  container.scrollLeft -= 100; // Change the scroll amount as needed
});

scrollRightButton.addEventListener("click", () => {
  container.scrollLeft += 100; // Change the scroll amount as needed
});