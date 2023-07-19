import React from "react";
import { Link } from "react-router-dom";

const MountainOFKnowledgeComponent = () => {
  return (
    <div className="MountainOFKnowledge">
      <section>
        <div className="wrapper">
          <div className="title-part">
            <h5>CHECK OUT OUR</h5>

            <div className="name">Mountain of Knowledge</div>
          </div>

          <div className="list">
            <Link to="/blogging">
              <div className="item">
                <div className="image-area">
                  <img
                    src="https://i.assetzen.net/i/7qEXqCd7V6TI/w:500/h:500/q:70.webp"
                    alt=""
                  />
                </div>

                <div className="content">
                  <div className="name">podcast</div>
                  <p className="desc">
                    Listen to our latest ramblings on the monthly podcast
                    episodes!
                  </p>
                </div>
              </div>
            </Link>

            <Link to="/blogging">
              <div className="item">
                <div className="image-area">
                  <img
                    src="https://i.assetzen.net/i/7qEXqCd7V6TI/w:500/h:500/q:70.webp"
                    alt=""
                  />
                </div>

                <div className="content">
                  <div className="name">Knowledge centre</div>
                  <p className="desc">
                    All of your questions and concerns answered in plain, no
                    nonsense english.
                  </p>
                </div>
              </div>
            </Link>

            <Link to="/blogging">
              <div className="item">
                <div className="image-area">
                  <img
                    src="https://i.assetzen.net/i/7qEXqCd7V6TI/w:500/h:500/q:70.webp"
                    alt=""
                  />
                </div>

                <div className="content">
                  <div className="name">blog</div>
                  <p className="desc">
                    Read our latest blog articles, straight from experts of the
                    mountains!
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MountainOFKnowledgeComponent;
