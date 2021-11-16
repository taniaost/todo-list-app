import React from 'react';
import { ChakraProvider} from "@chakra-ui/react"
import FormList from "./components/formList";
import theme from './theme'



function App() {
  return (
      <ChakraProvider theme={theme}>
          <FormList/>
      </ChakraProvider>
  );
}

export default App;
