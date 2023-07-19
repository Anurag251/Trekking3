/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image4 from "../assets/images/banner-2.jpg";

const PackageListCardComponent = ({ data }) => {
  const [selectedPrice, setSelectedPrice] = useState(null);

  useEffect(() => {
    setSelectedPrice(data.price[0].value);
  }, [data]);

  return (
    <div className="package-card">
      <div className="image-section">
        <img
          className="package-image"
          src={data.image.original_image}
          alt="package-image"
        />
      </div>

      <div className="package-body">
        <div className="package-content">
          <Link to={`/details/${data.id}`}>
            <h4 className="name">{data.title}</h4>
          </Link>

          <p
            className="desc"
            dangerouslySetInnerHTML={{
              __html: data && data.content,
            }}
          />

          <div className="price-switch-area">
            <div className="price-title">Select Price</div>
            <div className="price-switch">
              {data.price.map((price, idx) => (
                <button
                  key={idx}
                  className={`${selectedPrice === price.value ? "active" : ""}`}
                  onClick={() => setSelectedPrice(price.value)}
                >
                  {price.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="package-footer">
          <Link to={`/details/${data.id}`}>
            <button className="show-details-btn">Show Details</button>
          </Link>

          <div className="package-price">${selectedPrice}</div>
        </div>
      </div>
    </div>
  );
};

export default PackageListCardComponent;
