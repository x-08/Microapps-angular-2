"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var todo_model_1 = require("./todo.model");
var TodolistComponent = (function () {
    function TodolistComponent() {
        this.showCompleted = true;
        this.todo = new todo_model_1.Todo('Add me to list!', false);
        this.list = [
            new todo_model_1.Todo('Its cool'),
            new todo_model_1.Todo('Hello', true)
        ];
    }
    TodolistComponent.prototype.addTodo = function () {
        this.list = this.list.concat(todo_model_1.Todo.clone(this.todo));
        this.todo.clear();
    };
    TodolistComponent.prototype.delTodo = function (todoIndex) {
        this.list = this.list.filter(function (todo, index) { return index !== todoIndex; });
    };
    return TodolistComponent;
}());
TodolistComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'as-todolist',
        templateUrl: 'todolist.html'
    }),
    __metadata("design:paramtypes", [])
], TodolistComponent);
exports.TodolistComponent = TodolistComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90b2RvbGlzdC90b2RvbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMEM7QUFFMUMsMkNBQW9DO0FBT3BDLElBQWEsaUJBQWlCO0lBSzFCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGlCQUFJLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLElBQUksR0FBRztZQUNSLElBQUksaUJBQUksQ0FBQyxVQUFVLENBQUM7WUFDcEIsSUFBSSxpQkFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7U0FDMUIsQ0FBQztJQUNOLENBQUM7SUFFRCxtQ0FBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxtQ0FBTyxHQUFQLFVBQVEsU0FBaUI7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FDeEIsVUFBQyxJQUFJLEVBQUUsS0FBSyxJQUFLLE9BQUEsS0FBSyxLQUFLLFNBQVMsRUFBbkIsQ0FBbUIsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFDTCx3QkFBQztBQUFELENBdkJBLEFBdUJDLElBQUE7QUF2QlksaUJBQWlCO0lBTDdCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGFBQWE7UUFDdkIsV0FBVyxFQUFFLGVBQWU7S0FDL0IsQ0FBQzs7R0FDVyxpQkFBaUIsQ0F1QjdCO0FBdkJZLDhDQUFpQiIsImZpbGUiOiJhcHAvdG9kb2xpc3QvdG9kb2xpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRvZG8gfSBmcm9tICcuL3RvZG8ubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnYXMtdG9kb2xpc3QnLFxuICAgIHRlbXBsYXRlVXJsOiAndG9kb2xpc3QuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgVG9kb2xpc3RDb21wb25lbnQge1xuICAgIHB1YmxpYyB0b2RvOiBUb2RvO1xuICAgIHByaXZhdGUgbGlzdDogVG9kb1tdO1xuICAgIHByaXZhdGUgc2hvd0NvbXBsZXRlZDogQm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNob3dDb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnRvZG8gPSBuZXcgVG9kbygnQWRkIG1lIHRvIGxpc3QhJywgZmFsc2UpO1xuICAgICAgICB0aGlzLmxpc3QgPSBbXG4gICAgICAgICAgICBuZXcgVG9kbygnSXRzIGNvb2wnKSxcbiAgICAgICAgICAgIG5ldyBUb2RvKCdIZWxsbycsIHRydWUpXG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgYWRkVG9kbygpIHtcbiAgICAgICAgdGhpcy5saXN0ID0gdGhpcy5saXN0LmNvbmNhdChUb2RvLmNsb25lKHRoaXMudG9kbykpO1xuICAgICAgICB0aGlzLnRvZG8uY2xlYXIoKTtcbiAgICB9XG5cbiAgICBkZWxUb2RvKHRvZG9JbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMubGlzdCA9IHRoaXMubGlzdC5maWx0ZXIoXG4gICAgICAgICAgICAodG9kbywgaW5kZXgpID0+IGluZGV4ICE9PSB0b2RvSW5kZXgpO1xuICAgIH1cbn1cbiJdfQ==
