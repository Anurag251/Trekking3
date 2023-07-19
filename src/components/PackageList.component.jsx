/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import PackageListCardComponent from "./PackageListCard.component";
import { AllDataContext } from "../context/AllData.context";

const PackageListComponent = () => {
  const {
    categoriesDatas,
    selectedCate,
    setSelectedCate,
    setSearchData,
    selectedDatas,
    setSelectedDatas,
  } = useContext(AllDataContext);

  useEffect(() => {
    if (categoriesDatas !== null) {
      categoriesDatas
        .filter((data) => data.id === selectedCate)
        .forEach((data) => {
          setSelectedDatas(data.trips);
        });
    }
  }, [categoriesDatas, selectedCate]);

  return (
    <div className="all-package">
      <div className="packages-list-area">
        <div className="categories">
          <div className="filter-box">
            <div className="filter-title">Filter</div>
            <ul>
              {categoriesDatas &&
                categoriesDatas.map((cate, idx) => (
                  <li key={idx}>
                    <button
                      className={cate.id === selectedCate ? "active" : ""}
                      onClick={() => {
                        setSearchData(null);
                        setSelectedCate(cate.id);
                      }}
                    >
                      {cate.category_name}
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div className="packages-list">
          {selectedDatas &&
            selectedDatas.map((data, idx) => (
              <PackageListCardComponent key={idx} data={data} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default PackageListComponent;
