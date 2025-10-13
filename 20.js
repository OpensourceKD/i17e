(self["webpackChunkshell"] = self["webpackChunkshell"] || []).push([[20],{

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_i17e_code_i17e_code_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3319);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 5315);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3793);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4866);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _configs_mfe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../configs/mfe */ 7412);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ 385);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/footer/footer.component */ 5473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 5565);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/authentication.service */ 9214);
/* harmony import */ var _org_core_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @org/core-services */ 8662);
/* harmony import */ var _org_core_services__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_org_core_services__WEBPACK_IMPORTED_MODULE_10__);












/**
 * Root application component
 * Initializes MFE configuration and manages authentication callback
 */
let AppComponent = /*#__PURE__*/(() => {
  class AppComponent {
    constructor(auth2, auth, route, router, roleService, mfeLoader) {
      this.auth2 = auth2;
      this.auth = auth;
      this.route = route;
      this.router = router;
      this.roleService = roleService;
      this.mfeLoader = mfeLoader;
      this.title = 'Incentive Management System';
      // Initialize MFE configs
      this.mfeLoader.setConfigs(_configs_mfe__WEBPACK_IMPORTED_MODULE_5__.MFE_CONFIGS);
    }
    ngOnInit() {
      var _this = this;
      return (0,_home_runner_work_i17e_code_i17e_code_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        // Use window.location.search for hash-based routing fallback
        let code = null;
        let state = null;
        let error = null;
        // Try Angular queryParams first
        const params = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(_this.route.queryParams);
        if (params && Object.keys(params).length > 0) {
          code = params['code'] ?? null;
          state = params['state'] ?? null;
          error = params['error'] ?? null;
        } else {
          // Fallback for hash-based routing: parse window.location.search
          const urlParams = new URLSearchParams(window.location.search);
          code = urlParams.get('code');
          state = urlParams.get('state');
          error = urlParams.get('error');
        }
        // Auth callback handling - navigation commented out as per requirements
        // if (error) {
        //   console.error('Authentication failed:', error);
        //   // TODO: Uncomment when ready - setTimeout(() => this.router.navigate(['/']), 3000);
        //   return;
        // }
        // if (code && state) {
        //   try {
        //     const success = await this.auth.handleCallback(code, state);
        //     if (success) {
        //       console.log('Authentication successful');
        //       // TODO: Uncomment when ready - setTimeout(() => this.router.navigate(['/']), 1500);
        //     } else {
        //       console.error('Authentication failed');
        //       // TODO: Uncomment when ready - setTimeout(() => this.router.navigate(['/']), 3000);
        //     }
        //   } catch (e) {
        //     console.error('Authentication failed (exception):', e);
        //     // TODO: Uncomment when ready - setTimeout(() => this.router.navigate(['/']), 3000);
        //   }
        // }
      })();
    }
    static {
      this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_org_core_services__WEBPACK_IMPORTED_MODULE_10__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_org_core_services__WEBPACK_IMPORTED_MODULE_10__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_org_core_services__WEBPACK_IMPORTED_MODULE_10__.MfeLoaderService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
        decls: 5,
        vars: 0,
        consts: [[1, "app-container"], [1, "app-content"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "main", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "app-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          }
        },
        dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__.HeaderComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__.FooterComponent],
        styles: ["[_nghost-%COMP%] {\n  --bright-blue: oklch(51.01% 0.274 263.83);\n  --electric-violet: oklch(53.18% 0.28 296.97);\n  --french-violet: oklch(47.66% 0.246 305.88);\n  --vivid-pink: oklch(69.02% 0.277 332.77);\n  --hot-red: oklch(61.42% 0.238 15.34);\n  --orange-red: oklch(63.32% 0.24 31.68);\n  --gray-900: oklch(19.37% 0.006 300.98);\n  --gray-700: oklch(36.98% 0.014 302.71);\n  --gray-400: oklch(70.9% 0.015 304.04);\n  --red-to-pink-to-purple-vertical-gradient: linear-gradient(\n    180deg,\n    var(--orange-red) 0%,\n    var(--vivid-pink) 50%,\n    var(--electric-violet) 100%\n  );\n  --red-to-pink-to-purple-horizontal-gradient: linear-gradient(\n    90deg,\n    var(--orange-red) 0%,\n    var(--vivid-pink) 50%,\n    var(--electric-violet) 100%\n  );\n  --pill-accent: var(--bright-blue);\n  font-family: \"Inter\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.app-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\n.app-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 2rem;\n  background: #f5f5f5;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFFO0VBQ0UseUNBQUE7RUFDQSw0Q0FBQTtFQUNBLDJDQUFBO0VBQ0Esd0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHNDQUFBO0VBRUEsc0NBQUE7RUFDQSxzQ0FBQTtFQUNBLHFDQUFBO0VBRUE7Ozs7O0dBQUE7RUFPQTs7Ozs7R0FBQTtFQU9BLGlDQUFBO0VBRUEsbUtBQUE7RUFHQSxzQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7QUFOSjs7QUFTQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBTkY7O0FBU0E7RUFDRSxPQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBTkYiLCJzb3VyY2VzQ29udGVudCI6WyIgIDpob3N0IHtcbiAgICAtLWJyaWdodC1ibHVlOiBva2xjaCg1MS4wMSUgMC4yNzQgMjYzLjgzKTtcbiAgICAtLWVsZWN0cmljLXZpb2xldDogb2tsY2goNTMuMTglIDAuMjggMjk2Ljk3KTtcbiAgICAtLWZyZW5jaC12aW9sZXQ6IG9rbGNoKDQ3LjY2JSAwLjI0NiAzMDUuODgpO1xuICAgIC0tdml2aWQtcGluazogb2tsY2goNjkuMDIlIDAuMjc3IDMzMi43Nyk7XG4gICAgLS1ob3QtcmVkOiBva2xjaCg2MS40MiUgMC4yMzggMTUuMzQpO1xuICAgIC0tb3JhbmdlLXJlZDogb2tsY2goNjMuMzIlIDAuMjQgMzEuNjgpO1xuXG4gICAgLS1ncmF5LTkwMDogb2tsY2goMTkuMzclIDAuMDA2IDMwMC45OCk7XG4gICAgLS1ncmF5LTcwMDogb2tsY2goMzYuOTglIDAuMDE0IDMwMi43MSk7XG4gICAgLS1ncmF5LTQwMDogb2tsY2goNzAuOSUgMC4wMTUgMzA0LjA0KTtcblxuICAgIC0tcmVkLXRvLXBpbmstdG8tcHVycGxlLXZlcnRpY2FsLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAxODBkZWcsXG4gICAgICB2YXIoLS1vcmFuZ2UtcmVkKSAwJSxcbiAgICAgIHZhcigtLXZpdmlkLXBpbmspIDUwJSxcbiAgICAgIHZhcigtLWVsZWN0cmljLXZpb2xldCkgMTAwJVxuICAgICk7XG5cbiAgICAtLXJlZC10by1waW5rLXRvLXB1cnBsZS1ob3Jpem9udGFsLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICA5MGRlZyxcbiAgICAgIHZhcigtLW9yYW5nZS1yZWQpIDAlLFxuICAgICAgdmFyKC0tdml2aWQtcGluaykgNTAlLFxuICAgICAgdmFyKC0tZWxlY3RyaWMtdmlvbGV0KSAxMDAlXG4gICAgKTtcblxuICAgIC0tcGlsbC1hY2NlbnQ6IHZhcigtLWJyaWdodC1ibHVlKTtcblxuICAgIGZvbnQtZmFtaWx5OiBcIkludGVyXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sXG4gICAgICBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIixcbiAgICAgIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICB9XG5cbi5hcHAtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi5hcHAtY29udGVudCB7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
      });
    }
  }
  return AppComponent;
})();

