const V='?v='+(CONFIG.v||1),$=(s,r=document)=>r.querySelector(s);
const esc=s=>String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
const RS=document.documentElement.style;if(CONFIG.accent)RS.setProperty('--acc',CONFIG.accent);if(CONFIG.bgColor)RS.setProperty('--bg',CONFIG.bgColor);
const ON=CONFIG.onlineSelling===true,PAY=ON&&!!CONFIG.payment,BO=CONFIG.btnOrder||'Order on WhatsApp',BI=CONFIG.btnInquiry||'Check Availability on WhatsApp',OT=ON?CONFIG.offerText:(CONFIG.offerTextOff!==undefined?CONFIG.offerTextOff:'Visit our showroom · Easy exchange');
const SI=typeof SITE!=='undefined'?SITE:{};
const PG=typeof PAGES!=='undefined'?PAGES:[['index','Home','হোম'],['category','Shop','শপ'],['gallery','Gallery','গ্যালারি'],['about','About','আমাদের কথা'],['contact','Contact','যোগাযোগ'],['payment','Pay','পেমেন্ট']].map(a=>({k:a[0],t:a[1],bn:a[2]}));
const file=n=>n.custom?'page.html?p='+n.slug:n.k+'.html';
const qs=new URLSearchParams(location.search),cur=location.pathname.split('/').pop()||'index.html';
const me=PG.find(n=>n.custom?cur==='page.html'&&qs.get('p')===n.slug:file(n)===cur),off=me&&((me.show===false&&me.k!=='index')||(me.k==='payment'&&!PAY));
const CATS=CATEGORIES.filter(c=>c.show!==false);
const LIVE=PRODUCTS.filter(p=>(!CONFIG.hidePlaceholders||p.new)&&CATS.some(c=>c.key===p.cat));
const find=id=>PRODUCTS.find(p=>p.id===id),pimg=p=>(p.img||`assets/images/${p.cat}/${p.id}.jpg`)+V;
const wa=t=>'https://wa.me/'+CONFIG.whatsapp+'?text='+encodeURIComponent(t),M=n=>CONFIG.currency+' '+n;
const price=p=>p.price>0?(p.old>p.price?`<s>${M(p.old)}</s>`:'')+M(p.price)+(p.old>p.price?`<b class="pc">-${Math.round((1-p.price/p.old)*100)}%</b>`:''):'Price: ask on WhatsApp';
let cart=[];try{cart=JSON.parse(localStorage.getItem('nf_cart')||'[]')}catch(e){}cart=cart.filter(c=>find(c.id));
const save=()=>{try{localStorage.setItem('nf_cart',JSON.stringify(cart))}catch(e){}$('#cc').textContent=cart.reduce((a,c)=>a+c.q,0)};
const MENU=PG.filter(n=>n.show!==false&&(n.k!=='payment'||PAY));
document.body.insertAdjacentHTML('afterbegin',(CONFIG.offer&&OT?`<div class="offer">${esc(OT)}</div>`:'')+`<header><div class="wrap"><button class="menu" id="mb" aria-label="Menu">☰</button><a class="logo" href="index.html"><b>NF</b><span>${esc(CONFIG.brand)}</span></a><nav id="nv">${MENU.map(n=>`<a href="${file(n)}"${me===n?' class="on"':''}>${esc(n.t)}<small>${esc(n.bn||'')}</small></a>`).join('')}</nav><button class="cartb" id="cb">${ON?'Cart':'Inquiry'} (<span id="cc">0</span>)</button></div></header>`);
document.body.insertAdjacentHTML('beforeend',`<footer>${CONFIG.showroom?`For more, visit our showroom: ${esc(CONFIG.showroomAddress)}<br>`:''}© ${esc(CONFIG.brand)} · ${esc(CONFIG.tagline)}</footer><a class="fab" data-wa href="#">${ON?'Order on WhatsApp':'Chat on WhatsApp'}</a><div class="ov" id="ov"><div class="pan"><button class="x" id="ox">×</button><div id="ob"></div></div></div>`);
$('#mb').onclick=()=>{const o=$('#nv').classList.toggle('open');$('#mb').textContent=o?'✕':'☰'};
if(!ON)document.querySelectorAll('[data-on]').forEach(e=>e.remove());
document.querySelectorAll('[data-sec]').forEach(e=>{if(CONFIG[e.dataset.sec]===false)e.remove()});
if(!CONFIG.showroom)document.querySelectorAll('[data-showroom]').forEach(e=>e.remove());
if(off){document.querySelectorAll('body>section,body>.hero,body>.trust').forEach(e=>e.remove());$('footer').insertAdjacentHTML('beforebegin','<section><div class="wrap" style="text-align:center"><h2>Page not available</h2><p class="sub">This page is not available right now.</p><a class="btn" href="index.html">Go Home</a></div></section>')}
const ov=$('#ov'),ob=$('#ob');$('#ox').onclick=()=>ov.classList.remove('on');ov.onclick=e=>{if(e.target===ov)ov.classList.remove('on')};
const card=p=>`<div class="card" data-id="${p.id}">${p.out?'<i class="so">SOLD OUT</i>':''}<img loading="lazy" src="${pimg(p)}" alt="${esc(p.name)}"><div><small>${esc((CATEGORIES.find(c=>c.key===p.cat)||{}).label)}</small><h3>${esc(p.name)}</h3><span>${price(p)}</span></div></div>`;
const bind=r=>r.querySelectorAll('.card').forEach(c=>c.onclick=()=>openP(c.dataset.id));
const F={},okP=p=>p.replace(/\D/g,'').length>=10,ref=()=>'NF-'+new Date().toISOString().slice(5,10).replace('-','')+'-'+Math.floor(100+Math.random()*900);
const VS='<select id="vs"><option>I will visit today</option><option>I will visit tomorrow</option><option>I will visit this week</option><option>Not sure yet</option></select>';
const keep=ks=>ks.forEach(k=>{const e=$('#'+k);if(!e)return;if(F[k])e.value=F[k];e.addEventListener('input',()=>F[k]=e.value);e.addEventListener('change',()=>F[k]=e.value)});
function sent(u,r){const w=window.open(u,'_blank');if(!w)location.href=u;ob.innerHTML=`<h2>Thank you!</h2><p>Reference: <b>${r}</b></p><p class="sub">WhatsApp has opened with your message. Please press Send there to complete.</p><a class="btn" href="${u}" target="_blank" rel="noopener">Open WhatsApp again</a>`}
function openP(id){const p=find(id),all=[pimg(p),...(p.more||[]).map(x=>x+V)];
ob.innerHTML=`<img id="mi" src="${all[0]}" alt="${esc(p.name)}">${all.length>1?`<div class="th">${all.map(s=>`<img src="${s}" alt="">`).join('')}</div>`:''}<h2>${esc(p.name)}</h2><p class="sub">${price(p)}</p>${p.desc?`<p>${esc(p.desc)}</p>`:''}${p.out?'<p class="er">Sold out</p>':`<select id="sz">${(p.sizes||[]).map(s=>`<option>${esc(s)}</option>`).join('')}</select>${(p.colors||[]).length?`<select id="cl">${p.colors.map(s=>`<option>${esc(s)}</option>`).join('')}</select>`:''}<div class="gap">${ON?'<button class="btn o" id="ad">Add to Cart</button><button class="btn" id="av">Check Availability</button>':'<button class="btn" id="av">Check Availability</button><button class="btn o" id="ad">Add to Inquiry</button>'}</div>`}<p class="trustm">${ON?'Cash on Delivery':'Visit our showroom'} · Easy exchange · WhatsApp support</p>`;
ob.querySelectorAll('.th img').forEach(i=>i.onclick=()=>$('#mi').src=i.src);
if(!p.out){const o=()=>({s:$('#sz').value,c:$('#cl')?$('#cl').value:''});
$('#ad').onclick=()=>{const q=o(),x=cart.find(k=>k.id===id&&k.s===q.s&&k.c===q.c);x?x.q++:cart.push({id,s:q.s,c:q.c,q:1});save();openCart()};
$('#av').onclick=()=>{const q=o();ob.innerHTML=`<h2>Check Availability</h2><p class="sub">${esc(p.name)} · Size ${esc(q.s)}${q.c?' · '+esc(q.c):''}</p><input id="nm" placeholder="Your name *" autocomplete="name"><input id="ph" type="tel" placeholder="Phone number *" autocomplete="tel">${ON?'<textarea id="ad2" rows="2" placeholder="Address (optional)"></textarea>':VS}<p class="er" id="er"></p><button class="btn" id="sv" style="width:100%">${esc(BI)}</button>`;keep(['nm','ph','ad2','vs']);
$('#sv').onclick=()=>{const n=$('#nm').value.trim(),ph=$('#ph').value.trim();if(!n||!okP(ph)){$('#er').textContent='Please enter your name and a valid phone number.';return}const r=ref(),a2=$('#ad2')?$('#ad2').value.trim():'';
sent(wa(`Hi ${CONFIG.brand}, is this available?\n${p.name} (${p.id}), Size: ${q.s}${q.c?', Color: '+q.c:''}\n\nName: ${n}\nPhone: ${ph}`+(ON?(a2?`\nAddress: ${a2}`:''):`\nPlanned visit: ${$('#vs').value}`)+`\nRef: ${r}`),r)}}}
ov.classList.add('on')}
function openCart(){let t=0,ok=true;const rows=cart.map((c,i)=>{const p=find(c.id);p.price>0?t+=p.price*c.q:ok=false;return `<div class="ci"><img src="${pimg(p)}" alt=""><div><b>${esc(p.name)}</b><br>Size ${esc(c.s)}${c.c?' · '+esc(c.c):''}${p.price>0?' · '+M(p.price):''}</div><button data-i="${i}" data-d="-1">−</button><span>${c.q}</span><button data-i="${i}" data-d="1">+</button></div>`}).join('');
const pays=ON?[CONFIG.cod&&['cod','Cash on Delivery'],CONFIG.bkash&&['bkash','bKash'],CONFIG.nagad&&['nagad','Nagad'],CONFIG.payment&&['qr','Bangla QR']].filter(Boolean):[];
ob.innerHTML=`<h2>${ON?'Your Cart':'Your Inquiry'}</h2>${rows||'<p class="sub">Nothing added yet. Browse the shop and add items.</p>'}`+(cart.length?`<h3>${ON?'Delivery details':'Your details'}</h3><input id="nm" placeholder="Your name *" autocomplete="name"><input id="ph" type="tel" placeholder="Phone number *" autocomplete="tel">`+(ON?`<textarea id="ad2" rows="2" placeholder="Full delivery address *"></textarea><select id="ar"><option value="d">Inside Dhaka (${M(CONFIG.deliveryDhaka)})</option><option value="o">Outside Dhaka (${M(CONFIG.deliveryOutside)})</option></select><div class="chk"><input type="checkbox" id="av"> Only check availability first</div>${pays.length?`<div id="pb"><h3>Payment</h3><select id="pm">${pays.map(x=>`<option value="${x[0]}">${x[1]}</option>`).join('')}</select><div class="pi" id="pi"></div></div>`:''}`:VS+'<textarea id="nt" rows="2" placeholder="Note (optional)"></textarea>')+`<div class="tot" id="tot"></div><p class="er" id="er"></p><button class="btn" id="co" style="width:100%">${esc(ON?BO:BI)}</button>`:'');
ob.querySelectorAll('[data-i]').forEach(b=>b.onclick=()=>{const c=cart[b.dataset.i];c.q+=+b.dataset.d;if(c.q<1)cart.splice(b.dataset.i,1);save();openCart()});
if(cart.length){const dl=()=>$('#ar').value==='d'?CONFIG.deliveryDhaka:CONFIG.deliveryOutside,chk=()=>ON&&$('#av').checked;
const upd=()=>{if(ON){const v=$('#pm')?$('#pm').value:'';if($('#pb'))$('#pb').style.display=chk()?'none':'block';if($('#pi'))$('#pi').innerHTML=v==='cod'?'Pay in cash when you receive the parcel.':v==='qr'?`Scan this Bangla QR, pay, then send the screenshot on WhatsApp.<br><img src="assets/images/payment/bangla-qr.png${V}" alt="Bangla QR">`:`Send money to ${v==='bkash'?'bKash':'Nagad'} <b>${esc(CONFIG[v])}</b>, then send the transaction ID on WhatsApp.`;
$('#tot').innerHTML=chk()?'':(ok&&t?`Subtotal: ${M(t)}<br>`:'')+`Delivery: ${M(dl())}`+(ok&&t?`<br><b>Total: ${M(t+dl())}</b>`:'<br><small>Final price will be confirmed on WhatsApp.</small>')}else $('#tot').innerHTML=ok&&t?`Estimated total: <b>${M(t)}</b> (pay at the showroom)`:''};
keep(['nm','ph','ad2','ar','pm','vs','nt']);['ar','pm','av'].forEach(k=>{const e=$('#'+k);if(e)e.onchange=upd});upd();
$('#co').onclick=()=>{const n=$('#nm').value.trim(),p=$('#ph').value.trim(),a2=ON?$('#ad2').value.trim():'';if(!n||!okP(p)||(ON&&!chk()&&!a2)){$('#er').textContent=ON&&!chk()?'Please enter your name, a valid phone number and full address.':'Please enter your name and a valid phone number.';return}
const r=ref(),L=cart.map((c,i)=>`${i+1}. ${find(c.id).name} (${c.id}), Size: ${c.s}${c.c?', Color: '+c.c:''}, Qty: ${c.q}`).join('\n');let m;
if(ON&&!chk())m=`Hi ${CONFIG.brand}, new order:\n${L}`+(ok&&t?`\nSubtotal: ${M(t)}`:'')+`\nDelivery: ${M(dl())}`+(ok&&t?`\nTotal: ${M(t+dl())}`:'')+(pays.length?`\nPayment: ${$('#pm').selectedOptions[0].text}`:'')+`\n\nName: ${n}\nPhone: ${p}\nAddress: ${a2}\nOrder ID: ${r}`;
else m=`Hi ${CONFIG.brand}, please check availability of these items:\n${L}`+(ok&&t?`\nEstimated total: ${M(t)}`:'')+`\n\nName: ${n}\nPhone: ${p}`+(ON?(a2?`\nAddress: ${a2}`:''):`\nPlanned visit: ${$('#vs').value}`+($('#nt').value.trim()?`\nNote: ${$('#nt').value.trim()}`:''))+`\nRef: ${r}`;
sent(wa(m),r);cart=[];save()}}
ov.classList.add('on')}
$('#cb').onclick=openCart;save();
const catq=qs.get('cat')||'all',G=$('#grid'),CL=CATS.filter(c=>LIVE.some(p=>p.cat===c.key));
if(cur==='category.html'&&G){const c=CL.find(x=>x.key===catq),cq=c?catq:'all';
$('#chips').innerHTML=[['all','All']].concat(CL.map(x=>[x.key,x.label])).map(x=>`<a href="category.html?cat=${x[0]}"${x[0]===cq?' class="on"':''}>${esc(x[1])}</a>`).join('');
$('#ct').textContent=c?`${c.label}${c.bn?' · '+c.bn:''}`:((SI.shop||{}).title||'All Products');
const draw=()=>{const q=$('#q').value.toLowerCase(),L=LIVE.filter(p=>(!c||p.cat===cq)&&p.name.toLowerCase().includes(q));G.innerHTML=L.length?L.map(card).join(''):'<p class="sub">Coming soon. Message us on WhatsApp for availability.</p>';bind(G)};$('#q').oninput=draw;draw()}
if($('#tiles'))$('#tiles').innerHTML=CL.map(c=>{const f=LIVE.find(p=>p.cat===c.key);return `<a class="tile" href="category.html?cat=${c.key}"><img loading="lazy" src="assets/images/categories/${c.key}.jpg${V}" onerror="this.onerror=null;this.src='${f?pimg(f):''}'" alt="${esc(c.label)}"><span>${esc(c.label)}<br>${esc(c.bn||'')}</span></a>`}).join('');
if($('#new')){const FT=LIVE.filter(p=>p.feat);$('#new').innerHTML=(FT.length?FT:LIVE.filter(p=>p.new)).slice(0,8).map(card).join('');bind($('#new'))}
if($('#gal')){let h='';for(let i=1;i<=(CONFIG.hidePlaceholders?8:12);i++)h+=`<img loading="lazy" src="assets/images/gallery/gallery-${String(i).padStart(2,'0')}.jpg${V}" alt="Gallery ${i}">`;$('#gal').innerHTML=h;$('#gal').querySelectorAll('img').forEach(i=>i.onclick=()=>{ob.innerHTML=`<img src="${i.src}" alt="">`;ov.classList.add('on')})}
if($('#cp')&&!off){const s=qs.get('p'),c=(SI.custom||{})[s];if(!c)$('#cp').innerHTML='<h2>Page not found</h2><a class="btn" href="index.html">Go Home</a>';else{document.title=c.title+' – '+CONFIG.brand;
$('#cp').innerHTML=`<h1 class="t">${esc(c.title)}</h1>${c.img?`<img src="assets/images/pages/${esc(s)}.jpg${V}" alt="" style="margin:0 0 16px;width:100%">`:''}`+String(c.body||'').split(/\n\s*\n/).map(x=>`<p>${esc(x).replace(/\n/g,'<br>')}</p>`).join('')}}
const gt=(o,p)=>p.split('.').reduce((a,k)=>a&&a[k],o);
document.querySelectorAll('[data-t]').forEach(e=>{const t=gt(SI,e.dataset.t);if(t==null)return;if(t===''&&e.hasAttribute('data-opt')){const r=e.closest('.irow');(r||e).remove();return}e.textContent=t});
document.querySelectorAll('[data-wa]').forEach(a=>a.href=wa(`Hi ${CONFIG.brand}, ${a.dataset.wa||'I want to order.'}`));
document.querySelectorAll('[data-fb]').forEach(a=>a.href=CONFIG.facebook);document.querySelectorAll('[data-ig]').forEach(a=>a.href=CONFIG.instagram);
document.querySelectorAll('[data-c]').forEach(e=>e.textContent=CONFIG[e.dataset.c]);document.querySelectorAll('[data-m]').forEach(e=>e.textContent=M(CONFIG[e.dataset.m]));
document.querySelectorAll('[data-map]').forEach(l=>l.href=CONFIG.showroomMap||'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(CONFIG.showroomAddress));
if($('#cf'))$('#cf').onsubmit=e=>{e.preventDefault();location.href=wa(`${$('#cn').value}: ${$('#cm').value}`)};
document.querySelectorAll('.irow [data-c]').forEach(e=>{if(!e.textContent.trim())e.closest('.irow').remove()});
const tm=s=>{const m=/(\d{1,2})(?::(\d\d))?\s*([ap]m)?/i.exec(s||'');if(!m)return null;let h=+m[1];const ap=(m[3]||'').toLowerCase();if(ap==='pm'&&h<12)h+=12;if(ap==='am'&&h===12)h=0;return h*60+(+m[2]||0)};
const opn=()=>{const A=SI.about||{},o=tm(A.open_time),c=tm(A.close_time);if(o==null||c==null)return '';const d=new Date(),dn=['sun','mon','tue','wed','thu','fri','sat'][d.getDay()],n=d.getHours()*60+d.getMinutes(),offd=(A.off_days||'').toLowerCase().includes(dn);return !offd&&n>=o&&n<c?`<b class="ono">Open now</b> · closes ${esc(A.close_time)}`:`<b class="onc">Closed now</b> · opens ${esc(A.open_time)}`};
document.querySelectorAll('[data-opennow]').forEach(e=>{const h=opn();h?e.innerHTML=h:e.remove()});
const mu=CONFIG.mapEmbed||'';document.querySelectorAll('[data-mapbox]').forEach(e=>{/^https:\/\/(www\.google\.com\/maps|maps\.google\.com)\//.test(mu)?e.innerHTML=`<iframe src="${esc(mu)}" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade" title="Map"></iframe>`:e.remove()});
