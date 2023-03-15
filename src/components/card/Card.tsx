import React from 'react';
import './Card.scss';

interface CardProps{
    titulo: string;
    comentario: string;
}

export const Card = (props: CardProps) =>{
    return(
        <div className='imj-card-container'>
            <h1>{props.titulo}</h1>
            <p>{props.comentario}</p>
        </div>
    )
}