'use strict';
const $=id=>document.getElementById(id);
$('year').textContent=new Date().getFullYear();
$('menuBtn').addEventListener('click',()=>{const n=$('nav');n.classList.toggle('open');$('menuBtn').setAttribute('aria-expanded',n.classList.contains('open'));});
document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>$('nav').classList.remove('open')));

const productPhotos=[
  {src:'https://images.unsplash.com/photo-1594046242778-99efad4832a9?auto=format&fit=crop&fm=jpg&q=85&w=1200',alt:'Julkinen valokuva marjoin koristellusta täytekakusta'},
  {src:'https://images.unsplash.com/photo-1519654793190-2e8a4806f1f2?auto=format&fit=crop&fm=jpg&q=85&w=1200',alt:'Julkinen valokuva näyttävästä kerroskakusta'},
  {src:'https://images.unsplash.com/photo-1502597276204-a3833c063739?auto=format&fit=crop&fm=jpg&q=85&w=1200',alt:'Julkinen valokuva värikkäistä kuppikakuista'}
];
document.querySelectorAll('.product-card .product-image img').forEach((image,index)=>{
  const photo=productPhotos[index];
  if(!photo)return;
  image.src=photo.src;
  image.alt=photo.alt;
  image.referrerPolicy='no-referrer';
});
const heroPhoto=document.querySelector('.hero-image>img');
if(heroPhoto){
  heroPhoto.src='https://images.unsplash.com/photo-1697890191807-36238e23a0c9?auto=format&fit=crop&fm=jpg&q=85&w=1600';
  heroPhoto.alt='Julkinen valokuva leipomon tiskistä, leivonnaisista ja kakuista';
  heroPhoto.referrerPolicy='no-referrer';
}
const storyPhoto=document.querySelector('.story-visual img');
if(storyPhoto){
  storyPhoto.src='https://tse1.mm.bing.net/th/id/OIP.Kxmbz3YIK2fIDgKJSwEGkAHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3';
  storyPhoto.alt='BakeVyn Facebookissa julkaistu kuva';
  storyPhoto.referrerPolicy='no-referrer';
}

const groups={sizes:'8',bases:'Vaalea vanilja',fillings:'Mansikka & vanilja',decorations:'Hillitty koristelu'};
let total=45;

const previewConfig={
  sizes:{
    '8':{width:144,height:72,topY:84,bodyY:84,radiusX:72,radiusY:19,dripY:108,plateScale:1,mood:'Pieni ja suloinen'},
    '12':{width:164,height:80,topY:80,bodyY:80,radiusX:82,radiusY:21,dripY:106,plateScale:1.03,mood:'Tasapainoinen juhlakakku'},
    '16':{width:184,height:90,topY:76,bodyY:76,radiusX:92,radiusY:24,dripY:104,plateScale:1.08,mood:'Näyttävä juhlapöytään'},
    '20':{width:204,height:102,topY:70,bodyY:70,radiusX:102,radiusY:26,dripY:100,plateScale:1.13,mood:'Iso ja juhlavampi'}
  },
  bases:{
    'Vaalea vanilja':{body:'#e9cfc5',top:'#f7f0e7',icing:'#f9f5ef',accent:'#d9bbb1'},
    'Suklaa':{body:'#8f6554',top:'#b98c78',icing:'#f3e6dc',accent:'#6f4c40'},
    'Gluteenittomista raaka-aineista':{body:'#dbc8b4',top:'#f2e5d3',icing:'#faf4eb',accent:'#c4ab91'}
  },
  fillings:{
    'Mansikka & vanilja':{top:'#f0c0c3',bottom:'#f7e9df',label:'Raikas marjaisa'},
    'Vadelma & valkosuklaa':{top:'#d78398',bottom:'#fbf5ee',label:'Marjainen ja pehmeä'},
    'Suklaa & kinuski':{top:'#8d5b47',bottom:'#d1a06b',label:'Täyteläinen herkku'},
    'Mustikka & sitruuna':{top:'#7b7fb2',bottom:'#f1da72',label:'Raikas ja pirteä'}
  },
  decorations:{
    'Hillitty koristelu':{style:'minimal',label:'Kevyt ja elegantti'},
    'Runsas marjakoristelu':{style:'berries',label:'Runsas ja marjaisa'},
    'Teemakoristelu':{style:'theme',label:'Leikkisä teemakakku'}
  }
};

