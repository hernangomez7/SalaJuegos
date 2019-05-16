webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n    background-image: url(" + escape(__webpack_require__("../../../../../src/assets/img/nurse_mod2.png")) + ");\r\n    /* background-color: black; */\r\n    background-size: cover;\r\n    height: 250vh;\r\n    /* background-attachment: fixed; */\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Donde se encuentre este tag, se instancian los componentes dependientes del ruteo-->\n\n<body>\n        <router-outlet></router-outlet>\n</body>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__componentes_adivina_el_numero_adivina_el_numero_component__ = __webpack_require__("../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__componentes_listado_de_resultados_listado_de_resultados_component__ = __webpack_require__("../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__componentes_login_login_component__ = __webpack_require__("../../../../../src/app/componentes/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__servicios_mi_http_mi_http_service__ = __webpack_require__("../../../../../src/app/servicios/mi-http/mi-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__servicios_paises_service__ = __webpack_require__("../../../../../src/app/servicios/paises.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__servicios_jugadores_service__ = __webpack_require__("../../../../../src/app/servicios/jugadores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__servicios_archivos_jugadores_service__ = __webpack_require__("../../../../../src/app/servicios/archivos-jugadores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__componentes_error_error_component__ = __webpack_require__("../../../../../src/app/componentes/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__componentes_principal_principal_component__ = __webpack_require__("../../../../../src/app/componentes/principal/principal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__componentes_agilidad_aritmetica_agilidad_aritmetica_component__ = __webpack_require__("../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__componentes_menu_menu_component__ = __webpack_require__("../../../../../src/app/componentes/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__componentes_adivina_mas_listado_adivina_mas_listado_component__ = __webpack_require__("../../../../../src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__componentes_agilidad_mas_listado_agilidad_mas_listado_component__ = __webpack_require__("../../../../../src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ruteando_ruteando_module__ = __webpack_require__("../../../../../src/app/ruteando/ruteando.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__componentes_listado_listado_component__ = __webpack_require__("../../../../../src/app/componentes/listado/listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__componentes_jugadores_listado_jugadores_listado_component__ = __webpack_require__("../../../../../src/app/componentes/jugadores-listado/jugadores-listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__servicios_juego_service_service__ = __webpack_require__("../../../../../src/app/servicios/juego-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__componentes_listados_listados_component__ = __webpack_require__("../../../../../src/app/componentes/listados/listados.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__componentes_juegos_juegos_component__ = __webpack_require__("../../../../../src/app/componentes/juegos/juegos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__componentes_registro_registro_component__ = __webpack_require__("../../../../../src/app/componentes/registro/registro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__componentes_menu_card_menu_card_component__ = __webpack_require__("../../../../../src/app/componentes/menu-card/menu-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__componentes_cabecera_cabecera_component__ = __webpack_require__("../../../../../src/app/componentes/cabecera/cabecera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__componentes_quien_soy_quien_soy_component__ = __webpack_require__("../../../../../src/app/componentes/quien-soy/quien-soy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__componentes_anagrama_anagrama_component__ = __webpack_require__("../../../../../src/app/componentes/anagrama/anagrama.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__componentes_listado_de_paises_listado_de_paises_component__ = __webpack_require__("../../../../../src/app/componentes/listado-de-paises/listado-de-paises.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__componentes_input_jugadores_input_jugadores_component__ = __webpack_require__("../../../../../src/app/componentes/input-jugadores/input-jugadores.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pipes_sexo_pipe__ = __webpack_require__("../../../../../src/app/pipes/sexo.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__componentes_piedra_papel_tijera_piedra_papel_tijera_component__ = __webpack_require__("../../../../../src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__componentes_tateti_tateti_component__ = __webpack_require__("../../../../../src/app/componentes/tateti/tateti.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__componentes_blackjack7_blackjack7_component__ = __webpack_require__("../../../../../src/app/componentes/blackjack7/blackjack7.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//  import {NgbModule} from '@ng-bootstrap/ng-bootstrap';













// declaro donde quiero que se dirija
/*
const MiRuteo = [{path: 'error' , component: ErrorComponent},
{path: 'Login' , component: LoginComponent},
{path: 'Principal' , component: PrincipalComponent , pathMatch: 'full'},
{path: 'Adivina' , component: AdivinaElNumeroComponent},
{path: 'AdivinaMasListado' , component: AdivinaMasListadoComponent},
{path: 'AgilidadaMasListado' , component: AgilidadMasListadoComponent},
{path: 'Agilidad' , component: AgilidadAritmeticaComponent},
{path: '' , component: LoginComponent , pathMatch: 'full'},

{path: '**' , component: ErrorComponent} ];
*/










// import { MapaDeGoogleComponent } from './componentes/mapa-de-google/mapa-de-google.component'






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__componentes_adivina_el_numero_adivina_el_numero_component__["a" /* AdivinaElNumeroComponent */],
            __WEBPACK_IMPORTED_MODULE_5__componentes_listado_de_resultados_listado_de_resultados_component__["a" /* ListadoDeResultadosComponent */],
            __WEBPACK_IMPORTED_MODULE_12__componentes_error_error_component__["a" /* ErrorComponent */],
            __WEBPACK_IMPORTED_MODULE_13__componentes_principal_principal_component__["a" /* PrincipalComponent */],
            __WEBPACK_IMPORTED_MODULE_6__componentes_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_14__componentes_agilidad_aritmetica_agilidad_aritmetica_component__["a" /* AgilidadAritmeticaComponent */],
            __WEBPACK_IMPORTED_MODULE_15__componentes_menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_16__componentes_adivina_mas_listado_adivina_mas_listado_component__["a" /* AdivinaMasListadoComponent */],
            __WEBPACK_IMPORTED_MODULE_17__componentes_agilidad_mas_listado_agilidad_mas_listado_component__["a" /* AgilidadMasListadoComponent */],
            __WEBPACK_IMPORTED_MODULE_19__componentes_listado_listado_component__["a" /* ListadoComponent */],
            __WEBPACK_IMPORTED_MODULE_22__componentes_listados_listados_component__["a" /* ListadosComponent */],
            __WEBPACK_IMPORTED_MODULE_23__componentes_juegos_juegos_component__["a" /* JuegosComponent */],
            __WEBPACK_IMPORTED_MODULE_24__componentes_registro_registro_component__["a" /* RegistroComponent */],
            __WEBPACK_IMPORTED_MODULE_25__componentes_menu_card_menu_card_component__["a" /* MenuCardComponent */],
            __WEBPACK_IMPORTED_MODULE_26__componentes_cabecera_cabecera_component__["a" /* CabeceraComponent */],
            __WEBPACK_IMPORTED_MODULE_27__componentes_quien_soy_quien_soy_component__["a" /* QuienSoyComponent */],
            __WEBPACK_IMPORTED_MODULE_28__componentes_anagrama_anagrama_component__["a" /* AnagramaComponent */],
            __WEBPACK_IMPORTED_MODULE_29__componentes_listado_de_paises_listado_de_paises_component__["a" /* ListadoDePaisesComponent */],
            __WEBPACK_IMPORTED_MODULE_20__componentes_jugadores_listado_jugadores_listado_component__["a" /* JugadoresListadoComponent */],
            __WEBPACK_IMPORTED_MODULE_31__componentes_input_jugadores_input_jugadores_component__["a" /* InputJugadoresComponent */],
            __WEBPACK_IMPORTED_MODULE_32__pipes_sexo_pipe__["a" /* SexoPipe */],
            __WEBPACK_IMPORTED_MODULE_33__componentes_piedra_papel_tijera_piedra_papel_tijera_component__["a" /* PiedraPapelTijeraComponent */],
            __WEBPACK_IMPORTED_MODULE_34__componentes_tateti_tateti_component__["a" /* TatetiComponent */],
            __WEBPACK_IMPORTED_MODULE_35__componentes_blackjack7_blackjack7_component__["a" /* Blackjack7Component */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_18__ruteando_ruteando_module__["a" /* RuteandoModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_30__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyB6f8x4IjRlesQ3oETc6BXYQHVRTOlY3Ys'
            })
            // NgbModule.forRoot(MiRuteo),
            // importo el ruteo
            // RouterModule.forRoot(MiRuteo)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_21__servicios_juego_service_service__["a" /* JuegoServiceService */], __WEBPACK_IMPORTED_MODULE_8__servicios_mi_http_mi_http_service__["a" /* MiHttpService */], __WEBPACK_IMPORTED_MODULE_9__servicios_paises_service__["a" /* PaisesService */], __WEBPACK_IMPORTED_MODULE_11__servicios_archivos_jugadores_service__["a" /* ArchivosJugadoresService */], __WEBPACK_IMPORTED_MODULE_10__servicios_jugadores_service__["a" /* JugadoresService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/clases/carta.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Carta; });
var Carta = (function () {
    function Carta(foto, palo, numero) {
        if (foto)
            this.foto = foto;
        else
            this.foto = "assets/img/fantasma.png";
        if (palo)
            this.palo = palo;
        else
            this.palo = "fantasma";
        if (numero)
            this.numero = numero;
        else
            this.numero = "0";
    }
    return Carta;
}());

//# sourceMappingURL=carta.js.map

/***/ }),

/***/ "../../../../../src/app/clases/ficha_tateti.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ficha_tateti; });
var Ficha_tateti = (function () {
    function Ficha_tateti(foto, estado) {
        this.foto = "assets/img/tateti_ficha_vacia.png";
        this.estado = "vacio";
    }
    Ficha_tateti.prototype.CambiarFichaAVacia = function () {
        this.foto = "assets/img/tateti_ficha_vacia.png";
        this.estado = "vacio";
    };
    Ficha_tateti.prototype.CambiarFichaACirculo = function () {
        this.foto = "assets/img/tateti_ficha_circulo.png";
        this.estado = "circulo";
    };
    Ficha_tateti.prototype.CambiarFichaACruz = function () {
        this.foto = "assets/img/tateti_ficha_cruz.png";
        this.estado = "cruz";
    };
    return Ficha_tateti;
}());

//# sourceMappingURL=ficha_tateti.js.map

/***/ }),

/***/ "../../../../../src/app/clases/juego-adivina.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoAdivina; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clases_juego__ = __webpack_require__("../../../../../src/app/clases/juego.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var JuegoAdivina = (function (_super) {
    __extends(JuegoAdivina, _super);
    function JuegoAdivina(nombre, gano, jugador) {
        var _this = _super.call(this, "Adivina el número", gano, jugador) || this;
        _this.numeroSecreto = 0;
        _this.numeroIngresado = 0;
        return _this;
    }
    JuegoAdivina.prototype.verificar = function () {
        if (this.numeroIngresado == this.numeroSecreto) {
            this.gano = true;
        }
        if (this.gano) {
            return true;
        }
        else {
            return false;
        }
    };
    JuegoAdivina.prototype.generarnumero = function () {
        this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
        console.info('numero Secreto:' + this.numeroSecreto);
        this.gano = false;
    };
    JuegoAdivina.prototype.retornarAyuda = function () {
        if (this.numeroIngresado < this.numeroSecreto) {
            return "Falta";
        }
        return "Te pasate";
    };
    return JuegoAdivina;
}(__WEBPACK_IMPORTED_MODULE_0__clases_juego__["a" /* Juego */]));

//# sourceMappingURL=juego-adivina.js.map

/***/ }),

/***/ "../../../../../src/app/clases/juego-agilidad.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoAgilidad; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clases_juego__ = __webpack_require__("../../../../../src/app/clases/juego.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var JuegoAgilidad = (function (_super) {
    __extends(JuegoAgilidad, _super);
    function JuegoAgilidad(nombre, gano, jugador) {
        var _this = _super.call(this, "Agilidad aritmetica", gano, jugador) || this;
        _this.numeroUno = 0;
        _this.numeroDos = 0;
        _this.operacion = 0;
        _this.operador = "";
        _this.numeroIngresado = 0;
        _this.resultado = 0;
        _this.inicio = false;
        return _this;
    }
    JuegoAgilidad.prototype.verificar = function () {
        if (this.numeroIngresado == this.resultado) {
            this.gano = true;
        }
        if (this.gano) {
            return true;
        }
        else {
            return false;
        }
    };
    JuegoAgilidad.prototype.comenzar = function () {
        this.numeroUno = Math.floor(Math.random() * 100) + 1;
        this.numeroDos = Math.floor(Math.random() * 100) + 1;
        var numeroX = 0;
        this.operacion = Math.floor(Math.random() * 4) + 1;
        switch (this.operacion) {
            case 1:
                this.resultado = this.numeroUno + this.numeroDos;
                break;
            case 2:
                this.resultado = this.numeroUno - this.numeroDos;
                break;
            case 3:
                if (this.numeroUno > this.numeroDos)
                    this.resultado = this.numeroUno / this.numeroDos;
                else {
                    numeroX = this.numeroUno;
                    this.numeroUno = this.numeroDos;
                    this.numeroDos = numeroX;
                    this.resultado = this.numeroUno / this.numeroDos;
                }
                break;
            case 4:
                this.resultado = this.numeroUno * this.numeroDos;
                break;
        }
        this.resultado = parseFloat(this.resultado.toFixed(2));
        switch (this.operacion) {
            case 1:
                this.operador = "+";
                break;
            case 2:
                this.operador = "-";
                break;
            case 3:
                this.operador = "/";
                break;
            case 4:
                this.operador = "*";
                break;
        }
        this.inicio = true;
    };
    return JuegoAgilidad;
}(__WEBPACK_IMPORTED_MODULE_0__clases_juego__["a" /* Juego */]));

//# sourceMappingURL=juego-agilidad.js.map

/***/ }),

/***/ "../../../../../src/app/clases/juego-anagrama.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoAnagrama; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clases_juego__ = __webpack_require__("../../../../../src/app/clases/juego.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var JuegoAnagrama = (function (_super) {
    __extends(JuegoAnagrama, _super);
    function JuegoAnagrama(nombre, gano, jugador) {
        var _this = _super.call(this, "Anagrama", gano, jugador) || this;
        _this.palabraElegida = "";
        _this.respuestaElegida = "";
        _this.palabraDesordenada = "";
        return _this;
    }
    JuegoAnagrama.prototype.desordenarPalabra = function (listaPalabras) {
        var numero = Math.floor(Math.random() * 39) + 0;
        var valores = new Array;
        var valores2 = new Array;
        // let numero = 0;
        this.palabraElegida = listaPalabras[numero];
        this.palabraDesordenada = "";
        for (var i = 0; i < this.palabraElegida.length; i++) {
            valores.push(this.palabraElegida[i]);
        }
        while (valores.length != 0) {
            numero = Math.floor(Math.random() * valores.length) + 0;
            valores2.push(valores[numero]);
            valores.splice(numero, 1);
        }
        this.palabraDesordenada = valores2.join("");
    };
    JuegoAnagrama.prototype.verificar = function () {
        // console.log(this.respuestaElegida);
        if (this.respuestaElegida == this.palabraElegida) {
            this.gano = true;
            return true;
        }
        else {
            this.gano = false;
            return false;
        }
    };
    JuegoAnagrama.prototype.mostrarResultado = function () {
        console.log(this.palabraElegida);
    };
    return JuegoAnagrama;
}(__WEBPACK_IMPORTED_MODULE_0__clases_juego__["a" /* Juego */]));

//# sourceMappingURL=juego-anagrama.js.map

/***/ }),

/***/ "../../../../../src/app/clases/juego-blackjack7.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Blackjack7; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__juego__ = __webpack_require__("../../../../../src/app/clases/juego.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Blackjack7 = (function (_super) {
    __extends(Blackjack7, _super);
    function Blackjack7(nombre, gano, jugador) {
        var _this = _super.call(this, "Black jack 7", gano, jugador) || this;
        _this.numero = 0;
        return _this;
    }
    Blackjack7.prototype.verificar = function () {
        return true;
    };
    return Blackjack7;
}(__WEBPACK_IMPORTED_MODULE_0__juego__["a" /* Juego */]));

//# sourceMappingURL=juego-blackjack7.js.map

/***/ }),

/***/ "../../../../../src/app/clases/juego-piedra-papel-tijera.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoPiedraPapelTijera; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clases_juego__ = __webpack_require__("../../../../../src/app/clases/juego.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var JuegoPiedraPapelTijera = (function (_super) {
    __extends(JuegoPiedraPapelTijera, _super);
    function JuegoPiedraPapelTijera(nombre, gano, jugador) {
        var _this = _super.call(this, "Piedra papel o tijeras", gano, jugador) || this;
        _this.rondas = 0;
        _this.victorias = 0;
        _this.derrotas = 0;
        _this.eleccion_jugador = 0;
        _this.eleccion_cpu = 0;
        _this.elegir = false;
        _this.inicio = false;
        return _this;
    }
    JuegoPiedraPapelTijera.prototype.verificar = function () {
        switch (this.eleccion_jugador) {
            case 1:
                if (this.eleccion_cpu == 3) {
                    this.gano = true;
                }
                else {
                    this.gano = false;
                }
                break;
            case 2:
                if (this.eleccion_cpu == 1) {
                    this.gano = true;
                }
                else {
                    this.gano = false;
                }
                break;
            case 3:
                if (this.eleccion_cpu == 2) {
                    this.gano = true;
                }
                else {
                    this.gano = false;
                }
                break;
        }
        if (this.gano) {
            return true;
        }
        else {
            return false;
        }
    };
    return JuegoPiedraPapelTijera;
}(__WEBPACK_IMPORTED_MODULE_0__clases_juego__["a" /* Juego */]));

//# sourceMappingURL=juego-piedra-papel-tijera.js.map

/***/ }),

/***/ "../../../../../src/app/clases/juego-tateti.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tateti; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__juego__ = __webpack_require__("../../../../../src/app/clases/juego.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ficha_tateti__ = __webpack_require__("../../../../../src/app/clases/ficha_tateti.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Tateti = (function (_super) {
    __extends(Tateti, _super);
    function Tateti(nombre, gano, jugador) {
        var _this = _super.call(this, "Tateti", gano, jugador) || this;
        _this.numeroSecreto = 0;
        _this.numeroIngresado = 0;
        _this.fichas = new Array();
        var ficha;
        _this.fichas.push(ficha = new __WEBPACK_IMPORTED_MODULE_1__ficha_tateti__["a" /* Ficha_tateti */]());
        _this.fichas.push(ficha = new __WEBPACK_IMPORTED_MODULE_1__ficha_tateti__["a" /* Ficha_tateti */]());
        _this.fichas.push(ficha = new __WEBPACK_IMPORTED_MODULE_1__ficha_tateti__["a" /* Ficha_tateti */]());
        _this.fichas.push(ficha = new __WEBPACK_IMPORTED_MODULE_1__ficha_tateti__["a" /* Ficha_tateti */]());
        _this.fichas.push(ficha = new __WEBPACK_IMPORTED_MODULE_1__ficha_tateti__["a" /* Ficha_tateti */]());
        _this.fichas.push(ficha = new __WEBPACK_IMPORTED_MODULE_1__ficha_tateti__["a" /* Ficha_tateti */]());
        _this.fichas.push(ficha = new __WEBPACK_IMPORTED_MODULE_1__ficha_tateti__["a" /* Ficha_tateti */]());
        _this.fichas.push(ficha = new __WEBPACK_IMPORTED_MODULE_1__ficha_tateti__["a" /* Ficha_tateti */]());
        _this.fichas.push(ficha = new __WEBPACK_IMPORTED_MODULE_1__ficha_tateti__["a" /* Ficha_tateti */]());
        return _this;
    }
    Tateti.prototype.verificar = function () {
        if (this.numeroIngresado == this.numeroSecreto) {
            this.gano = true;
        }
        if (this.gano) {
            return true;
        }
        else {
            return false;
        }
    };
    return Tateti;
}(__WEBPACK_IMPORTED_MODULE_0__juego__["a" /* Juego */]));

//# sourceMappingURL=juego-tateti.js.map

/***/ }),

/***/ "../../../../../src/app/clases/juego.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Juego; });
var Juego = (function () {
    function Juego(nombre, gano, jugador) {
        this.nombre = 'Sin Nombre';
        this.gano = false;
        if (nombre)
            this.nombre = nombre;
        if (gano)
            this.gano = gano;
        if (jugador)
            this.jugador = jugador;
        else
            this.jugador = "natalia natalia";
    }
    Juego.prototype.retornarAyuda = function () {
        return "NO hay Ayuda definida";
    };
    return Juego;
}());

