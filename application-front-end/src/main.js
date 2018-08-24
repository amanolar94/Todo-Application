import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './css/main.css'
import TodoList from './components/todoList'
import EditTask from './components/editTask'



const Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component = {TodoList} />
        <Route path='/editTask/:number' component = {EditTask} />
      </Switch>  
      </main>
  )
  
  
export default Main