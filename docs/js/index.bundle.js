!function(){"use strict";const e=document.querySelector("#mobileNavBtn"),t=document.querySelector("#mobileNavBlock");const o=document.querySelector("#headerBtn"),n=document.querySelector("#userCabinet"),c=document.querySelector("#btn-form"),r=document.querySelector("#headerInputName"),l=document.querySelector("#headerInputPassword"),u=document.querySelector("#headerInputEmail"),a=(document.querySelector("#userCabinetForm"),e=>{e.preventDefault(),n.classList.toggle("header-popup-open"),c.textContent="Успешный вход!"});o.addEventListener("click",a),c.addEventListener("click",(()=>{""!==u.value&&""!==r.value&&""!==l.value&&(o.textContent=r.value,n.classList.remove("header-popup-open"),o.removeEventListener("click",a))})),e.addEventListener("click",(()=>{e.classList.toggle("mobile-nav-btn--active"),t.classList.toggle("mobile-nav-block--active"),document.body.classList.toggle("overflow-hidden")})),a()}();