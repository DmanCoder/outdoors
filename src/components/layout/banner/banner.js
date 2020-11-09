import React from 'react';

import bannerVideo from '../../../assets/videos/mountain-clouds.mp4';

const Banner = () => {
  return (
    <div className="banner">
      <div id="wrapper-video">
        <video autoPlay loop muted>
          <source
            src={bannerVideo}
            type="video/mp4; codecs=avc1.42E01E,mp4a.40.2"
          />
        </video>
      </div>

      <div className="banner__text">
        <h1>
          <span>Stunning</span> <span>Dolomites</span>
        </h1>
        <p>The "Pale Mountains" Italy</p>
        <button>Discover The Beauty</button>
      </div>
    </div>
  );
};

export default Banner;
