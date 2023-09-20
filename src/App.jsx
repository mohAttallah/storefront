import Layout from './Components/Layout';
import Categories from './Components/Categories';
import './global.scss';
import Products from './Components/Products';

import { ChakraProvider, CSSReset } from "@chakra-ui/react";

function App() {

  return (
    <>
      <ChakraProvider>
        <CSSReset />
        <Layout>
          <Categories />
          <Products />
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default App