/***/ }),

/***/ 2181:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _guards_role_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/role.guard */ 5458);
/* harmony import */ var _pages_rules_page_rules_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/rules-page/rules-page.component */ 9127);
/* harmony import */ var _pages_sales_page_sales_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/sales-page/sales-page.component */ 1889);
/* harmony import */ var _pages_reports_page_reports_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/reports-page/reports-page.component */ 8967);




/**
 * Application routes with role-based access control
 * Each route is protected by guards that check user roles against MFE allowedRoles
 */
const routes = [{
  path: 'rules',
  component: _pages_rules_page_rules_page_component__WEBPACK_IMPORTED_MODULE_1__.RulesPageComponent,
  canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_0__.adminGuard]
}, {
  path: 'sales',
  component: _pages_sales_page_sales_page_component__WEBPACK_IMPORTED_MODULE_2__.SalesPageComponent,
  canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_0__.allRolesGuard]
}, {
  path: 'reports',
  component: _pages_reports_page_reports_page_component__WEBPACK_IMPORTED_MODULE_3__.ReportsPageComponent,
  canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_0__.allRolesGuard]
}, {
  path: '**',
  redirectTo: '',
  pathMatch: 'full'
}];

/***/ }),

/***/ 5473:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 5565);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Footer component for the application
 */
