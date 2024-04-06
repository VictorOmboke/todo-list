import handleFactory from "./factory.js";
import handleInfo from "./info.js";
import handleDelete from "./delete.js";
import handleDom from "./dom.js";

import { isToday, format } from "date-fns";

function handleTask() {
  const tasks = [];

  let currentEditingTaskId;

  let projectNames = [];

  const pageTitle = document.getElementById("pageTitle");
  const allTasksBtn = document.getElementById("allTasksBtn");
  const allTasksDisplayContainer = document.querySelector(
    ".allTasksDisplayContainer"
  );
  const allTasksDisplay = document.getElementById("allTasksDisplay");
  const todayBtn = document.getElementById("todayBtn");
  const todayDisplayContainer = document.querySelector(
    ".todayDisplayContainer"
  );
  const todayDisplay = document.getElementById("todayDisplay");
  const projectDisplayContainer = document.querySelector(
    ".projectDisplayContainer"
  );
  const projectDisplay = document.getElementById("projectDisplay");
  const taskCreator = document.getElementById("taskCreator");
  const taskForm = document.getElementById("taskForm");
  const projectCreatorBtn = document.querySelector(".createProjectBtn");
  const projectForm = document.getElementById("projectForm");
  const projectFormContainer = document.getElementById("projectCreator");
  const projectMenu = document.getElementById("projectMenu");
  const projectSelect = document.getElementById("project");
  const projectCreator = document.getElementById("projectCreator");
  const taskEditor = document.getElementById("taskEditor");
  const editForm = document.getElementById("editForm");
  const taskEditorCloseBtn = document.querySelector(".editClose");
  const taskLauncher = document.querySelector(".taskLauncher");

  function allTasksDisplayControl() {
    allTasksBtn.addEventListener("click", () => {
      allTasksDisplayContainer.style.display = "block";
      todayDisplayContainer.style.display = "none";
      projectDisplayContainer.style.display = "none";
      pageTitle.textContent = "All Tasks";
    });
  }

  function todayTasksDisplayControl() {
    todayBtn.addEventListener("click", () => {
      todayDisplayContainer.style.display = "block";
      allTasksDisplayContainer.style.display = "none";
      projectDisplayContainer.style.display = "none";
      pageTitle.textContent = "Today";
    });
  }

  //Project functions
  function replaceSpaces(str) {
    return str.replace(" ", "-");
  }

  function handleProjectBtnClick() {
    const projectBtns = document.querySelectorAll(".projectBtn");

    projectBtns.forEach((projectBtn) => {
      projectBtn.addEventListener("click", (event) => {
        const projectName = event.target.textContent;

        const taskCards = projectDisplay.querySelectorAll(".taskCardContainer");

        taskCards.forEach((taskCard) => {
          const taskId = taskCard.dataset.taskId;
          const task = tasks.find((task) => task.id === parseInt(taskId));
          if (task && task.project === projectName) {
            taskCard.style.display = "block";
          } else {
            taskCard.style.display = "none";
          }
        });

        pageTitle.textContent = projectName;
        projectDisplayContainer.style.display = "block";
        allTasksDisplayContainer.style.display = "none";
        todayDisplayContainer.style.display = "none";
      });
    });
  }

  function createProject() {
    projectForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const projectNameInput = document.getElementById("name");
      const projectName = projectNameInput.value;

      projectNames.push(projectName);

      const newProject = projectNames.slice(-1)[0];

      const updatedNewProject = replaceSpaces(newProject).toLowerCase();

      const projectBtn = document.createElement("button");
      projectBtn.id = `${updatedNewProject}`;
      projectBtn.classList.add("projectBtn");
      projectBtn.textContent = newProject;
      projectMenu.appendChild(projectBtn);

      const projectOption = document.createElement("option");
      projectOption.text = newProject;
      projectSelect.add(projectOption);

      projectForm.reset();
      handleProjectBtnClick();

      projectFormContainer.style.display = "none";
      taskLauncher.style.pointerEvents = "auto";
    });
  }

  //Editing functions
  function launchTaskEditor() {
    const editIcons = document.querySelectorAll(".editIcon");

    editIcons.forEach((editIcon) => {
      editIcon.addEventListener("click", (event) => {
        event.stopPropagation();

        const taskCardContainer = event.target.closest(".taskCardContainer");
        currentEditingTaskId = taskCardContainer.dataset.taskId;

        populateEditForm(currentEditingTaskId);

        taskCreator.style.display = "none";
        projectCreator.style.display = "none";

        taskEditor.style.display = "block";

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

  function populateEditForm(currentEditingTaskId) {
    const editTitle = document.getElementById("edit_title");
    const editNote = document.getElementById("edit_note");
    const editDate = document.getElementById("edit_date");
    const editPriority = document.getElementById("edit_priority");

    const taskToUpdate = tasks.find(
      (newTask) => newTask.id === parseInt(currentEditingTaskId)
    );

    if (taskToUpdate) {
      editTitle.value = `${taskToUpdate.title}`;
      editNote.value = `${taskToUpdate.note}`;
      editDate.value = `${taskToUpdate.date}`;
      editPriority.value = `${taskToUpdate.priority}`;
    }
  }

  function updateTaskCard(taskId, newTaskData, display) {
    const taskCard = display.querySelector(
      `.taskCardContainer[data-task-id="${taskId}"]`
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
    }
  }

  function updateTaskPriority(taskId, newPriority, display) {
    const taskCardContainer = display.querySelector(
      `.taskCardContainer[data-task-id="${taskId}"]`
    );

    if (taskCardContainer) {
      let borderColor;
      switch (newPriority) {
        case "low":
          borderColor = "green";
          break;
        case "medium":
          borderColor = "orange";
          break;
        case "high":
          borderColor = "red";
          break;
        default:
          borderColor = "white";
      }
      taskCardContainer.style.border = `3px solid ${borderColor}`;
    }
  }

  function removeTaskFromDisplay(taskId, display) {
    const taskCardContainer = display.querySelector(
      `.taskCardContainer[data-task-id="${taskId}"]`
    );
    const taskCardDetailsContainer = display.querySelector(
      `.taskCardDetailsContainer[data-task-id="${taskId}"]`
    );

    if (taskCardContainer) {
      display.removeChild(taskCardContainer);
    }
    if (taskCardDetailsContainer) {
      display.removeChild(taskCardDetailsContainer);
    }
  }

  function editTask() {
    const editTitle = document.getElementById("edit_title");
    const editNote = document.getElementById("edit_note");
    const editDate = document.getElementById("edit_date");
    const editPriority = document.getElementById("edit_priority");

    editForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const taskId = currentEditingTaskId;

      let taskToUpdate = tasks.find(
        (newTask) => newTask.id === parseInt(taskId)
      );

      if (taskToUpdate) {
        const originalDate = taskToUpdate.date;

        taskToUpdate.title = editTitle.value;
        taskToUpdate.note = editNote.value;
        taskToUpdate.date = editDate.value;
        taskToUpdate.priority = editPriority.value;

        [allTasksDisplay, todayDisplay, projectDisplay].forEach((display) => {
          updateTaskCard(taskId, taskToUpdate, display);
          updateTaskDetailsCard(taskId, taskToUpdate, display);
          updateTaskPriority(taskId, taskToUpdate.priority, display);
        });

        taskEditor.style.display = "none";

        const editedTaskDate = new Date(taskToUpdate.date);
        const originalTaskDate = new Date(originalDate);
        const today = new Date();

        if (isToday(editedTaskDate) && !isToday(originalTaskDate)) {
          removeTaskFromDisplay(taskId, todayDisplay);
          todayDisplay.appendChild(handleDom().createTaskCard(taskToUpdate));
          todayDisplay.appendChild(
            handleDom().createTaskDetailsCard(taskToUpdate)
          );
          handleInfo().openTaskDetails();
          handleInfo().closeTaskDetails();
          handleDelete(tasks).deleteTask();
          launchTaskEditor();
          closeTaskEditor();
          editTask();
        } else if (!isToday(editedTaskDate) && isToday(originalTaskDate)) {
          removeTaskFromDisplay(taskId, todayDisplay);
        }
      }
    });
  }

  //display task function
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

      let newTask = handleFactory().taskFactory(
        id,
        title,
        note,
        date,
        priority,
        project
      );

      tasks.push(newTask);

      if (isToday(taskDate)) {
        todayDisplay.appendChild(handleDom().createTaskCard(newTask));
        todayDisplay.appendChild(handleDom().createTaskDetailsCard(newTask));
      }

      if (project !== "None") {
        projectDisplay.appendChild(handleDom().createTaskCard(newTask));
        projectDisplay.appendChild(handleDom().createTaskDetailsCard(newTask));
      } else {
        allTasksDisplay.appendChild(handleDom().createTaskCard(newTask));
        allTasksDisplay.appendChild(handleDom().createTaskDetailsCard(newTask));
      }

      handleInfo().openTaskDetails();
      handleInfo().closeTaskDetails();
      handleDelete(tasks).deleteTask();
      launchTaskEditor();
      closeTaskEditor();
      editTask();

      taskCreator.style.display = "none";
      projectCreatorBtn.style.pointerEvents = "auto";
    });
  }

  return {
    displayTask,
    allTasksDisplayControl,
    todayTasksDisplayControl,
    createProject,
  };
}

export default handleTask;
