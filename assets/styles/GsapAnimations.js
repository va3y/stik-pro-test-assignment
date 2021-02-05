import { gsap } from 'gsap'
// не подгружает при диплое
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'

const pageOpen = function () {
  const pageOpenTimeline = gsap.timeline()

  pageOpenTimeline
    .to('.preload', {
      yPercent: -100,
      duration: 2,
      ease: 'back.in',
    })
    .from('.ascend-on-loading', { y: 100, duration: 1, opacity: 0 })
    .from('.header-content', { opacity: 0, duration: 1 })
}

const loadParallax = function () {
  // gsap.registerPlugin(ScrollTrigger)
  // gsap.to('.banner', {
  //   backgroundPositionY: `200px`,
  //   scrollTrigger: {
  //     trigger: 'section-2',
  //     scrub: true,
  //   },
  // })
}
export default { pageOpen, loadParallax }
