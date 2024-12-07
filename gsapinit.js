
if (window.innerWidth >= 1124) {
  const timeline = gsap.timeline();
timeline.fromTo(".socials", { 
    opacity: 0, 
    stagger: 0.5,  
    delay: 0.5,    
    duration: 0.4,
  }, {opacity:1}).fromTo(".navitem", { 
    y: '-100%', 
    duration: 0.2, 
    opacity: 0, 
    stagger: 0.3   
  }, { 
    y: '0%', 
    duration: 0.2, 
    opacity: 1, 
    stagger: 0.3   
  })
  .fromTo(".writings > *", 
    { opacity: 0 }, 
    { opacity: 1, 
      stagger: 0.2,  
      duration: 0.2  
    }
  ).fromTo(".pic.pic1", { 
    opacity: 0, 
    stagger: 0.2,  
    duration: 0.2  
  }, {opacity:1}).fromTo(".soci a", 
    { opacity: 0, y: '-100%' }, 
    { opacity: 1, y: '0%', 
      stagger: 0.3,  
      duration: 0.2  
    }
  );
  
}

gsap.fromTo(
  "#proj1 .pic",
  {
    opacity: 0,
    x:"-20%",
    duration: 0.4,
  },
  {
    opacity: 1,
    x:"0%",
    scrollTrigger: {
      trigger: "#proj1",
      start: "-10% 95%",
      end: "30% 60%",
      scrub:true,
    }
  }
)
gsap.fromTo(
  "#proj1 .details p",
  {
    opacity: 0,
    x:"20%",
    duration: 0.4,
  },
  {
    opacity: 1,
    x:"0%",
    scrollTrigger: {
      trigger: "#proj1",
      start: "-10% 95%",
      end: "30% 60%",
      scrub:true,
    }
  }
)
gsap.fromTo(
  "#proj2 .pic",
  {
    opacity: 0,
    x:"20%",
    duration: 0.4,
  },
  {
    opacity: 1,
    x:"0%",
    scrollTrigger: {
      trigger: "#proj2",
      start: "-10% 95%",
      end: "30% 60%",
      scrub:true,
    }
  }
);
gsap.fromTo(
  "#proj2 .details1 p",
  {
    opacity: 0,
    x:"-20%",
    duration: 0.4,
  },
  {
    opacity: 1,
    x:"0%",
    scrollTrigger: {
      trigger: "#proj2",
      start: "-10% 95%",
      end: "30% 60%",
      scrub:true,
    }
  }
);
gsap.fromTo(
  "#proj3 .pic",
  {
    opacity: 0,
    x:"-20%",
    duration: 0.4,
  },
  {
    opacity: 1,
    x:"0%",
    scrollTrigger: {
      trigger: "#proj3",
      start: "-10% 95%",
      end: "30% 60%",
      scrub:true,
    }
  }
);
gsap.fromTo(
  "#proj3 .details p",
  {
    opacity: 0,
    x:"20%",
    duration: 0.4,
  },
  {
    opacity: 1,
    x:"0%",
    scrollTrigger: {
      trigger: "#proj3",
      start: "-10% 95%",
      end: "30% 60%",
      scrub:true,
    }
  }
);

gsap.fromTo(".timeline",{"--top": "0%","--top-offset": "40px", duration: 1} ,{
  "--top": "100%",
  "--top-offset": "-40px",
  scrollTrigger: {
    trigger: ".timeline",
    start: "30% 90%",
    end: "bottom 20%",
    scrub: true,
  },
});