//# sourceMappingURL=juego.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nform {\n    border: 10px solid #f1f1f1;\n    padding: 10px;\n    background:gray;\n}\n\ninput[type=text], input[type=password] {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n}\n\nbutton {\n    /*background-color: #4CAF50;*/\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n}\n\nbutton:hover {\n    opacity: 0.8;\n}\n\n.cancelbtn {\n    width: auto;\n    padding: 10px 18px;\n    background-color: #f44336;\n}\n.aceptbtn {\n    width: auto;\n    padding: 10px 18px;\n    background-color: #3664F4;\n}\n.imgcontainer {\n    text-align: center;\n    margin: 24px 0 12px 0;\n}\n\nimg.avatar {\n    width: 40%;\n    border-radius: 50%;\n}\n\n.container {\n    padding: 16px;\n    background-color: transparent;\n}\n\nspan.psw {\n    float: right;\n    padding-top: 16px;\n}\n\n/* Change styles for span and cancel button on extra small screens */\n@media screen and (max-width: 300px) {\n    span.psw {\n       display: block;\n       float: none;\n    }\n    .cancelbtn {\n       width: 100%;\n    }\n}\n\n\n\n#snackbar {\n    visibility: hidden;\n    min-width: 250px;\n    margin-left: -125px;\n   \n    color: rgb(255, 255, 255);\n    text-align: center;\n    border-radius: 2px;\n    padding: 16px;\n    position: fixed;\n    z-index: 1;\n    left: 50%;\n    bottom: 30px;\n    font-size: 17px;\n    font-family: 'Impact';\n}\n#snackbar.Ganador {\n    background-color: rgb(0, 39, 13);\n}\n#snackbar.Perdedor {\n    background-color: rgb(26, 0, 0);\n}\n#snackbar.show {\n    visibility: visible;\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\n}\n\n@keyframes fadein {\n    from {bottom: 0; opacity: 0;}\n    to {bottom: 30px; opacity: 1;}\n}\n\n@keyframes fadeout {\n    from {bottom: 30px; opacity: 1;}\n    to {bottom: 0; opacity: 0;}\n}\n\n\n.jumbotron{\n    border: 2px solid rgb(165, 165, 165);\n    background-color: rgba(0, 0, 0, 0.70);\n    color: rgb(165, 165, 165);\n}\n\nform{\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n    background-color: rgb(19, 19, 19);\n    color: rgb(192, 192, 192);\n}\n\n.btn_dark {\n    background-color: rgb(0, 0, 0);\n    color: rgb(255, 0, 0);\n    padding: 14px 20px;\n    margin: 8px 0;\n    cursor: pointer;\n    width: 100%;\n    text-align: center;\n    font-family: 'Impact';\n    font-size: 25px;\n    border: 2px solid rgb(255, 0, 0);\n}\n\ninput{\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n    background-color: rgb(0, 0, 0);\n    color: rgb(192, 192, 192);\n    font-family: 'Cambria';\n}\n\n.form-control{\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n    background-color: rgb(0, 0, 0);\n    color: rgb(192, 192, 192);\n    font-family: 'Cambria';\n}\n\nlabel{\n    font-family: 'Cambria';\n}\n\nh1,h2,h3{\n    font-family: 'Impact';\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!--app-menu></app-menu-->\n\n\n<div class=\"container\" >\n  <div class=\"jumbotron\" style=\"padding:50px;\">\n\n      <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n      <div style=\"text-align:center\">\n        <h1>\n          {{nuevoJuego.nombre}}!\n        </h1>\n      </div>\n      <h2></h2>\n      <form name=\"juego\">\n\n        <label>ingrese numero:  </label>  <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:50%\" autocomplete=\"off\"/>\n          <h1>{{nuevoJuego.numeroIngresado}}  </h1>\n\n          <h2 [hidden]=\"ocultarVerificar\"><button  *ngIf=\"nuevoJuego.numeroSecreto!=0\" (click)=\"verificar()\" class=\"btn_dark\">Verificar</button></h2>\n      \n          <h2><button *ngIf=\"nuevoJuego.numeroSecreto==0 \" (click)=\"generarnumero()\"  class=\"btn_dark\">Nuevo número secreto</button></h2>\n          \n          <h2><p *ngIf=\"nuevoJuego.numeroSecreto!=0\" ><i class=\"fa fa-spinner fa-spin\"></i>Esperando que ingrese un número</p></h2>\n\n          <h3 [hidden]=\"!nuevoJuego.gano\">usted adivino el número</h3>\n          <h3 [hidden]=\"nuevoJuego.gano\">usted aún no gano </h3>\n\n\n      </form>\n      <div id=\"snackbar\">{{Mensajes}}</div>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdivinaElNumeroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__ = __webpack_require__("../../../../../src/app/clases/juego-adivina.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdivinaElNumeroComponent = (function () {
    function AdivinaElNumeroComponent() {
        this.enviarJuego = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.nuevoJuego = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]();
        console.info("numero Secreto:", this.nuevoJuego.numeroSecreto);
        this.ocultarVerificar = false;
    }
    AdivinaElNumeroComponent.prototype.generarnumero = function () {
        this.nuevoJuego.generarnumero();
        this.contador = 0;
    };
    AdivinaElNumeroComponent.prototype.verificar = function () {
        this.contador++;
        this.ocultarVerificar = true;
        console.info("numero Secreto:", this.nuevoJuego.gano);
        if (this.nuevoJuego.verificar()) {
            this.enviarJuego.emit(this.nuevoJuego);
            this.MostarMensaje("Sos un Genio!!!", true);
            this.nuevoJuego.numeroSecreto = 0;
        }
        else {
            var mensaje = void 0;
            switch (this.contador) {
                case 1:
                    mensaje = "No, intento fallido, animo";
                    break;
                case 2:
                    mensaje = "No,Te estaras Acercando???";
                    break;
                case 3:
                    mensaje = "No es, Yo crei que la tercera era la vencida.";
                    break;
                case 4:
                    mensaje = "No era el  " + this.nuevoJuego.numeroIngresado;
                    break;
                case 5:
                    mensaje = " intentos y nada.";
                    break;
                case 6:
                    mensaje = "Afortunado en el amor";
                    break;
                default:
                    mensaje = "Ya le erraste " + this.contador + " veces";
                    break;
            }
            this.MostarMensaje("#" + this.contador + " " + mensaje + " ayuda :" + this.nuevoJuego.retornarAyuda());
        }
        console.info("numero Secreto:", this.nuevoJuego.gano);
    };
    AdivinaElNumeroComponent.prototype.MostarMensaje = function (mensaje, ganador) {
        if (mensaje === void 0) { mensaje = "este es el mensaje"; }
        if (ganador === void 0) { ganador = false; }
        this.Mensajes = mensaje;
        var x = document.getElementById("snackbar");
        if (ganador) {
            x.className = "show Ganador";
        }
        else {
            x.className = "show Perdedor";
        }
        var modelo = this;
        setTimeout(function () {
            x.className = x.className.replace("show", "");
            modelo.ocultarVerificar = false;
        }, 3000);
        console.info("objeto", x);
    };
    AdivinaElNumeroComponent.prototype.ngOnInit = function () { };
    return AdivinaElNumeroComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], AdivinaElNumeroComponent.prototype, "enviarJuego", void 0);
AdivinaElNumeroComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-adivina-el-numero',
        template: __webpack_require__("../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AdivinaElNumeroComponent);

var _a;
//# sourceMappingURL=adivina-el-numero.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-adivina-el-numero (enviarJuego)=\"tomarJuegoTerminado($event)\">   </app-adivina-el-numero> \n<h1> listado </h1>\n<app-listado-de-resultados [listado]=\"listadoParaCompartir\"> </app-listado-de-resultados>\n\n"

/***/ }),

/***/ "../../../../../src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdivinaMasListadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdivinaMasListadoComponent = (function () {
    function AdivinaMasListadoComponent() {
        this.listadoParaCompartir = new Array();
    }
    AdivinaMasListadoComponent.prototype.ngOnInit = function () {
    };
    AdivinaMasListadoComponent.prototype.tomarJuegoTerminado = function (juego) {
        this.listadoParaCompartir.push(juego);
        // console.info("en app",this.listadoParaCompartir);
    };
    return AdivinaMasListadoComponent;
}());
AdivinaMasListadoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-adivina-mas-listado',
        template: __webpack_require__("../../../../../src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AdivinaMasListadoComponent);

//# sourceMappingURL=adivina-mas-listado.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jumbotron{\r\n    border: 2px solid rgb(165, 165, 165);\r\n    background-color: rgba(22, 22, 22, 0.75);\r\n    color: rgb(165, 165, 165);\r\n}\r\n\r\n/* input{\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n    background-color: rgb(0, 0, 0);\r\n    color: rgb(192, 192, 192);\r\n} */\r\n\r\n.form-control{\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n    background-color: rgb(0, 0, 0);\r\n    color: rgb(192, 192, 192);\r\n}\r\n\r\n.btn_empty{\r\n    background-image: url(" + escape(__webpack_require__("../../../../../src/assets/img/boton_empty.png")) + ");\r\n    height: 63px;\r\n    width: 165px;\r\n    background-color: transparent;\r\n    background-size: cover;\r\n    padding: 0;\r\n    border: none;\r\n    color: #ff1100;\r\n    text-align: center;\r\n    font-family: 'Impact';\r\n    font-size: 25px;\r\n\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    cursor: pointer;\r\n}\r\n\r\nh1,h2,h3{\r\n    font-family: 'Impact';\r\n}\r\n\r\nli{\r\n    font-family: 'Cambria';\r\n}\r\n\r\n\r\n#snackbar {\r\n    visibility: hidden;\r\n    min-width: 250px;\r\n    margin-left: -125px;\r\n   \r\n    color: rgb(255, 255, 255);\r\n    text-align: center;\r\n    border-radius: 2px;\r\n    padding: 16px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 50%;\r\n    bottom: 30px;\r\n    font-size: 17px;\r\n    font-family: 'Impact';\r\n}\r\n#snackbar.Ganador {\r\n    background-color: rgb(0, 39, 13);\r\n}\r\n#snackbar.Perdedor {\r\n    background-color: rgb(26, 0, 0);\r\n}\r\n#snackbar.show {\r\n    visibility: visible;\r\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!--app-menu></app-menu-->\n<!-- index.html -->\n\n<div class=\"container\" >\n    <div class=\"jumbotron\" style=\"padding:50px;\">\n\n      <form name=\"juego\">\n      <ul>\n        <li>\n        Primer número: <input [(ngModel)]=\"nuevoJuego.numeroUno\" placeholder=\"ingrese numero\" name=\"numeroUno\" type=\"text\" class=\"form-control\" style=\"width:50%\" readonly/>\n        \n        </li>\n        <li>\n        Operador: <input [(ngModel)]=\"nuevoJuego.operador\" placeholder=\"ingrese numero\" name=\"operador\" type=\"text\" class=\"form-control\" style=\"width:50%\" readonly/>\n          \n        </li>\n        <li>\n        Segundo número: <input [(ngModel)]=\"nuevoJuego.numeroDos\" placeholder=\"ingrese numero\" name=\"numeroDos\" type=\"text\" class=\"form-control\" style=\"width:50%\" readonly/>\n          \n        </li>\n        <li>\n          Respuesta: <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:50%\" autocomplete=\"off\"/>\n          \n        </li>\n        <li>\n          <!-- <h2 [hidden]=\"ocultarVerificar\" ><button (click)=\"verificar()\" class=\"btn btn-success btn-lg\">Verificar {{Tiempo}} </button></h2>\n           -->\n          <h2 [hidden]=\"ocultarVerificar == true\" ><button (click)=\"cambiarVerificar()\" class=\"btn_empty\">Verificar {{Tiempo}} </button></h2>\n          <h2 [hidden]=\"ocultarVerificar != true\"><button  (click)=\"NuevoJuego()\"  class=\"btn_empty\">Nuevo</button></h2>\n           <!-- <h2 [hidden]=\"!ocultarVerificar\"><button  (click)=\"NuevoJuego()\"  class=\"btn btn-info btn-lg\">Nuevo</button></h2>\n         -->\n        </li>\n        <li>\n          <h2 [hidden]=\"nuevoJuego.inicio\"><p><i class=\"fa fa-spinner fa-spin\"></i>Esperando numero...</p></h2>\n          <h2 [hidden]=\"!nuevoJuego.inicio\"><p>Responda</p></h2>\n\n          <h3 [hidden]=\"!nuevoJuego.gano\">usted adivino el número</h3>\n          <h3 [hidden]=\"nuevoJuego.gano\">usted aún no gano </h3>\n        </li>\n      </ul>\n      \n    </form>\n    <div id=\"snackbar\">{{mensajes}}</div>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgilidadAritmeticaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clases_juego_agilidad__ = __webpack_require__("../../../../../src/app/clases/juego-agilidad.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AgilidadAritmeticaComponent = (function () {
    function AgilidadAritmeticaComponent() {
        this.enviarJuego = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.ocultarVerificar = true;
        this.verificarB = false;
        this.Tiempo = 5;
        this.nuevoJuego = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_agilidad__["a" /* JuegoAgilidad */]();
        // console.info("Inicio agilidad");
    }
    AgilidadAritmeticaComponent.prototype.ngOnInit = function () {
    };
    // inicia el juego
    AgilidadAritmeticaComponent.prototype.NuevoJuego = function () {
        var _this = this;
        this.nuevoJuego.comenzar();
        this.ocultarVerificar = false;
        this.repetidor = setInterval(function () {
            _this.Tiempo--;
            // console.log("llego:", this.Tiempo);
            if (_this.Tiempo == 0 || _this.verificarB == true) {
                clearInterval(_this.repetidor);
                _this.verificar();
                _this.ocultarVerificar = true;
                _this.Tiempo = 5;
                _this.verificarB = false;
            }
        }, 1000);
    };
    AgilidadAritmeticaComponent.prototype.cambiarVerificar = function () {
        this.verificarB = true;
    };
    AgilidadAritmeticaComponent.prototype.verificar = function () {
        this.nuevoJuego.inicio = false;
        this.respuesta = this.nuevoJuego.numeroIngresado;
        if (this.respuesta == this.nuevoJuego.resultado) {
            this.MostarMensaje("Correcto", true);
            this.nuevoJuego.gano = true;
        }
        else {
            this.MostarMensaje("Has fallado era:" + this.nuevoJuego.resultado, false);
            this.nuevoJuego.gano = false;
        }
    };
    AgilidadAritmeticaComponent.prototype.MostarMensaje = function (mensaje, ganador) {
        if (mensaje === void 0) { mensaje = "este es el mensaje"; }
        if (ganador === void 0) { ganador = false; }
        this.mensajes = mensaje;
        var x = document.getElementById("snackbar");
        if (ganador) {
            x.className = "show Ganador";
        }
        else {
            x.className = "show Perdedor";
        }
        var modelo = this;
        setTimeout(function () {
            x.className = x.className.replace("show", "");
            // modelo.ocultarVerificar=false;
        }, 3000);
        // console.info("objeto",x);
    };
    return AgilidadAritmeticaComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], AgilidadAritmeticaComponent.prototype, "enviarJuego", void 0);
AgilidadAritmeticaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-agilidad-aritmetica',
        template: __webpack_require__("../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AgilidadAritmeticaComponent);

var _a;
//# sourceMappingURL=agilidad-aritmetica.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-agilidad-aritmetica (enviarJuego)=\"tomarJuegoTerminado($event)\">   </app-agilidad-aritmetica> \n<h1> Listado de Resultados </h1>\n<app-listado-de-resultados [listado]=\"listadoParaCompartir\"> </app-listado-de-resultados>"

/***/ }),

