import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'
gsap.registerPlugin(ScrollTrigger)

const pageOpen = function () {
  const pageOpenTimeline = gsap.timeline()

  pageOpenTimeline
    .to('.preload', {
      yPercent: -100,
      duration: 2,
      ease: 'back.inOut',
    })
    .from('.ascend-on-loading', { y: 100, duration: 1, opacity: 0 })
}

const loadParallax = function () {
  gsap.to('.banner', {
    backgroundPositionY: `200px`,
    scrollTrigger: {
      trigger: 'section-2',
      scrub: true,
    },
  })
}
export default { pageOpen, loadParallax }

// не хватило времени полностью разобраться(
// const openSmMenu = function () {
//   gsap.from('.nav-sm', { yPercent: -120, duration: 1 })
//   console.log('opening')
// }

// const closeSmMenu = function () {
//   gsap.to('.nav-sm', { yPercent: -120, duration: 1 })
//   console.log('closing')
// }

// const toggleNavBurger = function () {
//   gsap.to('.second-bar', { opacity: 0, duration: 1 })
//   gsap.to('.first-bar', { y: 8, rotation: 45, duration: 1 })
//   gsap.to('.third-bar', { y: -8, rotation: -45, duration: 1 })
// }
