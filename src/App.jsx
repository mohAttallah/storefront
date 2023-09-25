import Layout from './Components/Layout';
import './global.scss';

import Storefront from './Components/Storefront';
import Cart from './Components/Cart';
import Details from './Components/ProductDetails'; './store/products';
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {

  return (
    <>
      <ChakraProvider>
        <CSSReset />
        <Layout>
          <Routes>
            <Route path='/' element={< Storefront />} />
            <Route path='/cart' element={< Cart />} />
            <Route path='/details/:itemId' element={< Details />} />
          </Routes>
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default App
