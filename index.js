const fs=require('fs');
const path=require('path');
const filepath=path.join(__dirname,'task.json');
function readTasks(){
    JSON.parse(fs.readFileSync(filepath,'utf-8'));
}
function writeTasks(tasks){
    JSON.parse(fs.writeFileSync(filepath,JSON.stringify(tasks,null,2)));
}