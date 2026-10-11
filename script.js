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

// A demo-only calendar. Real bookings require a secure server-side capacity system.
const monthNames=['tammikuuta','helmikuuta','maaliskuuta','huhtikuuta','toukokuuta','kesäkuuta','heinäkuuta','elokuuta','syyskuuta','lokakuuta','marraskuuta','joulukuuta'];
const monthHeading=['Tammikuu','Helmikuu','Maaliskuu','Huhtikuu','Toukokuu','Kesäkuu','Heinäkuu','Elokuu','Syyskuu','Lokakuu','Marraskuu','Joulukuu'];
const mondayOf=date=>{const d=new Date(date.getFullYear(),date.getMonth(),date.getDate());d.setDate(d.getDate()-(d.getDay()+6)%7);return d;};
const isoLocal=d=>[d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-');
const getISOWeek=d=>{let t=new Date(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate()));t.setUTCDate(t.getUTCDate()+4-(t.getUTCDay()||7));let y=new Date(Date.UTC(t.getUTCFullYear(),0,1));return Math.ceil((((t-y)/86400000)+1)/7);};
const initial=new Date();let shown=new Date(initial.getFullYear(),initial.getMonth(),1);const key='bakevy-demo-weeks-v1';let overrides={};try{overrides=JSON.parse(localStorage.getItem(key)||'{}')||{}}catch(e){overrides={}};
const statuses=[['available','Vapaata'],['limited','Kysy saatavuutta'],['full','Täynnä']];
function statusFor(d){const k=isoLocal(d);if(overrides[k])return overrides[k];const ix=Math.floor((d-new Date(initial.getFullYear(),initial.getMonth(),1))/604800000);return ix===1?'limited':ix===2?'full':'available';}
function renderWeeks(){ $('monthLabel').textContent=monthHeading[shown.getMonth()]+' '+shown.getFullYear();const weeks=[];let d=mondayOf(shown);while(d.getMonth()===shown.getMonth()||new Date(d.getFullYear(),d.getMonth(),d.getDate()+6).getMonth()===shown.getMonth()){weeks.push(new Date(d));d.setDate(d.getDate()+7);if(weeks.length>6)break;}const parent=$('weekList');parent.innerHTML='';weeks.forEach(m=>{const end=new Date(m);end.setDate(m.getDate()+6);const code=statusFor(m),label=statuses.find(x=>x[0]===code)[1];const row=document.createElement('button');row.type='button';row.className='week-row';row.setAttribute('aria-label',`Viikko ${getISOWeek(m)}: ${label}. Vaihda varaustilannetta.`);row.innerHTML=`<span class="week-no">VK ${getISOWeek(m)}</span><span class="week-dates">${m.getDate()}.${m.getMonth()+1}. – ${end.getDate()}.${end.getMonth()+1}.</span><span class="status ${code}">${label}</span>`;row.addEventListener('click',()=>{const next=statuses[(statuses.findIndex(x=>x[0]===statusFor(m))+1)%statuses.length][0];overrides[isoLocal(m)]=next;try{localStorage.setItem(key,JSON.stringify(overrides))}catch(e){}renderWeeks();});parent.appendChild(row);});}
$('prevMonth').addEventListener('click',()=>{shown=new Date(shown.getFullYear(),shown.getMonth()-1,1);renderWeeks();});$('nextMonth').addEventListener('click',()=>{shown=new Date(shown.getFullYear(),shown.getMonth()+1,1);renderWeeks();});$('resetWeeks').addEventListener('click',()=>{overrides={};try{localStorage.removeItem(key)}catch(e){}renderWeeks();});renderWeeks();
$('pickupDate').min=isoLocal(new Date());
$('orderForm').addEventListener('submit',e=>{e.preventDefault();const fd=new FormData(e.currentTarget);const text=`BakeVy – TILAUSKYSELY (DEMO)\n\nNimi: ${fd.get('name')}\nSähköposti: ${fd.get('email')}\nPuhelin: ${fd.get('phone')||'-'}\nNoutopäivä: ${fd.get('date')}\nTuote: ${fd.get('type')}\n\nKakkukoneen valinnat:\n- Koko: ${groups.sizes} hlö\n- Pohja: ${groups.bases}\n- Täyte: ${groups.fillings}\n- Koristelu: ${groups.decorations}\n- Hinta-arvio: ${total} € (ei sitova)\n\nToiveet: ${fd.get('message')||'-'}\n\nHUOM: Tämä on vain tilauskyselyn esikatselu. Mitään ei lähetetty.`;$('previewText').textContent=text;$('previewDialog').showModal();});
function closeDialog(){$('previewDialog').close();}
$('closeModal').addEventListener('click',closeDialog);
$('dismissModal').addEventListener('click',closeDialog);
$('previewDialog').addEventListener('click',e=>{if(e.target===$('previewDialog'))closeDialog();});
$('copyOrder').addEventListener('click',async()=>{try{await navigator.clipboard.writeText($('previewText').textContent);$('copyOrder').textContent='Kopioitu ✓';}catch(e){const r=document.createRange();r.selectNodeContents($('previewText'));getSelection().removeAllRanges();getSelection().addRange(r);$('copyOrder').textContent='Valitse teksti ja kopioi';}});

updateCake();
