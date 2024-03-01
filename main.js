(()=>{"use strict";const e=function(){return{createProject:function(){const e=document.getElementById("projectForm"),t=document.getElementById("projectCreator"),n=document.getElementById("projectDisplay"),o=document.getElementById("project"),c=document.querySelector(".taskLauncher");let d=[];e.addEventListener("submit",(a=>{a.preventDefault();const l=document.getElementById("name").value;d.push(l),console.log(`New project added: ${l}`),console.log(d);let s=d.slice(-1);console.log(s);const r=document.createElement("button");r.classList.add("projectBtn"),r.textContent=s,n.appendChild(r);const i=document.createElement("option");i.text=s,o.add(i),e.reset(),t.style.display="none",c.style.pointerEvents="auto"}))},taskFactory:function(e,t,n,o,c){return{title:e,note:t,date:n,priority:o,project:c}}}},t={launchTaskCreator:function(){const e=document.querySelector(".taskLauncher"),t=document.getElementById("taskCreator"),n=document.querySelector(".createProjectBtn");e.addEventListener("click",(e=>{e.stopPropagation(),t.style.display="block",n.style.pointerEvents="none"}))},closeTaskCreator:function(){const e=document.getElementById("taskCreator"),t=document.querySelector(".taskClose"),n=document.querySelector(".createProjectBtn");t.addEventListener("click",(()=>{e.style.display="none",n.style.pointerEvents="auto"})),window.addEventListener("click",(t=>{e.contains(t.target)||(e.style.display="none",n.style.pointerEvents="auto")}))},launchProjectCreator:function(){const e=document.getElementById("projectCreator"),t=document.querySelector(".createProjectBtn"),n=document.querySelector(".taskLauncher");t.addEventListener("click",(t=>{t.stopPropagation(),e.style.display="block",n.style.pointerEvents="none"}))},closeProjectCreator:function(){const e=document.getElementById("projectCreator"),t=document.querySelector(".projectClose"),n=document.querySelector(".taskLauncher");t.addEventListener("click",(()=>{e.style.display="none",n.style.pointerEvents="auto"})),window.addEventListener("click",(t=>{e.contains(t.target)||(e.style.display="none",n.style.pointerEvents="auto")}))},displayTask:function(){const t=document.getElementById("taskForm"),n=document.getElementById("content"),o=document.getElementById("taskCreator"),c=document.querySelector(".createProjectBtn");t.addEventListener("submit",(d=>{d.preventDefault();const a=document.getElementById("title").value,l=document.getElementById("add_note").value,s=document.getElementById("date").value,r=document.getElementById("priority").value,i=document.getElementById("project").value;let u=e().taskFactory(a,l,s,r,i);console.log(u),n.appendChild(function(){const e=document.createElement("div");e.classList.add("taskCard");const t=document.createElement("input");t.classList.add("taskCheckBox"),t.setAttribute("type","checkbox");const n=document.createElement("div");n.setAttribute("id","iconContainer");const o=document.createElement("div");o.classList.add("taskLeft");const c=document.createElement("div");return c.classList.add("taskRight"),n.appendChild(function(){const e=document.createElement("img");return e.classList.add("editIcon"),e.src="../dist/icons/edit.svg",e.alt="Edit icon",e}()),n.appendChild(function(){const e=document.createElement("img");return e.classList.add("infoIcon"),e.src="../dist/icons/info.svg",e.alt="Information icon",e}()),n.appendChild(function(){const e=document.createElement("img");return e.classList.add("deleteIcon"),e.src="../dist/icons/delete.svg",e.alt="Delete Icon",e}()),o.appendChild(t),o.appendChild(function(){const e=document.getElementById("title").value,t=document.createElement("div");return t.classList.add("taskTitle"),t.textContent=e,t}()),c.appendChild(function(){const e=document.getElementById("date").value,t=document.createElement("div");return t.classList.add("taskDate"),t.textContent=e,t}()),c.appendChild(n),e.appendChild(o),e.appendChild(c),e}()),n.appendChild(function(){const e=document.getElementById("title").value,t=document.getElementById("add_note").value,n=document.getElementById("date").value,o=document.getElementById("priority").value,c=document.getElementById("project").value,d=document.createElement("div");d.classList.add("taskCardDetailsContainer"),d.style.display="none";const a=document.createElement("button");a.classList.add("closeTaskDetailsBtn"),a.textContent="Close";const l=document.createElement("div");l.classList.add("taskCardDetails");const s=document.createElement("div");s.classList.add("taskDetailsLeft");const r=document.createElement("div");r.classList.add("taskDetailsRight");const i=document.createElement("div");i.textContent=`Title: ${e}`;const u=document.createElement("div");u.textContent=`Note: ${t}`;const m=document.createElement("div");m.textContent=`Date: ${n}`;const p=document.createElement("div");p.textContent=`Priority: ${o}`;const y=document.createElement("div");return y.textContent=`Project: ${c}`,s.appendChild(i),s.appendChild(m),s.appendChild(p),r.appendChild(u),r.appendChild(y),l.appendChild(s),l.appendChild(r),l.appendChild(a),d.appendChild(l),d}()),t.reset(),document.querySelectorAll(".infoIcon").forEach((e=>{e.addEventListener("click",(e=>{e.target.closest(".taskCard").nextElementSibling.style.display="block",console.log("Task Details Opened")}))})),document.querySelectorAll(".closeTaskDetailsBtn").forEach((e=>{e.addEventListener("click",(()=>{e.closest(".taskCardDetailsContainer").style.display="none",console.log("task details closed")}))})),document.querySelectorAll(".deleteIcon").forEach((e=>{e.addEventListener("click",(e=>{const t=document.getElementById("content"),n=e.target.closest(".taskCard"),o=e.target.closest(".taskCard").nextElementSibling;n&&o&&(t.removeChild(n),t.removeChild(o),console.log("This task was deleted"))}))})),o.style.display="none",c.style.pointerEvents="auto"}))}},n=e();t.launchProjectCreator(),t.launchTaskCreator(),t.closeProjectCreator(),t.closeTaskCreator(),t.displayTask(),n.createProject()})();