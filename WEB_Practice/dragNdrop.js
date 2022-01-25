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
      console.log("C",closest.offset); //이전반환값의 offset (시작에선 초기값으로 주어진 offset)
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





















//
