import React from 'react';
import Calculator from '../Containers/Calculator';
import Error from '../Components/Error';

const App = () => {
  return (
    <div>
      <Error />
      <Calculator />
    </div>
  );
};

export default App;