/***/ "../../../../../src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgilidadMasListadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AgilidadMasListadoComponent = (function () {
    function AgilidadMasListadoComponent() {
        this.listadoParaCompartir = new Array();
    }
    AgilidadMasListadoComponent.prototype.ngOnInit = function () {
    };
    AgilidadMasListadoComponent.prototype.tomarJuegoTerminado = function (juego) {
        this.listadoParaCompartir.push(juego);
        console.info("en app", this.listadoParaCompartir);
    };
    return AgilidadMasListadoComponent;
}());
AgilidadMasListadoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-agilidad-mas-listado',
        template: __webpack_require__("../../../../../src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AgilidadMasListadoComponent);

//# sourceMappingURL=agilidad-mas-listado.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/anagrama/anagrama.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nform {\r\n    border: 10px solid #f1f1f1;\r\n    padding: 10px;\r\n    background:gray;\r\n}\r\n\r\ninput[type=text], input[type=password] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbutton {\r\n    /*background-color: #4CAF50;*/\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n}\r\n\r\nbutton:hover {\r\n    opacity: 0.8;\r\n}\r\n\r\n.cancelbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #f44336;\r\n}\r\n.aceptbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #3664F4;\r\n}\r\n.imgcontainer {\r\n    text-align: center;\r\n    margin: 24px 0 12px 0;\r\n}\r\n\r\nimg.avatar {\r\n    width: 40%;\r\n    border-radius: 50%;\r\n}\r\n\r\n.container {\r\n    padding: 16px;\r\n}\r\n\r\nspan.psw {\r\n    float: right;\r\n    padding-top: 16px;\r\n}\r\n\r\n/* Change styles for span and cancel button on extra small screens */\r\n@media screen and (max-width: 300px) {\r\n    span.psw {\r\n       display: block;\r\n       float: none;\r\n    }\r\n    .cancelbtn {\r\n       width: 100%;\r\n    }\r\n}\r\n\r\n\r\n\r\n#snackbar {\r\n    visibility: hidden;\r\n    min-width: 250px;\r\n    margin-left: -125px;\r\n   \r\n    color: rgb(255, 255, 255);\r\n    text-align: center;\r\n    border-radius: 2px;\r\n    padding: 16px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 50%;\r\n    bottom: 30px;\r\n    font-size: 17px;\r\n    font-family: 'Impact';\r\n}\r\n#snackbar.Ganador \r\n{\r\n    background-color: rgb(0, 39, 13);\r\n}\r\n#snackbar.Perdedor \r\n{\r\n    background-color: rgb(26, 0, 0);\r\n}\r\n#snackbar.show {\r\n    visibility: visible;\r\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}\r\n\r\n@keyframes fadein {\r\n    from {bottom: 0; opacity: 0;}\r\n    to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;}\r\n    to {bottom: 0; opacity: 0;}\r\n}\r\n\r\n\r\n.jumbotron{\r\n    border: 2px solid rgb(165, 165, 165);\r\n    background-color: rgba(0, 0, 0, 0.70);\r\n    color: rgb(165, 165, 165);\r\n}\r\n\r\nform{\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n    background-color: rgb(19, 19, 19);\r\n    color: rgb(192, 192, 192);\r\n}\r\n\r\n.btn_dark {\r\n    background-color: rgb(0, 0, 0);\r\n    color: rgb(255, 0, 0);\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    text-align: center;\r\n    font-family: 'Impact';\r\n    font-size: 25px;\r\n    border: 2px solid rgb(255, 0, 0);\r\n}\r\n\r\ninput{\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n    background-color: rgb(0, 0, 0);\r\n    color: rgb(192, 192, 192);\r\n    font-family: 'Cambria';\r\n}\r\n\r\n.form-control{\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n    background-color: rgb(0, 0, 0);\r\n    color: rgb(192, 192, 192);\r\n    font-family: 'Cambria';\r\n}\r\n\r\nlabel{\r\n    font-family: 'Cambria';\r\n}\r\n\r\nh1,h2,h3{\r\n    font-family: 'Impact';\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/anagrama/anagrama.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!--app-menu></app-menu-->\n\n\n<div class=\"container\" >\n  <div class=\"jumbotron\" style=\"padding:50px;\">\n\n      <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n      <div style=\"text-align:center\">\n        <h1>\n          {{nuevoJuego.nombre}}\n        </h1>\n      </div>\n      <h2></h2>\n      <form name=\"juego\">\n\n          Respuesta: <input [(ngModel)]=\"nuevoJuego.respuestaElegida\" placeholder=\"ingrese la palabra\" name=\"respuestaElegida\" type=\"text\" class=\"form-control\" style=\"width:50%\" autocomplete=\"off\"/>\n\n        <h2>anagrama: {{nuevoJuego.palabraDesordenada}}</h2>\n\n        <!-- <p>{{palabraElegida}}</p> -->\n\n          <button (click)=\"iniciar()\"  class=\"btn_dark\">Cambiar anagrama</button>\n          <button (click)=\"verificar()\"  class=\"btn_dark\">Verificar respuesta</button>\n          <!-- <button (click)=\"mostrarResultado()\"  class=\"btn_dark\">Rendirse</button> -->\n\n\n\n\n      </form>\n      <div id=\"snackbar\">{{Mensajes}}</div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/componentes/anagrama/anagrama.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnagramaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clases_juego_anagrama__ = __webpack_require__("../../../../../src/app/clases/juego-anagrama.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnagramaComponent = (function () {
    function AnagramaComponent() {
        this.ocultarVerificar = true;
        this.nuevoJuego = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_anagrama__["a" /* JuegoAnagrama */]();
        this.listaPalabras = new Array();
        this.CargarLista();
    }
    AnagramaComponent.prototype.ngOnInit = function () {
        this.DesordenarPalabra();
    };
    AnagramaComponent.prototype.iniciar = function () {
        this.DesordenarPalabra();
    };
    AnagramaComponent.prototype.DesordenarPalabra = function () {
        this.nuevoJuego.desordenarPalabra(this.listaPalabras);
    };
    AnagramaComponent.prototype.verificar = function () {
        if (this.nuevoJuego.verificar()) {
            // console.log("gano");
            this.MostarMensaje("Correcto", true);
            this.DesordenarPalabra();
        }
        else {
            // console.log("perdio");
            this.MostarMensaje("Has fallado", false);
            this.mostrarResultado();
        }
    };
    AnagramaComponent.prototype.mostrarResultado = function () {
        this.MostarMensaje("la respuesta era:" + this.nuevoJuego.palabraElegida, false);
        this.DesordenarPalabra();
    };
    AnagramaComponent.prototype.CargarLista = function () {
        this.listaPalabras.push("acosador", "baron", "asesino", "arbol", "maso", "arcabucero", "alba", "lacerar", "apalear", "alabar", "balbucear", "abejorro", "ristre", "quebrar", "quijote", "dictador", "adoctrinar", "exterminio", "mandoble", "milicia", "dominar", "destruir", "mentir", "maldecir", "desintegrar", "masacrar", "abalar", "ancestral", "abdomen", "destripar", "abaldonar", "construir", "imperial", "eternidad", "apaciguar", "negociar", "reutilizar", "bautizar", "falsificar", "desmoronar");
        // console.log(this.listaPalabras);40
    };
    AnagramaComponent.prototype.MostarMensaje = function (mensaje, ganador) {
        if (mensaje === void 0) { mensaje = "este es el mensaje"; }
        if (ganador === void 0) { ganador = false; }
        this.Mensajes = mensaje;
        var x = document.getElementById("snackbar");
        if (ganador) {
            x.className = "show Ganador";
        }
        else {
            x.className = "show Perdedor";
        }
        var modelo = this;
        setTimeout(function () {
            x.className = x.className.replace("show", "");
            modelo.ocultarVerificar = false;
        }, 3000);
    };
    return AnagramaComponent;
}());
AnagramaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-anagrama',
        template: __webpack_require__("../../../../../src/app/componentes/anagrama/anagrama.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/anagrama/anagrama.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AnagramaComponent);

//# sourceMappingURL=anagrama.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/blackjack7/blackjack7.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nform {\r\n    border: 10px solid #f1f1f1;\r\n    padding: 10px;\r\n    background:gray;\r\n}\r\n\r\ninput[type=text], input[type=password] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n}\r\n\r\n/* button {\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n} */\r\n\r\nbutton:hover {\r\n    opacity: 0.8;\r\n}\r\n\r\n.cancelbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #f44336;\r\n}\r\n.aceptbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #3664F4;\r\n}\r\n.imgcontainer {\r\n    text-align: center;\r\n    margin: 24px 0 12px 0;\r\n}\r\n\r\nimg.avatar {\r\n    width: 40%;\r\n    border-radius: 50%;\r\n}\r\n\r\n.container {\r\n    padding: 16px;\r\n}\r\n\r\nspan.psw {\r\n    float: right;\r\n    padding-top: 16px;\r\n}\r\n\r\n/* Change styles for span and cancel button on extra small screens */\r\n@media screen and (max-width: 300px) {\r\n    span.psw {\r\n       display: block;\r\n       float: none;\r\n    }\r\n    .cancelbtn {\r\n       width: 100%;\r\n    }\r\n}\r\n\r\n\r\n\r\n#snackbar {\r\n    visibility: hidden;\r\n    min-width: 250px;\r\n    margin-left: -125px;\r\n   \r\n    color: rgb(255, 255, 255);\r\n    text-align: center;\r\n    border-radius: 2px;\r\n    padding: 16px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 50%;\r\n    bottom: 30px;\r\n    font-size: 17px;\r\n    font-family: 'Impact';\r\n}\r\n#snackbar.Ganador \r\n{\r\n    background-color: rgb(0, 39, 13);\r\n}\r\n#snackbar.Perdedor \r\n{\r\n    background-color: rgb(26, 0, 0);\r\n}\r\n#snackbar.show {\r\n    visibility: visible;\r\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}\r\n\r\n@keyframes fadein {\r\n    from {bottom: 0; opacity: 0;}\r\n    to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;}\r\n    to {bottom: 0; opacity: 0;}\r\n}\r\n\r\n\r\n.jumbotron{\r\n    border: 2px solid rgb(165, 165, 165);\r\n    background-color: rgba(0, 0, 0, 0.70);\r\n    color: rgb(165, 165, 165);\r\n    padding: 0px;\r\n}\r\n\r\n/* form{\r\n    border: 2px solid #ccc;\r\n    background-color: rgb(19, 19, 19);\r\n    color: rgb(192, 192, 192);\r\n} */\r\n\r\n.btn_dark {\r\n    background-color: rgb(0, 0, 0);\r\n    color: rgb(255, 0, 0);\r\n    /* padding: 14px 20px; */\r\n    padding: 8px 8px;\r\n    margin: 8px 0;\r\n    cursor: pointer;\r\n    /* width: 16.6%; */\r\n    text-align: center;\r\n    font-family: 'Impact';\r\n    font-size: 20px;\r\n    border: 2px solid rgb(255, 0, 0);\r\n}\r\n\r\n.btn_dark2 {\r\n    background-color: rgb(0, 0, 0);\r\n    color: rgb(91, 79, 255);\r\n    /* padding: 14px 20px; */\r\n    padding: 8px 8px;\r\n    margin: 8px 0;\r\n    cursor: pointer;\r\n    /* width: 16.6%; */\r\n    text-align: center;\r\n    font-family: 'Impact';\r\n    font-size: 20px;\r\n    border: 2px solid rgb(91, 79, 255);\r\n}\r\n\r\n\r\nlabel{\r\n    font-family: 'Cambria';\r\n}\r\n\r\nh1,h2,h3{\r\n    font-family: 'Impact';\r\n}\r\n.mesa{\r\n    width: 100%;\r\n    text-align: center;\r\n    background-color: #000000;\r\n    border: 2px solid rgb(204, 3, 3);\r\n}\r\n.mesa2\r\n{\r\n    width: 100%;\r\n    text-align: center;\r\n    background-color: #272727;\r\n    border: 2px solid rgb(204, 3, 3);\r\n}\r\n\r\n.mesa h2,h3\r\n{\r\n    background-color: #131313;\r\n}\r\n.jugador_box{\r\n    width: 100%;\r\n    text-align: center;\r\n    background-color: #272727;\r\n    border: 2px solid rgb(204, 3, 3);\r\n}\r\n\r\n.mesa img{\r\n    height: 130px;\r\n}\r\n\r\n/* height: 9vh; */\r\n\r\n.jugador_box img\r\n{\r\n    height: 20vh;\r\n}\r\n\r\n\r\n\r\n.formApostar{\r\n    color: rgb(255, 0, 0);\r\n    font-weight: bold;\r\n    border: 2px solid #ce0000;\r\n    padding: 10px;\r\n    background:rgba(0, 0, 0, 0.80);\r\n    width: 35%;\r\n    position: fixed;\r\n    top: 10%;\r\n    left: 35%;\r\n    text-align: center;\r\n}\r\n\r\n.formApostar input{\r\n    background: #000000;\r\n    color: #FF0000;\r\n    text-align: center;\r\n    border: 2px solid #FF0000;\r\n    height: 25px;\r\n    width: 75%;\r\n    font-size: 15px;\r\n}\r\n\r\n.formApostar button{\r\n    background: #000000;\r\n    color: rgb(255, 0, 0);\r\n    text-align: center;\r\n    border: 2px solid rgb(131, 33, 33);\r\n    padding: 10px;\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/blackjack7/blackjack7.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" >\n    <div class=\"jumbotron\" style=\"padding:35px;\">\n  \n        <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n        <div style=\"text-align:center\">\n          <h1>{{nuevoJuego.nombre}}</h1>\n        </div>\n        <form name=\"juego\" class=\"mesa\">\n            <!-- croupier -->\n            <form class=\"mesa2\">\n                <h3>Cartas del croupier</h3>\n                <p >sus cartas suman = {{cantidadCroupier}}</p>\n                <tbody>\n                    <tr>\n                        <td></td>\n                        <td><img src=\"{{manoCroupier[0].foto}}\"></td>\n                        <td><img src=\"{{manoCroupier[1].foto}}\"></td>\n                        <td><img src=\"{{manoCroupier[2].foto}}\"></td>\n                        <td><img src=\"{{manoCroupier[3].foto}}\"></td>\n                        <td><img src=\"{{manoCroupier[4].foto}}\"></td>\n                    </tr>\n                    \n                </tbody>\n            </form>\n            <img src=\"assets/img/baraja.png\" style=\"height:70px\">\n            <!-- <img src=\"assets/img/baraja.png\" style=\"height:100px\"> -->\n            <form class=\"jugador_box\">\n                    <h3>Tus cartas</h3>\n                <!-- jugador 1-->\n                <tr>\n                    <td>\n                            <img src=\"{{manoJugador[0].foto}}\">\n                            <img src=\"{{manoJugador[1].foto}}\">\n                            <img src=\"{{manoJugador[2].foto}}\">\n                            <img src=\"{{manoJugador[3].foto}}\">\n                            <img src=\"{{manoJugador[4].foto}}\">\n                    </td>\n                    <td><img style=\"height:55px\" src=\"assets/img/trebol2.png\"></td>\n                    <!-- segunda mano -->\n                    <td>\n                            <img src=\"{{manoJugadorDividida[0].foto}}\">\n                            <img src=\"{{manoJugadorDividida[1].foto}}\">\n                            <img src=\"{{manoJugadorDividida[2].foto}}\">\n                            <img src=\"{{manoJugadorDividida[3].foto}}\">\n                            <img src=\"{{manoJugadorDividida[4].foto}}\">\n                    </td>\n                </tr>\n            </form>\n\n            <form class=\"mesa2\">\n                <p [hidden]=\"dosManos == true\">suma de cartas = {{cantidadJugador}} , Jugador = {{jugadorDinero}}$, apuesta actual = {{apuestaActual}}$</p>\n                <p [hidden]=\"dosManos == false\">suma de cartas = {{cantidadJugador}} / {{cantidadJugadorDividida}}  , Jugador = {{jugadorDinero}}$, apuesta actual = {{apuestaActual}}$</p>\n                <tr>\n                    <td>\n                        <button (click)=\"ToggleFormReiniar()\"  class=\"btn_dark2\">Reiniciar</button>\n                        <button (click)=\"RecibirCarta()\"  class=\"btn_dark\">Nueva carta</button>\n                        <button (click)=\"Quedarse()\"  class=\"btn_dark\">Quedarse</button>\n                        <button (click)=\"Doblar()\"  class=\"btn_dark\">Doble</button>\n                        <button (click)=\"DividirBaraja()\"  class=\"btn_dark\">Dividir</button>\n                        <button (click)=\"Asegurarse()\"  class=\"btn_dark\">Asegurarse</button>\n                        <button (click)=\"ToggleFormApostar()\"  class=\"btn_dark2\">Apostar</button>\n                        <button (click)=\"ToggleFormComoJugar()\"  class=\"btn_dark2\">¿Como se juega?</button>\n                    </td>\n                </tr>\n            </form>\n        </form>\n        <!-- <div id=\"snackbar\">{{mensajes}}</div> -->\n    </div>\n    <form class=\"formApostar\" [hidden]=\"ocultarApostar\">\n        <p>Dinero disponible:{{jugadorDinero}}$</p>\n        <p>Cantidad a apostar</p>\n        <input type=\"number\" name=\"apuestaActual\" class=\"input\" [(ngModel)]=\"apuestaActual\" min=\"10\" step=\"10\" autocomplete=\"off\">\n        <br>\n        <br>\n        <button (click)=\"ApostarIniciar()\">Apostar</button>\n        <br>\n        <br>\n        <button (click)=\"ToggleFormApostar()\">Cancelar</button>\n    </form>\n\n    <form class=\"formApostar\" [hidden]=\"ocultarReiniciar\">\n        <p>¿Seguro que quieres Reiniciar la partida? perderas tu progresos</p>\n        <br>\n        <button (click)=\"Reiniciar()\">Apostar</button>\n        <br>\n        <br>\n        <button (click)=\"ToggleFormReiniar()\">Cancelar</button>\n    </form>\n\n    <form class=\"formApostar\" [hidden]=\"ocultarComoJugar\">\n        <h3>Blackjack7</h3>\n        <br>\n        <button (click)=\"ComoJugar(0)\">Introduccion</button>\n        <button (click)=\"ComoJugar(1)\">Comenzar</button>\n        <button (click)=\"ComoJugar(2)\">Blackjack</button>\n        <button (click)=\"ComoJugar(3)\">Doble</button>\n        <button (click)=\"ComoJugar(4)\">Dividir</button>\n        <button (click)=\"ComoJugar(5)\">Asegurarse</button>\n        <br>\n        <br>\n        <button (click)=\"ToggleFormComoJugar()\">OK</button>\n        <br>\n        <br>\n\n        <div>{{informacion}}</div>\n        \n    </form>\n\n    <div id=\"snackbar\">{{mensajes}}</div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/componentes/blackjack7/blackjack7.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Blackjack7Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clases_juego_blackjack7__ = __webpack_require__("../../../../../src/app/clases/juego-blackjack7.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clases_carta__ = __webpack_require__("../../../../../src/app/clases/carta.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Blackjack7Component = (function () {
    function Blackjack7Component() {
        this.cartaFantasma = new __WEBPACK_IMPORTED_MODULE_2__clases_carta__["a" /* Carta */]();
        this.turnoJugador = false;
        this.asegurado = false;
        this.informacion = "";
        this.ocultarComoJugar = true;
        this.comoJugarValor = 0;
        this.nuevoJuego = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_blackjack7__["a" /* Blackjack7 */]();
        this.baraja = new Array();
        this.mensajeActivo = false;
        this.iniciarJuego();
        this.jugadorDinero = 0;
        this.apuestaActual = 0;
        this.ocultarApostar = true;
        this.ocultarReiniciar = true;
        this.Reiniciar();
    }
    Blackjack7Component.prototype.iniciarJuego = function () {
        this.manoCroupier = new Array(this.cartaFantasma, this.cartaFantasma, this.cartaFantasma, this.cartaFantasma, this.cartaFantasma);
        this.cantidadCroupier = 0;
        this.manoJugador = new Array(this.cartaFantasma, this.cartaFantasma, this.cartaFantasma, this.cartaFantasma, this.cartaFantasma);
        this.cantidadJugador = 0;
        this.manoJugadorDividida = new Array(this.cartaFantasma, this.cartaFantasma, this.cartaFantasma, this.cartaFantasma, this.cartaFantasma);
        this.cantidadJugadorDividida = 0;
        this.dosManos = false;
        this.manoJugadorQuedo = false;
        this.juegoTerminado = false;
        this.ReiniciarBaraja();
        this.CartasCroupier();
        this.asegurado = false;
        this.turnoJugador = true;
        this.juegoTerminado = true;
        this.doblePaga = false;
    };
    Blackjack7Component.prototype.Reiniciar = function () {
        if (!this.ocultarReiniciar)
            this.ToggleFormReiniar();
        var modelo = this;
        setTimeout(function () {
            modelo.jugadorDinero = 1000;
            modelo.apuestaActual = 0;
            modelo.iniciarJuego();
            modelo.MostarMensaje("Comience con una apuesta", true);
        }, 1500);
    };
    Blackjack7Component.prototype.ApostarIniciar = function () {
        if (this.apuestaActual <= this.jugadorDinero && this.apuestaActual > 9) {
            this.iniciarJuego();
            this.juegoTerminado = false;
            this.RecibirCarta();
            this.RecibirCarta();
            this.ocultarApostar = true;
        }
        else if (this.jugadorDinero < 10)
            this.MostarMensaje("Perdio todo su dinero", false);
    };
    Blackjack7Component.prototype.ComoJugar = function (valor) {
        if (valor == 0)
            this.informacion = "El objetivo del blackjack7 es obtener la mayor cantidad de dinero posible. El juego se desarrolla por rondas, donde debe tomar cartas y sumar hasta llegar a un valor de 21 o lo mas serca, pero no debe superar este valor una vez que haya elegido quedarse, el croupier comenzara a jugar, si el croupier obtiene un valor mas sercano a 21 que usted el habra ganado,si se pasa o usted esta mas serca de 21 usted ganara la ronda";
        else if (valor == 1)
            this.informacion = "Para comenzar debera apostar un valor superior a 10, recibira 2 cartas y se sumaran, sí quiere quedarse con esas cartas elija [Quedarse], sí quiere una carta elija [Nueva carta] o puede utilizar las otras funciones una vez haya ganado o perdido, puede modificar el valor de apuesta, no es necesario cambiar la apuesta para seguir, solo presion[Nueva carta]";
        else if (valor == 2)
            this.informacion = "Se obtendra Blackjack cuando se obtiene una suma total de 21 al comenzar la ronda, ganando 3/2 de la apuesta.";
        else if (valor == 3)
            this.informacion = "Si comienza con un valor de 9, 10 o 11, usted puede doblar su apuesta, sin embargo se le asignara una nueva carta y no podra elegir mas cartas, ganara el doble o perdera el doble.";
        else if (valor == 4)
            this.informacion = "Cuando comience con 2 cartas del mismo valor podra dividir sus carta en dos jugadas, si elije [Nueva carta] se le asignara una carta nueva a la primera mano, si elije [Quedarse], pasara a jugar con la otra mano, tenga en cuenta que debe apostar el doble, ganá dinero por cada mano que supere al croupier, si se pasa solo perdera esa mano.";
        else if (valor == 5)
            this.informacion = "Sí el croupier tiene un As, puede hacer una apuesta lateral de que el croupier obtendra blackjack, apostara un valor igual a la mitad de la apuesta inicial como apuesta asegurada, si el croupier obtiene blackjack usted perdera la mitad de la apuesta inicial, si no obtiene blackjack usted perdera la apuesta asegurada y el juego seguira de forma normal.";
    };
    Blackjack7Component.prototype.ToggleFormComoJugar = function () {
        if (this.ocultarComoJugar != false) {
            this.ComoJugar(0);
            this.ocultarComoJugar = false;
        }
        else
            this.ocultarComoJugar = true;
    };
    Blackjack7Component.prototype.ToggleFormApostar = function () {
        if (this.juegoTerminado == true) {
            if (this.ocultarApostar != false)
                this.ocultarApostar = false;
            else
                this.ocultarApostar = true;
        }
        else {
            this.MostarMensaje("Solo se apuesta al terminar una ronda", false);
        }
    };
    Blackjack7Component.prototype.ToggleFormReiniar = function () {
        if (this.ocultarReiniciar != false)
            this.ocultarReiniciar = false;
        else
            this.ocultarReiniciar = true;
    };
    Blackjack7Component.prototype.RepartirDinero = function (jugado) {
        this.juegoTerminado = true;
        if (jugado == "gano") {
            this.jugadorDinero += this.apuestaActual;
            if (this.doblePaga == true)
                this.jugadorDinero += this.apuestaActual;
        }
        else if (jugado == "perdio") {
            this.jugadorDinero -= this.apuestaActual;
            if (this.doblePaga == true)
                this.jugadorDinero -= this.apuestaActual;
        }
        else if (jugado == "ganoBlackjack") {
            this.jugadorDinero += (this.apuestaActual * 1.5);
        }
        else if (jugado == "perdioBlackjack") {
            if (this.asegurado == false) {
                this.jugadorDinero -= this.apuestaActual;
            }
        }
    };
    Blackjack7Component.prototype.CartasCroupier = function () {
        this.RecibirCartaJugador(this.manoCroupier);
        this.manoCroupier[1] = new __WEBPACK_IMPORTED_MODULE_2__clases_carta__["a" /* Carta */]("assets/img/fondo.png", "fantasma", "0");
    };
    Blackjack7Component.prototype.JuegaCroupier = function () {
        var gano = 0;
        var perdio = 0;
        if (this.juegoTerminado == false) {
            while (this.cantidadCroupier < 17 && this.manoCroupier[4].numero == "0") {
                this.RecibirCartaJugador(this.manoCroupier);
            }
        }
        if (this.cantidadCroupier < 21 && this.juegoTerminado == false) {
            this.juegoTerminado = true;
            if (this.dosManos == false) {
                if (this.cantidadCroupier > this.cantidadJugador) {
                    this.RepartirDinero("perdio");
                    this.MostarMensaje("perdio", false);
                }
                else if (this.cantidadCroupier == this.cantidadJugador) {
                    this.MostarMensaje("empate", true);
                }
                else {
                    if (this.cantidadJugador <= 21) {
                        this.RepartirDinero("gano");
                        this.MostarMensaje("gano", true);
                    }
                }
            }
            else {
                if (this.cantidadCroupier > this.cantidadJugador) {
                    perdio++;
                }
                else if (this.cantidadCroupier < this.cantidadJugador) {
                    if (this.cantidadJugador <= 21) {
                        gano++;
                    }
                }
                if (this.cantidadCroupier > this.cantidadJugadorDividida) {
                    perdio++;
                }
                else if (this.cantidadCroupier < this.cantidadJugadorDividida) {
                    if (this.cantidadJugadorDividida <= 21) {
                        gano++;
                    }
                }
                if (this.cantidadJugador > 21)
                    perdio++;
                if (this.cantidadJugadorDividida > 21)
                    perdio++;
                if (gano == 1 && perdio == 1)
                    this.MostarMensaje("gano y perdio", true);
                else if (gano == 0 && perdio == 0)
                    this.MostarMensaje("empate", true);
                else if (gano == 1 && perdio == 0) {
                    this.RepartirDinero("gano");
                    this.MostarMensaje("gano", true);
                }
                else if (gano == 0 && perdio == 1) {
                    this.RepartirDinero("perdio");
                    this.MostarMensaje("perdio", false);
                }
                else if (gano == 2 && perdio == 0) {
                    this.RepartirDinero("gano");
                    this.RepartirDinero("gano");
                    this.MostarMensaje("gano", true);
                }
                else if (gano == 0 && perdio == 2) {
                    this.RepartirDinero("perdio");
                    this.RepartirDinero("perdio");
                    this.MostarMensaje("perdio", false);
                }
            }
        }
    };
    Blackjack7Component.prototype.ContarCartasCroupier = function () {
        this.cantidadCroupier = this.ContarCartas(this.manoCroupier);
        if (this.manoCroupier[0].numero == "a") {
            if (this.manoCroupier[1].numero == "j" || this.manoCroupier[1].numero == "q" || this.manoCroupier[1].numero == "k" || this.manoCroupier[1].numero == "10") {
                this.RepartirDinero("perdioBlackjack");
                this.MostarMensaje("Blackjack", false);
            }
            else if (this.asegurado == true && this.manoCroupier[1].numero != "0") {
                this.asegurado = false;
                this.jugadorDinero -= (this.apuestaActual / 2);
            }
        }
        else if (this.cantidadCroupier == 21) {
            this.juegoTerminado = true;
            this.RepartirDinero("perdio");
            this.MostarMensaje("perdio", false);
        }
        else if (this.cantidadCroupier > 21) {
            this.juegoTerminado = true;
            if (this.dosManos == true) {
                if (this.cantidadJugador <= 21)
                    this.RepartirDinero("gano");
                if (this.cantidadJugadorDividida <= 21)
                    this.RepartirDinero("gano");
            }
            else {
                this.RepartirDinero("gano");
            }
            this.MostarMensaje("gano", true);
        }
    };
    Blackjack7Component.prototype.Asegurarse = function () {
        if (this.manoCroupier[0].numero == "a" && this.dosManos == false && this.manoJugador[2].numero == "0" && this.juegoTerminado == false && this.asegurado == false) {
            if (this.jugadorDinero >= (this.apuestaActual * 1.5)) {
                this.asegurado = true;
                this.MostarMensaje("asegurado", true);
            }
            else {
                this.MostarMensaje("Te falta dinero", false);
            }
        }
        else {
            this.MostarMensaje("La carta del croupier debe ser un As", false);
        }
    };
    Blackjack7Component.prototype.DividirBaraja = function () {
        var carta1 = 0;
        var carta2 = 0;
        if (this.juegoTerminado == false) {
            if (this.jugadorDinero >= (this.apuestaActual * 2)) {
                if (this.manoJugador[0].numero != "0" && this.manoJugador[2].numero == "0") {
                    if (this.manoJugador[0].numero == "a")
                        carta1 = 11;
                    else if (this.manoJugador[0].numero == "j" || this.manoJugador[0].numero == "q" || this.manoJugador[0].numero == "k")
                        carta1 = 10;
                    else
                        carta1 = parseInt(this.manoJugador[0].numero);
                    if (this.manoJugador[1].numero == "a")
                        carta2 = 11;
                    else if (this.manoJugador[1].numero == "j" || this.manoJugador[1].numero == "q" || this.manoJugador[1].numero == "k")
                        carta2 = 10;
                    else
                        carta2 = parseInt(this.manoJugador[1].numero);
                    if (carta1 == carta2) {
                        this.manoJugadorDividida[0] = this.manoJugador[1];
                        this.manoJugador[1] = this.cartaFantasma;
                        this.dosManos = true;
                        this.ContarCartasJugador();
                    }
                    else {
                        this.MostarMensaje("Las cartas valen diferente", false);
                    }
                }
            }
            else {
                this.MostarMensaje("Te falta dinero", false);
            }
        }
    };
    Blackjack7Component.prototype.Doblar = function () {
        if (this.juegoTerminado == false) {
            if (this.manoJugador[2].numero == "0" && this.cantidadJugador > 8 && this.cantidadJugador < 12 && this.dosManos == false) {
                if (this.jugadorDinero >= (this.apuestaActual * 2)) {
                    //this.postar(valorDeApuestaActual);apostar el doble x una carta mas
                    this.doblePaga = true;
                    this.RecibirCarta();
                    this.turnoJugador = false;
                    this.JuegaCroupier();
                }
                else {
                    this.MostarMensaje("Necesitas mas dinero", false);
                }
            }
            else {
                this.MostarMensaje("Debes tener una suma menor igual a 9, 10 o 11", false);
            }
        }
    };
    Blackjack7Component.prototype.ContarCartasJugador = function () {
        this.cantidadJugador = this.ContarCartas(this.manoJugador);
        if (this.dosManos == true) {
            this.cantidadJugadorDividida = this.ContarCartas(this.manoJugadorDividida);
        }
        if (this.cantidadJugador == 21 && this.dosManos == false && this.manoJugador[2].numbero == "0") {
            this.juegoTerminado = true;
            this.RepartirDinero("ganoBlackjack");
            this.MostarMensaje("Blackjack!", true);
        }
        else if (this.cantidadJugador > 21) {
            if (this.dosManos == false) {
                this.juegoTerminado = true;
                this.RepartirDinero("perdio");
                this.MostarMensaje("perdio", false);
            }
            else if (this.cantidadJugadorDividida > 21) {
                this.juegoTerminado = true;
                this.RepartirDinero("perdio");
                this.MostarMensaje("perdio", false);
            }
        }
    };
    Blackjack7Component.prototype.Quedarse = function () {
        if (this.juegoTerminado == false) {
            if (this.manoJugadorQuedo == true) {
                this.turnoJugador = false;
                this.JuegaCroupier();
            }
            if (this.dosManos == true) {
                this.manoJugadorQuedo = true;
            }
            else if (this.juegoTerminado == false) {
                this.turnoJugador = false;
                this.JuegaCroupier();
            }
        }
        else {
            this.MostarMensaje("Ronda terminada elija una nueva carta o cambien la apuesta", false);
        }
    };
    Blackjack7Component.prototype.RecibirCarta = function () {
        if (this.juegoTerminado == true)
            this.ApostarIniciar();
        else if (this.manoJugadorQuedo == false && this.turnoJugador == true) {
            if (this.cantidadJugador < 21)
                this.RecibirCartaJugador(this.manoJugador);
        }
        else if (this.manoJugadorQuedo == true) {
            if (this.cantidadJugadorDividida < 21)
                this.RecibirCartaJugador(this.manoJugadorDividida);
        }
    };
    Blackjack7Component.prototype.RecibirCartaJugador = function (manoJugador) {
        if (this.juegoTerminado == false) {
            var valor = Math.floor(Math.random() * this.baraja.length) + 0;
            for (var i = 0; i < manoJugador.length; i++) {
                if (manoJugador[i].numero == "0") {
                    manoJugador[i] = this.baraja[valor];
                    // manoJugador[i] = this.baraja[7];
                    break;
                }
            }
            // this.manoJugador.push(this.baraja[valor]);
            this.baraja.splice(valor, 1);
            this.ContarCartasJugador();
            this.ContarCartasCroupier();
        }
    };
    Blackjack7Component.prototype.ContarCartas = function (baraja) {
        var resultado = 0;
        var valorCarta;
        var cantidadAses = 0;
        for (var i = 0; i < baraja.length; i++) {
            valorCarta = (baraja[i].numero);
            if (valorCarta == "a") {
                valorCarta = "11";
                cantidadAses++;
            }
            else if (valorCarta == "j" || valorCarta == "q" || valorCarta == "k")
                valorCarta = "10";
            resultado += parseInt(valorCarta);
        }
        while (cantidadAses > 0 && resultado > 21) {
            resultado -= 10;
            cantidadAses--;
        }
        return resultado;
    };
    Blackjack7Component.prototype.ReiniciarBaraja = function () {
        var cartaNueva;
        var valor;
        var palo;
        this.baraja = new Array();
        // 0->12 pica ; 13->25 trebol ; 26->38 diamante ; 39->51 corazon 
        for (var index = 0; index < 52; index++) {
            if (index <= 12) {
                valor = index + 1;
                if (valor == 1)
                    valor = "a";
                else if (valor == 11)
                    valor = "j";
                else if (valor == 12)
                    valor = "q";
                else if (valor == 13)
                    valor = "k";
                else
                    valor = valor + "";
                palo = "pica";
                cartaNueva = new __WEBPACK_IMPORTED_MODULE_2__clases_carta__["a" /* Carta */]("assets/img/" + palo + "/" + valor + ".png", palo, valor);
                this.baraja.push(cartaNueva);
            }
            else if (index <= 25) {
                valor = index + 1;
                valor -= 13;
                if (valor == 1)
                    valor = "a";
                else if (valor == 11)
                    valor = "j";
                else if (valor == 12)
                    valor = "q";
                else if (valor == 13)
                    valor = "k";
                else
                    valor = valor + "";
                palo = "trebol";
                cartaNueva = new __WEBPACK_IMPORTED_MODULE_2__clases_carta__["a" /* Carta */]("assets/img/" + palo + "/" + valor + ".png", palo, valor);
                this.baraja.push(cartaNueva);
            }
            else if (index <= 38) {
                valor = index + 1;
                valor -= 26;
                if (valor == 1)
                    valor = "a";
                else if (valor == 11)
                    valor = "j";
                else if (valor == 12)
                    valor = "q";
                else if (valor == 13)
                    valor = "k";
                else
                    valor = valor + "";
                palo = "diamante";
                cartaNueva = new __WEBPACK_IMPORTED_MODULE_2__clases_carta__["a" /* Carta */]("assets/img/" + palo + "/" + valor + ".png", palo, valor);
                this.baraja.push(cartaNueva);
            }
            else if (index <= 52) {
                valor = index + 1;
                valor -= 39;
                if (valor == 1)
                    valor = "a";
                else if (valor == 11)
                    valor = "j";
                else if (valor == 12)
                    valor = "q";
                else if (valor == 13)
                    valor = "k";
                else
                    valor = valor + "";
                palo = "corazon";
                cartaNueva = new __WEBPACK_IMPORTED_MODULE_2__clases_carta__["a" /* Carta */]("assets/img/" + palo + "/" + valor + ".png", palo, valor);
                this.baraja.push(cartaNueva);
            }
        }
        // valor = 0;
        // this.baraja.forEach(element => {
        //   valor +=1;
        //     console.log(valor);
        //     console.log(element);
        // });
    };
    Blackjack7Component.prototype.MostarMensaje = function (mensaje, ganador) {
        if (mensaje === void 0) { mensaje = "este es el mensaje"; }
        if (ganador === void 0) { ganador = false; }
        if (this.mensajeActivo == false) {
            this.mensajeActivo = true;
            this.mensajes = mensaje;
            var x = document.getElementById("snackbar");
            if (ganador) {
                x.className = "show Ganador";
            }
            else {
                x.className = "show Perdedor";
            }
            var modelo = this;
            setTimeout(function () {
                modelo.mensajeActivo = false;
                x.className = x.className.replace("show", "");
                // modelo.ocultarVerificar=false;
            }, 2000);
        }
    };
    Blackjack7Component.prototype.ngOnInit = function () {
    };
    return Blackjack7Component;
}());
Blackjack7Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-blackjack7',
        template: __webpack_require__("../../../../../src/app/componentes/blackjack7/blackjack7.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/blackjack7/blackjack7.component.css")]
    }),
    __metadata("design:paramtypes", [])
], Blackjack7Component);

