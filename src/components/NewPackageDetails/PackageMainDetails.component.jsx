/* eslint-disable react/prop-types */
import iconClimb from "../../assets/images/hiking.png";
import iconMountain from "../../assets/images/mountain.png";
import iconPrice from "../../assets/images/price-tag.png";
import iconCalendar from "../../assets/images/calendar.png";

const PackageMainDetailsComponent = ({ data }) => {
  return (
    <div className="PackageMainDetails">
      <ul className="item-list">
        <li>
          <img src={iconClimb} alt="climbing-image" />
          <div className="content">
            <div className="name">Group Size</div>
            <span>{data.groupsize}</span>
          </div>
        </li>

        <li>
          <img src={iconMountain} alt="mountain-image" />
          <div className="content">
            <div className="name">Max. Altitude</div>
            <span> {data.elevation}</span>
          </div>
        </li>

        <li>
          <img src={iconCalendar} alt="calendar-image" />
          <div className="content">
            <div className="name">Duration</div>
            <span> {data.duration}</span>
          </div>
        </li>

        <li>
          <img src={iconPrice} alt="price-tag-image" />

          <div className="content">
            <div className="name">Price start with</div>
            <span>
              {data.price.length !== 0 ? (
                <div className="price">
                  {data.price.length
                    ? data.price[0].value && data.price[0].value
                    : null}
                </div>
              ) : null}
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default PackageMainDetailsComponent;
