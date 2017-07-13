"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
// import { BrowserModule } from '@angular/platform-browser';
var forms_1 = require("@angular/forms");
var index_1 = require("./index");
var TodolistModule = (function () {
    function TodolistModule() {
    }
    return TodolistModule;
}());
TodolistModule = __decorate([
    core_1.NgModule({
        declarations: [
            index_1.CompletedFilterPipe,
            index_1.TodolistComponent
        ],
        imports: [
            forms_1.FormsModule,
            common_1.CommonModule,
            index_1.todorouting
            // BrowserModule
        ],
        exports: [
            index_1.CompletedFilterPipe,
            index_1.TodolistComponent
        ]
    })
], TodolistModule);
exports.TodolistModule = TodolistModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90b2RvbGlzdC90b2RvbGlzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBeUM7QUFDekMsMENBQStDO0FBQy9DLDZEQUE2RDtBQUM3RCx3Q0FBNkM7QUFDN0MsaUNBQThFO0FBa0I5RSxJQUFhLGNBQWM7SUFBM0I7SUFDQSxDQUFDO0lBQUQscUJBQUM7QUFBRCxDQURBLEFBQ0MsSUFBQTtBQURZLGNBQWM7SUFoQjFCLGVBQVEsQ0FBQztRQUNOLFlBQVksRUFBRTtZQUNWLDJCQUFtQjtZQUNuQix5QkFBaUI7U0FDcEI7UUFDRCxPQUFPLEVBQUU7WUFDTCxtQkFBVztZQUNYLHFCQUFZO1lBQ1osbUJBQVc7WUFDWCxnQkFBZ0I7U0FDbkI7UUFDRCxPQUFPLEVBQUU7WUFDTCwyQkFBbUI7WUFDbkIseUJBQWlCO1NBQ3BCO0tBQ0osQ0FBQztHQUNXLGNBQWMsQ0FDMUI7QUFEWSx3Q0FBYyIsImZpbGUiOiJhcHAvdG9kb2xpc3QvdG9kb2xpc3QubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG4vLyBpbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbXBsZXRlZEZpbHRlclBpcGUsIFRvZG9saXN0Q29tcG9uZW50LCB0b2Rvcm91dGluZyB9IGZyb20gJy4vaW5kZXgnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBDb21wbGV0ZWRGaWx0ZXJQaXBlLFxuICAgICAgICBUb2RvbGlzdENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICB0b2Rvcm91dGluZ1xuICAgICAgICAvLyBCcm93c2VyTW9kdWxlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIENvbXBsZXRlZEZpbHRlclBpcGUsXG4gICAgICAgIFRvZG9saXN0Q29tcG9uZW50XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBUb2RvbGlzdE1vZHVsZSB7XG59XG4iXX0=
