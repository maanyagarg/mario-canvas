var timeout;
// locomotive smooth scrolling
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function mouseFollower(xscale, yscale) {
  window.addEventListener("mousemove", function (data) {
    document.querySelector(
      "#mini-circle"
    ).style.transform = `translate(${data.clientX}px, ${data.clientY}px) scale(${xscale}, ${yscale})`;
  });
}

function homepageAnimations() {
  var t = gsap.timeline();
  t.from("#nav", {
    y: -10,
    opacity: 0,
    duration: 0.5,
    ease: Expo.easeInOut,
  });
  t.from(".bounding", {
    y: "20",
    opacity: 0,
    duration: 1.5,
    delay: -0.5,
    ease: Expo.easeInOut,
    stagger: 0.2,
  });
  t.from("#footer", {
    y: -10,
    opacity: 0,
    duration: 1,
    delay: -0.9,
    ease: Expo.easeInOut,
  });
}

function cursorSkew() {
  var xscale = 1;
  var yscale = 1;
  var prevx = 0;
  var prevy = 0;

  window.addEventListener("mousemove", function (data) {
    clearTimeout(timeout);
    xscale = gsap.utils.clamp(0.8, 1.5, data.clientX - prevx);
    yscale = gsap.utils.clamp(0.8, 1.5, data.clientY - prevy);
    // console.log(data.clientX, data.clientY, xscale, yscale);
    prevx = data.clientX;
    prevy = data.clientY;

    mouseFollower(xscale, yscale);
    timeout = setTimeout(function () {
      document.querySelector(
        "#mini-circle"
      ).style.transform = `translate(${data.clientX}px, ${data.clientY}px) scale(1,1)`;
    }, 50);
  });
}

function hoverSection() {
  document.querySelectorAll(".subsection").forEach((element) => {
    var rotate = 0;
    var differenceRotate = 0;

    element.addEventListener("mouseleave", function (data) {
      gsap.to(element.querySelector("img"), {
        opacity: 0,
        ease: Power3,
      });
      gsap.to(element.querySelector("h1"), {
        opacity: 0.7,
        scale: 1,
        duration: 0.6,
      });
      gsap.to(element.querySelector("h6"), {
        opacity: 0.7,
        scale: 1,
        duration: 0.6,
      });

      document.querySelector("#mini-circle").style.display = "block";
    });

    element.addEventListener("mousemove", function (data) {
      element.style.cursor = "pointer";
      differenceRotate = data.clientX - rotate;
      rotate = data.clientX;
      gsap.to(element.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: data.clientY - element.parentElement.getBoundingClientRect().top,
        left: data.clientX - element.parentElement.getBoundingClientRect().left,
        rotate: gsap.utils.clamp(-20, 20, differenceRotate * 0.5),
      });
      gsap.to(element.querySelector("h1"), {
        opacity: 0.15,
        scale: 0.9,
        ease: Power4,
      });
      gsap.to(element.querySelector("h6"), {
        opacity: 0.1,
        scale: 0.9,
        ease: Power4,
      });
      document.querySelector("#mini-circle").style.display = "none";
    });
  });
}

function buttonHover() {
  const button = document.querySelector("button");
  button.addEventListener("mouseover", function (data) {
    button.style.cursor = "pointer";
    gsap.to("button", {
      backgroundColor: "white",
      color: "black",
      duration: 0.7,
      ease: Power3,
    });
    document.querySelector("#mini-circle").style.display = "none";
  });
  button.addEventListener("mouseout", function (data) {
    gsap.to("button", {
      backgroundColor: "black",
      color: "white",
      duration: 0.7,
      ease: Power3,
    });
    document.querySelector("#mini-circle").style.display = "block";
  });
}
function linkHover() {
  document.querySelectorAll("a").forEach((elements) => {
    elements.addEventListener("mouseover", function (data) {
      document.querySelector("#mini-circle").style.display = "none";
    });
    elements.addEventListener("mouseout", function (data) {
      document.querySelector("#mini-circle").style.display = "block";
    });
  });
  document.querySelectorAll(".arrow").forEach((elements) => {
    elements.addEventListener("mouseover", function (data) {
      const oldNode = elements.children[0];
      const node = document.createElement("i");
      node.classList.add("ri-arrow-right-line");
      elements.replaceChild(node, oldNode);
    });

    elements.addEventListener("mouseleave", function (data) {
      const oldNode = elements.children[0];
      const node = document.createElement("i");
      node.classList.add("ri-arrow-right-up-line");
      elements.replaceChild(node, oldNode);
    });
  });
}

function displayCurrentTime() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var year = date.getFullYear();
  var ampm;
  if (hours >= 12) ampm = "PM";
  else ampm = "AM";
  if (minutes < 10) minutes = "0" + minutes;
  hours = hours % 12;
  hours = hours ? hours : 12;
  var time = hours + ":" + minutes + ampm;
  document.querySelector(".currenttime").innerHTML = time;
  document.querySelector(".currentyear").innerHTML = year + "©";
  refresh();
}
function refresh() {
  var refresh = 1000;
  var mytime = setTimeout("displayCurrentTime()", refresh);
}

cursorSkew();
mouseFollower();
homepageAnimations();
hoverSection();
buttonHover();
linkHover();
displayCurrentTime();