let FooterComponent = /*#__PURE__*/(() => {
  class FooterComponent {
    constructor() {
      this.currentYear = new Date().getFullYear();
    }
    static {
      this.ɵfac = function FooterComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || FooterComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 3,
        vars: 1,
        consts: [[1, "app-footer"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.currentYear, " Incentive Management System. All rights reserved.");
          }
        },
        styles: [".app-footer[_ngcontent-%COMP%] {\n  background: var(--gray-900);\n  color: white;\n  padding: 1rem 2rem;\n  text-align: center;\n  font-size: 0.875rem;\n  margin-top: auto;\n}\n.app-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUNFO0VBQ0UsU0FBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmF5LTkwMCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMXJlbSAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIG1hcmdpbi10b3A6IGF1dG87XG5cbiAgcCB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
      });
    }
  }
  return FooterComponent;
})();

/***/ }),

/***/ 385:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 5315);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3793);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3319);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 5565);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _org_core_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @org/core-services */ 8662);
/* harmony import */ var _org_core_services__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_org_core_services__WEBPACK_IMPORTED_MODULE_4__);







function HeaderComponent_div_4_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const exec_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", exec_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](exec_r3.name);
  }
}
function HeaderComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "View data for:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Selecting a user will display their incentive data. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "select", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function HeaderComponent_div_4_Template_select_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.selectedSalesExecutiveId, $event) || (ctx_r1.selectedSalesExecutiveId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function HeaderComponent_div_4_Template_select_change_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onSalesExecutiveChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "My Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, HeaderComponent_div_4_option_9_Template, 2, 2, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.selectedSalesExecutiveId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r1.currentUser.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.salesExecutives);
  }
}
function HeaderComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx_r1.currentUser.name, " (", ctx_r1.currentUser.role, ") ");
  }
}
function HeaderComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function HeaderComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.login());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function HeaderComponent_nav_9_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const mfe_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "/" + mfe_r6.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", mfe_r6.displayName, " ");
  }
}
function HeaderComponent_nav_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nav", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, HeaderComponent_nav_9_a_1_Template, 2, 2, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.availableMfes);
  }
}
/**
 * Header component for the application
 * Displays user information, role-based navigation, and user selection for admins
 */
