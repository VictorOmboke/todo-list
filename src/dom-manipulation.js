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

  return {
    launchTaskCreator,
    closeTaskCreator,
    launchProjectCreator,
    closeProjectCreator,
  };
}

export default handleDomManipulation;
