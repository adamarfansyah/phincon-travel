import { callAPI, urls } from "../../domain/api";

export const getBookmarksApi = () => {
  return callAPI(`${urls.bookmarks}`, "GET");
};

export const createBookmarkApi = (bookmark) => {
  return callAPI(`${urls.bookmarks}`, "POST", {}, {}, bookmark);
};

export const deleteBookmarkApi = (bookmarkId) => {
  return callAPI(`${urls.bookmarks}/${bookmarkId}`, "DELETE");
};
