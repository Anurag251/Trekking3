/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import HtmlToParagraphs from "./HtmlToParagraphs.component";
import climbImage from "../assets/images/hiking.png";
import MountainImage from "../assets/images/mountain.png";

const NewPackageCardComponent = ({ data }) => {
  console.log(data);
  return (
    <Link to={`/package-details/${data.id}`}>
      <div className="packageCardComponent">
        <div className="image-area">
          <img src={data.image?.original_image} alt={data.title} />

          <div className="time">{data.duration}</div>
        </div>

        <div className="content">
          <div className="name">{data.title}</div>

          <div className="mountain-peak">
            <div className="height">
              <img src={MountainImage} alt="" />
              {data.elevation}
            </div>

            <div className="diff">
              Challenging
              <img src={climbImage} alt="" />
            </div>
          </div>

          <HtmlToParagraphs
            data={
              data !== ""
                ? data.content !== null
                  ? data.content
                  : "No Descriptions"
                : ""
            }
            length={200}
          />
          {/*  <p
            className="desc"
            dangerouslySetInnerHTML={{
              __html: data && data.content,
            }}
          /> */}

          <div className="card-footer">
            <div className="package-price">
              {data.price[0].label && data.price[0].label} Package
              <div className="prices">
                {data.price[0].value && data.price[0].value}
              </div>
            </div>
          </div>

          {/* <div className="card-footer">
            {data.price.length !== 0 ? (
              <div className="price">
                {data.price.length
                  ? data.price[0].label && data.price[0].label
                  : null}{" "}
                {data.price.length
                  ? data.price[0].value && data.price[0].value
                  : null}{" "}
              </div>
            ) : null}

            {data.price.length >= 2 ? (
              <Fragment>
                <div className="or">OR</div>
                <div className="price">
                  {data.price.length >= 2
                    ? data.price[1].label && data.price[1].label
                    : null}{" "}
                  {data.price.length >= 2
                    ? data.price[1].value && data.price[1].value
                    : null}
                </div>
              </Fragment>
            ) : null}
          </div> */}
        </div>
      </div>
    </Link>
  );
};

export default NewPackageCardComponent;
