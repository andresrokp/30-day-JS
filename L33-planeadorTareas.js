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
      tasks.find((t) => t.id == val || t.name == val).completed == true;
    },
    getSortedTasksByPriority() {
      return tasks.sort((a, b) => {a.priority - b.priority});
    },
    filterTasksByTag(val){
      return tasks.filter(t=>t.tags.some(tg=>tg.includes(val)));
    },
    updateTask(taskId,updates){
        let task = tasks.find(t=>t.id == taskId)
        for(let prop of updates){
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

planner.markTaskAsCompleted("Llamar a Juan");

console.log(planner.getCompletedTasks());
// [{
//     id: 2,
//     name: "Llamar a Juan",
//     completed: true,
//     priority: 3,
//     tags: ["personal"]
// }]

planner = createTaskPlanner();

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

console.log(planner.filterTasksByTag("shopping"));
// [{
//     id: 1,
//     name: "Comprar leche",
//     completed: false,
//     priority: 3,
//     tags: ["shopping", "home"]
// }]