//# sourceMappingURL=blackjack7.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/cabecera/cabecera.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel\n{\n    height: 200px;\n    /* background-image: url(../../../assets/img/cabecera.jpg); */\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    position: relative;\n    \n}\n\n\n\n.hero-text {\ntext-align: center;\nposition: absolute;\ntop: 75%;\nleft: 50%;\ntransform: translate(-50%, -50%);\ncolor: #3E06B0;\n}\n\n.hero-text a {\nborder: none;\noutline: 0;\ndisplay: inline-block;\npadding: 10px 25px;\ncolor: black;\nbackground-color: #ddd;\ntext-align: center;\ncursor: pointer;\n}\n\n.hero-text a:hover {\nbackground-color: #555;\ncolor: white;\n}\n\n.oxide_button1{\n    width : 160px;\n    height : 60px;\n    background-image: url(" + escape(__webpack_require__("../../../../../src/assets/img/boton_engithub.png")) + ");\n    background-size: cover;\n}\n\n.oxide_button2{\n    width : 160px;\n    height : 60px;\n    background-image: url(" + escape(__webpack_require__("../../../../../src/assets/img/boton_quiensoy.png")) + ");\n    background-size: cover;\n}\n\nli{\n    \n    font-family: 'Impact';\n}\na{\n    color: rgb(185, 110, 110);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/cabecera/cabecera.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n   \n  <div class=\"hero-text\">\n      <img src=\"assets/img/sala_juegos.png\">\n    \n    <!-- <h1 style=\"font-size:50px\">Sala de Juegos</h1> -->\n    <!-- <p>Octavio villegas</p> -->\n    <br>\n      <!-- <a href=\"https://github.com/hernangomez7\" target=\"_blank\" style=\"width : 160px ; height : 60px; background-image: url(../../../assets/img/boton_engithub.png);background-size: cover;\"></a> -->\n      <!-- <a routerLink=\"/QuienSoy\" style=\"width : 160px ; height : 60px; background-image: url(../../../assets/img/boton_engithub.png);background-size: cover;\"></a> -->\n\n     <a href=\"https://github.com/hernangomez7\" target=\"_blank\" class=\"oxide_button1\"></a>\n     <a routerLink=\"/QuienSoy\" class=\"oxide_button2\"></a>\n\n     <img src=\"assets/img/menu_principal_img.png\" style=\"max-width: 100%\">\n\n     \n     <br>\n\n      <!-- <a href=\"https://github.com/octaviovillegas\"target=\"_blank\">en GitHub <i class=\"fa fa-github\"></i></a> -->\n      <!-- <a  routerLink=\"/QuienSoy\" >Quien Soy? <i class=\"fa fa-user\"></i></a> -->\n  </div>\n  <ul class=\"nav navbar-nav navbar-right\">\n          <li>\n              <img src=\"assets/img/user_icon1.png\">\n              <a routerLink=\"/Registro\">Registrarse</a>\n              <!-- <a routerLink=\"/Registro\"><span class=\"glyphicon glyphicon-user\"></span>Registrarse</a> -->\n          </li>\n          <li>\n              <img src=\"assets/img/reg_icon1.png\">\n              <a routerLink=\"/Login\">Ingresar</a>\n            <!-- <a  routerLink=\"/Login\"><span class=\"glyphicon glyphicon-log-in\"></span> Ingresar</a> -->\n          </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/componentes/cabecera/cabecera.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CabeceraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CabeceraComponent = (function () {
    function CabeceraComponent() {
    }
    CabeceraComponent.prototype.ngOnInit = function () {
    };
    return CabeceraComponent;
}());
CabeceraComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-cabecera',
        template: __webpack_require__("../../../../../src/app/componentes/cabecera/cabecera.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/cabecera/cabecera.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CabeceraComponent);

//# sourceMappingURL=cabecera.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/error/error.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/error/error.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"panel panel-default\">\n    <div class=\"hero-text\">\n        <h1 style=\"font-size:50px\">Sala de Juegos</h1>\n        <p>Octavio villegas</p>\n        <a href=\"https://github.com/octaviovillegas\"target=\"_blank\">en GitHub <i class=\"fa fa-github\"></i></a>\n        <a  routerLink=\"/QuienSoy\"target=\"_blank\">Quien Soy? <i class=\"fa fa-github\"></i></a>\n    </div>\n    <ul class=\"nav navbar-nav navbar-right\">\n            <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span>Registrase</a></li>\n            <li><a href=\"#\"><span class=\"glyphicon glyphicon-log-in\"></span> Ingresar</a></li>\n          </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/componentes/error/error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorComponent = (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    return ErrorComponent;
}());
ErrorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-error',
        template: __webpack_require__("../../../../../src/app/componentes/error/error.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/error/error.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ErrorComponent);

//# sourceMappingURL=error.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/input-jugadores/input-jugadores.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/input-jugadores/input-jugadores.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  input-jugadores works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/componentes/input-jugadores/input-jugadores.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputJugadoresComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputJugadoresComponent = (function () {
    function InputJugadoresComponent() {
    }
    InputJugadoresComponent.prototype.ngOnInit = function () {
    };
    return InputJugadoresComponent;
}());
InputJugadoresComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-input-jugadores',
        template: __webpack_require__("../../../../../src/app/componentes/input-jugadores/input-jugadores.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/input-jugadores/input-jugadores.component.css")]
    }),
    __metadata("design:paramtypes", [])
], InputJugadoresComponent);

//# sourceMappingURL=input-jugadores.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/juegos/juegos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* body{\r\n    background-image: url(\"../../../assets/img/nurse_mod2.png\");\r\n    background-size: cover;\r\n    height: 100vh;\r\n    background-color: transparent;\r\n} */\r\n\r\nbody{\r\n    background-color: transparent;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/juegos/juegos.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<body>\n  <app-menu></app-menu>\n  <div style=\"text-align:center\">\n    <img src=\"assets/img/sala_juegos.png\">\n  </div>\n  \n  <router-outlet></router-outlet>\n</body>\n\n   \n"

/***/ }),

/***/ "../../../../../src/app/componentes/juegos/juegos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JuegosComponent = (function () {
    function JuegosComponent() {
    }
    JuegosComponent.prototype.ngOnInit = function () {
    };
    return JuegosComponent;
}());
JuegosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-juegos',
        template: __webpack_require__("../../../../../src/app/componentes/juegos/juegos.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/juegos/juegos.component.css")]
    }),
    __metadata("design:paramtypes", [])
], JuegosComponent);

