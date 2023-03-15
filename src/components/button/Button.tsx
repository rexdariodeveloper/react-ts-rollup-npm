import React from 'react';
import './Button.scss';

export interface ButtonProps{
    label: string;
}

export const Button = (props: ButtonProps) =>{
    return <button>{props.label}</button>
}

export const ButtonAzul = (props: ButtonProps) =>{
    return <button className='imj-button-azul'>{props.label}</button>
}

//export default ButtonAzul;