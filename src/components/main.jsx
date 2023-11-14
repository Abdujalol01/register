import { useDispatch, useSelector } from "react-redux";
import { Loader } from "./";
import { useNavigate } from "react-router";
import moment from "moment";
import { articleFailure, articleStart, articleSuccess } from "../slice/articles";
import { ArticleService } from "../service/articles";
import { useEffect } from "react";

const Main = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const getArticle = async () => {
    dispatch(articleStart())
    try {
      const response = await ArticleService.getArticle();
      dispatch(articleSuccess(response.articles));
    } catch (error) {
      dispatch(articleFailure(error));
    }
  };

  const deleteArticle = async (slug) => {
    try {
      await ArticleService.deleteArticle(slug)
      getArticle()
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getArticle()
  }, [])
  const { articles, isLoading } = useSelector((state) => state.article);
  const { loggedIn, user } = useSelector((state) => state.auth)
  return isLoading ? (
    <Loader />
  ) : (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {articles.map((item) => (
          <div className="col" key={item.slug}>
            <div className="card shadow-sm h-100" >
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
                    onClick={() => navigate(`/article/${item.slug}`)}
                  >
                    View
                  </button>
                  {loggedIn && user.username === item.author.username && (
                    <>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => navigate(`edit-article/${item.slug}`)}
                      >
                        Edit
                      </button>
                      <button className="btn btn-outline-danger"
                        onClick={() => deleteArticle(item.slug)}
                      >Delete</button>
                    </>
                  )}
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
