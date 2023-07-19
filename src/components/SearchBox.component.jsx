import { useContext, useState } from "react";

import { AllDataContext } from "../context/AllData.context";
import { apis } from "../utils/apis";
import { useNavigate } from "react-router-dom";
// import LoadingComponent from "./Loading.component";
import {
  IconsCalendar,
  IconsMapMarker,
  IconsSandTime,
} from "./Icons.component";

const SearchBoxComponent = () => {
  const {
    countryDatas,
    setCategoriesDatas,
    selectedDatas,
    setSelectedDatas,
    setMessage,
  } = useContext(AllDataContext);
  const [buttonLoading, setButtonLoading] = useState(false);

  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    country: "",
    duration: "",
    tripYear: "",
  });

  const filterData = (e) => {
    e.preventDefault();
    setButtonLoading(true);

    if (
      formValues.country !== "" ||
      formValues.duration !== "" ||
      formValues.tripYear !== ""
    ) {
      try {
        apis
          .post("/gettrip", {
            country: formValues.country,
            duration: formValues.duration,
            tripyear: formValues.tripYear.split("-")[0],
          })
          .then((res) => {
            setButtonLoading(false);
            if (res.status === 200) {
              if (res.data.data.length) {
                navigate("/search", {
                  state: {
                    searchedData: res.data.data,
                  },
                });
              } else {
                setMessage({
                  message: true,
                  title: "No Package",
                  type: "error",
                  desc: `No Package available for ${formValues.duration}`,
                });
              }
            }
          })
          .catch((err) => {
            setMessage({
              message: true,
              title: err.code,
              type: "error",
              desc: err.message,
            });

            console.log(err);
            setButtonLoading(false);
          });
      } catch (err) {
        console.error(err);
      }
    } else {
      alert("All fields are required");
      setButtonLoading(false);
    }
  };

  return (
    <div className="package-search-area">
      <div className="form-area">
        <form onSubmit={filterData} className="form">
          <div className="package-search">
            <div className="search-group">
              <div className="icon">
                <IconsMapMarker />
              </div>

              <select
                name=""
                id=""
                onChange={(e) =>
                  setFormValues({ ...formValues, country: e.target.value })
                }
              >
                <option value="">Type a Destination</option>

                {countryDatas !== null
                  ? countryDatas.map((countryData, idx) => (
                      <option key={idx} value={countryData.country_name}>
                        {countryData.country_name}
                      </option>
                    ))
                  : "loading..."}
              </select>
            </div>

            <div className="search-group">
              <div className="icon">
                <IconsSandTime />
              </div>

              <select
                name=""
                id=""
                onChange={(e) =>
                  setFormValues({ ...formValues, duration: e.target.value })
                }
              >
                <option value="">Number of days</option>
                <option value="5-7 days">1-7 days</option>
                <option value="7-10 days">7-10 days</option>
                <option value="10-16 days">10-16 days</option>
                <option value="16-30 days">16-30 days</option>
              </select>
            </div>

            <div className="search-group">
              <div className="icon">
                <IconsCalendar />
              </div>

              <input
                type="date"
                placeholder="Select Month"
                onChange={(e) =>
                  setFormValues({ ...formValues, tripYear: e.target.value })
                }
              />
            </div>

            <button className={`${buttonLoading ? "active" : ""}`}>Find</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBoxComponent;
