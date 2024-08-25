import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  //   console.log(news);

  const { _id, title, image_url, details } = news;
  // console.log(title);

  return (
    <div className="card bg-base-100 mb-16 border shadow-xl">
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div>
          {details.length > 200 ? (
            <p>
              {details.slice(0, 200)}
              <Link to={`/news/${_id}`} className="text-blue-500 font-bold">
                Read More...
              </Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

NewsCard.propTypes = {
  news: PropTypes.node,
  _id: PropTypes.string,
  title: PropTypes.string,
  image_url: PropTypes.string,
  details: PropTypes.string,
};
