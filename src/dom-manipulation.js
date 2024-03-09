import handleTodoLogic from "./todo-logic.js";
import { parseISO, isToday, startOfWeek, endOfWeek, format } from "date-fns";

function handleDomManipulation() {
  const tasks = [];

  let taskCardCounter = 0;

  const pageTitle = document.getElementById("pageTitle");
  const allTasksBtn = document.getElementById("allTasksBtn");
  const allTasksDisplay = document.getElementById("allTasksDisplay");
  const todayBtn = document.getElementById("todayBtn");
  const todayDisplay = document.getElementById("todayDisplay");
  const thisWeekBtn = document.getElementById("thisWeekBtn");
  const thisWeekDisplay = document.getElementById("thisWeekDisplay");

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

  // function createTaskNote() {
  //   const note = document.getElementById("add_note").value;
  //   const taskNote = document.createElement("div");
  //   taskNote.classList.add("taskNote");
  //   taskNote.textContent = note;

  //   return taskNote;
  // }

  function createTaskDate() {
    const date = document.getElementById("date").value;
    const formattedDate = format(new Date(date), "MMMM dd, yyyy - hh:mm a");
    const taskDate = document.createElement("div");
    taskDate.classList.add("taskDate");
    taskDate.textContent = formattedDate;

    return taskDate;
  }

  // function createTaskPriority() {
  //   const priority = document.getElementById("priority").value;
  //   const taskPriority = document.createElement("div");
  //   taskPriority.classList.add("taskPriority");
  //   taskPriority.textContent = priority;

  //   return taskPriority;
  // }

  // function createTaskProject() {
  //   const project = document.getElementById("project").value;
  //   const taskProject = document.createElement("div");
  //   taskProject.classList.add("taskProject");
  //   taskProject.textContent = project;

  //   return taskProject;
  // }

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
    const formattedDate = format(new Date(date), "MMMM dd, yyyy - hh:mm a");
    dateDetails.classList.add("dateDetails");
    dateDetails.textContent = `Date: ${formattedDate}`;

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
    const allDisplays = [allTasksDisplay, todayDisplay, thisWeekDisplay];

    deleteIcons.forEach((deleteIcon) => {
      deleteIcon.addEventListener("click", () => {
        let taskId;
        allDisplays.forEach((display) => {
          taskId = deleteIcon.closest(".taskCard").dataset.taskId;
          const taskCard = display.querySelector(
            `.taskCard[data-task-id='${taskId}']`
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
          console.log("This task was deleted");
          console.log(tasks);
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

  function updateTaskCard(taskId, newTaskData, display) {
    const taskCard = display.querySelector(
      `.taskCard[data-task-id="${taskId}"]`
    );

    if (taskCard) {
      taskCard.querySelector(".taskTitle").textContent = newTaskData.title;
      const formattedDate = format(
        new Date(newTaskData.date),
        "MMMM dd, yyyy - hh:mm a"
      );
      taskCard.querySelector(".taskDate").textContent = formattedDate;
    }
  }

  function updateTaskDetailsCard(taskId, newTaskData, display) {
    const taskCardDetailsContainer = display.querySelector(
      `.taskCardDetailsContainer[data-task-id="${taskId}"]`
    );

    if (taskCardDetailsContainer) {
      taskCardDetailsContainer.querySelector(
        ".taskDetailsTop .titleDetails"
      ).textContent = `Title: ${newTaskData.title}`;

      const formattedDate = format(
        new Date(newTaskData.date),
        "MMMM dd, yyyy - hh:mm a"
      );
      taskCardDetailsContainer.querySelector(
        ".taskDetailsTop .dateDetails"
      ).textContent = `Date: ${formattedDate}`;

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

        [allTasksDisplay, todayDisplay, thisWeekDisplay].forEach((display) => {
          updateTaskCard(taskId, taskToUpdate, display);
          updateTaskDetailsCard(taskId, taskToUpdate, display);
        });

        console.log(tasks);
        taskEditor.style.display = "none";
      } else {
        console.error("Task not found");
      }
    });
  }

  function allTasksDisplayControl() {
    allTasksBtn.addEventListener("click", () => {
      allTasksDisplay.style.display = "block";
      todayDisplay.style.display = "none";
      thisWeekDisplay.style.display = "none";
      pageTitle.textContent = "All Tasks";
    });
  }

  function todayTasksDisplayControl() {
    todayBtn.addEventListener("click", () => {
      todayDisplay.style.display = "block";
      allTasksDisplay.style.display = "none";
      thisWeekDisplay.style.display = "none";
      pageTitle.textContent = "Today";
    });
  }

  function thisWeekDIsplayControl() {
    thisWeekBtn.addEventListener("click", () => {
      thisWeekDisplay.style.display = "block";
      allTasksDisplay.style.display = "none";
      todayDisplay.style.display = "none";
      pageTitle.textContent = "This Week";
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

      const taskDate = new Date(date);
      const today = new Date();
      const startOfWeekDate = startOfWeek(today);
      const endOfWeekDate = endOfWeek(today);

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

      if (isToday(taskDate)) {
        todayDisplay.appendChild(createTaskCard(newTask));
        todayDisplay.appendChild(createTaskDetailsCard(newTask));
      } else if (taskDate >= startOfWeekDate && taskDate <= endOfWeekDate) {
        thisWeekDisplay.appendChild(createTaskCard(newTask));
        thisWeekDisplay.appendChild(createTaskDetailsCard(newTask));
      }

      allTasksDisplay.appendChild(createTaskCard(newTask));
      allTasksDisplay.appendChild(createTaskDetailsCard(newTask));

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
    allTasksDisplayControl,
    todayTasksDisplayControl,
    thisWeekDIsplayControl,
  };
}

export default handleDomManipulation;
