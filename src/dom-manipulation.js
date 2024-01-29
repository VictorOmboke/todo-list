import handleTodoLogic from "./todo-logic.js";

function handleDomManipulation() {
  function launchTaskCreator() {
    const taskLauncher = document.querySelector(".taskLauncher");
    const taskCreator = document.getElementById("taskCreator");
    const projectCreatorBtn = document.querySelector(".createProjectBtn");

    taskLauncher.addEventListener("click", (e) => {
      e.stopPropagation();
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

    window.addEventListener("click", (e) => {
      if (!taskCreator.contains(e.target)) {
        taskCreator.style.display = "none";
        projectCreatorBtn.style.pointerEvents = "auto";
      }
    });
  }

  function launchProjectCreator() {
    const projectCreator = document.getElementById("projectCreator");
    const projectCreatorBtn = document.querySelector(".createProjectBtn");
    const taskLauncher = document.querySelector(".taskLauncher");

    projectCreatorBtn.addEventListener("click", (e) => {
      e.stopPropagation();
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

    window.addEventListener("click", (e) => {
      if (!projectCreator.contains(e.target)) {
        projectCreator.style.display = "none";
        taskLauncher.style.pointerEvents = "auto";
      }
    });
  }

  function displayTask() {
    const taskForm = document.getElementById("taskForm");
    const display = document.getElementById("content");
    const taskFormContainer = document.getElementById("taskCreator");
    const projectLauncher = document.querySelector(".createProjectBtn");

    taskForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const taskCard = document.createElement("div");
      taskCard.classList.add("taskCard");

      const taskCardDetails = document.createElement("div");
      taskCardDetails.classList.add("taskCardDetails");

      const title = document.getElementById("title").value;
      const taskTitle = document.createElement("div");
      taskTitle.classList.add("taskTitle");
      taskTitle.textContent = title;
      const titleDetails = document.createElement("div");
      titleDetails.textContent = `Title: ${title}`;

      const note = document.getElementById("add_note").value;
      const taskNote = document.createElement("div");
      taskNote.classList.add("taskNote");
      taskNote.textContent = note;
      const noteDetails = document.createElement("div");
      noteDetails.textContent = `Note: ${note}`;

      const date = document.getElementById("date").value;
      const taskDate = document.createElement("div");
      taskDate.classList.add("taskDate");
      taskDate.textContent = date;
      const dateDetails = document.createElement("div");
      dateDetails.textContent = `Date: ${date}`;

      const priority = document.getElementById("priority").value;
      const taskPriority = document.createElement("div");
      taskPriority.classList.add("taskPriority");
      taskPriority.textContent = priority;
      const priorityDetails = document.createElement("div");
      priorityDetails.textContent = `Priority: ${priority}`;

      const project = document.getElementById("project").value;
      const taskProject = document.createElement("div");
      taskProject.classList.add("taskProject");
      taskProject.textContent = project;
      const projectDetails = document.createElement("div");
      projectDetails.textContent = `Project: ${project}`;

      const editIcon = document.createElement("img");
      editIcon.src = "../dist/icons/edit.svg";
      editIcon.alt = "Edit icon";

      const infoIcon = document.createElement("img");
      infoIcon.src = "../dist/icons/info.svg";
      infoIcon.alt = "Info icon";

      const deleteIcon = document.createElement("img");
      deleteIcon.src = "../dist/icons/delete.svg";
      deleteIcon.alt = "Delete icon";

      let newTask = handleTodoLogic().taskFactory(
        title,
        note,
        date,
        priority,
        project
      );
      console.log(newTask);

      taskCard.appendChild(taskTitle);
      taskCard.appendChild(taskDate);
      taskCard.appendChild(editIcon);
      taskCard.appendChild(infoIcon);
      taskCard.appendChild(deleteIcon);

      taskCardDetails.appendChild(titleDetails);
      taskCardDetails.append(noteDetails);
      taskCardDetails.append(dateDetails);
      taskCardDetails.appendChild(priorityDetails);
      taskCardDetails.append(projectDetails);

      display.appendChild(taskCard);
      display.appendChild(taskCardDetails);

      taskForm.reset();

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
