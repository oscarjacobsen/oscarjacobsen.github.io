const e="Trimble.dispatcher.v1",t={},n={};let o=1;function r(e){const t=l();return n[t]=e,()=>delete n[t]}function i(n,o,r,i,s=5e3){return new Promise(((c,a)=>{const m=l(),u={scope:e,type:"request",id:m,api:r,args:i};let g;s>0&&(g=setTimeout((()=>{delete t[m],a(new Error("Operation timed out."));}),s)),t[m]=e=>{delete t[m],g&&clearTimeout(g),e.error?a(e.error):c(e.result);},n.postMessage(u,o);}))}async function s(o){const r=o.source,i="null"===o.origin?"*":o.origin,s=o.data;if(function(e){return c(e)&&"event"===e.type}(s))for(const e in n){if(!n.hasOwnProperty(e))continue;const t=n[e].event;t&&t(r,i,s.event,s.data);}else if(function(e){return c(e)&&"request"===e.type}(s)){let t;for(const o in n){if(!n.hasOwnProperty(o))continue;const c=n[o].request;if(c&&!t){const n=c(r,i,s.api,s.args);if(void 0!==n)try{t={scope:e,type:"response",id:s.id,api:s.api,result:await n};}catch(n){t={scope:e,type:"response",id:s.id,api:s.api,error:String(n)};}}}t||(t={scope:e,type:"response",id:s.id,api:s.api,error:"Not supported"}),r.postMessage(t,i);}else if(function(e){return c(e)&&"response"===e.type}(s)){const e=t[s.id];e&&e(s);}}function c(t){return !!t&&t.scope===e}function l(){return o++}const a={};!function(e){if(a[e])return a[e];const t={},n={debug:"#7f8c8d",log:"#2ecc71",warn:"#f39c12",error:"#c0392b"},o=(t,...o)=>{const r=[`%c${e}`,[`border: 1px solid ${n[t]}`,"border-radius: 0.5em",`color: ${n[t]}`,"font-weight: bold","padding: 2px 0.5em"].join(";")];console[t](...r,...o);};for(const e of Object.keys(n))t[e]=(...t)=>o(e,...t);a[e]=t;}("App");const m={},u=[],g=new Promise((e=>{}));function y(e,t,n){const o={};for(const r in e){const i=e[r];if((void 0!==n||"onConnect"!==r&&"onRequest"!==r)&&i)if("object"==typeof i){const e=n&&n+"."+String(r)||String(r);o[r]=y(i,t,e);}else o[r]=t(r,e[r],n);}return o}r({request:(e,t,n,o)=>{if(".connect_api_client_v1"===n)return g.then((()=>{let n=u.find((t=>t.dispatcher===e));var o;return n?n.origin=t:(n={dispatcher:e,origin:t},u.push(n)),(o=m)&&"function"==typeof o.onConnect&&m.onConnect(n),y(m,((e,t)=>"function"==typeof t?".api_function_v1":t))}));{const i=u.find((n=>n.dispatcher===e&&n.origin===t));if(i){if((r=m)&&"function"==typeof r.onRequest){const e=m.onRequest(i,n,o);if(void 0!==e)return e}const e=function(e,t){const n=t.split(".");let o=e;for(const e of n)o="object"==typeof o&&o&&e in o?o[e]:void 0;return o}(m,n);if("function"==typeof e){const t=e.apply(void 0,o);return void 0===t?Promise.resolve(t):t}return Promise.resolve(e)}return}var r;}});class d{constructor(){this.storage=new Map;}get length(){return this.storage.size}getItem(e){const t=this.storage.get(e);return void 0===t?null:t}setItem(e,t){this.storage.set(e,t),this.itemInsertionCallback&&this.itemInsertionCallback(this.length);}removeItem(e){this.storage.delete(e);}clear(){return this.storage.clear()}key(e){const t=[];for(const e of this.storage.keys())t.push(e);return t[e]}}class f{constructor(e){this.storageType=e,this._underlyingStorage=this.getStorage();}getStorage(){let e;try{e="undefined"==typeof window?global[this.storageType]:window[this.storageType];const t="__storage_test__";return e.setItem(t,t),e.removeItem(t),e}catch(t){if(22!==t.code&&1014!==t.code&&"QuotaExceededError"!==t.name&&"NS_ERROR_DOM_QUOTA_REACHED"!==t.name||!e||0===e.length){const e="undefined"==typeof window?global:window,t=`emulated${this.storageType}`;return e.hasOwnProperty(t)||(e[t]=new d),e[t]}throw t}}get underlyingStorage(){return this._underlyingStorage}reload(){this._underlyingStorage=this.getStorage();}get length(){return this._underlyingStorage.length}getItem(e){return this._underlyingStorage.getItem(e)}setItem(e,t){return this._underlyingStorage.setItem(e,t)}removeItem(e){return this._underlyingStorage.removeItem(e)}clear(){return this._underlyingStorage.clear()}key(e){return this._underlyingStorage.key(e)}}new f("localStorage"),new f("sessionStorage");const p={ft:{inMillimeters:304.8,symbol:"ft"},in:{inMillimeters:25.4,symbol:"in"},yd:{inMillimeters:914.4,symbol:"yd"},mi:{inMillimeters:1609344,symbol:"mi"}};Object.assign(Object.assign({},{mm:{inMillimeters:1,symbol:"mm"},cm:{inMillimeters:10,symbol:"cm"},m:{inMillimeters:1e3,symbol:"m"},km:{inMillimeters:1e6,symbol:"km"}}),p);Object.assign(Object.assign({},{mm2:{inSquareMeters:1e-6,symbol:"mm²"},cm2:{inSquareMeters:1e-4,symbol:"cm²"},m2:{inSquareMeters:1,symbol:"m²"},km2:{inSquareMeters:1e6,symbol:"km²"}}),{ft2:{inSquareMeters:.09290304,symbol:"ft²"},in2:{inSquareMeters:64516e-8,symbol:"in²"},yd2:{inSquareMeters:.83612736,symbol:"yd²"}});Object.assign(Object.assign({},{mm3:{inCubicMeters:1e-9,symbol:"mm³"},cm3:{inCubicMeters:1e-6,symbol:"cm³"},m3:{inCubicMeters:1,symbol:"m³"},km3:{inCubicMeters:1e9,symbol:"km³"}}),{ft3:{inCubicMeters:.028316846592,symbol:"ft³"},in3:{inCubicMeters:16387064e-12,symbol:"in³"},yd3:{inCubicMeters:.764554857984,symbol:"yd³"},l:{inCubicMeters:.001,symbol:"l"},gal:{inCubicMeters:.003785411784,symbol:"gal"}});var b,h;function w(e,t,n){return window.removeEventListener("message",s),window.addEventListener("message",s),function(e,t,n=1e4){async function o(e,t){const o=await i(e,t,".connect_api_client_v1",[],0);if(o&&"object"==typeof o)return y(o,((o,r,s)=>{if(".api_function_v1"===r){const r=s?s+"."+String(o):String(o);return (...o)=>i(e,t,r,o,n)}return r}));throw new Error("Failed to connect")}function s(e){if(!e)return "*";try{return new URL(e).origin}catch(e){return "*"}}if(t&&r({event:(e,n,o,r)=>t(o,r)}),e===window)return Promise.resolve(m);if((c=e)&&"function"==typeof c.postMessage)return o(e,"*");if(function(e){return e&&"object"==typeof e.contentWindow}(e)){const t=[];return t.push(new Promise(((t,n)=>{const r=async()=>{e.removeEventListener("load",r),e.contentWindow?t(await o(e.contentWindow,s(e.src))):n(new Error("Cannot access the target content window"));};e.addEventListener("load",r);}))),e.contentWindow&&t.push(o(e.contentWindow,s(e.src))),Promise.race(t)}return Promise.reject(new Error("Target must be a window or an iframe"));var c;}(e,t,n)}Object.assign(Object.assign({},{t:{inKilograms:1e3,symbol:"t"},mg:{inKilograms:1e-6,symbol:"mg"},g:{inKilograms:.001,symbol:"g"},kg:{inKilograms:1,symbol:"kg"}}),{lb:{inKilograms:.45359237,symbol:"lb"},"sh tn":{inKilograms:907.18474,symbol:"sh tn"},oz:{inKilograms:.028349523125,symbol:"oz"},ton:{inKilograms:1e3,symbol:"ton"}}),function(e){e[e.AllowNegative=1]="AllowNegative",e[e.AllowIntegers=2]="AllowIntegers",e[e.AllowDecimals=4]="AllowDecimals",e[e.AllowScientific=8]="AllowScientific",e[e.AllowFractions=16]="AllowFractions",e[e.Any=31]="Any";}(b||(b={})),function(e){e[e.Feet=0]="Feet",e[e.Inches=1]="Inches",e[e.FeetInches=2]="FeetInches";}(h||(h={}));

