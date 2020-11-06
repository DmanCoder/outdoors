import React from 'react';

// SVS
import { ReactComponent as Facebook } from '../../../assets/icons/facebook.svg';
import { ReactComponent as Ig } from '../../../assets/icons/ig.svg';
import { ReactComponent as Twitter } from '../../../assets/icons/twitter.svg';

const NavSide = () => {
  return (
    <div className="side-nav">
      <ul className="side-nav__icons">
        <li>
          <Facebook />
        </li>
        <li>
          <Twitter />
        </li>
        <li>
          <Ig />
        </li>
      </ul>
    </div>
  );
};

export default NavSide;
