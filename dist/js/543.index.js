"use strict";(self.webpackChunkspa=self.webpackChunkspa||[]).push([[543],{781:(e,t,n)=>{function a(e,t,n){let a=document.createElement("div");a.classList.add("form__group");let c=document.createElement("div");c.classList.add("form__label-block");let l=document.createElement("input");l.classList.add("form__input"),l.placeholder=" ";let d=document.createElement("label");return l.type=t,l.name=e,d.textContent=n,(l.type="tel")&&(l.id="input-phone"),c.append(l,d),a.append(c),a}function c(e,t,n){let a=document.createElement("li");a.classList.add("radio__li");let c=document.createElement("label"),l=document.createElement("input");l.classList.add("radio__input","btn-hidden");let d=document.createElement("span");return d.classList.add("radio__span"),l.name=e,l.id=t,l.type="radio",c.append(l,d,n),a.append(c),a}function l(e,t,n){let a=document.createElement("li");a.classList.add("checkbox__li");let c=document.createElement("label"),l=document.createElement("input");l.classList.add("checkbox__input","btn-hidden");let d=document.createElement("span");return d.classList.add("checkbox__span"),l.name=e,l.id=t,l.type="checkbox",c.append(l,d,n),a.append(c),a}function d(e){let t=document.createElement("option");return t.classList.add("option"),t.name="district",t.textContent=e,t}n.r(t),n.d(t,{getFormPage:()=>r});var s=n(660),i=n.n(s);function o(){function e(){let e=!0;return this.querySelectorAll(".form__input").forEach((t=>{!function(e){let t=e.closest(".form__group");e.classList.contains("error")&&(t.querySelector(".error-label").remove(),e.classList.remove("error"))}(t),""==t.value&&(function(e,t){let n=e.closest(".form__group"),a=document.createElement("p");e.classList.add("error"),a.classList.add("error-label"),a.textContent="Поле не заполнено!",n.append(a)}(t),e=!1)})),e}async function t(t){t.preventDefault();let n=new FormData(this);if(e.call(this)){let e=await fetch("mailer.php",{method:"POST",body:n});if(e.ok)return alert("Успешно отправлено!"),this.reset(),await e.text();alert("Ошибка на сервере!"),this.reset()}}document.querySelectorAll("form").forEach((e=>{e.addEventListener("submit",t)}))}function r(){const e=document.createElement("form");e.classList.add("form");let t=document.createElement("div");t.classList.add("form__main");let n=document.createElement("h3");n.classList.add("form__title"),n.textContent="Ваш заказ:";const s={"field-1":a("name","text","Имя"),"field-2":a("phone","tel","Телефон"),"field-3":a("address","text","Адрес"),"field-4":a("wish","text","Пожелания к заказу:")};for(let e in s)t.append(s[e]);let r=document.createElement("div");r.classList.add("radio");let m=document.createElement("ul");m.classList.add("radio__main");let u=document.createElement("div");u.classList.add("checkbox");let p=document.createElement("ul");p.classList.add("checkbox__main");let f=document.createElement("h3");f.classList.add("buttons-title","radio__title"),f.textContent="Доставка:";let h=document.createElement("h3");h.classList.add("buttons-title","checkbox__title"),h.textContent="Доп. меню:";const _={"radio-1":c("delivery","self","Самовывоз"),"radio-2":c("delivery","courier","Курьером")};for(let e in _)m.append(_[e]);r.append(f,m);const E={"check-1":l("diabetes","diabetes-menu","Диабетическое меню"),"check-2":l("gluten","gluten-menu","Непереносимость глютена"),"check-3":l("vegan","vegan-menu","Вегетерианское меню")};for(let e in E)p.append(E[e]);u.append(h,p);let b=document.createElement("select");b.classList.add("select","js-choice");let L=document.createElement("option");L.value="",L.textContent="Район",L.disabled=!0,b.append(L);const v={"district-1":d("Тракторозаводской"),"district-2":d("Краснооктябрьский"),"district-3":d("Дзержинский"),"district-4":d("Центральный"),"district-6":d("Ворошиловский"),"district-7":d("Советский"),"district-8":d("Кировский"),"district-9":d("Красноармейский")};for(let e in v)b.append(v[e]);let k=document.createElement("button");return k.type="submit",k.classList.add("send-button"),k.textContent="Отправить",k.addEventListener("click",(e=>{e.preventDefault(),o()})),e.append(n,t,r,u,b,k),window.scrollTo({top:0,behavior:"instant"}),document.querySelectorAll("#input-phone").forEach((e=>{new(i())("+7 (999) 999-99-99",{showMaskOnHover:!1}).mask(e)})),e}}}]);