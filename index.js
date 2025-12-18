const fs=require('fs');
const path=require('path');
const filepath=path.join(__dirname,'task.json');
function readTasks(){
    JSON.parse(fs.readFileSync(filepath,'utf-8'));
}
function writeTasks(tasks){
    JSON.parse(fs.writeFileSync(filepath,JSON.stringify(tasks,null,2)));
}
const arg=process.argv.slice(2);
const cmd=arg[0];

function addTask(title){
    if(!title){
        console.log("Title is compulsory");
        return;
    }
    const tasks=readTasks();
    const task={
        id:tasks.length+1,
        title,
        status:'todo',
        createdAt:new Date().toString(),
        UpdatedAt:new Date().toString()
    };
    tasks.push(task);
    writeTasks(tasks);
    console.log("Task added successfully");
}
function listTask(){
    const tasks=readTasks();
    if(tasks.length===0){
        console.log("There are no tasks");
        return;
    }
    tasks.forEach(t=>
        console.log(`[${t.id}] ${t.title}--${t.status}--created on ${t.createdAt}--updated on ${t.UpdatedAt}`)
    );
}
function updateTask(id,newTitle){
    const tasks=readTasks();
    const task=tasks.find(t=>t.id===Number(id));
    if(!task){
        console.log("Task not found");
        return;
    }
    task.title=newTitle;
    tasks.push(task);
    writeTasks(tasks);
    console.log("task updated successfully");
}