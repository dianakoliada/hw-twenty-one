import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {ClassComponentClock, ClassComponentTimer} from './components/clock';
import img from './materials/uk.jpg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClassComponentClock child={<ClassComponentTimer/>} img={img} />
  </React.StrictMode>
);

