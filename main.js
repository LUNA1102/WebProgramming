const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-input");
const list_el = document.querySelector("#tasks");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    // submit 이벤트가 발생하면 페이지가 새로고침됨으로 모든 정보가 사라짐
    // 그 동작을 중지시키는 것이 preventDefault()

    const task = input.value;
    if (!task) {
        // 할 일 입력창에 내용이 입력되지 않았으면
        alert("할 일을 입력하세요"); // 경고창 발생
    } else {
        const task_el = document.createElement("div");
        // createElement(): 문서에 HTML 요소 추가
        task_el.classList.add("task");
        // classLlist.add(): 지정한 클래스 값을 추가
        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");

        task_el.appendChild(task_content_el); // task > content
        // appendChild(): 선택한 요소 안에 자식 요소 추가


        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");
        // setAttribute('속성 이름', '속성값');
        // input 자체에서 수정할 수 없게 하기

        task_content_el.appendChild(task_input_el); // content > input

        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");

        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerText = "Edit";

        const task_complete_el = document.createElement("button");
        task_complete_el.classList.add("complete");
        task_complete_el.innerText = "Complete";

        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");
        task_delete_el.innerText = "Delete";

        task_actions_el.appendChild(task_edit_el); // actions > edit
        task_actions_el.appendChild(task_complete_el); // actions > complete
        task_actions_el.appendChild(task_delete_el); // actions > delete

        task_el.appendChild(task_actions_el); // task > actions
        list_el.appendChild(task_el); // list > task

        input.value = ""; // 할 일이 입력된 경우 할 일 입력칸을 비움

        task_complete_el.addEventListener("click", function () {
        task_input_el.classList.toggle("completed");
        // 할 일 완료하면 줄 긋기
        // toggle() -> ON/OFF
        });

        task_edit_el.addEventListener("click", function () {
            if (task_edit_el.innerText.toLowerCase() === "edit") {
                // edit 버튼이면
                task_input_el.removeAttribute("readonly");
                // removeAttribute(): 요소의 속성을 제거
                // 'readonly' 속성을 제거하여 수정할 수 있게 함
                task_input_el.focus();
                // focus(): 해당 요소에 포커스를 부여
                // 텍스트 창의 경우, 커서를 위치시켜 바로 입력
                task_actions_el.removeChild(task_complete_el);
                task_actions_el.removeChild(task_delete_el);
                task_edit_el.innerText = "Save";
            } else {
                task_input_el.setAttribute("readonly", "readonly");
                // 수정 후 저장하면 다시 readonly 속성을 부여하여 수정 불가
                task_edit_el.innerText = "Edit";
                task_actions_el.appendChild(task_complete_el);
                task_actions_el.appendChild(task_delete_el);
            }
        });

        task_delete_el.addEventListener("click", function () {
            list_el.removeChild(task_el);
            // removeChild(): 부모에서 포함된 자식 노드를 제거
        });
    }
});