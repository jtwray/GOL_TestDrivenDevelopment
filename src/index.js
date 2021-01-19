import { ColorModeScript, ChakraProvider } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';



function AppWrapper(){
  return(
  <>
  



  </>
)}

ReactDOM.render(
  <StrictMode>
    <ColorModeScript />
    <Router>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Router>
  </StrictMode>,
  document.getElementById('root')
);
