import React from 'react'

const Button = ({ buttonText, id, style, onClick }) => (
    <button style={style} id={id} type="button" onClick = {onClick} >
      {buttonText}
    </button>
);

export default Button

