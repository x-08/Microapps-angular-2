"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var core_1 = require("@angular/core");
var index_1 = require("./index");
var TestComponent = (function () {
    function TestComponent() {
    }
    return TestComponent;
}());
TestComponent = __decorate([
    core_1.Component({
        selector: 'as-test',
        template: '<as-todolist></as-todolist>'
    })
], TestComponent);
var todoCompiled;
var todolistCmp;
describe('TodolistComponent', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [TestComponent],
            imports: [index_1.TodolistModule]
        });
    });
    it('should have been created successfully', testing_1.async(function () {
        testing_1.TestBed.compileComponents().then(function () {
            var fixture = testing_1.TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            todoCompiled = fixture.nativeElement;
            todolistCmp = fixture.debugElement
                .children[0].componentInstance;
            expect(todoCompiled).toBeDefined();
        });
    }));
    it('should add todo successfully', testing_1.async(function () {
        testing_1.TestBed.compileComponents().then(function () {
            var fixture = testing_1.TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            todoCompiled = fixture.nativeElement;
            todolistCmp = fixture.debugElement
                .children[0].componentInstance;
            todolistCmp.todo = new index_1.Todo('test', true);
            todolistCmp.addTodo();
            fixture.detectChanges();
            var items = todoCompiled.querySelectorAll('.list-group-item');
            expect(items.length).toEqual(3);
            var item = items[items.length - 1];
            expect(item.querySelector('label').textContent).toEqual(' test');
            expect(item.querySelector('input[type="checkbox"]').value).toBeTruthy();
        });
    }));
    it('should delete todo successfully', testing_1.async(function () {
        testing_1.TestBed.compileComponents().then(function () {
            var fixture = testing_1.TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            todoCompiled = fixture.nativeElement;
            todolistCmp = fixture.debugElement
                .children[0].componentInstance;
            todolistCmp.delTodo(0);
            fixture.detectChanges();
            expect(todoCompiled.querySelectorAll('.list-group-item').length)
                .toEqual(1);
        });
    }));
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90b2RvbGlzdC90b2RvbGlzdC5jb21wb25lbnQuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLGlEQUcrQjtBQUMvQixzQ0FBMEM7QUFFMUMsaUNBQWtFO0FBTWxFLElBQU0sYUFBYTtJQUFuQjtJQUNBLENBQUM7SUFBRCxvQkFBQztBQUFELENBREEsQUFDQyxJQUFBO0FBREssYUFBYTtJQUpsQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFNBQVM7UUFDbkIsUUFBUSxFQUFFLDZCQUE2QjtLQUMxQyxDQUFDO0dBQ0ksYUFBYSxDQUNsQjtBQUVELElBQUksWUFBWSxDQUFDO0FBQ2pCLElBQUksV0FBOEIsQ0FBQztBQUVuQyxRQUFRLENBQUMsbUJBQW1CLEVBQUU7SUFDMUIsVUFBVSxDQUFDO1FBQ1AsaUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQztZQUMzQixZQUFZLEVBQUUsQ0FBRSxhQUFhLENBQUU7WUFDL0IsT0FBTyxFQUFFLENBQUUsc0JBQWMsQ0FBRTtTQUM5QixDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx1Q0FBdUMsRUFBRSxlQUFLLENBQUM7UUFDOUMsaUJBQU8sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLElBQUksQ0FBQztZQUM3QixJQUFJLE9BQU8sR0FBRyxpQkFBTyxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNyRCxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7WUFFeEIsWUFBWSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7WUFDckMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxZQUFZO2lCQUM3QixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUM7WUFDbkMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVKLEVBQUUsQ0FBQyw4QkFBOEIsRUFBRSxlQUFLLENBQUM7UUFDckMsaUJBQU8sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLElBQUksQ0FBQztZQUM3QixJQUFJLE9BQU8sR0FBRyxpQkFBTyxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNyRCxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDeEIsWUFBWSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7WUFDckMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxZQUFZO2lCQUM3QixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUM7WUFDbkMsV0FBVyxDQUFDLElBQUksR0FBRyxJQUFJLFlBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDMUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3RCLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUV4QixJQUFJLEtBQUssR0FBRyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUM5RCxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVoQyxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDakUsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUM1RSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFSixFQUFFLENBQUMsaUNBQWlDLEVBQUUsZUFBSyxDQUFDO1FBQ3hDLGlCQUFPLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDN0IsSUFBSSxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDckQsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBRXhCLFlBQVksR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1lBQ3JDLFdBQVcsR0FBRyxPQUFPLENBQUMsWUFBWTtpQkFDN0IsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDO1lBRW5DLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkIsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3hCLE1BQU0sQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxNQUFNLENBQUM7aUJBQzNELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDUixDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAvdG9kb2xpc3QvdG9kb2xpc3QuY29tcG9uZW50LnNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIGFzeW5jLFxuICAgIFRlc3RCZWRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUb2RvLCBUb2RvbGlzdENvbXBvbmVudCwgVG9kb2xpc3RNb2R1bGUgfSBmcm9tICcuL2luZGV4JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcy10ZXN0JyxcbiAgICB0ZW1wbGF0ZTogJzxhcy10b2RvbGlzdD48L2FzLXRvZG9saXN0Pidcbn0pXG5jbGFzcyBUZXN0Q29tcG9uZW50IHtcbn1cblxubGV0IHRvZG9Db21waWxlZDtcbmxldCB0b2RvbGlzdENtcDogVG9kb2xpc3RDb21wb25lbnQ7XG5cbmRlc2NyaWJlKCdUb2RvbGlzdENvbXBvbmVudCcsICgpID0+IHtcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgICAgVGVzdEJlZC5jb25maWd1cmVUZXN0aW5nTW9kdWxlKHtcbiAgICAgICAgICAgIGRlY2xhcmF0aW9uczogWyBUZXN0Q29tcG9uZW50IF0sXG4gICAgICAgICAgICBpbXBvcnRzOiBbIFRvZG9saXN0TW9kdWxlIF1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIGhhdmUgYmVlbiBjcmVhdGVkIHN1Y2Nlc3NmdWxseScsIGFzeW5jKCgpID0+IHtcbiAgICAgICAgVGVzdEJlZC5jb21waWxlQ29tcG9uZW50cygpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGZpeHR1cmUgPSBUZXN0QmVkLmNyZWF0ZUNvbXBvbmVudChUZXN0Q29tcG9uZW50KTtcbiAgICAgICAgICAgIGZpeHR1cmUuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICAgICAgICB0b2RvQ29tcGlsZWQgPSBmaXh0dXJlLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICB0b2RvbGlzdENtcCA9IGZpeHR1cmUuZGVidWdFbGVtZW50XG4gICAgICAgICAgICAgICAgLmNoaWxkcmVuWzBdLmNvbXBvbmVudEluc3RhbmNlO1xuICAgICAgICAgICAgZXhwZWN0KHRvZG9Db21waWxlZCkudG9CZURlZmluZWQoKTtcbiAgICAgICAgfSk7XG4gICAgfSkpO1xuXG4gICAgaXQoJ3Nob3VsZCBhZGQgdG9kbyBzdWNjZXNzZnVsbHknLCBhc3luYygoKSA9PiB7XG4gICAgICAgIFRlc3RCZWQuY29tcGlsZUNvbXBvbmVudHMoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGxldCBmaXh0dXJlID0gVGVzdEJlZC5jcmVhdGVDb21wb25lbnQoVGVzdENvbXBvbmVudCk7XG4gICAgICAgICAgICBmaXh0dXJlLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICAgIHRvZG9Db21waWxlZCA9IGZpeHR1cmUubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICAgIHRvZG9saXN0Q21wID0gZml4dHVyZS5kZWJ1Z0VsZW1lbnRcbiAgICAgICAgICAgICAgICAuY2hpbGRyZW5bMF0uY29tcG9uZW50SW5zdGFuY2U7XG4gICAgICAgICAgICB0b2RvbGlzdENtcC50b2RvID0gbmV3IFRvZG8oJ3Rlc3QnLCB0cnVlKTtcbiAgICAgICAgICAgIHRvZG9saXN0Q21wLmFkZFRvZG8oKTtcbiAgICAgICAgICAgIGZpeHR1cmUuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICAgICAgICBsZXQgaXRlbXMgPSB0b2RvQ29tcGlsZWQucXVlcnlTZWxlY3RvckFsbCgnLmxpc3QtZ3JvdXAtaXRlbScpO1xuICAgICAgICAgICAgZXhwZWN0KGl0ZW1zLmxlbmd0aCkudG9FcXVhbCgzKTtcblxuICAgICAgICAgICAgbGV0IGl0ZW0gPSBpdGVtc1tpdGVtcy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGV4cGVjdChpdGVtLnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsJykudGV4dENvbnRlbnQpLnRvRXF1YWwoJyB0ZXN0Jyk7XG4gICAgICAgICAgICBleHBlY3QoaXRlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS52YWx1ZSkudG9CZVRydXRoeSgpO1xuICAgICAgICB9KTtcbiAgICB9KSk7XG5cbiAgICBpdCgnc2hvdWxkIGRlbGV0ZSB0b2RvIHN1Y2Nlc3NmdWxseScsIGFzeW5jKCgpID0+IHtcbiAgICAgICAgVGVzdEJlZC5jb21waWxlQ29tcG9uZW50cygpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGZpeHR1cmUgPSBUZXN0QmVkLmNyZWF0ZUNvbXBvbmVudChUZXN0Q29tcG9uZW50KTtcbiAgICAgICAgICAgIGZpeHR1cmUuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICAgICAgICB0b2RvQ29tcGlsZWQgPSBmaXh0dXJlLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICB0b2RvbGlzdENtcCA9IGZpeHR1cmUuZGVidWdFbGVtZW50XG4gICAgICAgICAgICAgICAgLmNoaWxkcmVuWzBdLmNvbXBvbmVudEluc3RhbmNlO1xuXG4gICAgICAgICAgICB0b2RvbGlzdENtcC5kZWxUb2RvKDApO1xuICAgICAgICAgICAgZml4dHVyZS5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgICAgICBleHBlY3QodG9kb0NvbXBpbGVkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXN0LWdyb3VwLWl0ZW0nKS5sZW5ndGgpXG4gICAgICAgICAgICAgICAgLnRvRXF1YWwoMSk7XG4gICAgICAgIH0pO1xuICAgIH0pKTtcbn0pO1xuIl19
