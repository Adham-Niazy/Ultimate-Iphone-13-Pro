import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import './styles/index.css';

gsap.registerPlugin(ScrollTrigger);

// Pin the first section
const IntroSectionTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: '.hero__page',
    start: '0%',
    end: '100%',
    pin: true,
    pinSpacing: false
  }
})

// Highlight Smoke Section
const smokeSectionTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: '.smoke__page',
    scrub: true,
    start: "-40%",
    end: "40%"
  }
});

smokeSectionTimeline.fromTo(
  '.highlight',
  {
    color: 'rgba(255, 255, 255, 0.4'
  },
  {
    color: 'rgba(255, 255, 255, 1)',
    stagger: 1
  }
)

// Remove Highlight After Passing
const smokeSectionTimelineRemove = gsap.timeline({
  scrollTrigger: {
    trigger: '.smoke__page',
    scrub: true,
    start: "-20%",
    end: "60%"
  }
});

smokeSectionTimelineRemove.to(
  '.highlight',
  {
    color: 'rgba(255, 255, 255, 0.4)',
    stagger: 1
  }
)

// phone split page Animation
const phoneSplitSectionTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: '.phone-split__page',
    start: '-55%',
    end: '20%',
    scrub: true
  }
});

phoneSplitSectionTimeline.fromTo('.large-phone', { x: '40%' }, { x: '20%' });
phoneSplitSectionTimeline.fromTo('.small-phone', { x: '-40%' }, { x: '-20%' }, "<");
phoneSplitSectionTimeline.fromTo('.product__text-left', { x: 50, opacity: 0 }, { x: 0, opacity: 1 }, "<");
phoneSplitSectionTimeline.fromTo('.product__text-right', { x: -50, opacity: 0 }, { x: 0, opacity: 1 }, "<");

gsap.timeline({
  scrollTrigger: {
    trigger: ".phone-split__page",
    pin: true,
    pinSpacing: false,
    start: "0%",
    end: "100%",
  },
});