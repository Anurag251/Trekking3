import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper";

import { useContext, useState } from "react";
import { AllDataContext } from "../context/AllData.context";
import { useNavigate } from "react-router-dom";
import { apis } from "../utils/apis";

const BannerComponent = () => {
  const {
    countryDatas,
    setCategoriesDatas,
    selectedDatas,
    setSelectedDatas,
    setMessage,
    bannerDatas,
    setCountPackage,
  } = useContext(AllDataContext);

  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    country: "",
    duration: "",
    tripYear: "",
  });

  const [buttonLoading, setButtonLoading] = useState(false);

  const filterData = (e) => {
    e.preventDefault();
    setButtonLoading(true);

    if (
      formValues.country !== "" ||
      formValues.duration !== "" ||
      formValues.tripYear !== ""
    ) {
      try {
        apis
          .post("/gettrip", {
            country: formValues.country,
            duration: formValues.duration,
            tripyear: formValues.tripYear.split("-")[0],
          })
          .then((res) => {
            setButtonLoading(false);
            if (res.status === 200) {
              if (res.data.data.length) {
                navigate("/search-page", {
                  state: {
                    searchedData: res.data.data,
                  },
                });
                setCountPackage(res.data.data.length);
              } else {
                setMessage({
                  message: true,
                  title: "No Package",
                  type: "error",
                  desc: `No Package available for ${formValues.duration}`,
                });
              }
            }
          })
          .catch((err) => {
            setMessage({
              message: true,
              title: err.code,
              type: "error",
              desc: err.message,
            });

            console.log(err);
            setButtonLoading(false);
          });
      } catch (err) {
        console.error(err);
      }
    } else {
      alert("All fields are required");
      setButtonLoading(false);
    }
  };

  return (
    <div className="banner">
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        speed={1000}
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {bannerDatas &&
          bannerDatas.map((data, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="item"
                style={{ backgroundImage: `url(${data.image.original_image})` }}
              >
                <div className="wrapper">
                  <div className="content-area">
                    <h2>{data.title}</h2>
                    <p>{data.smalltitle}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default BannerComponent;
