import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import StyleProvider from "@yubi/yb-style-provider"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyleProvider baseUrl='https://design-system-qa.go-yubi.in/tokens'>
      <App />
    </StyleProvider>
  </React.StrictMode>
);
