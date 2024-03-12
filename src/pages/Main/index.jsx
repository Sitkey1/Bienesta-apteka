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

export const MainPage = () => {
  const sliderData = [data[3], data[7], data[9], data[11], data[15]];

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
          <img src={require(`./images/oferta1.png`)} alt="category" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require(`./images/oferta1.png`)} alt="category" />
        </SwiperSlide>
      </Swiper>
      {/* <ul className="ticker list-reset">
        <li>
          <img src={require(`./images/oferta1.png`)} alt="category" />
        </li>
        <li>
          <img src={require(`./images/oferta2.png`)} alt="category" />
        </li>
      </ul> */}

      <ul className="product-slider list-reset">
        {sliderData.map((el) => (
          <li key={el.id}>
            <div className="img-box">
              <img src={`/image/${el.img}`} alt="rr" />
            </div>
            <span className="title">{el.title}</span>
            <span className="subtitle">{el.subDescr}</span>
            <span className="oldprice">{el.oldPrice} MXN</span>
            <span className="newprice">{el.price} MXN</span>
            <button className="btn-reset" onClick={() => BasketStore.add(el)}>
              AGREGAR
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
