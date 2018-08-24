import React from 'react'

const Input = ({ placeholder, value, style }) => (
    <form style={{width: '75%', float: 'left'}} >
        <input type="text" placeholder={placeholder} value={value} style={style} />
    </form>
);

export default Input