(function () {
    var todos;

    // 이벤트가 발생될 요소
    var inputTodo = document.getElementById('input-todo');
    var todoList = document.getElementById('todo-list');

    // todos의 내용을 불러오는 함수
    var render = function () {
        var html = '';

        todos.forEach(function (todo) {
            var checked = todo.completed ? 'checked' : '';

            html += '<li class="list-group-item"> \
        <div class="hover-anchor"> \
          <a class="hover-action text-muted"> \
            <span class="glyphicon glyphicon-remove-circle pull-right" data-id="' + todo.id + '"></span> \
          </a> \
          <label class="i-checks" for="' + todo.id + '"> \
            <input type="checkbox" id="' + todo.id + '"' + checked + '><i></i> \
            <span>' + todo.content + '</span> \
          </label> \
        </div> \
      </li>';
        });

        todoList.innerHTML = html;
    };
    //새로 등록된 내용의 ID값을 정하는 함수
    var lastTodoId = function () {
        return todos ? Math.max.apply(null, todos.map(function (todo) {
            return todo.id;
        })) + 1 : 1;
    };
    //초기값을 불러오는 함수
    var getTodos = function () {
        todos = [
            { id: 3, content: 'HTML', completed: false },
            { id: 2, content: 'CSS', completed: true },
            { id: 1, content: 'Javascript', completed: false }
        ];
        render();
        console.log('[GET]\n', todos);
    };
    // 내용을 추가하는 함수
    var addTodo = function () {
        var content = inputTodo.value;
        inputTodo.value = '';

        if (!todos || todos.length == 0) {
            todos = [{ id: 1, content, completed: false }];
        } else {
            todos = [{ id: lastTodoId(), content, completed: false }].concat(todos);
            // todos = [{ id: lastTodoId(), content, completed: false }, ...todos];
        }

        render();
        console.log('[ADD]\n', todos);
    };
    // 내용을 제거하는 함수
    var removeTodo = function (id) {
        todos = todos.filter(function (todo) {
            return todo.id != id;
        });
        render();
        console.log('[REMOVE]\n', todos);
    };

    //체크박스 완료유무 변경
    var toggleTodoComplete = function (id) {
        todos = todos.map(function (todo) {
            return todo.id == id ? Object.assign({}, todo, { completed: !todo.completed }) : todo;
        });
        render();
        console.log('[TOGGLE-COMP]\n', todos);
    };

    // load 이벤트가 발생될때 초기값을 불러오는 함수를 실행한다.
    window.addEventListener('load', function () {
        getTodos();
    });
    // enter이 입력될때 내용을 추가하기, 맨 앞뒤에 공백이 있을때 처리 (=> 앞에 공백이 있을때 입력이 안됨, 공백있는상태로 추가하거나 공백을제거한 값이 추가될 필요성이 있다.)
    inputTodo.addEventListener('keyup', function (e) {
        if (e.keyCode !== 13 || inputTodo.value.trim() === '') return;
        addTodo();
    });

    // 체크박스 변경이 있을때 completed 값을 바꾸기
    todoList.addEventListener('change', function (e) {
        toggleTodoComplete(e.target.id);
    });

    // 클릭이벤트 발생 시 삭제
    todoList.addEventListener('click', function (e) {
        var target = e.target;  //alis
        if (!target || target.nodeName !== 'SPAN' || target.parentNode.nodeName === 'LABEL') return;
        removeTodo(target.dataset.id);
    });
}());