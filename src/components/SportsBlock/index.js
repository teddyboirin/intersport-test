import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Chevron from '../../icons/Chevron';
import Runner from '../../images/runner.png';
import Banderole1 from '../../images/banderole-1.svg';
import Banderole2 from '../../images/banderole-2.svg';
import Banderole4 from '../../images/banderole-4.svg';
import Banderole5 from '../../images/banderole-5.svg';

// background sports
import Natation from '../../images/sports/natation.jpg';
import Running from '../../images/sports/running.jpg';
import Raquettes from '../../images/sports/raquettes.jpg';
import SportCo from '../../images/sports/sport-co.jpg';

export default function SportsBlock() {
  const datas = [
    {
      photo: Running,
      link: '/',
      name: 'Running',
    },
    {
      photo: Natation,
      link: '/',
      name: 'Natation',
    },
    {
      photo: Raquettes,
      link: '/',
      name: 'Sports de raquette',
    },
    {
      photo: SportCo,
      link: '/',
      name: 'Sports collectifs',
    },
  ];
  return (
    <section className="products-block">
      <div className="products-block__background">
        {/* <div className="products-block__background_rayons">
          <img src={Rayon} alt="rayons" />
        </div> */}
        <div className="products-block__background_image">
          <img src={Runner} alt="people-brands" />
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
          les sports <span>en black friday !</span>
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
                <div
                  className="block__item"
                  style={{ background: `url(${item.photo})` }}
                >
                  <span className="sports-block__title">{item.name}</span>
                  <span className="see_all">
                    Voir tout <Chevron />
                  </span>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
