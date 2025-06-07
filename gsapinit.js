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

// Project 1 - GitMaster
gsap.fromTo(
  "#proj1 .details h2",
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

// Project 2 - Companio
gsap.fromTo(
  "#proj2 .details h2",
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
  "#proj2 .details p",
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

// Project 3 - AI Parental Control
gsap.fromTo(
  "#proj3 .details h2",
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

// Project 4 - AI E-commerce Platform
gsap.fromTo(
  "#proj4 .details h2",
  {
    opacity: 0,
    x:"20%",
    duration: 0.4,
  },
  {
    opacity: 1,
    x:"0%",
    scrollTrigger: {
      trigger: "#proj4",
      start: "-10% 95%",
      end: "30% 60%",
      scrub:true,
    }
  }
);
gsap.fromTo(
  "#proj4 .details p",
  {
    opacity: 0,
    x:"-20%",
    duration: 0.4,
  },
  {
    opacity: 1,
    x:"0%",
    scrollTrigger: {
      trigger: "#proj4",
      start: "-10% 95%",
      end: "30% 60%",
      scrub:true,
    }
  }
);

// Project 6 - Anomaly Detection (keeping the same ID as in HTML)
gsap.fromTo(
  "#proj6 .details h2",
  {
    opacity: 0,
    x:"-20%",
    duration: 0.4,
  },
  {
    opacity: 1,
    x:"0%",
    scrollTrigger: {
      trigger: "#proj6",
      start: "-10% 95%",
      end: "30% 60%",
      scrub:true,
    }
  }
);
gsap.fromTo(
  "#proj6 .details p",
  {
    opacity: 0,
    x:"20%",
    duration: 0.4,
  },
  {
    opacity: 1,
    x:"0%",
    scrollTrigger: {
      trigger: "#proj6",
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