import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as m}from"./assets/vendor-a4e39586.js";const f={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0]<new Date?(iziToast.error({title:"Error",message:"Please choose a date in the future"}),document.getElementById("start-btn").disabled=!0):document.getElementById("start-btn").disabled=!1}},h=m("#datetime-picker",f),o=document.getElementById("start-btn"),y=document.getElementById("days"),g=document.getElementById("hours"),D=document.getElementById("minutes"),E=document.getElementById("seconds");let l;h.config.onClose.push(e=>{l=e[0]});o.addEventListener("click",p);function p(){const e=new Date(l);if(e<=new Date){iziToast.error({title:"Error",message:"Please choose a date in the future"}),o.disabled=!0;return}o.disabled=!0;const t=setInterval(s,1e3);function s(){const r=e-new Date;if(r<=0)clearInterval(t),u({days:0,hours:0,minutes:0,seconds:0}),iziToast.success({title:"Success",message:"Countdown finished!"}),o.disabled=!1;else{const{days:a,hours:c,minutes:d,seconds:i}=I(r);u({days:a,hours:c,minutes:d,seconds:i})}}}function u({days:e,hours:n,minutes:t,seconds:s}){y.innerText=e.toString().padStart(2,"0"),g.innerText=n.toString().padStart(2,"0"),D.innerText=t.toString().padStart(2,"0"),E.innerText=s.toString().padStart(2,"0")}function I(e){const a=Math.floor(e/864e5),c=Math.floor(e%864e5/36e5),d=Math.floor(e%864e5%36e5/6e4),i=Math.floor(e%864e5%36e5%6e4/1e3);return{days:a,hours:c,minutes:d,seconds:i}}
//# sourceMappingURL=commonHelpers.js.map
