gsap.registerPlugin(ScrollTrigger);

function Locomotive() {
  const scrollContainer = document.querySelector(".main");

  const locoScroll = new LocomotiveScroll({
    el: scrollContainer,
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(scrollContainer, {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: scrollContainer.style.transform ? "transform" : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

Locomotive();

gsap.to(".navpart_1 svg", {
  y: "-100%",
  scrollTrigger: {
    trigger: ".page_1",
    scroller: ".main",
    start: "top 0",
    end: "top -5%",
    scrub: true,

  },
});

const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

const videoanimation = function () {
  const videocontainer = document.querySelector(".video-container");
  const play = document.querySelector(".play");

  videocontainer.addEventListener("mousemove", function () {
    gsap.to(play, { opacity: 1, scale: 1 });
  });

  videocontainer.addEventListener("mouseleave", function () {
    gsap.to(play, { opacity: 0, scale: 0 });
  });

  videocontainer.addEventListener("mousemove", function (dot) {
    gsap.to(play, {
      x: dot.x,
      y: dot.y,
    });
  });
};
videoanimation();

const text = function () {
  gsap.from(".page_1 h1", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger: 1,
  });

  gsap.from(".video-container video", {
    scale: 0.5,
    duration: 0.9,
    delay: 0.8,
  });
};

text();

const cursor = function () {
  document.addEventListener("mousemove", function (dot) {
    gsap.to(".cursor1", {
      duration: 0.2,
      x: dot.clientX,
      y: dot.clientY,
      ease: "power2.out",
    });
  });

  const cursor = document.querySelector(".cursor1");
  const mainCards = document.querySelectorAll(".card_elm");

  mainCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(cursor, {
        duration: 0.3,
        scale: 1.1,
        ease: "power2.out",
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(cursor, {
        duration: 0.3,
        scale: 0,
        ease: "power2.inOut",
      });
    });
  });
};

cursor();
