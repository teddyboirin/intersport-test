import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Product from '../../images/product.png';
import Boxe from '../../images/boxe.png';
import Banderole1 from '../../images/banderole-1.svg';
import Banderole2 from '../../images/banderole-2.svg';

export default function ProductsBlock() {
  const datas = [0, 1, 2, 3, 4, 5, 6, 7];
  return (
    <section className="products-block">
      <div className="products-block__background">
        <div className="products-block__background_image">
          <img src={Boxe} alt="boxe" />
        </div>
        <div className="products-block__banderole">
        <img src={Banderole1} alt="banderole-black-friday" />
        </div>
        <div className="products-block__banderole products-block__banderole--second">
          <img src={Banderole2} alt="banderole-black-friday" />
        </div>
        <div className="products-block__banderole products-block__banderole--third">
          <img src={Banderole1} alt="banderole-black-friday" />
        </div>
        <h4 className="products-block__title">
          Sélection <span>exceptionnelle</span>
        </h4>
      </div>
      <div className="products-block__container">
        <Swiper
          spaceBetween={0}
          slidesPerView="auto"
          navigation
          modules={[Navigation]}
          breakpoints={{
            375: {
              slidesPerView: 'auto',
            },
            768: {
                slidesPerView: 'auto',
            },
          }}
        >
          {datas.map(() => (
            <SwiperSlide style={{ width: '171px' }}>
              <a href="/">
                <div href="#" className="products-block__item">
                  <div className="products-block__item_badge">
                    <div>BLACK FRIDAY</div>
                    <div>-50%</div>
                  </div>
                  <div className="products-block__item_badge--mob">
                    NOUVEAUTÉ
                  </div>
                  <div className="products-block__item_image">
                    <img src={Product} alt="product" />
                  </div>
                  <div className="products-block__item_brand">Marque</div>
                  <div className="products-block__item_name">Nom produit</div>
                  <div className="products-block__item_price">
                    <span>100,99€</span>
                    <span>99,99€</span>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
        <a href="/">
          <button type="button" className="button-secondary">
            Toute la sélection
          </button>
        </a>
      </div>
    </section>
  );
}
