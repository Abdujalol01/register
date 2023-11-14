import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  articles: [],
  getArticlesDetail: null,
  error: null,
};

export const articleSlices = createSlice({
  name: "article",
  initialState,
  reducers: {
    articleStart: (state) => {
      state.isLoading = true;
    },
    articleSuccess: (state, action) => {
      state.isLoading = false;
      state.articles = action.payload;
    },
    articleFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    getArticleStart: (state) => {
      state.isLoading = true;
    },
    getArticleSuccess: (state, action) => {
      state.isLoading = false;
      state.getArticlesDetail = action.payload;
    },
    getArticleFailure: (state) => {
      state.isLoading = false;
    },
    postArticleStart: (state) => {
      state.isLoading = true;
    },
    postArticleSuccess: (state) => {
      state.isLoading = false;
    },
    postArticleFailure: (state) => {
      state.isLoading = false;
      state.error = "hey bro sth went wrong"
    },
  },
});

export const {
  articleFailure,
  articleStart,
  articleSuccess,
  getArticleFailure,
  getArticleSuccess,
  getArticleStart,
  postArticleFailure,
  postArticleStart,
  postArticleSuccess
} = articleSlices.actions;

export default articleSlices.reducer;