let HeaderComponent = /*#__PURE__*/(() => {
  class HeaderComponent {
    constructor(roleService, dummyDataService, mfeLoader, auth) {
      this.roleService = roleService;
      this.dummyDataService = dummyDataService;
      this.mfeLoader = mfeLoader;
      this.auth = auth;
      this.currentUser = null;
      this.availableMfes = [];
      this.salesExecutives = [];
      this.selectedSalesExecutiveId = '';
      this.canViewOthers = false;
    }
    ngOnInit() {
      this.roleService.currentUser$.subscribe(user => {
        this.currentUser = user;
        if (user) {
          this.selectedSalesExecutiveId = user.id;
          this.canViewOthers = this.roleService.canViewOthersData();
          this.updateAvailableMfes();
          this.loadSalesExecutives();
        }
      });
    }
    /**
     * Update available MFEs based on current user role
     */
    updateAvailableMfes() {
      if (!this.currentUser) {
        this.availableMfes = [];
        return;
      }
      this.availableMfes = this.mfeLoader.getConfigsForRole(this.currentUser.role);
    }
    /**
     * Load sales executives for selection (admin/team lead only)
     */
    loadSalesExecutives() {
      if (this.canViewOthers) {
        this.salesExecutives = this.dummyDataService.getSalesExecutives();
      }
    }
    /**
     * Handle sales executive selection change
     */
    onSalesExecutiveChange() {
      sessionStorage.setItem('selected_sales_executive_id', this.selectedSalesExecutiveId);
      window.dispatchEvent(new CustomEvent('salesExecutiveChanged', {
        detail: {
          salesExecutiveId: this.selectedSalesExecutiveId
        }
      }));
    }
    /**
     * Handle logout action
     */
    logout() {
      this.auth.logout();
      this.roleService.setCurrentUser(null);
    }
    /**
     * Handle login action
     */
    login() {
      this.auth.login();
    }
    static {
      this.ɵfac = function HeaderComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_org_core_services__WEBPACK_IMPORTED_MODULE_4__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_org_core_services__WEBPACK_IMPORTED_MODULE_4__.DummyDataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_org_core_services__WEBPACK_IMPORTED_MODULE_4__.MfeLoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_org_core_services__WEBPACK_IMPORTED_MODULE_4__.AuthService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
        decls: 10,
        vars: 5,
        consts: [[1, "app-header"], [1, "header-left"], [1, "app-title"], ["class", "header-center", 4, "ngIf"], [1, "header-right"], ["class", "user-info", 4, "ngIf"], ["class", "btn-logout", 3, "click", 4, "ngIf"], ["class", "btn-login", 3, "click", 4, "ngIf"], ["class", "app-nav", 4, "ngIf"], [1, "header-center"], [1, "user-selector"], ["for", "salesExecSelect"], ["id", "salesExecSelectDesc", 1, "visually-hidden"], ["id", "salesExecSelect", "aria-describedby", "salesExecSelectDesc", 3, "ngModelChange", "change", "ngModel"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [1, "user-info"], [1, "btn-logout", 3, "click"], [1, "btn-login", 3, "click"], [1, "app-nav"], ["routerLinkActive", "active", "class", "nav-link", 3, "routerLink", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "h1", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Incentive Management System");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, HeaderComponent_div_4_Template, 10, 3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, HeaderComponent_span_6_Template, 2, 2, "span", 5)(7, HeaderComponent_button_7_Template, 2, 0, "button", 6)(8, HeaderComponent_button_8_Template, 2, 0, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, HeaderComponent_nav_9_Template, 2, 1, "nav", 8);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.currentUser && ctx.canViewOthers);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.currentUser);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.currentUser);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.currentUser);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.currentUser);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive],
        styles: [".app-header[_ngcontent-%COMP%] {\n  background: white;\n  padding: 1rem 2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n\n.header-left[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.app-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  color: var(--gray-900);\n  font-weight: 600;\n}\n\n.header-center[_ngcontent-%COMP%] {\n  flex: 2;\n  display: flex;\n  justify-content: center;\n}\n\n.user-selector[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.user-selector[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--gray-700);\n  font-weight: 500;\n}\n\n.user-selector[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border: 1px solid var(--gray-400);\n  border-radius: 0.375rem;\n  font-size: 0.875rem;\n  background: white;\n  cursor: pointer;\n  min-width: 200px;\n}\n\n.visually-hidden[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.header-right[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 1rem;\n}\n\n.user-info[_ngcontent-%COMP%] {\n  color: var(--gray-700);\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n\n.btn-logout[_ngcontent-%COMP%], \n.btn-login[_ngcontent-%COMP%] {\n  background: var(--hot-red);\n  color: white;\n  border: none;\n  padding: 0.5rem 1.5rem;\n  border-radius: 0.375rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.2s ease;\n}\n\n.btn-logout[_ngcontent-%COMP%]:hover, \n.btn-login[_ngcontent-%COMP%]:hover {\n  background: var(--orange-red);\n}\n\n.btn-login[_ngcontent-%COMP%] {\n  background: var(--bright-blue);\n}\n\n.btn-login[_ngcontent-%COMP%]:hover {\n  background: var(--electric-violet);\n}\n\n.app-nav[_ngcontent-%COMP%] {\n  background: var(--gray-900);\n  padding: 0;\n  display: flex;\n  gap: 0;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none;\n  padding: 1rem 1.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  transition: background 0.2s ease;\n  border-bottom: 3px solid transparent;\n}\n\n.nav-link[_ngcontent-%COMP%]:hover {\n  background: var(--gray-700);\n}\n\n.nav-link.active[_ngcontent-%COMP%] {\n  background: var(--bright-blue);\n  border-bottom-color: var(--electric-violet);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7QUFDRjs7QUFFQTtFQUNFLE9BQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsNkJBQUE7QUFDRjs7QUFFQTtFQUNFLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQ0FBQTtBQUNGOztBQUVBO0VBQ0UsMkJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLE1BQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0NBQUE7QUFDRjs7QUFFQTtFQUNFLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw4QkFBQTtFQUNBLDJDQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwwLDAsMC4xKTtcbn1cblxuLmhlYWRlci1sZWZ0IHtcbiAgZmxleDogMTtcbn1cblxuLmFwcC10aXRsZSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiB2YXIoLS1ncmF5LTkwMCk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5oZWFkZXItY2VudGVyIHtcbiAgZmxleDogMjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi51c2VyLXNlbGVjdG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG59XG5cbi51c2VyLXNlbGVjdG9yIGxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgY29sb3I6IHZhcigtLWdyYXktNzAwKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnVzZXItc2VsZWN0b3Igc2VsZWN0IHtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyYXktNDAwKTtcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1pbi13aWR0aDogMjAwcHg7XG59XG5cbi52aXN1YWxseS1oaWRkZW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxcHg7XG4gIGhlaWdodDogMXB4O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IC0xcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJvcmRlci13aWR0aDogMDtcbn1cblxuLmhlYWRlci1yaWdodCB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbn1cblxuLnVzZXItaW5mbyB7XG4gIGNvbG9yOiB2YXIoLS1ncmF5LTcwMCk7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5idG4tbG9nb3V0LFxuLmJ0bi1sb2dpbiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWhvdC1yZWQpO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMC41cmVtIDEuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGVhc2U7XG59XG5cbi5idG4tbG9nb3V0OmhvdmVyLFxuLmJ0bi1sb2dpbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLW9yYW5nZS1yZWQpO1xufVxuXG4uYnRuLWxvZ2luIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYnJpZ2h0LWJsdWUpO1xufVxuXG4uYnRuLWxvZ2luOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZWxlY3RyaWMtdmlvbGV0KTtcbn1cblxuLmFwcC1uYXYge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmF5LTkwMCk7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMDtcbn1cblxuLm5hdi1saW5rIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgZWFzZTtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4ubmF2LWxpbms6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmF5LTcwMCk7XG59XG5cbi5uYXYtbGluay5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1icmlnaHQtYmx1ZSk7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLWVsZWN0cmljLXZpb2xldCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
      });
    }
  }
  return HeaderComponent;
})();

/***/ }),

