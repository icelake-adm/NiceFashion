const $=(s,r=document)=>r.querySelector(s);
const find=id=>PRODUCTS.find(p=>p.id===id), img=p=>`assets/images/${p.cat}/${p.id}.jpg`;
const wa=t=>'https://wa.me/'+CONFIG.whatsapp+'?text='+encodeURIComponent(t);
const price=p=>p.price>0?CONFIG.currency+' '+p.price:'Price: ask on WhatsApp';
let cart=[];try{cart=JSON.parse(localStorage.getItem('nf_cart')||'[]')}catch(e){}
const save=()=>{try{localStorage.setItem('nf_cart',JSON.stringify(cart))}catch(e){}$('#cc').textContent=cart.reduce((a,c)=>a+c.q,0)};
const page=location.pathname.split('/').pop()||'index.html';
const NAV=[['index.html','Home'],['category.html','Shop'],['gallery.html','Gallery'],['about.html','About'],['contact.html','Contact']];
if(CONFIG.payment)NAV.push(['payment.html','Pay']);
document.body.insertAdjacentHTML('afterbegin',`<header><div class="wrap"><a class="logo" href="index.html"><b>NF</b><span>${CONFIG.brand}</span></a><nav>${NAV.map(n=>`<a href="${n[0]}"${n[0]===page?' class="on"':''}>${n[1]}</a>`).join('')}</nav><button class="cartb" id="cb">Cart (<span id="cc">0</span>)</button></div></header>`);
document.body.insertAdjacentHTML('beforeend',`<footer>© ${CONFIG.brand} · ${CONFIG.tagline}</footer><div class="ov" id="ov"><div class="pan"><button class="x" id="ox">×</button><div id="ob"></div></div></div>`);
const ov=$('#ov'),ob=$('#ob');$('#ox').onclick=()=>ov.classList.remove('on');ov.onclick=e=>{if(e.target===ov)ov.classList.remove('on')};
const card=p=>`<div class="card" data-id="${p.id}"><img loading="lazy" src="${img(p)}" alt="${p.name}"><div><small>${CATEGORIES.find(c=>c.key===p.cat).label}</small><h3>${p.name}</h3><span>${price(p)}</span></div></div>`;
function bind(root){root.querySelectorAll('.card').forEach(c=>c.onclick=()=>openP(c.dataset.id))}
function openP(id){const p=find(id);ob.innerHTML=`<img src="${img(p)}" alt="${p.name}"><h2>${p.name}</h2><p class="sub">${price(p)}</p><select id="sz">${p.sizes.map(s=>`<option>${s}</option>`).join('')}</select><div class="gap"><button class="btn o" id="ad">Add to Cart</button><a class="btn" id="od" href="#">Order Now</a></div>`;
$('#od').onclick=e=>{e.currentTarget.href=wa(`Hi ${CONFIG.brand}, I want to order:\n${p.name} (${p.id}), Size: ${$('#sz').value}, Qty: 1`)};
$('#ad').onclick=()=>{const s=$('#sz').value,x=cart.find(c=>c.id===id&&c.s===s);x?x.q++:cart.push({id,s,q:1});save();openCart()};ov.classList.add('on')}
function openCart(){let t=0,ok=true;const rows=cart.map((c,i)=>{const p=find(c.id);p.price>0?t+=p.price*c.q:ok=false;return `<div class="ci"><img src="${img(p)}" alt=""><div><b>${p.name}</b><br>Size ${c.s}</div><button data-i="${i}" data-d="-1">−</button><span>${c.q}</span><button data-i="${i}" data-d="1">+</button></div>`}).join('');
ob.innerHTML=`<h2>Your Cart</h2>${rows||'<p class="sub">Cart is empty.</p>'}${cart.length?`${ok&&t?`<p><b>Total: ${CONFIG.currency} ${t}</b></p>`:''}<textarea id="nt" rows="2" placeholder="Name, address, note (optional)"></textarea><div class="gap"><a class="btn" id="co" href="#">Order on WhatsApp</a>${CONFIG.payment?'<a class="btn o" href="payment.html">Pay via QR</a>':''}</div>`:''}`;
ob.querySelectorAll('[data-i]').forEach(b=>b.onclick=()=>{const c=cart[b.dataset.i];c.q+=+b.dataset.d;if(c.q<1)cart.splice(b.dataset.i,1);save();openCart()});
const co=$('#co');if(co)co.onclick=()=>{co.href=wa(`Hi ${CONFIG.brand}, I want to order:\n`+cart.map((c,i)=>`${i+1}. ${find(c.id).name} (${c.id}), Size: ${c.s}, Qty: ${c.q}`).join('\n')+($('#nt').value?`\n\n${$('#nt').value}`:''))};ov.classList.add('on')}
$('#cb').onclick=openCart;save();
const catq=new URLSearchParams(location.search).get('cat')||'all', G=$('#grid');
if(page==='category.html'&&G){$('#chips').innerHTML=[['all','All']].concat(CATEGORIES.map(c=>[c.key,c.label])).map(c=>`<a href="category.html?cat=${c[0]}"${c[0]===catq?' class="on"':''}>${c[1]}</a>`).join('');
const c=CATEGORIES.find(x=>x.key===catq);$('#ct').textContent=c?`${c.label} · ${c.bn}`:'All Products';G.innerHTML=PRODUCTS.filter(p=>!c||p.cat===catq).map(card).join('');bind(G)}
if($('#tiles'))$('#tiles').innerHTML=CATEGORIES.map(c=>`<a class="tile" href="category.html?cat=${c.key}"><img loading="lazy" src="assets/images/categories/${c.key}.jpg" alt="${c.label}"><span>${c.label}<br>${c.bn}</span></a>`).join('');
if($('#new')){$('#new').innerHTML=PRODUCTS.filter(p=>p.new).slice(0,8).map(card).join('');bind($('#new'))}
if($('#gal')){let h='';for(let i=1;i<=12;i++)h+=`<img loading="lazy" src="assets/images/gallery/gallery-${String(i).padStart(2,'0')}.jpg" alt="Gallery ${i}">`;$('#gal').innerHTML=h;$('#gal').querySelectorAll('img').forEach(i=>i.onclick=()=>{ob.innerHTML=`<img src="${i.src}" alt="">`;ov.classList.add('on')})}
document.querySelectorAll('[data-wa]').forEach(a=>a.href=wa(`Hi ${CONFIG.brand}, ${a.dataset.wa||'I want to order.'}`));
document.querySelectorAll('[data-fb]').forEach(a=>a.href=CONFIG.facebook);document.querySelectorAll('[data-ig]').forEach(a=>a.href=CONFIG.instagram);
document.querySelectorAll('[data-c]').forEach(e=>e.textContent=CONFIG[e.dataset.c]);
if($('#cf'))$('#cf').onsubmit=e=>{e.preventDefault();location.href=wa(`${$('#cn').value}: ${$('#cm').value}`)};
if($('#pay')){if(!CONFIG.payment)$('#pay').innerHTML='<h2>Payment</h2><p class="sub">Online payment is turned off. Please order on WhatsApp.</p>'}
