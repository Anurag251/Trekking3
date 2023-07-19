import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AllDataContext } from "../context/AllData.context";
import BlogCardComponent from "./BlogCard.component";

const SacredCommunityComponent = () => {
  const { blogDatas } = useContext(AllDataContext);

  return (
    <div className="SacredCommunity">
      <section>
        <div className="wrapper">
          <div className="title-part">
            <h5>READ WHAT'S HAPPENING IN THE</h5>

            <div className="name">sacred community</div>
          </div>

          <div className="list">
            {blogDatas &&
              blogDatas
                .filter((data, idx) => idx < 3)
                .map((data, idx) => (
                  <BlogCardComponent key={idx} data={data} />
                ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SacredCommunityComponent;
