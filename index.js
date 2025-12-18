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
        createdOn:new Date().toString()
    };
    tasks.push(task);
    writeTasks(tasks);
    console.log("Task added successfully");
}
