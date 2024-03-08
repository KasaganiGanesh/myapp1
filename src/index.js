import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Result from './Result';
// import App2 from './App2';
// import App3 from './App3';
// import App4 from './App4';
import App5 from './App5';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* <App2 userName="Gani"/> */}
   {/* <App3 names={["gani","mani","abhi"]} marks={["10","20","30"]}/> */}

{/* <App3 students={{name:"ganesh",age:22}}/> */}
<App5 />
  
  </React.StrictMode>
);
