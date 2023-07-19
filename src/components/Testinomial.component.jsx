import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper";

import { useContext } from "react";
import { AllDataContext } from "../context/AllData.context";

const TestinomialComponent = () => {
  const { reviewDatas } = useContext(AllDataContext);
  // console.log(reviewDatas);

  return (
    <section>
      <div className="wrapper">
        <div className="testinomial">
          <div className="title">Testinomial</div>

          <Swiper
            slidesPerView={1}
            speed={1000}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {reviewDatas &&
              reviewDatas.map((data, idx) => (
                <SwiperSlide key={idx}>
                  <div className="item">
                    <div className="image-sec">
                      <img src={data.image.original_image} alt="user-image" />
                    </div>

                    <div className="text-sec">
                      <p
                        className="desc"
                        dangerouslySetInnerHTML={{
                          __html: data && data.description,
                        }}
                      />

                      <div className="name">{data.name}</div>
                      <div className="post">{data.title}</div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestinomialComponent;
