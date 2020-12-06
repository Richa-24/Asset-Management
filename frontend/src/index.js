import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './Redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <App />
      </DndProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