/***/ 1633:
/*!*****************************************************************!*\
  !*** ./src/app/components/mfe-wrapper/mfe-wrapper.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MfeWrapperComponent: () => (/* binding */ MfeWrapperComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_i17e_code_i17e_code_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5565);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _configs_mfe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../configs/mfe */ 7412);
/* harmony import */ var _angular_architects_module_federation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular-architects/module-federation */ 578);
/* harmony import */ var _angular_architects_module_federation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_architects_module_federation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 5315);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);






const _c0 = ["container"];
let MfeWrapperComponent = /*#__PURE__*/(() => {
  class MfeWrapperComponent {
    constructor() {
      this.name = '';
    }
    ngAfterViewInit() {
      var _this = this;
      return (0,_home_runner_work_i17e_code_i17e_code_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const options = _configs_mfe__WEBPACK_IMPORTED_MODULE_2__["default"].map(({
          remoteName,
          exposedModule
        }) => ({
          remoteName,
          exposedModule
        })).find(({
          remoteName
        }) => remoteName === _this.name);
        if (!options) return;
        const remote = yield (0,_angular_architects_module_federation__WEBPACK_IMPORTED_MODULE_4__.loadRemoteModule)(options);
        _this.remoteContainer.createComponent(remote.AppComponent);
      })();
    }
    static {
      this.ɵfac = function MfeWrapperComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MfeWrapperComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MfeWrapperComponent,
        selectors: [["app-mfe-wrapper"]],
        viewQuery: function MfeWrapperComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.remoteContainer = _t.first);
          }
        },
        inputs: {
          name: "name"
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
        decls: 4,
        vars: 0,
        consts: [["container", ""]],
        template: function MfeWrapperComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "mfe-wrapper works!");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](2, null, 0);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
        styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
        changeDetection: 0
      });
    }
  }
  return MfeWrapperComponent;
})();

/***/ }),

/***/ 5458:
/*!**************************************!*\
  !*** ./src/app/guards/role.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   adminGuard: () => (/* binding */ adminGuard),
/* harmony export */   allRolesGuard: () => (/* binding */ allRolesGuard),
/* harmony export */   roleGuard: () => (/* binding */ roleGuard),
/* harmony export */   superAdminGuard: () => (/* binding */ superAdminGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 5565);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3319);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _org_core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @org/core-services */ 8662);
/* harmony import */ var _org_core_services__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_org_core_services__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Route guard to check if user has required role
 * @param allowedRoles Array of roles that can access the route
 * @returns CanActivateFn
 */
