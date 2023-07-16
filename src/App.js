import Breadcrumb from './components/Breadcrumb';
import Menu from './components/Menu';
import Head from './components/Head';
import ProductSlider from './components/ProductSlider';
import CategoriesDoor from './components/CategoriesDoor';
import Middle from './components/Middle';
import ProductsBlock from './components/ProductsBlock';

function App() {
  return (
    <div className="App">
      {/* <header>
        <div className="header__first_block"></div>
        <Menu />
        <Breadcrumb />
      </header> */}
      <Head />
      <ProductSlider />
      <CategoriesDoor />
      <Middle />
      <ProductsBlock />
    </div>
  );
}

export default App;
