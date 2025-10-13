(self["webpackChunkshell"] = self["webpackChunkshell"] || []).push([[688],{

/***/ 3607:
/*!********************************************************!*\
  !*** ./projects/core-services/src/lib/auth.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_i17e_code_i17e_code_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4866);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 5565);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 1663);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__);




/**
 * Authentication service for Zitadel OAuth2 integration
 * Handles login, logout, token management, and user session
 *
 * NOTE: All navigation logic using setTimeout is commented out as per requirements.
 * To enable navigation after auth operations, uncomment the marked sections in consuming components.
 */
let AuthService = /*#__PURE__*/(() => {
  class AuthService {
    constructor(http) {
      this.http = http;
      this.id = 'auth of pokemon';
      // Zitadel configuration
      this.ISSUER_BASE_URL = 'https://topfix-wrczmn.us1.zitadel.cloud';
      this.CLIENT_ID = '336777344075263315';
      this.REDIRECT_URI = 'https://opensourcekd.github.io/i17e/auth-callback';
      this.SCOPE = 'openid profile email';
      this.TOKEN_KEY = 'zitadel_token';
      this.USER_INFO_KEY = 'zitadel_user_info';
      this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(this.getUserInfoFromStorage());
      this.user$ = this.userSubject.asObservable();
    }
    /**
     * Initiate OAuth2 login flow
     * Redirects user to Zitadel authorization endpoint
     * @param user - Optional user identifier (for demo purposes)
     */
    login(user) {
      this.redirectToZitadelLogin();
    }
    /**
     * Redirect to Zitadel OAuth2 authorization endpoint
     * Stores state and code verifier for PKCE flow validation
     */
    redirectToZitadelLogin() {
      const authUrl = new URL(`${this.ISSUER_BASE_URL}/oauth/v2/authorize`);
      const state = this.generateRandomState();
      const codeVerifier = this.generateCodeVerifier();
      // Store state and code verifier for validation
      sessionStorage.setItem('oauth_state', state);
      sessionStorage.setItem('code_verifier', codeVerifier);
      authUrl.searchParams.append('client_id', this.CLIENT_ID);
      authUrl.searchParams.append('redirect_uri', this.REDIRECT_URI);
      authUrl.searchParams.append('response_type', 'code');
      authUrl.searchParams.append('scope', this.SCOPE);
      authUrl.searchParams.append('state', state);
      window.location.href = authUrl.toString();
    }
    /**
     * Handle OAuth2 callback after successful authorization
     * Validates state, exchanges code for tokens, and stores user info
     *
     * NOTE: Navigation after successful/failed authentication should be handled in the calling component
     * using setTimeout. See commented examples in app.component.ts
     *
     * @param code - Authorization code from OAuth2 provider
     * @param state - State parameter for CSRF protection
     * @returns Promise<boolean> - True if authentication successful, false otherwise
     */
    handleCallback(code, state) {
      var _this = this;
      return (0,_home_runner_work_i17e_code_i17e_code_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const storedState = sessionStorage.getItem('oauth_state');
        if (state !== storedState) {
          console.error('[AuthService] State mismatch - possible CSRF attack');
          return false;
        }
        try {
          const tokenResponse = yield _this.exchangeCodeForToken(code);
          _this.setToken(tokenResponse.access_token);
          // Decode and store user info from ID token
          const userInfo = _this.decodeIdToken(tokenResponse.id_token);
          _this.setUserInfo(userInfo);
          // Clean up
          sessionStorage.removeItem('oauth_state');
          sessionStorage.removeItem('code_verifier');
          console.log('[AuthService] Authentication successful');
          return true;
        } catch (error) {
          console.error('[AuthService] Error exchanging code for token:', error);
          return false;
        }
      })();
    }
    /**
     * Exchange authorization code for access token
     * @param code - Authorization code
     * @returns Promise<TokenResponse> - Token response from OAuth2 provider
     */
    exchangeCodeForToken(code) {
      var _this2 = this;
      return (0,_home_runner_work_i17e_code_i17e_code_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const tokenUrl = `${_this2.ISSUER_BASE_URL}/oauth/v2/token`;
        const body = new URLSearchParams({
          grant_type: 'authorization_code',
          code: code,
          redirect_uri: _this2.REDIRECT_URI,
          client_id: _this2.CLIENT_ID
        });
        const response = yield fetch(tokenUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: body.toString()
        });
        if (!response.ok) {
          throw new Error(`Token exchange failed: ${response.statusText}`);
        }
        return response.json();
      })();
    }
    /**
     * Decode JWT ID token to extract user information
     * @param idToken - JWT ID token from OAuth2 provider
     * @returns UserInfo - Decoded user information
     */
    decodeIdToken(idToken) {
      try {
        const payload = idToken.split('.')[1];
        const decoded = JSON.parse(atob(payload));
        return {
          sub: decoded.sub,
          name: decoded.name,
          email: decoded.email
        };
      } catch (error) {
        console.error('[AuthService] Error decoding ID token:', error);
        return {
          sub: ''
        };
      }
    }
    /**
     * Logout user and clear authentication state
     * Removes tokens and user info from storage
     */
    logout() {
      localStorage.removeItem(this.TOKEN_KEY);
      localStorage.removeItem(this.USER_INFO_KEY);
      this.userSubject.next(null);
      console.log('[AuthService] User logged out');
    }
    /**
     * Get current access token
     * @returns string | null - Access token or null if not authenticated
     */
    getToken() {
      return localStorage.getItem(this.TOKEN_KEY);
    }
    /**
     * Set access token in storage
     * @param token - Access token to store
     */
    setToken(token) {
      localStorage.setItem(this.TOKEN_KEY, token);
    }
    /**
     * Check if user is authenticated
     * @returns boolean - True if user has valid token
     */
    isAuthenticated() {
      return !!this.getToken();
    }
    /**
     * Get current user information
     * @returns UserInfo | null - Current user or null if not authenticated
     */
    getUser() {
      return this.userSubject.value;
    }
    /**
     * Get user information from localStorage
     * @returns UserInfo | null - Stored user info or null
     */
    getUserInfoFromStorage() {
      const userJson = localStorage.getItem(this.USER_INFO_KEY);
      return userJson ? JSON.parse(userJson) : null;
    }
    /**
     * Set user information in storage and update observable
     * @param userInfo - User information to store
     */
    setUserInfo(userInfo) {
      localStorage.setItem(this.USER_INFO_KEY, JSON.stringify(userInfo));
      this.userSubject.next(userInfo);
    }
    /**
     * Generate random state for CSRF protection
     * @returns string - Random state string
     */
    generateRandomState() {
      const array = new Uint8Array(32);
      crypto.getRandomValues(array);
      return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
    }
    /**
     * Generate code verifier for PKCE flow
     * @returns string - Random code verifier string
     */
    generateCodeVerifier() {
      const array = new Uint8Array(32);
      crypto.getRandomValues(array);
      return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
    }
    static {
      this.ɵfac = function AuthService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return AuthService;
})();

/***/ }),

