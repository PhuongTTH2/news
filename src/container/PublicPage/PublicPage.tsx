import React from 'react';
import './PublicPage.css';

const PublicPage = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo' >
          hello
      </div>
    </nav>

  );
};

export default PublicPage;
