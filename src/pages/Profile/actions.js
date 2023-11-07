import { GET_PROFILES_FAILURE, GET_PROFILES_INIT, GET_PROFILES_SUCCESS } from "./constants";

export const getAllProfilesInitAction = () => ({
  type: GET_PROFILES_INIT,
});

export const getAllProfilesSuccessAction = (profiles) => ({
  type: GET_PROFILES_SUCCESS,
  profiles,
});

export const getAllProfilesFailureAction = (error) => ({
  type: GET_PROFILES_FAILURE,
  error,
});
