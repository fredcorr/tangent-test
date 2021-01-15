import { Link } from 'react-router-dom'
import { BiCalendarWeek } from 'react-icons/bi'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { FiType } from 'react-icons/fi';
import React, { useState, useEffect } from 'react';
import { addMovie, deleteMovie } from '../../redux/actions';
import { motion, AnimatePresence } from 'framer-motion';

export interface Props {
    title: string,
    imdbId: string,
    year: string,
    poster: string,
    type: string
}

const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

const MovieCard: React.FC<Props> = (props) => {
    
        const movies = useSelector<Props>( (state) => state.movies );
        const [ isLiked, setIsLiked] = useState(false);
        const dispatch = useDispatch();

        
        
        const manageList = ( ) => {
            if ( !isLiked ) {
                dispatch(addMovie( props ))
            } else {
                dispatch( deleteMovie( props.imdbId ) )
            }

            setIsLiked( !isLiked )
        }

        useEffect(() => {

            let belongsToList = movies.find( movie => movie.imdbId === props.imdbId )
            setIsLiked( belongsToList ? true : false )
            
        }, [movies, props.imdbId] );
    
        return (
            <AnimatePresence exitBeforeEnter>
                <motion.div className="movieCard" initial="hidden" animate="visible" variants={variants} exit={"hidden"}>
                    <div className='likeButton' onClick={ () => manageList() }>
                        { isLiked ? <AiFillHeart/> : <AiOutlineHeart/> }
                    </div>
                    <Link to={ `/movie-card/:${ props.imdbId }` }>
                    <div className="posterWrapper">
                        { props.poster !== 'N/A' ? <img src={ props.poster } alt={ `${props.title} ${props.year}` } /> : null }
                    </div>
                    <div className="movieDetails">
                        <p className="title">{ props.title }</p>
                        <div className="icon_details">
                            <BiCalendarWeek/>
                            { props.year }
                        </div>
                        <div className="icon_details">
                            <FiType/>
                            { props.type }
                        </div>
                    </div>
                </Link>
                </motion.div>
            </AnimatePresence>
        )
    }

export default MovieCard;