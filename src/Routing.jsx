import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './/pages/home/index';

const Routing = () => {
  return (
    <Fragment>
      <Home />
        {/* <Router>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
        </Router> */}
      </Fragment>
  );
};

export default Routing;
