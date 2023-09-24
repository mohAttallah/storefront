import Layout from './Components/Layout';
import Categories from './Components/Categories';
import './global.scss';
import Products from './Components/Products';
import TEST from './Components/TESTComponent';
import { ChakraProvider, CSSReset } from "@chakra-ui/react";

function App() {

  return (
    <>
      <ChakraProvider>
        <CSSReset />
        <Layout>
          {/* <TEST /> */}
          <Categories />
          <Products />
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default App
