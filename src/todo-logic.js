function handleTodoLogic() {
  function getProjectName() {
    const projectForm = document.getElementById("projectForm");
    const projectDisplay = document.getElementById("projectDisplay");
    const projectSelect = document.getElementById("project");
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

      projectNameInput.value = "";
    });
  }

  return { getProjectName };
}

export default handleTodoLogic;
