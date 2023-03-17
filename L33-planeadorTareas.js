let log = console.log
log('\n\n\n-----------------------\n--------------------------\n\n\n')

function createTaskPlanner() {
  let tasks = [];
  return {
    addTask(task) {
      tasks.push({ ...task, completed: false });
    },
    removeTask(val) {
      tasks = tasks.filter((t) => t.id != val || t.name != val);
    },
    getTasks() {
      return tasks;
    },
    getPendingTasks() {
      return tasks.filter((t) => t.completed == false);
    },
    getCompletedTasks() {
      return tasks.filter((t) => t.completed == true);
    },
    markTaskAsCompleted(val) {
      tasks.find((t) => t.id == val || t.name == val).completed = true;
    },
    getSortedTasksByPriority() {
      return tasks.sort((a, b) => {a.priority - b.priority});
    },
    filterTasksByTag(val){
      return tasks.filter(t=>t.tags.some(tg=>tg == val));
    },
    updateTask(taskId,updates){
        let task = tasks.find(t=>t.id == taskId)
        for(let prop in updates){
            task[prop] = updates.prop
        }
    }
  };
}

// test mocks

let planner = createTaskPlanner();

planner.addTask({
  id: 1,
  name: "Comprar leche",
  priority: 1,
  tags: ["shopping", "home"],
});

planner.addTask({
  id: 2,
  name: "Llamar a Juan",
  priority: 3,
  tags: ["personal"],
});

planner.addTask({
    id: 3,
    name: "Task 3",
    priority: 2,
    tags: ["tag1", "tag2"],
});

planner.addTask({
    id: 4,
    name: "Task 4",
    priority: 1,
    tags: ["tag4a", "tag4b","tag4c"],
});

planner.addTask({
    id: 5,
    name: "Task 5",
    priority: 2,
    tags: ["tag5a"],
});

planner.addTask({
    id: 6,
    name: "Task 6",
    priority: 1,
    tags: ["tag6a","tag6b"],
});


planner.removeTask(5);
let ans1 = planner.getPendingTasks();
log('1\n',ans1)
planner.markTaskAsCompleted("Llamar a Juan");
let ans2 = planner.getCompletedTasks();
let ans3 = planner.getPendingTasks();
log('3\n',ans3)
let ans4 = planner.getSortedTasksByPriority();
log('4\n',ans4)
let ans5 = planner.filterTasksByTag("shopping");
planner.updateTask(6,{name:'6 change',tags:['tag6a','tag6b','tag6c']})
let ans6 = planner.getTasks()
log('6\n',ans6)


