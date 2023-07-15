import Breadcrumb from './components/Breadcrumb';
import Menu from './components/Menu';
import Head from './components/Head';
import ProductSlider from './components/ProductSlider';

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
    </div>
  );
}

export default App;
