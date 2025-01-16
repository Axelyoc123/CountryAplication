import{A as y,B as r,C as p,D as K,E as re,F as S,G as E,H as _,I as w,J as b,K as I,L as ae,M as le,Q as se,S as me,T as pe,V as G,W as ce,a as Q,b as z,c as W,d as A,e as X,f as Y,g as Z,h as B,i as ee,j as te,k as ne,l as ie,m as H,n as f,o as a,p as C,q as c,r as M,s as u,t as m,u as n,v as t,w as s,x as oe,y as h,z as x}from"./chunk-WAVK7BWH.js";var v=class o{constructor(i){this.http=i}apiUrl="https://restcountries.com/v3.1";getCountriespRequest(i){return this.http.get(i).pipe(A(e=>z([])))}searchCountryByAlphaCode(i){let e=`${this.apiUrl}/alpha/${i}`;return this.http.get(e).pipe(W(l=>l.length>0?l[0]:null),A(l=>z(null)))}searchCapital(i){let e=`${this.apiUrl}/capital/${i}`;return this.getCountriespRequest(e)}searchCountry(i){let e=`${this.apiUrl}/name/${i}`;return this.getCountriespRequest(e)}searchRegion(i){let e=`${this.apiUrl}/region/${i}`;return this.getCountriespRequest(e)}static \u0275fac=function(e){return new(e||o)(ee(le))};static \u0275prov=Z({token:o,factory:o.\u0275fac,providedIn:"root"})};var P=class o{debouncer=new Q;placeholder="";onValue=new H;onDebounce=new H;ngOnInit(){this.debouncer.pipe(X(300)).subscribe(i=>{this.onDebounce.emit(i)})}emitValue(i){this.onValue.emit(i)}onKeyPress(i){this.debouncer.next(i)}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=c({type:o,selectors:[["shared-searchbox"]],inputs:{placeholder:"placeholder"},outputs:{onValue:"onValue",onDebounce:"onDebounce"},standalone:!1,decls:2,vars:1,consts:[["txtSearchInput",""],["type","text",1,"form-control",3,"keyup","placeholder"]],template:function(e,l){if(e&1){let d=oe();n(0,"input",1,0),h("keyup",function(){te(d);let de=y(1);return ne(l.onKeyPress(de.value))}),t()}e&2&&m("placeholder",l.placeholder)},encapsulation:2})};var D=class o{static \u0275fac=function(e){return new(e||o)};static \u0275cmp=c({type:o,selectors:[["shared-loading-spinner"]],standalone:!1,decls:15,vars:0,consts:[[1,"spinner-container","bg-dark"],["width","30","height","30","viewBox","0 0 45 45","xmlns","http://www.w3.org/2000/svg","stroke","#fff"],["fill","none","fill-rule","evenodd","transform","translate(1 1)","stroke-width","2"],["cx","22","cy","22","r","6","stroke-opacity","0"],["attributeName","r","begin","1.5s","dur","3s","values","6;22","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-opacity","begin","1.5s","dur","3s","values","1;0","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-width","begin","1.5s","dur","3s","values","2;0","calcMode","linear","repeatCount","indefinite"],["attributeName","r","begin","3s","dur","3s","values","6;22","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-opacity","begin","3s","dur","3s","values","1;0","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-width","begin","3s","dur","3s","values","2;0","calcMode","linear","repeatCount","indefinite"],["cx","22","cy","22","r","8"],["attributeName","r","begin","0s","dur","1.5s","values","6;1;2;3;4;5;6","calcMode","linear","repeatCount","indefinite"]],template:function(e,l){e&1&&(n(0,"div",0)(1,"span"),r(2,"Buscando"),t(),ie(),n(3,"svg",1)(4,"g",2)(5,"circle",3),s(6,"animate",4)(7,"animate",5)(8,"animate",6),t(),n(9,"circle",3),s(10,"animate",7)(11,"animate",8)(12,"animate",9),t(),n(13,"circle",10),s(14,"animate",11),t()()()())},styles:[".spinner-container[_ngcontent-%COMP%]{position:fixed;bottom:15px;right:15px;background-color:#000;color:#fff;padding:5px 10px;border-radius:20px;display:flex;align-items:center;box-shadow:0 0 5px #0000001a}span[_ngcontent-%COMP%]{margin-left:5px}"]})};var Ce=o=>["/countries/by",o];function ye(o,i){o&1&&(n(0,"div",2),r(1,` no hay paises que mostrar
`),t())}function be(o,i){if(o&1&&(n(0,"tr")(1,"td"),r(2),t(),n(3,"td"),s(4,"img",5),t(),n(5,"td"),s(6,"img",5),t(),n(7,"td"),r(8),t(),n(9,"td"),r(10),t(),n(11,"td"),r(12),S(13,"number"),t(),n(14,"td")(15,"a",6),r(16,"Ver mas"),t()()()),o&2){let e=i.$implicit,l=i.index;a(2),p(l+1),a(2),m("src",e.flags.svg,f)("alt",e.name.common),a(2),m("src",e.flags.svg,f)("alt",e.name.common),a(2),p(e.name.common),a(2),p(e.capital),a(2),p(E(13,9,e.population)),a(3),m("routerLink",re(11,Ce,e.cca3))}}function ve(o,i){if(o&1&&(n(0,"table",3)(1,"thead")(2,"tr")(3,"th"),r(4,"#"),t(),n(5,"th"),r(6,"Icono"),t(),n(7,"th"),r(8,"Bandera"),t(),n(9,"th"),r(10,"Nombre"),t(),n(11,"th"),r(12,"capital"),t(),n(13,"th"),r(14,"Poblacion"),t(),s(15,"th"),t()(),n(16,"tbody"),u(17,be,17,13,"tr",4),t()()),o&2){let e=x();a(17),m("ngForOf",e.countries)}}var F=class o{countries=[];static \u0275fac=function(e){return new(e||o)};static \u0275cmp=c({type:o,selectors:[["capital-table"]],inputs:{countries:"countries"},standalone:!1,decls:3,vars:2,consts:[["table",""],["class","alert alert-warning",4,"ngIf","ngIfElse"],[1,"alert","alert-warning"],[1,"table"],[4,"ngFor","ngForOf"],[3,"src","alt"],[3,"routerLink"]],template:function(e,l){if(e&1&&u(0,ye,2,0,"div",1)(1,ve,18,1,"ng-template",null,0,_),e&2){let d=y(2);m("ngIf",l.countries.length===0)("ngIfElse",d)}},dependencies:[w,b,pe,I],styles:["img[_ngcontent-%COMP%]{width:30px}"]})};function xe(o,i){o&1&&s(0,"shared-loading-spinner")}var k=class o{constructor(i){this.countriesService=i}countries=[];isLoading=!1;searchByCapital(i){this.isLoading=!0,this.countriesService.searchCapital(i).subscribe(e=>{this.countries=e,this.isLoading=!1})}static \u0275fac=function(e){return new(e||o)(C(v))};static \u0275cmp=c({type:o,selectors:[["app-by-capital-pages"]],standalone:!1,decls:11,vars:2,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por capital",3,"onDebounce"],[4,"ngIf"],[3,"countries"]],template:function(e,l){e&1&&(n(0,"h2"),r(1,"Por capital"),t(),s(2,"hr"),n(3,"div",0)(4,"div",1)(5,"shared-searchbox",2),h("onDebounce",function(R){return l.searchByCapital(R)}),t()()(),n(6,"div",0)(7,"div",1),s(8,"hr"),u(9,xe,1,0,"shared-loading-spinner",3),s(10,"capital-table",4),t()()),e&2&&(a(9),m("ngIf",l.isLoading),a(),m("countries",l.countries))},dependencies:[b,P,D,F],encapsulation:2})};function Se(o,i){o&1&&(n(0,"div",2),r(1,` no hay paises que mostrar
`),t())}function Ee(o,i){if(o&1&&(n(0,"tr")(1,"td"),r(2),t(),n(3,"td"),s(4,"img",5),t(),n(5,"td"),s(6,"img",5),t(),n(7,"td"),r(8),t(),n(9,"td"),r(10),S(11,"number"),t(),s(12,"td"),t()),o&2){let e=i.$implicit,l=i.index;a(2),p(l+1),a(2),m("src",e.flags.svg,f)("alt",e.name.common),a(2),m("src",e.flags.svg,f)("alt",e.name.common),a(2),p(e.name.common),a(2),p(E(11,7,e.population))}}function _e(o,i){if(o&1&&(n(0,"table",3)(1,"thead")(2,"tr")(3,"th"),r(4,"#"),t(),n(5,"th"),r(6,"Icono"),t(),n(7,"th"),r(8,"Bandera"),t(),n(9,"th"),r(10,"Nombre"),t(),n(11,"th"),r(12,"Poblacion"),t(),s(13,"th"),t()(),n(14,"tbody"),u(15,Ee,13,9,"tr",4),t()()),o&2){let e=x();a(15),m("ngForOf",e.countries)}}var V=class o{countries=[];static \u0275fac=function(e){return new(e||o)};static \u0275cmp=c({type:o,selectors:[["countries-table"]],inputs:{countries:"countries"},standalone:!1,decls:3,vars:2,consts:[["table",""],["class","alert alert-warning",4,"ngIf","ngIfElse"],[1,"alert","alert-warning"],[1,"table"],[4,"ngFor","ngForOf"],[3,"src","alt"]],template:function(e,l){if(e&1&&u(0,Se,2,0,"div",1)(1,_e,16,1,"ng-template",null,0,_),e&2){let d=y(2);m("ngIf",l.countries.length===0)("ngIfElse",d)}},dependencies:[w,b,I],styles:["img[_ngcontent-%COMP%]{width:30px}"]})};var j=class o{constructor(i){this.countriesService=i}Countries=[];searchByCountries(i){this.countriesService.searchCountry(i).subscribe(e=>this.Countries=e)}static \u0275fac=function(e){return new(e||o)(C(v))};static \u0275cmp=c({type:o,selectors:[["app-by-country-pages"]],standalone:!1,decls:10,vars:1,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por Pais",3,"onValue"],[3,"countries"]],template:function(e,l){e&1&&(n(0,"h2"),r(1,"Por Pais"),t(),s(2,"hr"),n(3,"div",0)(4,"div",1)(5,"shared-searchbox",2),h("onValue",function(R){return l.searchByCountries(R)}),t()()(),n(6,"div",0)(7,"div",1),s(8,"hr")(9,"countries-table",3),t()()),e&2&&(a(9),m("countries",l.Countries))},dependencies:[P,V],encapsulation:2})};function Pe(o,i){o&1&&(n(0,"div",2),r(1,` no hay paises que mostrar
`),t())}function Te(o,i){if(o&1&&(n(0,"tr")(1,"td"),r(2),t(),n(3,"td"),s(4,"img",5),t(),n(5,"td"),s(6,"img",5),t(),n(7,"td"),r(8),t(),n(9,"td"),r(10),t(),n(11,"td"),r(12),S(13,"number"),t(),n(14,"td")(15,"a",6),r(16,"Ver mas"),t()()()),o&2){let e=i.$implicit,l=i.index;a(2),p(l+1),a(2),m("src",e.flags.svg,f)("alt",e.name.common),a(2),m("src",e.flags.svg,f)("alt",e.name.common),a(2),p(e.name.common),a(2),p(e.region),a(2),p(E(13,8,e.population))}}function Re(o,i){if(o&1&&(n(0,"table",3)(1,"thead")(2,"tr")(3,"th"),r(4,"#"),t(),n(5,"th"),r(6,"Icono"),t(),n(7,"th"),r(8,"Bandera"),t(),n(9,"th"),r(10,"Nombre"),t(),n(11,"th"),r(12,"Region/th> "),t(),n(13,"th"),r(14,"Poblacion"),t(),s(15,"th"),t()(),n(16,"tbody"),u(17,Te,17,10,"tr",4),t()()),o&2){let e=x();a(17),m("ngForOf",e.region)}}var U=class o{region=[];static \u0275fac=function(e){return new(e||o)};static \u0275cmp=c({type:o,selectors:[["region-table"]],inputs:{region:"region"},standalone:!1,decls:3,vars:2,consts:[["table",""],["class","alert alert-warning",4,"ngIf","ngIfElse"],[1,"alert","alert-warning"],[1,"table"],[4,"ngFor","ngForOf"],[3,"src","alt"],["href","#"]],template:function(e,l){if(e&1&&u(0,Pe,2,0,"div",1)(1,Re,18,1,"ng-template",null,0,_),e&2){let d=y(2);m("ngIf",l.region.length===0)("ngIfElse",d)}},dependencies:[w,b,I],styles:["img[_ngcontent-%COMP%]{width:30px}"]})};var L=class o{constructor(i){this.RegionService=i}Region=[];searchByRegion(i){this.RegionService.searchRegion(i).subscribe(e=>{this.Region=e})}static \u0275fac=function(e){return new(e||o)(C(v))};static \u0275cmp=c({type:o,selectors:[["app-by-region-pages"]],standalone:!1,decls:10,vars:1,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por Region",3,"onValue"],[3,"region"]],template:function(e,l){e&1&&(n(0,"h2"),r(1,"Por Region"),t(),s(2,"hr"),n(3,"div",0)(4,"div",1)(5,"shared-searchbox",2),h("onValue",function(R){return l.searchByRegion(R)}),t()()(),n(6,"div",0)(7,"div",1),s(8,"hr")(9,"region-table",3),t()()),e&2&&(a(9),m("region",l.Region))},dependencies:[P,U],encapsulation:2})};function Be(o,i){o&1&&(n(0,"div",2),r(1," Espere por favor "),t())}function Me(o,i){if(o&1&&(n(0,"div")(1,"div")(2,"div",3)(3,"div",4)(4,"h2"),r(5,"Pais: "),n(6,"strong"),r(7),t()()()()(),n(8,"div",3)(9,"div",5),s(10,"img",6),t(),n(11,"div",7)(12,"h3"),r(13,"Informaci\xF3n"),t(),n(14,"ul",8)(15,"li",9)(16,"strong"),r(17,"Poblaci\xF3n"),t(),r(18),S(19,"number"),t(),n(20,"li",9)(21,"strong"),r(22,"C\xF3digo"),t(),r(23),t()()()(),n(24,"div",10)(25,"div",7)(26,"h3"),r(27,"Traducciones"),t(),n(28,"div",11)(29,"span",12),r(30),t(),n(31,"span",12),r(32),t(),n(33,"span",12),r(34),t(),n(35,"span",12),r(36),t(),n(37,"span",12),r(38),t(),n(39,"span",12),r(40),t(),n(41,"span",12),r(42),t(),n(43,"span",12),r(44),t()()()()()),o&2){let e=x();a(7),p(e.Country.name.common),a(3),m("src",e.Country.flags.svg,f)("alt",e.Country.name.common),a(8),K(" ",E(19,13,e.Country.population)," "),a(5),K(" ",e.Country.cca3," "),a(7),p(e.Country.translations.ara==null?null:e.Country.translations.ara.common),a(2),p(e.Country.translations.bre==null?null:e.Country.translations.bre.common),a(2),p(e.Country.translations.ces==null?null:e.Country.translations.ces.common),a(2),p(e.Country.translations.cym==null?null:e.Country.translations.cym.common),a(2),p(e.Country.translations.deu==null?null:e.Country.translations.deu.common),a(2),p(e.Country.translations.est==null?null:e.Country.translations.est.common),a(2),p(e.Country.translations.ita==null?null:e.Country.translations.ita.common),a(2),p(e.Country.translations.kor==null?null:e.Country.translations.kor.common)}}var $=class o{constructor(i,e,l){this.activateRoute=i;this.router=e;this.countriesService=l}Country;ngOnInit(){this.activateRoute.params.pipe(Y(({id:i})=>this.countriesService.searchCountryByAlphaCode(i))).subscribe(i=>i?this.Country=i:this.router.navigateByUrl(""))}static \u0275fac=function(e){return new(e||o)(C(se),C(me),C(v))};static \u0275cmp=c({type:o,selectors:[["app-country-pages"]],standalone:!1,decls:3,vars:2,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"alert","alert-info","text-center"],[1,"row"],[1,"col-12"],[1,"col-4"],[1,"img-thumbnail",3,"src","alt"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-2"],[1,"d-flex","flex-wrap"],[1,"bage","bg-primary","m-1"]],template:function(e,l){if(e&1&&u(0,Be,2,0,"ng-template",null,0,_)(2,Me,45,15,"div",1),e&2){let d=y(1);a(2),m("ngIf",l.Country)("ngIfElse",d)}},dependencies:[b,I],encapsulation:2})};var Ne=[{path:"by-capital",component:k},{path:"by-country",component:j},{path:"by-region",component:L},{path:"by/:id",component:$},{path:"**",redirectTo:"by-capital"}],q=class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=M({type:o});static \u0275inj=B({imports:[G.forChild(Ne),G]})};var ue=class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=M({type:o});static \u0275inj=B({imports:[ae,q,ce]})};export{ue as CountriesModule};
