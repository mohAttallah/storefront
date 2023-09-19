import Layout from './Components/Layout';
import Categories from './Components/Categories';
import './global.scss';
import Products from './Components/Products';
function App() {

  return (
    <>
      <Layout>
        <Categories />
        <Products />
      </Layout>
    </>
  )
}

export default App
