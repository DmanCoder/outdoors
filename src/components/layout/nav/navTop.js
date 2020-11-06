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
          <svg className="curve-text" viewBox="100 -100 350 500">
            <path
              id="curve"
              d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
            />
            <text width="500">
              <textPath href="#curve">Great</textPath>
            </text>
          </svg>
          <Wings />
          <span className="text">Outdoors</span>
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
