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
    </div>
  );
};

export default Banner;