/***/ 9089:
/*!*******************************************************************!*\
  !*** ./projects/core-services/src/lib/core-services.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoreServicesComponent: () => (/* binding */ CoreServicesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 5565);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

let CoreServicesComponent = /*#__PURE__*/(() => {
  class CoreServicesComponent {
    static {
      this.ɵfac = function CoreServicesComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CoreServicesComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CoreServicesComponent,
        selectors: [["org-core-services"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 2,
        vars: 0,
        template: function CoreServicesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " core-services works! ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        }
      });
    }
  }
  return CoreServicesComponent;
})();

/***/ }),

/***/ 3573:
/*!*****************************************************************!*\
  !*** ./projects/core-services/src/lib/core-services.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoreServicesService: () => (/* binding */ CoreServicesService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 5565);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

let CoreServicesService = /*#__PURE__*/(() => {
  class CoreServicesService {
    constructor() {}
    static {
      this.ɵfac = function CoreServicesService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CoreServicesService)();
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CoreServicesService,
        factory: CoreServicesService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return CoreServicesService;
})();

/***/ }),

/***/ 4662:
/*!**************************************************************!*\
  !*** ./projects/core-services/src/lib/dummy-data.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DummyDataService: () => (/* binding */ DummyDataService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4866);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5565);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Shared dummy data service for all MFEs
 * Centralized data management for development and testing
 */