//# sourceMappingURL=juegos.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/jugadores-listado/jugadores-listado.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/jugadores-listado/jugadores-listado.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-pills nav-justified\">\n  <li class=\"active\"><a routerLink=\"/Principal\">Ir a inicio</a></li>\n  <li><a (click)=\"TraerTodos()\">Todos los jugadores</a></li>\n  <li><a (click)=\"TraerGanadores()\">Los ganadores</a></li>\n  <li><a (click)=\"TraerPerdedores()\">Los perdedores</a></li>\n</ul>\n\n\n\n<table class=\"table table-condensed\">\n  <thead>\n    <tr>\n      <th>usuario</th>\n      <th>cuit</th>\n      <th>sexo</th>\n      <th>gano</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let jugador of listado\" >\n      <td>{{jugador.usuario}} </td>\n      <td>{{jugador.cuit}} </td> \n      <td>{{jugador.sexo | sexo| uppercase}} </td> \n      <td>{{jugador.gano}} </td> \n      \n    </tr>\n   \n  </tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/componentes/jugadores-listado/jugadores-listado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JugadoresListadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_jugadores_service__ = __webpack_require__("../../../../../src/app/servicios/jugadores.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JugadoresListadoComponent = (function () {
    function JugadoresListadoComponent(serviceJugadores) {
        this.miJugadoresServicio = serviceJugadores;
    }
    JugadoresListadoComponent.prototype.ngOnInit = function () {
    };
    JugadoresListadoComponent.prototype.TraerTodos = function () {
        var _this = this;
        //alert("totos");
        this.miJugadoresServicio.traertodos('jugadores/', 'todos').then(function (data) {
            //console.info("jugadores listado",(data));
            _this.listado = data;
        });
    };
    JugadoresListadoComponent.prototype.TraerGanadores = function () {
        var _this = this;
        this.miJugadoresServicio.traertodos('jugadores/', 'ganadores').then(function (data) {
            //console.info("jugadores listado",(data));
            _this.listado = data;
        });
    };
    JugadoresListadoComponent.prototype.TraerPerdedores = function () {
        var _this = this;
        this.miJugadoresServicio.traertodos('jugadores/', 'perdedores').then(function (data) {
            //console.info("jugadores listado",(data));
            _this.listado = data;
        });
    };
    return JugadoresListadoComponent;
}());
JugadoresListadoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-jugadores-listado',
        template: __webpack_require__("../../../../../src/app/componentes/jugadores-listado/jugadores-listado.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/jugadores-listado/jugadores-listado.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servicios_jugadores_service__["a" /* JugadoresService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__servicios_jugadores_service__["a" /* JugadoresService */]) === "function" && _a || Object])
], JugadoresListadoComponent);

var _a;
//# sourceMappingURL=jugadores-listado.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/listado-de-paises/listado-de-paises.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/listado-de-paises/listado-de-paises.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\n Listado de paises\n</h1>\n<table class=\"table table-condensed\">\n  <thead>\n    <tr>\n      <th>Pais</th>\n      <th>Región</th>\n      <th>Nombre local</th>\n      <th>Sub Región</th>\n      <th>Población</th>\n      <th>Bandera</th>\n      <th>Capital</th>\n      <th>GPS</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let pais of listadoDePaises\">\n      <td>{{pais.name}} </td>\n      <td>{{pais.region}} </td> \n      <td>{{pais.nativeName}} </td> \n      <td>{{pais.subregion}} </td>       \n      <td>{{pais.population}} </td> \n      <td><img src='{{pais.flag}}' width=\"50px\"/> </td> \n      <td>{{pais.capital}} </td> \n      <td>{{pais.borders}} </td> \n      <td>{{pais.latlng}} </td> \n    </tr>\n   \n  </tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/componentes/listado-de-paises/listado-de-paises.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadoDePaisesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_paises_service__ = __webpack_require__("../../../../../src/app/servicios/paises.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListadoDePaisesComponent = (function () {
    function ListadoDePaisesComponent(servicioPaises) {
        this.miServicioDePaises = servicioPaises;
    }
    ListadoDePaisesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.miServicioDePaises.listar()
            .then(function (datos) {
            console.info("listado de paises", datos);
            _this.listadoDePaises = datos;
        });
    };
    return ListadoDePaisesComponent;
}());
ListadoDePaisesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-listado-de-paises',
        template: __webpack_require__("../../../../../src/app/componentes/listado-de-paises/listado-de-paises.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/listado-de-paises/listado-de-paises.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servicios_paises_service__["a" /* PaisesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__servicios_paises_service__["a" /* PaisesService */]) === "function" && _a || Object])
], ListadoDePaisesComponent);

var _a;
//# sourceMappingURL=listado-de-paises.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.html":
/***/ (function(module, exports) {

module.exports = "<!--div *ngFor=\"let juego of listado\">\n\n<p> {{juego.nombre}} </p>\n<p> {{juego.jugador}} </p>\n\n</div-->\n\n<table class=\"table table-condensed\">\n    <thead>\n      <tr>\n        <th>Juego</th>\n        <th>Jugador</th>\n        <th>Resultado</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let juego of listado\">\n        <td>{{juego.nombre}} </td>\n        <td>{{juego.jugador}} </td> \n        <td *ngIf=\"juego.gano\">Gano </td>   \n        <td *ngIf=\"!juego.gano\">Perdio</td>     \n      </tr>\n     \n    </tbody>\n  </table>"

/***/ }),

/***/ "../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadoDeResultadosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListadoDeResultadosComponent = (function () {
    function ListadoDeResultadosComponent() {
    }
    ListadoDeResultadosComponent.prototype.ngOnInit = function () {
    };
    ListadoDeResultadosComponent.prototype.ver = function () {
        console.info(this.listado);
    };
    return ListadoDeResultadosComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ListadoDeResultadosComponent.prototype, "listado", void 0);
ListadoDeResultadosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-listado-de-resultados',
        template: __webpack_require__("../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ListadoDeResultadosComponent);

//# sourceMappingURL=listado-de-resultados.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/listado/listado.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Style all font awesome icons */\n.fa {\n    padding: 20px;\n    font-size: 30px;\n    width: 50px;\n    text-align: center;\n    text-decoration: none;\n    border-radius: 50%;\n}\n\n/* Add a hover effect if you want */\n.fa:hover {\n    opacity: 0.7;\n}\n\n/* Set a specific color for each brand */\n\n/* Facebook */\n.fa-facebook {\n    background: #3B5998;\n    color: white;\n}\n\n/* Twitter */\n.fa-twitter {\n    background: #55ACEE;\n    color: white;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/listado/listado.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--input type=\"button\" (click)=\"llamaService()\" class=\"btn btn-info\" value=\"Pulsame\" > \n<input type=\"button\" (click)=\"llamaServicePromesa()\" class=\"btn btn-info\" value=\"Pulsame Promesa\" --> \n\n<!-- Centered Pills -->\n<ul class=\"nav nav-pills nav-justified\">\n    <li class=\"active\"><a routerLink=\"/Principal\">Sala de Juegos</a></li>\n    <li><a (click)=\"llamaService()\">Servicio</a></li>\n    <li><a (click)=\"llamaServicePromesa()\">Serv Promesa</a></li>\n    <li><a (click)=\"llamaServicePromesa()\">Serv observable</a></li>\n  </ul>\n  \n<app-listado-de-resultados [listado]=\"listadoParaCompartir\"> </app-listado-de-resultados>\n\n"

/***/ }),

/***/ "../../../../../src/app/componentes/listado/listado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__ = __webpack_require__("../../../../../src/app/servicios/juego-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListadoComponent = (function () {
    function ListadoComponent(servicioJuego) {
        this.miServicioJuego = servicioJuego;
    }
    ListadoComponent.prototype.ngOnInit = function () {
    };
    ListadoComponent.prototype.llamaService = function () {
        console.log("llamaService");
        this.listadoParaCompartir = this.miServicioJuego.listar();
    };
    ListadoComponent.prototype.llamaServicePromesa = function () {
        var _this = this;
        console.log("llamaServicePromesa");
        this.miServicioJuego.listarPromesa().then(function (listado) {
            _this.listadoParaCompartir = listado;
        });
    };
    return ListadoComponent;
}());
ListadoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-listado',
        template: __webpack_require__("../../../../../src/app/componentes/listado/listado.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/listado/listado.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__["a" /* JuegoServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__["a" /* JuegoServiceService */]) === "function" && _a || Object])
], ListadoComponent);

var _a;
//# sourceMappingURL=listado.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/listados/listados.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/listados/listados.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  listados works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/componentes/listados/listados.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListadosComponent = (function () {
    function ListadosComponent() {
    }
    ListadosComponent.prototype.ngOnInit = function () {
    };
    return ListadosComponent;
}());
ListadosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-listados',
        template: __webpack_require__("../../../../../src/app/componentes/listados/listados.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/listados/listados.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ListadosComponent);

//# sourceMappingURL=listados.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nform {\n    /* border: 10px solid #f1f1f1; */\n    padding: 10px;\n    /* background:gray; */\n    background-color: transparent;\n    font-family: 'Cambria';\n}\n\ninput[type=text], input[type=password] {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n    background-color: rgb(0, 0, 0);\n    color: rgb(192, 192, 192);\n}\n\n/* button {\n    background-color: #4CAF50;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n} */\n\nbutton:hover {\n    opacity: 0.8;\n}\n\n.cancelbtn {\n    width: auto;\n    padding: 10px 18px;\n    background-color: #f44336;\n}\n.aceptbtn {\n    width: auto;\n    padding: 10px 18px;\n    background-color: #3664F4;\n}\n.imgcontainer {\n    text-align: center;\n    margin: 24px 0 12px 0;\n    \n}\n\nimg.avatar {\n    width: 40%;\n    border-radius: 50%;\n}\n\n.container {\n    padding: 16px;\n    background-color: transparent;\n}\n\nspan.psw {\n    float: right;\n    padding-top: 16px;\n}\n\n/* Change styles for span and cancel button on extra small screens */\n@media screen and (max-width: 300px) {\n    span.psw {\n       display: block;\n       float: none;\n    }\n    .cancelbtn {\n       width: 100%;\n    }\n}\n\n.btn_empty{\n    background-image: url(" + escape(__webpack_require__("../../../../../src/assets/img/boton_empty.png")) + ");\n    height: 63px;\n    width: 165px;\n    background-color: transparent;\n    background-size: cover;\n    padding: 0;\n    border: none;\n    color: #ff1100;\n    text-align: center;\n    font-family: 'Impact';\n    font-size: 25px;\n\n    padding: 14px 20px;\n    margin: 8px 0;\n    cursor: pointer;\n}\n\n\n.btn_empty2 {\n    background-color: rgb(0, 0, 0);\n    color: rgb(255, 0, 0);\n    padding: 14px 20px;\n    margin: 8px 0;\n    cursor: pointer;\n    width: 100%;\n    text-align: center;\n    font-family: 'Impact';\n    font-size: 25px;\n    border: 2px solid rgb(255, 0, 0);\n}\n\n.jumbotron{\n    border: 2px solid rgb(165, 165, 165);\n    background-color: rgba(22, 22, 22, 0.75);\n    color: rgb(165, 165, 165);\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!--div style=\"margin: 20% auto; width: 30%;\">\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n      Usuario\n    </div>\n    <div class=\"col-lg-6\">\n      <input type=\"text\"  [(ngModel)]=\"usuario\">\n    </div>\n  </div>\n  <div class=\"row\" style=\"margin-top: 5px\">\n    <div class=\"col-lg-6\">\n      Clave\n    </div>\n    <div class=\"col-lg-6\">\n      <input type=\"password\" [(ngModel)]=\"clave\">\n    </div>\n  </div>\n  <div class=\"row\" style=\"text-align: center; margin-top: 10px\">\n    <div class=\"col-lg-12\">\n      <button (click)=\"Entrar()\" class=\"btn btn-info btn-lg\" >Entrar</button>\n    </div>\n  </div>\n</div-->\n <div class=\"container\" >\n  <div class=\"jumbotron\" style=\"padding:50px;\">\n    <form action=\"return true;\">\n      <div class=\"imgcontainer\">\n        <!-- <img src=\"./assets/imagenes/login.png\" alt=\"Avatar\" class=\"avatar\" max-width=\"104\" > -->\n        <img src=\"./assets/img/anonimousisness.png\" alt=\"Avatar\" class=\"avatar\" max-width=\"50\" >\n        \n      </div>\n\n      <div class=\"container\">\n        <label><b>Usuario</b></label>\n        <input type=\"text\" placeholder=\"Usuario\"  [(ngModel)]=\"usuario\"  name=\"uname\" required>\n        \n        <label><b>Clave</b></label>\n        <input type=\"password\" placeholder=\"Clave\"  [(ngModel)]=\"clave\" name=\"psw\" required>\n            \n        <!-- <button *ngIf=\"logeando\"  (click)=\"MoverBarraDeProgreso()\" >Ingresar</button> -->\n        <button *ngIf=\"logeando\" class=\"btn_empty2\" (click)=\"MoverBarraDeProgreso()\">Ingresar</button>\n       \n        <div *ngIf=\"!logeando\" class=\"progress\">\n            <div class=\"progress-bar progress-bar-info progress-bar-striped active\" [class]=\"clase\" role=\"progressbar\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\" [style.width]=\"ProgresoDeAncho\" >\n              {{progresoMensaje}} - {{progreso}}%\n            </div>\n        </div>\n       <br>\n        <input type=\"checkbox\" checked=\"checked\"> Recordar mis datos\n      </div>\n\n      <div class=\"container\">\n        <!-- <button type=\"button\" class=\"cancelbtn\" routerLink=\"/Principal\">Cancelar</button>\n        <button type=\"button\" class=\"aceptbtn\" routerLink=\"/Registro\" >Registrarse</button> -->\n\n        <button class=\"btn_empty\" routerLink=\"/Principal\">Cancelar</button>\n        <button class=\"btn_empty\" routerLink=\"/Registro\" >Registrarse</button>\n\n        <span class=\"psw\">Te olvidaste <a href=\"#\">la clave?</a></span>\n      </div>\n     \n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/componentes/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_TimerObservable__ = __webpack_require__("../../../../rxjs/observable/TimerObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_TimerObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_TimerObservable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(route, router) {
        this.route = route;
        this.router = router;
        this.usuario = '';
        this.clave = '';
        this.progresoMensaje = "esperando...";
        this.logeando = true;
        this.clase = "progress-bar progress-bar-info progress-bar-striped ";
        this.progreso = 0;
        this.ProgresoDeAncho = "0%";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.Entrar = function () {
        if (this.usuario === 'admin' && this.clave === 'admin') {
            this.router.navigate(['/Principal']);
        }
    };
    LoginComponent.prototype.MoverBarraDeProgreso = function () {
        var _this = this;
        this.logeando = false;
        this.clase = "progress-bar progress-bar-danger progress-bar-striped active";
        this.progresoMensaje = "NSA spy...";
        var timer = __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_TimerObservable__["TimerObservable"].create(200, 50);
        this.subscription = timer.subscribe(function (t) {
            console.log("inicio");
            _this.progreso = _this.progreso + 1;
            _this.ProgresoDeAncho = _this.progreso + 20 + "%";
            switch (_this.progreso) {
                case 15:
                    _this.clase = "progress-bar progress-bar-warning progress-bar-striped active";
                    _this.progresoMensaje = "Verificando ADN...";
                    break;
                case 30:
                    _this.clase = "progress-bar progress-bar-Info progress-bar-striped active";
                    _this.progresoMensaje = "Adjustando encriptación..";
                    break;
                case 60:
                    _this.clase = "progress-bar progress-bar-success progress-bar-striped active";
                    _this.progresoMensaje = "Recompilando Info del dispositivo..";
                    break;
                case 75:
                    _this.clase = "progress-bar progress-bar-success progress-bar-striped active";
                    _this.progresoMensaje = "Recompilando claves facebook, gmail, chats..";
                    break;
                case 85:
                    _this.clase = "progress-bar progress-bar-success progress-bar-striped active";
                    _this.progresoMensaje = "Instalando KeyLogger..";
                    break;
                case 100:
                    console.log("final");
                    _this.subscription.unsubscribe();
                    _this.Entrar();
                    break;
            }
        });
        //this.logeando=true;
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/componentes/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/menu-card/menu-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n    transition: 0.3s;\n    border-radius: 5px;\n    max-width: 300px;\n    height: 100%;\n    margin: 10px;\n    padding-bottom: 10px;\n    float: left;\n    background-color: rgb(34, 34, 34);\n    text-align: center;\n    font-family: 'Cambria';\n    color: rgb(255, 0, 0)\n}\n\nimg {\n    border-radius: 5px 5px 0 0;\n    width: 200px;\n    height: 200px;\n\n}\n.container {\n    padding: 2px 16px;\n}\n\na{\n   color: rgb(165, 165, 165);\n}\n\n\n\n.button{\n    background-image: url(" + escape(__webpack_require__("../../../../../src/assets/img/boton_jugar2.png")) + ");\n    height: 91px;\n    width: 237px;\n    background-color: transparent;\n    background-size: cover;\n    padding: 0;\n    border: none;\n  }\n  \n  .button:hover {background-color: #ff0000}\n  \n  .button:active {\n    background-color: #d30000;\n    box-shadow: 0 5px #666;\n    transform: translateY(4px);\n  }\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/menu-card/menu-card.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n<div class=\"container\" >\n\n  <div class=\"card\">\n    <img class=\"img-thumbnail\"   src=\"./assets/img/cerebro.jpg\" alt=\"Avatar\" style=\"width:100%\">\n    <h2>Velocidad y agilidad aritmética </h2>\n    <p class=\"title\">Juego de agilidad mental</p>\n    <p>UTN FRA </p>\n    <a href=\"#\"><i class=\"fa fa-dribbble\"></i></a> \n    <a href=\"#\"><i class=\"fa fa-twitter\"></i></a> \n    <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a> \n    <a href=\"#\"><i class=\"fa fa-facebook\"></i></a> \n    <p><button class=\"button\" (click)=\"Juego('Agilidad')\"></button></p>\n  </div>\n\n  <div class=\"card\">\n    <img class=\"img-thumbnail\" src=\"./assets/img/ppt.jpg\" alt=\"Avatar\" style=\"width:100%\">\n    <h2>Piedra Papel o Tijera</h2>\n    <p class=\"title\">Juega contra la máquina</p>\n    <p>UTN FRA </p>\n    <a href=\"#\"><i class=\"fa fa-dribbble\"></i></a> \n    <a href=\"#\"><i class=\"fa fa-twitter\"></i></a> \n    <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a> \n    <a href=\"#\"><i class=\"fa fa-facebook\"></i></a> \n    <p><button class=\"button\"(click)=\"Juego('PPT')\"></button></p>\n  </div>\n\n  <div class=\"card\">\n    <img  class=\"img-thumbnail\"  src=\"./assets/img/adivina.png\" alt=\"Avatar\" style=\"width:100%\">\n    <h2>Adivina el número secreto</h2>\n    <p class=\"title\">Juega de estrategia</p>\n    <p>UTN FRA </p>\n    <a href=\"#\"><i class=\"fa fa-dribbble\"></i></a> \n    <a href=\"#\"><i class=\"fa fa-twitter\"></i></a> \n    <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a> \n    <a href=\"#\"><i class=\"fa fa-facebook\"></i></a> \n    <p><button class=\"button\"(click)=\"Juego('Adivina')\"></button></p>\n  </div>\n\n  <div class=\"card\">\n    <img  class=\"img-thumbnail\"  src=\"./assets/img/anagrama.png\" alt=\"Avatar\" style=\"width:100%\">\n    <h2>Anagrama</h2>\n    <p class=\"title\">se muestra una palabra desordenada y se debe ingresar la correcta</p>\n    <p>UTN FRA </p>\n    <a href=\"#\"><i class=\"fa fa-dribbble\"></i></a> \n    <a href=\"#\"><i class=\"fa fa-twitter\"></i></a> \n    <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a> \n    <a href=\"#\"><i class=\"fa fa-facebook\"></i></a> \n    <p><button class=\"button\"(click)=\"Juego('Anagrama')\"></button></p>\n  </div>\n\n  <div class=\"card\">\n    <img  class=\"img-thumbnail\"  src=\"./assets/img/tateti.png\" alt=\"Avatar\" style=\"width:100%\">\n    <h2>TaTeTi </h2>\n    <p class=\"title\">Juega contra la máquina</p>\n    <p>UTN FRA </p>\n    <a href=\"#\"><i class=\"fa fa-dribbble\"></i></a> \n    <a href=\"#\"><i class=\"fa fa-twitter\"></i></a> \n    <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a> \n    <a href=\"#\"><i class=\"fa fa-facebook\"></i></a> \n    <p><button class=\"button\"(click)=\"Juego('Tateti')\"></button></p>\n  </div>\n\n  <div class=\"card\">\n    <img  class=\"img-thumbnail\"  src=\"./assets/img/bk.png\" alt=\"Avatar\" style=\"width:100%\">\n    <h2>Blackjack 7 </h2>\n    <p class=\"title\">Juega contra la máquina</p>\n    <p>UTN FRA </p>\n    <a href=\"#\"><i class=\"fa fa-dribbble\"></i></a> \n    <a href=\"#\"><i class=\"fa fa-twitter\"></i></a> \n    <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a> \n    <a href=\"#\"><i class=\"fa fa-facebook\"></i></a> \n    <p><button class=\"button\"(click)=\"Juego('Blackjack7')\"></button></p>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/componentes/menu-card/menu-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuCardComponent = (function () {
    function MenuCardComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    MenuCardComponent.prototype.ngOnInit = function () {
    };
    MenuCardComponent.prototype.Juego = function (tipo) {
        switch (tipo) {
            case 'Adivina':
                this.router.navigate(['/Juegos/Adivina']);
                break;
            case 'Agilidad':
                this.router.navigate(['/Juegos/Agilidad']);
                break;
            case 'Anagrama':
                this.router.navigate(['/Juegos/Anagrama']);
                break;
            case 'Tateti':
                this.router.navigate(['/Juegos/Tateti']);
                break;
            // case 'AdivinaMasListado':
            //     this.router.navigate(['/Juegos/AdivinaMasListado']);
            //   break;
            // case 'AgilidadaMasListado':
            //     this.router.navigate(['/Juegos/AgilidadaMasListado']);
            //   break;
            case 'Blackjack7':
                this.router.navigate(['/Juegos/Blackjack7']);
                break;
            case 'PPT':
                this.router.navigate(['/Juegos/PiedraPapelTijera']);
                break;
        }
    };
    return MenuCardComponent;
}());
MenuCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-menu-card',
        template: __webpack_require__("../../../../../src/app/componentes/menu-card/menu-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/menu-card/menu-card.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], MenuCardComponent);

var _a, _b;
//# sourceMappingURL=menu-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title_text{\r\n    font-family: 'Impact';\r\n}\r\na{\r\n    color: rgb(255, 50, 50);\r\n}\r\n\r\n.navbar {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    border: 0;\r\n    border-radius: 0;\r\n    margin-bottom: 0;\r\n    font-size: 12px;\r\n    letter-spacing: 5px;\r\n    font-family: 'Cambria';\r\n    background-color: rgba(0, 0, 0, 0.85);\r\n    position: fixed;\r\n    /* width: 100%; */\r\n    z-index: 2;\r\n}\r\n\r\n.container-fluid{\r\n    color: rgb(255, 153, 153);\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- div>\n    <button routerLink=\"/Principal\">Principal</button>\n    <button (click)=\"Juego('Adivina')\">Adivina</button>\n    <button (click)=\"Juego('Agilidad')\">Agilidad</button>\n    <button (click)=\"Juego('AdivinaMasListado')\">Adivina+listado</button>\n    <button (click)=\"Juego('AgilidadaMasListado')\">Agilidad+listado</button>  \n    <button routerLink=\"/error\">Error</button>\n  \n</div -->\n\n  <!-- <nav class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" routerLink=\"/Principal\">Inicio</a>\n      </div>\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\"><a routerLink=\"/Juegos\">Juegos</a></li>\n        <li><a data-toggle=\"tooltip\" title=\"Hooray!\" (click)=\"Juego('Adivina')\">Adivina</a></li>\n        <li><a  (click)=\"Juego('Agilidad')\">Agilidad</a></li>\n        <li><a  (click)=\"Juego('AdivinaMasListado')\">Adivina+listado</a></li>\n        <li><a  (click)=\"Juego('AgilidadaMasListado')\">Agilidad+listado</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n          <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> Mis Datos</a></li>\n          <li><a href=\"#\"><span class=\"glyphicon glyphicon-log-out\"></span> Salir</a></li>\n        </ul>\n    </div>\n  </nav> -->\n\n  <nav class=\"navbar navbar-inverse\">\n      <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n          <!-- <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\"> -->\n          <button (click)=\"Toggle()\">\n            <span class=\"icon-bar\"></span>  \n          </button>\n          <a class=\"title_text\" routerLink=\"/Principal\">Inicio</a>\n        </div>\n        <div [hidden]=\"ocultarElementos\">\n        <!-- <div class=\"collapse navbar-collapse\" id=\"myNavbar\"> -->\n            <!-- <ul class=\"nav navbar-nav\"> -->\n              \n                <li ><a routerLink=\"/Juegos\">Menú de Juegos</a></li>\n                <li ><a routerLink=\"/.\" title=\"Adivina un numero secreto\" (click)=\"Juego('Adivina')\">Adivina</a></li>\n                <li ><a routerLink=\"/.\"  title=\"Ordena una palabra desordenada\" (click)=\"Juego('Anagrama')\">Anagrama</a></li>\n                <li ><a routerLink=\"/.\" title=\"Piedra, papel o tijeras\" (click)=\"Juego('PPT')\">PPoT</a></li>\n                <li ><a routerLink=\"/.\" title=\"Tateti\" (click)=\"Juego('Tateti')\">Tateti</a></li>\n                <li ><a routerLink=\"/.\" title=\"Blackjack\" (click)=\"Juego('Blackjack7')\">Blackjack7</a></li>\n              <!-- </ul> -->\n              <ul class=\"nav navbar-nav navbar-right\">\n                  <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> Mis Datos</a></li>\n                  <li><a href=\"/Login\"><span class=\"glyphicon glyphicon-log-out\"></span> Salir</a></li>\n              </ul>\n          </div>\n        <!-- </div> -->\n      </div>\n    </nav>\n\n\n  <!-- <nav class=\"navbar navbar-inverse\">\n      <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n            <span class=\"icon-bar\"></span>  \n          </button>\n          <a class=\"title_text\" routerLink=\"/Principal\">Inicio</a>\n        </div>\n        <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n            <ul class=\"nav navbar-nav\">\n                <li class=\"active\"><a routerLink=\"/Juegos\">Menú de Juegos</a></li>\n                <li><a data-toggle=\"tooltip\" title=\"Hooray!\" (click)=\"Juego('Adivina')\">Adivina</a></li>\n                <li><a  (click)=\"Juego('Agilidad')\">Agilidad</a></li>\n                <li><a  (click)=\"Juego('AdivinaMasListado')\">Adivina+listado</a></li>\n                <li><a  (click)=\"Juego('AgilidadaMasListado')\">Agilidad+listado</a></li>\n              </ul>\n              <ul class=\"nav navbar-nav navbar-right\">\n                  <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> Mis Datos</a></li>\n                  <li><a href=\"/Login\"><span class=\"glyphicon glyphicon-log-out\"></span> Salir</a></li>\n              </ul>\n        </div>\n      </div>\n    </nav> -->\n\n\n\n\n      \n   "

/***/ }),

