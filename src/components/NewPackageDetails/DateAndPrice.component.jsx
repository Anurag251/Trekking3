import { useContext, useState } from "react";
import { AllDataContext } from "../../context/AllData.context";

const DateAndPriceComponent = () => {
  const {
    detailsPageNav,
    setDetailsPageNav,
    bookingPopupForm,
    setBookingPopupForm,
  } = useContext(AllDataContext);
  const [selectedYear, setSelectedYear] = useState(false);

  return (
    <div
      className={`DateAndPriceSection ${
        detailsPageNav === "DatePrices" ? "active" : ""
      }`}
    >
      <section>
        <div className="wrapper">
          <div
            className={`inner-details-button ${
              detailsPageNav === "DatePrices" ? "show-details" : ""
            }`}
          >
            <div
              className="main-title"
              onClick={() => {
                window.scroll(0, 370);
                setDetailsPageNav("DatePrices");
              }}
            >
              Dates & Prices <i className="fas fa-angle-down"></i>
            </div>

            <div className="inner-details">
              <div className="main-container">
                <h3>Monthly Payment Example</h3>
                <div className="price-list">
                  <div className="price-item">
                    <span>First...</span>

                    <h5>Deposit</h5>
                    <h4>£200</h4>
                  </div>

                  <div className="price-item">
                    <span>OR...</span>

                    <h5>1 Full Payment From</h5>
                    <h4>£2,195PP</h4>
                  </div>
                </div>

                <div className="year-list">
                  <div
                    className={`item ${
                      selectedYear === "2023" ? "active" : ""
                    }`}
                  >
                    <div
                      className="item-title"
                      onClick={() => setSelectedYear("2023")}
                    >
                      <div className="day">2023</div>
                      <div className="arrow">
                        <i className="fas fa-angle-down"></i>
                      </div>
                    </div>
                    <div className={`item-body`}>
                      <div className="date-list">
                        <div className="date-item-list little">
                          <div className="date-sec">
                            <span>September 23 2023 - October 07 2023</span>
                          </div>
                          <div className="status-sec ">
                            <span>3 Available Spaces</span>
                          </div>
                          <div className="price-sec">
                            <span>£2,195PP</span>
                          </div>
                          <div className="button-sec">
                            <button
                              onClick={() =>
                                setBookingPopupForm({
                                  ...bookingPopupForm,
                                  isBookingPopupForm: true,
                                  date: "October 07 2023",
                                  price: "£2,195PP",
                                })
                              }
                            >
                              Book Now
                            </button>
                          </div>
                        </div>

                        <div className="date-item-list available">
                          <div className="date-sec">
                            <span>September 23 2023 - October 07 2023</span>
                          </div>
                          <div className="status-sec">
                            <span>16 Available Spaces</span>
                          </div>

                          <div className="price-sec">
                            <span>£2,195PP</span>
                          </div>

                          <div className="button-sec">
                            <button>Book Now</button>
                          </div>
                        </div>

                        <div className="date-item-list sold-out">
                          <div className="date-sec">
                            <span>September 23 2023 - October 07 2023</span>
                          </div>
                          <div className="status-sec ">
                            <span>Sold out</span>
                          </div>

                          <div className="price-sec">
                            <span>£2,195PP</span>
                          </div>

                          <div className="button-sec">
                            <button>Sold Out</button>
                          </div>
                        </div>

                        <div className="date-item-list available">
                          <div className="date-sec">
                            <span>September 23 2023 - October 07 2023</span>
                          </div>
                          <div className="status-sec">
                            <span>17 Available Spaces</span>
                          </div>

                          <div className="price-sec">
                            <span>£2,195PP</span>
                          </div>

                          <div className="button-sec">
                            <button>Book Now</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`item ${
                      selectedYear === "2024" ? "active" : ""
                    }`}
                  >
                    <div
                      className="item-title"
                      onClick={() => setSelectedYear("2024")}
                    >
                      <div className="day">2024</div>
                      <div className="arrow">
                        <i className="fas fa-angle-down"></i>
                      </div>
                    </div>
                    <div className={`item-body`}>
                      <div className="date-list">
                        <div className="date-item-list sold-out">
                          <div className="date-sec">
                            <span>September 23 2023 - October 07 2023</span>
                          </div>
                          <div className="price-sec">
                            <span>£2,195PP</span>
                          </div>
                          <div className="status-sec">
                            <span>Sold out</span>
                          </div>
                          <div className="button-sec">
                            <button>Sold Out</button>
                          </div>
                        </div>

                        <div className="date-item-list available">
                          <div className="date-sec">
                            <span>September 23 2023 - October 07 2023</span>
                          </div>
                          <div className="price-sec">
                            <span>£2,195PP</span>
                          </div>
                          <div className="status-sec">
                            <span>17 Available Spaces</span>
                          </div>
                          <div className="button-sec">
                            <button>Book Now</button>
                          </div>
                        </div>

                        <div className="date-item-list sold-out">
                          <div className="date-sec">
                            <span>September 23 2023 - October 07 2023</span>
                          </div>
                          <div className="price-sec">
                            <span>£2,195PP</span>
                          </div>
                          <div className="status-sec ">
                            <span>Sold out</span>
                          </div>
                          <div className="button-sec">
                            <button>Sold Out</button>
                          </div>
                        </div>

                        <div className="date-item-list sold-out">
                          <div className="date-sec">
                            <span>September 23 2023 - October 07 2023</span>
                          </div>
                          <div className="price-sec">
                            <span>£2,195PP</span>
                          </div>
                          <div className="status-sec ">
                            <span>Sold out</span>
                          </div>
                          <div className="button-sec">
                            <button>Sold Out</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`item ${
                      selectedYear === "2025" ? "active" : ""
                    }`}
                  >
                    <div
                      className="item-title"
                      onClick={() => setSelectedYear("2025")}
                    >
                      <div className="day">2025</div>
                      <div className="arrow">
                        <i className="fas fa-angle-down"></i>
                      </div>
                    </div>
                    <div className={`item-body`}>
                      <div className="date-list">
                        <div className="date-item-list little">
                          <div className="date-sec">
                            <span>September 23 2023 - October 07 2023</span>
                          </div>
                          <div className="price-sec">
                            <span>£2,195PP</span>
                          </div>
                          <div className="status-sec ">
                            <span>3 Available Spaces</span>
                          </div>
                          <div className="button-sec">
                            <button>Book Now</button>
                          </div>
                        </div>

                        <div className="date-item-list available">
                          <div className="date-sec">
                            <span>September 23 2023 - October 07 2023</span>
                          </div>
                          <div className="price-sec">
                            <span>£2,195PP</span>
                          </div>
                          <div className="status-sec">
                            <span>16 Available Spaces</span>
                          </div>
                          <div className="button-sec">
                            <button>Book Now</button>
                          </div>
                        </div>

                        <div className="date-item-list sold-out">
                          <div className="date-sec">
                            <span>September 23 2023 - October 07 2023</span>
                          </div>
                          <div className="price-sec">
                            <span>£2,195PP</span>
                          </div>
                          <div className="status-sec ">
                            <span>Sold out</span>
                          </div>
                          <div className="button-sec">
                            <button>Sold Out</button>
                          </div>
                        </div>

                        <div className="date-item-list available">
                          <div className="date-sec">
                            <span>September 23 2023 - October 07 2023</span>
                          </div>
                          <div className="price-sec">
                            <span>£2,195PP</span>
                          </div>
                          <div className="status-sec">
                            <span>17 Available Spaces</span>
                          </div>
                          <div className="button-sec">
                            <button>Book Now</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DateAndPriceComponent;
