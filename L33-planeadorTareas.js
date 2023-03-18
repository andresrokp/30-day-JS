let log = console.log
log('\n\n\n-------------------------\n--------------------------\n\n\n')

function createTaskPlanner() {
  let tasks = []
  return{
    // spread el objeto entrante, agrega la key comleted y conforma el nuevo objeto
    addTask(task){tasks.push({...task, completed: false})},
    // filtra para True cuando el id o el name NO coinciden
    removeTask(val){
      tasks = tasks.filter(t=> !(val == t.id || val == t.name));
    },
    getTasks(){
      return tasks;
    },
    getPendingTasks(){
      return tasks.filter(t=> t.completed == false);
    },
    getCompletedTasks(){
      return tasks.filter(t=> t.completed == true);
    },
    // trae el elemento que tiene id o tiene name y le pone true a su 'completed'
    markTaskAsCompleted(val){
      tasks.find(t=> val == t.id || val == t.name).completed = true;
    },
    // reconstruye un arreglo desde el original y lo organiza descendentemente
    getSortedTasksByPriority(){
      return [...tasks].sort((a,b)=>a.priority - b.priority);
    },
    // filtra con True para cuando alguno (some) de los elementos en los tags de la task cumple la condición
    filterTasksByTag(tag){
      return tasks.filter(tk=> tk.tags.some(tg=>tg == tag));
    },
    // toma la task que coincide con el id. Itera sobre el objeto update y actualiza las propiedades
    updateTask(taskId, updates){
      let task = tasks.find(t=>t.id == taskId);
      for(let key in updates) task[key] = updates[key];
    },
  }
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
planner.markTaskAsCompleted(6);
let ans2 = planner.getCompletedTasks();
log('2\n',ans2)
let ans3 = planner.getPendingTasks();
log('3\n',ans3)
let ans4 = planner.getSortedTasksByPriority();
log('4\n',ans4)
let ans5 = planner.filterTasksByTag("shopping");
planner.updateTask(6,{completed:false,name:'6 change',tags:['tuRaja','tag6b','tag6c']})
let ans6 = planner.getTasks()
log('6\n',ans6)