/* Optional popup (clickable). Turn OFF: popup:false in config.js (or Control panel > Settings), or rename this file to _popup.js */
(function(){if(!CONFIG.popup)return;const pg=location.pathname.split('/').pop();if(pg==='checkout.html'||pg==='payment.html')return;
const ev=CONFIG.popupEvery||'session',k='nf_pop',st=ev==='always'?null:(ev==='day'?localStorage:sessionStorage);
try{if(st){const t=+st.getItem(k);if(t&&(ev!=='day'||Date.now()-t<864e5))return;st.setItem(k,Date.now())}}catch(e){}
const L=CONFIG.popupLink||'',lk=/^(https?:|[\w\-./?=&#%]+$)/.test(L)?L:'';
setTimeout(()=>{const d=document.createElement('div');d.className='ov on';const w=(h)=>lk?`<a href="${esc(lk)}" style="display:block;color:inherit;text-decoration:none">${h}</a>`:h;
d.innerHTML=`<div class="pan" style="margin-top:8vh;text-align:center"><button class="x">×</button>${w(`<img src="assets/images/popup/popup.jpg?v=${CONFIG.v||1}" alt="" style="max-height:50vh" onerror="this.remove()"><h2>${esc(CONFIG.popupTitle)}</h2><p class="sub">${esc(CONFIG.popupText)}</p>`)}${lk?`<a class="btn" href="${esc(lk)}">${esc(CONFIG.popupButton)}</a>`:''}</div>`;
d.onclick=e=>{if(e.target===d||e.target.className==='x')d.remove()};document.body.appendChild(d)},Math.max(0,(+CONFIG.popupDelay||1.2))*1000)})();
