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
    end: "50%"
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
    end: "70%"
  }
});

smokeSectionTimelineRemove.to(
  '.highlight',
  {
    color: 'rgba(255, 255, 255, 0.4)',
    stagger: 1
  }
)