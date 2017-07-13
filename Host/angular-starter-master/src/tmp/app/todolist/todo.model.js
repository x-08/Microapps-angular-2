"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Todo = (function () {
    function Todo(name, done) {
        if (done === void 0) { done = false; }
        this.name = name;
        this.done = done;
    }
    Todo.clone = function (todo) {
        return new Todo(todo.name, todo.done);
    };
    Todo.prototype.clear = function () {
        this.name = '';
        this.done = false;
    };
    return Todo;
}());
exports.Todo = Todo;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90b2RvbGlzdC90b2RvLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFRSSxjQUFZLElBQVksRUFBRSxJQUFZO1FBQVoscUJBQUEsRUFBQSxZQUFZO1FBQ2xDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFQTSxVQUFLLEdBQVosVUFBYSxJQUFVO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBT0Qsb0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUNMLFdBQUM7QUFBRCxDQWpCQSxBQWlCQyxJQUFBO0FBakJZLG9CQUFJIiwiZmlsZSI6ImFwcC90b2RvbGlzdC90b2RvLm1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFRvZG8ge1xuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gICAgcHVibGljIGRvbmU6IGJvb2xlYW47XG5cbiAgICBzdGF0aWMgY2xvbmUodG9kbzogVG9kbyk6IFRvZG8ge1xuICAgICAgICByZXR1cm4gbmV3IFRvZG8odG9kby5uYW1lLCB0b2RvLmRvbmUpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgZG9uZSA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZG9uZSA9IGRvbmU7XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMubmFtZSA9ICcnO1xuICAgICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICB9XG59XG4iXX0=