let DummyDataService = /*#__PURE__*/(() => {
  class DummyDataService {
    constructor() {
      this.salesExecutivesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.generateSalesExecutives());
      this.salesExecutives$ = this.salesExecutivesSubject.asObservable();
      this.salesRecordsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.generateSalesRecords());
      this.salesRecords$ = this.salesRecordsSubject.asObservable();
      this.incentiveRulesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.generateIncentiveRules());
      this.incentiveRules$ = this.incentiveRulesSubject.asObservable();
      this.incentivesEarnedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.generateIncentivesEarned());
      this.incentivesEarned$ = this.incentivesEarnedSubject.asObservable();
      // DEBUG_LOG: DummyDataService initialized
      console.log('[DummyDataService] Service initialized');
      console.log('[DummyDataService] Generated data:', {
        salesExecutives: this.salesExecutivesSubject.value.length,
        salesRecords: this.salesRecordsSubject.value.length,
        incentiveRules: this.incentiveRulesSubject.value.length,
        incentivesEarned: this.incentivesEarnedSubject.value.length
      });
    }
    /**
     * Generate dummy sales executives
     */
    generateSalesExecutives() {
      // DEBUG_LOG: Generating sales executives
      console.log('[DummyDataService] Generating sales executives');
      return [{
        id: '1',
        name: 'John Doe',
        email: 'john.doe@example.com',
        teamId: 'team1'
      }, {
        id: '2',
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        teamId: 'team1'
      }, {
        id: '3',
        name: 'Bob Johnson',
        email: 'bob.johnson@example.com',
        teamId: 'team2'
      }, {
        id: '4',
        name: 'Alice Williams',
        email: 'alice.williams@example.com',
        teamId: 'team2'
      }, {
        id: '5',
        name: 'Charlie Brown',
        email: 'charlie.brown@example.com',
        teamId: 'team1'
      }];
    }
    /**
     * Generate dummy sales records
     */
    generateSalesRecords() {
      // DEBUG_LOG: Generating sales records
      console.log('[DummyDataService] Generating sales records');
      const records = [];
      const executives = this.generateSalesExecutives();
      const products = ['Product A', 'Product B', 'Product C', 'Product D'];
      const statuses = ['completed', 'pending', 'cancelled'];
      for (let i = 0; i < 50; i++) {
        const exec = executives[i % executives.length];
        const monthsAgo = Math.floor(i / 10);
        const date = new Date();
        date.setMonth(date.getMonth() - monthsAgo);
        records.push({
          id: `sale-${i + 1}`,
          salesExecutiveId: exec.id,
          salesExecutiveName: exec.name,
          date: date,
          productName: products[i % products.length],
          amount: Math.floor(Math.random() * 50000) + 10000,
          quantity: Math.floor(Math.random() * 10) + 1,
          status: statuses[i % 3]
        });
      }
      return records;
    }
    /**
     * Generate dummy incentive rules
     */
    generateIncentiveRules() {
      // DEBUG_LOG: Generating incentive rules
      console.log('[DummyDataService] Generating incentive rules');
      return [{
        id: 'rule-1',
        name: 'Basic Sales Incentive',
        description: '5% incentive on all sales',
        type: 'percentage',
        value: 5,
        isActive: true,
        createdBy: 'admin',
        createdAt: new Date('2024-01-01')
      }, {
        id: 'rule-2',
        name: 'High Value Sales Bonus',
        description: '10% incentive on sales above $50,000',
        type: 'percentage',
        value: 10,
        minSalesAmount: 50000,
        isActive: true,
        createdBy: 'admin',
        createdAt: new Date('2024-02-01')
      }, {
        id: 'rule-3',
        name: 'Product A Special',
        description: 'Fixed $500 bonus for Product A sales',
        type: 'fixed',
        value: 500,
        productCategory: 'Product A',
        isActive: true,
        createdBy: 'team-lead-1',
        createdAt: new Date('2024-03-01')
      }, {
        id: 'rule-4',
        name: 'Tiered Volume Incentive',
        description: '15% incentive on sales above $100,000',
        type: 'tiered',
        value: 15,
        minSalesAmount: 100000,
        isActive: false,
        createdBy: 'admin',
        createdAt: new Date('2024-04-01')
      }];
    }
    /**
     * Generate dummy incentives earned
     */
    generateIncentivesEarned() {
      // DEBUG_LOG: Generating incentives earned
      console.log('[DummyDataService] Generating incentives earned');
      const incentives = [];
      const executives = this.generateSalesExecutives();
      const rules = this.generateIncentiveRules();
      const statuses = ['pending', 'approved', 'paid'];
      for (let i = 0; i < 30; i++) {
        const exec = executives[i % executives.length];
        const rule = rules[i % rules.length];
        const monthsAgo = Math.floor(i / 10);
        const date = new Date();
        date.setMonth(date.getMonth() - monthsAgo);
        incentives.push({
          id: `incentive-${i + 1}`,
          salesExecutiveId: exec.id,
          salesExecutiveName: exec.name,
          ruleId: rule.id,
          ruleName: rule.name,
          salesRecordId: `sale-${i + 1}`,
          amount: Math.floor(Math.random() * 5000) + 500,
          earnedDate: date,
          status: statuses[i % 3]
        });
      }
      return incentives;
    }
    /**
     * Get sales records for a specific sales executive
     * @param salesExecutiveId ID of the sales executive
     * @returns Filtered sales records
     */
    getSalesRecordsForExecutive(salesExecutiveId) {
      // DEBUG_LOG: Fetching sales records for executive
      console.log('[DummyDataService] getSalesRecordsForExecutive() called for:', salesExecutiveId);
      const records = this.salesRecordsSubject.value.filter(record => record.salesExecutiveId === salesExecutiveId);
      // DEBUG_LOG: Records found
      console.log('[DummyDataService] Found', records.length, 'sales records for executive:', salesExecutiveId);
      return records;
    }
    /**
     * Get incentives earned for a specific sales executive
     * @param salesExecutiveId ID of the sales executive
     * @returns Filtered incentives
     */
    getIncentivesForExecutive(salesExecutiveId) {
      // DEBUG_LOG: Fetching incentives for executive
      console.log('[DummyDataService] getIncentivesForExecutive() called for:', salesExecutiveId);
      const incentives = this.incentivesEarnedSubject.value.filter(incentive => incentive.salesExecutiveId === salesExecutiveId);
      // DEBUG_LOG: Incentives found
      console.log('[DummyDataService] Found', incentives.length, 'incentives for executive:', salesExecutiveId);
      return incentives;
    }
    /**
     * Get report data for a specific sales executive
     * @param salesExecutiveId ID of the sales executive
     * @returns Report data with breakdown
     */
    getReportDataForExecutive(salesExecutiveId) {
      // DEBUG_LOG: Generating report data
      console.log('[DummyDataService] getReportDataForExecutive() called for:', salesExecutiveId);
      const exec = this.salesExecutivesSubject.value.find(e => e.id === salesExecutiveId);
      const salesRecords = this.getSalesRecordsForExecutive(salesExecutiveId);
      const incentives = this.getIncentivesForExecutive(salesExecutiveId);
      const totalSales = salesRecords.filter(r => r.status === 'completed').reduce((sum, r) => sum + r.amount, 0);
      const totalIncentives = incentives.filter(i => i.status !== 'pending').reduce((sum, i) => sum + i.amount, 0);
      // Generate monthly breakdown for last 6 months
      const breakdown = [];
      for (let i = 5; i >= 0; i--) {
        const date = new Date();
        date.setMonth(date.getMonth() - i);
        const monthKey = date.toISOString().substring(0, 7);
        const monthSales = salesRecords.filter(r => r.date.toISOString().substring(0, 7) === monthKey && r.status === 'completed').reduce((sum, r) => sum + r.amount, 0);
        const monthIncentives = incentives.filter(i => i.earnedDate.toISOString().substring(0, 7) === monthKey && i.status !== 'pending').reduce((sum, i) => sum + i.amount, 0);
        breakdown.push({
          month: monthKey,
          sales: monthSales,
          incentives: monthIncentives
        });
      }
      const reportData = {
        salesExecutiveId,
        salesExecutiveName: exec?.name || 'Unknown',
        totalSales,
        totalIncentives,
        period: 'Last 6 months',
        breakdown
      };
      // DEBUG_LOG: Report data generated
      console.log('[DummyDataService] Report data generated:', reportData);
      return reportData;
    }
    /**
     * Get all sales executives
     * @returns List of sales executives
     */
    getSalesExecutives() {
      const executives = this.salesExecutivesSubject.value;
      // DEBUG_LOG: Getting all sales executives
      console.log('[DummyDataService] getSalesExecutives() called, returning', executives.length, 'executives');
      return executives;
    }
    /**
     * Get all incentive rules
     * @returns List of incentive rules
     */
    getIncentiveRules() {
      const rules = this.incentiveRulesSubject.value;
      // DEBUG_LOG: Getting all incentive rules
      console.log('[DummyDataService] getIncentiveRules() called, returning', rules.length, 'rules');
      return rules;
    }
    /**
     * Add a new incentive rule
     * @param rule Incentive rule to add
     */
    addIncentiveRule(rule) {
      // DEBUG_LOG: Adding new incentive rule
      console.log('[DummyDataService] addIncentiveRule() called with:', rule);
      const currentRules = this.incentiveRulesSubject.value;
      this.incentiveRulesSubject.next([...currentRules, rule]);
      // DEBUG_LOG: Rule added successfully
      console.log('[DummyDataService] Rule added successfully, total rules:', this.incentiveRulesSubject.value.length);
    }
    /**
     * Update an existing incentive rule
     * @param ruleId ID of the rule to update
     * @param updates Partial rule updates
     */
    updateIncentiveRule(ruleId, updates) {
      // DEBUG_LOG: Updating incentive rule
      console.log('[DummyDataService] updateIncentiveRule() called for rule:', ruleId, 'with updates:', updates);
      const currentRules = this.incentiveRulesSubject.value;
      const updatedRules = currentRules.map(rule => rule.id === ruleId ? {
        ...rule,
        ...updates
      } : rule);
      this.incentiveRulesSubject.next(updatedRules);
      // DEBUG_LOG: Rule updated successfully
      console.log('[DummyDataService] Rule updated successfully');
    }
    /**
     * Delete an incentive rule
     * @param ruleId ID of the rule to delete
     */
    deleteIncentiveRule(ruleId) {
      // DEBUG_LOG: Deleting incentive rule
      console.log('[DummyDataService] deleteIncentiveRule() called for rule:', ruleId);
      const currentRules = this.incentiveRulesSubject.value;
      const filteredRules = currentRules.filter(rule => rule.id !== ruleId);
      this.incentiveRulesSubject.next(filteredRules);
      // DEBUG_LOG: Rule deleted successfully
      console.log('[DummyDataService] Rule deleted successfully, remaining rules:', this.incentiveRulesSubject.value.length);
    }
    static {
      this.ɵfac = function DummyDataService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || DummyDataService)();
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: DummyDataService,
        factory: DummyDataService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return DummyDataService;
})();

