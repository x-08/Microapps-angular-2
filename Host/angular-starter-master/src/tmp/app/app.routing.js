"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var index_1 = require("./home/index");
// import { TodolistRoutes } from './todolist/index';
var appRoutes = index_1.HomeRoutes.concat([
    // ...TodolistRoutes,
    { path: 'td', loadChildren: 'app/todolist/todolist.module#TodolistModule' },
    { path: 'mui', loadChildren: 'mui#TodolistModule' }
]);
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBDQUF1RDtBQUV2RCxzQ0FBMEM7QUFDMUMscURBQXFEO0FBRXJELElBQU0sU0FBUyxHQUNSLGtCQUFVO0lBQ2IscUJBQXFCO0lBQ3JCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsNkNBQTZDLEVBQUU7SUFDM0UsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxvQkFBb0IsRUFBRTtFQUN0RCxDQUFDO0FBRVcsUUFBQSxtQkFBbUIsR0FBVSxFQUV6QyxDQUFDO0FBRVcsUUFBQSxPQUFPLEdBQUcscUJBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMiLCJmaWxlIjoiYXBwL2FwcC5yb3V0aW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBIb21lUm91dGVzIH0gZnJvbSAnLi9ob21lL2luZGV4Jztcbi8vIGltcG9ydCB7IFRvZG9saXN0Um91dGVzIH0gZnJvbSAnLi90b2RvbGlzdC9pbmRleCc7XG5cbmNvbnN0IGFwcFJvdXRlczogUm91dGVzID0gW1xuICAgIC4uLkhvbWVSb3V0ZXMsXG4gICAgLy8gLi4uVG9kb2xpc3RSb3V0ZXMsXG4gICAgeyBwYXRoOiAndGQnLCBsb2FkQ2hpbGRyZW46ICdhcHAvdG9kb2xpc3QvdG9kb2xpc3QubW9kdWxlI1RvZG9saXN0TW9kdWxlJyB9LFxuICAgIHsgcGF0aDogJ211aScsIGxvYWRDaGlsZHJlbjogJ211aSNUb2RvbGlzdE1vZHVsZScgfVxuXTtcblxuZXhwb3J0IGNvbnN0IGFwcFJvdXRpbmdQcm92aWRlcnM6IGFueVtdID0gW1xuXG5dO1xuXG5leHBvcnQgY29uc3Qgcm91dGluZyA9IFJvdXRlck1vZHVsZS5mb3JSb290KGFwcFJvdXRlcyk7XG4iXX0=