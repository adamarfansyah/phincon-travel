import createActions from "../../redux/createActions";

const prefix = "@@login";

export const LOGIN = prefix;
export const GET_USER_LOGIN_INIT = createActions(prefix, "init");
export const GET_USER_LOGIN_SUCCESS = createActions(prefix, "getUserLoginSuccess");
export const GET_USER_LOGIN_FAILURE = createActions(prefix, "getUserLoginFailure");

export const POST_USER_LOGIN_SUCCESS = createActions(prefix, "postUserLoginSuccess");
export const POST_USER_LOGIN_FAILURE = createActions(prefix, "postUserLoginFailure");

export const DELETE_USER_LOGIN_SUCCESS = createActions(prefix, "deleteUserLoginSuccess");
export const DELETE_USER_LOGIN_FAILURE = createActions(prefix, "deleteUserLoginFailure");
