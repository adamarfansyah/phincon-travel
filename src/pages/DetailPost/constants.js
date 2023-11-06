import createActions from "../../redux/createActions";

const prefix = "@@post";

export const POST = prefix;
export const GET_POST_INIT = createActions(prefix, "init");
export const GET_POST_SUCCESS = createActions(prefix, "getPostSuccess");
export const GET_POST_FAILURE = createActions(prefix, "getPostFailure");
