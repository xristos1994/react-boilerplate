import { updateArticles, updateIsFetchingArticles } from "./actions";

const reducer = (state = { isFetching: false }, action) => {
  switch (action.type) {
    case updateArticles.type:
      return { ...state, articles: action.payload };
    case updateIsFetchingArticles.type:
      return { ...state, isFetching: action.payload };
    default:
      return state;
  }
};

export const articlesReducer = {
  articles: reducer,
};
