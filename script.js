document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener('click',e=>{
    const target=document.querySelector(link.getAttribute('href'));
    if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth'});}
  });
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.08});

document.querySelectorAll('.project,.service-list article,.about p,.floating-card').forEach(el=>{
  el.classList.add('reveal');
  observer.observe(el);
});


// Portfolio video player
const videoModal = document.getElementById("videoModal");
const videoFrame = document.getElementById("videoFrame");
const videoClose = document.getElementById("videoClose");

function closeVideo(){
  if(!videoModal) return;
  videoModal.classList.remove("open");
  videoModal.setAttribute("aria-hidden","true");
  videoFrame.src="";
  document.body.style.overflow="";
}

document.querySelectorAll(".video-project").forEach(card=>{
  card.addEventListener("click", e=>{
    e.preventDefault();
    videoFrame.src = card.getAttribute("href");
    videoModal.classList.add("open");
    videoModal.setAttribute("aria-hidden","false");
    document.body.style.overflow="hidden";
  });
});

videoClose?.addEventListener("click", closeVideo);
videoModal?.addEventListener("click", e=>{
  if(e.target.matches("[data-close-video]")) closeVideo();
});
document.addEventListener("keydown", e=>{ if(e.key === "Escape") closeVideo(); });
