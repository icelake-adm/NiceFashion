const V='?v='+(CONFIG.v||1),$=(s,r=document)=>r.querySelector(s);
const esc=s=>String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
const RS=document.documentElement.style;if(CONFIG.accent)RS.setProperty('--acc',CONFIG.accent);if(CONFIG.bgColor)RS.setProperty('--bg',CONFIG.bgColor);
const SI=typeof SITE!=='undefined'?SITE:{};
const PG=typeof PAGES!=='undefined'?PAGES:[['index','Home','হোম'],['category','Shop','শপ'],['gallery','Gallery','গ্যালারি'],['about','About','আমাদের কথা'],['contact','Contact','যোগাযোগ'],['payment','Pay','পেমেন্ট']].map(a=>({k:a[0],t:a[1],bn:a[2]}));
const file=n=>n.custom?'page.html?p='+n.slug:n.k+'.html';
const qs=new URLSearchParams(location.search),cur=location.pathname.split('/').pop()||'index.html';
const me=PG.find(n=>n.custom?cur==='page.html'&&qs.get('p')===n.slug:file(n)===cur),off=me&&me.show===false&&me.k!=='index';
const CATS=CATEGORIES.filter(c=>c.show!==false);
const LIVE=PRODUCTS.filter(p=>(!CONFIG.hidePlaceholders||p.new)&&CATS.some(c=>c.key===p.cat));
const find=id=>PRODUCTS.find(p=>p.id===id),pimg=p=>(p.img||`assets/images/${p.cat}/${p.id}.jpg`)+V;
const wa=t=>'https://wa.me/'+CONFIG.whatsapp+'?text='+encodeURIComponent(t),M=n=>CONFIG.currency+' '+n;
const price=p=>p.price>0?(p.old>p.price?`<s>${M(p.old)}</s>`:'')+M(p.price)+(p.old>p.price?`<b class="pc">-${Math.round((1-p.price/p.old)*100)}%</b>`:''):'Price: ask on WhatsApp';
let cart=[];try{cart=JSON.parse(localStorage.getItem('nf_cart')||'[]')}catch(e){}cart=cart.filter(c=>find(c.id));
const save=()=>{try{localStorage.setItem('nf_cart',JSON.stringify(cart))}catch(e){}$('#cc').textContent=cart.reduce((a,c)=>a+c.q,0)};
const MENU=PG.filter(n=>n.show!==false&&(n.k!=='payment'||CONFIG.payment));
document.body.insertAdjacentHTML('afterbegin',(CONFIG.offer?`<div class="offer">${esc(CONFIG.offerText)}</div>`:'')+`<header><div class="wrap"><button class="menu" id="mb" aria-label="Menu">☰</button><a class="logo" href="index.html"><b>NF</b><span>${esc(CONFIG.brand)}</span></a><nav id="nv">${MENU.map(n=>`<a href="${file(n)}"${me===n?' class="on"':''}>${esc(n.t)}<small>${esc(n.bn||'')}</small></a>`).join('')}</nav><button class="cartb" id="cb">Cart (<span id="cc">0</span>)</button></div></header>`);
document.body.insertAdjacentHTML('beforeend',`<footer>${CONFIG.showroom?`For more, visit our showroom: ${esc(CONFIG.showroomAddress)}<br>`:''}© ${esc(CONFIG.brand)} · ${esc(CONFIG.tagline)}</footer><a class="fab" data-wa href="#">Order on WhatsApp</a><div class="ov" id="ov"><div class="pan"><button class="x" id="ox">×</button><div id="ob"></div></div></div>`);
$('#mb').onclick=()=>{const o=$('#nv').classList.toggle('open');$('#mb').textContent=o?'✕':'☰'};
document.querySelectorAll('[data-sec]').forEach(e=>{if(CONFIG[e.dataset.sec]===false)e.remove()});
if(!CONFIG.showroom)document.querySelectorAll('[data-showroom]').forEach(e=>e.remove());
if(off){document.querySelectorAll('body>section,body>.hero,body>.trust').forEach(e=>e.remove());$('footer').insertAdjacentHTML('beforebegin','<section><div class="wrap" style="text-align:center"><h2>Page not available</h2><p class="sub">This page is not available right now.</p><a class="btn" href="index.html">Go Home</a></div></section>')}
const ov=$('#ov'),ob=$('#ob');$('#ox').onclick=()=>ov.classList.remove('on');ov.onclick=e=>{if(e.target===ov)ov.classList.remove('on')};
const card=p=>`<div class="card" data-id="${p.id}">${p.out?'<i class="so">SOLD OUT</i>':''}<img loading="lazy" src="${pimg(p)}" alt="${esc(p.name)}"><div><small>${esc((CATEGORIES.find(c=>c.key===p.cat)||{}).label)}</small><h3>${esc(p.name)}</h3><span>${price(p)}</span></div></div>`;
const bind=r=>r.querySelectorAll('.card').forEach(c=>c.onclick=()=>openP(c.dataset.id));
function openP(id){const p=find(id),all=[pimg(p),...(p.more||[]).map(x=>x+V)];
ob.innerHTML=`<img id="mi" src="${all[0]}" alt="${esc(p.name)}">${all.length>1?`<div class="th">${all.map(s=>`<img src="${s}" alt="">`).join('')}</div>`:''}<h2>${esc(p.name)}</h2><p class="sub">${price(p)}</p>${p.desc?`<p>${esc(p.desc)}</p>`:''}${p.out?'<p class="er">Sold out</p>':`<select id="sz">${(p.sizes||[]).map(s=>`<option>${esc(s)}</option>`).join('')}</select>${(p.colors||[]).length?`<select id="cl">${p.colors.map(s=>`<option>${esc(s)}</option>`).join('')}</select>`:''}<div class="gap"><button class="btn" id="ad">Add to Cart</button></div>`}<p class="trustm">Cash on Delivery · Easy exchange · WhatsApp support</p>`;
ob.querySelectorAll('.th img').forEach(i=>i.onclick=()=>$('#mi').src=i.src);
if(!p.out)$('#ad').onclick=()=>{const s=$('#sz').value,c=$('#cl')?$('#cl').value:'',x=cart.find(k=>k.id===id&&k.s===s&&k.c===c);x?x.q++:cart.push({id,s,c,q:1});save();openCart()};ov.classList.add('on')}
const F={};
function openCart(){let t=0,ok=true;const rows=cart.map((c,i)=>{const p=find(c.id);p.price>0?t+=p.price*c.q:ok=false;return `<div class="ci"><img src="${pimg(p)}" alt=""><div><b>${esc(p.name)}</b><br>Size ${esc(c.s)}${c.c?' · '+esc(c.c):''}${p.price>0?' · '+M(p.price):''}</div><button data-i="${i}" data-d="-1">−</button><span>${c.q}</span><button data-i="${i}" data-d="1">+</button></div>`}).join('');
const pays=[CONFIG.cod&&['cod','Cash on Delivery'],CONFIG.bkash&&['bkash','bKash'],CONFIG.nagad&&['nagad','Nagad'],CONFIG.payment&&['qr','Bangla QR']].filter(Boolean);
ob.innerHTML=`<h2>Your Cart</h2>${rows||'<p class="sub">Cart is empty. Browse the shop and add items.</p>'}`+(cart.length?`<h3>Delivery details</h3><input id="nm" placeholder="Your name *" autocomplete="name"><input id="ph" type="tel" placeholder="Phone number *" autocomplete="tel"><textarea id="ad2" rows="2" placeholder="Full delivery address *"></textarea><select id="ar"><option value="d">Inside Dhaka (${M(CONFIG.deliveryDhaka)})</option><option value="o">Outside Dhaka (${M(CONFIG.deliveryOutside)})</option></select><h3>Payment</h3><select id="pm">${pays.map(x=>`<option value="${x[0]}">${x[1]}</option>`).join('')}</select><div class="pi" id="pi"></div><div class="tot" id="tot"></div><p class="er" id="er"></p><button class="btn" id="co" style="width:100%">Order on WhatsApp</button>`:'');
ob.querySelectorAll('[data-i]').forEach(b=>b.onclick=()=>{const c=cart[b.dataset.i];c.q+=+b.dataset.d;if(c.q<1)cart.splice(b.dataset.i,1);save();openCart()});
if(cart.length){const dl=()=>$('#ar').value==='d'?CONFIG.deliveryDhaka:CONFIG.deliveryOutside;
const upd=()=>{const v=$('#pm').value;$('#pi').innerHTML=v==='cod'?'Pay in cash when you receive the parcel.':v==='qr'?`Scan this Bangla QR, pay, then send the screenshot on WhatsApp.<br><img src="assets/images/payment/bangla-qr.png${V}" alt="Bangla QR">`:`Send money to ${v==='bkash'?'bKash':'Nagad'} <b>${esc(CONFIG[v])}</b>, then send the transaction ID on WhatsApp.`;
$('#tot').innerHTML=(ok&&t?`Subtotal: ${M(t)}<br>`:'')+`Delivery: ${M(dl())}`+(ok&&t?`<br><b>Total: ${M(t+dl())}</b>`:'<br><small>Final price will be confirmed on WhatsApp.</small>')};
['nm','ph','ad2','ar','pm'].forEach(k=>{const e=$('#'+k);if(F[k])e.value=F[k];e.oninput=e.onchange=()=>{F[k]=e.value;upd()}});upd();
$('#co').onclick=()=>{const n=$('#nm').value.trim(),p=$('#ph').value.trim(),a=$('#ad2').value.trim();if(!n||p.replace(/\D/g,'').length<10||!a){$('#er').textContent='Please enter your name, a valid phone number and full address.';return}
location.href=wa(`Hi ${CONFIG.brand}, new order:\n`+cart.map((c,i)=>`${i+1}. ${find(c.id).name} (${c.id}), Size: ${c.s}${c.c?', Color: '+c.c:''}, Qty: ${c.q}`).join('\n')+(ok&&t?`\nSubtotal: ${M(t)}`:'')+`\nDelivery: ${M(dl())}`+(ok&&t?`\nTotal: ${M(t+dl())}`:'')+`\nPayment: ${$('#pm').selectedOptions[0].text}\n\nName: ${n}\nPhone: ${p}\nAddress: ${a}`)}}
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
document.querySelectorAll('[data-t]').forEach(e=>{const t=gt(SI,e.dataset.t);if(t!=null&&t!=='')e.textContent=t});
document.querySelectorAll('[data-wa]').forEach(a=>a.href=wa(`Hi ${CONFIG.brand}, ${a.dataset.wa||'I want to order.'}`));
document.querySelectorAll('[data-fb]').forEach(a=>a.href=CONFIG.facebook);document.querySelectorAll('[data-ig]').forEach(a=>a.href=CONFIG.instagram);
document.querySelectorAll('[data-c]').forEach(e=>e.textContent=CONFIG[e.dataset.c]);document.querySelectorAll('[data-m]').forEach(e=>e.textContent=M(CONFIG[e.dataset.m]));
document.querySelectorAll('[data-map]').forEach(l=>l.href=CONFIG.showroomMap||'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(CONFIG.showroomAddress));
if($('#cf'))$('#cf').onsubmit=e=>{e.preventDefault();location.href=wa(`${$('#cn').value}: ${$('#cm').value}`)};
if($('#pay')&&!CONFIG.payment&&!off)$('#pay').innerHTML='<h2>Payment</h2><p class="sub">Online payment page is turned off. Please order on WhatsApp.</p>';
