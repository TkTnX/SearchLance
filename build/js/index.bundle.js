!function(){"use strict";const e=document.querySelector("#mobileNavBtn"),t=document.querySelector("#mobileNavBlock");const o=document.querySelector("#headerBtn"),n=document.querySelector("#userCabinet"),c=document.querySelector("#btn-form"),l=document.querySelector("#headerInputName"),r=document.querySelector("#headerInputPassword"),u=document.querySelector("#headerInputEmail"),a=(document.querySelector("#userCabinetForm"),e=>{e.preventDefault(),n.classList.toggle("header-popup-open")});o.addEventListener("click",a),c.addEventListener("click",(()=>{""!==u.value&&""!==l.value&&""!==r.value&&(o.textContent=l.value,n.classList.remove("header-popup-open"),o.removeEventListener("click",a),c.textContent="Успешный вход!")}));const d=document.querySelector(".loader"),s=()=>{d.style.opacity=0,setTimeout((()=>{d.style.display="none",document.body.style.overflow="visible"}),600)};window.addEventListener("load",s),e.addEventListener("click",(()=>{e.classList.toggle("mobile-nav-btn--active"),t.classList.toggle("mobile-nav-block--active"),document.body.classList.toggle("overflow-hidden")})),a(),s()}();