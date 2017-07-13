"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var completed_filter_pipe_1 = require("./completed-filter.pipe");
var todo_model_1 = require("./todo.model");
describe('CompletedFilterPipe', function () {
    var pipe;
    var todos = [
        new todo_model_1.Todo('test1', true),
        new todo_model_1.Todo('test2', false)
    ];
    beforeEach(function () {
        pipe = new completed_filter_pipe_1.CompletedFilterPipe();
    });
    it('should return original todos when pass true', function () {
        var result = pipe.transform(todos, true);
        expect(result).toEqual(todos);
    });
    it('should return not-completed todos when pass false', function () {
        var result = pipe.transform(todos, false);
        result.forEach(function (todo) { return expect(todo.done).toBeFalsy(); });
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90b2RvbGlzdC9jb21wbGV0ZWQtZmlsdGVyLnBpcGUuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlFQUE4RDtBQUM5RCwyQ0FBb0M7QUFFcEMsUUFBUSxDQUFDLHFCQUFxQixFQUFFO0lBQzVCLElBQUksSUFBeUIsQ0FBQztJQUM5QixJQUFJLEtBQUssR0FBVztRQUNoQixJQUFJLGlCQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztRQUN2QixJQUFJLGlCQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQztLQUMzQixDQUFDO0lBRUYsVUFBVSxDQUFDO1FBQ1AsSUFBSSxHQUFHLElBQUksMkNBQW1CLEVBQUUsQ0FBQztJQUNyQyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyw2Q0FBNkMsRUFBRTtRQUM5QyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6QyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLG1EQUFtRCxFQUFFO1FBQ3BELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUE3QixDQUE2QixDQUFDLENBQUM7SUFDMUQsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAvdG9kb2xpc3QvY29tcGxldGVkLWZpbHRlci5waXBlLnNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wbGV0ZWRGaWx0ZXJQaXBlIH0gZnJvbSAnLi9jb21wbGV0ZWQtZmlsdGVyLnBpcGUnO1xuaW1wb3J0IHsgVG9kbyB9IGZyb20gJy4vdG9kby5tb2RlbCc7XG5cbmRlc2NyaWJlKCdDb21wbGV0ZWRGaWx0ZXJQaXBlJywgKCkgPT4ge1xuICAgIGxldCBwaXBlOiBDb21wbGV0ZWRGaWx0ZXJQaXBlO1xuICAgIGxldCB0b2RvczogVG9kb1tdID0gW1xuICAgICAgICBuZXcgVG9kbygndGVzdDEnLCB0cnVlKSxcbiAgICAgICAgbmV3IFRvZG8oJ3Rlc3QyJywgZmFsc2UpXG4gICAgXTtcblxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgICBwaXBlID0gbmV3IENvbXBsZXRlZEZpbHRlclBpcGUoKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIG9yaWdpbmFsIHRvZG9zIHdoZW4gcGFzcyB0cnVlJywgKCkgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0ID0gcGlwZS50cmFuc2Zvcm0odG9kb3MsIHRydWUpO1xuICAgICAgICBleHBlY3QocmVzdWx0KS50b0VxdWFsKHRvZG9zKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIG5vdC1jb21wbGV0ZWQgdG9kb3Mgd2hlbiBwYXNzIGZhbHNlJywgKCkgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0ID0gcGlwZS50cmFuc2Zvcm0odG9kb3MsIGZhbHNlKTtcbiAgICAgICAgcmVzdWx0LmZvckVhY2godG9kbyA9PiBleHBlY3QodG9kby5kb25lKS50b0JlRmFsc3koKSk7XG4gICAgfSk7XG59KTtcbiJdfQ==
