import React from 'react';
import images from '../../constants/images';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AboutUs, Chef, Header, SpecialMenu } from 'container';
import { Navbar } from 'components';
const Page = () => {

  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
  </div>
  );
};

export default Page;
