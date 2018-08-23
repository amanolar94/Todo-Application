var db=require('../dbconnect'); // connect to the database

// Then we have to create methods for creating, getting, updating and deleting tasks.
var Task={
 
    getEveryTask:function(callback){ // Method to get all the tasks

        return db.query("SELECT * FROM todolist",callback);
     
    },
    getTaskById:function(id,callback){ // Method to get a specific task

        return db.query("SELECT * FROM todolist WHERE id=?",[id],callback);

     },
     createTask:function(task,callback){ // Method to create a task

        return db.query("INSERT INTO todolist ( description ) VALUES ( ? )",[task.description],callback);
     },
     deleteTask:function(id,callback){ // Method to delete a task

        return db.query("DELETE FROM todolist WHERE id=?",[id],callback);

     },
     modifyTask:function(task,callback){ // Method to modify a task

        console.log(task);
        return db.query("UPDATE todolist SET description=?,completed=? WHERE id=?",[task.description,task.completed,task.id],callback);

     }
     
    };
     module.exports=Task;