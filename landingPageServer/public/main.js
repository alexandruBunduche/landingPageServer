(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-landing-page></app-landing-page>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'daleLandingPage';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _views_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/landing-page/landing-page.component */ "./src/app/views/landing-page/landing-page.component.ts");
/* harmony import */ var _views_landing_page_landing_form_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/landing-page/landing-form/calendar/calendar.component */ "./src/app/views/landing-page/landing-form/calendar/calendar.component.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _views_landing_page_landing_form_landing_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/landing-page/landing-form/landing-form.component */ "./src/app/views/landing-page/landing-form/landing-form.component.ts");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/main.service */ "./src/app/services/main.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _views_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_5__["LandingPageComponent"],
                _views_landing_page_landing_form_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_6__["CalendarComponent"],
                _views_landing_page_landing_form_landing_form_component__WEBPACK_IMPORTED_MODULE_10__["LandingFormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__["InputTextModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_main_service__WEBPACK_IMPORTED_MODULE_11__["MainService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/services/main.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/main.service.ts ***!
  \******************************************/
/*! exports provided: MainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainService", function() { return MainService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var getQualificationsURL = 'http://192.168.7.175:3000/qualifications';
var postCandidateURL = 'http://192.168.7.175:3000/candidate';
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var MainService = /** @class */ (function () {
    function MainService(httpClient) {
        this.httpClient = httpClient;
    }
    MainService.prototype.getQualifications = function () {
        return this.httpClient.get(getQualificationsURL);
    };
    MainService.prototype.postCandidate = function (candidate) {
        return this.httpClient.post(postCandidateURL, candidate, httpOptions);
    };
    MainService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MainService);
    return MainService;
}());



/***/ }),

/***/ "./src/app/views/landing-page/landing-form/calendar/calendar.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/views/landing-page/landing-form/calendar/calendar.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/landing-page/landing-form/calendar/calendar.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/views/landing-page/landing-form/calendar/calendar.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-calendar   id=\"calendar\"\n              [(ngModel)] = \"birthDate\"\n              [monthNavigator]=\"true\"\n              [yearNavigator]=\"true\"\n              yearRange=\"{{'1935:'+( currentYear | date:'yyyy')}}\"\n              [maxDate]=\"currentYear\"\n              [locale]=\"it\" dateFormat=\"dd/mm/yy\"\n              placeholder=\"Data di nascita\"\n              showIcon=\"true\"\n              [touchUI]=\"isTouchDevice()\"\n              (onSelect)=\"onSelect($event)\"\n              [ngClass]=\"{'invalid':!isValid}\"\n              (onInput)=\"onSelect($event)\"\n              [readonlyInput]=\"true\"\n              ng-init=\"onLoad()\"\n\n  ></p-calendar>\n"

/***/ }),

/***/ "./src/app/views/landing-page/landing-form/calendar/calendar.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/views/landing-page/landing-form/calendar/calendar.component.ts ***!
  \********************************************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalendarComponent = /** @class */ (function () {
    function CalendarComponent() {
        this.isValid = true;
        this.currentYear = new Date(Date.now());
    }
    CalendarComponent_1 = CalendarComponent;
    CalendarComponent.prototype.ngOnInit = function () {
        this.it = {
            firstDayOfWeek: 1,
            dayNames: ['Domenica', 'Lunedi', 'Martedi', 'Mercoledi', 'Giovedi', 'Venerdi', 'Sabato'],
            dayNamesShort: ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab'],
            dayNamesMin: ['D', 'L', 'M', 'M', 'G', 'V', 'S'],
            monthNames: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
            monthNamesShort: ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic'],
            today: 'Oggi',
            clear: 'Pulisci'
        };
    };
    CalendarComponent.prototype.ngAfterContentChecked = function () {
        this.txtElement = document.getElementById('calendar').children[0].children[0];
        this.btnElement = document.getElementById('calendar').children[0].children[1];
        this.calendarElement = document.getElementById('calendar');
        if (this.txtElement !== undefined) {
            if (this.txtElement.style.borderBottomColor !== '') {
                Object.assign(this.defaultBorderColor, this.txtElement.style.borderBottomColor);
            }
            else {
                this.defaultBorderColor = '';
            }
            console.log('def is ' + this.defaultBorderColor);
        }
    };
    CalendarComponent.prototype.isTouchDevice = function () {
        return 'ontouchstart' in window;
    };
    CalendarComponent.prototype.registerOnChange = function (onChange) {
        this.onChange = onChange;
    };
    CalendarComponent.prototype.registerOnTouched = function (fn) {
    };
    CalendarComponent.prototype.setDisabledState = function (isDisabled) {
    };
    CalendarComponent.prototype.writeValue = function (obj) {
    };
    CalendarComponent.prototype.onSelect = function (date) {
        this.onChange(date.toLocaleString());
    };
    Object.defineProperty(CalendarComponent.prototype, "isIValid", {
        set: function (isValid) {
            this.isValid = isValid;
            if (isValid) {
                this.setValidStile();
            }
            else {
                this.setInvalidStile();
            }
            console.log(isValid);
        },
        enumerable: true,
        configurable: true
    });
    CalendarComponent.prototype.setInvalidStile = function () {
        if (this.txtElement !== undefined) {
            this.txtElement.style.borderBottomColor = 'red';
            this.txtElement.style.borderTopColor = 'red';
            this.txtElement.style.borderLeftColor = 'red';
        }
        if (this.btnElement !== undefined) {
            this.btnElement.style.borderBottomColor = 'red';
            this.btnElement.style.borderTopColor = 'red';
            this.btnElement.style.borderRightColor = 'red';
        }
    };
    CalendarComponent.prototype.setValidStile = function () {
        if (this.txtElement !== undefined) {
            this.txtElement.style.borderBottomColor = this.defaultBorderColor;
            this.txtElement.style.borderTopColor = this.defaultBorderColor;
            this.txtElement.style.borderLeftColor = this.defaultBorderColor;
        }
        if (this.btnElement !== undefined) {
            this.btnElement.style.borderBottomColor = this.defaultBorderColor;
            this.btnElement.style.borderTopColor = this.defaultBorderColor;
            this.btnElement.style.borderRightColor = this.defaultBorderColor;
        }
        console.log(this.defaultBorderColor);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], CalendarComponent.prototype, "isIValid", null);
    CalendarComponent = CalendarComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calendar',
            template: __webpack_require__(/*! ./calendar.component.html */ "./src/app/views/landing-page/landing-form/calendar/calendar.component.html"),
            styles: [__webpack_require__(/*! ./calendar.component.css */ "./src/app/views/landing-page/landing-form/calendar/calendar.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return CalendarComponent_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], CalendarComponent);
    return CalendarComponent;
    var CalendarComponent_1;
}());



/***/ }),

