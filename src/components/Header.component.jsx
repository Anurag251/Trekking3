import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AllDataContext } from "../context/AllData.context";
import Logo from "../assets/images/Camp_to_Summit_Logo.png";
import telephoneImage from "../assets/images/telephone.png";

const HeaderComponent = () => {
  const {
    categoriesDatas,
    setSideNavHidden,
    sideNavHidden,
    contactPopup,
    setContactPopup,
    contactDatas,
    aboutDetails,
  } = useContext(AllDataContext);
  const [selectedCat, setSelectedCat] = useState(null);
  const [selectedCatId, setSelectedCatId] = useState(null);
  const [destinationsSelected, setDestinationsSelected] = useState(false);

  useEffect(() => {
    setSelectedCat(categoriesDatas && categoriesDatas[0]?.trips);
    setSelectedCatId(categoriesDatas && categoriesDatas[0]?.id);
  }, [categoriesDatas]);

  const location = useLocation();

  useEffect(() => {
    setDestinationsSelected(false);
  }, [location]);

  return (
    <React.Fragment>
      <header
        className={
          location.pathname.split("/")[1] === "package-details"
            ? "hideHeader"
            : ""
        }
      >
        <div className="wrapper">
          <div className="header-top">
            <Link to="/">
              <div className="logo">
                <img
                  src={
                    contactDatas &&
                    contactDatas?.branding?.logo !== null &&
                    contactDatas?.branding?.logo !== undefined
                      ? contactDatas?.branding?.logo
                      : Logo
                  }
                  // src={Logo}
                  alt="logo"
                />
              </div>
            </Link>

            <div className="header-other">
              <div className="phoneNumber">
                <a
                  href={`tel:${contactDatas && contactDatas.branding.phone}`}
                  className={`nav-btn`}
                >
                  <div className="icon">
                    <img src={telephoneImage} alt="phone icon" />
                  </div>
                  {contactDatas && contactDatas.branding.phone}
                </a>
                <p>
                  <Link
                    to={`tel:${contactDatas && contactDatas.branding.phone}`}
                  >
                    Direct Call
                  </Link>{" "}
                  or{" "}
                  <Link
                    to={`https://api.whatsapp.com/send?phone=${
                      contactDatas && contactDatas.branding.phone.slice(4)
                    }`}
                    target="blank"
                  >
                    WhatsApp 24/7
                  </Link>
                </p>
              </div>

              <div
                className={`side-nav-btn ${sideNavHidden ? "active" : ""}`}
                onClick={() => setSideNavHidden(!sideNavHidden)}
              >
                <div className="das"></div>
              </div>
            </div>
          </div>

          <div className="inner">
            <ul className="nav-links">
              {contactDatas?.menu[0]?.menu_item.map((data, idx) => {
                if (data?.children?.length) {
                  return (
                    <li className="drop-menu" key={idx}>
                      <button className="nav-btn">
                        {data.label} <i className="fas fa-angle-down"></i>
                      </button>

                      <ul className="drop-down">
                        {data?.children?.map((subMenu, idx) => (
                          <li key={idx}>
                            <Link
                              to={
                                subMenu?.page !== null &&
                                subMenu?.page !== undefined
                                  ? subMenu?.page_id === 7 ||
                                    subMenu?.page_id === 8 ||
                                    subMenu?.page_id === 9
                                    ? `/${subMenu?.page?.slug}`
                                    : `/about/${subMenu?.page?.slug}`
                                  : subMenu?.url === "/blog" ||
                                    subMenu?.url === "/meet-the-team"
                                  ? `${subMenu?.url}`
                                  : subMenu?.url === "/faqs"
                                  ? `${subMenu?.url}`
                                  : `/about${subMenu?.url}`
                              }
                            >
                              <button
                                className={`${
                                  location.pathname ===
                                  (subMenu?.page !== null &&
                                  subMenu?.page !== undefined
                                    ? subMenu?.page_id === 7 ||
                                      subMenu?.page_id === 8 ||
                                      subMenu?.page_id === 9
                                      ? `/${subMenu?.page?.slug}`
                                      : `/about/${subMenu?.page?.slug}`
                                    : subMenu?.url === "/blog" ||
                                      subMenu?.url === "/meet-the-team"
                                    ? `${subMenu?.url}`
                                    : subMenu?.url === "/faqs"
                                    ? `${subMenu?.url}`
                                    : `/about${subMenu?.url}`)
                                    ? "active"
                                    : ""
                                }`}
                              >
                                {subMenu?.label}
                              </button>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                } else {
                  return (
                    <li key={idx}>
                      {data?.url === "/contact" ? (
                        <button
                          onClick={() => setContactPopup(!contactPopup)}
                          className={`nav-btn`}
                        >
                          {data.label}
                        </button>
                      ) : (
                        <Link to={data?.url}>
                          <button
                            className={`nav-btn ${
                              location.pathname === data?.url ? "active" : ""
                            }`}
                          >
                            {data.label}
                          </button>
                        </Link>
                      )}
                    </li>
                  );
                }
              })}

              {/*   <li className="drop-menu">
                <button className="nav-btn">
                  Company <i className="fas fa-angle-down"></i>
                </button>

                <ul className="drop-down">
                  <li>
                    <Link
                      to={`/about/${aboutDetails && aboutDetails[0]?.slug}`}
                    >
                      <button
                        className={`${
                          location.pathname ===
                          `/about/${aboutDetails && aboutDetails[0]?.slug}`
                            ? "active"
                            : ""
                        }`}
                      >
                        {aboutDetails && aboutDetails[0]?.title}
                      </button>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to={`/about/${aboutDetails && aboutDetails[9]?.slug}`}
                    >
                      <button
                        className={`${
                          location.pathname ===
                          `/about/${aboutDetails && aboutDetails[9]?.slug}`
                            ? "active"
                            : ""
                        }`}
                      >
                        {aboutDetails && aboutDetails[9]?.title}
                      </button>
                    </Link>
                  </li>

                  <li>
                    <Link to="/meet-the-team">
                      <button
                        className={`${
                          location.pathname === "/meet-the-team" ? "active" : ""
                        }`}
                      >
                        Meet The Team
                      </button>
                    </Link>
                  </li>

                  <li>
                    <Link to="/blog">
                      <button
                        className={`${
                          location.pathname === "/blog" ? "active" : ""
                        }`}
                      >
                        Blog
                      </button>
                    </Link>
                  </li>
                </ul>
              </li>  */}

              {/*   <li className="drop-menu">
                <button className="nav-btn">
                  Useful Info <i className="fas fa-angle-down"></i>
                </button>

                <ul className="drop-down">
                  {aboutDetails &&
                    aboutDetails
                      .filter(
                        (data) =>
                          data.slug !== "about-us" &&
                          data.page_type !== 4 &&
                          data.slug !== "message-from-the-director" &&
                          data.page_type !== 5 &&
                          data.page_type !== 6
                      )
                      .map((data, idx) => (
                        <li key={idx}>
                          <Link to={`/about/${data.slug}`}>
                            <button
                              className={`${
                                location.pathname === `/about/${data.slug}`
                                  ? "active"
                                  : ""
                              }`}
                            >
                              {data.title}
                            </button>
                          </Link>
                        </li>
                      ))}

                  {aboutDetails &&
                    aboutDetails
                      .filter(
                        (data) => data.page_type === 5 || data.page_type === 6
                      )
                      .map((data, idx) => (
                        <li key={idx}>
                          <Link to={`/${data.slug}`}>
                            <button
                              className={`${
                                location.pathname === `/${data.slug}`
                                  ? "active"
                                  : ""
                              }`}
                            >
                              {data.title}
                            </button>
                          </Link>
                        </li>
                      ))}

                  <li>
                    <Link to="/faqs">
                      <button
                        className={`${
                          location.pathname === "/faqs" ? "active" : ""
                        }`}
                      >
                        FAQ's
                      </button>
                    </Link>
                  </li>
                </ul>
              </li> */}
            </ul>
          </div>
        </div>
      </header>

      {/*  <div className={`big-drop-down ${destinationsSelected ? "active" : ""}`}>
        <div className="link-cagtegory">
          <ul>
            {categoriesDatas &&
              categoriesDatas.map((data, idx) => (
                <li
                  className={`${data.id === selectedCatId ? "active" : ""}`}
                  style={{
                    backgroundImage: `url(${data?.image?.original_image})`,
                  }}
                  key={idx}
                  onClick={() => {
                    setSelectedCat(data.trips);
                    setSelectedCatId(data.id);
                  }}
                >
                  <span>{data.category_name}</span>
                </li>
              ))}
          </ul>
        </div>

        <div className="link-details">
          <div className="link-title">
            <h4>Package</h4>
            <button>
              <Link to="/packages">View All</Link>
            </button>
          </div>

          <ul>
            {selectedCat &&
              selectedCat
                .filter((data, idx) => idx < 15)
                .map((data, idx) => (
                  <li key={idx}>
                    <Link to={`/package-details/${data.id}`}>{data.title}</Link>
                  </li>
                ))}
          </ul>
        </div>
      </div> */}
    </React.Fragment>
  );
};

export default HeaderComponent;
