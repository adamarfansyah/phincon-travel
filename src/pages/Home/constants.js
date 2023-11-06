import createActions from "../../redux/createActions";

const prefix = "@@posts";

export const POSTS = prefix;
export const GET_POSTS_INIT = createActions(prefix, "init");
export const GET_POSTS_SUCCESS = createActions(prefix, "getPostsSuccess");
export const GET_POSTS_FAILURE = createActions(prefix, "getPostsFailure");

export const SEARCH_POST = createActions(prefix, "searchPost");
