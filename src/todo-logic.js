function handleTodoLogic() {
  function createProject() {
    const projectForm = document.getElementById("projectForm");
    const editForm = document.getElementById("editForm");
    const projectFormContainer = document.getElementById("projectCreator");
    const projectDisplay = document.getElementById("projectDisplay");
    const projectSelect = document.getElementById("project");
    const editProjectSelect = document.getElementById("edit_project");
    const taskLauncher = document.querySelector(".taskLauncher");

    let projectNames = [];

    projectForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const projectNameInput = document.getElementById("name");
      const projectName = projectNameInput.value;

      projectNames.push(projectName);
      console.log(`New project added: ${projectName}`);
      console.log(projectNames);

      let newProject = projectNames.slice(-1);
      console.log(newProject);

      const projectBtn = document.createElement("button");
      projectBtn.classList.add("projectBtn");
      projectBtn.textContent = newProject;
      projectDisplay.appendChild(projectBtn);

      const projectOption = document.createElement("option");
      projectOption.text = newProject;
      projectSelect.add(projectOption);

      const editProjectOption = document.createElement("option");
      editProjectOption.text = newProject;
      editProjectSelect.add(editProjectOption);

      projectForm.reset();
      projectFormContainer.style.display = "none";
      taskLauncher.style.pointerEvents = "auto";
    });
  }

  function taskFactory(id, title, note, date, priority, project) {
    return {
      id: id,
      title: title,
      note: note,
      date: date,
      priority: priority,
      project: project,
    };
  }

  return { createProject, taskFactory };
}

export default handleTodoLogic;
