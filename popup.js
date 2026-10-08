/* Optional popup. To turn OFF: set popup:false in config.js, or rename this file to _popup.js */
(function(){if(!CONFIG.popup)return;try{if(sessionStorage.getItem('nf_pop'))return;sessionStorage.setItem('nf_pop','1')}catch(e){}
setTimeout(()=>{const d=document.createElement('div');d.className='ov on';d.innerHTML=`<div class="pan" style="margin-top:8vh;text-align:center"><button class="x">×</button><img src="assets/images/popup/popup.jpg" alt="" style="max-height:50vh"><h2>${CONFIG.popupTitle}</h2><p class="sub">${CONFIG.popupText}</p><a class="btn" href="${CONFIG.popupLink}">${CONFIG.popupButton}</a></div>`;
d.onclick=e=>{if(e.target===d||e.target.className==='x')d.remove()};document.body.appendChild(d)},1200)})();
