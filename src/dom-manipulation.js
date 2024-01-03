function handleDomManipulation() {
  function launchTaskCreator() {
    const taskLauncher = document.querySelector(".taskLauncher");
    const taskCreator = document.getElementById("taskCreator");

    taskLauncher.addEventListener("click", (e) => {
      e.stopPropagation();
      taskCreator.style.display = "block";
    });
  }

  function closeTaskCreator() {
    const taskCreator = document.getElementById("taskCreator");
    const taskCreatorCloseBtn = document.querySelector(".taskClose");

    taskCreatorCloseBtn.addEventListener("click", () => {
      taskCreator.style.display = "none";
    });

    window.addEventListener("click", (e) => {
      if (!taskCreator.contains(e.target)) {
        taskCreator.style.display = "none";
      }
    });
  }

  function launchProjectCreator() {
    const projectCreator = document.getElementById("projectCreator");
    const projectCreatorBtn = document.querySelector(".createProjectBtn");

    projectCreatorBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      projectCreator.style.display = "block";
    });
  }

  function closeProjectCreator() {
    const projectCreator = document.getElementById("projectCreator");
    const projectCreatorCloseBtn = document.querySelector(".projectClose");

    projectCreatorCloseBtn.addEventListener("click", () => {
      projectCreator.style.display = "none";
    });

    window.addEventListener("click", (e) => {
      if (!projectCreator.contains(e.target)) {
        projectCreator.style.display = "none";
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
