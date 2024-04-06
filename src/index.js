import handleDom from "./dom.js";
import handleTask from "./task.js";

function runTodo() {
  const task = handleTask();
  const dom = handleDom();

  task.displayTask();
  task.createProject();

  task.allTasksDisplayControl();
  task.todayTasksDisplayControl();
  dom.launchTaskCreator();
  dom.closeTaskCreator();
  dom.launchProjectCreator();
  dom.closeProjectCreator();
}

runTodo();
