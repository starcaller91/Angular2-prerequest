"use strict";
///<reference path="./../typings/browser.d.ts"/>
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_1 = require('./app');
var http_1 = require('@angular/http');
platform_browser_dynamic_1.bootstrap(app_1.App, [http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=boot.js.map