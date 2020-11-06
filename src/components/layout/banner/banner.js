import React from 'react';

import bannerVideo from '../../../assets/videos/mountain-clouds.mp4';
// import bannerThumbnail from '../../../assets/imgs/thumbnail.jpg';

const Banner = () => {
  return (
    <div className="banner">
      {/* <video playsinline autoplay loop muted> */}

      {/* <div className="video-size">
        <video autoPlay loop muted>
          <source src={bannerVideo} type="video/mp4" />
        </video>
      </div> */}

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
