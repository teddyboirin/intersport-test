import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import ProductImage from '../../images/product-1.png';
export default function ProductSlider() {
  const datas = [0, 1, 2, 3];
  return (
    <section className="product-slider">
      <Swiper
        navigation
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
      >
        {datas.map(() => (
          <SwiperSlide className="product-slider__item">
            <div className="product-slider__image">
              <img src={ProductImage} alt="product-garmin" />
            </div>
            <div className="product-slider__content">
              <div className="product-slider__badge">-60€</div>
              <span className="product-slider__cat">Adulte</span>
              <h3 className="product-slider__brand">Garmin</h3>
              <h4>Montre GPS & Cardio VENU SQ</h4>
              <div className="product-slider__price">
                <span>249,99€</span>
                <span>189,99€</span>
              </div>
              <button className="product-slider__cta">Acheter</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
