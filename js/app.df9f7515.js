(function(e){function a(a){for(var o,r,i=a[0],l=a[1],c=a[2],u=0,d=[];u<i.length;u++)r=i[u],t[r]&&d.push(t[r][0]),t[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);m&&m(a);while(d.length)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,a=0;a<s.length;a++){for(var n=s[a],o=!0,r=1;r<n.length;r++){var i=n[r];0!==t[i]&&(o=!1)}o&&(s.splice(a--,1),e=l(l.s=n[0]))}return e}var o={},r={app:0},t={app:0},s=[];function i(e){return l.p+"js/"+({academy:"academy",curiosities:"curiosities",projects:"projects"}[e]||e)+"."+{academy:"9beaff71",curiosities:"c53033b1",projects:"12cf0556"}[e]+".js"}function l(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var a=[],n={academy:1,curiosities:1,projects:1};r[e]?a.push(r[e]):0!==r[e]&&n[e]&&a.push(r[e]=new Promise(function(a,n){for(var o="css/"+({academy:"academy",curiosities:"curiosities",projects:"projects"}[e]||e)+"."+{academy:"dcc43a82",curiosities:"a6ace10d",projects:"2d385f0b"}[e]+".css",t=l.p+o,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var c=s[i],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===o||u===t))return a()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){c=d[i],u=c.getAttribute("data-href");if(u===o||u===t)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var o=a&&a.target&&a.target.src||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");s.request=o,delete r[e],m.parentNode.removeChild(m),n(s)},m.href=t;var p=document.getElementsByTagName("head")[0];p.appendChild(m)}).then(function(){r[e]=0}));var o=t[e];if(0!==o)if(o)a.push(o[2]);else{var s=new Promise(function(a,n){o=t[e]=[a,n]});a.push(o[2]=s);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=i(e),c=function(a){u.onerror=u.onload=null,clearTimeout(d);var n=t[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src,s=new Error("Loading chunk "+e+" failed.\n("+o+": "+r+")");s.type=o,s.request=r,n[1](s)}t[e]=void 0}};var d=setTimeout(function(){c({type:"timeout",target:u})},12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(a)},l.m=e,l.c=o,l.d=function(e,a,n){l.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,a){if(1&a&&(e=l(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)l.d(n,o,function(a){return e[a]}.bind(null,o));return n},l.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(a,"a",a),a},l.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=a,c=c.slice();for(var d=0;d<c.length;d++)a(c[d]);var m=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("cd49")},"49f8":function(e,a,n){var o={"./en.json":"edd4","./es.json":"a306","./fr.json":"f693"};function r(e){var a=t(e);return n(a)}function t(e){var a=o[e];if(!(a+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a}r.keys=function(){return Object.keys(o)},r.resolve=t,e.exports=r,r.id="49f8"},a306:function(e){e.exports={workinprogress:"Lo sentimos, pagina en proceso de construccion...",navbar:{home:"Home",projects:"Proyectos",academy:"Academico",contact:"Contacto",curiosities:"Curiosidades"},home:{title:"Soy ",subtitle:"Ingeniero informático",age:"Edad",email:"Mail",freelance:"Autonomo",vacation:"En vacaciones",date:"hasta el 1 de Abril, 2019"},academy:{doctor:"* Doctorado en ingenieria informática",uni_sala:"Universidad de Salamanca",master:"Master en Automática y Robótica",uni_alicant:"Universidad de Alicante",curso_web:"Curso Desarrollo Web",degree:"Ingeniería técnica en informática de sistemas",uni_extre:"Universidad de Extremadura",title_monitor:"Título de Monitor de Ocio y tiempo libre"}}},cd49:function(e,a,n){"use strict";n.r(a);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=n("ce5b"),t=n.n(r);n("da64");o["default"].use(t.a,{iconfont:"md"});n("4917"),n("ac6a");var s=n("a925");function i(){var e=n("49f8"),a={};return e.keys().forEach(function(n){var o=n.match(/([A-Za-z0-9-_]+)\./i);if(o&&o.length>1){var r=o[1];a[r]=e(n)}}),a}o["default"].use(s["a"]);var l=new s["a"]({locale:"en",fallbackLocale:"en",messages:i()}),c=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("v-app",{directives:[{name:"touch",rawName:"v-touch",value:{left:function(){return e.swipe(1)},right:function(){return e.swipe(-1)}},expression:"{\n        left: () => swipe(1),\n        right: () => swipe(-1),\n      }"}]},[n("v-toolbar",{attrs:{dark:""}},[n("v-toolbar-title",[e._v("R"),n("span",{staticClass:"font-weight-light"},[e._v("C")])]),n("v-spacer"),n("v-toolbar-items",{staticClass:"hidden-sm-and-up"},[n("v-btn",{attrs:{flat:"",icon:"",to:"/home"}},[n("v-icon",[e._v("home")])],1),n("v-btn",{attrs:{flat:"",icon:"",to:"/projects"}},[n("v-icon",[e._v("laptop_mac")])],1),n("v-btn",{attrs:{flat:"",icon:"",to:"/academy"}},[n("v-icon",[e._v("school")])],1)],1),n("v-toolbar-items",{staticClass:"hidden-xs-only"},[n("v-btn",{attrs:{flat:"",to:"/home"}},[e._v(e._s(e.$t("navbar.home"))+"\n          "),n("v-icon",{attrs:{right:""}},[e._v("home")])],1),n("v-btn",{attrs:{flat:"",to:"/projects"}},[e._v(e._s(e.$t("navbar.projects"))+"\n          "),n("v-icon",{attrs:{right:""}},[e._v("laptop_mac")])],1),n("v-btn",{attrs:{flat:"",to:"/academy"}},[e._v(e._s(e.$t("navbar.academy"))+"\n          "),n("v-icon",{attrs:{right:""}},[e._v("school")])],1)],1)],1),n("router-view"),n("v-footer",{staticClass:"pa-3",attrs:{fixed:"",dark:""}},[n("v-speed-dial",{attrs:{direction:"right"},scopedSlots:e._u([{key:"activator",fn:function(){return[n("v-btn",{attrs:{flat:"",color:"primary",fab:"",small:""},model:{value:e.fab,callback:function(a){e.fab=a},expression:"fab"}},[n("v-icon",[e._v("language")]),n("v-icon",[e._v("close")])],1)]},proxy:!0}]),model:{value:e.fab,callback:function(a){e.fab=a},expression:"fab"}},[n("v-btn",{attrs:{fab:"",flat:"",small:"",color:"red"},on:{click:function(a){return e.changeLanguage("es")}}},[e._v("es")]),n("v-btn",{attrs:{fab:"",flat:"",small:"",color:"green"},on:{click:function(a){return e.changeLanguage("en")}}},[e._v("en")]),n("v-btn",{attrs:{fab:"",flat:"",small:"",color:"indigo"},on:{click:function(a){return e.changeLanguage("fr")}}},[e._v("fr")])],1),n("v-spacer"),n("div",[e._v("v0.3 (2/04/2019)")])],1)],1)},u=[],d=(n("7f7f"),n("8c4f"));o["default"].use(d["a"]);var m=new d["a"]({routes:[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:function(){return n.e("projects").then(n.bind(null,"bb51"))}},{path:"/projects",name:"projects",component:function(){return n.e("projects").then(n.bind(null,"acca"))}},{path:"/academy",name:"academy",component:function(){return n.e("academy").then(n.bind(null,"cd27"))}},{path:"/curiosities",name:"curiosities",component:function(){return n.e("curiosities").then(n.bind(null,"55a3"))}}]}),p=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("v-snackbar",{attrs:{top:"",timeout:1e4},model:{value:e.open,callback:function(a){e.open=a},expression:"open"}},[e._v("\n    Sabias que... "+e._s(e.text)+"\n    "),n("v-btn",{attrs:{color:"pink",flat:""},on:{click:function(a){e.open=!1}}},[e._v("\n        X\n    ")])],1)},f=[],v=n("5118"),b=o["default"].extend({name:"curiosities",mounted:function(){var e=this;Object(v["setInterval"])(function(){e.open=!0,e.text=e.phrases[Math.floor(Math.random()*e.phrases.length)]},2e4)},data:function(){return{open:!1,text:"",phrases:["El Vaticano posee la cantidad de dinero suficiente para acabar con la pobreza mundial dos veces","Los caballitos de mar elijen una pareja durante to… permanecen solos por un tiempo y mueren también!","Los humanos y los delfines son las únicas especies que practican sexo por placer.","Las semillas de la manzana contienen cianuro, comerte 40 o 50 podrían matarte.","Si le quitas los bigotes a un gato, éste no puede …n y por lo tanto pierde el equilibrio y se cae...","Un koala puede vivir toda su vida sin tomar agua","Thomas Alva Edison, el inventor de la bombilla eléctrica, le temía a la oscuridad","Los escorpiones, son los únicos que se suicidan, l…iempre son ellos los que terminan con su vida....","Si divides el número de abejas hembras por el de m…mpre obtendrás el mismo número, PI. 3,14159265...","Los ojos de un hámster pueden caerse si lo cuelgan con la cabeza para abajo","Los peces chicos no se aburren en las peceras porq…o dura dos minutos y es como si volvieran a nacer","Si estornudas tu corazón se detiene un 1 milisegun…a desgarrar la carótida o sufrir daños cerebrales","El león, el animal de mayor actividad sexual del m…de copular con la misma hembra cien veces al día.","Una persona morirá más rápido por no dormir que po…in sueño, y puede estar varias semanas sin comer.","Si metes una Coca Light en un recipiente con agua,…i lo haces con una de Coca-Cola normal, se hunde.","Las primeras palmeras crecieron en el Polo Norte","Los chimpances, orangutanes, delfines, elefantes y…es capaces de reconocerse a sí misma en un espejo","Alex Mitchell, un albañil de 50 años de edad de Ki…tchell finalmente se derrumbo en el sofá y murió.","Los antiguos romanos cuando tenían que decir la ve…a antigua costumbre procede la palabra testificar","Miguel de Cervantes Saavedra y William Shakespeare…tivamente; ambos murieron el 23 de abril de 1616…","Los mosquitos tienen dientes. (47 dientes)","Cuando un niño termina la educación primaria ha vi…tos y 10.000 actos de violencia en la televisión.","Si pones un huevo en medio de dos celulares lograras q se cocine en aproximadamente 62 minutos","Desde que nacemos nuestros ojos siempre son del mismo tamaño","Una gota de petróleo es capaz de convertir 25 litros de agua en no potable.","El músculo más potente del cuerpo humano es la lengua.","En Bangladesh,los niños de 15 años pueden ser encarcelados por hacer trampa en sus exámenes finales","Los delfines duermen con un ojo abierto.","Cada mes que comienza en Domingo tiene un Viernes …ada mes que comienza en Jueves tiene un Martes 13","En 1982 se sacó a la venta un juego en Estados Uni… casa se producían sucesos... (continuar leyendo)","En la antigua Inglaterra la gente no podía tener s…debían colgar afuera de su... (continuar leyendo)","El material más resistente creado por la naturaleza es la tela de araña.","Si por alguna razón el sol dejara de emitir luz, e…ra tardaríamos 8 minutos en darnos cuenta de esto","Hipopomonstrosesquipedalifobia miedo a las palabras largas","Los osos polares son zurdos.","Si tienes comezón en la garganta ráscate el oído, …os sufran un espasmo, así aliviando la comezón...","En la vida de los hipocampos son los machos los que llevan los embarazos","Un metro cuadrado de césped produce suficiente oxigeno para una persona por todo el año","La imagen más reconocida a nivel mundial, es la im…brerito con estrella, mirando hacia el horizonte.","La memoria del pez dorado dura 3 segundos","La nariz tiene el mismo largo que la frente","En 2008 en un programa de Disney Channel llamado Manny Manitas colaron pornografia","Cada rey de las cartas representa a un gran rey de… Corazones: Carlomagno. - Diamantes: Julio César.","Sólo existen tres animales con lengua azul: el per…Chow Chow, el lagarto lengua-azul y el oso negro.","Los búlgaros dicen 'sí' moviendo la cabeza de lado… lado, y dicen 'no' moviéndola de arriba a abajo.","El yoyo primero se uso como arma en Asia","Acetylseryltyrosylserylisoleucylthreonylserylproly…inylglutaminylphenylalanyl... (continuar leyendo)","Un gramo de oro se puede expandir hasta 20km.","Papa Noel antes vestía de verde y no de rojo","Golpearte la cabeza contra la pared consume 150 calorías por hora","La sal tiene más de 10000 usos","La base de la Gran Pirámide de Egipto equivale en tamaño a 10 campos de fútbol.","En París hay un Mc Donald's cuya famosísima letra …dicen que el color amarillo se veía muy corriente","Si pusiéramos una al lado de la otra todas las muñ…hasta la actualidad daríamos dos vueltas al mundo","En Finlandia se prohibieron los cómics del pato Donald porque no tenía pantalones","El primer minuto de silencio de la historia duró dos minutos","Antes de la Segunda Guerra Mundial, en el director…ers. Para el final de la guerra no había ninguno.","En 1980 en un hospital de Las Vegas se suspendiero…or apostar a qué hora iban a morir los pacientes.","En 1879 fue introducida en Estados Unidos una sust…para tratar la adicción a la morfina: la cocaína.","Cada vez que Beethoven se sentaba a escribir música, se ponía agua fría sobre la cabeza.","La distancia con los brazos y las manos estiradas …o índice al otro, es tu altura (de pies a cabeza)","En el momento que el agua esta hirviendo en un rec…ndo del recipiente no esta caliente....solo tibio","En el fondo del mar hay un pez que tiene los dientes tan grandes que no puede cerrar la boca","Aunque las hormigas son conocidas por trabajar en …rruptos, lo que las hace similares al ser humano.","Un estornudo viaja en tu boca a más de 100 Km/hr, …antener los parpados abiertos mientras estornuda.","Microsoft gasta más atendiendo llamadas de sus usuarios con problemas que produciendo sus programas.","La temperatura más alta registrada en el mundo ha … termómetro llego a los 136.4 Fahrenheit. (58º C)","La letra J, es la única letra que no aparece en la tabla periódica.","La fecha en las botellas de vino es la fecha en qu…y no es la fecha en que fue embotellado tal vino.","Hay un millón de insectos por cada persona.","Si gritas durante 8 años, 7 meses y 6 días...gener…energía suficiente para calentar una taza de café","La cucaracha puede vivir nueve días sin su cabeza, antes de morir de hambre.","El 'miembro' más grande del mundo animal es el de … llegar a medir más que un humano promedio (alto)","La gente rubia tiene más pelo que la gente de pelo oscuro.","100 tazas de café tomadas en un lapso de cuatro horas técnicamente pueden causar la muerte.","Si te truenas el cuello cada 3 horas durante 1 mes…ilidad suficiente como para poder lamerte el codo","En 1997, las líneas aéreas americanas se ahorraron… con solo eliminar una aceituna de cada ensalada.","El más rápido en el acto sexual el chimpancé (Pan … en 3 segundos. Le sigue el ratón con 5 segundos.","El alfabeto más largo del mundo es el de Camboya, tiene 74 letras","Los testículos de un hombre fabrican 10 millones d…te para repoblar todo el planeta en sólo 6 meses!","La pipi de gato se ve a la luz ultravioleta.","En Alemania del siglo XVIII, la sangre menstrual d… se añadía como afrodisíaco en comidas y bebidas.","Un dentista invento la galleta de la fortuna","El término 'poner los cuernos ' se debe a que en l…ara que se supiera que ahí... (continuar leyendo)","Los murciélagos siempre dan la vuelta a la izquierda al salir de una cueva.","El vuelo más largo que ha hecho una gallina es de 13 segundos","El pintor Vincent Van Gogh vendió solamente una pintura cuando vivía: Red Vineyard at Arles","Un kilo de patatas fritas cuesta 200 veces lo que vale un kilo de patata cruda...","Los cocodrilos no pueden sacar la lengua","El horno de microondas surgió cuando un investigad…ían derretido el chocolate que tenía en la bolsa.","La palabra mafia viene de dialecto italiano de la …lla' si ven sus siglas se forma la palabra mafia.","El olor más desagradable al que han llegado los ex…ción, y que en estado puro... (continuar leyendo)","Hexakoisiohexekontahexefobia miedo al 666","Las orejas humanas crecen hasta una edad muy avanzada, aunque lo hacen muy lentamente","La letra Q es la única que no aparece en ningún estado de Norteamérica","El 'hombre del año' en 1938 según la revista Time era Adolfo Hitler","Una persona puede llenar una bañera por día con el sudor y la saliva","La nuez moscada es extremadamente venenosa si es inyectada en forma intravenosa.","El 23% de las copias en las fotocopiadoras es porque personas se sientan y se fotocopian las nalgas","El besugo tiene el miembro 1,5 veces mas grande que su cuerpo"]}}}),h=b,g=n("2877"),y=n("6544"),q=n.n(y),E=n("8336"),_=n("2db4"),j=Object(g["a"])(h,p,f,!1,null,null,null),x=j.exports;q()(j,{VBtn:E["a"],VSnackbar:_["a"]});var L=o["default"].extend({name:"App",components:{curiosities:x},data:function(){return{fab:null,routes:["home","projects","academy","contact"]}},methods:{changeLanguage:function(e){l.locale=e},swipe:function(e){var a=this.routes.indexOf(m.currentRoute.name||"home");m.push(this.routes[a+e]||m.currentRoute.name||"home")}}}),w=L,z=n("7496"),C=n("553a"),k=n("132d"),S=n("9910"),A=n("c73b"),U=n("71d9"),M=n("2a7f"),T=n("269a"),O=n.n(T),P=n("c341"),V=Object(g["a"])(w,c,u,!1,null,"b5abfefa",null),D=V.exports;q()(V,{VApp:z["a"],VBtn:E["a"],VFooter:C["a"],VIcon:k["a"],VSpacer:S["a"],VSpeedDial:A["a"],VToolbar:U["a"],VToolbarItems:M["a"],VToolbarTitle:M["b"]}),O()(V,{Touch:P["a"]}),o["default"].config.productionTip=!1,new o["default"]({router:m,i18n:l,render:function(e){return e(D)}}).$mount("#app")},edd4:function(e){e.exports={workinprogress:"Sorry, web site under construction...",navbar:{home:"Home",projects:"Projects",academy:"Academy",contact:"Contact",curiosities:"Curiosities"},home:{title:"I´m ",subtitle:"Software engineer",age:"Age",email:"Email",freelance:"Freelance",vacation:"On vacation",date:"till April 1, 2019"},academy:{doctor:"Doctorate in computer engineering",uni_sala:"University of Salamanca",master:"Master in Automatic and Robotics",uni_alicant:"University of Alicante",web_course:"Web Development Course",degree:"Technical engineering in computer systems",uni_extre:"University of Extremadura",title_monitor:"Title of Leisure and Free Time Monitor"}}},f693:function(e){e.exports={workinprogress:"Desoleé, mi site est en reconstruction",navbar:{home:"Home",projects:"Projects",academy:"Académique",contact:"Contact",curiosities:"Curiosities"},home:{title:"Je suis ",subtitle:"Ingénieur en informatique",age:"Age",email:"Email",freelance:"Auto-entrepreneurs",vacation:"En vacances",date:"jusqu'au 1er avril 2019"},academy:{doctor:"* Doctorat en génie informatique",uni_sala:"Université de Salamanca",master:"Master en automatique et robotique",uni_alicant:"Université de Alicante",curso_web:"Cours de développement Web",degree:"Ingénierie technique des systèmes informatiques",uni_extre:"Université de Extremadura",title_monitor:"Titre du moniteur de loisir et de temps libre"}}}});
//# sourceMappingURL=app.df9f7515.js.map