import { Link } from 'react-router-dom'
import { BiTimeFive, BiCalendarWeek } from 'react-icons/bi'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { FaChild } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import { addMovie, deleteMovie } from '../../redux/actions';

export interface Props {
    title: string,
    plot: string
    id: string,
    genre: string,
    details: Array<string>
    img: {
        alt: string,
        src: string,
    } 
}

const FilmCard: React.FC<Props> = (props) => {

        const icons = [  <BiCalendarWeek/>, <FaChild/> , <BiTimeFive/> ]
        const movies = useSelector<Props>( (state) => state.movies );
        const [ isLiked, setIsLiked] = useState(false);
        const dispatch = useDispatch();

        
        
        const manageList = ( ) => {
            if ( !isLiked ) {
                dispatch(addMovie( props ))
            } else {
                dispatch( deleteMovie( props.id ) )
            }

            setIsLiked( !isLiked )
        }

        useEffect(() => {

            let belongsToList = movies.find( movie => movie.id === props.id )
            setIsLiked( belongsToList ? true : false )
            
        }, [] );
    
        return (

            <div className='filmCard'>
                <div className='likeButton' onClick={ () => manageList() }>
                    { isLiked ? <AiFillHeart/> : <AiOutlineHeart/> }
                </div>
                <Link to={ `/film-card/:${ props.id }` }>
                <div className='posterWrapper'>
                    <img src={ props.img.src } alt={ props.img.alt }/>
                </div>
                <div className='filmDetails'>
                    <p className='title'>{ props.title }</p>
                    {
                        props.details.map( ( dit, i ) => (
                            <div className='icon_details' key={i}>
                                { icons[i] }
                                <span>{ dit }</span>
                            </div>
                        ))
                    }
                    <p className='plot'>{ props.plot }</p>
                    <span>{ props.genre }</span>
                </div>
            </Link>
            </div>
        )
    }

export default FilmCard;