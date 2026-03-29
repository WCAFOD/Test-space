
const groups = {
  Education: ["Aurora Learning Hub","BrightPath Outreach","FutureMinds Initiative","ScholarsRise Programme","LeapForward Academy"],
  Environment: ["GreenPulse Energy Lab","EcoBridge Project","BlueEarth Restoration","CleanFuture Initiative","NatureNest Revive"],
  Community: ["CommunityConnect Hub","UnityWorks Partnership","PeopleFirst Collaboration","TogetherWeGrow","NeighbourBright Project"],
  Health: ["HealthBridge Access","WellLife Network","VitalCare Initiative","MindfulSteps Programme","StrongerTomorrow Health Hub"]
};

let shortlist = [];

function render(){
  const app = document.getElementById('app');
  app.innerHTML='';
  for(const group in groups){
    const h2=document.createElement('h2');h2.textContent=group;app.appendChild(h2);
    groups[group].forEach(name=>{
      const div=document.createElement('div');div.className='project';div.textContent=name;
      if(shortlist.includes(name)) div.classList.add('selected');
      div.onclick=()=>{ if(shortlist.includes(name)){shortlist=shortlist.filter(x=>x!==name);} else{shortlist.push(name);} render(); };
      app.appendChild(div);
    });
  }
  const wa=document.createElement('button');wa.textContent='Share via WhatsApp';wa.onclick=()=>{
    const text=encodeURIComponent('My shortlisted projects: '+shortlist.join(', '));
    window.open('https://wa.me/?text='+text,'_blank');};app.appendChild(wa);
  const em=document.createElement('button');em.textContent='Share via Email';em.onclick=()=>{
    const subject=encodeURIComponent('My Project Shortlist');
    const body=encodeURIComponent(shortlist.map(p=>'- '+p).join('
'));
    window.location.href=`mailto:?subject=${subject}&body=${body}`;};app.appendChild(em);
}
render();
