import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Chevron from '../../icons/Chevron';
import People from '../../images/people.png';
import Banderole1 from '../../images/banderole-1.svg';
import Banderole2 from '../../images/banderole-2.svg';
import Banderole4 from '../../images/banderole-4.svg';
import Banderole5 from '../../images/banderole-5.svg';
import Rayon from '../../images/rayon.svg';

// brands logos
import Nike from '../../images/brands/nike.svg';
import Adidas from '../../images/brands/adidas.svg';
import Coq from '../../images/brands/le-coq-sportif.svg';
import Puma from '../../images/brands/puma.svg';

export default function BrandsBlock() {
  const datas = [
    {
      logo: Nike,
      link: '/',
      brand: 'Nike',
    },
    {
      logo: Adidas,
      link: '/',
      brand: 'Nike',
    },
    {
      logo: Puma,
      link: '/',
      brand: 'Nike',
    },
    {
      logo: Coq,
      link: '/',
      brand: 'Nike',
    },
    {
      logo: Nike,
      link: '/',
      brand: 'Nike',
    },
    {
      logo: Nike,
      link: '/',
      brand: 'Nike',
    },
    {
      logo: Nike,
      link: '/',
      brand: 'Nike',
    },
    {
      logo: Nike,
      link: '/',
      brand: 'Nike',
    },
    {
      logo: Nike,
      link: '/',
      brand: 'Nike',
    },
    {
      logo: Nike,
      link: '/',
      brand: 'Nike',
    },
  ];
  return (
    <section className="products-block">
      <div className="products-block__background">
        <div className="products-block__background_rayons">
          <img src={Rayon} alt="rayons" />
        </div>
        <div className="products-block__background_image" style={{top: '70px'}}>
          <img src={People} alt="people-brands" />
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
        <div className="products-block__banderole products-block__banderole--fourth">
          <img src={Banderole4} alt="banderole-black-friday" />
        </div>
        {/* <div className="products-block__banderole products-block__banderole--six">
          <img src={Banderole3} alt="banderole-black-friday" />
        </div> */}
        <div className="products-block__banderole products-block__banderole--five">
          <img src={Banderole5} alt="banderole-black-friday" />
        </div>
        <h3 className="products-block__subtitle">Exclusivité web</h3>
        <h4 className="products-block__title">
          Black friday sur <span>les grandes marques</span>
        </h4>
      </div>
      <div className="block__container block__container--sub block__container--leftsub">
        <Swiper
          className="w-brands-slider"
          spaceBetween={24}
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
          {datas.map((item) => (
            <SwiperSlide>
              <a href={item.link}>
                <div className="block__item">
                  <img src={item.logo} alt={item.brand} />
                    <span className="see_all">Voir tout <Chevron /></span>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
