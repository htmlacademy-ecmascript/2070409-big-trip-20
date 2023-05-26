(()=>{var e={484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,n="millisecond",i="second",s="minute",r="hour",a="day",l="week",o="month",c="quarter",p="year",d="date",f="Invalid Date",u=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,_={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},h=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},m={s:h,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),s=n%60;return(t<=0?"+":"-")+h(i,2,"0")+":"+h(s,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),s=t.clone().add(i,o),r=n-s<0,a=t.clone().add(i+(r?-1:1),o);return+(-(i+(n-s)/(r?s-a:a-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:o,y:p,w:l,d:a,D:d,h:r,m:s,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",b={};b[y]=_;var g=function(e){return e instanceof D},$=function e(t,n,i){var s;if(!t)return y;if("string"==typeof t){var r=t.toLowerCase();b[r]&&(s=r),n&&(b[r]=n,s=r);var a=t.split("-");if(!s&&a.length>1)return e(a[0])}else{var l=t.name;b[l]=t,s=l}return!i&&s&&(y=s),s||!i&&y},M=function(e,t){if(g(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new D(n)},S=m;S.l=$,S.i=g,S.w=function(e,t){return M(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var D=function(){function _(e){this.$L=$(e.locale,null,!0),this.parse(e)}var h=_.prototype;return h.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(S.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(u);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},h.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},h.$utils=function(){return S},h.isValid=function(){return!(this.$d.toString()===f)},h.isSame=function(e,t){var n=M(e);return this.startOf(t)<=n&&n<=this.endOf(t)},h.isAfter=function(e,t){return M(e)<this.startOf(t)},h.isBefore=function(e,t){return this.endOf(t)<M(e)},h.$g=function(e,t,n){return S.u(e)?this[t]:this.set(n,e)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(e,t){var n=this,c=!!S.u(t)||t,f=S.p(e),u=function(e,t){var i=S.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return c?i:i.endOf(a)},v=function(e,t){return S.w(n.toDate()[e].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},_=this.$W,h=this.$M,m=this.$D,y="set"+(this.$u?"UTC":"");switch(f){case p:return c?u(1,0):u(31,11);case o:return c?u(1,h):u(0,h+1);case l:var b=this.$locale().weekStart||0,g=(_<b?_+7:_)-b;return u(c?m-g:m+(6-g),h);case a:case d:return v(y+"Hours",0);case r:return v(y+"Minutes",1);case s:return v(y+"Seconds",2);case i:return v(y+"Milliseconds",3);default:return this.clone()}},h.endOf=function(e){return this.startOf(e,!1)},h.$set=function(e,t){var l,c=S.p(e),f="set"+(this.$u?"UTC":""),u=(l={},l[a]=f+"Date",l[d]=f+"Date",l[o]=f+"Month",l[p]=f+"FullYear",l[r]=f+"Hours",l[s]=f+"Minutes",l[i]=f+"Seconds",l[n]=f+"Milliseconds",l)[c],v=c===a?this.$D+(t-this.$W):t;if(c===o||c===p){var _=this.clone().set(d,1);_.$d[u](v),_.init(),this.$d=_.set(d,Math.min(this.$D,_.daysInMonth())).$d}else u&&this.$d[u](v);return this.init(),this},h.set=function(e,t){return this.clone().$set(e,t)},h.get=function(e){return this[S.p(e)]()},h.add=function(n,c){var d,f=this;n=Number(n);var u=S.p(c),v=function(e){var t=M(f);return S.w(t.date(t.date()+Math.round(e*n)),f)};if(u===o)return this.set(o,this.$M+n);if(u===p)return this.set(p,this.$y+n);if(u===a)return v(1);if(u===l)return v(7);var _=(d={},d[s]=e,d[r]=t,d[i]=1e3,d)[u]||1,h=this.$d.getTime()+n*_;return S.w(h,this)},h.subtract=function(e,t){return this.add(-1*e,t)},h.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var i=e||"YYYY-MM-DDTHH:mm:ssZ",s=S.z(this),r=this.$H,a=this.$m,l=this.$M,o=n.weekdays,c=n.months,p=function(e,n,s,r){return e&&(e[n]||e(t,i))||s[n].slice(0,r)},d=function(e){return S.s(r%12||12,e,"0")},u=n.meridiem||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i},_={YY:String(this.$y).slice(-2),YYYY:this.$y,M:l+1,MM:S.s(l+1,2,"0"),MMM:p(n.monthsShort,l,c,3),MMMM:p(c,l),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:p(n.weekdaysMin,this.$W,o,2),ddd:p(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(r),HH:S.s(r,2,"0"),h:d(1),hh:d(2),a:u(r,a,!0),A:u(r,a,!1),m:String(a),mm:S.s(a,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:s};return i.replace(v,(function(e,t){return t||_[e]||s.replace(":","")}))},h.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},h.diff=function(n,d,f){var u,v=S.p(d),_=M(n),h=(_.utcOffset()-this.utcOffset())*e,m=this-_,y=S.m(this,_);return y=(u={},u[p]=y/12,u[o]=y,u[c]=y/3,u[l]=(m-h)/6048e5,u[a]=(m-h)/864e5,u[r]=m/t,u[s]=m/e,u[i]=m/1e3,u)[v]||m,f?y:S.a(y)},h.daysInMonth=function(){return this.endOf(o).$D},h.$locale=function(){return b[this.$L]},h.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=$(e,t,!0);return i&&(n.$L=i),n},h.clone=function(){return S.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},_}(),w=D.prototype;return M.prototype=w,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",a],["$M",o],["$y",p],["$D",d]].forEach((function(e){w[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),M.extend=function(e,t){return e.$i||(e(t,D,M),e.$i=!0),M},M.locale=$,M.isDayjs=g,M.unix=function(e){return M(1e3*e)},M.en=b[y],M.Ls=b,M.p={},M}()}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={exports:{}};return e[i].call(r.exports,r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e={BEFOREBEGIN:"beforebegin",AFTERBEGIN:"afterbegin",BEFOREEND:"beforeend",AFTEREND:"afterend"};function t(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}function i(t,n){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.BEFOREEND;n.insertAdjacentElement(i,t.getElement())}var s=n(484),r=n.n(s);const a="taxi",l=e=>r()(e).format("HH:mm"),o=e=>r()(e).format("YY/MM/DD HH-mm"),c=e=>e[0]+e.slice(1);class p{constructor(e){let{point:t,offers:n}=e;this.point=t,this.offers=n}getTemplate(){return function(e,t){const{basePrice:n,dateFrom:i,dateTo:s,destination:a,type:o}=e;return`\n  <li class="trip-events__item">\n    <div class="event">\n      <time class="event__date" datetime="${i}">${(p=i,r()(p).format("MMM D")).toUpperCase()}</time>\n      <div class="event__type">\n        <img class="event__type-icon" width="42" height="42" src="img/icons/drive.png" alt="Event type icon">\n      </div>\n      <h3 class="event__title">${c(o)} ${a}</h3>\n      <div class="event__schedule">\n        <p class="event__time">\n          <time class="event__start-time" datetime="${i}">${l(i)}</time>\n          &mdash;\n          <time class="event__end-time" datetime="${s}">${l(s)}</time>\n        </p>\n        <p class="event__duration">${((e,t)=>{const n=r()(e),i=r()(t),s=e=>String(e).padStart(2,"0");if(i.diff(n,"hour")<1)return`${s(i.diff(n,"minute"))}M`;if(i.diff(n,"day")<1){const e=i.diff(n,"minute");return`${s(Math.ceil(e/60))}H ${s(e%60)}M`}if(i.diff(n,"day")>=1){const e=i.diff(n,"minute");return`${s(Math.ceil(e/60/24))}D ${s(Math.ceil(e/60%24))}H ${s(e%60)}M`}})(i,s)}</p>\n      </div>\n      <p class="event__price">\n        &euro;&nbsp;<span class="event__price-value">${n}</span>\n      </p>\n      <h4 class="visually-hidden">Offers:</h4>\n      <ul class="event__selected-offers">\n        ${function(e){return e.map((e=>`<li class="event__offer">\n        <span class="event__offer-title">${e.title}</span>\n        &plus;&euro;&nbsp;\n        <span class="event__offer-price">${e.price}</span>\n      </li>\n    `)).join("")}(t)}\n      </ul>\n      <button class="event__favorite-btn event__favorite-btn--active" type="button">\n        <span class="visually-hidden">Add to favorite</span>\n        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n        </svg>\n      </button>\n      <button class="event__rollup-btn" type="button">\n        <span class="visually-hidden">Open event</span>\n      </button>\n    </div>\n  </li>`;var p}(this.point,this.offers)}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}class d{constructor(e){let{point:t,offers:n}=e;this.point=t,this.offers=n}getTemplate(){return function(e,t){const{basePrice:n,dateFrom:i,dateTo:s,destination:r,type:l}=e,p=t.map((e=>e.title));return`\n  <li class="trip-events__item">\n    <form class="event event--edit" action="#" method="post">\n      <header class="event__header">\n        <div class="event__type-wrapper">\n          <label class="event__type  event__type-btn" for="event-type-toggle-1">\n            <span class="visually-hidden">Choose event type</span>\n            <img class="event__type-icon" width="17" height="17" src="img/icons/${l||a}.png" alt="Event type icon">\n          </label>\n          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n          <div class="event__type-list">\n            <fieldset class="event__type-group">\n              <legend class="visually-hidden">Event type</legend>\n\n              <div class="event__type-item">\n                <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi" ${"taxi"===l?"checked":""}>\n                <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>\n              </div>\n\n              <div class="event__type-item">\n                <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus" ${"bus"===l?"checked":""}>\n                <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>\n              </div>\n\n              <div class="event__type-item">\n                <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train" ${"train"===l?"checked":""}>\n                <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>\n              </div>\n\n              <div class="event__type-item">\n                <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship" ${"ship"===l?"checked":""}>\n                <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>\n              </div>\n\n              <div class="event__type-item">\n                <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive" ${"drive"===l?"checked":""}>\n                <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>\n              </div>\n\n              <div class="event__type-item">\n                <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" ${"flight"===l?"checked":""}>\n                <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>\n              </div>\n\n              <div class="event__type-item">\n                <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in" ${"check-in"===l?"checked":""}>\n                <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>\n              </div>\n\n              <div class="event__type-item">\n                <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing" ${"sightseeing"===l?"checked":""}>\n                <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>\n              </div>\n\n              <div class="event__type-item">\n                <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant" ${"restaurant"===l?"checked":""}>\n                <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>\n              </div>\n            </fieldset>\n          </div>\n        </div>\n\n        <div class="event__field-group  event__field-group--destination">\n          <label class="event__label  event__type-output" for="event-destination-1">\n            ${c(l||a)}\n          </label>\n          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${r||"Amsterdam"}" list="destination-list-1">\n          <datalist id="destination-list-1">\n            <option value="Amsterdam"></option>\n            <option value="Geneva"></option>\n            <option value="Chamonix"></option>\n          </datalist>\n        </div>\n\n        <div class="event__field-group  event__field-group--time">\n          <label class="visually-hidden" for="event-start-time-1">From</label>\n          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${o(i||"2000-01-01")}">\n          &mdash;\n          <label class="visually-hidden" for="event-end-time-1">To</label>\n          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${o(s||"2000-01-01")}">\n        </div>\n\n        <div class="event__field-group  event__field-group--price">\n          <label class="event__label" for="event-price-1">\n            <span class="visually-hidden">Price</span>\n            &euro;\n          </label>\n          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${n||"0"}">\n        </div>\n\n        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n        <button class="event__reset-btn" type="reset">Cancel</button>\n      </header>\n      <section class="event__details">\n        <section class="event__section  event__section--offers">\n          <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n          <div class="event__available-offers">\n            <div class="event__offer-selector">\n              <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" ${p.includes("Add luggage")?"checked":""}>\n              <label class="event__offer-label" for="event-offer-luggage-1">\n                <span class="event__offer-title">Add luggage</span>\n                &plus;&euro;&nbsp;\n                <span class="event__offer-price">30</span>\n              </label>\n            </div>\n\n            <div class="event__offer-selector">\n              <input class="event__offer-checkbox  visually-hidden" id="event-offer-comfort-1" type="checkbox" name="event-offer-comfort" ${p.includes("Switch to comfort")?"checked":""}>\n              <label class="event__offer-label" for="event-offer-comfort-1">\n                <span class="event__offer-title">Switch to comfort class</span>\n                &plus;&euro;&nbsp;\n                <span class="event__offer-price">100</span>\n              </label>\n            </div>\n\n            <div class="event__offer-selector">\n              <input class="event__offer-checkbox  visually-hidden" id="event-offer-meal-1" type="checkbox" name="event-offer-meal ${p.includes("Add meal")?"checked":""}">\n              <label class="event__offer-label" for="event-offer-meal-1">\n                <span class="event__offer-title">Add meal</span>\n                &plus;&euro;&nbsp;\n                <span class="event__offer-price">15</span>\n              </label>\n            </div>\n\n            <div class="event__offer-selector">\n              <input class="event__offer-checkbox  visually-hidden" id="event-offer-seats-1" type="checkbox" name="event-offer-seats ${p.includes("Choose seats")?"checked":""}">\n              <label class="event__offer-label" for="event-offer-seats-1">\n                <span class="event__offer-title">Choose seats</span>\n                &plus;&euro;&nbsp;\n                <span class="event__offer-price">5</span>\n              </label>\n            </div>\n\n            <div class="event__offer-selector">\n              <input class="event__offer-checkbox  visually-hidden" id="event-offer-train-1" type="checkbox" name="event-offer-train ${p.includes("Travel by train")?"checked":""}">\n              <label class="event__offer-label" for="event-offer-train-1">\n                <span class="event__offer-title">Travel by train</span>\n                &plus;&euro;&nbsp;\n                <span class="event__offer-price">40</span>\n              </label>\n            </div>\n          </div>\n        </section>\n\n        <section class="event__section  event__section--destination">\n          <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n          <p class="event__destination-description">Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.</p>\n\n          <div class="event__photos-container">\n            <div class="event__photos-tape">\n              <img class="event__photo" src="img/photos/1.jpg" alt="Event photo">\n              <img class="event__photo" src="img/photos/2.jpg" alt="Event photo">\n              <img class="event__photo" src="img/photos/3.jpg" alt="Event photo">\n              <img class="event__photo" src="img/photos/4.jpg" alt="Event photo">\n              <img class="event__photo" src="img/photos/5.jpg" alt="Event photo">\n            </div>\n          </div>\n        </section>\n      </section>\n    </form>\n  </li>`}(this.point,this.offers)}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}const f=document.querySelector(".page-main"),u=document.querySelector(".page-header"),v=u.querySelector(".trip-main"),_=u.querySelector(".trip-controls__filters"),h=f.querySelector(".trip-events"),m=new class{points=[{id:"f4b62099-293f-4c3d-a702-94eec4a2808c",basePrice:1100,dateFrom:"2019-07-12T11:22:15.375Z",dateTo:"2019-07-12T13:22:18.375Z",destination:"Amsterdam",isFavorite:!1,offers:["b4c3e4e6-9053-42ce-b747-e281314baa31"],type:"taxi"},{id:"test-id",basePrice:1111,dateFrom:"2001-01-01T22:55:55.845Z",dateTo:"2011-11-11T01:02:03.375Z",destination:"Chamonix",isFavorite:!0,offers:["test-offer-1","test-offer-2"],type:"sightseeing"}];getPoints(){return this.points}},y=new class{offers=[{type:"taxi",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa31",title:"Switch to comfort",price:70}]},{type:"sightseeing",offers:[{id:"test-offer-1",title:"Add luggage",price:111},{id:"test-offer-2",title:"Rent a car",price:538},{id:"undef-offer",title:"test-3st-offer-title",price:666}]}];getOffers(){return this.offers}},b=new class{constructor(e){let{mainElement:t,pointsModel:n,offersModel:i}=e;this.mainElement=t,this.pointsModel=n,this.offersModel=i}init(){this.points=[...this.pointsModel.getPoints()],this.offers=[...this.offersModel.getOffers()];const e=this.mainElement.querySelector(".trip-events__list");i(new d({point:this.points[0],offers:this.offers.find((e=>"taxi"===e.type)).offers.filter((e=>this.points[0].offers.includes(e.id)))}),e);for(let t=0;t<this.points.length;t++){const n=this.offers.find((e=>e.type===this.points[t].type)).offers,s=this.points[t].offers;i(new p({point:this.points[t],offers:n.filter((e=>s.includes(e.id)))}),e)}}}({mainElement:f,pointsModel:m,offersModel:y});i(new class{getTemplate(){return'\n  <section class="trip-main__trip-info  trip-info">\n    <div class="trip-info__main">\n      <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n\n      <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>\n    </div>\n\n    <p class="trip-info__cost">\n      Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n    </p>\n  </section>'}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}},v,e.AFTERBEGIN),i(new class{getTemplate(){return'\n  <form class="trip-filters" action="#" method="get">\n    <div class="trip-filters__filter">\n      <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything">\n      <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n    </div>\n\n    <div class="trip-filters__filter">\n      <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n      <label class="trip-filters__filter-label" for="filter-future">Future</label>\n    </div>\n\n    <div class="trip-filters__filter">\n      <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n      <label class="trip-filters__filter-label" for="filter-present">Present</label>\n    </div>\n\n    <div class="trip-filters__filter">\n      <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past" checked>\n      <label class="trip-filters__filter-label" for="filter-past">Past</label>\n    </div>\n\n    <button class="visually-hidden" type="submit">Accept filter</button>\n  </form>'}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}},_),i(new class{getTemplate(){return'\n  <form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n    <div class="trip-sort__item  trip-sort__item--day">\n      <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day">\n      <label class="trip-sort__btn" for="sort-day">Day</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--event">\n      <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n      <label class="trip-sort__btn" for="sort-event">Event</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--time">\n      <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n      <label class="trip-sort__btn" for="sort-time">Time</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--price">\n      <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" checked>\n      <label class="trip-sort__btn" for="sort-price">Price</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--offer">\n      <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n      <label class="trip-sort__btn" for="sort-offer">Offers</label>\n    </div>\n  </form>'}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}},h),i(new class{getTemplate(){return'\n  <ul class="trip-events__list">\n    \n  </ul>'}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}},h),b.init()})()})();
//# sourceMappingURL=bundle.bbad23142a59b18ab91e.js.map