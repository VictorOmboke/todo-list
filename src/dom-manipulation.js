import handleTodoLogic from "./todo-logic.js";

function handleDomManipulation() {
  const tasks = [];

  let taskCardCounter = 0;

  const display = document.getElementById("content");

  const taskCreator = document.getElementById("taskCreator");
  const taskForm = document.getElementById("taskForm");
  const projectCreator = document.getElementById("projectCreator");
  const taskEditor = document.getElementById("taskEditor");
  const editForm = document.getElementById("editForm");

  const taskLauncher = document.querySelector(".taskLauncher");
  const projectCreatorBtn = document.querySelector(".createProjectBtn");
  const taskCreatorCloseBtn = document.querySelector(".taskClose");
  const projectCreatorCloseBtn = document.querySelector(".projectClose");
  const taskEditorCloseBtn = document.querySelector(".editClose");

  function launchTaskCreator() {
    taskLauncher.addEventListener("click", (event) => {
      event.stopPropagation();
      taskCreator.style.display = "block";
      projectCreatorBtn.style.pointerEvents = "none";
      taskForm.reset();
    });
  }

  function closeTaskCreator() {
    taskCreatorCloseBtn.addEventListener("click", () => {
      taskCreator.style.display = "none";
      projectCreatorBtn.style.pointerEvents = "auto";
    });

    window.addEventListener("click", (event) => {
      if (!taskCreator.contains(event.target)) {
        taskCreator.style.display = "none";
        projectCreatorBtn.style.pointerEvents = "auto";
      }
    });
  }

  function launchProjectCreator() {
    projectCreatorBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      projectCreator.style.display = "block";
      taskLauncher.style.pointerEvents = "none";
    });
  }

  function closeProjectCreator() {
    projectCreatorCloseBtn.addEventListener("click", () => {
      projectCreator.style.display = "none";
      taskLauncher.style.pointerEvents = "auto";
    });

    window.addEventListener("click", (event) => {
      if (!projectCreator.contains(event.target)) {
        projectCreator.style.display = "none";
        taskLauncher.style.pointerEvents = "auto";
      }
    });
  }

  function launchTaskEditor() {
    const editIcons = document.querySelectorAll(".editIcon");

    editIcons.forEach((editIcon) => {
      editIcon.addEventListener("click", (event) => {
        event.stopPropagation();

        const taskCard = event.target.closest(".taskCard");
        const taskId = taskCard.dataset.taskId;

        populateEditForm(taskId);

        taskCreator.style.display = "none";
        projectCreator.style.display = "none";

        taskEditor.style.display = "block";
        console.log("Task editor has been opened");

        taskLauncher.style.pointerEvents = "none";
        projectCreatorBtn.style.pointerEvents = "none";
      });
    });
  }

  function closeTaskEditor() {
    taskEditorCloseBtn.addEventListener("click", () => {
      taskEditor.style.display = "none";
      taskLauncher.style.pointerEvents = "auto";
      projectCreatorBtn.style.pointerEvents = "auto";
    });

    window.addEventListener("click", (event) => {
      if (!taskEditor.contains(event.target)) {
        taskEditor.style.display = "none";
        taskLauncher.style.pointerEvents = "auto";
        projectCreatorBtn.style.pointerEvents = "auto";
      }
    });
  }

  function createTaskTitle() {
    const title = document.getElementById("title").value;
    const taskTitle = document.createElement("div");
    taskTitle.classList.add("taskTitle");
    taskTitle.textContent = title;

    return taskTitle;
  }

  function createTaskNote() {
    const note = document.getElementById("add_note").value;
    const taskNote = document.createElement("div");
    taskNote.classList.add("taskNote");
    taskNote.textContent = note;

    return taskNote;
  }

  function createTaskDate() {
    const date = document.getElementById("date").value;
    const taskDate = document.createElement("div");
    taskDate.classList.add("taskDate");
    taskDate.textContent = date;

    return taskDate;
  }

  function createTaskPriority() {
    const priority = document.getElementById("priority").value;
    const taskPriority = document.createElement("div");
    taskPriority.classList.add("taskPriority");
    taskPriority.textContent = priority;

    return taskPriority;
  }

  function createTaskProject() {
    const project = document.getElementById("project").value;
    const taskProject = document.createElement("div");
    taskProject.classList.add("taskProject");
    taskProject.textContent = project;

    return taskProject;
  }

  function createEditIcon() {
    const editIcon = document.createElement("img");
    editIcon.classList.add("editIcon");
    editIcon.src = "../dist/icons/edit.svg";
    editIcon.alt = "Edit icon";

    return editIcon;
  }

  function createInfoIcon() {
    const infoIcon = document.createElement("img");
    infoIcon.classList.add("infoIcon");
    infoIcon.src = "../dist/icons/info.svg";
    infoIcon.alt = "Information icon";

    return infoIcon;
  }

  function createDeleteIcon() {
    const deleteIcon = document.createElement("img");
    deleteIcon.classList.add("deleteIcon");
    deleteIcon.src = "../dist/icons/delete.svg";
    deleteIcon.alt = "Delete Icon";

    return deleteIcon;
  }

  function createTaskCard(newTask) {
    taskCardCounter++;

    const taskCard = document.createElement("div");
    taskCard.classList.add("taskCard");
    taskCard.dataset.taskId = newTask.id;
    taskCard.setAttribute("data-cardCounter", `card ${taskCardCounter}`);

    const taskCheckbox = document.createElement("input");
    taskCheckbox.classList.add("taskCheckBox");
    taskCheckbox.setAttribute("type", "checkbox");

    const iconContainer = document.createElement("div");
    iconContainer.setAttribute("id", "iconContainer");

    const taskLeft = document.createElement("div");
    taskLeft.classList.add("taskLeft");

    const taskRight = document.createElement("div");
    taskRight.classList.add("taskRight");

    iconContainer.appendChild(createEditIcon());
    iconContainer.appendChild(createInfoIcon());
    iconContainer.appendChild(createDeleteIcon());

    taskLeft.appendChild(taskCheckbox);
    taskLeft.appendChild(createTaskTitle());

    taskRight.appendChild(createTaskDate());
    taskRight.appendChild(iconContainer);

    taskCard.appendChild(taskLeft);
    taskCard.appendChild(taskRight);

    return taskCard;
  }

  function createTaskDetailsCard(newTask) {
    const title = document.getElementById("title").value;
    const note = document.getElementById("add_note").value;
    const date = document.getElementById("date").value;
    const priority = document.getElementById("priority").value;
    const project = document.getElementById("project").value;

    const taskCardDetailsContainer = document.createElement("div");
    taskCardDetailsContainer.classList.add("taskCardDetailsContainer");
    taskCardDetailsContainer.dataset.taskId = newTask.id;
    taskCardDetailsContainer.style.display = "none";

    const closeTaskDetailsBtn = document.createElement("button");
    closeTaskDetailsBtn.classList.add("closeTaskDetailsBtn");
    closeTaskDetailsBtn.textContent = "Close";

    const taskCardDetails = document.createElement("div");
    taskCardDetails.classList.add("taskCardDetails");

    const taskDetailsTop = document.createElement("div");
    taskDetailsTop.classList.add("taskDetailsTop");

    const taskDetailsBottom = document.createElement("div");
    taskDetailsBottom.classList.add("taskDetailsBottom");

    const titleDetails = document.createElement("div");
    titleDetails.classList.add("titleDetails");
    titleDetails.textContent = `Title: ${title}`;

    const noteDetails = document.createElement("div");
    noteDetails.classList.add("noteDetails");
    noteDetails.textContent = `Note: ${note}`;

    const dateDetails = document.createElement("div");
    dateDetails.classList.add("dateDetails");
    dateDetails.textContent = `Date: ${date}`;

    const priorityDetails = document.createElement("div");
    priorityDetails.classList.add("priorityDetails");
    priorityDetails.textContent = `Priority: ${priority}`;

    const projectDetails = document.createElement("div");
    projectDetails.classList.add("projectDetails");
    projectDetails.textContent = `Project: ${project}`;

    taskDetailsTop.appendChild(titleDetails);
    taskDetailsTop.appendChild(dateDetails);
    taskDetailsTop.appendChild(priorityDetails);

    taskDetailsBottom.appendChild(noteDetails);
    taskDetailsBottom.appendChild(projectDetails);

    taskCardDetails.appendChild(taskDetailsTop);
    taskCardDetails.appendChild(taskDetailsBottom);
    taskCardDetails.appendChild(closeTaskDetailsBtn);

    taskCardDetailsContainer.appendChild(taskCardDetails);

    return taskCardDetailsContainer;
  }

  function openTaskDetails() {
    const infoIcons = document.querySelectorAll(".infoIcon");
    infoIcons.forEach((infoIcon) => {
      infoIcon.addEventListener("click", (event) => {
        const taskCardDetailsContainer =
          event.target.closest(".taskCard").nextElementSibling;
        taskCardDetailsContainer.style.display = "block";
        console.log("Task Details Opened");
      });
    });
  }

  function closeTaskDetails() {
    const closeTaskDetailsBtns = document.querySelectorAll(
      ".closeTaskDetailsBtn"
    );
    closeTaskDetailsBtns.forEach((closeTaskDetailsBtn) => {
      closeTaskDetailsBtn.addEventListener("click", () => {
        const taskCardDetailsContainer = closeTaskDetailsBtn.closest(
          ".taskCardDetailsContainer"
        );
        taskCardDetailsContainer.style.display = "none";
        console.log("task details closed");
      });
    });
  }

  function deleteTask() {
    const deleteIcons = document.querySelectorAll(".deleteIcon");

    deleteIcons.forEach((deleteIcon) => {
      deleteIcon.addEventListener("click", (event) => {
        const display = document.getElementById("content");
        const taskCard = event.target.closest(".taskCard");
        const taskCardDetailsContainer =
          event.target.closest(".taskCard").nextElementSibling;

        if (taskCard && taskCardDetailsContainer) {
          const taskId = taskCard.dataset.taskId;
          const taskIndex = tasks.findIndex(
            (newTask) => newTask.id === parseInt(taskId)
          );

          if (taskIndex !== -1) {
            tasks.splice(taskIndex, 1);
          }

          display.removeChild(taskCard);
          display.removeChild(taskCardDetailsContainer);

          console.log(tasks);
          console.log("This task was deleted");
        }
      });
    });
  }

  function populateEditForm(taskId) {
    const editTitle = document.getElementById("edit_title");
    const editNote = document.getElementById("edit_note");
    const editDate = document.getElementById("edit_date");
    const editPriority = document.getElementById("edit_priority");
    const editProject = document.getElementById("edit_project");

    const taskToUpdate = tasks.find(
      (newTask) => newTask.id === parseInt(taskId)
    );

    if (taskToUpdate) {
      editTitle.value = `${taskToUpdate.title}`;
      editNote.value = `${taskToUpdate.note}`;
      editDate.value = `${taskToUpdate.date}`;
      editPriority.value = `${taskToUpdate.priority}`;
      editProject.value = `${taskToUpdate.project}`;
    } else {
      console.error("Task not found");
    }
  }

  function updateTaskCard(taskId, newTaskData) {
    const taskCard = document.querySelector(
      `.taskCard[data-task-id="${taskId}"]`
    );

    if (taskCard) {
      taskCard.querySelector(".taskTitle").textContent = newTaskData.title;
      taskCard.querySelector(".taskDate").textContent = newTaskData.date;
    }
  }

  function updateTaskDetailsCard(taskId, newTaskData) {
    const taskCardDetailsContainer = document.querySelector(
      `.taskCardDetailsContainer[data-task-id="${taskId}"]`
    );

    if (taskCardDetailsContainer) {
      taskCardDetailsContainer.querySelector(
        ".taskDetailsTop .titleDetails"
      ).textContent = `Title: ${newTaskData.title}`;
      taskCardDetailsContainer.querySelector(
        ".taskDetailsTop .dateDetails"
      ).textContent = `Date: ${newTaskData.date}`;
      taskCardDetailsContainer.querySelector(
        ".taskDetailsTop .priorityDetails"
      ).textContent = `Priority: ${newTaskData.priority}`;
      taskCardDetailsContainer.querySelector(
        ".taskDetailsBottom .noteDetails"
      ).textContent = `Note: ${newTaskData.note}`;
      taskCardDetailsContainer.querySelector(
        ".taskDetailsBottom .projectDetails"
      ).textContent = `Project: ${newTaskData.project}`;
    }
  }

  function editTask() {
    const editTitle = document.getElementById("edit_title");
    const editNote = document.getElementById("edit_note");
    const editDate = document.getElementById("edit_date");
    const editPriority = document.getElementById("edit_priority");
    const editProject = document.getElementById("edit_project");

    editForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const taskCard = document.querySelector(
        `[data-cardCounter="card ${taskCardCounter}"]`
      );
      const taskId = taskCard.dataset.taskId;
      const taskToUpdate = tasks.find(
        (newTask) => newTask.id === parseInt(taskId)
      );

      if (taskToUpdate) {
        taskToUpdate.title = editTitle.value;
        taskToUpdate.note = editNote.value;
        taskToUpdate.date = editDate.value;
        taskToUpdate.priority = editPriority.value;
        taskToUpdate.project = editProject.value;

        updateTaskCard(taskId, taskToUpdate);
        updateTaskDetailsCard(taskId, taskToUpdate);

        console.log(tasks);
        taskEditor.style.display = "none";
      } else {
        console.error("Task not found");
      }
    });
  }

  function displayTask() {
    taskForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const id = tasks.length;
      const title = document.getElementById("title").value;
      const note = document.getElementById("add_note").value;
      const date = document.getElementById("date").value;
      const priority = document.getElementById("priority").value;
      const project = document.getElementById("project").value;

      let newTask = handleTodoLogic().taskFactory(
        id,
        title,
        note,
        date,
        priority,
        project
      );

      tasks.push(newTask);
      console.log(tasks);

      display.appendChild(createTaskCard(newTask));
      display.appendChild(createTaskDetailsCard(newTask));

      // taskForm.reset();

      openTaskDetails();
      closeTaskDetails();
      deleteTask();
      launchTaskEditor();
      closeTaskEditor();
      editTask();

      taskCreator.style.display = "none";
      projectCreatorBtn.style.pointerEvents = "auto";
    });
  }

  return {
    launchTaskCreator,
    closeTaskCreator,
    launchProjectCreator,
    closeProjectCreator,
    displayTask,
  };
}

export default handleDomManipulation;