/** Instantiate extension .
   *  @param window - Parent window object.
   *  @param callback - Listen the events with args from the parent.
   *  @param timeout - Connect timeout in milliseconds.
   *  @returns TCExtensionAPI - Object with the interaction methods.
*/
let API;
API = await w(
  window.parent,
  (event, args) => {
  },
  30000
);

const mainMenuObject = {
    title: "Test extension app",
    icon: "http://oscarjacobsen.no/trimble-connect-addon/favicon.png",
    command: "main_nav_menu_cliked",
    subMenus: [
      {
        title: "Sub menu 1",
        icon: "http://oscarjacobsen.no/trimble-connect-addon/favicon.png",
        command: "submenu_1_clicked",
      },
      {
        title: "Sub menu 2",
        icon: "http://oscarjacobsen.no/trimble-connect-addon/favicon.png",
        command: "submenu_2_clicked",
      },
    ],
  };

// Updating the menu object.
API.ui.setMenu(mainMenuObject);
// Where <mainMenuObject> is the menu object and ExtensionMainMenu is the object type which you can find it in the documentation.

// Updating the active submenu.
//API.ui.setActiveMenuItem("<submenuCommand>:string");

// Get the current project info
//API.project.getCurrentProject().then((connectProject) => {
    //Current project info: projectInfo.
//});

//Get the current user language info.
//API.user.getUserSettings().then((userSettings) => {
    //Current user language: userSettings.language
//});

//Updating the status message.
//this.API.extension.setStatusMessage("<statusMessage>:string");

//Request for the access token.
//API.extension.getPermission("accesstoken").then((accessToken) => {
    //Current user access token or status: accessToken
//});
