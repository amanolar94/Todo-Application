import React from 'react'
import todoListStyles from '../styles/todoListStyles'
import { Link } from 'react-router-dom'

const TodoList = () => (
    <div style = {{ marginTop: '50px' }}>
        <ul style = {{ padding: '0px' }} >
            <li key={'1'} style={todoListStyles.li} >Hit the gym <Link to={`/editTask/${p.number}`}>Edit</Link>  </li>
            <li key={'2'} style={todoListStyles.li} >Pay bills <Link to={`/editTask/${p.number}`}>Edit</Link> </li>
            <li key={'3'} style={todoListStyles.li} >Meet George <Link to={`/editTask/${p.number}`}>Edit</Link> </li>
            <li key={'4'} style={todoListStyles.li} >Buy eggs <Link to={`/editTask/${p.number}`}>Edit</Link> </li>
            <li key={'5'} style={todoListStyles.li} >Read a book <Link to={`/editTask/${p.number}`}>Edit</Link> </li>
            <li key={'6'} style={todoListStyles.li} >Organize office <Link to={`/editTask/${p.number}`}>Edit</Link> </li>
        </ul>
    </div>
);

export default TodoList