import React from 'react';
import images from '../../constants/images';
import './Navbar.css';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo' >
      <img src={images.gericht} alt=' app logo'/>
      </div>
      <ul className='app__navbar-links'> 
        <li className=''><a href='#home'>Home</a></li>
        <li className=''><a href='#about'>About</a></li>
        <li className=''><a href='#menu'>Menu</a></li>
        <li className=''><a href='#awards'>Awards</a></li>
        <li className=''><a href='#contact'>Contact</a></li>
      </ul>
      <div className='app__navbar-login'>
        <a href='#login' className=''> Login/ Register</a>
        <div/>
        <a href='#login' className=''>Book table</a>
      </div>

      <div className='app__navbar-smallscreem'>
      <GiHamburgerMenu color="#fff" fontSize={27}  onClick={() => (setToggleMenu(true))} />
       {toggleMenu &&(
          <div className='app__navbar-smallscreen_overlay flex__center'>
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => (setToggleMenu(false))} />
            <ul className='app__navbar-smallscreem_links'> 
              <li className=''><a href='#home'>Home</a></li>
              <li className=''><a href='#about'>About</a></li>
              <li className=''><a href='#menu'>Menu</a></li>
              <li className=''><a href='#awards'>Awards</a></li>
              <li className=''><a href='#contact'>Contact</a></li>
            </ul>
          </div>  
       )}
    
      </div>
    </nav>

  );
};

export default Navbar;
