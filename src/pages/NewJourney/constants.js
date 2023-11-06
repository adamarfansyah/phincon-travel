import createActions from "../../redux/createActions";

const prefix = "@@createPost";

export const CREATE_POST_SUCCESS = createActions(prefix, "createPostSuccess");
export const CREATE_POST_FAILURE = createActions(prefix, "createPostFailure");
