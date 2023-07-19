import React, { useContext, useEffect, useState } from "react";
import image from "../assets/images/about-img2.jpg";
import { AllDataContext } from "../context/AllData.context";
import { useLocation } from "react-router-dom";

const BlogDetailsPage = () => {
  const { blogDatas } = useContext(AllDataContext);
  const [selectedData, setSelectedData] = useState(null);
  console.log(blogDatas);

  const location = useLocation();

  useEffect(() => {
    if (blogDatas !== null) {
      blogDatas.forEach((data) => {
        if (location.pathname.split("/")[2] == data.id) {
          setSelectedData(data);
        }
      });
    }
  }, [location, blogDatas]);

  return (
    <div className="blog-details-page">
      <div className="wrapper">
        <div className="blog-post">
          <div className="image">
            <div
              className="img"
              style={{
                backgroundImage: `url(${
                  selectedData && selectedData.image.original_image
                })`,
              }}
            ></div>
          </div>
          <div className="details">
            <div className="name">{selectedData && selectedData.title}</div>
            <div className="profile">
              <div
                className="profile-img"
                style={{
                  backgroundImage: `url(${image})`,
                }}
              ></div>
              <div className="profile-detaile">
                <div className="username">
                  {selectedData && selectedData.user.first_name}{" "}
                  {selectedData && selectedData.user.last_name}
                </div>
                <div className="time">
                  {selectedData && selectedData.created_at.slice(0, 10)}
                </div>
              </div>
            </div>

            <p
              className="desc"
              dangerouslySetInnerHTML={{
                __html: selectedData && selectedData.content,
              }}
            />
          </div>

          {/*  <div className="others-infos">
            <div className="name">What is Tours?</div>
            <div className="desc">
              Tours became a metropolis in the Roman province of Lugdunum
            </div>

            <ul>
              <li>
                <strong>In Gallic times:</strong> In Gallic times, Tours was an
                important crossing point over the river Loire. It became part of
                the Roman Empire during the 1st century AD, and the city was
                named "Caesarodunum" ("hill of Caesar"). The name evolved in the
                4th century when the original Gallic name, Turones, became
                "Civitas Turonum", and then "Tours". It was at this time that
                the Tours Amphitheatre was built.
              </li>
              <li>
                <strong>In Gallic times:</strong> In Gallic times, Tours was an
                important crossing point over the river Loire. It became part of
                the Roman Empire during the 1st century AD, and the city was
                named "Caesarodunum" ("hill of Caesar"). The name evolved in the
                4th century when the original Gallic name, Turones, became
                "Civitas Turonum", and then "Tours". It was at this time that
                the Tours Amphitheatre was built.
              </li>
              <li>
                <strong>In Gallic times:</strong> In Gallic times, Tours was an
                important crossing point over the river Loire. It became part of
                the Roman Empire during the 1st century AD, and the city was
                named "Caesarodunum" ("hill of Caesar"). The name evolved in the
                4th century when the original Gallic name, Turones, became
                "Civitas Turonum", and then "Tours". It was at this time that
                the Tours Amphitheatre was built.
              </li>
              <li>
                <strong>16th–18th centuries:</strong> Charles IX passed through
                the city at the time of his royal tour of France between 1564
                and 1566.
              </li>
            </ul>
          </div>

          <div className="others-infos">
            <div className="name">Other points of interest</div>
            <div className="desc">
              When the 15th-century illuminator Jean Fouquet was set the task of
              illuminating Josephus's Jewish Antiquities, his depiction of
              Solomon's Temple was modeled on the nearly-complete cathedral of
              Tours. The atmosphere of the Gothic cathedral close permeates
              Honoré de Balzac's dark short novel of jealousy and provincial
              intrigues, Le Curé de Tours (The Curate of Tours), and his
              medieval story Maître Cornélius opens in the cathedral itself.
              <br />
              <br />
              When the 15th-century illuminator Jean Fouquet was set the task of
              illuminating Josephus's Jewish Antiquities, his depiction of
              Solomon's Temple was modeled on the nearly-complete cathedral of
              Tours. The atmosphere of the Gothic cathedral close permeates
              Honoré de Balzac's dark short novel of jealousy and provincial
              intrigues, Le Curé de Tours (The Curate of Tours), and his
              medieval story Maître Cornélius opens in the cathedral itself.
            </div>
          </div> */}
        </div>

        <div className="recent-post">
          <div className="title">Recent Post</div>
          <div className="list">
            {blogDatas &&
              blogDatas
                .filter((data) => data.id != location.pathname.split("/")[2])
                .map((data, idx) => (
                  <div className="item" key={idx}>
                    <div className="recent-image">
                      <div
                        className="img"
                        style={{
                          backgroundImage: `url(${data.image.original_image})`,
                        }}
                      ></div>
                    </div>
                    <div className="name">
                      <a href="#"> {data.title} </a>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