/***/ }),

/***/ 8040:
/*!*************************************************************!*\
  !*** ./projects/core-services/src/lib/event-bus.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventBusService: () => (/* binding */ EventBusService)
/* harmony export */ });
/* harmony import */ var mitt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mitt */ 762);
/* harmony import */ var mitt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mitt__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4866);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 5565);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);



let EventBusService = /*#__PURE__*/(() => {
  class EventBusService {
    constructor() {
      this.emitter = mitt__WEBPACK_IMPORTED_MODULE_0___default()();
      // DEBUG_LOG: EventBusService initialized
      console.log('[EventBusService] Service initialized');
      const e = new Event('EventBusServiceCreated');
      this.onePlusNEvents = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(100);
      this.onePlusNEvents.next(e.type);
      this.emitter.on('*', event => {
        // DEBUG_LOG: Event received
        console.log('[EventBusService] Event received and forwarded to ReplaySubject:', event);
        this.onePlusNEvents.next(event);
      });
      // DEBUG_LOG: Event listener registered
      console.log('[EventBusService] Event listener registered for all events');
    }
    sendEvent(s) {
      // DEBUG_LOG: Sending event
      console.log('[EventBusService] sendEvent() called with:', s);
      this.emitter.emit(s);
      // DEBUG_LOG: Event emitted
      console.log('[EventBusService] Event emitted successfully');
    }
    static {
      this.ɵfac = function EventBusService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EventBusService)();
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: EventBusService,
        factory: EventBusService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return EventBusService;
})();

/***/ }),

/***/ 7843:
/*!**************************************************************!*\
  !*** ./projects/core-services/src/lib/mfe-loader.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MfeLoaderService: () => (/* binding */ MfeLoaderService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_i17e_code_i17e_code_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4866);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_architects_module_federation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-architects/module-federation */ 578);
/* harmony import */ var _angular_architects_module_federation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_architects_module_federation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 5565);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




/**
 * Service to manage MFE loading with priority support
 */
let MfeLoaderService = /*#__PURE__*/(() => {
  class MfeLoaderService {
    constructor() {
      this.mfeConfigs = [];
      this.loadedMfesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(new Set());
      this.loadedMfes$ = this.loadedMfesSubject.asObservable();
      this.loadingMfesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(new Set());
      this.loadingMfes$ = this.loadingMfesSubject.asObservable();
      // DEBUG_LOG: MfeLoaderService initialized
      console.log('[MfeLoaderService] Service initialized');
    }
    /**
     * Set MFE configurations
     * @param configs Array of MFE configurations
     */
    setConfigs(configs) {
      // DEBUG_LOG: Setting MFE configurations
      console.log('[MfeLoaderService] setConfigs() called with', configs.length, 'configurations');
      this.mfeConfigs = configs.sort((a, b) => b.priority - a.priority);
      // DEBUG_LOG: Configurations sorted by priority
      console.log('[MfeLoaderService] Configurations sorted by priority:', this.mfeConfigs.map(c => ({
        name: c.name,
        priority: c.priority
      })));
    }
    /**
     * Get all MFE configurations
     * @returns Array of MFE configurations
     */
    getConfigs() {
      // DEBUG_LOG: Getting all MFE configurations
      console.log('[MfeLoaderService] getConfigs() called, returning', this.mfeConfigs.length, 'configurations');
      return this.mfeConfigs;
    }
    /**
     * Get MFE configurations filtered by allowed roles
     * @param userRole Current user's role
     * @returns Filtered MFE configurations
     */
    getConfigsForRole(userRole) {
      // DEBUG_LOG: Getting MFE configs for role
      console.log('[MfeLoaderService] getConfigsForRole() called for role:', userRole);
      const configs = this.mfeConfigs.filter(config => config.allowedRoles.includes(userRole));
      // DEBUG_LOG: Configs filtered by role
      console.log('[MfeLoaderService] Found', configs.length, 'configurations for role:', userRole, configs.map(c => c.name));
      return configs;
    }
    /**
     * Get MFE configuration by name
     * @param name MFE name
     * @returns MFE configuration or undefined
     */
    getConfigByName(name) {
      // DEBUG_LOG: Getting MFE config by name
      console.log('[MfeLoaderService] getConfigByName() called for:', name);
      const config = this.mfeConfigs.find(config => config.name === name);
      // DEBUG_LOG: Config found or not
      if (config) {
        console.log('[MfeLoaderService] Found configuration for:', name);
      } else {
        console.warn('[MfeLoaderService] Configuration not found for:', name);
      }
      return config;
    }
    /**
     * Preload high-priority MFEs
     * @param userRole Current user's role
     * @returns Promise that resolves when preloading is complete
     */
    preloadPriorityMfes(userRole) {
      var _this = this;
      return (0,_home_runner_work_i17e_code_i17e_code_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        // DEBUG_LOG: Preloading priority MFEs
        console.log('[MfeLoaderService] preloadPriorityMfes() called for role:', userRole);
        const allowedConfigs = _this.getConfigsForRole(userRole);
        const priorityConfigs = allowedConfigs.filter(config => config.priority >= 5);
        // DEBUG_LOG: Priority MFEs to preload
        console.log('[MfeLoaderService] Preloading', priorityConfigs.length, 'priority MFEs:', priorityConfigs.map(c => ({
          name: c.name,
          priority: c.priority
        })));
        const loadPromises = priorityConfigs.map(config => _this.loadMfe(config));
        yield Promise.all(loadPromises);
        // DEBUG_LOG: Preloading complete
        console.log('[MfeLoaderService] Preloading complete');
      })();
    }
    /**
     * Load a specific MFE
     * @param config MFE configuration
     * @returns Promise that resolves to the loaded module
     */
    loadMfe(config) {
      var _this2 = this;
      return (0,_home_runner_work_i17e_code_i17e_code_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const loadingMfes = _this2.loadingMfesSubject.value;
        const loadedMfes = _this2.loadedMfesSubject.value;
        // Check if already loaded
        if (loadedMfes.has(config.name)) {
          // DEBUG_LOG: MFE already loaded
          console.log(`[MfeLoaderService] MFE ${config.name} already loaded`);
          return;
        }
        // Check if already loading
        if (loadingMfes.has(config.name)) {
          // DEBUG_LOG: MFE already loading
          console.log(`[MfeLoaderService] MFE ${config.name} is already loading`);
          return;
        }
        try {
          // Mark as loading
          const newLoadingMfes = new Set(loadingMfes);
          newLoadingMfes.add(config.name);
          _this2.loadingMfesSubject.next(newLoadingMfes);
          // DEBUG_LOG: Starting MFE load
          console.log(`[MfeLoaderService] Loading MFE ${config.name} (priority: ${config.priority})`);
          console.log(`[MfeLoaderService] MFE config:`, {
            name: config.name,
            url: config.url,
            exposedModule: config.exposedModule,
            remoteName: config.remoteName
          });
          const module = yield (0,_angular_architects_module_federation__WEBPACK_IMPORTED_MODULE_3__.loadRemoteModule)({
            type: 'module',
            remoteEntry: config.url,
            exposedModule: config.exposedModule
          });
          // Mark as loaded
          const newLoadedMfes = new Set(loadedMfes);
          newLoadedMfes.add(config.name);
          _this2.loadedMfesSubject.next(newLoadedMfes);
          // Remove from loading
          const updatedLoadingMfes = new Set(_this2.loadingMfesSubject.value);
          updatedLoadingMfes.delete(config.name);
          _this2.loadingMfesSubject.next(updatedLoadingMfes);
          // DEBUG_LOG: MFE loaded successfully
          console.log(`[MfeLoaderService] Successfully loaded MFE ${config.name}`);
          console.log(`[MfeLoaderService] Currently loaded MFEs:`, Array.from(_this2.loadedMfesSubject.value));
          return module;
        } catch (error) {
          // DEBUG_LOG: Error loading MFE
          console.error(`[MfeLoaderService] Error loading MFE ${config.name}:`, error);
          console.error(`[MfeLoaderService] Failed config:`, {
            name: config.name,
            url: config.url,
            exposedModule: config.exposedModule
          });
          // Remove from loading on error
          const updatedLoadingMfes = new Set(_this2.loadingMfesSubject.value);
          updatedLoadingMfes.delete(config.name);
          _this2.loadingMfesSubject.next(updatedLoadingMfes);
          throw error;
        }
      })();
    }
    /**
     * Check if MFE is loaded
     * @param name MFE name
     * @returns true if loaded
     */
    isMfeLoaded(name) {
      const isLoaded = this.loadedMfesSubject.value.has(name);
      // DEBUG_LOG: Checking if MFE is loaded
      console.log(`[MfeLoaderService] isMfeLoaded(${name}):`, isLoaded);
      return isLoaded;
    }
    /**
     * Check if MFE is loading
     * @param name MFE name
     * @returns true if loading
     */
    isMfeLoading(name) {
      const isLoading = this.loadingMfesSubject.value.has(name);
      // DEBUG_LOG: Checking if MFE is loading
      console.log(`[MfeLoaderService] isMfeLoading(${name}):`, isLoading);
      return isLoading;
    }
    static {
      this.ɵfac = function MfeLoaderService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MfeLoaderService)();
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: MfeLoaderService,
        factory: MfeLoaderService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return MfeLoaderService;
})();

