import React from 'react';

import {images} from '../../constants'
const SubHeading = ({title}) => (
  <div>
    <p className='p__cormorant'>{title}</p>
    <img src={ images.spoon}/>
  </div>
);

export default SubHeading;
