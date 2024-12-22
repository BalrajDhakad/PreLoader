const lenis = new Lenis({
  duration:1.5
})

lenis.on('scroll', () => {
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

CustomEase.create(
    "preloader",
    "M0,0 C0.154,0.059 0.468,-0.069 0.54,0.591 0.575,0.914 0.763,0.866 1,0.9"
  );


gsap.to('.preloaderScreen', {
    y:-1100,
    duration:3,
    delay:1.65,
    ease: "preloader"
})

gsap.to('.preloaderText', {
    y:-30,
    opacity:0,
    duration:.55,
    delay:3
})

gsap.to('.preloaderText', {
  scale:0,
  delay:5
})

gsap.from('.preloaderText', {
    opacity:0,
    duration:2,
    delay:1
})  

gsap.to('.mainScreenLogoTopLeft', {
  y:-430,
})

gsap.to('.navBar', {
  y:-430,
})

gsap.to('.mainScreenRightButton', {
  y:-430,
})

gsap.to('.heroPage', {
  y:-460,
  duration: 1,
  delay:3.7,
  ease: "preloader",
  opacity:1

})


// text animation of the main text on screen custo

gsap.to('.letter1', {
  y:-830,
  duration: 1,
  delay:4,
})

gsap.to('.letter2', {
  y:-830,
  duration: 1,
  delay:4.2,
})

gsap.to('.letter3', {
  y:-830,
  duration: 1,
  delay:4.4,
})

gsap.to('.letter4', {
  y:-830,
  duration: 1,
  delay:4.6,
})

gsap.to('.letter5', {
  y:-830,
  duration: 1,
  delay:4.8,
})

gsap.to('.letter6', {
  y:-830,
  duration: 1,
  delay:4.8,
})

gsap.to('.heroPageSideTextBtn', {
  y:-1600,
  opacity:0
})

gsap.to('.heroPageSideTextBtn', {
  y:-1800,
  opacity:1,
  duration: 1,
  delay:4.8,
  ease:'preloader'
})





const mainText = document.querySelector('.mainPageBottomCustoText')
const pageTwo = document.querySelector('.bigWhiteDiv')

const pageTwoImg1 = document.querySelector('.img1')
const pageTwoImg2 = document.querySelector('.img2')
const pageTwoImg3 = document.querySelector('.img3')

const pageFourImgs = document.querySelector('.pageFourImgs')






document.addEventListener('scroll', () => {
  value = window.scrollY
  mainText.style.marginTop = value * .3 + 'px'
  pageTwo.style.marginTop = value / -5.5 + 'px'
  pageTwoImg1.style.marginTop = value * .15 + 'px'
  pageTwoImg2.style.marginTop = value * .1 + 'px'
  pageTwoImg3.style.marginTop = value * .05 + 'px'
  pageFourImgs.style.marginTop = value * .00010 + 'px'


})

gsap.to('.bigWhiteDiv' , {
  y:-1500,
  duration:.01
})

gsap.to('.pageFourImgs div', {
  xPercent:-80,
  scrollTrigger: {
    trigger:'.images',
    scrub:true,
    scroller:'html',
    start:"100% 80%",
    end:"350%"
  }
})




const delay = 3;
const durationFast = .2
const durationSlow = .3





const t1 = gsap.timeline({
  repeat: -1,
  repeatDelay:0,
})

t1.from('.pageFiveTimerBulletsSection .imgSection .img1', {
  scale:0,
  opacity:0,
  duration:durationFast
})

t1.to('.pageFiveTimerBulletsSection .imgSection .img1', {
  scale:0,
  opacity:0,
  duration:durationSlow,
  delay:delay
})

t1.from('.pageFiveTimerBulletsSection .imgSection .img2', {
  scale:0,
  opacity:0,
  duration:durationFast,
})

t1.to('.pageFiveTimerBulletsSection .imgSection .img2', {
  scale:0,
  opacity:0,
  duration:durationSlow,
  delay:delay
})

t1.from('.pageFiveTimerBulletsSection .imgSection .img3', {
  scale:0,
  opacity:0,
  duration:durationFast,
})

t1.to('.pageFiveTimerBulletsSection .imgSection .img3', {
  scale:0,
  opacity:0,
  duration:durationSlow,
  delay:delay
})

t1.from('.pageFiveTimerBulletsSection .imgSection .img4', {
  scale:0,
  opacity:0,
  duration:durationFast,
})

t1.to('.pageFiveTimerBulletsSection .imgSection .img4', {
  scale:0,
  opacity:0,
  duration:durationSlow,
  delay:delay
})





const opacityLow = .1
const opacityHigh = .3






const t2 = gsap.timeline({
  repeat: -1,
  repeatDelay:0,
})

t2.from('.pageFiveTimerBulletsSection .textSection .text1', {
  opacity:opacityHigh,
  duration:durationFast
})

t2.to('.pageFiveTimerBulletsSection .textSection .text1', {
  opacity:opacityHigh,
  duration:durationSlow,
  delay:delay
})

t2.from('.pageFiveTimerBulletsSection .textSection .text2', {
  opacity:opacityHigh,
  duration:durationFast,
})

t2.to('.pageFiveTimerBulletsSection .textSection .text2', {
  opacity:opacityHigh,
  duration:durationSlow,
  delay:delay
})

t2.from('.pageFiveTimerBulletsSection .textSection .text3', {
  opacity:opacityHigh,
  duration:durationFast,
})

t2.to('.pageFiveTimerBulletsSection .textSection .text3', {
  opacity:opacityHigh,
  duration:durationSlow,
  delay:delay
})

t2.from('.pageFiveTimerBulletsSection .textSection .text4', {
  opacity:opacityHigh,
  duration:durationFast,
})

t2.to('.pageFiveTimerBulletsSection .textSection .text4', {
  opacity:opacityHigh,
  duration:durationSlow,
  delay:delay
})




const text1 = document.querySelector('.textSection .text1');
const text2 = document.querySelector('.textSection .text2');
const text3 = document.querySelector('.textSection .text3');
const text4 = document.querySelector('.textSection .text4');





const text1CS = window.getComputedStyle(text1)


setInterval(() => {
  console.log(text1CS.opacity)
  if(text1CS.opacity == 1){
    text1.addEventListener('mouseover', () => {
      t1.pause();
      t2.pause()
    })
    text1.addEventListener('mouseout', () => {
      t1.resume();
      t2.resume()
    })
  }
},5)




text2.addEventListener('mouseover', () => {
  t1.pause();
  t2.pause()
})
text2.addEventListener('mouseout', () => {
  t1.resume();
  t2.resume()
})
text3.addEventListener('mouseover', () => {
  t1.pause();
  t2.pause()
})
text3.addEventListener('mouseout', () => {
  t1.resume();
  t2.resume()
})
text4.addEventListener('mouseover', () => {
  t1.pause();
  t2.pause()
})
text4.addEventListener('mouseout', () => {
  t1.resume();
  t2.resume()
})