/***/ "./src/app/views/landing-page/landing-form/landing-form.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/views/landing-page/landing-form/landing-form.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#sbmtBtn{\n\n  width: 100px;\n  margin: auto;\n}\n\n#sbmtBtnDiv{\n\n  display: flex;\n  justify-content: center;\n  margin: 80px 0 0 0;\n}\n\n.inputIntestation{\n\n   display: flex;\n   position: relative;\n\n }\n\n.errorContainer{\n  max-width: 350px;\n  align-self: flex-end;\n  color: red;\n  position: absolute;\n  right: 0px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n}\n\n.errorIcon{\n  position: relative;\n  left: -10px;\n  bottom: -2px;\n}\n\n.error{\n\n}\n\n.invalid{\n  display: block;\n  border: 1px solid red;\n  border-radius: 3.5px;\n}\n\n#birthDateForm{\n}\n"

/***/ }),

/***/ "./src/app/views/landing-page/landing-form/landing-form.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/views/landing-page/landing-form/landing-form.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"mainContainer\" class=\" \">\n\n  <form class=\"form jumbotron\" [formGroup]=\"formGroup\">\n\n\n    <div class=\"form-group\" >\n      <div class=\"inputIntestation\">\n        <label id=\"nameLabel\" for=\"nameInput\">Nome</label>\n        <div *ngIf=\"f.nameValidator.invalid && submited\" class=\"errorContainer\">\n          <i class=\"errorIcon fas fa-exclamation-circle\"></i>\n          <div class=\"error\">necessario</div>\n        </div>\n      </div>\n\n      <input type=\"text\" id=\"nameInput\" [ngClass]=\"{'form-control': true, 'is-invalid': f.nameValidator.invalid && submited}\"\n             formControlName=\"nameValidator\"\n             placeholder=\"Inserisci qui il tuo nome\"/>\n    </div>\n\n\n\n    <div class=\"form-group\" >\n      <div class=\"inputIntestation\">\n        <label id=\"surnameLabel\" for=\"surnameInput\">Cognome</label>\n        <div *ngIf=\"f.surnameValidator.invalid && submited\" class=\"errorContainer\">\n          <i class=\"errorIcon fas fa-exclamation-circle\"></i>\n          <div class=\"error\">necessario</div>\n        </div>\n      </div>\n\n      <input type=\"text\" id=\"surnameInput\" [ngClass]=\"{'form-control': true, 'is-invalid': f.surnameValidator.invalid && submited}\"\n             formControlName=\"surnameValidator\"\n             placeholder=\"Inserisci qui il tuo cognome\"/>\n    </div>\n\n\n    <div class=\"form-group\" >\n      <div class=\"inputIntestation\">\n        <label id=\"emailLabel\" for=\"emailInput\">E-mail</label>\n        <div *ngIf=\"f.emailValidator.invalid && submited\" class=\"errorContainer\">\n          <i class=\"errorIcon fas fa-exclamation-circle\"></i>\n          <div class=\"error\">necessario</div>\n        </div>\n      </div>\n\n      <input type=\"text\" id=\"emailInput\" [ngClass]=\"{'form-control': true, 'is-invalid': f.emailValidator.invalid && submited}\"\n             formControlName=\"emailValidator\"\n             placeholder=\"Inserisci qui la tua e-mail\"/>\n    </div>\n\n\n    <div class=\"form-group\" id=\"birthDateForm\">\n      <div class=\"inputIntestation\">\n        <label id=\"birthDateLabel\" for=\"birthDateInput\">Data di nascita</label>\n        <div *ngIf=\"f.birthDateValidator.invalid && submited\" class=\"errorContainer\">\n          <i class=\"errorIcon fas fa-exclamation-circle\"></i>\n          <div class=\"error\">necessario</div>\n        </div>\n      </div>\n\n      <app-calendar id=\"birthDateInput\" formControlName=\"birthDateValidator\" [isIValid]=\"submited? !f.birthDateValidator.invalid : true \"></app-calendar>\n    </div>\n\n\n    <div class=\"form-group\"  >\n      <div class=\"inputIntestation\">\n        <label id=\"qualificationLabel\" for=\"qualificationInput\">Titolo di studio</label>\n        <div *ngIf=\"f.qualificationValidator.invalid && submited\" class=\"errorContainer\">\n          <i class=\"errorIcon fas fa-exclamation-circle\"></i>\n          <div class=\"error\">necessario</div>\n        </div>\n      </div>\n\n      <select id=\"qualificationInput\" formControlName=\"qualificationValidator\" [ngClass]=\"{'form-control': true, 'is-invalid': f.qualificationValidator.invalid && submited}\">\n        <option value=\"\" disabled=\"true\">Seleziona titolo di studio...</option>\n        <option *ngFor=\"let titoloStudio of qualifications\" value=\"{{titoloStudio.Id}}\">{{titoloStudio.Titolo}}</option>\n      </select>\n    </div>\n\n    <div id=\"sbmtBtnDiv\">\n      <button id=\"sbmtBtn\" (click)=\"btnclk()\" class=\"btn btn-dark\">Invia</button>\n    </div>\n\n  </form>\n</div>\n\n"

