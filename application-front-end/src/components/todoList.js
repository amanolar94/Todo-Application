import React, { Component } from "react";
import todoListStyles from '../styles/todoListStyles'
import { Link } from 'react-router-dom'
import Button from '../reusableComponents/button'
import '../css/main.css'
import Input from '../reusableComponents/input'
import headerStyles from '../styles/headerStyles'

export default class TodoList extends Component {

    

    constructor(props){
        super(props);
        this.state = {
            tasks : [],
            newTask: '' 
        };

        this.storeTasks = this.storeTasks.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.fetchTasks = this.fetchTasks.bind(this);
        this.taskComplete = this.taskComplete.bind(this);
        this.createTask = this.createTask.bind(this);
        this.onFieldChange = this.onFieldChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    };

    createTask(){
        if(this.state.newTask != ''){
            fetch(`http://localhost:4200/tasks/${this.state.newTask}` , {
                method: 'POST'
            }).then(res => {
                this.fetchTasks();
            }).catch(err => err);
        }
        
    }

    onSubmit(e){
        e.preventDefault();
        this.createTask();
    }

    onFieldChange(event){
        this.setState({ newTask: event.target.value });
    }

    storeTasks(result){
        
        this.setState(() => ({ tasks: result }));
        // console.log(this.state.tasks);
    }

    taskComplete(event){
        
        var obj = this.state.tasks.find(function (obj) { return obj.id === parseInt(event.target.parentNode.id); });
        fetch(`http://localhost:4200/tasks/${obj.id}/${obj.description}/${obj.completed == 0 ? '1' : '0'}` , {
            method: 'PUT'
        }).then(res => {
            this.fetchTasks();
            // console.log(res);
        }).catch(err => err);

    }

    fetchTasks(){

        fetch(
            `http://localhost:4200/tasks`
          )
            .then(response => response.json())
            .then(result => this.storeTasks(result))
            .catch(e => e);

    }

    deleteTask(event){

        // console.log(event.target.id);
        fetch(`http://localhost:4200/tasks/${event.target.id}` , {
            method: 'DELETE'
        }).then(res => {
            this.fetchTasks();
        }).catch(err => err);

    }
    
    componentDidMount(){

        this.fetchTasks();

    }

    render(){

        return(
            <div >
            <Input 
                    placeholder='New Task'
                    // value = ''
                    onChange = {this.onFieldChange}
                    style={ new Array(headerStyles.inputField,headerStyles.useHeight,headerStyles.newTaskButton) }
                    buttonText = {'Add'}
                    onClick = { this.createTask }
                    onKeyPress={this._handleKeyPress}
                    onSubmit = {this.onSubmit}
                />
                <ul style = {{ padding: '0px' }} >
                    {this.state.tasks.map( item => (
                        <li id={item.id} key={item.id} style={todoListStyles.li} className = { item.completed == 1 ? 'completed' : 'uncompleted'  }  >
                            <span onClick = {this.taskComplete} style = {{padding:'20px 20px'}} >{item.description}</span> 
                            <Link style = {todoListStyles.edit} to={`/editTask/${item.id}`}>Edit</Link>
                            <Button buttonText = {'Delete'} id={`${item.id}`} style = {todoListStyles.removeButton} onClick={this.deleteTask}  />  
                        </li>
                        ))}
                </ul>
            </div>
        );
    };

}

