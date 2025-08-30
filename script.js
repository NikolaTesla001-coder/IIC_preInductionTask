
    function toggleDarkMode() {
      document.body.classList.toggle("dark");
      const btn = document.querySelector(".toggle-btn");
      if(document.body.classList.contains("dark")){
        btn.textContent = "☀️ Light";
      } else {
        btn.textContent = "🌙 Dark";
      }
    }

    // Animate cards/timeline when scrolling into view
    const observers = document.querySelectorAll('.card, .timeline-step');
    const appearOnScroll = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.style.opacity = "1";
          entry.target.style.animationPlayState = "running";
          appearOnScroll.unobserve(entry.target);
        }
      });
    },{ threshold: 0.1 });

    observers.forEach(el => appearOnScroll.observe(el))
