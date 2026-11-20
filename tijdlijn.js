/* ====== VUL HIER JE SAMENWERKINGEN IN ======
   wanneer:    "JJJJ-MM", bijv. "2026-03" (bepaalt de volgorde)
   label:      optioneel, eigen tekst voor de datum, bijv. "jan–mei 2026"
   logo:       exact zoals de alt-tekst in de merkenbalk (bijv. "Bol", "Netflix", "Universal Pictures")
   video/poster: pad in de repo
   meer:       optioneel, extra video's, bijv. ["bol/3","bol/4"] (map/nummer)
   resultaten: lijst van [getal, label]; de eerste staat op mobiel naast de video */
var SAMENWERKINGEN = [
  { wanneer:"2026-01", label:"jan–mei 2026", merk:"Bol", logo:"Bol", titel:"On-camera talent voor Bol",
    vraag:"Een vast gezicht voor de socials van Bol, die hun scripts en concepten tot leven brengt.",
    gemaakt:"Zo’n 8 shootdagen van januari tot mei, met meerdere TikTok-video’s voor de eigen kanalen van Bol.",
    resultaten:[["10M+","Views (met ad boost)"],["±8","Shootdagen"]], video:"videos/bol/2.mp4", poster:"videos/bol/2.jpg", meer:["bol/5","bol/6","bol/7","bol/1","bol/3","bol/4"] },
  { wanneer:"2026-03", merk:"DPG Media", logo:"DPG Media", titel:"/Topics voor studenten",
    vraag:"Het krantenabonnement /Topics tot leven brengen voor studenten.",
    gemaakt:"Twee video’s, van concept tot filmen en editen.",
    resultaten:[["120K","Views"],["8K","Likes"],["290","Shares"]], video:"videos/dpg-topics/1.mp4", poster:"videos/dpg-topics/1.jpg", meer:["dpg-topics/2"] },
  { wanneer:"2026-03", merk:"Fernandes", logo:"Fernandes", titel:"Cultuurswitch met Fernandes",
    vraag:"Humoristische content die bij Fernandes past.",
    gemaakt:"Twee video’s op het account van Fernandes, waarin ik met een andere creator van cultuur wisselde.",
    resultaten:[["45K","Views"],["7K","Likes"],["1,2K","Shares"]], video:"videos/fernandes/1.mp4", poster:"videos/fernandes/1.jpg", meer:["fernandes/2"] },
  { wanneer:"2026-03", merk:"Netflix", logo:"Netflix", titel:"‘Inside the Manosphere’",
    vraag:"De documentaire ‘Inside the Manosphere’ onder de aandacht brengen.",
    gemaakt:"Een video op het account van Netflix, waarin ik mijn mening geef over de docu. Zelf gefilmd en geëdit.",
    resultaten:[["58K","Views"],["3K","Likes"],["352","Shares"]], video:"videos/netflix/1.mp4", poster:"videos/netflix/1.jpg" },
  {geenCta:true, wanneer:"2026-06", merk:"Schiphol", logo:"Schiphol", titel:"Een dagje Schiphol",
    vraag:"Laten zien hoe relaxed je via Schiphol reist en wat er nog meer te beleven is: kom eerder en ontdek het gevarieerde horeca-aanbod en meer.",
    gemaakt:"Een Instagram Reel.",
    resultaten:[["1,5M","Views (met ad boost)"],["1,2K","Likes"],["60","Shares"]], video:"videos/schiphol/1.mp4", poster:"videos/schiphol/1.jpg" },
  { wanneer:"2026-07", merk:"Universal Pictures", logo:"Universal Pictures", titel:"Evil Dead Burn",
    vraag:"De bioscooprelease van Evil Dead Burn promoten.",
    gemaakt:"Een TikTok, ook geplaatst op Instagram.",
    resultaten:[["120K","Views"],["8,2K","Likes"],["4K","Shares"]], video:"videos/universal/5.mp4", poster:"videos/universal/5.jpg" },
  { wanneer:"2026-07", merk:"Emma Sleep", logo:"Emma", titel:"Emma Sleep",
    vraag:"Het nieuwe matras van Emma Sleep promoten.",
    gemaakt:"Een TikTok, ook geplaatst op Instagram.",
    resultaten:[["10K","Views"],["1K","Likes"],["45","Shares"]], video:"videos/emma-sleep/1.mp4", poster:"videos/emma-sleep/1.jpg" },
  { wanneer:"2026-08", merk:"Sony Pictures", logo:"Sony Pictures", titel:"Insidious: Out of the Further",
    vraag:"De bioscooprelease van Insidious: Out of the Further promoten.",
    gemaakt:"Een video voor TikTok en Instagram.",
    resultaten:[["140K","Views"],["10,2K","Likes"],["4,5K","Shares"]], video:"videos/sony-pictures/1.mp4", poster:"videos/sony-pictures/1.jpg" },
  { wanneer:"2026-09", merk:"Oxfam Novib", logo:"Oxfam Novib", titel:"Prinsjesdag met Oxfam Novib",
    vraag:"Een interviewvideo rond Prinsjesdag voor het eigen account van Oxfam Novib.",
    gemaakt:"Een straatinterview: wat zou jij doen als jij de miljarden mocht verdelen?",
    kanaal:"Oxfam Novib", resultaten:[], video:"videos/oxfam-novib/2.mp4", poster:"videos/oxfam-novib/2.jpg" },
  { wanneer:"2026-09", merk:"Sony Pictures", logo:"Sony Pictures", titel:"Resident Evil",
    vraag:"De bioscooprelease van Resident Evil promoten.",
    gemaakt:"Twee video’s voor TikTok en Instagram: een trendvideo en een video over de release.",
    resultaten:[["90K","Views"],["2,3K","Likes"],["900","Shares"]], video:"videos/sony-pictures/2.mp4", poster:"videos/sony-pictures/2.jpg", meer:["sony-pictures/3"] },
  { wanneer:"2026-09", label:"sep–okt 2026", merk:"NS", logo:"NS", titel:"Shootdagen voor NS",
    vraag:"Content voor de eigen socials van NS.",
    gemaakt:"Twee shootdagen met video’s voor de kanalen van NS.",
    kanaal:"NS", resultaten:[], video:"videos/ns/1.mp4", poster:"videos/ns/1.jpg", meer:["ns/2"] },
  { wanneer:"2026-10", merk:"Oxfam Novib", logo:"Oxfam Novib", titel:"Olijfolie met Oxfam Novib",
    vraag:"De olijfolie van Oxfam Novib in de spotlight zetten, met als call to action een kennismaking met hun webshop.",
    gemaakt:"Een TikTok, vijf dagen met ad boost.",
    resultaten:[["55K","Views (met ad boost)"],["2K","Likes"],["350","Shares"]], video:"videos/oxfam-novib/1.mp4", poster:"videos/oxfam-novib/1.jpg" },
  { wanneer:"2026-11", merk:"Paramount Pictures", logo:"Paramount", titel:"Ebenezer in de bioscoop",
    vraag:"De film Ebenezer onder de aandacht brengen.",
    gemaakt:"Een video voor TikTok en Instagram.",
    resultaten:[], video:"videos/paramount/1.mp4", poster:"videos/paramount/1.jpg" }
];

