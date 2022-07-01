import React, {FC} from 'react';
import './App.scss';
import {Provider} from "react-redux";
import Wraper from "./Wraper";
import store from './store';

const App: FC = () => {
  return (
    <Provider store={store}>
      <Wraper/>
    </Provider>
  );
}

export default App;
