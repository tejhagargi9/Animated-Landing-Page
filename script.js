var crsr = document.querySelector("#cursor");
var page1 = document.querySelector("#page-1");
var page2 = document.querySelector("#page-2");
var page3 = document.querySelector("#page-3");
var round_div = document.querySelector("#round-div");
// console.log(boxes);

function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
init();

round_div.innerHTML = "Hover Here!";

document.addEventListener("mousemove", (dets) => {
  crsr.style.left = dets.x + 20 + "px";
  crsr.style.right = dets.x + 20 + "px";
  crsr.style.top = dets.y + "px";
  crsr.style.bottom = dets.y + "px";
});

round_div.addEventListener("mousemove", () => {
  page3.style.backgroundColor = "#020D1A";
  document.querySelector("#page-3-part-3 h2").style.color = "white";
  round_div.style.backgroundColor = "white";
  document.querySelector("#page-3 h2").style.color = "white";
});
round_div.addEventListener("mouseleave", () => {
  page3.style.backgroundColor = "white";
  document.querySelector("#page-3-part-3 h2").style.color = "black";
  document.querySelector("#page-3 h2").style.color = "black";

  round_div.style.backgroundColor = "#20B2AA";
});

gsap.to("#navbar", {
  backgroundColor: "rgba(141, 137, 137, 0.111)",
  // fontSize:"8vw",
  scrollTrigger: {
    trigger: "#page-1 h1",
    scroller: "#main",
    markers: false,
    start: "top 15%",
    end: "top 15%",
    scrub: 1,
  },
});

gsap.to("#navbar", {
  backdropFilter: "blur(6px)",
  // fontSize:"8vw",
  scrollTrigger: {
    trigger: "#page-1 h1",
    scroller: "#main",
    markers: false,
    start: "top 15%",
    end: "top 15%",
    scrub: 2,
  },
});

gsap.to("#page-1 h1", {
  x: -100,
  // fontSize:"8vw",
  scrollTrigger: {
    trigger: "#page-1 h1",
    scroller: "#main",
    markers: false,
    start: "top 20%",
    end: "top 0%",
    scrub: 4,
  },
});

gsap.to("#page-1 h2", {
  x: 140,
  // fontSize:"8vw",
  scrollTrigger: {
    trigger: "#page-1 h2",
    scroller: "#main",
    markers: false,
    start: "top 35%",
    end: "top 30%",
    scrub: 5,
  },
});

gsap.to("#page-1 video", {
  width: "75%",

  scrollTrigger: {
    trigger: "#page-1 video",
    scroller: "#main",
    markers: false,
    start: "top 70%",
    end: "top 50%",
    scrub: 4,
  },
});

gsap.to("#page-1", {
  background: "none",
  // backgroundColor: "white",

  scrollTrigger: {
    trigger: "#page-2",
    scroller: "#main",
    markers: false,
    start: "top 60%",
    end: "top 50%",
    scrub: 2,
  },
});

gsap.to("#page-1", {
  // background: "none",
  backgroundColor: "white",

  scrollTrigger: {
    trigger: "#page-2",
    scroller: "#main",
    markers: false,
    start: "top 60%",
    end: "top 50",
    scrub: 2,
  },
});

gsap.to("#page-2", {
  backgroundColor: "white",

  scrollTrigger: {
    trigger: "#page-2",
    scroller: "#main",
    markers: false,
    start: "top 60%",
    end: "top 50%",
    scrub: 4,
  },
});

gsap.to("#page-4", {
  // color: "white",
  backgroundColor: "black",

  scrollTrigger: {
    trigger: "#page-4",
    scroller: "#main",
    markers: false,
    start: "top 60%",
    end: "top 50%",
    scrub: 4,
  },
});

gsap.to("#page-3", {
  // color: "white",
  backgroundColor: "black",

  scrollTrigger: {
    trigger: "#page-4",
    scroller: "#main",
    markers: 0,
    start: "top 60%",
    end: "top 50%",
    scrub: 0,
  },
});

gsap.to("footer ", {
  backgroundColor: "black",
  scrollTrigger: {
    trigger: "footer",
    scroller: "#main",
    markers: 0,
    start: "top 60%",
    end: "top 50%",
    scrub: 3,
  },
});

gsap.to("footer h1", {
  display: "block",

  scrollTrigger: {
    trigger: "footer",
    scroller: "#main",
    markers: 0,
    start: "top 60%",
    end: "top 50%",
    scrub: 3,
  },
});

var boxes = document.querySelectorAll(".box");

boxes.forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    var att = elem.getAttribute("data-image");
    crsr.style.width = "14vw";
    crsr.style.height = "14vw";
    crsr.style.borderRadius = "0";
    crsr.style.backgroundImage = `url(${att})`;
  });

  elem.addEventListener("mouseleave", () => {
    // elem.style.backgroundColor = "transparent"
    crsr.style.width = "20px";
    crsr.style.height = "20px";
    crsr.style.borderRadius = "50%";
    crsr.style.backgroundImage = `none`;
  });
});
