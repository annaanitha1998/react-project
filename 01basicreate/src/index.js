import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const customReactDom = React.createElement(
  'a',
  {href: "https://google.com", target: "_blank"},  
  "Click me to open Google"
)

root.render(
    customReactDom
);
