import React from 'react';

import './SpecialMenu.css';
import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
const SpecialMenu = () => (
  <div className='app___specialMenu flex__center section__padding' id='menu'>
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Today&apos;s Special</h1>
    </div>

    <div className='app___specialMenu-menu'>
      <div className='app___specialMenu-menu_wine flex__center'>
        <p className='app___specialMenu-menu_heading'> Wine & Bear</p>
        <div className='app___specialMenu-menu_items'>
              {data.wines.map((wine,index) =>(
                <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags}/>
              ))}
        </div>
      </div>
      
      <div className='app___specialMenu-menu_img'>
        <img src={images.menu} alt=''/>
      </div>

      <div className='app___specialMenu-menu_cocktails flex__center'>
        <p className='app___specialMenu-menu_heading'> Cocktails</p>
        <div className='app___specialMenu-menu_items'>
              {data.cocktails.map((cocktails,index) =>(
                <MenuItem key={cocktails.title + index} title={cocktails.title} price={cocktails.price} tags={cocktails.tags}/>

              ))}
        </div>
      </div>
    </div>

    <div style={{marginTop:'15px'}}>
    <button type='button' className='custom__button'>View More</button>
    </div>
  </div>
);

export default SpecialMenu;
