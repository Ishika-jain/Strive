import React from 'react';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import {LandingPage} from './pages';
import {Course, HackathonListItem}  from './components';
import {react_data} from "./data/react_data";
import {node_data} from "./data/node_data";
import {native_data} from "./data/native_data";

const App = () => {
  return (
    <div className="app ">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/hackathons" element={<HackathonListItem />} />
          <Route path="/react" element={<Course checkListItems="react" checkListProgress="reactProgress" data={react_data} />} />
          <Route path="/node" element={<Course checkListItems="node" checkListProgress="backendProgress" data={node_data} />} />
          <Route path="/native" element={<Course checkListItems="reactnative" checkListProgress="reactnativeProgress" data={native_data} />} />
        </Routes>
      </Router>

    </div>
   
  );
}

export default App;
