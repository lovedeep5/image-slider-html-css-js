var firstSlide = document.querySelector(".slide");
firstSlide.classList.add("first");

document.getElementById("slider-container").lastChild.classList.add("last");

let nexBtn = document.getElementById("nex");
let prevBtn = document.getElementById("prev");

let nextSlideRunner = () => {
  removeLeftClass(getCurrentSlide());

  removeRightClass(getCurrentSlide());

  getCurrentSlide().classList.contains("last")
    ? addNextClass(getFirstSlide())
    : addNextClass(getCurrentSlide().nextSibling);

  addPrevClass(getCurrentSlide());

  removeActiveClass(getPrevSlide());

  addActiveClass(getNextSlide());

  addRightClass(getCurrentSlide());

  removePrevClass(getPrevSlide());

  removeNextClass(getNextSlide());
};

let previousSlideRunner = () => {
  removeLeftClass(getCurrentSlide());

  removeRightClass(getCurrentSlide());

  getCurrentSlide().classList.contains("first")
    ? addNextClass(getLastSlide())
    : addNextClass(getCurrentSlide().previousSibling);

  addPrevClass(getCurrentSlide());

  removeActiveClass(getPrevSlide());

  addActiveClass(getNextSlide());

  addLeftClass(getCurrentSlide());

  removePrevClass(getPrevSlide());

  removeNextClass(getCurrentSlide());
};

var getCurrentSlide = () => {
  return document.querySelector(".active");
};

var getNextSlide = () => {
  return document.querySelector(".next");
};

var getPrevSlide = () => {
  return document.querySelector(".previous");
};

var getFirstSlide = () => {
  return document.querySelector(".first");
};

var getLastSlide = () => {
  return document.querySelector(".last");
};

var addNextClass = (elm) => {
  elm.classList.add("next");
};

var removeNextClass = (elm) => {
  elm.classList.remove("next");
};

var addPrevClass = (elm) => {
  elm.classList.add("previous");
};

var removePrevClass = (elm) => {
  elm.classList.remove("previous");
};

var addActiveClass = (elm) => {
  elm.classList.add("active");
};
var removeActiveClass = (elm) => {
  elm.classList.remove("active");
};

var addRightClass = (elm) => {
  elm.classList.add("right");
};
var addLeftClass = (elm) => {
  elm.classList.add("left");
};
var removeRightClass = (elm) => {
  elm.classList.remove("right");
};
var removeLeftClass = (elm) => {
  elm.classList.remove("left");
};

var sliderInterval;

function invt() {
  sliderInterval = setInterval(nextSlideRunner, 5000);
}

invt();

// Controls
nexBtn.addEventListener("click", () => {
  clearInterval(sliderInterval);
  nextSlideRunner();
  invt();
});

prevBtn.addEventListener("click", () => {
  clearInterval(sliderInterval);
  previousSlideRunner();
  invt();
});
