(function(e){function a(a){for(var n,t,i=a[0],l=a[1],c=a[2],u=0,d=[];u<i.length;u++)t=i[u],r[t]&&d.push(r[t][0]),r[t]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);m&&m(a);while(d.length)d.shift()();return s.push.apply(s,c||[]),o()}function o(){for(var e,a=0;a<s.length;a++){for(var o=s[a],n=!0,t=1;t<o.length;t++){var i=o[t];0!==r[i]&&(n=!1)}n&&(s.splice(a--,1),e=l(l.s=o[0]))}return e}var n={},t={app:0},r={app:0},s=[];function i(e){return l.p+"js/"+({academy:"academy",curiosities:"curiosities",employment:"employment",projects:"projects"}[e]||e)+"."+{academy:"0492aa8a",curiosities:"63a5729e",employment:"ebae60a8",projects:"2db5326a"}[e]+".js"}function l(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.e=function(e){var a=[],o={academy:1,curiosities:1,employment:1,projects:1};t[e]?a.push(t[e]):0!==t[e]&&o[e]&&a.push(t[e]=new Promise(function(a,o){for(var n="css/"+({academy:"academy",curiosities:"curiosities",employment:"employment",projects:"projects"}[e]||e)+"."+{academy:"dcc43a82",curiosities:"a6ace10d",employment:"2af99387",projects:"8343dcc3"}[e]+".css",r=l.p+n,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var c=s[i],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===r))return a()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){c=d[i],u=c.getAttribute("data-href");if(u===n||u===r)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var n=a&&a.target&&a.target.src||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.request=n,delete t[e],m.parentNode.removeChild(m),o(s)},m.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(m)}).then(function(){t[e]=0}));var n=r[e];if(0!==n)if(n)a.push(n[2]);else{var s=new Promise(function(a,o){n=r[e]=[a,o]});a.push(n[2]=s);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=i(e),c=function(a){u.onerror=u.onload=null,clearTimeout(d);var o=r[e];if(0!==o){if(o){var n=a&&("load"===a.type?"missing":a.type),t=a&&a.target&&a.target.src,s=new Error("Loading chunk "+e+" failed.\n("+n+": "+t+")");s.type=n,s.request=t,o[1](s)}r[e]=void 0}};var d=setTimeout(function(){c({type:"timeout",target:u})},12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(a)},l.m=e,l.c=n,l.d=function(e,a,o){l.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:o})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,a){if(1&a&&(e=l(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)l.d(o,n,function(a){return e[a]}.bind(null,n));return o},l.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(a,"a",a),a},l.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=a,c=c.slice();for(var d=0;d<c.length;d++)a(c[d]);var m=u;s.push([0,"chunk-vendors"]),o()})({0:function(e,a,o){e.exports=o("cd49")},"034f":function(e,a,o){"use strict";var n=o("1356"),t=o.n(n);t.a},1356:function(e,a,o){},"49f8":function(e,a,o){var n={"./en.json":"edd4","./es.json":"a306","./fr.json":"f693"};function t(e){var a=r(e);return o(a)}function r(e){var a=n[e];if(!(a+1)){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return a}t.keys=function(){return Object.keys(n)},t.resolve=r,e.exports=t,t.id="49f8"},a306:function(e){e.exports={academy:{degree:"Ingeniería Técnica en Informática de Sistemas",doctor:"* Doctorado en Ingeniería Informática",master:"Máster en Automática y Robótica",title_monitor:"Título de Monitor de Ocio y Tiempo Libre",uni_alicant:"Universidad de Alicante",uni_extre:"Universidad de Extremadura",uni_sala:"Universidad de Salamanca",web_course:"Curso de Desarrollo Web"},employment:{essengrp:{description:'Empleando metodologías ágiles junto a un equipo de 5-6 personas multidisciplinar, realizamos el análisis, diseño e implementación de los productos principales de la compañía. Aplicación móvil implementada en Angular 6 e Ionic, con comunicación mediante servicios REST con el Back-End. Aplicación web "responsive" implementada en Angular 6, usando PrimeNG como "framework" UI para la gestión de roles y de datos. ',title:'Analista Programador "Front-End"'},profuturo:{description:"Desarrollo de aplicaciones multi-dispositivo (móvil, tablet) basadas en Angular, Cordova e Ionic, para un proyecto educativo en países en vías de desarrollo.",title:'Analista Programador "Front-End"'},ted:{description:"Desarrollo de aplicaciones móviles en AngularJS y Cordova para proyectos de educación.",title:"Programador Junior"}},home:{age:"Edad",date:"hasta el 1 de Abril, 2019",email:"Email",freelance:"Autónomo",subtitle:"Ingeniero Informático",title:"Soy ",vacation:"De vacaciones",videocall:"Videollamada",yearsworks:"Experiencia Laboral"},navbar:{academy:"Academico",contact:"Contacto",curiosities:"Curiosidades",employment:"Experiencia Profesional",home:"Inicio",projects:"Proyectos"},project:{covuaturage:"Progresive web app para compartir viajes en coche. Creado para ser utilizado en la Isla de la Reunion como proyecto para reducir los embotellamientos y la emision continua de gases probocada por la masiva utilización del coche unipersonal",infosolidario:"Proyecto web multiplataforma que quiere servir como respuesta a la tendencia a acumular objetos que ya no se usan en los hogares. La web quiere facilitar la donación de comida, objetos o ropa en desuso a las personas que quieran deshacerse de ellos pero que, a menudo, no saben cómo. Con “Infosolidario” se pueden hacer múltiples propuestas de donación (desde objetos a tiempo).",musiclivemap:"Web app para compartir conciertos de musica en directo. De una forma facil e intuitiva podremos buscar y agregar en el mapa conciertos de música en directo. Podremos incluso instalarla en los diferentes dispositivos móviles para tener un acceso más rápido y así no perdernos ningún espectáculo músical. ",selfiematon:"SelfieMatón es un dispositivo de autocaptura de imágenes personales y subida automática a diferentes redes sociales. Todo ello aplicando metodologías de gamificación a fin de involucrar a la audiencia. El dispositivo se ubicará en grandes recintos (centros comerciales, festivales, salones de bodas) y se basa en la aplicación y uso del Neuromarketing, entendiendo este como el marketing de las experiencias, de las emociones, es decir un tipo de marketing basado en provocar sentimientos y emociones en el consumidor para que éste conecte con una marca de un modo mucho más profundo, todo ello teniendo un claro enfoque a eventos. El objetivo es promover el valor y la notoriedad de nuestros sponsors en las redes sociales, así como monetizar la experiencias generadas. Es una apuesta por las últimas tecnologías, internet y diversas tendencias de marketing tales como la gamificación. El proyecto tiene como fin promover el impacto social."},workinprogress:"Lo sentimos, pagina en proceso de construccion..."}},cd49:function(e,a,o){"use strict";o.r(a);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),t=o("ce5b"),r=o.n(t);o("da64");n["default"].use(r.a,{iconfont:"md"});o("4917"),o("ac6a");var s=o("a925");function i(){var e=o("49f8"),a={};return e.keys().forEach(function(o){var n=o.match(/([A-Za-z0-9-_]+)\./i);if(n&&n.length>1){var t=n[1];a[t]=e(o)}}),a}n["default"].use(s["a"]);var l=new s["a"]({locale:"es",fallbackLocale:"es",messages:i()}),c=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("v-app",{directives:[{name:"touch",rawName:"v-touch",value:{left:function(){return e.swipe(1)},right:function(){return e.swipe(-1)}},expression:"{\n        left: () => swipe(1),\n        right: () => swipe(-1),\n      }"}]},[o("v-toolbar",{attrs:{dark:""}},[o("v-toolbar-title",[e._v("R"),o("span",{staticClass:"font-weight-light"},[e._v("C")])]),o("v-spacer"),o("v-toolbar-items",{staticClass:"hidden-sm-and-up"},[o("v-btn",{attrs:{flat:"",icon:"",to:"/home"}},[o("v-icon",[e._v("home")])],1),o("v-btn",{attrs:{flat:"",icon:"",to:"/employment"}},[o("v-icon",[e._v("people")])],1),o("v-btn",{attrs:{flat:"",icon:"",to:"/academy"}},[o("v-icon",[e._v("school")])],1),o("v-btn",{attrs:{flat:"",icon:"",to:"/projects"}},[o("v-icon",[e._v("laptop_mac")])],1)],1),o("v-toolbar-items",{staticClass:"hidden-xs-only"},[o("v-btn",{attrs:{flat:"",to:"/home"}},[e._v(e._s(e.$t("navbar.home"))+"\n          "),o("v-icon",{attrs:{right:""}},[e._v("home")])],1),o("v-btn",{attrs:{flat:"",to:"/employment"}},[e._v(e._s(e.$t("navbar.employment"))+"\n          "),o("v-icon",{attrs:{right:""}},[e._v("people")])],1),o("v-btn",{attrs:{flat:"",to:"/academy"}},[e._v(e._s(e.$t("navbar.academy"))+"\n          "),o("v-icon",{attrs:{right:""}},[e._v("school")])],1),o("v-btn",{attrs:{flat:"",to:"/projects"}},[e._v(e._s(e.$t("navbar.projects"))+"\n          "),o("v-icon",{attrs:{right:""}},[e._v("laptop_mac")])],1)],1)],1),"home"!=e.$router.currentRoute.name?o("div",{staticClass:"hidden-sm-and-up"},[o("v-divider",{attrs:{light:""}}),o("v-toolbar",{attrs:{dense:"",dark:""}},[o("v-toolbar-title",{staticStyle:{margin:"auto"}},[o("span",{staticClass:"font-weight-light",staticStyle:{"text-transform":"capitalize"}},[e._v(e._s(e.$router.currentRoute.name))])])],1)],1):e._e(),o("router-view"),o("v-footer",{staticClass:"pa-3",attrs:{fixed:"",dark:""}},[o("v-speed-dial",{attrs:{direction:"right"},scopedSlots:e._u([{key:"activator",fn:function(){return[o("v-btn",{attrs:{flat:"",color:"primary",fab:"",small:""},model:{value:e.fab,callback:function(a){e.fab=a},expression:"fab"}},[o("v-icon",[e._v("language")]),o("v-icon",[e._v("close")])],1)]},proxy:!0}]),model:{value:e.fab,callback:function(a){e.fab=a},expression:"fab"}},[o("v-btn",{attrs:{fab:"",flat:"",small:"",color:"red"},on:{click:function(a){return e.changeLanguage("es")}}},[e._v("es")]),o("v-btn",{attrs:{fab:"",flat:"",small:"",color:"green"},on:{click:function(a){return e.changeLanguage("en")}}},[e._v("en")]),o("v-btn",{attrs:{fab:"",flat:"",small:"",color:"indigo"},on:{click:function(a){return e.changeLanguage("fr")}}},[e._v("fr")])],1),o("v-spacer"),o("div",[e._v("v0.4 (6/07/2019)")])],1)],1)},u=[],d=(o("7f7f"),o("8c4f"));n["default"].use(d["a"]);var m=new d["a"]({routes:[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:function(){return o.e("projects").then(o.bind(null,"bb51"))}},{path:"/employment",name:"employment",component:function(){return o.e("employment").then(o.bind(null,"8bdc"))}},{path:"/projects",name:"projects",component:function(){return o.e("projects").then(o.bind(null,"acca"))}},{path:"/academy",name:"academy",component:function(){return o.e("academy").then(o.bind(null,"cd27"))}},{path:"/curiosities",name:"curiosities",component:function(){return o.e("curiosities").then(o.bind(null,"55a3"))}}]}),p=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("v-snackbar",{attrs:{top:"",timeout:1e4},model:{value:e.open,callback:function(a){e.open=a},expression:"open"}},[e._v("\n    Sabias que... "+e._s(e.text)+"\n    "),o("v-btn",{attrs:{color:"pink",flat:""},on:{click:function(a){e.open=!1}}},[e._v("\n        X\n    ")])],1)},v=[],f=o("5118"),g=n["default"].extend({name:"curiosities",mounted:function(){var e=this;Object(f["setInterval"])(function(){e.open=!0,e.text=e.phrases[Math.floor(Math.random()*e.phrases.length)]},2e4)},data:function(){return{open:!1,text:"",phrases:["El Vaticano posee la cantidad de dinero suficiente para acabar con la pobreza mundial dos veces","Los caballitos de mar elijen una pareja durante to… permanecen solos por un tiempo y mueren también!","Los humanos y los delfines son las únicas especies que practican sexo por placer.","Las semillas de la manzana contienen cianuro, comerte 40 o 50 podrían matarte.","Si le quitas los bigotes a un gato, éste no puede …n y por lo tanto pierde el equilibrio y se cae...","Un koala puede vivir toda su vida sin tomar agua","Thomas Alva Edison, el inventor de la bombilla eléctrica, le temía a la oscuridad","Los escorpiones, son los únicos que se suicidan, l…iempre son ellos los que terminan con su vida....","Si divides el número de abejas hembras por el de m…mpre obtendrás el mismo número, PI. 3,14159265...","Los ojos de un hámster pueden caerse si lo cuelgan con la cabeza para abajo","Los peces chicos no se aburren en las peceras porq…o dura dos minutos y es como si volvieran a nacer","Si estornudas tu corazón se detiene un 1 milisegun…a desgarrar la carótida o sufrir daños cerebrales","El león, el animal de mayor actividad sexual del m…de copular con la misma hembra cien veces al día.","Una persona morirá más rápido por no dormir que po…in sueño, y puede estar varias semanas sin comer.","Si metes una Coca Light en un recipiente con agua,…i lo haces con una de Coca-Cola normal, se hunde.","Las primeras palmeras crecieron en el Polo Norte","Los chimpances, orangutanes, delfines, elefantes y…es capaces de reconocerse a sí misma en un espejo","Alex Mitchell, un albañil de 50 años de edad de Ki…tchell finalmente se derrumbo en el sofá y murió.","Los antiguos romanos cuando tenían que decir la ve…a antigua costumbre procede la palabra testificar","Miguel de Cervantes Saavedra y William Shakespeare…tivamente; ambos murieron el 23 de abril de 1616…","Los mosquitos tienen dientes. (47 dientes)","Cuando un niño termina la educación primaria ha vi…tos y 10.000 actos de violencia en la televisión.","Si pones un huevo en medio de dos celulares lograras q se cocine en aproximadamente 62 minutos","Desde que nacemos nuestros ojos siempre son del mismo tamaño","Una gota de petróleo es capaz de convertir 25 litros de agua en no potable.","El músculo más potente del cuerpo humano es la lengua.","En Bangladesh,los niños de 15 años pueden ser encarcelados por hacer trampa en sus exámenes finales","Los delfines duermen con un ojo abierto.","Cada mes que comienza en Domingo tiene un Viernes …ada mes que comienza en Jueves tiene un Martes 13","En 1982 se sacó a la venta un juego en Estados Uni… casa se producían sucesos... (continuar leyendo)","En la antigua Inglaterra la gente no podía tener s…debían colgar afuera de su... (continuar leyendo)","El material más resistente creado por la naturaleza es la tela de araña.","Si por alguna razón el sol dejara de emitir luz, e…ra tardaríamos 8 minutos en darnos cuenta de esto","Hipopomonstrosesquipedalifobia miedo a las palabras largas","Los osos polares son zurdos.","Si tienes comezón en la garganta ráscate el oído, …os sufran un espasmo, así aliviando la comezón...","En la vida de los hipocampos son los machos los que llevan los embarazos","Un metro cuadrado de césped produce suficiente oxigeno para una persona por todo el año","La imagen más reconocida a nivel mundial, es la im…brerito con estrella, mirando hacia el horizonte.","La memoria del pez dorado dura 3 segundos","La nariz tiene el mismo largo que la frente","En 2008 en un programa de Disney Channel llamado Manny Manitas colaron pornografia","Cada rey de las cartas representa a un gran rey de… Corazones: Carlomagno. - Diamantes: Julio César.","Sólo existen tres animales con lengua azul: el per…Chow Chow, el lagarto lengua-azul y el oso negro.","Los búlgaros dicen 'sí' moviendo la cabeza de lado… lado, y dicen 'no' moviéndola de arriba a abajo.","El yoyo primero se uso como arma en Asia","Acetylseryltyrosylserylisoleucylthreonylserylproly…inylglutaminylphenylalanyl... (continuar leyendo)","Un gramo de oro se puede expandir hasta 20km.","Papa Noel antes vestía de verde y no de rojo","Golpearte la cabeza contra la pared consume 150 calorías por hora","La sal tiene más de 10000 usos","La base de la Gran Pirámide de Egipto equivale en tamaño a 10 campos de fútbol.","En París hay un Mc Donald's cuya famosísima letra …dicen que el color amarillo se veía muy corriente","Si pusiéramos una al lado de la otra todas las muñ…hasta la actualidad daríamos dos vueltas al mundo","En Finlandia se prohibieron los cómics del pato Donald porque no tenía pantalones","El primer minuto de silencio de la historia duró dos minutos","Antes de la Segunda Guerra Mundial, en el director…ers. Para el final de la guerra no había ninguno.","En 1980 en un hospital de Las Vegas se suspendiero…or apostar a qué hora iban a morir los pacientes.","En 1879 fue introducida en Estados Unidos una sust…para tratar la adicción a la morfina: la cocaína.","Cada vez que Beethoven se sentaba a escribir música, se ponía agua fría sobre la cabeza.","La distancia con los brazos y las manos estiradas …o índice al otro, es tu altura (de pies a cabeza)","En el momento que el agua esta hirviendo en un rec…ndo del recipiente no esta caliente....solo tibio","En el fondo del mar hay un pez que tiene los dientes tan grandes que no puede cerrar la boca","Aunque las hormigas son conocidas por trabajar en …rruptos, lo que las hace similares al ser humano.","Un estornudo viaja en tu boca a más de 100 Km/hr, …antener los parpados abiertos mientras estornuda.","Microsoft gasta más atendiendo llamadas de sus usuarios con problemas que produciendo sus programas.","La temperatura más alta registrada en el mundo ha … termómetro llego a los 136.4 Fahrenheit. (58º C)","La letra J, es la única letra que no aparece en la tabla periódica.","La fecha en las botellas de vino es la fecha en qu…y no es la fecha en que fue embotellado tal vino.","Hay un millón de insectos por cada persona.","Si gritas durante 8 años, 7 meses y 6 días...gener…energía suficiente para calentar una taza de café","La cucaracha puede vivir nueve días sin su cabeza, antes de morir de hambre.","El 'miembro' más grande del mundo animal es el de … llegar a medir más que un humano promedio (alto)","La gente rubia tiene más pelo que la gente de pelo oscuro.","100 tazas de café tomadas en un lapso de cuatro horas técnicamente pueden causar la muerte.","Si te truenas el cuello cada 3 horas durante 1 mes…ilidad suficiente como para poder lamerte el codo","En 1997, las líneas aéreas americanas se ahorraron… con solo eliminar una aceituna de cada ensalada.","El más rápido en el acto sexual el chimpancé (Pan … en 3 segundos. Le sigue el ratón con 5 segundos.","El alfabeto más largo del mundo es el de Camboya, tiene 74 letras","Los testículos de un hombre fabrican 10 millones d…te para repoblar todo el planeta en sólo 6 meses!","La pipi de gato se ve a la luz ultravioleta.","En Alemania del siglo XVIII, la sangre menstrual d… se añadía como afrodisíaco en comidas y bebidas.","Un dentista invento la galleta de la fortuna","El término 'poner los cuernos ' se debe a que en l…ara que se supiera que ahí... (continuar leyendo)","Los murciélagos siempre dan la vuelta a la izquierda al salir de una cueva.","El vuelo más largo que ha hecho una gallina es de 13 segundos","El pintor Vincent Van Gogh vendió solamente una pintura cuando vivía: Red Vineyard at Arles","Un kilo de patatas fritas cuesta 200 veces lo que vale un kilo de patata cruda...","Los cocodrilos no pueden sacar la lengua","El horno de microondas surgió cuando un investigad…ían derretido el chocolate que tenía en la bolsa.","La palabra mafia viene de dialecto italiano de la …lla' si ven sus siglas se forma la palabra mafia.","El olor más desagradable al que han llegado los ex…ción, y que en estado puro... (continuar leyendo)","Hexakoisiohexekontahexefobia miedo al 666","Las orejas humanas crecen hasta una edad muy avanzada, aunque lo hacen muy lentamente","La letra Q es la única que no aparece en ningún estado de Norteamérica","El 'hombre del año' en 1938 según la revista Time era Adolfo Hitler","Una persona puede llenar una bañera por día con el sudor y la saliva","La nuez moscada es extremadamente venenosa si es inyectada en forma intravenosa.","El 23% de las copias en las fotocopiadoras es porque personas se sientan y se fotocopian las nalgas","El besugo tiene el miembro 1,5 veces mas grande que su cuerpo"]}}}),h=g,b=o("2877"),y=o("6544"),j=o.n(y),q=o("8336"),E=o("2db4"),w=Object(b["a"])(h,p,v,!1,null,null,null),x=w.exports;j()(w,{VBtn:q["a"],VSnackbar:E["a"]});var k=n["default"].extend({name:"App",components:{curiosities:x},data:function(){return{fab:null,routes:["home","employment","academy","projects","contact"]}},methods:{changeLanguage:function(e){l.locale=e},swipe:function(e){var a=this.routes.indexOf(m.currentRoute.name||"home");console.log(a,m.currentRoute.name),m.push(this.routes[a+e]||m.currentRoute.name||"home")}}}),A=k,_=(o("034f"),o("7496")),C=o("ce7e"),L=o("553a"),S=o("132d"),z=o("9910"),P=o("c73b"),I=o("71d9"),T=o("2a7f"),D=o("269a"),U=o.n(D),M=o("c341"),V=Object(b["a"])(A,c,u,!1,null,null,null),O=V.exports;j()(V,{VApp:_["a"],VBtn:q["a"],VDivider:C["a"],VFooter:L["a"],VIcon:S["a"],VSpacer:z["a"],VSpeedDial:P["a"],VToolbar:I["a"],VToolbarItems:T["a"],VToolbarTitle:T["b"]}),U()(V,{Touch:M["a"]}),n["default"].config.productionTip=!1,new n["default"]({router:m,i18n:l,render:function(e){return e(O)}}).$mount("#app")},edd4:function(e){e.exports={academy:{degree:"Technical Engineering in Computer Systems",doctor:"*Doctorate in Computer Engineering",master:"Master in Automatic Control and Robotics",title_monitor:"Sports and Leisure Activities Instructor Certificate",uni_alicant:"University of Alicante",uni_extre:"University of Extremadura",uni_sala:"University of Salamanca",web_course:"Web Development Course"},employment:{essengrp:{description:"Using agile methodologies together with a team of 5-6 multidisciplinary people, we carried out the analysis, design and implementation of company's main products. Mobile App implemented in Angular 6 and Ionic, with communication with the Back-End through REST services. Responsive Web App implemented in Angular 6 and using PrimeNG framework UI for the management of roles and data.",title:'Programmer Analyst "Front-End"'},profuturo:{description:"Development of multi-device applications (mobile, tablet) based on Angular, Cordova and Ionic, for an educational project in developing countries.",title:'Programmer Analyst "Front-End"'},ted:{description:"Development of Mobile Applications in AngularJS and Cordova for educational projects.",title:"Junior Programmer"}},home:{age:"Age",date:"untill April 1, 2019",email:"Email",freelance:"Freelance",subtitle:"Software Engineer",title:"I´m ",vacation:"On vacation",videocall:"Videoconference",yearsworks:"Working Experience"},navbar:{academy:"Academy",contact:"Contact",curiosities:"Curiosities",employment:"Working Experience",home:"Home",projects:"Projects"},project:{covuaturage:"Progressive web app to share car trips. Created to be used in the Reunion Island as a project to reduce traffic jams and the continuous emission of gases caused by the massive use of the unipersonal car",infosolidario:'Multi-platform web project that wants to serve as a response to the tendency to accumulate objects that are no longer used in homes. The web wants to facilitate the donation of food, objects or clothes in disuse to people who want to get rid of them but who, often, do not know how. With "Infosolidario" you can make multiple donation proposals (from objects on time).',musiclivemap:"Web app to share live music concerts. In an easy and intuitive way we can search and add live music concerts on the map. We can even install it on different mobile devices to have faster access and thus not miss any musical show.",selfiematon:"SelfieMatón is a self-capture device for personal images and automatic upload to different social networks. All this by applying gamification methodologies in order to involve the audience. The device will be located in large venues (shopping centers, festivals, wedding halls) and is based on the application and use of Neuromarketing, understanding this as the marketing of experiences, of emotions, that is, a type of marketing based on provoking feelings and emotions in the consumer so that he connects with a brand in a much deeper way, all of this having a clear focus on events. The objective is to promote the value and the notoriety of our sponsors in social networks, as well as to monetize the experiences generated. It is a commitment to the latest technologies, internet and various marketing trends such as gamification. The project aims to promote social impact."},workinprogress:"Sorry, web site under construction..."}},f693:function(e){e.exports={academy:{degree:"Génie Technique des Systèmes Informatiques",doctor:"* Doctorat en Génie Informatique",master:"Master en Automatique et Robotique",title_monitor:"Diplôme d'animateur d'activités sportives et de loisirs",uni_alicant:"Université d'Alicante",uni_extre:"Université d'Extremadura",uni_sala:"Université de Salamanque",web_course:"Cours de Développement Web"},employment:{essengrp:{description:"En utilisant des méthodologies agiles avec une équipe de 5 à 6 personnes multidisciplinaires, nous avons effectué l'analyse, la conception et la mise en œuvre des principaux produits de l'entreprise. Application mobile mise en œuvre avec Angular 6 et Ionic, communication via services REST avec le Back-End. Application Web adaptative mise en œuvre avec Angular 6, utilisant PrimeNG comme framework UI pour la gestion des rôles et des données.",title:'Programmeur Analyste "Front-End"'},profuturo:{description:"Développement d'applications multi-appareils (portables, tablettes) basées sur Angular, Cordova et Ionic, pour un projet éducatif dans des pays en développement.",title:'Programmeur Analyste "Front-End"'},ted:{description:"Développement d'applications mobiles avec AngularJS et Cordova pour des projets éducatifs.",title:"Programmeur Junior"}},home:{age:"Âge",date:"jusqu'au 1er avril 2019",email:"Email",freelance:"Auto-entrepreneur",subtitle:"Ingénieur en Informatique",title:"Je suis ",vacation:"En vacances",videocall:"Visioconférence",yearsworks:"Expérience Professionnelle"},navbar:{academy:"Académique",contact:"Contact",curiosities:"Curiosities",employment:"Expérience Professionelle",home:"Accueil",projects:"Projets"},project:{covuaturage:"Application web progressive pour partager des trajets en voiture. Créé pour être utilisé à la Réunion comme un projet visant à réduire les embouteillages et les émissions continues de gaz causées par l'utilisation massive de la voiture unipersonnelle",infosolidario:"Projet Web multi-plateformes visant à répondre à la tendance à accumuler des objets qui ne sont plus utilisés à la maison. Le Web veut faciliter le don de nourriture, d'objets ou de vêtements en désuétude aux personnes qui veulent s'en débarrasser mais qui, souvent, ne savent pas comment. Avec \"Infosolidario\", vous pouvez faire plusieurs propositions de dons (à partir d'objets à temps).",musiclivemap:"Application Web pour partager des concerts de musique en direct. De manière simple et intuitive, nous pouvons rechercher et ajouter des concerts de musique en direct sur la carte. Nous pouvons même l'installer sur différents appareils mobiles pour avoir un accès plus rapide et ainsi ne manquer aucune émission musicale.",selfiematon:"SelfieMatón est un appareil de capture automatique d'images personnelles et de téléchargement automatique sur différents réseaux sociaux. Tout cela en appliquant des méthodologies de gamification afin d'impliquer le public. Le dispositif sera situé dans de grandes salles (centres commerciaux, festivals, salles de mariage) et est basé sur l'application et l'utilisation du Neuromarketing, en tant que marketing d'expériences, d'émotions, c'est-à-dire un type de marketing fondé sur la provocation. sentiments et émotions chez le consommateur afin qu’il se connecte à une marque de manière beaucoup plus profonde, le tout étant clairement axé sur les événements. L'objectif est de promouvoir la valeur et la notoriété de nos sponsors dans les réseaux sociaux, ainsi que de monétiser les expériences générées. C'est un engagement envers les dernières technologies, Internet et diverses tendances marketing telles que la gamification. Le projet vise à promouvoir l'impact social."},workinprogress:"Desoleé, mi site est en reconstruction"}}});
//# sourceMappingURL=app.83a80e5d.js.map