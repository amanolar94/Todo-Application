import React from 'react'
import './css/main.css'
import Input from './reusableComponents/input'
import Button from './reusableComponents/button'
import headerStyles from './styles/headerStyles'

const Header = () => (
    <div className="header">
        <h2 className="headerTitle" >My To Do List</h2>
        <span>
            <Input 
            placeholder='New Task'
            style={ headerStyles.inputField }
            />
        </span>
        <Button
          buttonText = 'Add'
          style = { headerStyles.addButton }
        />
    </div>
);

export default Header