function roleGuard(allowedRoles) {
  return () => {
    const roleService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_org_core_services__WEBPACK_IMPORTED_MODULE_2__.RoleService);
    const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router);
    // DEBUG_LOG: Guard checking access
    console.log('[RoleGuard] Checking access for allowed roles:', allowedRoles);
    const currentUser = roleService.getCurrentUser();
    if (!currentUser) {
      // DEBUG_LOG: No user found
      console.warn('[RoleGuard] No user found, redirecting to home');
      router.navigate(['/']);
      return false;
    }
    // DEBUG_LOG: Current user found
    console.log('[RoleGuard] Current user:', currentUser.name, 'Role:', currentUser.role);
    if (!allowedRoles.includes(currentUser.role)) {
      // DEBUG_LOG: User not authorized
      console.warn(`[RoleGuard] User role ${currentUser.role} not allowed, redirecting to home`);
      console.warn('[RoleGuard] Allowed roles:', allowedRoles);
      router.navigate(['/']);
      return false;
    }
    // DEBUG_LOG: Access granted
    console.log('[RoleGuard] Access granted for user:', currentUser.name);
    return true;
  };
}
/**
 * Guard to check if user is admin or team lead
 */
const adminGuard = roleGuard([_org_core_services__WEBPACK_IMPORTED_MODULE_2__.UserRole.SUPER_ADMIN, _org_core_services__WEBPACK_IMPORTED_MODULE_2__.UserRole.ORG_ADMIN, _org_core_services__WEBPACK_IMPORTED_MODULE_2__.UserRole.TEAM_LEAD]);
/**
 * Guard to check if user is admin only
 */
const superAdminGuard = roleGuard([_org_core_services__WEBPACK_IMPORTED_MODULE_2__.UserRole.SUPER_ADMIN, _org_core_services__WEBPACK_IMPORTED_MODULE_2__.UserRole.ORG_ADMIN]);
/**
 * Guard to check if user has any role (sales executive and above)
 */
const allRolesGuard = roleGuard([_org_core_services__WEBPACK_IMPORTED_MODULE_2__.UserRole.SUPER_ADMIN, _org_core_services__WEBPACK_IMPORTED_MODULE_2__.UserRole.ORG_ADMIN, _org_core_services__WEBPACK_IMPORTED_MODULE_2__.UserRole.TEAM_LEAD, _org_core_services__WEBPACK_IMPORTED_MODULE_2__.UserRole.SALES_EXECUTIVE]);

/***/ }),

/***/ 8967:
/*!**************************************************************!*\
  !*** ./src/app/pages/reports-page/reports-page.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportsPageComponent: () => (/* binding */ ReportsPageComponent)
/* harmony export */ });
/* harmony import */ var _components_mfe_wrapper_mfe_wrapper_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/mfe-wrapper/mfe-wrapper.component */ 1633);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5565);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Page component for My Reports MFE
 * Displays incentive reports and analytics for the current user or selected executive
 */
let ReportsPageComponent = /*#__PURE__*/(() => {
  class ReportsPageComponent {
    constructor() {
      this.mfeName = "myReport";
    }
    static {
      this.ɵfac = function ReportsPageComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ReportsPageComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ReportsPageComponent,
        selectors: [["app-reports-page"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
        decls: 2,
        vars: 1,
        consts: [[1, "page-container"], [3, "name"]],
        template: function ReportsPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-mfe-wrapper", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", ctx.mfeName);
          }
        },
        dependencies: [_components_mfe_wrapper_mfe_wrapper_component__WEBPACK_IMPORTED_MODULE_0__.MfeWrapperComponent],
        styles: [".page-container[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcmVwb3J0cy1wYWdlL3JlcG9ydHMtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDJyZW07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
      });
    }
  }
  return ReportsPageComponent;
})();

/***/ }),

/***/ 9127:
/*!**********************************************************!*\
  !*** ./src/app/pages/rules-page/rules-page.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RulesPageComponent: () => (/* binding */ RulesPageComponent)
/* harmony export */ });
/* harmony import */ var _components_mfe_wrapper_mfe_wrapper_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/mfe-wrapper/mfe-wrapper.component */ 1633);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5565);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Page component for CRUD Rules MFE
 * Allows admins and team leads to manage incentive rules
 */
