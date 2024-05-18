// ---------------------------------------------Preload--------------------------------------------

var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

// --------------------------------------------------Sidebar------------------------------------------
function closePopup() {
  document.querySelector(".overlay2").style.display = "none";
  document.querySelector(".contact-popup").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".overlay2").style.display = "block";
  document.querySelector(".contact-popup").style.display = "block";

  document.getElementById("popupForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission for this example
    // Here you can add code to handle form submission (e.g., AJAX request)
    // Placeholder for form submission handling
    closePopup(); // Close the popup after form submission
  });

  // Adding event listener after DOM content is loaded
  document.querySelector(".close-btn").addEventListener("click", function () {
    closePopup(); // Close the popup when the close button is clicked
  });
});

function openNav() {
  const sidePanel = document.getElementById("mysidepanel");
  if (sidePanel) {
    sidePanel.style.left = "0";
  } else {
    console.error("sidepanel not found");
  }
}
function closeNav() {
  const sidePanel = document.getElementById("mysidepanel");
  if (sidePanel) {
    sidePanel.style.left = "-320px";
  }
}

// ---------------------------------------------------Hero slider------------------------------------------

let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");

let sliderDom = document.querySelector(".slider");
let SliderDom = sliderDom.querySelector(".slider .list");
let thumbnailBorderDom = document.querySelector(".slider .thumbnail");
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");
let timeDom = document.querySelector(".slider .time");

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 1000;
let timeAutoNext = 7000;

nextDom.onclick = function () {
  showSlider("next");
};

prevDom.onclick = function () {
  showSlider("prev");
};
let runTimeOut;
let runNextAuto = setTimeout(() => {
  next.click();
}, timeAutoNext);
function showSlider(type) {
  let SliderItemsDom = SliderDom.querySelectorAll(".slider .list .item");
  let thumbnailItemsDom = document.querySelectorAll(".slider .thumbnail .item");

  if (type === "next") {
    SliderDom.appendChild(SliderItemsDom[0]);
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    sliderDom.classList.add("next");
  } else {
    SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
    thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
    sliderDom.classList.add("prev");
  }
  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    sliderDom.classList.remove("next");
    sliderDom.classList.remove("prev");
  }, timeRunning);

  clearTimeout(runNextAuto);
  runNextAuto = setTimeout(() => {
    next.click();
  }, timeAutoNext);
}

// --------------------------------------------------Sidebar------------------------------------------

function rightCloseNav() {
  const rightSide = document.getElementById("right-side");
  if (rightSide) {
    rightSide.style.right = "-355px";
  }
}
function rightOpenNav() {
  const rightSide = document.getElementById("right-side");
  if (rightSide) {
    rightSide.style.right = "0";
  }
}

// --------------- Back to Top btn -------------------------

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("backToTop").style.display = "block";
  } else {
    document.getElementById("backToTop").style.display = "none";
  }
}

function scrollToTop() {
  const scrollToTopBtn = document.documentElement || document.body;
  scrollToTopBtn.scrollIntoView({
    behavior: "smooth",
  });
}

// ---------------------------------------------------swiper------------------------------------

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//form backend start

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database
const database = firebase.database();

// Get the form element
const form = document.querySelector("#book-form");

// ... (previous code)

// Add submit event listener
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Get input field values
  const place = document.querySelector("#place").value;
  const date = document.querySelector("#date").value;
  const contact = document.querySelector("#contact").value;
  const peopleno = document.querySelector("#peopleno").value;

  // Save data to Firebase
  database.ref("orders").push({
    place,
    date,
    contact,
    peopleno,
  });
  alert("Your request is recorded. Our team will contact you soon");
});
// Get a reference to the database
const database2 = firebase.database();

// Get the form element
const form2 = document.querySelector("#newsletter");

// Add submit event listener
form2.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Get input field value
  const email = document.querySelector("#email").value;

  // Save data to Firebase
  database2.ref("newsletter").push({
    email,
  });
  alert("You are successfully subscribed.");
});
// Get a reference to the database
const database3 = firebase.database();

// Get the form element
const form3 = document.querySelector("#popupForm");

// Add submit event listener
form3.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Get input field value
  const name = document.querySelector("#namep").value;
  const contact = document.querySelector("#contactp").value;
  const message = document.querySelector("#messagep").value;

  // Save data to Firebase
  database2.ref("popup").push({
    name,
    contact,
    message,
  });
  alert("Your form is sent to relevant team,you will be contacted soon.");
});
