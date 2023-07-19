/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const BlogCardComponent = ({ data }) => {
  return (
    <Link to={`/blogging-details/${data.id}`}>
      <div className="BlogCardComponent">
        <div className="image-area">
          <img
            src={data.image.original_image}
            alt=""
          />
        </div>

        <div className="name">{data.title}</div>

        <button>Read More</button>
      </div>
    </Link>
  );
};

export default BlogCardComponent;
