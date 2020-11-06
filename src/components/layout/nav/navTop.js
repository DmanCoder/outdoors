import React from 'react';

// SVS
import { ReactComponent as Search } from '../../../assets/icons/search.svg';
import { ReactComponent as Wings } from '../../../assets/icons/wings.svg';

const NavTop = () => {
  return (
    <div className="top-nav">
      <ul>
        <li>
          <span className="material-icons">menu</span>
        </li>
        <li>
          <span>Great</span>
          <Wings />
          <span>Outdoors</span>
        </li>
        <li>
          <span>Search</span>

          <Search />
        </li>
      </ul>
    </div>
  );
};

export default NavTop;
