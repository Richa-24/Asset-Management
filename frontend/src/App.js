import React from 'react'
import Dashboard from './Pages/Dashboard'
import { Route } from "react-router-dom";
import ImageDetails from './Pages/ImageDetails';

function App() {
  return (
    <div>
      <Route path="/" exact render={(props) => < Dashboard {...props} />} />
      <Route path="/:id" render={(props) => < ImageDetails {...props} />} />
    </div>
  );
}

export default App;
