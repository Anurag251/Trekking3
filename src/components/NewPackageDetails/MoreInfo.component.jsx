/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { AllDataContext } from "../../context/AllData.context";

const MoreInfoComponent = ({ data }) => {
  const { detailsPageNav, setDetailsPageNav } = useContext(AllDataContext);

  return (
    <div
      className={`MoreInfoSection ${
        detailsPageNav === "MoreInfo" ? "active" : ""
      }`}
    >
      <section>
        <div className="wrapper">
          <div
            className={`inner-details-button ${
              detailsPageNav === "MoreInfo" ? "show-details" : ""
            }`}
          >
            <div
              className="main-title"
              onClick={() => {
                window.scroll(0, 370);
                setDetailsPageNav("MoreInfo");
              }}
            >
              Equipments <i className="fas fa-angle-down"></i>
            </div>

            <div className="inner-details">
              <div className="main-container">
                <div className="TripOverviewMainContent">
                  <p
                    className="desc"
                    dangerouslySetInnerHTML={{
                      __html: data.content,
                    }}
                  />
                </div>
                {/*  <div className="more-info-list">
              <div className="item">
                <div className="item-title">
                  <div className="day">Trekking pole</div>
                  <div className="arrow">
                    <i className="fas fa-angle-down"></i>
                  </div>
                </div>
                <div className="item-body">
                  <p>
                    Trekking poles are a common hiking accessory that function
                    to assist walkers with their rhythm, to provide stability,
                    and reduce strain on joints on rough terrain.
                  </p>
                </div>
              </div>

              <div className="item">
                <div className="item-title">
                  <div className="day">Sleeping bag</div>
                  <div className="arrow">
                    <i className="fas fa-angle-down"></i>
                  </div>
                </div>
                <div className="item-body">
                  <p>
                    A sleeping bag is an insulated covering for a person,
                    essentially a lightweight quilt that can be closed with a
                    zipper or similar means to form a tube, which functions as
                    lightweight, portable bedding in situations where a person
                    is sleeping outdoors.
                  </p>

                  <p>
                    We can forward a detailed equipment list upon booking.
                    However, you can also view some of our articles in the
                    Knowledge Centre like our Kit list for trekking in Nepal.
                  </p>
                </div>
              </div>
            </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MoreInfoComponent;