/***/ }),

/***/ 311:
/*!**************************************************************!*\
  !*** ./projects/core-services/src/lib/models/roles.model.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserRole: () => (/* binding */ UserRole),
/* harmony export */   hasRequiredRole: () => (/* binding */ hasRequiredRole)
/* harmony export */ });
/**
 * User roles in descending order of privilege
 */
var UserRole = /*#__PURE__*/function (UserRole) {
  UserRole["SUPER_ADMIN"] = "super-admin";
  UserRole["ORG_ADMIN"] = "org-admin";
  UserRole["TEAM_LEAD"] = "team-lead";
  UserRole["SALES_EXECUTIVE"] = "sales-executive";
  return UserRole;
}(UserRole || {});
/**
 * Helper function to check if a role has required privilege
 * @param userRole Current user's role
 * @param requiredRole Minimum required role
 * @returns true if user has sufficient privilege
 */
function hasRequiredRole(userRole, requiredRole) {
  const roleHierarchy = {
    [UserRole.SUPER_ADMIN]: 4,
    [UserRole.ORG_ADMIN]: 3,
    [UserRole.TEAM_LEAD]: 2,
    [UserRole.SALES_EXECUTIVE]: 1
  };
  return roleHierarchy[userRole] >= roleHierarchy[requiredRole];
}

/***/ }),

/***/ 9917:
/*!********************************************************!*\
  !*** ./projects/core-services/src/lib/role.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoleService: () => (/* binding */ RoleService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4866);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_roles_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/roles.model */ 311);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5565);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Service to manage user roles and permissions
 */
