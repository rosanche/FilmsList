import React from 'react';

import Films from './pages/films/films';
import { Provider } from 'react-redux';
import store from './redux/store/config-store';

const App = () => {
  return (
    <Provider store={store}>
      <Films />
    </Provider>
  );
}

export default App;
