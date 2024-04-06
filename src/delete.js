function handleDelete(tasks) {
  const allTasksDisplay = document.getElementById("allTasksDisplay");
  const todayDisplay = document.getElementById("todayDisplay");
  const projectDisplay = document.getElementById("projectDisplay");

  function deleteTask() {
    const deleteIcons = document.querySelectorAll(".deleteIcon");
    const allDisplays = [allTasksDisplay, todayDisplay, projectDisplay];

    deleteIcons.forEach((deleteIcon) => {
      deleteIcon.addEventListener("click", () => {
        let taskId;
        allDisplays.forEach((display) => {
          taskId = deleteIcon.closest(".taskCardContainer").dataset.taskId;
          const taskCard = display.querySelector(
            `.taskCardContainer[data-task-id='${taskId}']`
          );
          const taskCardDetailsContainer = display.querySelector(
            `.taskCardDetailsContainer[data-task-id="${taskId}"]`
          );

          if (taskCard) {
            display.removeChild(taskCard);
          }
          if (taskCardDetailsContainer) {
            display.removeChild(taskCardDetailsContainer);
          }
        });

        const taskIndex = tasks.findIndex(
          (task) => task.id === parseInt(taskId)
        );

        if (taskIndex !== -1) {
          tasks.splice(taskIndex, 1);
        }
      });
    });
  }
  return { deleteTask };
}

export default handleDelete;
