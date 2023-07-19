import React, { useContext } from "react";
import { AllDataContext } from "../context/AllData.context";

const HelpfulYetisComponent = () => {
  const { teamDatas, contactDatas } = useContext(AllDataContext);

  return (
    <div className="HelpfulYetis">
      <section>
        <div className="wrapper">
          <div className="title-part">
            <h5>CHAT WITH ONE OF OUR AWESOME</h5>

            <div className="name">and helpful yetis on the phone</div>
          </div>

          <div className="list">
            {teamDatas &&
              teamDatas
                .filter((dara, idx) => idx < 4)
                .map((data, idx) => (
                  <div className="item" key={idx}>
                    <div className="image-area">
                      <img src={data.image} alt="" />
                    </div>

                    <div className="name">{data.name}</div>
                  </div>
                ))}

            <div className="item">
              <p>We are open Monday to Thursday 9:30am - 4:30pm</p>

              <div className="button-group">
                <a href={`tel:${contactDatas && contactDatas.branding.phone}`}>
                  <button className="callButton">Book A Call Back</button>
                </a>

                <a href={`tel:${contactDatas && contactDatas.branding.phone}`}>
                  <h5 className="phoneButton">
                    <i className="fas fa-phone"></i>
                    {contactDatas && contactDatas.branding.phone.split(",")[0]}
                  </h5>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpfulYetisComponent;
