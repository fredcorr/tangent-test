import { NavLink } from 'react-router-dom';
import { GoMarkGithub } from 'react-icons/go';
import React from 'react';


const Layout: React.FC = ({ children }) => {
    return (
        <>
        <header>
          <NavLink exact to={'/'}>Search</NavLink>
          <NavLink to={'/your-list'}>Your List</NavLink>

          <a href="https://github.com/fredcorr/tangent-test" target="_blank" rel="noreferrer">
            <GoMarkGithub />
          </a>
        </header>
        <main>
          { children }
        </main>
        <footer>
          <p>Pratical Test @Tangent by Federico Corradi</p>
        </footer>
        </>
    )
}

export default Layout;