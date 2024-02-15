import handleTodoLogic from "./todo-logic.js";

function handleDomManipulation() {
  function launchTaskCreator() {
    const taskLauncher = document.querySelector(".taskLauncher");
    const taskCreator = document.getElementById("taskCreator");
    const projectCreatorBtn = document.querySelector(".createProjectBtn");

    taskLauncher.addEventListener("click", (event) => {
      event.stopPropagation();
      taskCreator.style.display = "block";
      projectCreatorBtn.style.pointerEvents = "none";
    });
  }

  function closeTaskCreator() {
    const taskCreator = document.getElementById("taskCreator");
    const taskCreatorCloseBtn = document.querySelector(".taskClose");
    const projectCreatorBtn = document.querySelector(".createProjectBtn");

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
    const projectCreator = document.getElementById("projectCreator");
    const projectCreatorBtn = document.querySelector(".createProjectBtn");
    const taskLauncher = document.querySelector(".taskLauncher");

    projectCreatorBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      projectCreator.style.display = "block";
      taskLauncher.style.pointerEvents = "none";
    });
  }

  function closeProjectCreator() {
    const projectCreator = document.getElementById("projectCreator");
    const projectCreatorCloseBtn = document.querySelector(".projectClose");
    const taskLauncher = document.querySelector(".taskLauncher");

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

  function createTaskCard() {
    const taskCard = document.createElement("div");
    taskCard.classList.add("taskCard");

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

  function createTaskDetailsCard() {
    const title = document.getElementById("title").value;
    const note = document.getElementById("add_note").value;
    const date = document.getElementById("date").value;
    const priority = document.getElementById("priority").value;
    const project = document.getElementById("project").value;

    const taskCardDetailsContainer = document.createElement("div");
    taskCardDetailsContainer.classList.add("taskCardDetailsContainer");
    taskCardDetailsContainer.style.display = "none";

    const closeTaskDetailsBtn = document.createElement("button");
    closeTaskDetailsBtn.classList.add("closeTaskDetailsBtn");
    closeTaskDetailsBtn.textContent = "Close";

    const taskCardDetails = document.createElement("div");
    taskCardDetails.classList.add("taskCardDetails");

    const taskDetailsLeft = document.createElement("div");
    taskDetailsLeft.classList.add("taskDetailsLeft");

    const taskDetailsRight = document.createElement("div");
    taskDetailsRight.classList.add("taskDetailsRight");

    const titleDetails = document.createElement("div");
    titleDetails.textContent = `Title: ${title}`;

    const noteDetails = document.createElement("div");
    noteDetails.textContent = `Note: ${note}`;

    const dateDetails = document.createElement("div");
    dateDetails.textContent = `Date: ${date}`;

    const priorityDetails = document.createElement("div");
    priorityDetails.textContent = `Priority: ${priority}`;

    const projectDetails = document.createElement("div");
    projectDetails.textContent = `Project: ${project}`;

    taskDetailsLeft.appendChild(titleDetails);
    taskDetailsLeft.appendChild(dateDetails);
    taskDetailsLeft.appendChild(priorityDetails);

    taskDetailsRight.appendChild(noteDetails);
    taskDetailsRight.appendChild(projectDetails);

    taskCardDetails.appendChild(taskDetailsLeft);
    taskCardDetails.appendChild(taskDetailsRight);
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
          display.removeChild(taskCard);
          display.removeChild(taskCardDetailsContainer);

          console.log("This task was deleted");
        }
      });
    });
  }

  function displayTask() {
    const taskForm = document.getElementById("taskForm");
    const display = document.getElementById("content");
    const taskFormContainer = document.getElementById("taskCreator");
    const projectLauncher = document.querySelector(".createProjectBtn");

    taskForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const title = document.getElementById("title").value;
      const note = document.getElementById("add_note").value;
      const date = document.getElementById("date").value;
      const priority = document.getElementById("priority").value;
      const project = document.getElementById("project").value;

      let newTask = handleTodoLogic().taskFactory(
        title,
        note,
        date,
        priority,
        project
      );
      console.log(newTask);

      display.appendChild(createTaskCard());
      display.appendChild(createTaskDetailsCard());

      taskForm.reset();

      openTaskDetails();
      closeTaskDetails();
      deleteTask();

      taskFormContainer.style.display = "none";
      projectLauncher.style.pointerEvents = "auto";
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