/***/ "../../../../../src/app/componentes/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = (function () {
    function MenuComponent(route, router) {
        this.route = route;
        this.router = router;
        this.ocultarElementos = true;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.Toggle = function () {
        if (this.ocultarElementos != false)
            this.ocultarElementos = false;
        else
            this.ocultarElementos = true;
    };
    MenuComponent.prototype.Juego = function (tipo) {
        switch (tipo) {
            case 'Adivina':
                this.router.navigate(['/Juegos/Adivina']);
                break;
            case 'Agilidad':
                this.router.navigate(['/Juegos/Agilidad']);
                break;
            case 'Anagrama':
                this.router.navigate(['/Juegos/Anagrama']);
                break;
            case 'Tateti':
                this.router.navigate(['/Juegos/Tateti']);
                break;
            // case 'AdivinaMasListado':
            //     this.router.navigate(['/Juegos/AdivinaMasListado']);
            //   break;
            // case 'AgilidadaMasListado':
            //     this.router.navigate(['/Juegos/AgilidadaMasListado']);
            //   break;
            case 'Blackjack7':
                this.router.navigate(['/Juegos/Blackjack7']);
                break;
            case 'PPT':
                this.router.navigate(['/Juegos/PiedraPapelTijera']);
                break;
        }
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-menu',
        template: __webpack_require__("../../../../../src/app/componentes/menu/menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/menu/menu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], MenuComponent);

var _a, _b;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jumbotron{\r\n    border: 2px solid rgb(165, 165, 165);\r\n    background-color: rgba(22, 22, 22, 0.75);\r\n    color: rgb(165, 165, 165);\r\n}\r\n\r\n\r\nform {\r\n    border: 10px solid #f1f1f1;\r\n    padding: 10px;\r\n    background:gray;\r\n}\r\n\r\n.btn_empty{\r\n    background-image: url(" + escape(__webpack_require__("../../../../../src/assets/img/boton_empty.png")) + ");\r\n    height: 63px;\r\n    width: 165px;\r\n    background-color: transparent;\r\n    background-size: cover;\r\n    padding: 0;\r\n    border: none;\r\n    color: #ff1100;\r\n    text-align: center;\r\n    font-family: 'Impact';\r\n    font-size: 18px;\r\n\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    cursor: pointer;\r\n}\r\n\r\nh1,h2,h3{\r\n    font-family: 'Impact';\r\n}\r\n\r\nli{\r\n    font-family: 'Cambria';\r\n}\r\n\r\n\r\n#snackbar {\r\n    visibility: hidden;\r\n    min-width: 250px;\r\n    margin-left: -125px;\r\n   \r\n    color: rgb(255, 255, 255);\r\n    text-align: center;\r\n    border-radius: 2px;\r\n    padding: 16px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 50%;\r\n    bottom: 30px;\r\n    font-size: 17px;\r\n    font-family: 'Impact';\r\n}\r\n#snackbar.Ganador {\r\n    background-color: rgb(0, 39, 13);\r\n}\r\n#snackbar.Perdedor {\r\n    background-color: rgb(26, 0, 0);\r\n}\r\n#snackbar.show {\r\n    visibility: visible;\r\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}\r\n\r\nimg{\r\n    height: 225px;\r\n    width: 225px;\r\n}\r\n\r\n.eleccion_img{\r\n    text-align: center;\r\n}\r\n\r\n.info{\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" >\n    <div class=\"jumbotron\" style=\"padding:50px;\">\n\n        <div style=\"text-align:center\">\n            <h1>\n              {{nuevoJuego.nombre}}!\n            </h1>\n        </div>\n\n        <form name=\"juego\">\n          <div class=\"info\">\n            <button (click)=\"Nuevo()\" class=\"btn_empty\">Nuevo juego</button>\n            <h2 style=\"color:rgb(175, 251, 255)\">rondas:{{nuevoJuego.rondas}}</h2>\n            <h2 style=\"color:rgb(137, 216, 0)\">victorias:{{nuevoJuego.victorias}}</h2>\n            <h2 style=\"color:rgb(230, 5, 5)\">derrotas:{{nuevoJuego.derrotas}}</h2>\n        </div>\n\n          <div [hidden]=\"ocultarElegir\" class=\"eleccion_img\">\n              <h2>elija una opcion</h2>\n            <img (click)=\"Elegir(1)\" src=\"assets/img/piedra.jpg\"> \n            <img (click)=\"Elegir(2)\" src=\"assets/img/papel.jpg\"> \n            <img (click)=\"Elegir(3)\" src=\"assets/img/tijera.jpg\"> \n          </div>\n    \n        </form>\n        \n        <div id=\"snackbar\">{{mensajes}}</div>\n\n\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PiedraPapelTijeraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clases_juego_piedra_papel_tijera__ = __webpack_require__("../../../../../src/app/clases/juego-piedra-papel-tijera.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PiedraPapelTijeraComponent = (function () {
    function PiedraPapelTijeraComponent() {
        this.enviarJuego = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.nuevoJuego = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_piedra_papel_tijera__["a" /* JuegoPiedraPapelTijera */]();
        console.info("Inicio PPT");
        this.ocultarElegir = false;
        if (this.nuevoJuego.inicio == false) {
            this.ocultarElegir = false;
        }
    }
    PiedraPapelTijeraComponent.prototype.ngOnInit = function () {
    };
    PiedraPapelTijeraComponent.prototype.Nuevo = function () {
        this.nuevoJuego.rondas = 0;
        this.nuevoJuego.victorias = 0;
        this.nuevoJuego.derrotas = 0;
    };
    PiedraPapelTijeraComponent.prototype.Elegir = function (numero) {
        this.nuevoJuego.rondas++;
        this.nuevoJuego.eleccion_cpu = Math.floor(Math.random() * 3) + 1;
        switch (this.nuevoJuego.eleccion_cpu) {
            case 1:
                this.traduccion = "piedra";
                break;
            case 2:
                this.traduccion = "papel";
                break;
            default:
                this.traduccion = "tijera";
                break;
        }
        this.nuevoJuego.eleccion_jugador = numero;
        if (this.nuevoJuego.eleccion_jugador != this.nuevoJuego.eleccion_cpu) {
            if (this.nuevoJuego.verificar()) {
                this.nuevoJuego.victorias++;
                this.MostarMensaje("Victoria el a elegido (" + this.traduccion + ")", true);
            }
            else {
                this.nuevoJuego.derrotas++;
                this.MostarMensaje("Boooo!!! el a elegido (" + this.traduccion + ")", false);
            }
        }
        else {
            this.MostarMensaje("Empate ambos eligieron (" + this.traduccion + ")", false);
        }
        console.log("eleccion CPU:" + this.nuevoJuego.eleccion_cpu);
        console.log("eleccion Jugador:" + this.nuevoJuego.eleccion_jugador);
        this.ocultarElegir = true;
    };
    PiedraPapelTijeraComponent.prototype.MostarMensaje = function (mensaje, ganador) {
        if (mensaje === void 0) { mensaje = "este es el mensaje"; }
        if (ganador === void 0) { ganador = false; }
        this.mensajes = mensaje;
        var x = document.getElementById("snackbar");
        if (ganador) {
            x.className = "show Ganador";
        }
        else {
            x.className = "show Perdedor";
        }
        var modelo = this;
        setTimeout(function () {
            x.className = x.className.replace("show", "");
            modelo.ocultarElegir = false;
        }, 2500);
        console.info("objeto", x);
    };
    return PiedraPapelTijeraComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], PiedraPapelTijeraComponent.prototype, "enviarJuego", void 0);
PiedraPapelTijeraComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-piedra-papel-tijera',
        template: __webpack_require__("../../../../../src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PiedraPapelTijeraComponent);

var _a;
//# sourceMappingURL=piedra-papel-tijera.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/principal/principal.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face{\n    font-family:\"Impact\",\"Cambria\";\n    src: local('Impact');\n}\n\n.imagenDeMenu{\nwidth: 80px;\nheight: 80px;\n}\n\n.hero-text {\n    font-family: 'Impact';\n    text-align: center;\n    position: absolute;\n    margin-top: 3px;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    color: #100000;\n}\n\n.menu-principal{\n    background-image: url(" + escape(__webpack_require__("../../../../../src/assets/img/menu_principal_img.png")) + ");\n    /*height: 10VH;*/\n    width: 100%;\n    height: 100%;\n    /*text-align: center;*/\n    /*position: absolute;\n    transform: translate(-50%, -50%);*/\n    /*height: 12vh;*/\n    /*height: 12vh;*/\n    /*background-size: cover;*/\n    /*height: 100vh;*/\n    /*background-attachment: fixed;*/\n    /*width: 50%;*/\n    /*display: block;\n    margin-left: auto;\n    margin-right: auto;*/\n}\n\n.list-group-item{\n    font-family: 'Cambria';\n    -o-border-image: 3px;\n       border-image: 3px;\n    /* background-color: rgba(255, 255, 255, 0.500); */\n}\n\n.media-object{\n    padding-right: 8px;\n}\n\n\n.impact {\n    font-family: 'Impact';\n}\n\nh4{\n    color: #100000;\n}\n\np{\n    color: #3d3d3d;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/principal/principal.component.html":
/***/ (function(module, exports) {

module.exports = "<app-cabecera>  </app-cabecera>\n\n\n\n <div class=\"container\" style=\" margin-top: 85px\">\n    \n   \n    <ul class=\"list-group\">\n\n        <!-- <li class=\"list-group-item list-group-item-danger\"> -->\n\n          <!-- <li class=\"list-group-item list-group-item-primary\">\n                <div class=\"media-body\">\n                    <div class=\"hero-text\">\n                        <h4 >Menú Principal</h4>\n                      </div>\n                  </div>\n          </li> -->\n\n\n        <li class=\"list-group-item list-group-item-danger\">\n          <a routerLink=\"/Juegos\">\n            <div class=\"media\">\n              <div class=\"media-left\">\n                    <!-- <img src=\"./assets/imagenes/saladejuegos.png\" class=\"media-object imagenDeMenu\" > -->\n                    <img src=\"assets/img/saladejuegos.png\" class=\"media-object imagenDeMenu\" >\n\n                   \n              </div>\n              <div class=\"media-body\">\n                <h4 class=\"media-heading\">Juegos</h4>\n                <p>El método lúdico es un conjunto de estrategias diseñadas para crear un ambiente de armonía en los estudiantes que están inmersos en el proceso de aprendizaje. Este método busca que los alumnos se apropien de los temas impartidos por los docentes utilizando el juego.</p>\n              </div>\n             \n            </div> \n          </a>\n        </li>\n        <li class=\"list-group-item list-group-item-dark\">\n            <a routerLink=\"/Listado\">\n              <div class=\"media\">\n                  <div class=\"media-left\">\n                      <img src=\"assets/img/listado.png\" class=\"media-object imagenDeMenu\" >\n                    </div>\n                <div class=\"media-body\">\n                  <h4 class=\"media-heading\">Listados de resultados</h4>\n                  <p>Los listados de los resultados con ordenamiento y busqueda</p>\n                </div>\n                \n              </div> \n            </a>\n          </li>\n        <li class=\"list-group-item list-group-item-danger\">\n          <a routerLink=\"/Juegos\">\n            <div class=\"media\">\n                <div class=\"media-left\">\n                    <img src=\"assets/img/Configuracion.png\" class=\"media-object imagenDeMenu\" >\n                  </div>\n              <div class=\"media-body\">\n                <h4 class=\"media-heading\">Configuraci&oacute;n</h4>\n                <p>Ajustes de la aplicacion y los métodos de autentificación</p>\n              </div>\n             \n            </div> \n          </a>\n        </li>\n        <li class=\"list-group-item list-group-item-dark\">\n          <a routerLink=\"/Jugadores\">\n            <div class=\"media\">\n                <div class=\"media-left\">\n                    <img src=\"assets/img/jugadores.png\" class=\"media-object imagenDeMenu\" >\n                  </div>\n              <div class=\"media-body\">\n                <h4 class=\"media-heading\">Jugadores</h4>\n                <p>Listado de jugadores</p>\n              </div>\n             \n            </div> \n          </a>\n        </li>\n       \n        \n      </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/componentes/principal/principal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrincipalComponent = (function () {
    function PrincipalComponent() {
        this.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };
    }
    PrincipalComponent.prototype.ngOnInit = function () {
    };
    return PrincipalComponent;
}());
PrincipalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-principal',
        template: __webpack_require__("../../../../../src/app/componentes/principal/principal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/principal/principal.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PrincipalComponent);

//# sourceMappingURL=principal.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/quien-soy/quien-soy.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".imagenDeQuienSoy{\n    width: 100%;\n   \n    }\nbody {\n    font: 20px Montserrat, sans-serif;\n    line-height: 1.8;\n    color: #f5f6f7;\n}\np {font-size: 16px;}\n.margin {margin-bottom: 45px;}\n.bg-1 { \n    background-color: rgba(37, 59, 47, 0.65);\n    color: #caffca;\n    font-family: 'Impact';\n}\n.bg-2 { \n    background-color: rgb(31, 61, 82, 0.65); /* Dark Blue */\n    color: #b9daff;\n    font-family: 'Cambria';\n}\n.bg-3 { \n    background-color: rgba(45, 34, 49, 0.65); /* White */\n    color: #eca1ff;\n    font-family: 'Impact';\n}\n.bg-4 { \n    background-color: rgba(0, 0, 0, 0.75); /* Black Gray */\n    color: #fff;\n    font-family: 'Cambria';\n}\n.container-fluid {\n    padding-top: 70px;\n    padding-bottom: 70px;\n}\n.navbar {\n    padding-top: 15px;\n    padding-bottom: 15px;\n    border: 0;\n    border-radius: 0;\n    margin-bottom: 0;\n    font-size: 12px;\n    letter-spacing: 5px;\n    font-family: 'Cambria';\n    background-color: rgba(0, 0, 0, 0.85);\n    position: fixed;\n    width: 100%;\n}\n/* .navbar-nav  li a:hover {\n    color: #1abc9c !important;\n} */\n\n/* .first{\n    background: rgba(0, 0, 0, 0.75);\n} */\n\n.btn-default{\n    color: rgb(26, 135, 224);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/quien-soy/quien-soy.component.html":
/***/ (function(module, exports) {

module.exports = "  <nav class=\"navbar navbar-default\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>                        \n        </button>\n        <a class=\"navbar-brand\" href=\"./\">Sala De Juegos</a>\n      </div>\n      <!-- <div class=\"collapse navbar-collapse\" id=\"myNavbar\"> -->\n        <!-- <ul class=\"nav navbar-nav navbar-right\"> -->\n          <li><a href=\"./QuienSoy#quien\">Quien soy</a></li>\n          <li><a href=\"/QuienSoy#que\">Ques es esto</a></li>\n          <li><a href=\"./QuienSoy#donde\">Donde funciona</a></li>\n        <!-- </ul> -->\n      <!-- </div> -->\n    </div>\n  </nav>\n  \n  <!-- First Container -->\n  <div class=\"first\">\n    <div id =\"quien\"class=\"container-fluid bg-1 text-center\">\n      <h3 class=\"margin\">Quién Soy?</h3>\n      <!-- <img src=\"./assets/imagenes/quiensoy.jpg\" class=\"img-responsive img-circle margin\" style=\"display:inline\" alt=\"Bird\" width=\"350\" height=\"350\"> -->\n      <img src=\"assets/img/mx-x.png\" class=\"img-responsive img-circle margin\" style=\"display:inline\" alt=\"Bird\" width=\"350\" height=\"350\">\n      \n      \n      \n      <h3>Soy Un alumno de la UTN FRA</h3>\n    </div>\n  </div>\n  \n  <!-- Second Container -->\n  <div id =\"que\" class=\"container-fluid bg-2 text-center\">\n    <h3 class=\"margin\">Esto es un trabajo práctico</h3>\n    <p>Cada universidad, cada facultad, cada carrera y obviamente cada materia en particular tiene estrategias didácticas y formas de evaluación diferentes. A pesar de que en muchos casos las universidades intentan estandarizar la forma de dictar clase para generar un orden en las planificaciones cuatrimestre a cuatrimestre, las formas de evaluación son elementales tanto para las instituciones y profesores como para los alumnos. A través de la evaluación formativa el educador busca información en el alumno para lograr comprender cómo se está\n      produciendo el proceso de aprendizaje y poder reajustar los objetivos pedagógicos. Y para el alumno es una muestra del progreso que está logrando y si puede aplicar, materializar y darle visibilidad a la comprensión del tema. Según Black y William (1998), la evaluación formativa, ayuda a que los estudiantes sean independientes a la hora del aprendizaje, es decir, se presenta como receptor, autorregulador y centro de esa misma evaluación. </p>\n    <a href=\"#\" class=\"btn btn-default btn-lg\">\n      <span class=\"glyphicon glyphicon-file\"></span> Descargar PDF\n    </a>\n  </div>\n  \n  <!-- Third Container (Grid) -->\n  <div id =\"donde\" class=\"container-fluid bg-3 text-center\">    \n    <h3 class=\"margin\">Dónde Funciona?</h3><br>\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n        <p>Con las tecnologias WEB que permiten desarrollar aplicaciones multiplataforma</p>\n        <!-- <img src=\"./assets/imagenes/quiensoy1.png\" class=\"img-responsive margin imagenDeQuienSoy\"  alt=\"Image\"> -->\n        <img src=\"assets/img/tecnologias.jpg\" class=\"img-responsive margin imagenDeQuienSoy\"  alt=\"Image\">\n      </div>\n      <div class=\"col-sm-4\"> \n        <p>Principalmente orientada a la experiencia del usuario, garantizando que su funcionamieto sea fluido y pensado en el comportamiento del usuario y en la funcionalidad.</p>\n        <!-- <img src=\"./assets/imagenes/quiensoy2.jpg\" class=\"img-responsive margin imagenDeQuienSoy\" alt=\"Image\"> -->\n        <img src=\"assets/img/apps.jpg\" class=\"img-responsive margin imagenDeQuienSoy\"  alt=\"Image\">\n      </div>\n      <div class=\"col-sm-4\"> \n        <p>Para los sistemas operativos lideres en el mercado del consumo masivo</p>\n        <!-- <img src=\"./assets/imagenes/quiensoy3.png\" class=\"img-responsive margin imagenDeQuienSoy\" alt=\"Image\"> -->\n        <img src=\"assets/img/operativos.jpg\" class=\"img-responsive margin imagenDeQuienSoy\"  alt=\"Image\">\n      </div>\n    </div>\n  </div>\n  \n  <!-- Footer -->\n  <footer class=\"container-fluid bg-4 text-center\">\n    <p>Modificado por <a href=\"https://www.Killer7.com.ar\">www.Killer7.com.ar</a></p> \n  </footer>"

/***/ }),

/***/ "../../../../../src/app/componentes/quien-soy/quien-soy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuienSoyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuienSoyComponent = (function () {
    function QuienSoyComponent() {
    }
    QuienSoyComponent.prototype.ngOnInit = function () {
    };
    return QuienSoyComponent;
}());
QuienSoyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-quien-soy',
        template: __webpack_require__("../../../../../src/app/componentes/quien-soy/quien-soy.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/quien-soy/quien-soy.component.css")]
    }),
    __metadata("design:paramtypes", [])
], QuienSoyComponent);

