import { ChakraProvider } from '@chakra-ui/react'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import  './App.css';
import { Consumer } from './Context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Router>
  <Consumer>
  <ChakraProvider>
    <App/>
  </ChakraProvider>
  </Consumer>
  </Router>
);

