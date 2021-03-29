System.register("classes/todo", [], function (exports_1, context_1) {
    "use strict";
    var todo, todoTemplate;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            todo = {
                id: 123,
                name: 'Pick up dog',
                completed: true,
            };
            todoTemplate = `
<div todo=${todo.id} class='list-group-item'>
  <i class="${todo.completed ? '' : 'hidden'}"></i>
  <span class="name">${todo.name}</span>
</div>
`;
            exports_1("todoTemplate", todoTemplate);
        }
    };
});
System.register("classes/countdown", [], function (exports_2, context_2) {
    "use strict";
    var countdown;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
            countdown = ({ initial, final: final = 0, interval: interval = 1, initial: current, }) => {
                while (current > final) {
                    console.log(current);
                    current -= interval;
                }
            };
            exports_2("countdown", countdown);
        }
    };
});
System.register("app", ["classes/todo", "classes/countdown"], function (exports_3, context_3) {
    "use strict";
    var todo_js_1, countdown_js_1, container, filtered;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (todo_js_1_1) {
                todo_js_1 = todo_js_1_1;
            },
            function (countdown_js_1_1) {
                countdown_js_1 = countdown_js_1_1;
            }
        ],
        execute: function () {
            container = document.getElementById('container');
            filtered = [1, 2, 3].filter((x) => x > 0);
            countdown_js_1.countdown({ initial: 10, final: 0 });
            console.log(filtered.join());
            container.innerHTML = `
 <div>Data</div>
  ${todo_js_1.todoTemplate}
`;
        }
    };
});
System.register("classes/length", [], function (exports_4, context_4) {
    "use strict";
    var length;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [],
        execute: function () {
            length = (x, y) => {
                var total = x.length + y.length;
                //unescessary but demonstates the interface allowing more than 1 type
                x.slice(0);
                if (x instanceof Array) {
                    x.push('abc');
                }
                if (x instanceof String) {
                    x.substr(1);
                }
                return total;
            };
            exports_4("length", length);
        }
    };
});
