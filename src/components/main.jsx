import { useSelector } from "react-redux";
import { Loader } from "./";
import { useNavigate } from "react-router";
import moment from "moment";
const Main = () => {
  const navigate = useNavigate()
  const { articles, isLoading } = useSelector((state) => state.article);
  return isLoading ? (
    <Loader />
  ) : (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {articles.map((item) => (
          <div className="col" >
            <div className="card shadow-sm h-100" key={item.id}>
              <img className="h-50 img-fluid" src={item.author.image} alt="" />
              <div className="card-body">
                <p className="card-text">{item.title}</p>
                <p className="card-text ">{item.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-body-secondary">
                    {item.author.username}
                  </small>
                  <small className="text-body-secondary">
                    {moment(item.createdAt).format('DD MMM, YYYY')}
                  </small>
                </div>
              </div>
              <div className="card-footer">
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-success"
                    onClick={()=> navigate(`/article/${item.slug}`) }
                  >
                    View
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Edit
                  </button>
                  <button className="btn btn-outline-danger">Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
