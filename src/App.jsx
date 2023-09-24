import Layout from './Components/Layout';
import './global.scss';
import Storefront from './Components/Storefront';
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {

  return (
    <>
      <ChakraProvider>
        <CSSReset />
          <Layout>
            <Routes>
              <Route path='/' element={< Storefront />} />
            </Routes>
          </Layout>
      </ChakraProvider>
    </>
  )
}

export default App
