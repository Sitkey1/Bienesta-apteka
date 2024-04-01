import { useEffect } from "react";
import { Hero } from "../../components/Hero";
import data from "../../data/products.json";
import "./style.scss";
import { BasketStore } from "../../Store/BasketStore";
import { useState } from "react";
import { Welcome } from "../../components/Welcome";
import { WelcomeStore } from "../../Store/WelcomeStore";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { Link } from "react-router-dom";
import { routeNames } from "../../navigation/routeNames";

export const MainPage = () => {
  const sliderData = [data[3], data[46], data[7], data[9], data[11], data[15]];

  const [welcome, hasWelcome] = useState(WelcomeStore.get() || false);
  useEffect(() => {
    setTimeout(() => {
      hasWelcome(true);
      WelcomeStore.set(true);
    }, 1500);
  }, []);
  return !welcome ? (
    <Welcome />
  ) : (
    <div>
      <Hero />
      <Swiper
        spaceBetween={10}
        modules={[Autoplay]}
        pagination={{ clickable: true }}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        loop
      >
        <SwiperSlide>
          {/* сделать переход по ссылке  */}
          {/* <Link to={`${routeNames.categories}/Diolix`} state={data[3]}> */}
          <img src={require(`./images/oferta1.png`)} alt="category" />
          {/* </Link> */}
        </SwiperSlide>
        <SwiperSlide>
          <img src={require(`./images/oferta1.png`)} alt="category" />
        </SwiperSlide>
      </Swiper>
      <ul className="product-slider list-reset">
        <Swiper
          spaceBetween={10}
          modules={[Autoplay]}
          pagination={{ clickable: true }}
          slidesPerView={3}
          autoplay={{
            delay: 2000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          loop
        >
          {sliderData.map((el) => (
            <SwiperSlide key={Math.random()} className="list-slide">
              <li key={el.id}>
                <div className="img-box">
                  <Link to={el.title} state={el}>
                    <img src={`/image/${el.img}`} alt="rr" />
                  </Link>
                </div>
                <span className="title">{el.title}</span>
                <span className="subtitle">{el.subDescr}</span>
                <span className="oldprice">{el.oldPrice} MXN</span>
                <span className="newprice">{el.price} MXN</span>
                <button
                  className="btn-reset"
                  onClick={() => BasketStore.add(el)}
                >
                  AGREGAR
                </button>
              </li>
            </SwiperSlide>
          ))}
        </Swiper>
      </ul>
    </div>
  );
};
