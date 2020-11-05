import React from 'react';

// Svg
// import Search from '../../assets/icons/ig.svg';
import { ReactComponent as Search } from '../../assets/icons/search.svg';

const NavTop = () => {
  return (
    <div className="top-nav">
      <ul>
        <li>
          <span class="material-icons">menu</span>
        </li>
        <li>OUTDOORS</li>
        <li>
          <span>Search</span>
          <Search />
        </li>
      </ul>
    </div>
  );
};

export default NavTop;
