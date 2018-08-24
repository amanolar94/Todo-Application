import React, { Component } from "react";
import Input from '../reusableComponents/input'
import editTaskStyles from '../styles/editTaskStyles'
import { Link } from 'react-router-dom'
import headerStyles from '../styles/headerStyles'
import { Route } from 'react-router-dom'

export default class EditTask extends Component {
    constructor(props){
        super(props);
        this.state = {
            taskId : props.match.params.number,
            description: '',
            completed: 0,
            inputEmpty: false
        };

        this.fetchTask = this.fetchTask.bind(this);
        this.storeTask = this.storeTask.bind(this);
        this.saveChange = this.saveChange.bind(this);
        this.onFieldChange = this.onFieldChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    };

    onFieldChange(event){
        this.setState({ description: event.target.value });
    }

    onSubmit(e){
        e.preventDefault();
        this.saveChange();
    }

    saveChange(){
        
        if(this.state.description != ''){
            // console.log(this.state);
            fetch(`http://localhost:4200/tasks/${this.state.taskId}/${this.state.description}/${this.state.completed}` , {
                method: 'PUT'
            }).then(res => {
                this.props.history.push('/');
            }).catch(err => err);
        }
        else{
            this.setState({ inputEmpty: true });
        }
        

    }

    storeTask(result){
        // console.log(this.state);
        this.setState(() => ({ description: result[0].description, completed: result[0].completed }));
        // console.log(this.state);
    }

    fetchTask(){
        fetch(
            `http://localhost:4200/tasks/${this.state.taskId}`
          )
            .then(response => response.json())
            .then(result => this.storeTask(result))
            .catch(e => e);
    }


    componentDidMount(){
        this.fetchTask();
    }

    render(){
        // console.log(this.state.taskId)

        return(
            <div >
                <Input 
                    placeholder={this.state.description}
                    onChange = {this.onFieldChange}
                    value={this.state.description}
                    style={new Array(editTaskStyles.inputField,editTaskStyles.editTaskDiv,headerStyles.addButton)}
                    buttonText = {'Save'}
                    onClick = { this.saveChange }
                    onSubmit = {this.onSubmit}
                />
                <Link style = {{ textAlign: 'center', display: 'block' }} to={`/`}>Back</Link>
            </div>
            
        )
    }
}
// const EditTask = () => (
//     <div >
//         <ul id="myUL">
//             <li>Hit the gym</li>
//             <li class="checked">Pay bills</li>
//             <li>Meet George</li>
//             <li>Buy eggs</li>
//             <li>Read a book</li>
//             <li>Organize office</li>
//         </ul>
//     </div>
// );

// export default EditTask