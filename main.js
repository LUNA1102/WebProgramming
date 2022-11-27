const form = document.querySelector("task-form");
const input = document.querySelector("#tast-input");
const list = document.querySelector("#tasks");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const task = input.value;

    if (!task) {
        // 할 일이 입력창에 내용이 입력되지 않았으면
        alert("할 일을 입력하세요."); // 경고창 발생
    }

    else {
        const task_el = document.createElement("div");
        // createElement(): 문서에 HTML 요소 추가
        task_el.classList.add("task");
        // classList.add(): 지정한 클래스 값을 추가
        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");

        task_el.appendChild(task_content_el); // task > content
        // 선택한 요소 안에 자식요소를 추가
        // append와 appendChild의 차이점
        // append(): 노드 객체나 text를 받을 수 있고, 한 번에 여러 개의 자식 요소 설정 가능
        // appendChild(): 오직 노드 객체만 받을 수 있음
    }
});