let RoleService = /*#__PURE__*/(() => {
  class RoleService {
    constructor() {
      this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
      this.currentUser$ = this.currentUserSubject.asObservable();
      // DEBUG_LOG: RoleService initialized
      console.log('[RoleService] Service initialized');
      // Initialize with dummy user for development
      this.loadDummyUser();
    }
    /**
     * Load dummy user based on session or default
     */
    loadDummyUser() {
      // DEBUG_LOG: Loading user from session storage
      console.log('[RoleService] Loading user from session storage');
      const savedUser = sessionStorage.getItem('current_user');
      if (savedUser) {
        const user = JSON.parse(savedUser);
        // DEBUG_LOG: User loaded from session
        console.log('[RoleService] User loaded from session:', user);
        this.currentUserSubject.next(user);
      } else {
        // Default to sales executive for demo
        const defaultUser = {
          id: '1',
          name: 'John Doe',
          email: 'john.doe@example.com',
          role: _models_roles_model__WEBPACK_IMPORTED_MODULE_2__.UserRole.ORG_ADMIN
        };
        // DEBUG_LOG: No saved user, using default
        console.log('[RoleService] No saved user found, using default:', defaultUser);
        this.setCurrentUser(defaultUser);
      }
    }
    /**
     * Set the current user
     * @param user User to set as current
     */
    setCurrentUser(user) {
      // DEBUG_LOG: Setting current user
      console.log('[RoleService] Setting current user:', user);
      this.currentUserSubject.next(user);
      if (user) {
        sessionStorage.setItem('current_user', JSON.stringify(user));
        // DEBUG_LOG: User saved to session
        console.log('[RoleService] User saved to session storage');
      } else {
        sessionStorage.removeItem('current_user');
        // DEBUG_LOG: User removed from session
        console.log('[RoleService] User removed from session storage');
      }
    }
    /**
     * Get the current user synchronously
     * @returns Current user or null
     */
    getCurrentUser() {
      const user = this.currentUserSubject.value;
      // DEBUG_LOG: Getting current user
      console.log('[RoleService] getCurrentUser() called, returning:', user);
      return user;
    }
    /**
     * Get the current user's role
     * @returns Current user's role or null
     */
    getCurrentUserRole() {
      const role = this.currentUserSubject.value?.role || null;
      // DEBUG_LOG: Getting current user role
      console.log('[RoleService] getCurrentUserRole() called, returning:', role);
      return role;
    }
    /**
     * Check if current user has required role
     * @param requiredRole Minimum required role
     * @returns true if user has sufficient privilege
     */
    hasRole(requiredRole) {
      const currentRole = this.getCurrentUserRole();
      if (!currentRole) {
        // DEBUG_LOG: No current role
        console.log('[RoleService] hasRole() - No current role, access denied');
        return false;
      }
      const hasAccess = (0,_models_roles_model__WEBPACK_IMPORTED_MODULE_2__.hasRequiredRole)(currentRole, requiredRole);
      // DEBUG_LOG: Role check result
      console.log(`[RoleService] hasRole() - Checking if ${currentRole} has ${requiredRole}:`, hasAccess);
      return hasAccess;
    }
    /**
     * Check if current user is admin or team lead
     * @returns true if user can view other users' data
     */
    canViewOthersData() {
      const role = this.getCurrentUserRole();
      const canView = role === _models_roles_model__WEBPACK_IMPORTED_MODULE_2__.UserRole.SUPER_ADMIN || role === _models_roles_model__WEBPACK_IMPORTED_MODULE_2__.UserRole.ORG_ADMIN || role === _models_roles_model__WEBPACK_IMPORTED_MODULE_2__.UserRole.TEAM_LEAD;
      // DEBUG_LOG: Can view others data check
      console.log(`[RoleService] canViewOthersData() - Role: ${role}, Can view:`, canView);
      return canView;
    }
    /**
     *
     * From this point everything is taken from mfe-MY_SALES
     */
    /**
     * Get users that current user can view
     * - Admins and team leads can view all users
     * - Sales executives can only view themselves
     * @returns Array of users that current user can view
     */
    getViewableUsers() {
      const currentUser = this.getCurrentUser();
      if (!currentUser) return [];
      const allUsers = this.getAllUsers();
      if (this.isTeamLeadOrHigher()) {
        return allUsers.filter(u => u.role === _models_roles_model__WEBPACK_IMPORTED_MODULE_2__.UserRole.SALES_EXECUTIVE || u.id === currentUser.id);
      }
      return allUsers.filter(u => u.id === currentUser.id);
    }
    /**
    * Check if current user has any of the specified roles
    * @param roles - Array of roles to check
    * @returns true if user has any of the specified roles
    */
    hasAnyRole(roles) {
      const user = this.getCurrentUser();
      return user ? roles.includes(user.role) : false;
    }
    /**
     * Check if current user is admin (super-admin or org-admin)
     * @returns true if user is an admin
     */
    isAdmin() {
      return this.hasAnyRole([_models_roles_model__WEBPACK_IMPORTED_MODULE_2__.UserRole.SUPER_ADMIN, _models_roles_model__WEBPACK_IMPORTED_MODULE_2__.UserRole.ORG_ADMIN]);
    }
    /**
     * Check if current user is team lead or higher
     * @returns true if user is team lead or admin
     */
    isTeamLeadOrHigher() {
      return this.hasAnyRole([_models_roles_model__WEBPACK_IMPORTED_MODULE_2__.UserRole.SUPER_ADMIN, _models_roles_model__WEBPACK_IMPORTED_MODULE_2__.UserRole.ORG_ADMIN, _models_roles_model__WEBPACK_IMPORTED_MODULE_2__.UserRole.TEAM_LEAD]);
    }
    /**
     * Get all dummy users for testing/demo purposes
     * @returns Array of dummy users
     */
    getAllUsers() {
      return [{
        id: 'user-1',
        name: 'John Admin',
        email: 'john.admin@company.com',
        role: _models_roles_model__WEBPACK_IMPORTED_MODULE_2__.UserRole.SUPER_ADMIN
      }, {
        id: 'user-2',
        name: 'Sarah Manager',
        email: 'sarah.manager@company.com',
        role: _models_roles_model__WEBPACK_IMPORTED_MODULE_2__.UserRole.ORG_ADMIN
      }, {
        id: 'user-3',
        name: 'Mike Lead',
        email: 'mike.lead@company.com',
        role: _models_roles_model__WEBPACK_IMPORTED_MODULE_2__.UserRole.TEAM_LEAD,
        teamId: 'team-1'
      }, {
        id: 'user-4',
        name: 'Alice Sales',
        email: 'alice.sales@company.com',
        role: _models_roles_model__WEBPACK_IMPORTED_MODULE_2__.UserRole.SALES_EXECUTIVE,
        teamId: 'team-1',
        managerId: 'user-3'
      }, {
        id: 'user-5',
        name: 'Bob Sales',
        email: 'bob.sales@company.com',
        role: _models_roles_model__WEBPACK_IMPORTED_MODULE_2__.UserRole.SALES_EXECUTIVE,
        teamId: 'team-1',
        managerId: 'user-3'
      }, {
        id: 'user-6',
        name: 'Carol Sales',
        email: 'carol.sales@company.com',
        role: _models_roles_model__WEBPACK_IMPORTED_MODULE_2__.UserRole.SALES_EXECUTIVE,
        teamId: 'team-1',
        managerId: 'user-3'
      }];
    }
    static {
      this.ɵfac = function RoleService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || RoleService)();
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: RoleService,
        factory: RoleService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return RoleService;
})();

/***/ }),

/***/ 2688:
/*!**************************************************!*\
  !*** ./projects/core-services/src/public-api.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* reexport safe */ _lib_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService),