//# sourceMappingURL=quien-soy.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/registro/registro.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input[type=text], input[type=password] {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n}\n\n/* Set a style for all buttons */\nbutton {\n    background-color: #4CAF50;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n}\n\n/* Extra styles for the cancel button */\n.cancelbtn {\n    padding: 14px 20px;\n    background-color: #f44336;\n}\n\n/* Float cancel and signup buttons and add an equal width */\n.cancelbtn,.signupbtn {float:left;width:50%}\n\n/* Add padding to container elements */\n/* .container {\n    padding: 16px;\n} */\n\n/* The Modal (background) */\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n    padding-top: 60px;\n}\n\n/* Modal Content/Box */\n.modal-content {\n    background-color: #fefefe;\n    margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */\n    border: 1px solid #888;\n    width: 98%; /* Could be more or less, depending on screen size */\n}\n\n/* The Close Button (x) */\n.close {\n    position: absolute;\n    right: 35px;\n    top: 15px;\n    color: rgb(255, 0, 0);\n    font-size: 40px;\n    font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n    color: red;\n    cursor: pointer;\n}\n\n/* Clear floats */\n.clearfix::after {\n    content: \"\";\n    clear: both;\n    display: table;\n}\n\n/* Change styles for cancel button and signup button on extra small screens */\n@media screen and (max-width: 300px) {\n    .cancelbtn, .signupbtn {\n       width: 100%;\n    }\n}\n\n.jumbotron{\n    font-family: 'Cambria';\n    color: rgb(255, 0, 0);\n    background-color: transparent;\n}\nh2{\n    font-family: 'Impact';\n    color: rgb(255, 0, 0);\n}\n\nstrong{\n    font-family: 'Cambria';\n    color: rgb(255, 0, 0);\n}\n\nbody{\n    background-image: src(\"assets/img/nurse_mod2.png\");\n    background-size: cover;\n    height: 100vh;\n    background-color: transparent;\n}\n\n.script{\n    background-color: transparent;\n}\n\n.btn_aceptar{\n    background-image: src(\"assets/img/boton_aceptar.png\");\n    height: 63px;\n    width: 165px;\n    background-color: transparent;\n    background-size: cover;\n    padding: 0;\n    border: none;\n}\n\n.btn_cancelar{\n    background-image: src(\"assets/img/boton_declinar.png\");\n    height: 63px;\n    width: 165px;\n    background-color: transparent;\n    background-size: cover;\n    padding: 0;\n    border: none;\n}\n\n.container{\n    background-color: rgb(22, 22, 22);\n    color: rgb(165, 165, 165);\n}\n\n.modal-content{\n    background-color: rgb(22, 22, 22);\n}\n\n\ninput{\n    background-color: rgb(15, 15, 15);\n    color: #f44336;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/registro/registro.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n  <div class=\"jumbotron\">\n    <h2 id=\"terminos\">Terminos y condiciones</h2>\n    <p>El Gobierno de la República Argentina (en adelante el “Gobierno Nacional”) no es responsable por los daños y perjuicios que puedan surgir, incluyendo, sin límite, daños, pérdidas o gastos directos, indirectos, que surjan en relación con el uso de los Activos Digitales o la imposibilidad de uso, en relación con cualquier falla en el vencimiento, error, omisión, interrupción, defecto, demora en la operación o transmisión, virus de computadora o falla del sistema de línea, aún en el caso de que el Gobierno Nacional o sus representantes fueran informados sobre la posibilidad de dichos daños, pérdidas o gastos.</p>\n    <p>El Gobierno Nacional no controla ni garantiza la ausencia de virus ni de otros elementos en los contenidos que puedan producir alteraciones en su sistema informático (software y hardware) o en los documentos electrónicos y ficheros almacenados en su sistema informático.</p>\n    <p>El Gobierno Nacional no puede garantizar que la transmisión de información por parte de los Usuarios sea completamente segura. El Usuario asume este riesgo.</p>\n   \n  </div>\n  <strong><p>No leer lo anterior, es solo un ejemplo sacado de https://www.argentina.gob.ar/terminos-y-condiciones </p></strong>\n  <!-- <button onclick=\"document.getElementById('id01').style.display='block'\" style=\"width:auto;\">Acepto</button> -->\n  \n  <!-- <button class=\"btn_aceptar\" onclick=\"document.getElementById('id01').style.display='block'\" style=\"width:auto;\"></button> -->\n  <button  class=\"btn_cancelar\"  routerLink=\"/Principal\"></button>\n  <button class=\"btn_aceptar\"  onclick=\"document.getElementById('id01').style.display='block'\"></button>\n\n  <div id=\"id01\" class=\"modal\">\n    <span onclick=\"document.getElementById('id01').style.display='none'\" class=\"close\" title=\"Close Modal\">X</span>\n    <form class=\"modal-content animate\" >\n      <div class=\"container\">\n        <label><b>Email</b></label>\n        <input type=\"text\" placeholder=\"Ingresa tu correo\" name=\"email\" required>\n  \n        <label><b>Clave</b></label>\n        <input type=\"password\" placeholder=\"Aca la clave\" name=\"psw\" required>\n  \n        <label><b>Repita la clave</b></label>\n        <input type=\"password\" placeholder=\"Aca repeti la misa clave  de arriba\" name=\"psw-repeat\" required>\n        <input type=\"checkbox\" checked=\"checked\">Recordar mis datos\n        <p>creando la cuenta aceptando los<a  onclick=\"document.getElementById('id01').style.display='none'\"  >Terminos y condiciones</a>.</p>\n  \n        <div class=\"clearfix\">\n          <!-- <button type=\"button\" onclick=\"document.getElementById('id01').style.display='none'\" class=\"cancelbtn\">Me arrepenti</button>\n          <button type=\"submit\" class=\"signupbtn\">Registrarme</button> -->\n\n          <button class=\"btn_cancelar\"  onclick=\"document.getElementById('id01').style.display='none'\"></button>\n          <button  type=\"submit\" class=\"btn_aceptar\"></button>\n\n\n        </div>\n      </div>\n    </form>\n  </div>\n  \n  <script>\n  // Get the modal\n  var modal = document.getElementById('id01');\n  \n  // When the user clicks anywhere outside of the modal, close it\n  window.onclick = function(event) {\n      if (event.target == modal) {\n          modal.style.display = \"none\";\n      }\n  }\n  </script>\n  \n  </body>"

/***/ }),

/***/ "../../../../../src/app/componentes/registro/registro.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//para poder hacer las validaciones
//import { Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';
var RegistroComponent = (function () {
    /* constructor( private miConstructor:FormBuilder) { }
     email=new FormControl('',[Validators.email]);
     formRegistro:FormGroup=this.miConstructor.group({
       usuario:this.email
     });*/
    function RegistroComponent() {
    }
    RegistroComponent.prototype.ngOnInit = function () {
    };
    return RegistroComponent;
}());
RegistroComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-registro',
        template: __webpack_require__("../../../../../src/app/componentes/registro/registro.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/registro/registro.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RegistroComponent);

//# sourceMappingURL=registro.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/tateti/tateti.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nform {\r\n    border: 10px solid #f1f1f1;\r\n    padding: 10px;\r\n    background:gray;\r\n}\r\n\r\ninput[type=text], input[type=password] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbutton {\r\n    /*background-color: #4CAF50;*/\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n}\r\n\r\nbutton:hover {\r\n    opacity: 0.8;\r\n}\r\n\r\n.cancelbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #f44336;\r\n}\r\n.aceptbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #3664F4;\r\n}\r\n.imgcontainer {\r\n    text-align: center;\r\n    margin: 24px 0 12px 0;\r\n}\r\n\r\nimg.avatar {\r\n    width: 40%;\r\n    border-radius: 50%;\r\n}\r\n\r\n.container {\r\n    padding: 16px;\r\n}\r\n\r\nspan.psw {\r\n    float: right;\r\n    padding-top: 16px;\r\n}\r\n\r\n/* Change styles for span and cancel button on extra small screens */\r\n@media screen and (max-width: 300px) {\r\n    span.psw {\r\n       display: block;\r\n       float: none;\r\n    }\r\n    .cancelbtn {\r\n       width: 100%;\r\n    }\r\n}\r\n\r\n\r\n\r\n#snackbar {\r\n    visibility: hidden;\r\n    min-width: 250px;\r\n    margin-left: -125px;\r\n   \r\n    color: rgb(255, 255, 255);\r\n    text-align: center;\r\n    border-radius: 2px;\r\n    padding: 16px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 50%;\r\n    bottom: 30px;\r\n    font-size: 17px;\r\n    font-family: 'Impact';\r\n}\r\n#snackbar.Ganador \r\n{\r\n    background-color: rgb(0, 39, 13);\r\n}\r\n#snackbar.Perdedor \r\n{\r\n    background-color: rgb(26, 0, 0);\r\n}\r\n#snackbar.show {\r\n    visibility: visible;\r\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}\r\n\r\n@keyframes fadein {\r\n    from {bottom: 0; opacity: 0;}\r\n    to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;}\r\n    to {bottom: 0; opacity: 0;}\r\n}\r\n\r\n\r\n.jumbotron{\r\n    border: 2px solid rgb(165, 165, 165);\r\n    background-color: rgba(0, 0, 0, 0.70);\r\n    color: rgb(165, 165, 165);\r\n}\r\n\r\nform{\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n    background-color: rgb(19, 19, 19);\r\n    color: rgb(192, 192, 192);\r\n}\r\n.main{\r\n    text-align: center;\r\n}\r\n\r\n.btn_dark { \r\n    background-color: rgb(0, 0, 0);\r\n    color: rgb(255, 0, 0);\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    cursor: pointer;\r\n    width: 40%;\r\n    text-align: center;\r\n    font-family: 'Impact';\r\n    font-size: 25px;\r\n    border: 2px solid rgb(255, 0, 0);\r\n}\r\n\r\ninput{\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n    background-color: rgb(0, 0, 0);\r\n    color: rgb(192, 192, 192);\r\n    font-family: 'Cambria';\r\n}\r\n\r\n.form-control{\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n    background-color: rgb(0, 0, 0);\r\n    color: rgb(192, 192, 192);\r\n    font-family: 'Cambria';\r\n}\r\n\r\nlabel{\r\n    font-family: 'Cambria';\r\n}\r\n\r\nh1,h2,h3\r\n{\r\n    font-family: 'Impact';\r\n    text-align: center;\r\n}\r\n\r\n.tateti_base\r\n{\r\n    border: 0px;\r\n    background-color: transparent;\r\n    margin-left: 27.5vw;\r\n    height: 220px;\r\n    width: 220px;\r\n    text-align: center;\r\n    padding: 14.1px;\r\n    background-image: url(" + escape(__webpack_require__("../../../../../src/assets/img/tateti_base.png")) + ");\r\n}\r\n\r\n.tateti_base img{\r\n    margin: 5.25px;\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/tateti/tateti.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!--app-menu></app-menu-->\n\n\n<div class=\"container\" >\n    <div class=\"jumbotron\" style=\"padding:50px;\">\n  \n        <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n        <div style=\"text-align:center\">\n          <h1>\n            {{nuevoJuego.nombre}}\n          </h1>\n        </div>\n        <form name=\"juego\" class=\"main\">\n            <h2  [hidden]=\"elegirMarca != true\">Elige el marcador</h2>\n          <h2  [hidden]=\"elegirMarca == true\">turno de {{turnoActual}}</h2>\n          <h2 [hidden]=\"elegirMarca != true\">\n            <img (click)=\"CambiarMarcador('circulo')\" src = \"assets/img/tateti_ficha_circulo.png\">\n            <img (click)=\"CambiarMarcador('cruz')\" src = \"assets/img/tateti_ficha_cruz.png\">\n          </h2>\n            \n\n          <form class=\"tateti_base\" [hidden]=\"elegirMarca == true\">\n            <tr>\n              <td (click)=\"Marcar(nuevoJuego.fichas[0])\"><img src={{nuevoJuego.fichas[0].foto}}></td>\n              <td (click)=\"Marcar(nuevoJuego.fichas[1])\"><img src={{nuevoJuego.fichas[1].foto}}></td>\n              <td (click)=\"Marcar(nuevoJuego.fichas[2])\"><img src={{nuevoJuego.fichas[2].foto}}></td>\n            </tr>\n            <tr>\n              <td (click)=\"Marcar(nuevoJuego.fichas[3])\"><img src={{nuevoJuego.fichas[3].foto}}></td>\n              <td (click)=\"Marcar(nuevoJuego.fichas[4])\"><img src={{nuevoJuego.fichas[4].foto}}></td>\n              <td (click)=\"Marcar(nuevoJuego.fichas[5])\"><img src={{nuevoJuego.fichas[5].foto}}></td>\n            </tr>\n            <tr>\n              <td (click)=\"Marcar(nuevoJuego.fichas[6])\"><img src={{nuevoJuego.fichas[6].foto}}></td>\n              <td (click)=\"Marcar(nuevoJuego.fichas[7])\"><img src={{nuevoJuego.fichas[7].foto}}></td>\n              <td (click)=\"Marcar(nuevoJuego.fichas[8])\"><img src={{nuevoJuego.fichas[8].foto}}></td>\n            </tr>\n\n          </form>\n  \n            <!-- <button (click)=\"MarcaMaquina()\"  class=\"btn_dark\">Eleccion CPU</button> -->\n            <button (click)=\"Reiniciar()\"  class=\"btn_dark\">Reiniciar</button>\n\n        </form>\n        <div id=\"snackbar\">{{mensajes}}</div>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/componentes/tateti/tateti.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TatetiComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clases_juego_tateti__ = __webpack_require__("../../../../../src/app/clases/juego-tateti.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Ficha_tateti } from '../../clases/ficha_tateti';
var TatetiComponent = (function () {
    function TatetiComponent() {
        this.enviarJuego = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.nuevoJuego = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_tateti__["a" /* Tateti */]();
        this.turnoActual = "jugador";
        this.juegoTerminado = false;
        this.marcaJugador = "circulo";
        this.tiempo = 2;
        this.elegirMarca = true;
    }
    TatetiComponent.prototype.ngOnInit = function () { };
    TatetiComponent.prototype.CambiarMarcador = function (marcador) {
        if (this.elegirMarca) {
            this.marcaJugador = marcador;
            this.elegirMarca = false;
        }
    };
    TatetiComponent.prototype.Reiniciar = function () {
        this.juegoTerminado = false;
        this.turnoActual = "jugador";
        this.MarcarVacio();
        this.elegirMarca = true;
    };
    TatetiComponent.prototype.MarcarVacio = function () {
        var fichas = this.nuevoJuego.fichas;
        for (var index = 0; index < fichas.length; index++) {
            fichas[index].CambiarFichaAVacia();
        }
    };
    TatetiComponent.prototype.Marcar = function (ficha) {
        if (this.turnoActual == "jugador" && this.juegoTerminado == false && ficha.estado == "vacio") {
            if (this.marcaJugador == "circulo")
                this.CambiarACirculo(ficha);
            else
                this.CambiarACruz(ficha);
            if (this.juegoTerminado == false) {
                this.turnoActual = "cpu";
                this.MarcaMaquina();
            }
        }
    };
    TatetiComponent.prototype.CambiarACirculo = function (ficha) {
        ficha.CambiarFichaACirculo();
        this.VerficarVictoria();
    };
    TatetiComponent.prototype.CambiarACruz = function (ficha) {
        ficha.CambiarFichaACruz();
        this.VerficarVictoria();
    };
    //muestra si alguno gano
    TatetiComponent.prototype.VerficarVictoria = function () {
        var fichas = this.nuevoJuego.fichas;
        var victoria = "";
        var estadoBuscado = "";
        // fichas[0].estado;
        for (var index = 0; index < 2; index++) {
            if (index == 0)
                estadoBuscado = "circulo";
            if (index == 1)
                estadoBuscado = "cruz";
            if (fichas[0].estado == estadoBuscado) {
                if (fichas[1].estado == estadoBuscado && fichas[2].estado == estadoBuscado)
                    victoria = estadoBuscado;
                else if (fichas[3].estado == estadoBuscado && fichas[6].estado == estadoBuscado)
                    victoria = estadoBuscado;
                else if (fichas[4].estado == estadoBuscado && fichas[8].estado == estadoBuscado)
                    victoria = estadoBuscado;
            }
            else if (fichas[4].estado == estadoBuscado) {
                if (fichas[3].estado == estadoBuscado && fichas[5].estado == estadoBuscado)
                    victoria = estadoBuscado;
                else if (fichas[1].estado == estadoBuscado && fichas[7].estado == estadoBuscado)
                    victoria = estadoBuscado;
                else if (fichas[2].estado == estadoBuscado && fichas[6].estado == estadoBuscado)
                    victoria = estadoBuscado;
            }
            else if (fichas[8].estado == estadoBuscado) {
                if (fichas[6].estado == estadoBuscado && fichas[7].estado == estadoBuscado)
                    victoria = estadoBuscado;
                else if (fichas[2].estado == estadoBuscado && fichas[5].estado == estadoBuscado)
                    victoria = estadoBuscado;
            }
        }
        if (victoria == this.marcaJugador) {
            this.MostarMensaje("Usted a ganado", true);
            this.nuevoJuego.gano = true;
            this.juegoTerminado = true;
        }
        else if (victoria != "") {
            this.MostarMensaje("Usted es un perdedor", false);
            this.nuevoJuego.gano = false;
            this.juegoTerminado = true;
        }
    };
    TatetiComponent.prototype.MarcaMaquina = function () {
        var _this = this;
        var fichas = this.nuevoJuego.fichas;
        var listaVacio = new Array();
        var numero = 0;
        for (var i = 0; i < fichas.length; i++) {
            if (fichas[i].estado == "vacio") {
                listaVacio.push(i);
            }
        }
        if (listaVacio.length > 0) {
            numero = Math.floor(Math.random() * listaVacio.length) + 0;
            this.repetidor = setInterval(function () {
                _this.tiempo--;
                if (_this.tiempo == 0) {
                    clearInterval(_this.repetidor);
                    _this.MarcarOpuesto(fichas[listaVacio[numero]]);
                    _this.tiempo = 2;
                }
            }, 1100);
        }
    };
    TatetiComponent.prototype.MarcarOpuesto = function (ficha) {
        if (this.juegoTerminado == false) {
            if (this.marcaJugador != "circulo")
                this.CambiarACirculo(ficha);
            else
                this.CambiarACruz(ficha);
            if (this.juegoTerminado == false) {
                this.turnoActual = "jugador";
            }
        }
    };
    TatetiComponent.prototype.MostarMensaje = function (mensaje, ganador) {
        if (mensaje === void 0) { mensaje = "este es el mensaje"; }
        if (ganador === void 0) { ganador = false; }
        this.mensajes = mensaje;
        var x = document.getElementById("snackbar");
        if (ganador) {
            x.className = "show Ganador";
        }
        else {
            x.className = "show Perdedor";
        }
        var modelo = this;
        setTimeout(function () {
            x.className = x.className.replace("show", "");
            // modelo.ocultarVerificar=false;
        }, 3000);
        console.info("objeto", x);
    };
    return TatetiComponent;
}());
TatetiComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-tateti',
        template: __webpack_require__("../../../../../src/app/componentes/tateti/tateti.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/tateti/tateti.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TatetiComponent);

//# sourceMappingURL=tateti.component.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/sexo.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SexoPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SexoPipe = (function () {
    function SexoPipe() {
    }
    SexoPipe.prototype.transform = function (value, args) {
        if (value = 'M') {
            return "machito";
        }
        else {
            return "señorita";
        }
    };
    return SexoPipe;
}());
SexoPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'sexo'
    })
], SexoPipe);

