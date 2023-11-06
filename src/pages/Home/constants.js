import createActions from "../../redux/createActions";

const prefix = "@@posts";

export const POSTS = prefix;
export const GET_POSTS_INIT = createActions(prefix, "init");
export const GET_POSTS_SUCCESS = createActions(prefix, "getPostsSuccess");
export const GET_POSTS_FAILURE = createActions(prefix, "getPostsFailure");
// export const GET_ALL_POST = "GET_ALL_POST";
// export const SET_ALL_POST = "SET_ALL_POST";

// export const CREATE_POST = "CREATE_POST";
// export const SET_NEW_POST = "SET_NEW_POST";

// export const SET_COUNT = "SET_COUNT";
