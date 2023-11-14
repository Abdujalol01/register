import { useDispatch, useSelector } from "react-redux";
import { ArticleCard, Loader } from "./";
import {
  articleFailure,
  articleStart,
  articleSuccess,
} from "../slice/articles";
import { ArticleService } from "../service/articles";
import { useEffect } from "react";

const Main = () => {
  const dispatch = useDispatch();
  const getArticle = async () => {
    dispatch(articleStart());
    try {
      const response = await ArticleService.getArticle();
      dispatch(articleSuccess(response.articles));
    } catch (error) {
      dispatch(articleFailure(error));
    }
  };

  useEffect(() => {
    getArticle();
  }, []);
  const { articles, isLoading } = useSelector((state) => state.article);
  return isLoading ? (
    <Loader />
  ) : (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {articles.map((item) => (
          <ArticleCard item={item} getArticle={getArticle} />
        ))}
      </div>
    </div>
  );
};

export default Main;
