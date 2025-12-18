const fs=require('fs');
const path=require('path');
const filepath=path.join(__dirname,'task.json');
function readTasks(){
    return JSON.parse(fs.readFileSync(filepath,'utf-8'));
}
function writeTasks(tasks){
    return fs.writeFileSync(filepath,JSON.stringify(tasks,null,2));
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
    task.UpdatedAt = new Date().toString();
    writeTasks(tasks);
    console.log("task updated successfully");
}
function deleteTask(id){
    const tasks=readTasks();
    const task=tasks.find(t=> t.id===Number(id));
    if(!task){
        console.log("Task not found");
        return;
    }
    const updatedTasks = tasks.filter(t=> t.id!==Number(id));
    writeTasks(updatedTasks);
    console.log("task deleted successfully");
}
function markTask(id,status){
    const tasks=readTasks();
    const task=tasks.find(t=> t.id===Number(id));
    if(!task){
        console.log("Task not found");
        return;
    }
    task.status=status;
    task.UpdatedAt = new Date().toString();
    writeTasks(tasks);
    console.log(`task marked as ${status}`);
}

switch(cmd){
    case 'add':
        addTask(arg.slice(1).join(' '));
        break;
    case 'update':
        updateTask(arg[1],arg.slice(2).join(' '));
        break;
    case 'delete':
        deleteTask(arg[1]);
        break;
    case 'mark-done':
        markTask(arg[1],'done');
        break;
    case 'mark-in-progress':
        markTask(arg[1],'in-progress');
        break;
    case 'list':
        listTask();
        break;
    default:
        console.log(`
            Available commands:
            add "task name"
            list
            update <id> "new name"
            mark-in-progress <id>
            mark-done <id>
            delete <id>    
        `);

}