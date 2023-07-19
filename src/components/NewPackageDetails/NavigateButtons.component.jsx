import React, { useContext } from "react";
import { AllDataContext } from "../../context/AllData.context";
import { Link } from "react-router-dom";

const NavigateButtonsComponent = () => {
  const { detailsPageNav, setDetailsPageNav } = useContext(AllDataContext);

  return (
    <div className="NavigateButtons">
      <div className="wrapper">
        <div className="top-area">
          <a href="#gallerySec">
            <button className="galleryButton">Gallery</button>
          </a>
          <button
            className="bookNowNutton"
            onClick={() => {
              setDetailsPageNav("DatePrices");
              window.scroll(0, 600);
            }}
          >
            Book Now
          </button>
        </div>
        <div className="button-list">
          <button
            className={`navigateBtn ${
              detailsPageNav === "TripOverview" ? "active" : ""
            }`}
            onClick={() => {
              window.scroll(0, 600);
              setDetailsPageNav("TripOverview");
            }}
          >
            Trip Overview
          </button>
          <button
            className={`navigateBtn ${
              detailsPageNav === "Itinerary" ? "active" : ""
            }`}
            onClick={() => {
              window.scroll(0, 600);
              setDetailsPageNav("Itinerary");
            }}
          >
            Itinerary
          </button>
          <button
            className={`navigateBtn ${
              detailsPageNav === "DatePrices" ? "active" : ""
            }`}
            onClick={() => {
              window.scroll(0, 600);
              setDetailsPageNav("DatePrices");
            }}
          >
            Date & Prices
          </button>
          <button
            className={`navigateBtn ${
              detailsPageNav === "MoreInfo" ? "active" : ""
            }`}
            onClick={() => {
              window.scroll(0, 600);
              setDetailsPageNav("MoreInfo");
            }}
          >
            Equipments
          </button>
          {/* <button
            className={`navigateBtn ${
              detailsPageNav === "Reviews" ? "active" : ""
            }`}
            onClick={() => {
              window.scroll(0, 600);
              setDetailsPageNav("Reviews");
            }}
          >
            Reviews
          </button>
          <button
            className={`navigateBtn ${
              detailsPageNav === "TripExtensions" ? "active" : ""
            }`}
            onClick={() => {
              window.scroll(0, 600);
              setDetailsPageNav("TripExtensions");
            }}
          >
            Trip Extensions
          </button>
          <button
            className={`navigateBtn ${
              detailsPageNav === "Videos" ? "active" : ""
            }`}
            onClick={() => {
              window.scroll(0, 600);
              setDetailsPageNav("Videos");
            }}
          >
            Videos
          </button>
          <button
            className={`navigateBtn ${
              detailsPageNav === "MoreInfo" ? "active" : ""
            }`}
            onClick={() => {
              window.scroll(0, 600);
              setDetailsPageNav("MoreInfo");
            }}
          >
            More Info
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default NavigateButtonsComponent;
