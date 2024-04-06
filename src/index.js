// import handleFactory from "./factory.js";
// import handleProject from "./project.js";
// import handleEdit from "./edit.js";
// import handleDelete from "./delete.js";
// import handleInfo from "./info.js";
import handleDom from "./dom.js";
import handleTask from "./task.js";

function runTodo() {
  const task = handleTask();
  const dom = handleDom();
  //   const info = handleInfo();
  //   const taskDelete = handleDelete();
  //   const edit = handleEdit();
  //   const project = handleProject();
  //   const factory = handleFactory();

  task.displayTask();
  task.createProject();
  task.allTasksDisplayControl();
  task.todayTasksDisplayControl();
  dom.launchTaskCreator();
  dom.closeTaskCreator();
  dom.launchProjectCreator();
  dom.closeProjectCreator();
  //   project.createProject();
}

runTodo();

// domManipulation.launchProjectCreator();
// domManipulation.launchTaskCreator();
// domManipulation.closeProjectCreator();
// domManipulation.closeTaskCreator();
// domManipulation.displayTask();
// domManipulation.allTasksDisplayControl();
// domManipulation.todayTasksDisplayControl();
// domManipulation.createProject();