/* harmony export */   CoreServicesComponent: () => (/* reexport safe */ _lib_core_services_component__WEBPACK_IMPORTED_MODULE_2__.CoreServicesComponent),
/* harmony export */   CoreServicesService: () => (/* reexport safe */ _lib_core_services_service__WEBPACK_IMPORTED_MODULE_0__.CoreServicesService),
/* harmony export */   DummyDataService: () => (/* reexport safe */ _lib_dummy_data_service__WEBPACK_IMPORTED_MODULE_4__.DummyDataService),
/* harmony export */   EventBusService: () => (/* reexport safe */ _lib_event_bus_service__WEBPACK_IMPORTED_MODULE_6__.EventBusService),
/* harmony export */   MfeLoaderService: () => (/* reexport safe */ _lib_mfe_loader_service__WEBPACK_IMPORTED_MODULE_5__.MfeLoaderService),
/* harmony export */   RoleService: () => (/* reexport safe */ _lib_role_service__WEBPACK_IMPORTED_MODULE_3__.RoleService),
/* harmony export */   UserRole: () => (/* reexport safe */ _lib_models_roles_model__WEBPACK_IMPORTED_MODULE_7__.UserRole),
/* harmony export */   hasRequiredRole: () => (/* reexport safe */ _lib_models_roles_model__WEBPACK_IMPORTED_MODULE_7__.hasRequiredRole)
/* harmony export */ });
/* harmony import */ var _lib_core_services_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/core-services.service */ 3573);
/* harmony import */ var _lib_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/auth.service */ 3607);
/* harmony import */ var _lib_core_services_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/core-services.component */ 9089);
/* harmony import */ var _lib_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/role.service */ 9917);
/* harmony import */ var _lib_dummy_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/dummy-data.service */ 4662);
/* harmony import */ var _lib_mfe_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/mfe-loader.service */ 7843);
/* harmony import */ var _lib_event_bus_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/event-bus.service */ 8040);
/* harmony import */ var _lib_models_roles_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/models/roles.model */ 311);
/*
 * Public API Surface of core-services
 */



// Services




// Models




/***/ }),

/***/ 578:
/*!*************************************************************************!*\
  !*** ./node_modules/@angular-architects/module-federation/src/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(/*! tslib */ 4398);
tslib_1.__exportStar(__webpack_require__(/*! @angular-architects/module-federation-runtime */ 3879), exports);

/***/ }),

/***/ 3879:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@angular-architects/module-federation-runtime/fesm2022/angular-architects-module-federation-runtime.mjs ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getManifest: () => (/* binding */ getManifest),
/* harmony export */   initFederation: () => (/* binding */ initFederation),
/* harmony export */   loadManifest: () => (/* binding */ loadManifest),
/* harmony export */   loadRemoteEntry: () => (/* binding */ loadRemoteEntry),
/* harmony export */   loadRemoteModule: () => (/* binding */ loadRemoteModule),
/* harmony export */   setManifest: () => (/* binding */ setManifest)
/* harmony export */ });
/* harmony import */ var _home_runner_work_i17e_code_i17e_code_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);