let RulesPageComponent = /*#__PURE__*/(() => {
  class RulesPageComponent {
    constructor() {
      this.mfeName = "crudRules";
    }
    static {
      this.ɵfac = function RulesPageComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || RulesPageComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: RulesPageComponent,
        selectors: [["app-rules-page"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
        decls: 2,
        vars: 1,
        consts: [[1, "page-container"], [3, "name"]],
        template: function RulesPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-mfe-wrapper", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", ctx.mfeName);
          }
        },
        dependencies: [_components_mfe_wrapper_mfe_wrapper_component__WEBPACK_IMPORTED_MODULE_0__.MfeWrapperComponent],
        styles: [".page-container[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcnVsZXMtcGFnZS9ydWxlcy1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMnJlbTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
      });
    }
  }
  return RulesPageComponent;
})();

/***/ }),

/***/ 1889:
/*!**********************************************************!*\
  !*** ./src/app/pages/sales-page/sales-page.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesPageComponent: () => (/* binding */ SalesPageComponent)
/* harmony export */ });
/* harmony import */ var _components_mfe_wrapper_mfe_wrapper_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/mfe-wrapper/mfe-wrapper.component */ 1633);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5565);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Page component for My Sales MFE
 * Displays sales history for the current user or selected executive
 */
let SalesPageComponent = /*#__PURE__*/(() => {
  class SalesPageComponent {
    constructor() {
      this.mfeName = "mySales";
    }
    static {
      this.ɵfac = function SalesPageComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || SalesPageComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: SalesPageComponent,
        selectors: [["app-sales-page"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
        decls: 2,
        vars: 1,
        consts: [[1, "page-container"], [3, "name"]],
        template: function SalesPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-mfe-wrapper", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", ctx.mfeName);
          }
        },
        dependencies: [_components_mfe_wrapper_mfe_wrapper_component__WEBPACK_IMPORTED_MODULE_0__.MfeWrapperComponent],
        styles: [".page-container[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2FsZXMtcGFnZS9zYWxlcy1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMnJlbTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
      });
    }
  }
  return SalesPageComponent;
})();

/***/ }),

/***/ 9214:
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthenticationService: () => (/* binding */ AuthenticationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 5565);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1663);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__);


//import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
let AuthenticationService = /*#__PURE__*/(() => {
  class AuthenticationService {
    constructor(http) {
      this.http = http;
      // DEBUG_LOG: AuthenticationService initialized
      console.log('[AuthenticationService] Service initialized');
    }
    login() {
      // DEBUG_LOG: Initiating login
      console.log('[AuthenticationService] login() called, redirecting to backend login endpoint');
      // Redirect to backend login endpoint
      window.location.href = 'http://localhost:4000/auth/login';
    }
    logout() {
      // DEBUG_LOG: Initiating logout
      console.log('[AuthenticationService] logout() called, redirecting to backend logout endpoint');
      // Redirect to backend logout endpoint
      window.location.href = 'http://localhost:4000/auth/logout';
    }
    getUserProfile() {
      // DEBUG_LOG: Fetching user profile
      console.log('[AuthenticationService] getUserProfile() called, fetching from backend');
      // Fetch user profile from backend /auth/me
      return this.http.get('http://localhost:4000/auth/me', {
        withCredentials: true
      });
    }
    static {
      this.ɵfac = function AuthenticationService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthenticationService,
        factory: AuthenticationService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return AuthenticationService;
})();

/***/ }),

/***/ 8621:
/*!***********************************************!*\
  !*** ./src/app/services/cache-api.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cacheInterceptor: () => (/* binding */ cacheInterceptor)
/* harmony export */ });
/* harmony import */ var _home_runner_work_i17e_code_i17e_code_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1663);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4866);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);

// import { HttpClient, HttpEvent, HttpHandler, HttpHandlerFn, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { fromEvent, Observable, tap } from 'rxjs';
// const Cache = new Map<string, HttpResponse<any>>();
// export function cacheInterceptor(req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> {
//   console.log("Hey jude.. I am in ", req.url);
//   return next(req);
// }


