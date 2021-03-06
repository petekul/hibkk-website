(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/pete/Documents/GitHub/hibkk-website/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "4zdL":
    /*!**********************************************!*\
      !*** ./src/app/toolbar/toolbar.component.ts ***!
      \**********************************************/

    /*! exports provided: ToolbarComponent */

    /***/
    function zdL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function () {
        return ToolbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ToolbarComponent = /*#__PURE__*/function () {
        function ToolbarComponent() {
          _classCallCheck(this, ToolbarComponent);
        }

        _createClass(ToolbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ToolbarComponent;
      }();

      ToolbarComponent.??fac = function ToolbarComponent_Factory(t) {
        return new (t || ToolbarComponent)();
      };

      ToolbarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ToolbarComponent,
        selectors: [["app-toolbar"]],
        decls: 7,
        vars: 0,
        consts: [["role", "banner", 1, "toolbar"], ["alt", "Hi Bangkok Logo", "src", "./../../assets/images/logo.png", "routerLink", "/"], [1, "spacer"], ["aria-label", "Menu", "rel", "noopener", "routerLink", "/menu", "title", "Menu", 1, "toolbar-link"], ["aria-label", "Reservations", "rel", "noopener", "routerLink", "/reservations", "title", "Reservations", 1, "toolbar-link", "toolbar-reservations"]],
        template: function ToolbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " Menu ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " Reservations ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: [".spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4rem;\n  display: flex;\n  align-items: center;\n  background-color: #000;\n  color: black;\n  font-weight: 600;\n  padding: 0 2rem;\n  z-index: 1;\n}\n\n.toolbar-link[_ngcontent-%COMP%] {\n  margin: 0 1rem;\n}\n\n.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 1rem;\n  height: 4rem;\n}\n\n.toolbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #cd0b0b;\n  font-size: 16px;\n}\n\n@media (max-width: 680px) {\n  .toolbar[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .toolbar-reservations[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Rvb2xiYXIuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9zdHlsZXNoZWV0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxPQUFBO0FBREo7O0FBSUU7RUFDRSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkNWVTtFRFdWLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBREo7O0FBRUk7RUFDSSxjQUFBO0FBQVI7O0FBSUU7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQURKOztBQUlFO0VBQ0UsY0M3QlE7RUQ4QlIsZUN4QlE7QUR1Qlo7O0FBSUU7RUFDRTtJQUNFLFVBQUE7RUFESjtFQUVJO0lBQ0UsYUFBQTtFQUFOO0FBQ0YiLCJmaWxlIjoidG9vbGJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJy4uLy4uL3N0eWxlc2hlZXQuc2NzcycgYXMgc3R5bGVzO1xuXG4gIC5zcGFjZXIge1xuICAgIGZsZXg6IDE7XG4gIH1cblxuICAudG9vbGJhciB7XG4gICAgcG9zaXRpb246c3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogNHJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogc3R5bGVzLiRjb2xvci1ibGFjaztcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBwYWRkaW5nOjAgMnJlbTtcbiAgICB6LWluZGV4OiAxO1xuICAgICYtbGluayB7XG4gICAgICAgIG1hcmdpbjogMCAxcmVtO1xuICAgIH1cbiAgfVxuXG4gIC50b29sYmFyIGltZyB7XG4gICAgbWFyZ2luOiAwIDFyZW07XG4gICAgaGVpZ2h0OiA0cmVtO1xuICB9XG5cbiAgLnRvb2xiYXIgYSB7XG4gICAgY29sb3I6IHN0eWxlcy4kY29sb3ItcmVkO1xuICAgIGZvbnQtc2l6ZTogc3R5bGVzLiRmb250LXNpemU7XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogc3R5bGVzLiRzY3JlZW4tc2l6ZS1zbSkge1xuICAgIC50b29sYmFyIHtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAmLXJlc2VydmF0aW9uc3tcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH0iLCJcbiRjb2xvci1yZWQ6ICNjZDBiMGI7XG4kY29sb3ItZGFyay1yZWQ6ICNiMDBkMGI7XG4kY29sb3Itd2hpdGU6ICNmN2Y1ZjU7XG4kY29sb3ItYmxhY2s6ICMwMDA7XG5cbiRmb250LXNpemUtc206IDEycHg7XG4kZm9udC1zaXplOiAxNnB4O1xuJGZvbnQtc2l6ZS1tZDogMjBweDtcbiRmb250LXNpemUtbGc6IDI0cHg7XG5cbiRzY3JlZW4tc2l6ZS1zbTogNjgwcHg7XG4kc2NyZWVuLXNpemUtbWQ6IDEwMjRweDtcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "9vUh":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! exports provided: HomeComponent */

    /***/
    function vUh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _hero_hero_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../hero/hero.component */
      "XWKS");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _banner_banner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../banner/banner.component */
      "NH0R");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../footer/footer.component */
      "fp1T"); // @ViewChild('mapContainer', {static: false}) gmap: ElementRef;


      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent() {
          _classCallCheck(this, HomeComponent);

          this.title = 'hibkk-website';
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomeComponent;
      }();

      HomeComponent.??fac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)();
      };

      HomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 97,
        vars: 5,
        consts: [[3, "image"], ["role", "main", 1, "section"], [1, "subsection"], [1, "subsection-col", "info-aboutus"], [1, "subsection-col", "info-opening"], ["routerLink", "/menu"], ["routerLink", "/reservations"], [1, "subsection-col", "info-contact"], [1, "info-contact_phone"], [1, "material-icons"], ["href", "tel:02085425688"], [1, "info-contact_mail"], ["href", "mailto:hibkk@aol.com"], [1, "info-contact_location"], ["href", "https://www.google.com/maps/place/Hi+Bangkok,+132+Kingston+Rd,+London+SW19+1LY/@51.4149097,-0.2001869,15z/data=!4m2!3m1!1s0x487608bca72c9e07:0x8833fccc162408f7", "target", "_blank"], [1, "section"], [1, "subsection-col", "info-reservations"], [1, "info-reservations-text"], [3, "href"], ["src", "https://widget.quandoo.co.uk/widget/reservation/merchant/pXhTT?sid=2", "width", "310", "height", "342", "seamless", "seamless", "scrolling", "no", "frameborder", "0"], [1, "subsection-col", "info-takeaway"], [1, "info-takeaway-text"], ["href", "https://www.just-eat.co.uk/restaurants-tumnanthai-sw11/menu"], ["alt", "just-eat", "src", "./../../assets/images/just-eat.jpg", "width", "80"], ["href", "https://deliveroo.co.uk/menu/london/lavender-hill/tumnan-thai-restaurant"], ["alt", "deliveroo", "src", "./../../assets/images/deliveroo.png", "width", "80"], ["id", "booking"], [1, "subsection-col", "info-contact", "info-map-contact"], [1, "subsection-col", "info-map"], ["width", "100%", "height", "100%", "id", "gmap_canvas", "src", "https://maps.google.com/maps?q=hi%20bangkok%20london&t=&z=15&ie=UTF8&iwloc=&output=embed", "frameborder", "0", "scrolling", "no", "marginheight", "0", "marginwidth", "0"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-hero", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Hi! Bangkok");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Hi! Bangkok is Wimbledon\u2019s finest choice for authentic Thai cuisine. All of our family recipes have their roots right from the heart of Bangkok itself.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "We serve and a great variety of dishes ranging from the aromatic Satay skewers, our fragrant and creamy currys and our famous Phad Thai. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Thai food is an exotic journey of the senses, created from a perfect blend of spices to bring you to a world of flavour and harmony.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Opening Times");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Sun - Thu: 5:30 - 10:30pm");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Fri - Sat: 5:30 - 11:00pm");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "See the Menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Book a Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "02085425688");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "hibkk@aol.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "room");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "132 Kingston Road, SW19 1LY - London");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "app-banner", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Table Reservations");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "For takeaways and deliveries, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Please call: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "02085425688");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "or book on:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "iframe", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Takeaways & Delivery");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "For takeaways and deliveries, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Please call: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "02085425688");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "or order on:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](70, "img", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](72, "img", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](73, "app-banner", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "h1", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "Find us Here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "02085425688");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "hibkk@aol.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "room");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "132 Kingston Road, SW19 1LY - London");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](95, "iframe", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](96, "app-footer");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("image", "img-tomyum");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("image", "img-greencurry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("href", "tel:" + 2085425688, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("href", "tel:" + 2085425688, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("image", "img-restaurant");
          }
        },
        directives: [_hero_hero_component__WEBPACK_IMPORTED_MODULE_1__["HeroComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _banner_banner_component__WEBPACK_IMPORTED_MODULE_3__["BannerComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
        styles: ["h1[_ngcontent-%COMP%] {\n  color: #b00d0b;\n}\n\n.section[_ngcontent-%COMP%] {\n  display: flex;\n  margin: auto;\n  padding: 0 1rem;\n  flex-direction: column;\n  align-items: center;\n}\n\n.subsection[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.subsection-col[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  flex-basis: 0;\n  padding: 4rem;\n}\n\n.subsection-col[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n\n.subsection[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.info-opening[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.info-opening[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n\n.info-opening[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.info-opening[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-of-type {\n  margin-bottom: 0.5rem;\n}\n\n.info-opening[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 1rem;\n  min-width: 10rem;\n  margin: 1rem;\n  border: 0.1rem solid #8C0A08;\n  border-radius: 0.5rem;\n  box-sizing: border-box;\n  text-decoration: none;\n  font-weight: 700;\n  color: white;\n  text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);\n  text-align: center;\n  transition: all 0.2s;\n  background-color: #b00d0b;\n}\n\n.info-opening[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-of-type {\n  margin-top: 2rem;\n}\n\n.info-opening[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #cd0b0b;\n}\n\n.info-contact[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 2rem 0;\n  display: flex;\n  align-items: center;\n  font-size: 20px;\n}\n\n.info-contact[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #b00d0b;\n  margin-right: 0.5rem;\n}\n\n.info-takeaway[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.info-takeaway[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 12rem;\n  margin-top: 2rem;\n}\n\n.info-takeaway[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.info-reservations[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.info-reservations-text[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n\n.info-reservations[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.info-map[_ngcontent-%COMP%] {\n  min-height: 32rem;\n  min-width: 32rem;\n  padding: 1rem;\n}\n\n.info-map-contact[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n}\n\n.info-map-contact[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n}\n\n@media (max-width: 1024px) {\n  .subsection-col[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n\n  .info-map[_ngcontent-%COMP%] {\n    min-height: 26rem;\n    min-width: 26rem;\n    margin: 4rem 0;\n  }\n}\n\n@media (max-width: 680px) {\n  .subsection[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .subsection-col[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n\n  .info-contact[_ngcontent-%COMP%] {\n    padding: 1rem 5rem;\n  }\n  .info-map[_ngcontent-%COMP%] {\n    display: grid;\n    min-height: 20rem;\n    min-width: 20rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9zdHlsZXNoZWV0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxjQ0RhO0FEQWpCOztBQUdBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0FBQUo7O0FBQ0k7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUFDUjs7QUFBUTtFQUNJLG1CQUFBO0FBRVo7O0FBQ0k7RUFDSSxjQUFBO0FBQ1I7O0FBSUk7RUFDSSxrQkFBQTtBQURSOztBQUVRO0VBQ0kscUJBQUE7QUFBWjs7QUFFUTtFQUNJLGVDNUJHO0FENEJmOztBQUNZO0VBQ0kscUJBQUE7QUFDaEI7O0FBRVE7RUFJSSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdEQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQ3hESztBRHFEakI7O0FBYlk7RUFDSSxnQkFBQTtBQWVoQjs7QUFDWTtFQUNJLHlCQzNESjtBRDREWjs7QUFJUTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQzdERztBRDJEZjs7QUFJUTtFQUNJLGNDdEVLO0VEdUVMLG9CQUFBO0FBRlo7O0FBS0k7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUhSOztBQUlRO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FBRlo7O0FBSVE7RUFDSSxnQkFBQTtBQUZaOztBQUtJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFIUjs7QUFJUTtFQUNJLG1CQUFBO0FBRlo7O0FBSVE7RUFDSSxnQkFBQTtBQUZaOztBQUtJO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFIUjs7QUFJUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFGWjs7QUFHWTtFQUNJLGNBQUE7QUFEaEI7O0FBT0E7RUFFUTtJQUNJLGFBQUE7RUFMVjs7RUFVTTtJQUNJLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0VBUFY7QUFDRjs7QUFXQTtFQUNJO0lBQ0ksY0FBQTtFQVROO0VBVU07SUFDSSxhQUFBO0VBUlY7O0VBYU07SUFDSSxrQkFBQTtFQVZWO0VBWU07SUFDSSxhQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtFQVZWO0FBQ0YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJy4vLi4vLi4vc3R5bGVzaGVldC5zY3NzJyBhcyBzdHlsZXM7XG5cbmgxIHtcbiAgICBjb2xvcjogc3R5bGVzLiRjb2xvci1kYXJrLXJlZDtcbn1cbi5zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc3Vic2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAmLWNvbHtcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICBmbGV4LWJhc2lzOiAwO1xuICAgICAgICBwYWRkaW5nOiA0cmVtO1xuICAgICAgICAmIGgxIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3BhbiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbn1cblxuLmluZm8ge1xuICAgICYtb3BlbmluZyB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgJiBoMyB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgJiBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogc3R5bGVzLiRmb250LXNpemUtbWQ7XG4gICAgICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICYgYnV0dG9uIHtcbiAgICAgICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgcGFkZGluZzoxcmVtO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxMHJlbTtcbiAgICAgICAgICAgIG1hcmdpbjoxcmVtO1xuICAgICAgICAgICAgYm9yZGVyOi4xcmVtIHNvbGlkICM4QzBBMDg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOi41cmVtO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6NzAwO1xuICAgICAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwLjA0ZW0gMC4wNGVtIHJnYmEoMCwwLDAsMC4zNSk7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogc3R5bGVzLiRjb2xvci1kYXJrLXJlZDtcbiAgICAgICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogc3R5bGVzLiRjb2xvci1yZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgJi1jb250YWN0e1xuICAgICAgICAmIHNwYW4ge1xuICAgICAgICAgICAgbWFyZ2luOiAycmVtIDA7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogc3R5bGVzLiRmb250LXNpemUtbWQ7XG4gICAgICAgIH1cbiAgICAgICAgJiBpIHtcbiAgICAgICAgICAgIGNvbG9yOiBzdHlsZXMuJGNvbG9yLWRhcmstcmVkO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAmLXRha2Vhd2F5IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgJiBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDEycmVtO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICAgICAgfVxuICAgICAgICAmIGEge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAmLXJlc2VydmF0aW9ucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICYtdGV4dCB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgICB9XG4gICAgICAgICYgYSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICB9XG4gICAgfVxuICAgICYtbWFwIHtcbiAgICAgICAgbWluLWhlaWdodDogMzJyZW07XG4gICAgICAgIG1pbi13aWR0aDogMzJyZW07XG4gICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICYtY29udGFjdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDFyZW0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IHN0eWxlcy4kc2NyZWVuLXNpemUtbWQpIHtcbiAgICAuc3Vic2VjdGlvbiB7XG4gICAgICAgICYtY29se1xuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5pbmZvIHtcbiAgICAgICAgJi1tYXB7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAyNnJlbTtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjZyZW07XG4gICAgICAgICAgICBtYXJnaW46IDRyZW0gMDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IHN0eWxlcy4kc2NyZWVuLXNpemUtc20pIHtcbiAgICAuc3Vic2VjdGlvbiB7IFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgJi1jb2x7XG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmluZm8ge1xuICAgICAgICAmLWNvbnRhY3Qge1xuICAgICAgICAgICAgcGFkZGluZzogMXJlbSA1cmVtO1xuICAgICAgICB9XG4gICAgICAgICYtbWFwIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAyMHJlbTtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjByZW07XG4gICAgICAgIH1cbiAgICB9XG59IiwiXG4kY29sb3ItcmVkOiAjY2QwYjBiO1xuJGNvbG9yLWRhcmstcmVkOiAjYjAwZDBiO1xuJGNvbG9yLXdoaXRlOiAjZjdmNWY1O1xuJGNvbG9yLWJsYWNrOiAjMDAwO1xuXG4kZm9udC1zaXplLXNtOiAxMnB4O1xuJGZvbnQtc2l6ZTogMTZweDtcbiRmb250LXNpemUtbWQ6IDIwcHg7XG4kZm9udC1zaXplLWxnOiAyNHB4O1xuXG4kc2NyZWVuLXNpemUtc206IDY4MHB4O1xuJHNjcmVlbi1zaXplLW1kOiAxMDI0cHg7XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "NH0R":
    /*!********************************************!*\
      !*** ./src/app/banner/banner.component.ts ***!
      \********************************************/

    /*! exports provided: BannerComponent */

    /***/
    function NH0R(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BannerComponent", function () {
        return BannerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BannerComponent = /*#__PURE__*/function () {
        function BannerComponent() {
          _classCallCheck(this, BannerComponent);

          this.image = "";
        }

        _createClass(BannerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BannerComponent;
      }();

      BannerComponent.??fac = function BannerComponent_Factory(t) {
        return new (t || BannerComponent)();
      };

      BannerComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: BannerComponent,
        selectors: [["app-banner"]],
        inputs: {
          image: "image"
        },
        decls: 1,
        vars: 2,
        consts: [[1, "banner"]],
        template: function BannerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](ctx.image);
          }
        },
        styles: [".banner[_ngcontent-%COMP%] {\n  height: 16rem;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  -webkit-clip-path: polygon(0 0, 100% 40%, 100% 100%, 0 60%);\n          clip-path: polygon(0 0, 100% 40%, 100% 100%, 0 60%);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.banner-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.img-tomyum[_ngcontent-%COMP%] {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('tomyum.jpeg');\n}\n.img-greencurry[_ngcontent-%COMP%] {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('greencurry.jpeg');\n}\n.img-padthai[_ngcontent-%COMP%] {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('padthai.jpeg');\n}\n.img-somtum[_ngcontent-%COMP%] {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('somtum.jpeg');\n}\n.img-food[_ngcontent-%COMP%] {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('food.jpg');\n}\n.img-restaurant[_ngcontent-%COMP%] {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('restaurant.jpg');\n}\n.img-home-curry[_ngcontent-%COMP%] {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('home-curry.jpg');\n}\n.img-green-curry[_ngcontent-%COMP%] {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('green-curry.jpg');\n}\n.img-yellow-curry[_ngcontent-%COMP%] {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('yellow-curry.jpg');\n}\n.img-thai-basil[_ngcontent-%COMP%] {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('thai-basil.jpg');\n}\n.img-satay[_ngcontent-%COMP%] {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('satay.jpg');\n}\n.img-phad-thai[_ngcontent-%COMP%] {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('phad-thai.jpg');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Jhbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsMkRBQUE7VUFBQSxtREFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQUNKO0FBQUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUVSO0FBSUk7RUFDSSw2RkFBQTtBQURSO0FBR0k7RUFDSSxpR0FBQTtBQURSO0FBR0k7RUFDSSw4RkFBQTtBQURSO0FBR0k7RUFDSSw2RkFBQTtBQURSO0FBR0k7RUFDSSwwRkFBQTtBQURSO0FBR0k7RUFDSSxnR0FBQTtBQURSO0FBR0k7RUFDSSxnR0FBQTtBQURSO0FBR0k7RUFDSSxpR0FBQTtBQURSO0FBR0k7RUFDSSxrR0FBQTtBQURSO0FBR0k7RUFDSSxnR0FBQTtBQURSO0FBR0k7RUFDSSwyRkFBQTtBQURSO0FBR0k7RUFDSSwrRkFBQTtBQURSIiwiZmlsZSI6ImJhbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYW5uZXIge1xuICAgIGhlaWdodDogMTZyZW07XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSA0MCUsIDEwMCUgMTAwJSwgMCA2MCUpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgJi10aXRsZXtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxufVxuXG4uaW1ne1xuXG4gICAgJi10b215dW17XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuMiksIHJnYmEoMCwgMCwgMCwgMC4yKSksIHVybCgnLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3RvbXl1bS5qcGVnJyk7XG4gICAgfVxuICAgICYtZ3JlZW5jdXJyeXtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4yKSwgcmdiYSgwLCAwLCAwLCAwLjIpKSwgdXJsKCcuLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ3JlZW5jdXJyeS5qcGVnJyk7XG4gICAgfVxuICAgICYtcGFkdGhhaXtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4yKSwgcmdiYSgwLCAwLCAwLCAwLjIpKSwgdXJsKCcuLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcGFkdGhhaS5qcGVnJyk7XG4gICAgfVxuICAgICYtc29tdHVte1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjIpLCByZ2JhKDAsIDAsIDAsIDAuMikpLCB1cmwoJy4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zb210dW0uanBlZycpO1xuICAgIH1cbiAgICAmLWZvb2R7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuMiksIHJnYmEoMCwgMCwgMCwgMC4yKSksIHVybCgnLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Zvb2QuanBnJyk7XG4gICAgfVxuICAgICYtcmVzdGF1cmFudHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4yKSwgcmdiYSgwLCAwLCAwLCAwLjIpKSwgdXJsKCcuLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcmVzdGF1cmFudC5qcGcnKTtcbiAgICB9XG4gICAgJi1ob21lLWN1cnJ5e1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjIpLCByZ2JhKDAsIDAsIDAsIDAuMikpLCB1cmwoJy4vLi4vLi4vYXNzZXRzL2ltYWdlcy9ob21lLWN1cnJ5LmpwZycpO1xuICAgIH1cbiAgICAmLWdyZWVuLWN1cnJ5e1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjIpLCByZ2JhKDAsIDAsIDAsIDAuMikpLCB1cmwoJy4vLi4vLi4vYXNzZXRzL2ltYWdlcy9ncmVlbi1jdXJyeS5qcGcnKTtcbiAgICB9IFxuICAgICYteWVsbG93LWN1cnJ5e1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjIpLCByZ2JhKDAsIDAsIDAsIDAuMikpLCB1cmwoJy4vLi4vLi4vYXNzZXRzL2ltYWdlcy95ZWxsb3ctY3VycnkuanBnJyk7XG4gICAgfSAgIFxuICAgICYtdGhhaS1iYXNpbHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4yKSwgcmdiYSgwLCAwLCAwLCAwLjIpKSwgdXJsKCcuLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdGhhaS1iYXNpbC5qcGcnKTtcbiAgICB9XG4gICAgJi1zYXRheXtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4yKSwgcmdiYSgwLCAwLCAwLCAwLjIpKSwgdXJsKCcuLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2F0YXkuanBnJyk7XG4gICAgfSAgICBcbiAgICAmLXBoYWQtdGhhaXtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4yKSwgcmdiYSgwLCAwLCAwLCAwLjIpKSwgdXJsKCcuLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcGhhZC10aGFpLmpwZycpO1xuICAgIH1cbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "Q2m+":
    /*!******************************!*\
      !*** ./src/assets/menu.json ***!
      \******************************/

    /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, default */

    /***/
    function Q2m(module) {
      module.exports = JSON.parse("[{\"category\":\"Starters\",\"items\":[{\"number\":\"1\",\"title\":\"Satay\",\"description\":\"Charcoal grilled marinated meat on bamboo skewers served with peanut sauce and cucumber relish choices of chicken or beef.\",\"prices\":[{\"option\":\"4 skewers\",\"price\":\"5.50\"},{\"option\":\"6 skewers\",\"price\":\"7.95\"}]},{\"number\":\"2\",\"title\":\"Tord Mun Pla\",\"description\":\"Deep fried fish cake with red curry paste, green beans and a cucumber relish sauce.\",\"price\":\"5.50\"},{\"number\":\"3\",\"title\":\"See Krong Moo Tord\",\"description\":\"Deep fried pork ribs marinated with garlic and pepper\",\"price\":\"5.50\"},{\"number\":\"4\",\"title\":\"Khanom Jeep\",\"description\":\"Steamed dumplings Thai style with minced pork, golden fried garlic and topped with special sauce.\",\"price\":\"5.50\"},{\"number\":\"5\",\"title\":\"Poh Pia Tord\",\"description\":\"Deep fried spring rolls with minced pork, vermicelli and mushroom served with plum sauce.\",\"price\":\"5.50\"},{\"number\":\"6\",\"title\":\"Pla Muek Tord\",\"description\":\"Tender squids dipped in batter served with sweet chilli sauce\",\"price\":\"5.95\"},{\"number\":\"7\",\"title\":\"Khanom Pang Nagoong\",\"description\":\"Crispy spice mince prawns on toast served with cucumber relish.\",\"price\":\"5.75\"},{\"number\":\"8\",\"title\":\"Tempura Goong\",\"description\":\"Deep fried prawns & mushroom served with plum sauce\",\"price\":\"5.95\"},{\"number\":\"9\",\"title\":\"Peek Gai Yat Sai\",\"description\":\"Deep fried boneless chicken wings stuffed with spicy minced pork and herbs served with chilli sauce.\",\"price\":\"5.50\"},{\"number\":\"10\",\"title\":\"Hi Bangkok Platter (Minimum for 2 people)\",\"description\":\"Delicious selections of Satays, fish cakes, Poh Pia Tord, prawns Tempura, Pla Muek Tord and stuffed chicken wings.\",\"price\":\"14.95\"}]},{\"category\":\"Soups\",\"items\":[{\"number\":\"11\",\"title\":\"Tom Yum Goong\",\"description\":\"King prawns in rich hot aand sour broth spiced with chilli, lemon grass, kaffir lime leaves, mushroom and lemon juice\",\"price\":\"7.95\"},{\"number\":\"12\",\"title\":\"Tom Yum Gai\",\"description\":\"Similar to Tom Yum Goong but served with chicken\",\"price\":\"6.95\"},{\"number\":\"13\",\"title\":\"Tom Kah Gai\",\"description\":\"A tasty hot and sour chicken with galanga, coconut milk and lemon juice\",\"price\":\"6.95\"},{\"number\":\"14\",\"title\":\"Poh Taek\",\"description\":\"Spicy clear mixed seafood soup with chilli, lemon grass, kaffir lime leaves, mushroom and lemon juice.\",\"price\":\"7.95\"}]},{\"category\":\"Thai Style Salads\",\"items\":[{\"number\":\"15\",\"title\":\"Yum Pla Muek\",\"description\":\"Tender squids mixed with herbs in a spicy Thai style lemon dressing.\",\"price\":\"8.95\"},{\"number\":\"16\",\"title\":\"Yum Woon Sen\",\"description\":\"Clear noodles mixed with minced pork, shrimps and spring onion in a spicy lemon dressing.\",\"price\":\"9.95\"},{\"number\":\"17\",\"title\":\"Yum Talay\",\"description\":\"Mixed seafood with Thai style herbs and lemon dressing\",\"price\":\"9.95\"},{\"number\":\"18\",\"title\":\"Plah Goong\",\"description\":\"King prawns with lemon grass and onion in a spicy dressing\",\"price\":\"9.95\"},{\"number\":\"19\",\"title\":\"Yum Nuer\",\"description\":\"Sliced grilled tender beef mixed with cucumbers, tomato, spring onion and spicy lemon dressing Thai style\",\"price\":\"8.95\"},{\"number\":\"19A\",\"title\":\"Som Tum Thai\",\"description\":\"Shredded green papaya salad tossed with shrimp, cherry tomatoes, green beans peanut, fresh chilli & lime juice\",\"price\":\"8.95\"},{\"number\":\"19B\",\"title\":\"Larb Gai\",\"description\":\"Spicy minced chicken salad cooked in wonderful variety flavours of fresh chilli, lime juice & mint leaves\",\"price\":\"8.95\"}]},{\"category\":\"Chicken\",\"items\":[{\"number\":\"20\",\"title\":\"Gai Preow Warn\",\"description\":\"Sweet and sour chicken with tomato, spring onion, cucumber, red pepper, green pepper and pineapple.\",\"price\":\"7.95\"},{\"number\":\"21\",\"title\":\"Gai Phad Khing\",\"description\":\"Stir fried chicken with ginger, mushroom and spring onion.\",\"price\":\"7.95\"},{\"number\":\"22\",\"title\":\"Gai Phad Kraprao\",\"description\":\"Stir fried chicken with chilli and fresh basil leaves.\",\"price\":\"7.95\"},{\"number\":\"23\",\"title\":\"Gai Phad Samoun Prai\",\"description\":\"Stir fried chicken with mixed herbs, garlic & pepper.\",\"price\":\"7.95\"},{\"number\":\"24\",\"title\":\"Gai Phad Med Mamuang\",\"description\":\"Stir fried chicken with cashew nuts, spring onions, red pepper, green pepper & mushroons.\",\"price\":\"7.95\"},{\"number\":\"25\",\"title\":\"Panang Gai\",\"description\":\"Sliced chicken stir fried with a famous panang curry paste, coconut milk & lime leaves\",\"price\":\"7.95\"},{\"number\":\"26\",\"title\":\"Gaiyang\",\"description\":\"A tasty spring chick marinated with herbs & spices grilled over the charcoal\",\"price\":\"9.50\"}]},{\"category\":\"Pork\",\"items\":[{\"number\":\"27\",\"title\":\"Moo Phad Khing\",\"description\":\"Stir fried pork with fresh ginger, spring onions, mushroom & yellow bean sauce\",\"price\":\"7.95\"},{\"number\":\"28\",\"title\":\"Moo Phad Kraprao\",\"description\":\"Stir fried pork with pressed chilli, onions & basil leaves\",\"price\":\"7.95\"},{\"number\":\"29\",\"title\":\"Moo Phad Samoun Prai\",\"description\":\"Stir fried pork with mixed herbs, garlic & pepper\",\"price\":\"7.95\"},{\"number\":\"30\",\"title\":\"Moo Preow Warn\",\"description\":\"Stir fried sweet & sour pork Thai style\",\"price\":\"7.95\"},{\"number\":\"31\",\"title\":\"Panang Moo\",\"description\":\"Sliced pork stir fried with a famous panang curry paste, coconut milk & lime leaves\",\"price\":\"7.95\"}]},{\"category\":\"Beef\",\"items\":[{\"number\":\"32\",\"title\":\"Nuer Phad Nammunhoi\",\"description\":\"Stir fried beef cooked in vegetables & oyster sauce\",\"price\":\"8.50\"},{\"number\":\"33\",\"title\":\"Phad Kih Mow\",\"description\":\"Stir fried beef with fresh chilli, basil leaves & green beans\",\"price\":\"8.50\"},{\"number\":\"34\",\"title\":\"Nuer Phad Kraprao\",\"description\":\"Stir fried beef with fresh chilli, onions & basil leaves\",\"price\":\"8.50\"},{\"number\":\"35\",\"title\":\"Nuer Kata\",\"description\":\"Stir fried marinated beef, sesame seed, red pepper, green pepper & pineapples\",\"price\":\"9.50\"},{\"number\":\"36\",\"title\":\"Panang Nuer\",\"description\":\"Sliced beef stir fried with red curry paste, coconut milk topped with sliced lime leaves\",\"price\":\"9.50\"}]},{\"category\":\"Seafood\",\"items\":[{\"number\":\"37\",\"title\":\"Pla Sam Rod\",\"description\":\"Deep fried crispy fish topped with mixed vegetables in a sweet & sour sauce\",\"price\":\"11.95\"},{\"number\":\"38\",\"title\":\"Pla Lard Prik\",\"description\":\"Deep fried crispy fish topped with special chilli sauce Thai style\",\"price\":\"11.95\"},{\"number\":\"39\",\"title\":\"Pla Neung Manao\",\"description\":\"Steamed fillet seabass topped with a tasty spicy\",\"price\":\"12.95\"},{\"number\":\"40\",\"title\":\"Pla Muek Phad Samoun Prai\",\"description\":\"Stir fried tender squid with mixed herbs, garlic & pepper\",\"price\":\"9.50\"},{\"number\":\"41\",\"title\":\"Pla Muek Phad Kraprao\",\"description\":\"Stir fried tender squid with fresh chilli, onions, red pepper, green pepper & basil leaves\",\"price\":\"9.50\"},{\"number\":\"42\",\"title\":\"Goong Phad Samoun Prai\",\"description\":\"Stir fried king prawns with mixed herbs, garlic & pepper\",\"price\":\"10.50\"},{\"number\":\"43\",\"title\":\"Goong Phad Kraprao\",\"description\":\"Stir fried king prawns with fresh chilli, onions, red pepper, green pepper & basil leaves\",\"price\":\"10.50\"},{\"number\":\"44\",\"title\":\"Goong Phad Khing\",\"description\":\"Stir fried king prawns with fresh ginger, red pepper, green pepper & yellow bean sauce\",\"price\":\"10.50\"},{\"number\":\"45\",\"title\":\"Goong Preow Warn\",\"description\":\"Stir fried king prawns with tomato, cucumber, pineapple, red pepper, green pepper in sweet & sour sauce\",\"price\":\"10.50\"},{\"number\":\"46\",\"title\":\"Goong Phad\",\"description\":\"Stir fried mixed seafood in a spicy sauce with flavours of lemongrass, kaffir lime leaves & Thai  basil leaves\",\"price\":\"11.95\"}]},{\"category\":\"Curry\",\"items\":[{\"number\":\"47\",\"title\":\"Kaeng Phed\",\"description\":\"A traditional Thai red curry cooked in coconut milk with Thai aubergine & bamboo shoot\",\"prices\":[{\"option\":\"Chicken/Pork\",\"price\":\"8.50\"},{\"option\":\"Beef\",\"price\":\"8.95\"},{\"option\":\"Prawns\",\"price\":\"9.95\"}]},{\"number\":\"48\",\"title\":\"Kaeng Kheow Warn\",\"description\":\"A traditional Thai green curry cooked in coconut milk with Thai aubergine & bamboo shoot\",\"prices\":[{\"option\":\"Chicken/Pork\",\"price\":\"8.50\"},{\"option\":\"Beef\",\"price\":\"8.95\"},{\"option\":\"Prawns\",\"price\":\"9.95\"}]},{\"number\":\"49\",\"title\":\"Kaeng Pah\",\"description\":\"A spicy jungle curry cooked without coconut milk Thai aubergine & bamboo shoot\",\"prices\":[{\"option\":\"Chicken/Pork\",\"price\":\"8.50\"},{\"option\":\"Beef\",\"price\":\"8.95\"},{\"option\":\"Prawns\",\"price\":\"9.95\"}]},{\"number\":\"50\",\"title\":\"Kaeng Kour Subparod\",\"description\":\"A spicy red curry cooked with coconut milk & pineapple\",\"prices\":[{\"option\":\"Chicken/Pork\",\"price\":\"8.50\"},{\"option\":\"Beef\",\"price\":\"8.95\"},{\"option\":\"Prawns\",\"price\":\"9.95\"}]},{\"number\":\"51\",\"title\":\"Kaeng Massaman\",\"description\":\"Stewed beef slowly cooked in massaman curry, mild & smooth taste, potato, ground peanut & coconut milk\",\"price\":\"8.95\"},{\"number\":\"51A\",\"title\":\"Kaeng Massaman Gai\",\"description\":\"Massaman curry, but with stewed chicken instead\",\"price\":\"8.95\"}]},{\"category\":\"Vegetables\",\"items\":[{\"number\":\"52\",\"title\":\"Phad Phak Roum\",\"description\":\"Stir fried mixed vegetables with Thai style sauce\",\"price\":\"6.95\"},{\"number\":\"53\",\"title\":\"Tao Hoo Lard See Ew\",\"description\":\"Deep fried beancurd top with fresh ginger, spring onions, soy sauce & coriander\",\"price\":\"7.50\"},{\"number\":\"54\",\"title\":\"Phad Broccoli\",\"description\":\"Stir fried broccoli with an oyster sauce\",\"price\":\"7.95\"}]},{\"category\":\"Noodles\",\"items\":[{\"number\":\"55\",\"title\":\"Phad Thai\",\"description\":\"Special Thai style rice noodles with pork & prawns, eggs, bean sprouts, spring onions & ground peanut\",\"price\":\"9.95\"},{\"number\":\"56\",\"title\":\"Phad See Ew\",\"description\":\"Special fried noodles with eggs in a choice of pork, chicken or beef & vegetables in dark soy sauce\",\"price\":\"8.95\"},{\"number\":\"57\",\"title\":\"Guay Tiew Kih Mow\",\"description\":\"Stir fried rice noodles with chilli, bamboo shoot & vegetables with a choice of chicken, beef or pork\",\"price\":\"8.95\"},{\"number\":\"58\",\"title\":\"Guay Tiew Jay\",\"description\":\"Plain fried egg noodles with bean sprouts & spring onions\",\"price\":\"7.50\"},{\"number\":\"59\",\"title\":\"Phad Thai Jay\",\"description\":\"Special plain fried rice noodles Thai styles with eggs, bean sprout, spring onions & ground peanut\",\"price\":\"7.95\"}]},{\"category\":\"Rice\",\"items\":[{\"number\":\"60\",\"title\":\"Khao Suay\",\"description\":\"Steamed rice\",\"price\":\"2.95\"},{\"number\":\"61\",\"title\":\"Khao Ob Kati\",\"description\":\"Steamed coconut rice\",\"price\":\"3.50\"},{\"number\":\"62\",\"title\":\"Khao Phad Kai\",\"description\":\"Fried rice with egg & peas\",\"price\":\"3.50\"},{\"number\":\"63\",\"title\":\"Khao Neow\",\"description\":\"Steamed sticky rice\",\"price\":\"3.50\"},{\"number\":\"64\",\"title\":\"Khao Phad Hi Bangkok\",\"description\":\"House special fried rice with king prawns & tender squid\",\"price\":\"9.95\"}]},{\"category\":\"Chef's recommendations\",\"items\":[{\"number\":\"65\",\"title\":\"Kaeng Phed Ped Yang\",\"description\":\"Roast duck cooked in red curry, coconut milk, pineapple, tomatoes & grapes\",\"price\":\"9.95\"},{\"number\":\"66\",\"title\":\"Ped Lard Prik Kraprao Krob\",\"description\":\"Roast duck sliced top with tasty Thai style chilli sauce & crispy basil leaves\",\"price\":\"9.95\"},{\"number\":\"67\",\"title\":\"Panang Ped\",\"description\":\"Roast duck stir fried in red curry paste, coconut milk & lime leaves\",\"price\":\"9.95\"},{\"number\":\"68\",\"title\":\"Goong Phad Asparagus\",\"description\":\"Stir fried king prawns with asparagus\",\"price\":\"11.50\"},{\"number\":\"69\",\"title\":\"Gai Ta Krai\",\"description\":\"Stir fried chicken with lemongrass, chilli & vegetables\",\"price\":\"8.95\"},{\"number\":\"70\",\"title\":\"Lamb Kata\",\"description\":\"Stir fried marinated lamb with aubergine, chilli & cumin\",\"price\":\"11.95\"},{\"number\":\"71\",\"title\":\"Crying Tiger\",\"description\":\"A famous traditional Thai dish of a marinated sirloin beef grill over the charcoal with a separate spicy sauce\",\"price\":\"12.95\"},{\"number\":\"72\",\"title\":\"Talay Phad Cha\",\"description\":\"A delicious stir fried mixed seafood with chilli, aromatic ginger (krachai), pepper and holy basil leaves\",\"price\":\"12.50\"},{\"number\":\"73\",\"title\":\"Slamon Phad Priktai Dum\",\"description\":\"Fried fillet salmon with black pepper in a combination of fried & green pepper, onions & coriander\",\"price\":\"12.95\"},{\"number\":\"74\",\"title\":\"Goong Phad Kaeng Kheow Warn\",\"description\":\"King prawn stir fried with green curry paste, coconut milk, egg plant, green beans, lime leaves & sweet basil\",\"price\":\"12.50\"},{\"number\":\"75\",\"title\":\"Lamb Phad Priktai Dum\",\"description\":\"A tender lamb stir fried in a combination of black pepper, red pepper, green pepper, onions & coriander\",\"price\":\"11.95\"},{\"number\":\"76\",\"title\":\"Goong Makham\",\"description\":\"Grilled king prawns specially cooked with an exotic tamarind sauce & coriander\",\"price\":\"11.50\"},{\"number\":\"77\",\"title\":\"Goong Phad Tao See\",\"description\":\"King prawns stir fried with spring onions, shredded ginger, mushroom, red & green pepper in black bean sauce\",\"price\":\"10.50\"},{\"number\":\"78\",\"title\":\"Goong Hi Bangkok\",\"description\":\"A tasty king prawns stir fried with a special Thai style mixed herbs sauce\",\"price\":\"12.95\"}]},{\"category\":\"Vegetarian Starters\",\"items\":[{\"number\":\"101\",\"title\":\"Tao Hoo Tord\",\"description\":\"Deep fried fresh beancurd with peanut sauce\",\"price\":\"5.50\"},{\"number\":\"102\",\"title\":\"Poh Pia Jay\",\"description\":\"Deep fried vegetable spring rolls served with plum sauce\",\"price\":\"5.25\"},{\"number\":\"103\",\"title\":\"Phak Tord\",\"description\":\"Deep fried mixed vegetables in batter served with plum sauce\",\"price\":\"5.50\"},{\"number\":\"104\",\"title\":\"Tord Mun Khao Phod\",\"description\":\"Deep fried sweet corn cake served with ground peanut & cucumber relish\",\"price\":\"5.95\"}]},{\"category\":\"Vegetarian Soup\",\"items\":[{\"number\":\"105\",\"title\":\"Tom Yum Hed\",\"description\":\"Mushroom soup cooked in rich hit & sour broth spiced with chilli, lemongrass, kaffir lime leaves & lemon juice\",\"price\":\"5.50\"},{\"number\":\"106\",\"title\":\"Tom Kha Hed\",\"description\":\"Mushroom soup cooked in coconut milk with galangal, kaffir lime leaves & lemon juice\",\"price\":\"5.50\"}]},{\"category\":\"Vegetarian Mains\",\"items\":[{\"number\":\"107\",\"title\":\"Kaeng Phed Phak\",\"description\":\"Mixed vegetables cooked in red curry paste & coconut milk\",\"price\":\"8.50\"},{\"number\":\"108\",\"title\":\"Tao Hoo Preow Warn\",\"description\":\"Deep fried beancurd stir fried with sweet & sour sauce\",\"price\":\"7.95\"},{\"number\":\"109\",\"title\":\"Tao Hoo Tord Phad Kraprao\",\"description\":\"Deep fried beancurd stir fried with chilli, onions, red pepper, green pepper & Thai basil leaves\",\"price\":\"7.95\"},{\"number\":\"110\",\"title\":\"Phad Phak Med Mamuang\",\"description\":\"Stir fried mixed vegetables with cashew nuts\",\"price\":\"7.95\"},{\"number\":\"111\",\"title\":\"Tao Hoo Tord Phad Khing\",\"description\":\"Deep fried beancurd stir fried with ginger, red pepper, green pepper & spring onions\",\"price\":\"7.95\"},{\"number\":\"112\",\"title\":\"Tao Hoo Pad Med Mamuang\",\"description\":\"Deep fried beancurd stir fried with vegetables, red & green pepper & cashew nuts\",\"price\":\"7.95\"},{\"number\":\"113\",\"title\":\"Panang Tao Hoo\",\"description\":\"Deep fried beancurd top with panang curry, coconut milk & sliced lime leaves\",\"price\":\"7.95\"}]},{\"category\":\"Vegetarian Noodles\",\"items\":[{\"number\":\"114\",\"title\":\"Phad Thai Jay\",\"description\":\"Special Thai style rice noodles with egg, bean sprouts, spring onions & ground peanut\",\"price\":\"7.95\"},{\"number\":\"114\",\"title\":\"Guay Tiew Jay\",\"description\":\"Plain fried egg noodless with bean sprouts & spring onions\",\"price\":\"7.50\"},{\"number\":\"114\",\"title\":\"Phad See Ew Jay\",\"description\":\"Stir fried rice noodles with egg & vegetables in a dark soy sauce\",\"price\":\"7.50\"}]}]");
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./toolbar/toolbar.component */
      "4zdL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'hibkk-website';
      };

      AppComponent.??fac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "router-outlet");
          }
        },
        directives: [_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_1__["ToolbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        styles: ["[_nghost-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-family: \"Maven Pro\";\n  font-size: 14px;\n  color: #555;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  background-color: #FAFAFA;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  color: #b00d0b;\n}\n\nh5[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.material-icons[_ngcontent-%COMP%] {\n  color: #b00d0b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL3N0eWxlc2hlZXQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLDBKQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBQUhGOztBQUtBO0VBQ0UsU0FBQTtFQUNBLHlCQUFBO0FBRkY7O0FBSUE7Ozs7OztFQU1FLGFBQUE7RUFDQSxjQ3RCZTtBRHFCakI7O0FBSUE7RUFDRSxlQ3RCYTtBRHFCZjs7QUFJQTtFQUNFLFNBQUE7QUFERjs7QUFJQTtFQUNFLGNDbENlO0FEaUNqQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICcuLy4uL3N0eWxlc2hlZXQuc2NzcycgYXMgc3R5bGVzO1xuXG5cblxuOmhvc3Qge1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG4gIGZvbnQtZmFtaWx5OiAnTWF2ZW4gUHJvJztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzU1NTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xufVxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgbWFyZ2luOiA4cHggMDtcbiAgY29sb3I6IHN0eWxlcy4kY29sb3ItZGFyay1yZWQ7XG59XG5cbmg1IHtcbiAgZm9udC1zaXplOiBzdHlsZXMuJGZvbnQtc2l6ZS1zbTtcbn1cblxucCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLm1hdGVyaWFsLWljb25zIHtcbiAgY29sb3I6IHN0eWxlcy4kY29sb3ItZGFyay1yZWQ7XG59XG5cbiIsIlxuJGNvbG9yLXJlZDogI2NkMGIwYjtcbiRjb2xvci1kYXJrLXJlZDogI2IwMGQwYjtcbiRjb2xvci13aGl0ZTogI2Y3ZjVmNTtcbiRjb2xvci1ibGFjazogIzAwMDtcblxuJGZvbnQtc2l6ZS1zbTogMTJweDtcbiRmb250LXNpemU6IDE2cHg7XG4kZm9udC1zaXplLW1kOiAyMHB4O1xuJGZvbnQtc2l6ZS1sZzogMjRweDtcblxuJHNjcmVlbi1zaXplLXNtOiA2ODBweDtcbiRzY3JlZW4tc2l6ZS1tZDogMTAyNHB4O1xuIl19 */"]
      });
      /***/
    },

    /***/
    "TGkX":
    /*!****************************************!*\
      !*** ./src/app/menu/menu.component.ts ***!
      \****************************************/

    /*! exports provided: MenuComponent */

    /***/
    function TGkX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
        return MenuComponent;
      });
      /* harmony import */


      var _assets_menu_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../assets/menu.json */
      "Q2m+");

      var _assets_menu_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ./../../assets/menu.json */
      "Q2m+", 1);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _hero_hero_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../hero/hero.component */
      "XWKS");
      /* harmony import */


      var _menu_section_menu_section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../menu-section/menu-section.component */
      "r1iz");
      /* harmony import */


      var _banner_banner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../banner/banner.component */
      "NH0R");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../footer/footer.component */
      "fp1T");

      var MenuComponent = /*#__PURE__*/function () {
        function MenuComponent() {
          _classCallCheck(this, MenuComponent);

          this.menu = _assets_menu_json__WEBPACK_IMPORTED_MODULE_0__;
        }

        _createClass(MenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "isNumber",
          value: function isNumber(val) {
            return typeof val === 'number';
          }
        }, {
          key: "findSection",
          value: function findSection(category) {
            return this.menu.find(function (section) {
              return section.category === category;
            });
          }
        }]);

        return MenuComponent;
      }();

      MenuComponent.??fac = function MenuComponent_Factory(t) {
        return new (t || MenuComponent)();
      };

      MenuComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: MenuComponent,
        selectors: [["app-menu"]],
        decls: 44,
        vars: 21,
        consts: [[3, "image"], ["role", "main", 1, "section"], [1, "menu", "subsection"], [1, "menu-item", "subsection-col"], [3, "section"], [1, "section"]],
        template: function MenuComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "app-hero", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "MENU");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](6, "app-menu-section", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](8, "app-menu-section", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](9, "app-menu-section", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](10, "app-banner", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](14, "app-menu-section", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](16, "app-menu-section", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](17, "app-menu-section", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](18, "app-banner", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](22, "app-menu-section", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](24, "app-menu-section", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](25, "app-menu-section", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](26, "app-banner", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](30, "app-menu-section", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](31, "app-menu-section", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](33, "app-menu-section", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](34, "app-banner", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](38, "app-menu-section", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](39, "app-menu-section", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](41, "app-menu-section", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](42, "app-menu-section", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](43, "app-footer");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("image", "img-starter");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("section", ctx.findSection("Starters"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("section", ctx.findSection("Soups"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("section", ctx.findSection("Thai Style Salads"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("image", "img-tomyum");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("section", ctx.findSection("Chicken"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("section", ctx.findSection("Pork"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("section", ctx.findSection("Beef"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("image", "img-somtum");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("section", ctx.findSection("Seafood"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("section", ctx.findSection("Curry"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("section", ctx.findSection("Vegetables"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("image", "img-greencurry");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("section", ctx.findSection("Noodles"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("section", ctx.findSection("Rice"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("section", ctx.findSection("Chef's recommendations"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("image", "img-padthai");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("section", ctx.findSection("Vegetarian Starters"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("section", ctx.findSection("Vegetarian Soup"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("section", ctx.findSection("Vegetarian Mains"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("section", ctx.findSection("Vegetarian Noodles"));
          }
        },
        directives: [_hero_hero_component__WEBPACK_IMPORTED_MODULE_2__["HeroComponent"], _menu_section_menu_section_component__WEBPACK_IMPORTED_MODULE_3__["MenuSectionComponent"], _banner_banner_component__WEBPACK_IMPORTED_MODULE_4__["BannerComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]],
        styles: [".menu[_ngcontent-%COMP%] {\n  width: 90%;\n}\n.menu-item[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.menu-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  margin-bottom: 0;\n}\n.menu-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n}\n@media (max-width: 1024px) {\n  .menu[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .menu-item[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n}\n@media (max-width: 680px) {\n  .menu-item[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxVQUFBO0FBREo7QUFFSTtFQUNJLGFBQUE7QUFBUjtBQUNRO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQUNaO0FBQ1E7RUFDSSxhQUFBO0FBQ1o7QUFLQTtFQUNJO0lBQ0ksY0FBQTtFQUZOO0VBR007SUFDSSxhQUFBO0VBRFY7QUFDRjtBQU1BO0VBRVE7SUFDSSxhQUFBO0VBTFY7QUFDRiIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnLi8uLi8uLi9zdHlsZXNoZWV0LnNjc3MnIGFzIHN0eWxlcztcblxuLm1lbnUge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgJi1pdGVtIHtcbiAgICAgICAgcGFkZGluZzogMnJlbTtcbiAgICAgICAgJiBoNCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgICAgICAmIHNwYW4ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDogc3R5bGVzLiRzY3JlZW4tc2l6ZS1tZCkge1xuICAgIC5tZW51IHsgXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAmLWl0ZW0ge1xuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDogc3R5bGVzLiRzY3JlZW4tc2l6ZS1zbSkge1xuICAgIC5tZW51IHtcbiAgICAgICAgJi1pdGVtIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"]
      });
      /***/
    },

    /***/
    "XWKS":
    /*!****************************************!*\
      !*** ./src/app/hero/hero.component.ts ***!
      \****************************************/

    /*! exports provided: HeroComponent */

    /***/
    function XWKS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeroComponent", function () {
        return HeroComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var HeroComponent = /*#__PURE__*/function () {
        function HeroComponent() {
          _classCallCheck(this, HeroComponent);

          this.image = "";
        }

        _createClass(HeroComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HeroComponent;
      }();

      HeroComponent.??fac = function HeroComponent_Factory(t) {
        return new (t || HeroComponent)();
      };

      HeroComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: HeroComponent,
        selectors: [["app-hero"]],
        inputs: {
          image: "image"
        },
        decls: 4,
        vars: 2,
        consts: [[1, "hero"], [1, "hero-title"]],
        template: function HeroComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Wimbledon's finest taste of Thailand");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "router-outlet");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](ctx.image);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["@charset \"UTF-8\";\n.hero[_ngcontent-%COMP%] {\n  height: 44rem;\n  width: 100vw;\n  background-color: grey;\n  display: flex;\n  justify-content: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: 0;\n  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('restaurant.jpg');\n  -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);\n          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);\n}\n.hero-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 3rem;\n  font-family: \"Kalam\";\n  text-shadow: 1px 1px #1a1a1a;\n}\n.img-somtum[_ngcontent-%COMP%] {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('somtum.jpeg');\n}\n\xC2[_ngcontent-%COMP%]   .img-tomyum[_ngcontent-%COMP%] {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('tomyum.jpeg');\n}\n.img-starter[_ngcontent-%COMP%] {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('starter.jpeg');\n}\n.img-greencurry[_ngcontent-%COMP%] {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('greencurry.jpeg');\n}\n.img-table[_ngcontent-%COMP%] {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('table.jpeg');\n}\n@media (max-width: 1024px) {\n  .hero-title[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 4rem;\n  }\n}\n@media (max-width: 680px) {\n  .hero-title[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hlcm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQ2hCO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGdHQUFBO0VBQ0EseURBQUE7VUFBQSxpREFBQTtBQUNKO0FBQ0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtBQUNSO0FBSUk7RUFDSSw2RkFBQTtBQURSO0FBRUs7RUFFRyw2RkFBQTtBQURSO0FBR0k7RUFDSSw4RkFBQTtBQURSO0FBR0k7RUFDSSxpR0FBQTtBQURSO0FBR0k7RUFDSSw0RkFBQTtBQURSO0FBS0E7RUFFUTtJQUNJLGtCQUFBO0lBQ0EsYUFBQTtFQUhWO0FBQ0Y7QUFPQTtFQUVRO0lBQ0ksa0JBQUE7RUFOVjtBQUNGIiwiZmlsZSI6Imhlcm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICcuLy4uLy4uL3N0eWxlc2hlZXQuc2NzcycgYXMgc3R5bGVzO1xuLmhlcm8ge1xuICAgIGhlaWdodDogNDRyZW07XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjQpLCByZ2JhKDAsIDAsIDAsIDAuNCkpLCB1cmwoJy4vLi4vLi4vYXNzZXRzL2ltYWdlcy9yZXN0YXVyYW50LmpwZycpO1xuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwIDg1JSk7XG5cbiAgICAmLXRpdGxle1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnS2FsYW0nO1xuICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAjMWExYTFhO1xuICAgIH1cbn1cblxuLmltZ3tcbiAgICAmLXNvbXR1bXtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4yKSwgcmdiYSgwLCAwLCAwLCAwLjIpKSwgdXJsKCcuLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc29tdHVtLmpwZWcnKTtcbiAgICB9w4JcbiAgICAmLXRvbXl1bXtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4yKSwgcmdiYSgwLCAwLCAwLCAwLjIpKSwgdXJsKCcuLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdG9teXVtLmpwZWcnKTtcbiAgICB9XG4gICAgJi1zdGFydGVye1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjIpLCByZ2JhKDAsIDAsIDAsIDAuMikpLCB1cmwoJy4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zdGFydGVyLmpwZWcnKTtcbiAgICB9XG4gICAgJi1ncmVlbmN1cnJ5e1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjIpLCByZ2JhKDAsIDAsIDAsIDAuMikpLCB1cmwoJy4vLi4vLi4vYXNzZXRzL2ltYWdlcy9ncmVlbmN1cnJ5LmpwZWcnKTtcbiAgICB9XG4gICAgJi10YWJsZXtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4yKSwgcmdiYSgwLCAwLCAwLCAwLjIpKSwgdXJsKCcuLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdGFibGUuanBlZycpO1xuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IHN0eWxlcy4kc2NyZWVuLXNpemUtbWQpIHtcbiAgICAuaGVybyB7XG4gICAgICAgICYtdGl0bGUge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogNHJlbTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IHN0eWxlcy4kc2NyZWVuLXNpemUtc20pIHtcbiAgICAuaGVybyB7XG4gICAgICAgICYtdGl0bGUge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _hero_hero_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./hero/hero.component */
      "XWKS");
      /* harmony import */


      var _banner_banner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./banner/banner.component */
      "NH0R");
      /* harmony import */


      var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./toolbar/toolbar.component */
      "4zdL");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./footer/footer.component */
      "fp1T");
      /* harmony import */


      var _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./menu/menu.component */
      "TGkX");
      /* harmony import */


      var _menu_section_menu_section_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./menu-section/menu-section.component */
      "r1iz");
      /* harmony import */


      var _reservations_reservations_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./reservations/reservations.component */
      "q5ST");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var appRoutes = [{
        path: 'menu',
        component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__["MenuComponent"]
      }, {
        path: 'reservations',
        component: _reservations_reservations_component__WEBPACK_IMPORTED_MODULE_11__["ReservationsComponent"]
      }, {
        path: '**',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]
      }];

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.??fac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["????defineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["????defineInjector"]({
        providers: [],
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["????setNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _hero_hero_component__WEBPACK_IMPORTED_MODULE_4__["HeroComponent"], _banner_banner_component__WEBPACK_IMPORTED_MODULE_5__["BannerComponent"], _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_6__["ToolbarComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__["MenuComponent"], _menu_section_menu_section_component__WEBPACK_IMPORTED_MODULE_10__["MenuSectionComponent"], _reservations_reservations_component__WEBPACK_IMPORTED_MODULE_11__["ReservationsComponent"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "fp1T":
    /*!********************************************!*\
      !*** ./src/app/footer/footer.component.ts ***!
      \********************************************/

    /*! exports provided: FooterComponent */

    /***/
    function fp1T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.??fac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 3,
        vars: 0,
        consts: [[1, "footer"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "footer works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        styles: [".footer[_ngcontent-%COMP%] {\n  height: 16rem;\n  width: 100vw;\n  background-color: grey;\n  display: flex;\n  justify-content: center;\n  -webkit-clip-path: polygon(0 0, 100% 40%, 100% 100%, 0 100%);\n          clip-path: polygon(0 0, 100% 40%, 100% 100%, 0 100%);\n  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('footer.jpg');\n  background-position: center;\n}\n.footer-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSw0REFBQTtVQUFBLG9EQUFBO0VBQ0EsNEZBQUE7RUFDQSwyQkFBQTtBQUNKO0FBQ0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNSIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xuICAgIGhlaWdodDogMTZyZW07XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDQwJSwgMTAwJSAxMDAlLCAwIDEwMCUpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuMiksIHJnYmEoMCwgMCwgMCwgMC4yKSksIHVybCgnLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Zvb3Rlci5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5cbiAgICAmLXRpdGxle1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG59Il19 */"]
      });
      /***/
    },

    /***/
    "q5ST":
    /*!********************************************************!*\
      !*** ./src/app/reservations/reservations.component.ts ***!
      \********************************************************/

    /*! exports provided: ReservationsComponent */

    /***/
    function q5ST(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReservationsComponent", function () {
        return ReservationsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _hero_hero_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../hero/hero.component */
      "XWKS");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../footer/footer.component */
      "fp1T");

      var ReservationsComponent = /*#__PURE__*/function () {
        function ReservationsComponent() {
          _classCallCheck(this, ReservationsComponent);
        }

        _createClass(ReservationsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ReservationsComponent;
      }();

      ReservationsComponent.??fac = function ReservationsComponent_Factory(t) {
        return new (t || ReservationsComponent)();
      };

      ReservationsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ReservationsComponent,
        selectors: [["app-reservations"]],
        decls: 23,
        vars: 1,
        consts: [["role", "main", 1, "section"], [1, "reservations", "subsection"], [1, "subsection-col", "reservations-info"], [1, "reservations-info-text"], [3, "href"], ["href", "mailto:hibkk@aol.com"], ["src", "https://widget.quandoo.co.uk/widget/reservation/merchant/pXhTT?sid=2", "width", "310", "height", "342", "seamless", "seamless", "scrolling", "no", "frameborder", "0"], [1, "subsection-col", "reservations-map"], ["width", "100%", "height", "100%", "id", "gmap_canvas", "src", "https://maps.google.com/maps?q=hi%20bangkok%20london&t=&z=15&ie=UTF8&iwloc=&output=embed", "frameborder", "0", "scrolling", "no", "marginheight", "0", "marginwidth", "0"]],
        template: function ReservationsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-hero");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Bookings & Reservations");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "For takeaways and deliveries, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Please call: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "02085425688");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Email: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "hibkk@aol.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "or book on:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "iframe", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "iframe", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "app-footer");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("href", "tel:" + 2085425688, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
          }
        },
        directives: [_hero_hero_component__WEBPACK_IMPORTED_MODULE_1__["HeroComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
        styles: [".reservations-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0 4rem;\n}\n.reservations-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #b00d0b;\n}\n.reservations-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 0.1rem 0;\n}\n.reservations-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: 700;\n  padding: 1rem;\n}\n.reservations-info-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 2rem 0;\n}\n.reservations-map[_ngcontent-%COMP%] {\n  min-height: 32rem;\n  min-width: 32rem;\n  padding: 1rem;\n  display: grid;\n}\n@media (max-width: 1024px) {\n  .reservations[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .reservations-info[_ngcontent-%COMP%] {\n    align-items: center;\n  }\n  .reservations-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 0;\n    padding-right: 0.25rem;\n  }\n  .reservations-map[_ngcontent-%COMP%] {\n    min-height: 26rem;\n    min-width: 26rem;\n    margin: 4rem 0;\n  }\n}\n@media (max-width: 680px) {\n  .reservations[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  .reservations-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    min-width: 20rem;\n  }\n  .reservations-map[_ngcontent-%COMP%] {\n    display: grid;\n    min-height: 16rem;\n    min-width: 16rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Jlc2VydmF0aW9ucy5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL3N0eWxlc2hlZXQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFGUjtBQUlRO0VBQ0ksY0NQSztBREtqQjtBQUlRO0VBQ0ksZ0JBQUE7QUFGWjtBQUdZO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0FBRGhCO0FBSVE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBRlo7QUFNSTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQUpSO0FBUUE7RUFDSTtJQUNJLGNBQUE7RUFMTjtFQU1NO0lBQ0ksbUJBQUE7RUFKVjtFQU1jO0lBQ0ksVUFBQTtJQUNBLHNCQUFBO0VBSmxCO0VBUU07SUFDSSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtFQU5WO0FBQ0Y7QUFVQTtFQUNJO0lBQ0ksVUFBQTtFQVJOO0VBVVU7SUFDSSxnQkFBQTtFQVJkO0VBV007SUFDSSxhQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtFQVRWO0FBQ0YiLCJmaWxlIjoicmVzZXJ2YXRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnLi8uLi8uLi9zdHlsZXNoZWV0LnNjc3MnIGFzIHN0eWxlcztcblxuLnJlc2VydmF0aW9ucyB7XG4gICAgJi1pbmZvIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgcGFkZGluZzogMCA0cmVtO1xuICAgICAgICBcbiAgICAgICAgJiBoMSB7XG4gICAgICAgICAgICBjb2xvcjogc3R5bGVzLiRjb2xvci1kYXJrLXJlZDtcbiAgICAgICAgfVxuICAgICAgICAmIHNwYW4ge1xuICAgICAgICAgICAgbWFyZ2luOiAuMXJlbSAwO1xuICAgICAgICAgICAgJiBhIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJi10ZXh0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgbWFyZ2luOiAycmVtIDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgJi1tYXAge1xuICAgICAgICBtaW4taGVpZ2h0OiAzMnJlbTtcbiAgICAgICAgbWluLXdpZHRoOiAzMnJlbTtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiBzdHlsZXMuJHNjcmVlbi1zaXplLW1kKSB7XG4gICAgLnJlc2VydmF0aW9ucyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAmLWluZm8ge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICYgc3BhbiB7XG4gICAgICAgICAgICAgICAgJiBhIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogLjI1cmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLW1hcCB7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAyNnJlbTtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjZyZW07XG4gICAgICAgICAgICBtYXJnaW46IDRyZW0gMDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IHN0eWxlcy4kc2NyZWVuLXNpemUtc20pIHtcbiAgICAucmVzZXJ2YXRpb25zIHtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgJi1pbmZvIHsgXG4gICAgICAgICAgICAmIGgxIHtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDIwcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICYtbWFwIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxNnJlbTtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTZyZW07XG4gICAgICAgIH1cbiAgICB9XG59IiwiXG4kY29sb3ItcmVkOiAjY2QwYjBiO1xuJGNvbG9yLWRhcmstcmVkOiAjYjAwZDBiO1xuJGNvbG9yLXdoaXRlOiAjZjdmNWY1O1xuJGNvbG9yLWJsYWNrOiAjMDAwO1xuXG4kZm9udC1zaXplLXNtOiAxMnB4O1xuJGZvbnQtc2l6ZTogMTZweDtcbiRmb250LXNpemUtbWQ6IDIwcHg7XG4kZm9udC1zaXplLWxnOiAyNHB4O1xuXG4kc2NyZWVuLXNpemUtc206IDY4MHB4O1xuJHNjcmVlbi1zaXplLW1kOiAxMDI0cHg7XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "r1iz":
    /*!********************************************************!*\
      !*** ./src/app/menu-section/menu-section.component.ts ***!
      \********************************************************/

    /*! exports provided: MenuSectionComponent */

    /***/
    function r1iz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuSectionComponent", function () {
        return MenuSectionComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function MenuSectionComponent_div_2_div_10_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var choice_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](choice_r5.option);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("\xA3", choice_r5.price, "");
        }
      }

      function MenuSectionComponent_div_2_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, MenuSectionComponent_div_2_div_10_div_1_Template, 5, 2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", item_r1.prices);
        }
      }

      function MenuSectionComponent_div_2_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("\xA3", item_r1.price, "");
        }
      }

      function MenuSectionComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h4", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, MenuSectionComponent_div_2_div_10_Template, 2, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, MenuSectionComponent_div_2_div_11_Template, 2, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", item_r1.number, ". ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", item_r1.title, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r1.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", item_r1.prices == null ? null : item_r1.prices.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", item_r1.price);
        }
      }

      var MenuSectionComponent = /*#__PURE__*/function () {
        function MenuSectionComponent() {
          _classCallCheck(this, MenuSectionComponent);
        }

        _createClass(MenuSectionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MenuSectionComponent;
      }();

      MenuSectionComponent.??fac = function MenuSectionComponent_Factory(t) {
        return new (t || MenuSectionComponent)();
      };

      MenuSectionComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: MenuSectionComponent,
        selectors: [["app-menu-section"]],
        inputs: {
          section: "section"
        },
        decls: 3,
        vars: 2,
        consts: [[1, "menu-item_header"], [4, "ngFor", "ngForOf"], [1, "menu-item-container"], [1, "menu-item-subcontainer-left"], [1, "menu-item-subcontainer-left__title"], [1, "menu-item_number"], [1, "menu-item_title"], [1, "menu-item_description"], ["class", "menu-item-subcontainer-right", 4, "ngIf"], ["class", "menu-item_price", 4, "ngIf"], [1, "menu-item-subcontainer-right"], ["class", "menu-item_prices", 4, "ngFor", "ngForOf"], [1, "menu-item_prices"], [1, "menu-item_prices-option"], [1, "menu-item_price"]],
        template: function MenuSectionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h3", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, MenuSectionComponent_div_2_Template, 12, 5, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.section.category);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.section.items);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: [".menu-item_header[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n.menu-item-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n.menu-item-subcontainer-left[_ngcontent-%COMP%] {\n  flex-grow: 5;\n  flex-basis: 0;\n}\n.menu-item-subcontainer-left__title[_ngcontent-%COMP%] {\n  display: flex;\n}\n.menu-item-subcontainer-right[_ngcontent-%COMP%] {\n  flex-grow: 2;\n  flex-basis: 0;\n}\n.menu-item_number[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-weight: 400;\n  padding-right: 0.25rem;\n}\n.menu-item_title[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.menu-item_description[_ngcontent-%COMP%] {\n  flex-grow: 5;\n  flex-basis: 0;\n  padding-left: 1rem;\n  margin-bottom: 0.5rem;\n}\n.menu-item_prices[_ngcontent-%COMP%] {\n  flex-grow: 2;\n  flex-basis: 0;\n  text-align: end;\n  display: flex;\n  justify-content: flex-end;\n}\n.menu-item_prices-option[_ngcontent-%COMP%] {\n  display: inline;\n  padding-left: 1rem;\n  font-weight: 600;\n  padding-top: 0.5rem;\n  min-width: 5rem;\n}\n.menu-item_price[_ngcontent-%COMP%] {\n  flex-grow: 2;\n  flex-basis: 0;\n  display: inline;\n  text-align: end;\n  font-weight: 700;\n  padding-top: 0.5rem;\n}\n@media (max-width: 1024px) {\n  .menu-item_prices-option[_ngcontent-%COMP%] {\n    padding-left: 0;\n    padding-right: 0.25rem;\n  }\n  .menu-item_price[_ngcontent-%COMP%] {\n    max-width: 3rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21lbnUtc2VjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLGdCQUFBO0FBRFI7QUFHSTtFQUNJLGFBQUE7QUFEUjtBQUdJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFEUjtBQUVRO0VBQ0ksYUFBQTtBQUFaO0FBR0k7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQURSO0FBR0k7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFEUjtBQUdJO0VBQ0kscUJBQUE7QUFEUjtBQUdJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBRFI7QUFHSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQURSO0FBRVE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUFaO0FBR0k7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQURSO0FBS0E7RUFJWTtJQUNJLGVBQUE7SUFDQSxzQkFBQTtFQUxkO0VBUU07SUFDSSxlQUFBO0VBTlY7QUFDRiIsImZpbGUiOiJtZW51LXNlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICcuLy4uLy4uL3N0eWxlc2hlZXQuc2NzcycgYXMgc3R5bGVzO1xuLm1lbnUtaXRlbSB7XG4gICAgJl9oZWFkZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIH1cbiAgICAmLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICAgICYtc3ViY29udGFpbmVyLWxlZnQge1xuICAgICAgICBmbGV4LWdyb3c6IDU7XG4gICAgICAgIGZsZXgtYmFzaXM6IDA7XG4gICAgICAgICZfX3RpdGxlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgJi1zdWJjb250YWluZXItcmlnaHQge1xuICAgICAgICBmbGV4LWdyb3c6IDI7XG4gICAgICAgIGZsZXgtYmFzaXM6IDA7XG4gICAgfVxuICAgICZfbnVtYmVyIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwLjI1cmVtO1xuICAgIH1cbiAgICAmX3RpdGxlIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbiAgICAmX2Rlc2NyaXB0aW9uIHtcbiAgICAgICAgZmxleC1ncm93OiA1O1xuICAgICAgICBmbGV4LWJhc2lzOiAwO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xuICAgIH1cbiAgICAmX3ByaWNlcyB7XG4gICAgICAgIGZsZXgtZ3JvdzogMjtcbiAgICAgICAgZmxleC1iYXNpczogMDtcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAmLW9wdGlvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IC41cmVtO1xuICAgICAgICAgICAgbWluLXdpZHRoOiA1cmVtO1xuICAgICAgICB9XG4gICAgfVxuICAgICZfcHJpY2Uge1xuICAgICAgICBmbGV4LWdyb3c6IDI7XG4gICAgICAgIGZsZXgtYmFzaXM6IDA7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBwYWRkaW5nLXRvcDogLjVyZW07XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogc3R5bGVzLiRzY3JlZW4tc2l6ZS1tZCkge1xuICAgIFxuICAgIC5tZW51LWl0ZW0ge1xuICAgICAgICAmX3ByaWNlcyB7XG4gICAgICAgICAgICAmLW9wdGlvbiB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IC4yNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmX3ByaWNlIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogM3JlbTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.??fac = function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      };

      AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map