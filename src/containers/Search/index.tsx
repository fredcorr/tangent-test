import FilmCard from '../../components/FilmCard';
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
            <button onClick={ (e) => console.log( e ) }>Search <BsSearch/></button>
          </div>
          <h1>My Top 9 Films</h1>
          <div className="filmList">
            <FilmCard  
                plot={ 'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.' }
                title={'Forrest Gump'}
                id={'forrest-gump'}
                genre={ 'Drama, Romance' }
                details={[ '1994', 'PG-13', '142 min' ]}
                img={{
                  alt: 'Forrest Gump 1996',
                  src: 'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
                }}
            />
            <FilmCard  
                plot={ 'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.' }
                title={'Forrest Gump'}
                id={'forrest-gump'}
                genre={ 'Drama, Romance' }
                details={[ '1994', 'PG-13', '142 min' ]}
                img={{
                  alt: 'Forrest Gump 1996',
                  src: 'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
                }}
            />
            <FilmCard  
                plot={ 'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.' }
                title={'Forrest Gump'}
                id={'forrest-gump'}
                genre={ 'Drama, Romance' }
                details={[ '1994', 'PG-13', '142 min' ]}
                img={{
                  alt: 'Forrest Gump 1996',
                  src: 'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
                }}
            />
            <FilmCard  
                plot={ 'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.' }
                title={'Forrest Gump'}
                id={'forrest-gump'}
                genre={ 'Drama, Romance' }
                details={[ '1994', 'PG-13', '142 min' ]}
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