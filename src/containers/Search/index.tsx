import FilmCard from '../../components/FIlmCard';
import { BsSearch } from 'react-icons/bs';
import React from 'react';

const Search: React.FC = () => {

    return (
        <>
          <div className={ 'searchBar' }>
            <input
                placeholder={ 'Search your favourite film' }
                onKeyDown={ (e: any) => console.log( e )}
            />
            <button onClick={ (e) => console.log( e ) }><BsSearch/></button>
          </div>
          <div className="filmList">
            <FilmCard  
                title={'Forrest Gump'}
                img={{
                  alt: 'Forrest Gump 1996',
                  src: 'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
                }}
            />
          </div>

        </>
    )
}

export default Search;