/***/ }),

/***/ "./src/app/views/landing-page/landing-form/landing-form.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/views/landing-page/landing-form/landing-form.component.ts ***!
  \***************************************************************************/
/*! exports provided: LandingFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingFormComponent", function() { return LandingFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/main.service */ "./src/app/services/main.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LandingFormComponent = /** @class */ (function () {
    function LandingFormComponent(formBuilder, mainService) {
        this.formBuilder = formBuilder;
        this.mainService = mainService;
        this.submited = false;
    }
    LandingFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('landing-form : init()');
        this.formGroup = this.formBuilder.group({
            nameValidator: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            surnameValidator: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            emailValidator: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            birthDateValidator: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            qualificationValidator: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.mainService.getQualifications().subscribe(function (qualifications) { _this.qualifications = qualifications; console.log('qualifications', _this.qualifications); });
    };
    Object.defineProperty(LandingFormComponent.prototype, "f", {
        get: function () {
            return this.formGroup.controls;
        },
        enumerable: true,
        configurable: true
    });
    LandingFormComponent.prototype.btnclk = function () {
        this.submited = true;
        if (!this.formGroup.invalid) {
            console.log('valid value ', this.getCandidate());
            this.mainService.postCandidate(this.getCandidate()).subscribe();
        }
    };
    LandingFormComponent.prototype.getCandidate = function () {
        return {
            Nome: this.formGroup.controls.nameValidator.value,
            Cognome: this.formGroup.controls.surnameValidator.value,
            Email: this.formGroup.controls.emailValidator.value,
            DataDiNascita: this.formGroup.controls.birthDateValidator.value,
            TitoloDiStudio: this.formGroup.controls.qualificationValidator.value
        };
    };
    LandingFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing-form',
            template: __webpack_require__(/*! ./landing-form.component.html */ "./src/app/views/landing-page/landing-form/landing-form.component.html"),
            styles: [__webpack_require__(/*! ./landing-form.component.css */ "./src/app/views/landing-page/landing-form/landing-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]])
    ], LandingFormComponent);
    return LandingFormComponent;
}());



/***/ }),

/***/ "./src/app/views/landing-page/landing-page.component.css":
/*!***************************************************************!*\
  !*** ./src/app/views/landing-page/landing-page.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/landing-page/landing-page.component.html":
/*!****************************************************************!*\
  !*** ./src/app/views/landing-page/landing-page.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"http://www.daleconsulting.it/immagini/dale-consulting-logo.png\"/>\n<app-landing-form></app-landing-form>\n"

/***/ }),

/***/ "./src/app/views/landing-page/landing-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/landing-page/landing-page.component.ts ***!
  \**************************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent() {
    }
    LandingPageComponent.prototype.ngOnInit = function () {
    };
    LandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing-page',
            template: __webpack_require__(/*! ./landing-page.component.html */ "./src/app/views/landing-page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ./landing-page.component.css */ "./src/app/views/landing-page/landing-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dale\eclipse-workspace\git\daleLandingPage\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map