import"./assets/modulepreload-polyfill-3cfb730f.js";const m={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0]<new Date?(iziToast.error({title:"Error",message:"Please choose a date in the future"}),document.getElementById("start-btn").disabled=!0):document.getElementById("start-btn").disabled=!1}},f=flatpickr("#datetime-picker",m),r=document.getElementById("start-btn"),h=document.getElementById("days"),y=document.getElementById("hours"),D=document.getElementById("minutes"),E=document.getElementById("seconds");r.addEventListener("click",I);function I(){const e=new Date(f.selectedDates[0]);if(e<=new Date){iziToast.error({title:"Error",message:"Please choose a date in the future"}),r.disabled=!0;return}r.disabled=!0;const t=setInterval(s,1e3);function s(){const c=e-new Date;if(c<=0)clearInterval(t),l({days:0,hours:0,minutes:0,seconds:0}),iziToast.success({title:"Success",message:"Countdown finished!"}),r.disabled=!1;else{const{days:a,hours:d,minutes:i,seconds:u}=g(c);l({days:a,hours:d,minutes:i,seconds:u})}}}function l({days:e,hours:n,minutes:t,seconds:s}){h.innerText=o(e),y.innerText=o(n),D.innerText=o(t),E.innerText=o(s)}function g(e){const a=Math.floor(e/864e5),d=Math.floor(e%864e5/36e5),i=Math.floor(e%864e5%36e5/6e4),u=Math.floor(e%864e5%36e5%6e4/1e3);return{days:a,hours:d,minutes:i,seconds:u}}function o(e){return e<10?"0"+e:e}
//# sourceMappingURL=commonHelpers.js.map