let cakeView='outside';
const cakePhotos={
  berry:'https://images.unsplash.com/photo-1669926268447-be7c02b88f30?auto=format&fit=crop&fm=jpg&q=85&w=1000',
  chocolate:'https://images.unsplash.com/photo-1709195902163-7eee13e78970?auto=format&fit=crop&fm=jpg&q=85&w=1000',
  theme:'https://images.unsplash.com/photo-1519654793190-2e8a4806f1f2?auto=format&fit=crop&fm=jpg&q=85&w=1000',
  slice:'https://images.unsplash.com/photo-1564844536308-75c540dbf14e?auto=format&fit=crop&fm=jpg&q=85&w=1000'
};
function photoForSelection(){
  if(cakeView==='inside')return cakePhotos.slice;
  if(groups.decorations==='Teemakoristelu')return cakePhotos.theme;
  if(groups.bases==='Suklaa'||groups.fillings==='Suklaa & kinuski')return cakePhotos.chocolate;
  return cakePhotos.berry;
}
function updateCakePreview(){
  const size=previewConfig.sizes[groups.sizes];
  const decor=previewConfig.decorations[groups.decorations];
  const filling=previewConfig.fillings[groups.fillings];
  const zoom={8:1,12:1.06,16:1.13,20:1.2}[groups.sizes];
  let photo=$('cakePhoto');
  if(!photo){
    $('cakePreview').outerHTML='<img id="cakePhoto" class="cake-photo" alt="" referrerpolicy="no-referrer">';
    photo=$('cakePhoto');
  }
  photo.src=photoForSelection();
  photo.alt=cakeView==='inside'?'Julkinen valokuva kakkupalasta, jossa kakun kerrokset näkyvät':'Julkinen valokuva valittua tyyliä vastaavasta juhlakakusta';
  photo.style.transform=`scale(${zoom})`;
  photo.style.objectPosition=decor.style==='berries'?'50% 42%':decor.style==='theme'?'50% 35%':'50% 50%';
  $('sumMood').textContent=decor.label;
  $('sumStyle').textContent=cakeView==='inside'?'Sisältä: '+filling.label:size.mood;
}

function updateCake(){
  total=0;
  for(const [group,value] of Object.entries(groups)){
    const btn=[...$(group).querySelectorAll('button')].find(b=>b.dataset.val===value);
    if(btn) total+=Number(btn.dataset.price);
  }
  $('sumSize').textContent=groups.sizes+' henkilöä';
  $('sumBase').textContent=groups.bases;
  $('sumFilling').textContent=groups.fillings;
  $('sumDecoration').textContent=groups.decorations;
  $('totalPrice').textContent=total+' €';
  $('formTotal').textContent=total+' €';
  updateCakePreview();
}

Object.keys(groups).forEach(group=>$(group).addEventListener('click',e=>{
  const btn=e.target.closest('button[data-val]');
  if(!btn)return;
  $(group).querySelectorAll('button').forEach(b=>b.classList.toggle('active',b===btn));
  groups[group]=btn.dataset.val;
  updateCake();
}));

document.querySelectorAll('[data-cake-view]').forEach(button=>button.addEventListener('click',()=>{
  cakeView=button.dataset.cakeView;
  document.querySelectorAll('[data-cake-view]').forEach(item=>{
    const selected=item===button;
    item.classList.toggle('active',selected);
    item.setAttribute('aria-pressed',String(selected));
  });
  updateCakePreview();
}));

