import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/index';
import SignIn from './auth/signin/Signin';
import Register from './auth/register/Register';

const Routing = () => {
  return (
    <Fragment>
      <Home />
        <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
      </Fragment>
  );
};

export default Routing;
