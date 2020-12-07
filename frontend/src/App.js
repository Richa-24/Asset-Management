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
      <Route path="/add" exact render={(props) => < AddImage {...props} />} />
      <Route path="/edit/:id" exact render={(props) => < EditImage {...props} />} />
      <Route path="/view/:id" exact render={(props) => < ImageDetails {...props} />} />
    </div>
  );
}

export default App;
