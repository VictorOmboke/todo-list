import { format } from "date-fns";

function handleDom() {
  const taskCreator = document.getElementById("taskCreator");
  const taskForm = document.getElementById("taskForm");
  const projectCreator = document.getElementById("projectCreator");

  const taskLauncher = document.querySelector(".taskLauncher");
  const projectCreatorBtn = document.querySelector(".createProjectBtn");
  const taskCreatorCloseBtn = document.querySelector(".taskClose");
  const projectCreatorCloseBtn = document.querySelector(".projectClose");

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

  function createTaskTitle() {
    const title = document.getElementById("title").value;
    const taskTitle = document.createElement("div");
    taskTitle.classList.add("taskTitle");
    taskTitle.textContent = title;

    return taskTitle;
  }

  function createTaskDate() {
    const date = document.getElementById("date").value;
    const formattedDate = format(new Date(date), "MMMM dd, yyyy - hh:mm a");
    const taskDate = document.createElement("div");
    taskDate.classList.add("taskDate");
    taskDate.textContent = formattedDate;

    return taskDate;
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
    const taskCardContainer = document.createElement("div");
    taskCardContainer.classList.add("taskCardContainer");
    taskCardContainer.dataset.taskId = newTask.id;

    let borderColor;
    switch (newTask.priority) {
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

    const taskCard = document.createElement("div");
    taskCard.classList.add("taskCard");

    const iconContainer = document.createElement("div");
    iconContainer.setAttribute("id", "iconContainer");

    const taskLeft = document.createElement("div");
    taskLeft.classList.add("taskLeft");

    const taskRight = document.createElement("div");
    taskRight.classList.add("taskRight");

    iconContainer.appendChild(createEditIcon());
    iconContainer.appendChild(createInfoIcon());
    iconContainer.appendChild(createDeleteIcon());

    taskLeft.appendChild(createTaskTitle());

    taskRight.appendChild(createTaskDate());
    taskRight.appendChild(iconContainer);

    taskCard.appendChild(taskLeft);
    taskCard.appendChild(taskRight);

    taskCardContainer.appendChild(taskCard);

    return taskCardContainer;
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
  return {
    launchTaskCreator,
    closeTaskCreator,
    launchProjectCreator,
    closeProjectCreator,
    createTaskCard,
    createTaskDetailsCard,
  };
}

export default handleDom;
