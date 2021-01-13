import React from 'react';

interface Props {
    title: string
    img: {
        alt: string,
        src: string,
    } 
}

const FilmCard: React.FC<Props> = ({ title, img }) => {
    return (
        <div className='filmCard'>
            <img src={ img.src } alt={ img.alt }/>
            <p>{ title }</p>
        </div>
    )
}

export default FilmCard;