let config = {};
const containerMap = {};
const remoteMap = {};
let isDefaultScopeInitialized = false;
function lookupExposedModule(_x, _x2) {
  return _lookupExposedModule.apply(this, arguments);
}
function _lookupExposedModule() {
  _lookupExposedModule = (0,_home_runner_work_i17e_code_i17e_code_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (key, exposedModule) {
    const container = containerMap[key];
    const factory = yield container.get(exposedModule);
    const Module = factory();
    return Module;
  });
  return _lookupExposedModule.apply(this, arguments);
}
function initRemote(_x3, _x4) {
  return _initRemote.apply(this, arguments);
}
function _initRemote() {
  _initRemote = (0,_home_runner_work_i17e_code_i17e_code_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (container, key) {
    // const container = window[key] as Container;
    // Do we still need to initialize the remote?
    if (remoteMap[key]) {
      return container;
    }
    // Do we still need to initialize the share scope?
    if (!isDefaultScopeInitialized) {
      yield __webpack_require__.I('default');
      isDefaultScopeInitialized = true;
    }
    yield container.init(__webpack_require__.S.default);
    remoteMap[key] = true;
    return container;
  });
  return _initRemote.apply(this, arguments);
}
function loadRemoteEntry(_x5, _x6) {
  return _loadRemoteEntry.apply(this, arguments);
}
function _loadRemoteEntry() {
  _loadRemoteEntry = (0,_home_runner_work_i17e_code_i17e_code_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (remoteEntryOrOptions, remoteName) {
    if (typeof remoteEntryOrOptions === 'string') {
      const remoteEntry = remoteEntryOrOptions;
      return yield loadRemoteScriptEntry(remoteEntry, remoteName);
    } else if (remoteEntryOrOptions.type === 'script') {
      const options = remoteEntryOrOptions;
      return yield loadRemoteScriptEntry(options.remoteEntry, options.remoteName);
    } else if (remoteEntryOrOptions.type === 'module') {
      const options = remoteEntryOrOptions;
      yield loadRemoteModuleEntry(options.remoteEntry);
    }
  });
  return _loadRemoteEntry.apply(this, arguments);
}
function loadRemoteModuleEntry(_x7) {
  return _loadRemoteModuleEntry.apply(this, arguments);
}
function _loadRemoteModuleEntry() {
  _loadRemoteModuleEntry = (0,_home_runner_work_i17e_code_i17e_code_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (remoteEntry) {
    if (containerMap[remoteEntry]) {
      return Promise.resolve();
    }
    return yield import(/* webpackIgnore:true */remoteEntry).then(container => {
      initRemote(container, remoteEntry);
      containerMap[remoteEntry] = container;
    });
  });
  return _loadRemoteModuleEntry.apply(this, arguments);
}
function loadRemoteScriptEntry(_x8, _x9) {
  return _loadRemoteScriptEntry.apply(this, arguments);
}
function _loadRemoteScriptEntry() {
  _loadRemoteScriptEntry = (0,_home_runner_work_i17e_code_i17e_code_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (remoteEntry, remoteName) {
    return new Promise((resolve, reject) => {
      // Is remoteEntry already loaded?
      if (containerMap[remoteName]) {
        resolve();
        return;
      }
      const script = document.createElement('script');
      script.src = remoteEntry;
      script.onerror = reject;
      script.onload = () => {
        const container = window[remoteName];
        initRemote(container, remoteName);
        containerMap[remoteName] = container;
        resolve();
      };
      document.body.appendChild(script);
    });
  });
  return _loadRemoteScriptEntry.apply(this, arguments);
}
function loadRemoteModule(_x0, _x1) {
  return _loadRemoteModule.apply(this, arguments);
}
function _loadRemoteModule() {
  _loadRemoteModule = (0,_home_runner_work_i17e_code_i17e_code_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (optionsOrRemoteName, exposedModule) {
    let loadRemoteEntryOptions;
    let key;
    let remoteEntry;
    let options;
    if (typeof optionsOrRemoteName === 'string') {
      options = {
        type: 'manifest',
        remoteName: optionsOrRemoteName,
        exposedModule: exposedModule
      };
    } else {
      options = optionsOrRemoteName;
    }
    // To support legacy API (< ng 13)
    if (!options.type) {
      const hasManifest = Object.keys(config).length > 0;
      options.type = hasManifest ? 'manifest' : 'script';
    }
    if (options.type === 'manifest') {
      const manifestEntry = config[options.remoteName];
      if (!manifestEntry) {
        throw new Error('Manifest does not contain ' + options.remoteName);
      }
      options = {
        type: manifestEntry.type,
        exposedModule: options.exposedModule,
        remoteEntry: manifestEntry.remoteEntry,
        remoteName: manifestEntry.type === 'script' ? options.remoteName : undefined
      };
      remoteEntry = manifestEntry.remoteEntry;
    } else {
      remoteEntry = options.remoteEntry;
    }
    if (options.type === 'script') {
      loadRemoteEntryOptions = {
        type: 'script',
        remoteEntry: options.remoteEntry,
        remoteName: options.remoteName
      };
      key = options.remoteName;
    } else if (options.type === 'module') {
      loadRemoteEntryOptions = {
        type: 'module',
        remoteEntry: options.remoteEntry
      };
      key = options.remoteEntry;
    }
    if (remoteEntry) {
      yield loadRemoteEntry(loadRemoteEntryOptions);
    }
    return yield lookupExposedModule(key, options.exposedModule);
  });
  return _loadRemoteModule.apply(this, arguments);
}
function setManifest(_x10) {
  return _setManifest.apply(this, arguments);
}
function _setManifest() {
  _setManifest = (0,_home_runner_work_i17e_code_i17e_code_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (manifest, skipRemoteEntries = false) {
    config = parseConfig(manifest);
    if (!skipRemoteEntries) {
      yield loadRemoteEntries();
    }
  });
  return _setManifest.apply(this, arguments);
}
function getManifest() {
  return config;
}
function initFederation(_x11) {
  return _initFederation.apply(this, arguments);
}
function _initFederation() {
  _initFederation = (0,_home_runner_work_i17e_code_i17e_code_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (manifest, skipRemoteEntries = false) {
    if (typeof manifest === 'string') {
      return loadManifest(manifest, skipRemoteEntries);
    } else {
      return setManifest(manifest, skipRemoteEntries);
    }
  });
  return _initFederation.apply(this, arguments);
}
function loadManifest(_x12) {
  return _loadManifest.apply(this, arguments);
}
function _loadManifest() {
  _loadManifest = (0,_home_runner_work_i17e_code_i17e_code_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (configFile, skipRemoteEntries = false) {
    const result = yield fetch(configFile);
    if (!result.ok) {
      throw Error('could not load configFile: ' + configFile);
    }
    config = parseConfig(yield result.json());
    if (!skipRemoteEntries) {
      yield loadRemoteEntries();
    }
  });
  return _loadManifest.apply(this, arguments);
}
function parseConfig(config) {
  const result = {};
  for (const key in config) {
    const value = config[key];
    let entry;
    if (typeof value === 'string') {
      entry = {
        remoteEntry: value,
        type: 'module'
      };
    } else {
      entry = {
        ...value,
        type: value.type || 'module'
      };
    }
    result[key] = entry;
  }
  return result;
}
function loadRemoteEntries() {
  return _loadRemoteEntries.apply(this, arguments);
}
/**
 * Generated bundle index. Do not edit.
 */
function _loadRemoteEntries() {
  _loadRemoteEntries = (0,_home_runner_work_i17e_code_i17e_code_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
    const promises = [];
    for (const key in config) {
      const entry = config[key];
      if (entry.type === 'module') {
        promises.push(loadRemoteEntry({
          type: 'module',
          remoteEntry: entry.remoteEntry
        }));
      } else {
        promises.push(loadRemoteEntry({
          type: 'script',
          remoteEntry: entry.remoteEntry,
          remoteName: key
        }));
      }
    }
    yield Promise.all(promises);
  });
  return _loadRemoteEntries.apply(this, arguments);
}


/***/ }),

/***/ 9204:
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}


/***/ }),

/***/ 4398:
/*!******************************************!*\
  !*** ./node_modules/tslib/tslib.es6.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __addDisposableResource: () => (/* binding */ __addDisposableResource),
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldIn: () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __disposeResources: () => (/* binding */ __disposeResources),
/* harmony export */   __esDecorate: () => (/* binding */ __esDecorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __propKey: () => (/* binding */ __propKey),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __rewriteRelativeImportExtension: () => (/* binding */ __rewriteRelativeImportExtension),
/* harmony export */   __runInitializers: () => (/* binding */ __runInitializers),
/* harmony export */   __setFunctionName: () => (/* binding */ __setFunctionName),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArray: () => (/* binding */ __spreadArray),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
  function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
  function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

var ownKeys = function(o) {
  ownKeys = Object.getOwnPropertyNames || function (o) {
    var ar = [];
    for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
    return ar;
  };
  return ownKeys(o);
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r, s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
        }
        else s |= 1;
      }
      catch (e) {
        fail(e);
      }
    }
    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}

function __rewriteRelativeImportExtension(path, preserveJsx) {
  if (typeof path === "string" && /^\.\.?\//.test(path)) {
      return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (m, tsx, d, ext, cm) {
          return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : (d + ext + "." + cm.toLowerCase() + "js");
      });
  }
  return path;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __esDecorate,
  __runInitializers,
  __propKey,
  __setFunctionName,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
  __rewriteRelativeImportExtension,
});


/***/ })

}])
//# sourceMappingURL=688.js.map