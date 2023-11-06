// import { GET_ALL_POST, SET_ALL_POST, CREATE_POST, SET_NEW_POST, SET_COUNT } from "./constants";
import { GET_POSTS_FAILURE, GET_POSTS_INIT, GET_POSTS_SUCCESS } from "./constants";

export const initGetAllPosts = () => ({
  type: GET_POSTS_INIT,
});

export const getAllPostsSuccessAction = (posts) => ({
  type: GET_POSTS_SUCCESS,
  posts,
});

export const getAllPostsFailureAction = (error) => ({
  type: GET_POSTS_FAILURE,
  error,
});

// export const setAllPost = (posts) => ({
//   type: SET_ALL_POST,
//   posts,
// });

// export const createPost = (post) => ({
//   type: CREATE_POST,
//   post,
// });

// export const setNewPost = (post) => ({
//   type: SET_NEW_POST,
//   post,
// });

// export const setCount = (value) => ({
//   type: SET_COUNT,
//   value,
// });
