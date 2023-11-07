import { POST_PROFILE_FAILURE, POST_PROFILE_SUCCESS } from "./constants";

export const postProfileAction = (profile) => ({
  type: POST_PROFILE_SUCCESS,
  profile,
});

export const postProfileFailure = (error) => ({
  type: POST_PROFILE_FAILURE,
  error,
});
