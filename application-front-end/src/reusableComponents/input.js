import React from 'react'
import Button from './button'
import headerStyles from '../styles/headerStyles'

const Input = ({ placeholder, onChange, value, style, buttonText, onClick, onKeyPress, onSubmit }) => (
    <div style={style[1]} >
        <span>
            <form onSubmit={onSubmit} style={{width: '75%', float: 'left'}} >
                <input type="text" placeholder={placeholder} value={value} onChange={onChange} style={style[0]} onKeyPress={onKeyPress}   />
            </form>
        </span>
        <Button
            buttonText = {buttonText}
            style = { style[2] }
            onClick = {onClick}
        />
    </div>
    
    
);

export default Input