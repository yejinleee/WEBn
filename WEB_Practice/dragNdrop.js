const draggables = document.querySelectorAll(".draggable");
const containers = document.querySelectorAll(".container");

function getDragAfterElement(container, x) {
  const draggableElements = [
    ...container.querySelectorAll(".draggable:not(.dragging)"),
  ];

  return draggableElements.reduce(
    (closest, child) => {
      console.log("closet",closest);
      console.log("child",child);
      const box = child.getBoundingClientRect();
      const offset = x - box.left - box.width / 2;
      console.log(offset); //드래그하는 커서 위치
      console.log("C",closest.offset); //이전반환값 offset (시작에선 초기값으로 주어진 offset)
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY },
  ).element;
}

draggables.forEach(draggable=> {
  draggable.addEventListener("dragstart", ()=>{
    draggable.classList.add("dragging");
  });
  draggable.addEventListener("dragend", ()=>{
    draggable.classList.remove("dragging");
  });
});

containers.forEach(container => {
  container.addEventListener("dragover", e => {
    e.preventDefault();
    const afterElement = getDragAfterElement(container, e.clientX);
    const draggable = document.querySelector(".dragging");
    if (afterElement === undefined) {
      container.appendChild(draggable);
    } else {
      container.insertBefore(draggable, afterElement);
    }
  });
});






// Practice My Self

// 드래그 하기 시작하면
function onDragStart(event){
  event.dataTransfer.setData('text/plain', event.target.id);
  // 첫번재 매개변수(format) 형식인 두번째 매개변수(data)로 지정.
  event
    .currentTarget
    .style
    .backgroundColor = 'yellow';
}

// 드래그 하는 동안
function onDragOver(event) {
  event.preventDefault();
}

// 드래그 마치고 드롭
function onDrop(event) {
  const id = event
    .dataTransfer
    .getData('text'); //'text'형식의 데이터를 반환 ->드래그 하는 요소의 id명
    const draggableElement = document.getElementById(id);
    const dropzone = event.target;
    dropzone.appendChild(draggableElement);
    event.dataTransfer.clearData();
  }











//
