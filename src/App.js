import Breadcrumb from './components/Breadcrumb';
import Menu from './components/Menu';
import Head from './components/Head';
import ProductSlider from './components/ProductSlider';
import CategoriesDoor from './components/CategoriesDoor';
import Middle from './components/Middle';
import SliderBlock from './components/SliderBlock';
import BrandsBlock from './components/BrandsBlock';
import SportsBlock from './components/SportsBlock';
import ECat from './components/ECat';

function App() {
  return (
    <div className="App">
      <header>
        <div className="header__first_block"></div>
        {/* <Menu /> */}
        <Breadcrumb />
      </header>
      <Head />
      <ProductSlider />
      <CategoriesDoor />
      <Middle />
      <SliderBlock />
      <BrandsBlock />
      <SportsBlock />
      <ECat />
    </div>
  );
}

export default App;
