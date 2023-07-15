import Breadcrumb from './components/Breadcrumb';
import Menu from './components/Menu';
import Head from './components/Head';
import ProductSlider from './components/ProductSlider';
import CategoriesDoor from './components/CategoriesDoor';

function App() {
  return (
    <div className="App">
      <header>
        <div className="header__first_block"></div>
        <Menu />
        <Breadcrumb />
      </header>
       <Head />
       <ProductSlider />
       <CategoriesDoor />
    </div>
  );
}

export default App;
