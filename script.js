var tl = gsap.timeline()
var pl = gsap.timeline()

tl.from("#nav h1, #nav-prt2 h5, #line,#nav-prt2 img, #nav i",{
    y:-100,
    duration:1.3,
    delay:0.3,
    stagger:0.1
})
gsap.from("#content h1,#content p,#content button,#elem1 i,#elem1",{
    y:"550px",
    duration:1.3,
    delay:0,
    stagger:0.2,
})
pl.to("#content img", {
  y: "100vh",
  scale: 0.6,
  duration: 0,
});
pl.to("#content img", {
  y: "0vh",
  duration: 1,
  delay:0.3,
});

pl.to("#content img", {
  y: "0vh",
  rotate: 360,
  scale: 1,
  duration: 1,
});