// export const cacheInterceptor: HttpInterceptorFn = (
//   req: HttpRequest<any>,
//   next: HttpHandlerFn
// ): Observable<HttpEvent<any>> => {
//   try{
//     returnFromCache(req, next).then((data)=>{
//       console.log("Data...",data)
//     })
//   }catch(e){
//   }
//   console.log("returning what I got ...")
//   return next(req)
/*f (req.method !== 'GET') {
  return next(req);
}

const cacheKey = req.urlWithParams;

return new Observable<HttpEvent<any>>(observer => {
  // open/create a cache storage
  caches.open('http-cache').then(async cache => {
    // try to match from cache
    const cachedResponse = await cache.match(cacheKey);

    if (cachedResponse) {
      const body = await cachedResponse.json();
      console.log('[CACHE HIT]', cacheKey);
      observer.next(new HttpResponse({ body, status: 200, url: cacheKey }));
      observer.complete();
      return;
    }

    console.log('[CACHE MISS]', cacheKey);

    // forward to network if not cached
    next(req).subscribe({
      next: async event => {
        if (event instanceof HttpResponse) {
          // put the response into cache
          const resToCache = new Response(JSON.stringify(event.body), {
            headers: { 'Content-Type': 'application/json' }
          });
          await cache.put(cacheKey, resToCache);
          console.log('[CACHE STORE]', cacheKey);
        }
        observer.next(event);
      },
      error: err => observer.error(err),
      complete: () => observer.complete(),
    });
  });
});*/
//};
const cacheInterceptor = (req, next) => {
  return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(observer => {
    let networkSub;
    (0,_home_runner_work_i17e_code_i17e_code_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      /**
       * Start of actual Logic
       */
      const {
        url,
        urlWithParams,
        method
      } = req;
      // const k = await next(req);
      const cache = yield caches.open('http');
      const cached = yield cache.match(urlWithParams);
      if (cached) {
        console.log("Serve from Cache for", urlWithParams);
        let body;
        try {
          body = yield cached.clone().json();
        } catch {
          body = yield cached.clone().text();
        }
        observer.next(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse({
          body,
          status: cached.status || 200,
          url: req.urlWithParams
        }));
        observer.complete();
        return;
      }
      // 🚨 don’t `await next(req)` here — it’s an Observable
      networkSub = next(req).subscribe({
        next: function () {
          var _ref2 = (0,_home_runner_work_i17e_code_i17e_code_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (ev) {
            console.log("Cache miss for ", urlWithParams);
            observer.next(ev);
            if (ev instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse && ev.ok) {
              const resToCache = new Response(JSON.stringify(ev.body), {
                headers: {
                  'Content-Type': 'application/json'
                },
                status: ev.status,
                statusText: ev.statusText
              });
              yield cache.put(req.urlWithParams, resToCache);
            }
          });
          return function next(_x) {
            return _ref2.apply(this, arguments);
          };
        }(),
        error: err => observer.error(err),
        complete: () => observer.complete()
      });
      /**
       * END OF Actual Logic
       */
    })();
    return () => networkSub?.unsubscribe();
  });
};
// export const cacheInterceptor: HttpInterceptorFn = (
//   req: HttpRequest<any>,
//   next: HttpHandlerFn
// ): Observable<HttpEvent<any>> => {
//   return new Observable<HttpEvent<any>>(observer => {
//     let networkSub: Subscription | undefined;
//     (async () => {
//       const { url, urlWithParams, method } = req;
//       networkSub = next(req).subscribe({
//         next: ev => observer.next(ev),   // ✅ ev is HttpEvent<any>
//         error: err => observer.error(err),
//         complete: () => observer.complete()
//       });
//     })();
//     return () => networkSub?.unsubscribe();
//   });
// };
// async function returnFromCache(req : HttpRequest<any>, next:HttpHandlerFn){
//   const k = await caches.open(url)
//   const resp =  next(req)
//   console.log("Got k as ...",k,' for url ',url, "and rsp is ...",resp)
//   return resp
// }

/***/ }),

/***/ 5020:
/*!**************************!*\
  !*** ./src/bootstrap.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bootstrap: () => (/* binding */ bootstrap)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 1194);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.component */ 92);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1663);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3319);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_app_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.routes */ 2181);
/* harmony import */ var _app_services_cache_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/services/cache-api.service */ 8621);


//import { importProvidersFrom } from '@angular/core';




//import { OAuthModule } from 'angular-oauth2-oidc';
function bootstrap() {
  return (0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, {
    providers: [
    // provideHttpClient(),
    (0,_angular_router__WEBPACK_IMPORTED_MODULE_3__.provideRouter)(_app_app_routes__WEBPACK_IMPORTED_MODULE_4__.routes), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.withFetch)(), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.withInterceptors)([_app_services_cache_api_service__WEBPACK_IMPORTED_MODULE_5__.cacheInterceptor]))]
  });
}

/***/ })

}])
//# sourceMappingURL=20.js.map