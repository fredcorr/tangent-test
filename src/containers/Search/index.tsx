import { BsSearch } from 'react-icons/bs';
import React from 'react';

const Search: React.FC = () => {

    const queryFilm = () => {
        
    }

    return (
        <>
          <div className={ 'searchBar' }>
            <input
                placeholder={ 'Search your favourite film' }
                onKeyDown={ (e: any) => console.log( e )}
            />
            <button onClick={ (e) => console.log( e ) }><BsSearch/></button>
          </div>
          

        </>
    )
}

export default Search;