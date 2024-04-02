import inquirer from "inquirer";

let todos : string[] = ["Rahul","Alex"];

async function createTodo(todos:string[]){
    do{
        let ans = await inquirer.prompt({
            type: "list",
            name: "select",
            message: "select an operation",
            choices: ["Add", "Update","View","Delete",],
                
        })
        if (ans.select == "Add") {
            let addTodo = await inquirer.prompt({
                type: "input",
                name: "todo",
                message: "Add items in this list",
            });
            todos.push(addTodo.todo);
           todos.forEach(todo => console.log(todo));
        }
        if (ans.select == "Update") {
            let updateTodo = await inquirer.prompt({
                type: "list",
                name: "todo",
                message: "Update items in this list",
                choices: todos.map(item => item)
            });
            let addTodo = await inquirer.prompt({
                type: "input",
                name: "todo",
                message: "Add items in this list",
            });
            let newTodo = todos.filter(val => val !== updateTodo.todo);
            todos = [...newTodo,addTodo.todo];
            todos.forEach(todo => console.log(todo));
        }
        if (ans.select == "View") {
            console.log("*** To Do List ***");
            console.log(todos);
            console.log("*******************");
            todos.forEach(todo => console.log(todo));
        }
        if (ans.select == "Delete") {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                name: "todo",
                message: "Update items in this list",
                choices: todos.map(item => item)
            });
            let newTodo = todos.filter(val => val !== deleteTodo.todo);
            todos = [...newTodo];
            todos.forEach(todo => console.log(todo));
        }
        
    }while(true)
  
}

createTodo(todos)