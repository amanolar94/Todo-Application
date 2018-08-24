import React, { Component } from 'react'
import './css/main.css'

export default class Header extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            newTask : ''
        };

        

    };


    render(){
        return(
            
            <div className="header">
                <h2 className="headerTitle" >My To Do List</h2>
                
            </div>

        );
    }
}

// const Header = () => (
//     <div className="header">
//         <h2 className="headerTitle" >My To Do List</h2>
//         <Input 
//             placeholder='New Task'
//             value = ''
//             style={ new Array(headerStyles.inputField) }
//             buttonText = {'Add'}
//         />
//     </div>
// );

// export default Header