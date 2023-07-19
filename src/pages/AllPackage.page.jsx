
import { useContext } from "react";
import { AllDataContext } from "../context/AllData.context";
import CardComponent from "../components/Card.component";

const AllPackagePage = () => {
  const { tripDatas } = useContext(AllDataContext);

  return (
    <section className="sec-bg">
      <div className="wrapper">
        <div className="special-package">
          <div className="title">TOP Sacred Himalaya AdVentuRes</div>

          <div className="list">
            {tripDatas &&
              tripDatas
                .map((data, idx) => (
                  <CardComponent key={idx} cardData={data} />
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllPackagePage;
