"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_providers_1 = require("./app.providers");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var shared_1 = require("./shared");
var home_module_1 = require("./home/home.module");
// import { TodolistModule } from './todolist/todolist.module';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            shared_1.NavbarModule,
            home_module_1.HomeModule,
            // TodolistModule,
            app_routing_1.routing
        ],
        providers: [app_providers_1.APP_PROVIDERS, app_routing_1.appRoutingProviders],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLDhEQUEwRDtBQUUxRCxpREFBZ0Q7QUFDaEQsaURBQStDO0FBQy9DLDZDQUE2RDtBQUM3RCxtQ0FBd0M7QUFDeEMsa0RBQWdEO0FBQ2hELCtEQUErRDtBQWdCL0QsSUFBYSxTQUFTO0lBQXRCO0lBQ0EsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FEQSxBQUNDLElBQUE7QUFEWSxTQUFTO0lBZHJCLGVBQVEsQ0FBQztRQUNOLFlBQVksRUFBRTtZQUNWLDRCQUFZO1NBQ2Y7UUFDRCxPQUFPLEVBQUU7WUFDTCxnQ0FBYTtZQUNiLHFCQUFZO1lBQ1osd0JBQVU7WUFDVixrQkFBa0I7WUFDbEIscUJBQU87U0FDVjtRQUNELFNBQVMsRUFBRSxDQUFFLDZCQUFhLEVBQUUsaUNBQW1CLENBQUU7UUFDakQsU0FBUyxFQUFFLENBQUUsNEJBQVksQ0FBRTtLQUM5QixDQUFDO0dBQ1csU0FBUyxDQUNyQjtBQURZLDhCQUFTIiwiZmlsZSI6ImFwcC9hcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuaW1wb3J0IHsgQVBQX1BST1ZJREVSUyB9IGZyb20gJy4vYXBwLnByb3ZpZGVycyc7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgYXBwUm91dGluZ1Byb3ZpZGVycywgcm91dGluZyB9IGZyb20gJy4vYXBwLnJvdXRpbmcnO1xuaW1wb3J0IHsgTmF2YmFyTW9kdWxlIH0gZnJvbSAnLi9zaGFyZWQnO1xuaW1wb3J0IHsgSG9tZU1vZHVsZSB9IGZyb20gJy4vaG9tZS9ob21lLm1vZHVsZSc7XG4vLyBpbXBvcnQgeyBUb2RvbGlzdE1vZHVsZSB9IGZyb20gJy4vdG9kb2xpc3QvdG9kb2xpc3QubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgICAgIE5hdmJhck1vZHVsZSxcbiAgICAgICAgSG9tZU1vZHVsZSxcbiAgICAgICAgLy8gVG9kb2xpc3RNb2R1bGUsXG4gICAgICAgIHJvdXRpbmdcbiAgICBdLFxuICAgIHByb3ZpZGVyczogWyBBUFBfUFJPVklERVJTLCBhcHBSb3V0aW5nUHJvdmlkZXJzIF0sXG4gICAgYm9vdHN0cmFwOiBbIEFwcENvbXBvbmVudCBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XG59XG4iXX0=