//# sourceMappingURL=sexo.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/ruteando/ruteando.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RuteandoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__componentes_adivina_el_numero_adivina_el_numero_component__ = __webpack_require__("../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__componentes_login_login_component__ = __webpack_require__("../../../../../src/app/componentes/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__componentes_error_error_component__ = __webpack_require__("../../../../../src/app/componentes/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__componentes_principal_principal_component__ = __webpack_require__("../../../../../src/app/componentes/principal/principal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__componentes_agilidad_aritmetica_agilidad_aritmetica_component__ = __webpack_require__("../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__componentes_listado_listado_component__ = __webpack_require__("../../../../../src/app/componentes/listado/listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__componentes_juegos_juegos_component__ = __webpack_require__("../../../../../src/app/componentes/juegos/juegos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__componentes_registro_registro_component__ = __webpack_require__("../../../../../src/app/componentes/registro/registro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__componentes_menu_card_menu_card_component__ = __webpack_require__("../../../../../src/app/componentes/menu-card/menu-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__componentes_quien_soy_quien_soy_component__ = __webpack_require__("../../../../../src/app/componentes/quien-soy/quien-soy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__componentes_listado_de_paises_listado_de_paises_component__ = __webpack_require__("../../../../../src/app/componentes/listado-de-paises/listado-de-paises.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__componentes_jugadores_listado_jugadores_listado_component__ = __webpack_require__("../../../../../src/app/componentes/jugadores-listado/jugadores-listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__componentes_piedra_papel_tijera_piedra_papel_tijera_component__ = __webpack_require__("../../../../../src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__componentes_anagrama_anagrama_component__ = __webpack_require__("../../../../../src/app/componentes/anagrama/anagrama.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__componentes_tateti_tateti_component__ = __webpack_require__("../../../../../src/app/componentes/tateti/tateti.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__componentes_blackjack7_blackjack7_component__ = __webpack_require__("../../../../../src/app/componentes/blackjack7/blackjack7.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// importo del module principal












// import { MapaDeGoogleComponent } from '../componentes/mapa-de-google/mapa-de-google.component'





// declaro donde quiero que se dirija
var MiRuteo = [
    { path: 'Jugadores', component: __WEBPACK_IMPORTED_MODULE_13__componentes_jugadores_listado_jugadores_listado_component__["a" /* JugadoresListadoComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__componentes_principal_principal_component__["a" /* PrincipalComponent */] },
    { path: 'Login', component: __WEBPACK_IMPORTED_MODULE_3__componentes_login_login_component__["a" /* LoginComponent */] },
    // {path: 'Mapa' , component: MapaDeGoogleComponent},
    { path: 'QuienSoy', component: __WEBPACK_IMPORTED_MODULE_11__componentes_quien_soy_quien_soy_component__["a" /* QuienSoyComponent */] },
    { path: 'Registro', component: __WEBPACK_IMPORTED_MODULE_9__componentes_registro_registro_component__["a" /* RegistroComponent */] },
    { path: 'Principal', component: __WEBPACK_IMPORTED_MODULE_5__componentes_principal_principal_component__["a" /* PrincipalComponent */] },
    { path: 'Listado', component: __WEBPACK_IMPORTED_MODULE_7__componentes_listado_listado_component__["a" /* ListadoComponent */] },
    { path: 'Paises', component: __WEBPACK_IMPORTED_MODULE_12__componentes_listado_de_paises_listado_de_paises_component__["a" /* ListadoDePaisesComponent */] },
    { path: 'Juegos',
        component: __WEBPACK_IMPORTED_MODULE_8__componentes_juegos_juegos_component__["a" /* JuegosComponent */],
        children: [{ path: '', component: __WEBPACK_IMPORTED_MODULE_10__componentes_menu_card_menu_card_component__["a" /* MenuCardComponent */] },
            { path: 'Adivina', component: __WEBPACK_IMPORTED_MODULE_2__componentes_adivina_el_numero_adivina_el_numero_component__["a" /* AdivinaElNumeroComponent */] },
            // {path: 'AdivinaMasListado' , component: AdivinaMasListadoComponent},
            // {path: 'AgilidadaMasListado' , component: AgilidadMasListadoComponent},
            { path: 'Agilidad', component: __WEBPACK_IMPORTED_MODULE_6__componentes_agilidad_aritmetica_agilidad_aritmetica_component__["a" /* AgilidadAritmeticaComponent */] },
            { path: 'PiedraPapelTijera', component: __WEBPACK_IMPORTED_MODULE_14__componentes_piedra_papel_tijera_piedra_papel_tijera_component__["a" /* PiedraPapelTijeraComponent */] },
            { path: 'Anagrama', component: __WEBPACK_IMPORTED_MODULE_15__componentes_anagrama_anagrama_component__["a" /* AnagramaComponent */] },
            { path: 'Tateti', component: __WEBPACK_IMPORTED_MODULE_16__componentes_tateti_tateti_component__["a" /* TatetiComponent */] },
            { path: 'Blackjack7', component: __WEBPACK_IMPORTED_MODULE_17__componentes_blackjack7_blackjack7_component__["a" /* Blackjack7Component */] }
        ]
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_4__componentes_error_error_component__["a" /* ErrorComponent */] },
    { path: 'error', component: __WEBPACK_IMPORTED_MODULE_4__componentes_error_error_component__["a" /* ErrorComponent */] }
];
var RuteandoModule = (function () {
    function RuteandoModule() {
    }
    return RuteandoModule;
}());
RuteandoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(MiRuteo)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
        ]
    })
], RuteandoModule);

//# sourceMappingURL=ruteando.module.js.map

/***/ }),

/***/ "../../../../../src/app/servicios/archivos-jugadores.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArchivosJugadoresService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mi_http_mi_http_service__ = __webpack_require__("../../../../../src/app/servicios/mi-http/mi-http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArchivosJugadoresService = (function () {
    function ArchivosJugadoresService(miHttp) {
        this.miHttp = miHttp;
        this.api = "http://localhost:8080/jugadoresarchivo/apirestjugadores/";
    }
    ArchivosJugadoresService.prototype.traerJugadores = function (ruta) {
        return this.miHttp.httpGetO(this.api + ruta)
            .toPromise()
            .then(function (data) {
            console.log("Archivo jugadores");
            // console.log( data );
            return data;
        }, function (err) {
            console.log(err);
        });
    };
    return ArchivosJugadoresService;
}());
ArchivosJugadoresService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__mi_http_mi_http_service__["a" /* MiHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__mi_http_mi_http_service__["a" /* MiHttpService */]) === "function" && _a || Object])
], ArchivosJugadoresService);

var _a;
//# sourceMappingURL=archivos-jugadores.service.js.map

/***/ }),

/***/ "../../../../../src/app/servicios/juego-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__ = __webpack_require__("../../../../../src/app/clases/juego-adivina.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mi_http_mi_http_service__ = __webpack_require__("../../../../../src/app/servicios/mi-http/mi-http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JuegoServiceService = (function () {
    function JuegoServiceService(miHttp) {
        this.miHttp = miHttp;
        this.peticion = this.miHttp.httpGetO("http://localhost:3003");
        //    this.peticion = this.miHttp.httpGetO("https://restcountries.eu/rest/v2/all");
    }
    JuegoServiceService.prototype.listar = function () {
        this.miHttp.httpGetP("https://restcountries.eu/rest/v2/all")
            .then(function (data) {
            console.log(data);
        })
            .catch(function (err) {
            console.log(err);
        });
        this.peticion
            .subscribe(function (data) {
            console.log("En listar");
            console.log(data);
        }, function (err) {
            console.info("error: ", err);
        });
        var miArray = new Array();
        miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("Juego 1", false));
        miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("Pepe", true));
        miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("Juego 3", false));
        miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("Juego 4", false));
        miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("Juego 5", false));
        miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("Juego 6", false));
        return miArray;
    };
    JuegoServiceService.prototype.listarPromesa = function () {
        this.peticion
            .subscribe(function (data) {
            console.log("En listarPromesa");
            console.log(data);
        }, function (err) {
            console.log(err);
        });
        var promesa = new Promise(function (resolve, reject) {
            var miArray = new Array();
            miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("JuegoPromesa 1", false, "promesa"));
            miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("PepePromesa", true));
            miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("JuegoPromesa 3", false));
            miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("JuegoPromesa 4", false));
            miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("JuegoPromesa 5", false));
            miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("JuegoPromesa 6", false));
            resolve(miArray);
        });
        return promesa;
    };
    return JuegoServiceService;
}());
JuegoServiceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__mi_http_mi_http_service__["a" /* MiHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__mi_http_mi_http_service__["a" /* MiHttpService */]) === "function" && _a || Object])
], JuegoServiceService);

var _a;
//# sourceMappingURL=juego-service.service.js.map

/***/ }),

/***/ "../../../../../src/app/servicios/jugadores.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JugadoresService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__archivos_jugadores_service__ = __webpack_require__("../../../../../src/app/servicios/archivos-jugadores.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JugadoresService = (function () {
    //peticion:any;
    function JugadoresService(miHttp) {
        this.miHttp = miHttp;
        // this.peticion = this.miHttp.traerJugadores();
        //    this.peticion = this.miHttp.httpGetO("https://restcountries.eu/rest/v2/all");
    }
    JugadoresService.prototype.traertodos = function (ruta, filtro) {
        var _this = this;
        return this.miHttp.traerJugadores(ruta).then(function (data) {
            console.info("jugadores service", data);
            _this.filtrado = data;
            var ganador;
            if (filtro == "ganadores") {
                ganador = true;
            }
            else {
                ganador = false;
            }
            _this.filtrado = _this.filtrado.filter(function (data) { return data.gano === ganador || filtro == "todos"; });
            return _this.filtrado;
        })
            .catch(function (errror) {
            console.log("error");
            return _this.filtrado;
        });
    };
    return JugadoresService;
}());
JugadoresService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__archivos_jugadores_service__["a" /* ArchivosJugadoresService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__archivos_jugadores_service__["a" /* ArchivosJugadoresService */]) === "function" && _a || Object])
], JugadoresService);

var _a;
//# sourceMappingURL=jugadores.service.js.map

/***/ }),

/***/ "../../../../../src/app/servicios/mi-http/mi-http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiHttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MiHttpService = (function () {
    function MiHttpService(http) {
        this.http = http;
    }
    MiHttpService.prototype.httpGetP = function (url) {
        return this.http
            .get(url)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    MiHttpService.prototype.httpPostP = function (url, objeto) {
        return this.http
            .get(url)
            .subscribe(function (data) {
            console.log(data);
            return data;
        });
    };
    MiHttpService.prototype.httpGetO = function (url) {
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(err.json().error || 'Server error'); });
    };
    MiHttpService.prototype.extractData = function (res) {
        return res.json() || {};
    };
    MiHttpService.prototype.handleError = function (error) {
        return error;
    };
    return MiHttpService;
}());
MiHttpService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], MiHttpService);

var _a;
//# sourceMappingURL=mi-http.service.js.map

/***/ }),

/***/ "../../../../../src/app/servicios/paises.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaisesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mi_http_mi_http_service__ = __webpack_require__("../../../../../src/app/servicios/mi-http/mi-http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaisesService = (function () {
    function PaisesService(miHttp) {
        this.miHttp = miHttp;
    }
    PaisesService.prototype.listar = function () {
        return this.miHttp.httpGetP("https://restcountries.eu/rest/v2/all")
            .then(function (data) {
            console.log(data);
            return data;
        })
            .catch(function (err) {
            console.log(err);
            return null;
        });
        //return null;
    };
    return PaisesService;
}());
PaisesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__mi_http_mi_http_service__["a" /* MiHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__mi_http_mi_http_service__["a" /* MiHttpService */]) === "function" && _a || Object])
], PaisesService);

var _a;
//# sourceMappingURL=paises.service.js.map

/***/ }),

/***/ "../../../../../src/assets/img/boton_empty.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "boton_empty.e554e30fd194b6f2eae9.png";

/***/ }),

/***/ "../../../../../src/assets/img/boton_engithub.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "boton_engithub.dbddb92e144910602d21.png";

/***/ }),

/***/ "../../../../../src/assets/img/boton_jugar2.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "boton_jugar2.795d361fbf3ad36931f7.png";

/***/ }),

/***/ "../../../../../src/assets/img/boton_quiensoy.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "boton_quiensoy.e6e56e5e7e8c28dbebbc.png";

/***/ }),

/***/ "../../../../../src/assets/img/menu_principal_img.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "menu_principal_img.a26d49401bb0dc8a61c8.png";

/***/ }),

/***/ "../../../../../src/assets/img/nurse_mod2.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "nurse_mod2.ec575a7cdc845a8b56ac.png";

/***/ }),

/***/ "../../../../../src/assets/img/tateti_base.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAADcCAYAAAAbWs+BAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAATQSURBVHhe7dzRUtpKAMfhBKlDZ7jgKfCi5yH6/u8hD6BoEYEcd82pZ5RS2wn/Tuz3jTuTJTN6sfxigJC2a5qnHyChBvfPly/NdDrtHwKGtNlsmtvb2+Z6tWom5YHHx8dmt9vVncBw7u/va2z/qcEVooNh3dzcNHd3d/3s2ffgCtHBMEpsDw8P/exFfQ13tVz20xdd570U+B3lH9d2u+1nL8pruKPB7fd7wcFvKmeJx84Uv79pAmQIDoIEB0GCgyDBQZDgIEhwECQ4CBIcBAkOggQHQYKDIMFBkOAgSHAQJDgIEhwEnf0b3x/l2+PvvY3g4XCoY+wuLi6atm372Y+VtS1rPHaTyaSOIZz6xvfZg1uv1x/ixkSLxaLfOq3cg7CMsZvP5+86yJS1LWs8drPZrI4hnArOKSUECQ6CBAdBgoMgwUGQ4CBIcBAkOAgSHAQJDoIEB0GCgyDBQZDgIEhwECQ4CBIcBAkOggQHQYKDIMFBkOAgSHAQJDgIEhwECQ6CBAdBgoMgwUGQ4CBIcBAkOAgSHAQJDoIEB0GCgyDBQZDgIEhwECQ4CBIcBAkOggQHQYKDIMFBkOAgSHAQJDgIarum6a6Wy376bL/fN133tGcA2+22ORwO/Wy8ZrNZv3XabrerY+wuLy+byeTnx+OytmWNx246ndYxhB89B65Xq/MHB3+bU8E5pYQgwUGQ4CBIcBAkOAgSHAQJDoIEB0GuNHknV5oc50qTt0598H324Nbr9Yd4Ai4Wi37rtM1mU8fYzefzdz0By9qWNR67ckB970H1Z04F55QSggQHQYKDIMFBkOAgSHAQJDgIEhwECQ6CBAdBgoMgwUGQ4CBIcBAkOAgSHAQJDoIEB0GCgyDBQZDgIEhwECQ4CBIcBAkOggQHQYKDIMFBkOAgSHAQJDgIEhwECQ6CBAdBgoMgwUGQ4CBIcBAkOAgSHAQJDoIEB0GCgyDBQZDgIEhwECQ4CBIcBLVd03RXy2U/fbbf75uue9ozgCF/1580nU77rdMOh0MdY3dxcdG0bdvPfqysbVnjsZtMJnUMYbfb1fHa9Wp1/uDgb3MqOKeUECQ4CBIcBAkOggQHQYKDIMFBkOAg6OwffH/79u1DXIkwn8/7rdO2220dY/f58+d6tcnPlLUtazx2l5eXdQzhj15psl6vj/7xsVksFv3WaZvNpo6xKweY91zOVta2rPHYzWazOoZwKjinlBAkOAgSHAQJDoIEB0GCgyDBQZDgIEhwECQ4CBIcBAkOggQHQYKDIMFBkOAgSHAQJDgIEhwECQ6CBAdBgoMgwUGQ4CBIcBAkOAgSHAQJDoIEB0GCgyDBQZDgIEhwECQ4CBIcBAkOggQHQYKDIMFBkOAgSHAQJDgIEhwECQ6CBAdBgoMgwUGQ4CCo7Zqmu1ou++mz/X7fdN3THuCX7Xa7Ol67Xq38h4MkwUGQ4CBIcBAkOAgSHAQJDoIEB0GCgyDBQZDgIEhwECQ4CBIcBAkOggQHQYKDIMFB0NFbLNzd3TWHw6GfAb+qbdt+60W5xcKb4G5ubpqHh4d+BvyOT58+NdPptJ89e3NPE7HBMB4fH4/eSOh7cPf392KDAR2Lrga32Wzq6zZgWK+jq8Hd3t7WCTC8/0dX3zSpW8B5ff3a/AsrDt+02NH7JwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map