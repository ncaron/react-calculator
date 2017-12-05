import React from 'react';
import Calculator from '../Containers/Calculator';
import Error from '../Components/Error';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Error />
      <Calculator />
      <Footer />
    </div>
  );
};

export default App;
