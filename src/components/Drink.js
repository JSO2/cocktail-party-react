import React from 'react';
import { Link } from 'react-router-dom'

export default function Drink({ image, name, id }) {
    return (
        <article className='drink'>
            <div className='img-container'>
                <img src={image} alt={name} />
                <h3>{name}</h3>
                <Link to={`/cocktail/${id}`} className='btn btnPrimary btnInfo'>
                    Recipe
                </Link>
            </div>
        </article>
    )
}