(function(){
  var track=document.getElementById("tl-track"); if(!track){return;}
  var scroll=document.getElementById("tl-scroll"), svg=document.getElementById("tl-line");
  var MAANDEN=["jan","feb","mrt","apr","mei","jun","jul","aug","sep","okt","nov","dec"];
  function datum(w){ if(!w){return null;} var p=w.split("-"); return (p[1]?MAANDEN[parseInt(p[1],10)-1]+" ":"")+p[0]; }
  function logo(naam){ var im=document.querySelector('#merken img[alt="'+naam+'"]'); return im?im.getAttribute("src"):""; }
  var lijst=SAMENWERKINGEN.slice().sort(function(a,b){ if(!a.wanneer){return 1;} if(!b.wanneer){return -1;} return a.wanneer<b.wanneer?-1:(a.wanneer>b.wanneer?1:0); });
  var hoeken=[-4,3,-2.5,4,-3,2];
  var pijl='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M9 7h8v8"/></svg>';

  lijst.forEach(function(s,i){
    var b=document.createElement("button");
    b.className="tl-item"; b.type="button"; b.setAttribute("aria-label",s.merk+": "+s.titel);
    var d=s.label||datum(s.wanneer)||"";
    var r=(s.resultaten||[])[0];
    var stat=r?'<b>'+r[0]+'</b> '+r[1].toLowerCase():(s.kanaal?'gepost op het kanaal van <b>'+s.kanaal+'</b>':s.titel);
    var src=logo(s.logo);
    b.innerHTML='<span class="tl-card" style="--r:'+hoeken[i%hoeken.length]+'deg"><video muted loop playsinline preload="none" poster="'+s.poster+'"><source src="'+s.video+'" type="video/mp4"></video><span class="tl-hint" style="--d:'+(i*0.35).toFixed(2)+'s">'+pijl+'<span class="t">Bekijk</span></span>'+(src?'<span class="tl-logo"><img data-logo="'+s.logo+'" src="'+src+'" alt="'+s.merk+'"></span>':'')+'</span><span class="tl-dot"></span><span class="tl-meta"><span class="tl-date">'+d+'</span><span class="tl-brand">'+s.merk+'</span><span class="tl-stat">'+stat+'</span></span>';
    var v=b.querySelector("video");
    b.addEventListener("mouseenter",function(){ var p=v.play(); if(p&&p.catch){p.catch(function(){});} });
    b.addEventListener("mouseleave",function(){ v.pause(); });
    b.addEventListener("click",function(){ open(s); });
    b._s=s;
    track.appendChild(b);
  });

  var nx=document.createElement("a");
  nx.className="tl-item tl-next"; nx.href="#boeken"; nx.setAttribute("aria-label","Jouw merk als volgende? Let’s talk!");
  nx.innerHTML='<span class="tl-card" style="--r:'+hoeken[lijst.length%hoeken.length]+'deg"><span class="tl-eyes">👀</span><span class="tl-q">Jouw merk als volgende?</span><span class="tl-cta">Let’s talk! →</span></span><span class="tl-dot"></span><span class="tl-meta"><span class="tl-date">Binnenkort</span><span class="tl-brand">Jouw merk?</span><span class="tl-stat">Let’s talk! →</span></span>';
  track.appendChild(nx);

  function mobiel(){ return matchMedia("(max-width:700px)").matches; }

  function layout(){
    var items=track.querySelectorAll(".tl-item");
    if(!mobiel()){
      var gap=210, pad=150, w=pad*2+gap*(items.length-1), W=Math.max(w,scroll.clientWidth), off=(W-w)/2;
      track.style.width=W+"px"; track.style.height="600px";
      items.forEach(function(el,i){
        var omhoog=i%2===0; el.classList.toggle("down",!omhoog);
        el.style.left=(off+pad+gap*i)+"px"; el.style.top="0px";
        var dot=el.querySelector(".tl-dot"); var dotY=omhoog?272:328;
        el.style.top=(dotY-(dot.offsetTop+8))+"px";
      });
    } else {
      track.style.width=""; track.style.height="";
      items.forEach(function(el,i){ el.classList.remove("down"); el.style.left=""; el.style.top=""; el.style.setProperty("--x",(i%2?28:6)+"px"); });
    }
    lijn();
    status();
  }

  function lijn(){
    var tr=track.getBoundingClientRect(), pts=[];
    track.querySelectorAll(".tl-dot").forEach(function(d){ var r=d.getBoundingClientRect(); pts.push([r.left+r.width/2-tr.left, r.top+r.height/2-tr.top]); });
    if(!pts.length){return;}
    var a=pts[0], z=pts[pts.length-1];
    if(mobiel()){ pts.unshift([a[0]+14,a[1]-60]); pts.push([z[0]+14,z[1]+50]); }
    else { pts.unshift([a[0]-160,300]); pts.push([z[0]+160,300]); }
    var p="M"+pts[0][0]+" "+pts[0][1];
    for(var i=0;i<pts.length-1;i++){
      var p0=pts[i-1]||pts[i], p1=pts[i], p2=pts[i+1], p3=pts[i+2]||p2;
      p+=" C"+(p1[0]+(p2[0]-p0[0])/6)+" "+(p1[1]+(p2[1]-p0[1])/6)+" "+(p2[0]-(p3[0]-p1[0])/6)+" "+(p2[1]-(p3[1]-p1[1])/6)+" "+p2[0]+" "+p2[1];
    }
    svg.setAttribute("width",track.scrollWidth); svg.setAttribute("height",track.scrollHeight);
    svg.querySelector("path").setAttribute("d",p);
  }

  /* pijlknoppen, voortgang en slepen (desktop) */
  var prev=document.getElementById("tl-prev"), next=document.getElementById("tl-next"), bar=document.getElementById("tl-bar"), teller=document.getElementById("tl-count");
  function status(){
    var max=scroll.scrollWidth-scroll.clientWidth;
    if(prev){ prev.hidden=scroll.scrollLeft<8; }
    if(next){ next.hidden=scroll.scrollLeft>max-8; }
    if(bar){ var zicht=scroll.clientWidth/scroll.scrollWidth; bar.style.width=(zicht*100)+"%"; bar.style.transform="translateX("+(max>0?(scroll.scrollLeft/max)*((1/zicht)-1)*100:0)+"%)"; }
    if(teller){
      var mid=scroll.scrollLeft+scroll.clientWidth, n=0;
      track.querySelectorAll(".tl-item").forEach(function(el){ if(el.offsetLeft<mid-60){n++;} });
      teller.textContent=Math.min(n,lijst.length)+" / "+lijst.length;
    }
  }
  function stap(r){ scroll.scrollBy({left:r*Math.max(420,scroll.clientWidth*0.6),behavior:"smooth"}); if(next){next.classList.remove("nudge");} }
  if(prev){ prev.addEventListener("click",function(){ stap(-1); }); }
  if(next){ next.addEventListener("click",function(){ stap(1); }); }
  scroll.addEventListener("scroll",function(){ status(); },{passive:true});

  var sleep=null, versleept=false;
  scroll.addEventListener("pointerdown",function(e){ if(e.pointerType!=="mouse"||mobiel()||e.button!==0){return;} sleep={x:e.clientX,l:scroll.scrollLeft}; versleept=false; });
  addEventListener("pointermove",function(e){ if(!sleep){return;} var dx=e.clientX-sleep.x; if(Math.abs(dx)>6){ versleept=true; scroll.classList.add("dragging"); } if(versleept){ scroll.scrollLeft=sleep.l-dx; } });
  addEventListener("pointerup",function(){ if(!sleep){return;} sleep=null; setTimeout(function(){ scroll.classList.remove("dragging"); },0); });
  scroll.addEventListener("click",function(e){ if(versleept){ e.preventDefault(); e.stopPropagation(); versleept=false; } },true);
  if(next && "IntersectionObserver" in window){
    var io=new IntersectionObserver(function(es){ es.forEach(function(en){ if(en.isIntersecting){ next.classList.add("nudge"); io.disconnect(); } }); },{threshold:.5});
    io.observe(scroll);
  }

  /* vergroot venster */
  var modal=document.getElementById("tl-modal"), mv=document.getElementById("m-video");
  function open(s,start){
    document.getElementById("m-title").textContent=s.titel;
    document.getElementById("m-vraag").textContent=s.vraag;
    document.getElementById("m-gemaakt").textContent=s.gemaakt;
    document.getElementById("m-date").textContent=s.label||datum(s.wanneer)||"";
    var ml=document.getElementById("m-logo"); ml.alt=s.merk; ml.src=logo(s.logo);
    document.getElementById("m-metrics").innerHTML=(s.resultaten||[]).map(function(r){return '<div><div class="m-num">'+r[0]+'</div><div class="m-lbl">'+r[1]+'</div></div>';}).join("");
    if(!(s.resultaten||[]).length&&s.kanaal){ document.getElementById("m-metrics").innerHTML='<div class="m-kanaal">Gepost op het kanaal van <b>'+s.kanaal+'</b></div>'; }
    var mc=document.getElementById("m-cta"); if(mc){ var top=(s.resultaten||[]).reduce(function(a,r){ var t=String(r[0]).replace(/[^0-9,.KkMm]/g,"").replace(",","."); var n=parseFloat(t)||0; if(/m/i.test(t)){n*=1e6;} else if(/k/i.test(t)){n*=1e3;} return Math.max(a,n); },0); mc.hidden=s.geenCta||top<100000; }
    mv.poster=s.poster; mv.src=s.video;
    var alle=[{video:s.video,poster:s.poster}].concat((s.meer||[]).map(function(m){return {video:"videos/"+m+".mp4",poster:"videos/"+m+".jpg"};}));
    var mw=document.getElementById("m-more-wrap"), mm=document.getElementById("m-more");
    mw.hidden=alle.length<2;
    mm.innerHTML=alle.map(function(a,i){return '<button type="button" class="'+(i===0?'on':'')+'" aria-label="Video '+(i+1)+'"><img src="'+a.poster+'" alt=""></button>';}).join("");
    if(start){ var sb=mm.querySelectorAll("button")[start]; if(sb){ mm.querySelectorAll("button").forEach(function(x){x.classList.remove("on");}); sb.classList.add("on"); mv.poster=alle[start].poster; mv.src=alle[start].video; } }
    mm.querySelectorAll("button").forEach(function(btn,i){ btn.addEventListener("click",function(){ mm.querySelectorAll("button").forEach(function(x){x.classList.remove("on");}); btn.classList.add("on"); mv.poster=alle[i].poster; mv.src=alle[i].video; var q=mv.play(); if(q&&q.catch){q.catch(function(){});} }); });
    modal.showModal(); var p=mv.play(); if(p&&p.catch){p.catch(function(){});}
  }
  modal.addEventListener("close",function(){ mv.pause(); });
  var mca=document.getElementById("m-cta-a"); if(mca){ mca.addEventListener("click",function(){ modal.close(); }); }
  modal.addEventListener("click",function(e){ if(e.target===modal){ modal.close(); } });
  document.getElementById("m-x").addEventListener("click",function(){ modal.close(); });

  /* vanuit de profieltelefoon: soepel naar een samenwerking scrollen en de video openen */
  window.tlGaNaar=function(pad){
    var doel=null, idx=0;
    track.querySelectorAll(".tl-item").forEach(function(el){ var s=el._s; if(!s||doel){return;} var lijstje=[s.video].concat((s.meer||[]).map(function(m){return "videos/"+m+".mp4";})); var k=lijstje.indexOf("videos/"+pad+".mp4"); if(k>-1){ doel=el; idx=k; } });
    if(!doel){ document.getElementById("werk").scrollIntoView({behavior:"smooth"}); return; }
    var rm=matchMedia("(prefers-reduced-motion:reduce)").matches, gedrag=rm?"auto":"smooth";
    var sec=document.getElementById("werk");
    var y; if(mobiel()){ var r=doel.getBoundingClientRect(); y=scrollY+r.top-(innerHeight-r.height)/2; } else { y=scrollY+sec.getBoundingClientRect().top-70; }
    window.scrollTo({top:Math.max(0,y),behavior:gedrag});
    var wacht=rm?50:900;
    setTimeout(function(){
      if(!mobiel()){ scroll.scrollTo({left:Math.max(0,doel.offsetLeft-scroll.clientWidth/2),behavior:gedrag}); }
      setTimeout(function(){
        doel.classList.remove("tl-pulse"); void doel.offsetWidth; doel.classList.add("tl-pulse");
        setTimeout(function(){ open(doel._s,idx); }, rm?0:750);
      }, rm?0:(mobiel()?0:650));
    }, wacht);
  };

  layout();
  var t; addEventListener("resize",function(){ clearTimeout(t); t=setTimeout(layout,120); });
  if(document.fonts&&document.fonts.ready){document.fonts.ready.then(layout);}
})();
