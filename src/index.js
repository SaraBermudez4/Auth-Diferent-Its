import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// Amplify
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';

// App
import App from './App';

// Css
import '@aws-amplify/ui-react/styles.css';
import '@fontsource/inter/variable.css';
import './index.css';

Amplify.configure(awsExports);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();