
/* Adapted from the Pixie’s Distribution cursor supplied by the site owner. */
(()=>{
 const root=document.createElement('div');root.className='dl-pixie-cursor';root.setAttribute('aria-hidden','true');
 const ring=document.createElement('span');ring.className='dl-pixie-cursor__ring';root.append(ring);document.body.append(root);
 const motion=matchMedia('(prefers-reduced-motion: reduce)'),touch=matchMedia('(hover: none), (pointer: coarse)');
 const available=()=>!motion.matches&&!touch.matches;let last=0;
 const clear=()=>ring.classList.remove('is-visible','is-over-action');
 window.addEventListener('pointermove',e=>{if(!available()||e.pointerType==='touch'){clear();return;}
  const x=e.clientX,y=e.clientY;ring.style.left=x+'px';ring.style.top=y+'px';ring.classList.add('is-visible');
  ring.classList.toggle('is-over-action',!!e.target?.closest?.('a,button,input,select,textarea,[role="button"]'));
  if(e.timeStamp-last<30)return;last=e.timeStamp;
  if(Math.random()<.5)for(let i=0;i<2;i++){let s=document.createElement('span');s.className='dl-pixie-cursor__spark';s.style.left=x+'px';s.style.top=y+'px';s.style.setProperty('--spark-size',i===0?'3px':'2px');s.style.setProperty('--spark-x',Math.round((Math.random()-.5)*22)+'px');s.style.setProperty('--spark-y',Math.round((Math.random()-.5)*22)+'px');root.append(s);setTimeout(()=>s.remove(),300);}
 },{passive:true});
 document.addEventListener('pointerout',e=>{if(!e.relatedTarget)clear()},{passive:true});
 motion.addEventListener('change',clear);touch.addEventListener('change',clear);
})();
