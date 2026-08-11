document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener('click',e=>{
    const id=link.getAttribute('href');
    if(id && id!=='#'){
      const el=document.querySelector(id);
      if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'});}
    }
  });
});
const items=document.querySelectorAll('.section,.project,.service-list article,.review-card,.audio-card');
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add('reveal','show');});
},{threshold:.08});
items.forEach(item=>observer.observe(item));
