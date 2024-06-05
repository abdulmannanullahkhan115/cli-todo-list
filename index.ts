import inquirer from 'inquirer';
let todos=[]
let condition=true;

while(condition){
let addTask=await inquirer.prompt(
[
    {
      name:'todo',
      type:"input",
      message:'eid ki kia shopping ki hai'
    },
    {
      name:'addmore',
      type:"confirm",
      message:"aur kuch likhna hai?",
      default:'false',
    }
]
   );
todos.push(addTask.todo);
condition=addTask['addmore']
console.log(todos);
  }

