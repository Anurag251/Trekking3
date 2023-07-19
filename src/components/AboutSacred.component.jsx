import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { EffectFade, Autoplay } from "swiper";
import { AllDataContext } from "../context/AllData.context";

const AboutSacredComponent = () => {
  const { aboutDetails } = useContext(AllDataContext);

  return (
    <div className="AboutSacred">
      <section>
        <div className="wrapper">
          <div className="item">
            <div className="content">
              <p
                className="desc"
                dangerouslySetInnerHTML={{
                  __html:
                    aboutDetails !== null
                      ? aboutDetails[1].description.length > 500
                        ? `${aboutDetails[1].description.slice(0, 500)}...`
                        : aboutDetails[1].description
                      : "",
                }}
              />

              <div className="button-group">
                <Link to="/reasons-to-choose-us">
                  <button>Why Choose Sacred?</button>
                </Link>

                <Link to="/destinations">
                  <button>View Destinations</button>
                </Link>
              </div>
            </div>

            <Swiper
              slidesPerView={1}
              centeredSlides={true}
              effect={"fade"}
              loop={true}
              speed={1000}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, EffectFade]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="image-area">
                  <img
                    src="https://stnepal.com.np/trekking/public/images/20230525053219_original_11.webp"
                    alt=""
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="image-area">
                  <img
                    src="https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="image-area">
                  <img
                    src="https://images.pexels.com/photos/1311527/pexels-photo-1311527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="image-area">
                  <img
                    src="https://stnepal.com.np/trekking/public/images/20230525053219_original_11.webp"
                    alt=""
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="image-area">
                  <img
                    src="https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="image-area">
                  <img
                    src="https://images.pexels.com/photos/1311527/pexels-photo-1311527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSacredComponent;
