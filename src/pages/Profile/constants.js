import createActions from "../../redux/createActions";

const prefix = "@@profile";

export const PROFILES = prefix;
export const GET_PROFILES_INIT = createActions(prefix, "init");
export const GET_PROFILES_SUCCESS = createActions(prefix, "getProfilesSuccess");
export const GET_PROFILES_FAILURE = createActions(prefix, "getProfilesFailure");
