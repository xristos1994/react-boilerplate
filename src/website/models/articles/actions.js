import { Action, Actions } from "@core/actions-engine";

export const fetchArticles = Actions("ARTICLES", "FETCH_ARTICLES");

export const updateArticles = Action("ARTICLES", "UPDATE_ARTICLES");

export const updateIsFetchingArticles = Action(
  "ARTICLES",
  "UPDATE_IS_FETCHING_ARTICLES",
);
