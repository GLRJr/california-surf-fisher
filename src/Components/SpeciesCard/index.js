import React from "react";
import style from "./styles.module.css";
import { SpeciesData } from "./SpeciesData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

function SpeciesCard() {
  return (
    <div className={style.cardContainer}>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {SpeciesData.map((item, index) => {
          return (
            <SwiperSlide>
              <div className={style.main}>
                <div className={style.upperContainer}>
                  <div className={style.imageContainer}>
                    <img
                      src={item.profileImage}
                      alt="pic of fish"
                      height="100px"
                      width="100px"
                    />
                  </div>
                </div>
                <div className={style.lowerContainer}>
                  <h3>{item.commonName}</h3>
                  <h4>{item.scienceName}</h4>
                  <p>{item.description}</p>
                  <button>View Full Profile</button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default SpeciesCard;
