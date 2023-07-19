import React, { useContext, useEffect } from "react";
import PageBannerComponent from "../components/PageBanner.component";
import { Link, useLocation } from "react-router-dom";
import BloggingCardComponent from "../components/Blogging/BloggingCard.component";
import BloggingBigCardComponsnt from "../components/Blogging/BloggingBigCard.componsnt";
import { AllDataContext } from "../context/AllData.context";
import NewPackageCardComponent from "../components/NewPackageCard.component";

import nepalImage from "../assets/images/nepal.webp";
import bhutanImage from "../assets/images/bhutan.jpeg";
import tibetImage from "../assets/images/tibet.jpeg";

const DestinationDetailsPage = () => {
  const { tripDatas } = useContext(AllDataContext);

  const location = useLocation();

  return (
    <div className="ToursInNepalPage">
      <PageBannerComponent
        image={
          location.pathname.split("/")[2] === "nepal"
            ? nepalImage
            : location.pathname.split("/")[2] === "bhutan"
            ? bhutanImage
            : location.pathname.split("/")[2] === "tibet"
            ? tibetImage
            : null
        }
      >
        Trekking Package in {location.pathname.split("/")[2]}
      </PageBannerComponent>

      <div className="AdVentuRes">
        <section>
          <div className="wrapper">
            <div className="list">
              {tripDatas &&
                tripDatas
                  .filter(
                    (data) =>
                      data.country.toLowerCase() ===
                      location.pathname.split("/")[2]
                  )
                  .map((data, idx) => (
                    <NewPackageCardComponent key={idx} data={data} />
                  ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;
