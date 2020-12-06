import React from 'react'
import Dashboard from './Pages/Dashboard'
import { Route } from "react-router-dom";
import ImageDetails from './Pages/ImageDetails';
import AddImage from './Pages/AddImage';
import EditImage from './Pages/EditImage';

function App() {
  return (
    <div>
      <Route path="/" exact render={(props) => < Dashboard {...props} />} />
      <Route path="/:id" exact render={(props) => < ImageDetails {...props} />} />
      <Route path="/add" render={(props) => < AddImage {...props} />} />
      <Route path="/edit/:id" render={(props) => < EditImage {...props} />} />
    </div>
  );
}

export default App;
