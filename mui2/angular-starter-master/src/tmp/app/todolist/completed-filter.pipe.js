"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var lodash_1 = require("lodash");
var CompletedFilterPipe = (function () {
    function CompletedFilterPipe() {
    }
    CompletedFilterPipe.prototype.transform = function (todos, done) {
        if (done) {
            return todos;
        }
        return lodash_1.filter(todos, { done: done });
    };
    return CompletedFilterPipe;
}());
CompletedFilterPipe = __decorate([
    core_1.Pipe({
        name: 'asCompletedFilter'
    })
], CompletedFilterPipe);
exports.CompletedFilterPipe = CompletedFilterPipe;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90b2RvbGlzdC9jb21wbGV0ZWQtZmlsdGVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBb0Q7QUFDcEQsaUNBQWdDO0FBT2hDLElBQWEsbUJBQW1CO0lBQWhDO0lBUUEsQ0FBQztJQVBHLHVDQUFTLEdBQVQsVUFBVSxLQUFhLEVBQUUsSUFBSTtRQUN6QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ1AsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBRUQsTUFBTSxDQUFDLGVBQU0sQ0FBQyxLQUFLLEVBQUUsRUFBQyxJQUFJLE1BQUEsRUFBQyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNMLDBCQUFDO0FBQUQsQ0FSQSxBQVFDLElBQUE7QUFSWSxtQkFBbUI7SUFIL0IsV0FBSSxDQUFDO1FBQ0YsSUFBSSxFQUFFLG1CQUFtQjtLQUM1QixDQUFDO0dBQ1csbUJBQW1CLENBUS9CO0FBUlksa0RBQW1CIiwiZmlsZSI6ImFwcC90b2RvbGlzdC9jb21wbGV0ZWQtZmlsdGVyLnBpcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi90b2RvLm1vZGVsJztcblxuQFBpcGUoe1xuICAgIG5hbWU6ICdhc0NvbXBsZXRlZEZpbHRlcidcbn0pXG5leHBvcnQgY2xhc3MgQ29tcGxldGVkRmlsdGVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAgIHRyYW5zZm9ybSh0b2RvczogVG9kb1tdLCBkb25lKTogVG9kb1tdIHtcbiAgICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgICAgIHJldHVybiB0b2RvcztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmaWx0ZXIodG9kb3MsIHtkb25lfSk7XG4gICAgfVxufVxuIl19
