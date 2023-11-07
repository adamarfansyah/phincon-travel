import createActions from "../../redux/createActions";

const prefix = "@@register";

export const REGISTER = prefix;

export const POST_PROFILE_SUCCESS = createActions(prefix, "postProfileSuccess");
export const POST_PROFILE_FAILURE = createActions(prefix, "postProfileFailure");
