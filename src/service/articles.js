import axios from "./api";

export const ArticleService = {
  async getArticle() {
    const { data } = await axios.get("/articles");
    return data;
  },
  async getArticleDetail(slug) {
    const { data } = await axios.get(`/articles/${slug}`);
    return data;
  },
};