// Demo-only booking calendar: the chosen date and time are added to the enquiry.
const monthHeading=['Tammikuu','Helmikuu','Maaliskuu','Huhtikuu','Toukokuu','Kesäkuu','Heinäkuu','Elokuu','Syyskuu','Lokakuu','Marraskuu','Joulukuu'];
const mondayOf=date=>{const d=new Date(date.getFullYear(),date.getMonth(),date.getDate());d.setDate(d.getDate()-(d.getDay()+6)%7);return d;};
const isoLocal=d=>[d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-');
const initial=new Date();initial.setHours(0,0,0,0);let shown=new Date(initial.getFullYear(),initial.getMonth(),1);const key='bakevy-demo-days-v1';let overrides={};try{overrides=JSON.parse(localStorage.getItem(key)||'{}')||{}}catch(e){overrides={}};
const statuses=[['available','Vapaata'],['limited','Kysy saatavuutta'],['full','Täynnä']];let selectedPickupDate='';
const timeInput=document.createElement('input');timeInput.type='hidden';timeInput.name='time';timeInput.id='pickupTime';$('orderForm').appendChild(timeInput);
const timePicker=document.createElement('label');timePicker.className='pickup-time-picker';timePicker.innerHTML='Valitse noutoaika <select id="pickupTimeSelect"><option value="">Valitse aika</option><option>10.00–12.00</option><option>12.00–14.00</option><option>14.00–16.00</option><option>16.00–18.00</option></select>';$('weekList').insertAdjacentElement('afterend',timePicker);
document.querySelector('.calendar-section .section-top>p').textContent='Valitse kalenterista noutopäivä ja sen jälkeen sinulle sopiva noutoaika.';document.querySelector('.cal-mini').textContent='VALITSE NOUTOAIKA';document.querySelector('.calendar-side h3').textContent='Valitse nouto helposti kalenterista.';document.querySelector('.calendar-side>p').textContent='Vihreät päivät ovat vapaana. Keltainen tarkoittaa, että varmistamme saatavuuden. Harmaat päivät eivät ole varattavissa demossa.';document.querySelector('.calendar-side .underlink').textContent='Siirry tilaustietoihin ↗';document.querySelector('.calendar-side .underlink').href='#tilaus';document.querySelector('.calendar-admin p').textContent='Saatavuus on tässä paikallisessa demossa esimerkkitietoa.';$('goOrder').textContent='Valitse noutoaika ↘';$('goOrder').href='#kalenteri';
document.querySelector('.builder-heading .eyebrow').textContent='VAIHE 1 / 4 · VALITSE KAKKU';document.querySelector('.order-section').insertAdjacentElement('afterend',document.querySelector('.story'));
document.querySelector('.order-section .section-top .eyebrow').textContent='VAIHE 3 / 4 · YHTEYSTIEDOT';document.querySelector('.order-section .section-top h2').innerHTML='Viimeistele <em>tilauksesi.</em>';document.querySelector('.order-section .section-top>p').textContent='Tarkista noutopäivä ja täytä yhteystietosi. Sen jälkeen siirryt maksun esikatseluun.';document.querySelector('#orderForm button[type="submit"]').innerHTML='Tilaa tästä <span>↗</span>';
const pickupTimeSelect=$('pickupTimeSelect');pickupTimeSelect.addEventListener('change',()=>{timeInput.value=pickupTimeSelect.value;});
function statusFor(d){const k=isoLocal(d);if(overrides[k])return overrides[k];const offset=Math.floor((d-initial)/86400000);return offset%11===0?'full':offset%5===0?'limited':'available';}
function selectPickupDate(date){const code=statusFor(date);if(date<initial||code==='full')return;selectedPickupDate=isoLocal(date);$('pickupDate').value=selectedPickupDate;shown=new Date(date.getFullYear(),date.getMonth(),1);renderCalendar();}
function renderCalendar(){
  $('monthLabel').textContent=monthHeading[shown.getMonth()]+' '+shown.getFullYear();const parent=$('weekList');parent.className='week-list month-calendar';parent.innerHTML='<div class="calendar-weekdays"><span>Ma</span><span>Ti</span><span>Ke</span><span>To</span><span>Pe</span><span>La</span><span>Su</span></div><div class="calendar-days"></div>';
  const days=parent.querySelector('.calendar-days'),start=mondayOf(shown);
  for(let i=0;i<42;i++){const day=new Date(start);day.setDate(start.getDate()+i);const code=statusFor(day),todayOrFuture=day>=initial,currentMonth=day.getMonth()===shown.getMonth(),selected=isoLocal(day)===selectedPickupDate;const button=document.createElement('button');button.type='button';button.className=`calendar-day ${code}${currentMonth?'':' other-month'}${selected?' selected':''}`;button.disabled=!todayOrFuture||code==='full';button.innerHTML=`<span>${day.getDate()}</span><i aria-hidden="true"></i>`;button.setAttribute('aria-label',`${day.getDate()}.${day.getMonth()+1}.${day.getFullYear()}: ${statuses.find(item=>item[0]===code)[1]}${selected?', valittu noutopäivä':''}`);button.addEventListener('click',()=>selectPickupDate(day));days.appendChild(button);}
}
$('prevMonth').addEventListener('click',()=>{shown=new Date(shown.getFullYear(),shown.getMonth()-1,1);renderCalendar();});$('nextMonth').addEventListener('click',()=>{shown=new Date(shown.getFullYear(),shown.getMonth()+1,1);renderCalendar();});$('resetWeeks').addEventListener('click',()=>{overrides={};try{localStorage.removeItem(key)}catch(e){}renderCalendar();});
$('pickupDate').min=isoLocal(initial);$('pickupDate').addEventListener('change',()=>{if(!$('pickupDate').value)return;const date=new Date($('pickupDate').value+'T00:00:00');if(statusFor(date)!=='full'){selectedPickupDate=$('pickupDate').value;shown=new Date(date.getFullYear(),date.getMonth(),1);renderCalendar();}});renderCalendar();
const escapeHtml=value=>String(value||'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[char]));
$('orderForm').addEventListener('submit',e=>{
  e.preventDefault();e.stopImmediatePropagation();
  if(!timeInput.value){pickupTimeSelect.focus();alert('Valitse ensin noutoaika kalenterista.');return;}
  const fd=new FormData(e.currentTarget),name=escapeHtml(fd.get('name')),date=escapeHtml(fd.get('date')),time=escapeHtml(timeInput.value),email=escapeHtml(fd.get('email'));
  const modal=$('previewDialog').querySelector('.modal');modal.innerHTML=`<button class="close-modal" id="closePayment" aria-label="Sulje">✕</button><div class="eyebrow">VAIHE 4 / 4 · MAKSU</div><h2>Vahvista ja <em>maksa.</em></h2><p>Demo: maksua ei välitetä maksupalveluun eikä korttitietoja käsitellä.</p><div class="confirmation-box"><b>${name}</b><br>Nouto: ${date} klo ${time}<br>Sähköposti: ${email}</div><div class="payment-total">${total} €</div><div class="payment-methods"><label><input type="radio" name="payment" checked> Korttimaksu</label><label><input type="radio" name="payment"> Mobiilimaksu</label></div><button type="button" class="btn btn-dark full" id="confirmPayment">Maksa demo-tilaus <span>↗</span></button><p class="payment-note">Oikea maksu vaatii suojatun maksupalvelun ja palvelinpuolen vahvistuksen.</p>`;$('previewDialog').showModal();
  $('closePayment').addEventListener('click',closeDialog);$('confirmPayment').addEventListener('click',()=>{modal.innerHTML=`<button class="close-modal" id="closePayment" aria-label="Sulje">✕</button><div class="eyebrow">TILAUS VAHVISTETTU · DEMO</div><h2>Kiitos, ${name} ♡</h2><p>Kakkusi on varattu valitsemaasi noutoajankohtaan.</p><div class="confirmation-box"><b>Noutoajankohta</b><br>${date} klo ${time}<br><br><b>Noutopaikka</b><br>[Lisää vahvistettu nouto-osoite ennen julkaisua], Oulu</div><p class="payment-note">Tämä on paikallinen demo. Maksua ei veloitettu eikä tilausta lähetetty.</p><button type="button" class="btn btn-dark" id="closePayment">Valmis</button>`;$('closePayment').addEventListener('click',closeDialog);});
},true);
function closeDialog(){$('previewDialog').close();}
$('closeModal').addEventListener('click',closeDialog);
$('dismissModal').addEventListener('click',closeDialog);
$('previewDialog').addEventListener('click',e=>{if(e.target===$('previewDialog'))closeDialog();});
$('copyOrder').addEventListener('click',async()=>{try{await navigator.clipboard.writeText($('previewText').textContent);$('copyOrder').textContent='Kopioitu ✓';}catch(e){const r=document.createRange();r.selectNodeContents($('previewText'));getSelection().removeAllRanges();getSelection().addRange(r);$('copyOrder').textContent='Valitse teksti ja kopioi';}});

updateCake();
