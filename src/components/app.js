// Styles

// Components
import NavTop from './layout/nav/navTop';
import NavSide from './layout/nav/navSide';

import Banner from './layout/banner/banner';

// Styles
import '../styles/main.scss';

const App = () => {
  return (
    <div className="">
      <NavTop />
      <NavSide />
      <Banner />
    </div>
  );
};

export default App;
