import handleDomManipulation from "./dom-manipulation.js";
import handleTodoLogic from "./todo-logic.js";

const domManipulation = handleDomManipulation();
const todoLogic = handleTodoLogic();

domManipulation.launchProjectCreator();
domManipulation.launchTaskCreator();
domManipulation.closeProjectCreator();
domManipulation.closeTaskCreator();
domManipulation.displayTask();
domManipulation.allTasksDisplayControl();
domManipulation.todayTasksDisplayControl();

todoLogic.createProject();
