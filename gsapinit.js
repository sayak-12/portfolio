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
